import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const {
  SMTP_SERVER_HOST,
  SMTP_SERVER_USERNAME,
  SMTP_SERVER_PASSWORD,
  SITE_MAIL_RECIEVER,
} = process.env;

const transporter = nodemailer.createTransport({
  host: SMTP_SERVER_HOST || "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: { user: SMTP_SERVER_USERNAME, pass: SMTP_SERVER_PASSWORD },
});

type SendArgs = {
  email: string;
  sendTo?: string;
  subject: string;
  text: string;
  html?: string;
};

async function sendMail({ email, sendTo, subject, text, html }: SendArgs) {
  await transporter.verify();
  return transporter.sendMail({
    from: SMTP_SERVER_USERNAME,
    replyTo: email,
    to: sendTo || SITE_MAIL_RECIEVER,
    subject,
    text,
    html: html ?? "",
  });
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<SendArgs> & {
      subject?: string;
      text?: string;
    };
    if (!body.email || !body.subject || !body.text) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }
    const info = await sendMail(body as SendArgs);
    return NextResponse.json(
      { ok: true, messageId: info.messageId ?? null },
      { status: 200 }
    );
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Failed to send email";
    console.error("Contact POST error:", e);
    return NextResponse.json({ ok: false, error: msg }, { status: 500 });
  }
}
