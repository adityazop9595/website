import {configDotenv} from "dotenv"
configDotenv()
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import fs from 'fs';
import multer from 'multer';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

import ServicesModel from './Model/ServiceModel.js';
import PriceingControler from './Controlers/PriceingControler.js';
import PostServiceControler from './Controlers/PostServiceControler.js';
import SendMailControler from './Controlers/SendMailControler.js';
import main from './mongodbconnection.js';
// import { addOrder, getAllOrders, markOrderCompleted } from './Controlers/ServiceOrderControler.js';
// import ServiceOrderModel from './Model/ServiceOrderModel.js';
// // import PricingModel from './Model/PricingModel.js';
// // __dirname workaround for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT=process.env.PORT || 8000;
// Setup
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Connect to MongoDB
main().catch((err) => {
  console.log(err);
});

// Multer config
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage });

// Socket.IO events
io.on('connection', (socket) => {
  console.log('🟢 WebSocket client connected');
  socket.on('disconnect', () => {
    console.log('🔴 Client disconnected');
  });
});

// --- ROUTES ---

app.post('/api/services', upload.single('image'), async (req, res) => {
  try {
    await PostServiceControler(req, res);
    io.emit('servicesUpdated');
  } catch (err) {
    console.error(err);
  }
});

app.get('/api/services', async (req, res) => {
  const services = await ServicesModel.find();
  res.json({
    statusCode:200,
    services,
    status:"ok"
  });
});

app.put('/api/services/:id', upload.single('image'), async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  try {
    const existingService = await ServiceReadMoreModel.findById(id);
    if (!existingService)
      return res.status(404).json({ error: 'Service not found' });

    let hasChanges = false;

    if (title && title !== existingService.title) {
      existingService.title = title;
      hasChanges = true;
    }

    if (description && description !== existingService.description) {
      existingService.description = description;
      hasChanges = true;
    }

    if (req.file) {
      if (existingService.image) {
        const oldPath = path.join(__dirname, existingService.image);
        fs.unlink(oldPath, (err) => {
          if (err) console.warn('Old image delete failed:', err.message);
        });
      }
      existingService.image = `/uploads/${req.file.filename}`;
      hasChanges = true;
    }

    if (!hasChanges) {
      return res.status(200).json({ message: 'No changes made' });
    }

    const updatedService = await existingService.save();
    res.json(updatedService);
    io.emit('servicesUpdated');
  } catch (error) {
    console.error('Update Error:', error);
    res.status(500).json({ error: 'Failed to update service' });
  }
});



app.delete('/api/services/:id', async (req, res) => {
  await ServicesModel.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
  io.emit('servicesUpdated');
});

app.get('/api/pricing', PriceingControler);
app.post('/send-mail', SendMailControler);


// Start server
server.listen(PORT, () =>
  console.log('🚀 Server running on http://localhost:5000')
);
