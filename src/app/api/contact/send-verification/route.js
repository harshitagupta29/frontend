import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export async function POST(req) {
  const { email } = await req.json();

  console.log("Received email:", email);

  const otp = Math.floor(100000 + Math.random() * 900000);

  global.generatedOTP = otp;
  global.userEmail = email;

  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    let mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP is ${otp}`,
    };

    await transporter.sendMail(mailOptions);

    console.log("OTP sent to:", email, "OTP:", otp);

    return new Response(JSON.stringify({ message: "OTP sent!" }), {
      status: 200,
    });
  } catch (err) {
    console.error("OTP sending failed:", err);
    return new Response(JSON.stringify({ error: "Failed to send OTP" }), {
      status: 500,
    });
  }
}
