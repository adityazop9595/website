import ServicesModel from "../Model/ServiceModel.js";

async function PostServiceControler(req,res) {
    const { title, description } = req.body;
  const imagePath = req.file ? `/uploads/${req.file.filename}` : '';
  const service = new ServicesModel({ title, description, image: imagePath });
  await service.save();
  res.json(service);

}
 
export default PostServiceControler;