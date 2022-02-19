import { IRequestQuote } from "./../../interfaces/IRequestQuote";
import type { NextApiRequest, NextApiResponse } from "next";
import { ISendEmailResponse } from "@/interfaces";
import nodemailer from "nodemailer";

export default async function sendEmail(
  req: NextApiRequest,
  res: NextApiResponse<ISendEmailResponse>
) {
  let { email, name, phone, subject, message }: IRequestQuote = req.body;

  if (!email || !email.trim().length) {
    return res
      .status(400)
      .json({ message: "Please provide an email address." });
  }
  if (!message || !message.trim().length) {
    return res.status(400).json({ message: "Please provide a message." });
  }
  if (!name || !name.trim().length) {
    return res.status(400).json({ message: "Please provide a name." });
  }

  const formattedMessage = `Message From: ${name}
  Email: ${email}
  Phone: ${phone}
  Subject: ${subject}
  Message: ${message}`;

  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: true,
    auth: {
      user: process.env.MAIL_AUTH_USER,
      pass: process.env.MAIL_AUTH_PASS,
    },
  });

  const mail = {
    to: process.env.MAIL_TO,
    from: process.env.MAIL_FROM,
    replyTo: email,
    subject: `Message from: ${name} - ${subject}`,
    text: message,
    html: `<p>${message.replace(/(?:\r\n|\r|\n)/g, "<br>")}</p>`,
  };

  try {
    await transporter.sendMail(mail);

    return res.status(200).json({
      message:
        "Success! 🎉 We received your request. We will contact you soon.",
    });
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred. Please try again later.",
    });
  }
}