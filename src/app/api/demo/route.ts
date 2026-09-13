import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const MAX_LEN = 200;

function clean(value: unknown): string {
  return typeof value === "string" ? value.trim().slice(0, MAX_LEN) : "";
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  const nombre = clean(body?.nombre);
  const tienda = clean(body?.tienda);
  const whatsapp = clean(body?.whatsapp);
  const correo = clean(body?.correo);

  if (!nombre || !tienda || !whatsapp) {
    return NextResponse.json(
      { error: "Nombre, tienda y WhatsApp son obligatorios." },
      { status: 400 },
    );
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;
  const recipient = process.env.DEMO_RECIPIENT_EMAIL || "soporteit@gmail.com";

  if (!gmailUser || !gmailPass) {
    console.error(
      "Faltan las variables de entorno GMAIL_USER / GMAIL_APP_PASSWORD.",
    );
    return NextResponse.json(
      { error: "El envío de correo no está configurado todavía." },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: gmailUser, pass: gmailPass },
  });

  try {
    await transporter.sendMail({
      from: gmailUser,
      to: recipient,
      replyTo: correo || undefined,
      subject: `Nueva solicitud de demo — ${tienda}`,
      text: [
        `Nombre: ${nombre}`,
        `Tienda: ${tienda}`,
        `WhatsApp: ${whatsapp}`,
        `Correo: ${correo || "(no proporcionado)"}`,
      ].join("\n"),
    });
  } catch (err) {
    console.error("Error enviando el correo de solicitud de demo:", err);
    return NextResponse.json(
      { error: "No se pudo enviar la solicitud. Intenta de nuevo." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
