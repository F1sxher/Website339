// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from "nodemailer";

type Data = {
  status: "success" | "error";
  message: string;
  replyEmail?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { name, subject, content, email, priority } = req.body
  if (!content) return res.status(400).json({ status: "error", message: "invalid, empty, or no content" })
  if (!email) return res.status(400).json({ status: "error", message: "invalid, empty, or no reply email" })

  const transporter = nodemailer.createTransport({
    host: process.env["mail.host"],
    port: process.env["mail.port"] || 587,
    secure: (process.env["mail.port"] == "465"),
    auth: {
      user: process.env["mail.user"],
      pass: process.env["mail.pass"],
    }
  });

  try { 
    await transporter.sendMail({
      from: `"Kilroy Web Mailer" <${process.env["mail.user"]}>`,
      to: "kilroyrobotics@gmail.com",
      replyTo: email,
      subject: `Kilroy Contact - ${name && subject? `(${name}) ${subject}` : name || subject ? `${name || subject}` : email}`,
      html: `<table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF;" width="100%">
      <tbody>
      <tr>
      <td>
      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
      <tbody>
      <tr>
      <td>
      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 500px;" width="500">
      <tbody>
      <tr>
      <td class="column" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
      <table border="0" cellpadding="0" cellspacing="0" class="heading_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
      <tbody><tr>
      <td style="width:100%;text-align:center;">
      <h1 style="margin: 0; color: #555555; font-size: 40px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; line-height: 120%; text-align: center; direction: ltr; font-weight: normal; letter-spacing: normal; margin-top: 0; margin-bottom: 0;"><strong>Kilroy Website Message</strong></h1>
      </td>
      </tr>
      </tbody></table>
      <table border="0" cellpadding="0" cellspacing="0" class="heading_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
      <tbody><tr>
      <td style="width:100%;text-align:center;">
      <h2 style="margin: 0; color: #555555; font-size: 18px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; line-height: 120%; text-align: left; direction: ltr; font-weight: normal; letter-spacing: normal; margin-top: 0; margin-bottom: 0;">Reply Address:&nbsp;<strong>${email}</strong></h2>
      <h2 style="margin: 0; color: #555555; font-size: 18px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; line-height: 120%; text-align: left; direction: ltr; font-weight: normal; letter-spacing: normal; margin-top: 0; margin-bottom: 0;">Priority:&nbsp;<strong>${priority}</strong></h2>
      </td>
      </tr>
      </tbody></table>
      <table border="0" cellpadding="10" cellspacing="0" class="divider_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
      <tbody><tr>
      <td>
      <div align="center">
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
      <tbody><tr>
      <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #BBBBBB;"><span>&hairsp;</span></td>
      </tr>
      </tbody></table>
      </div>
      </td>
      </tr>
      </tbody></table>
      <table border="0" cellpadding="10" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
      <tbody><tr>
      <td>
      <div style="font-family: sans-serif">
      <div style="font-size: 14px; mso-line-height-alt: 16.8px; color: #555555; line-height: 1.2; font-family: Arial, Helvetica Neue, Helvetica, sans-serif;">
      <p style="margin: 0; font-size: 14px;">${content}</p>
      </div>
      </div>
      </td>
      </tr>
      </tbody></table>
      </td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      
      </td>
      </tr>
      </tbody>
      </table>`,  
    })

    // res.status(200).json({ status: "success", message: "Email Sent" })
    res.redirect(307, "/success?type=Contact")
  } catch {
    // res.status(500).json({ status: "error", message: "unknown server error" })
    res.redirect(307, "/err/500")
  }
}
