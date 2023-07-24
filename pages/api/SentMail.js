import nodemailer from "nodemailer";

export default async function SentMail (req, res){
  const { name, email, phone, message } = req.body;

  // Create a Nodemailer transporter
  console.log("name");
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "addisuyafet321@gmail.com",
      pass: process.env.Password,
    },
  });

  // Define the email options
  const mailOptions = {
    from: "addisuyafet321@gmail.com",
    to: "yafetaddisu123@gmail.com",
    subject: "New Contact Form Submission",
    text: `Name: ${name} \nEmail: ${email} \nphone: ${phone} \nMessage: ${message}`,
  };
  console.log(mailOptions);
  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    res.json("Email Sent Succesfully")
  } catch (error) {
    res.json("Failed to send email")
  }
};
