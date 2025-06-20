import { configDotenv} from 'dotenv'
import nodemailer from 'nodemailer'
configDotenv();
export default async function SendMailControler(req,res){
  // try{
  // let data=req.body;
  // console.log(req.body)
  let {email,name,phone,message}=req.body;
  // console.log(data)
  const auth=nodemailer.createTransport({
    // host: "smtp.ethereal.email",
    service:"gmail",
    secure:true,
    port:465,
    logger:true,
    debug:true,
    secureConnection:false,
    auth:{
        user:process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASS
            }
});
const mailOptions = {
    from: `"${name}" ${email} `,
    to: process.env.EMAIL_USER,
    subject: 'New Contact Form Submission',
    replyTo: email,
    html: `
     <div style="font-family: 'Segoe UI', Roboto, sans-serif; max-width: 640px; margin: auto; padding: 32px; background-color: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);">
  <header style="margin-bottom: 24px; border-bottom: 1px solid #e5e7eb; padding-bottom: 16px;">
    <h2 style="font-size: 22px; font-weight: 600; color: #1f2937; margin: 0;">📩 New Contact Form Submission</h2>
  </header>

  <section style="line-height: 1.6; color: #374151;">
    <div style="margin-bottom: 16px;">
      <strong style="display: inline-block; width: 80px; color: #1f2937;">Name:</strong>
      <span>${name}</span>
    </div>
    <div style="margin-bottom: 16px;">
      <strong style="display: inline-block; width: 80px; color: #1f2937;">Email:</strong>
      <span>${email}</span>
    </div>
    <div style="margin-bottom: 16px;">
      <strong style="display: inline-block; width: 80px; color: #1f2937;">Phone:</strong>
      <span>${phone}</span>
    </div>
    <div style="margin-top: 24px;">
      <strong style="display: block; margin-bottom: 8px; color: #1f2937;">Message:</strong>
      <div style="padding: 16px; background-color: #f9fafb; border-radius: 8px; border: 1px solid #e5e7eb; white-space: pre-line;">
        ${message}
      </div>
    </div>
  </section>

  <footer style="margin-top: 32px; font-size: 12px; color: #6b7280; text-align: center; border-top: 1px solid #e5e7eb; padding-top: 16px;">
    Sent via <strong>MV Tech</strong> contact form
  </footer>
</div>

    `
  };
  try{
    auth.sendMail(mailOptions,(error,emailres)=>{
      if(error){
        return res.json({
          statusCode:404,
          send_mail:false
         }) 
          console.log(error);
      }else{
         return res.json({
          statusCode:200,
          send_mail:true
         })
          // console.log("sucesses!");
      }
    })
    
  }catch(error){
    return res.json({
      statusCode:500,
      error:'Internal error something went wrong..!'
    })
  }
}