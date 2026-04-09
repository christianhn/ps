import type { APIRoute } from "astro";
import { Resend } from "resend";
import { ownerNotificationTemplate } from "../emails/owner-notification";
import { clientConfirmationTemplate } from "../emails/client-confirmation";

export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const GET: APIRoute = async () => {
  return new Response(JSON.stringify({ message: "Endpoint de contacto activo. Por favor, usa POST." }), { status: 200 });
}

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  
  const name = data.get("name")?.toString();
  const email = data.get("email")?.toString();
  const phone = data.get("phone")?.toString();
  const serviceId = data.get("service")?.toString();
  const message = data.get("message")?.toString();
  const honeypot = data.get("website")?.toString();

  if (honeypot) {
    return new Response(JSON.stringify({ message: "¡Mensaje enviado con éxito!" }), { status: 200 });
  }

  const ownerEmail = import.meta.env.OWNER_EMAIL || "mcatena@cop.es";
  const fromEmail = import.meta.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

  const services: Record<string, string> = {
    individual: "Terapia Individual / Adultos",
    adolescentes: "Terapia para Adolescentes",
    pareja: "Terapia de Pareja o Familia",
    estudio: "Técnicas de estudio",
    otro: "Otro / Duda general",
  };

  const serviceLabel = services[serviceId || "otro"] || "No especificado";

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ message: "Faltan campos requeridos." }), { status: 400 });
  }

  try {
    // 1. AVISO AL PROPIETARIO
    await resend.emails.send({
      from: `Mario Catena Web <${fromEmail}>`,
      to: [ownerEmail],
      subject: `Nueva consulta: ${serviceLabel} - ${name}`,
      html: ownerNotificationTemplate({ name, email, phone, serviceLabel, message }),
    });

    // 2. CONFIRMACIÓN AL CLIENTE
    await resend.emails.send({
      from: `Mario Catena <${fromEmail}>`,
      to: [email],
      replyTo: ownerEmail,
      subject: `He recibido tu mensaje - Mario Catena`,
      html: clientConfirmationTemplate({ name, serviceLabel }),
    });

    return new Response(JSON.stringify({ message: "¡Mensaje enviado con éxito!" }), { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ message: "Error al enviar el mensaje." }), { status: 500 });
  }
};

