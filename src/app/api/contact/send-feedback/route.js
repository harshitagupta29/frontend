import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export async function POST(req) {
    const formData = await req.json();
    const { first, last, email, phone, country, message } = formData;

    console.log("Received feedback from:", email);

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
            to: process.env.OWNER_EMAIL, // The email where you want to receive feedback
            subject: "New Contact Form Submission",
            html: `
 <h2>New Contact Form Submission</h2>
 <p><strong>Name:</strong> ${first} ${last}</p>
 <p><strong>Email:</strong> ${email}</p>
 <p><strong>Phone:</strong> ${country} ${phone}</p>
 <p><strong>Message:</strong></p>
 <p>${message}</p>
 <br>
 <p>Sent from: Contact Form</p>
 `,
        };

        await transporter.sendMail(mailOptions);

        console.log("Feedback sent successfully from:", email);

        return new Response(
            JSON.stringify({ message: "Feedback sent successfully!" }),
            { status: 200 }
        );
    } catch (err) {
        console.error("Failed to send feedback:", err);
        return new Response(
            JSON.stringify({ error: "Failed to send feedback" }),
            { status: 500 }
        );
    }
}