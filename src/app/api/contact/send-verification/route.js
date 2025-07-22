import nodemailer from "nodemailer";

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
        user: "harshitagupta2906@gmail.com", // your Gmail
        pass: "cpinouqzqivrbwcy",           // your Gmail App Password
      },
    });

    let mailOptions = {
      from: "harshitagupta2906@gmail.com",
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
