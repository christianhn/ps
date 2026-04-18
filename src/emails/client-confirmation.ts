interface ClientConfirmationParams {
  name: string;
  serviceLabel: string;
}

export const clientConfirmationTemplate = ({ name, serviceLabel }: ClientConfirmationParams) => `
<!DOCTYPE html>
<html>
  <head>
    <style>
      body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #fbfbfb; color: #1b1b1b; margin: 0; padding: 0; }
      .container { max-width: 600px; margin: 40px auto; background-color: #ffffff; border: 1px solid rgba(26,25,22,0.1); border-radius: 24px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.04); }
      .logo { padding: 40px 40px 20px 40px; font-weight: 700; font-size: 20px; color: #1b1b1b; }
      .content { padding: 0 40px 40px 40px; line-height: 1.8; color: #4D4D4D; font-size: 16px; }
      .highlight { color: #0084FF; font-weight: 600; }
      .footer { padding: 30px 40px; background-color: #fbfbfb; border-top: 1px solid #EDEDED; text-align: left; }
      .signature { margin-top: 20px; color: #1b1b1b; font-weight: 700; }
      .role { color: #666666; font-size: 14px; font-weight: 400; margin-top: 4px; }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="logo">Mario Catena</div>
      <div class="content">
        <p>Hola ${name},</p>
        <p>Muchas gracias por contactar conmigo. He recibido correctamente tu solicitud de información sobre <span class="highlight">${serviceLabel}</span>.</p>
        <p>Te escribo para confirmarte que he leído tu mensaje y que <strong>me pondré en contacto contigo lo antes posible</strong> a través del email o teléfono que me has facilitado para hablar con más detalle.</p>
        <p>Espero que podamos conocernos pronto y empezar a trabajar juntos.</p>

        <div style="margin-top: 32px; padding: 16px; background-color: #f8f9fa; border-radius: 12px; font-size: 14px; color: #666; line-height: 1.6;">
          <strong>Nota importante:</strong> Por favor, evita enviar correos a <a style="color: #666; text-decoration: none;">hola@mariocatena.com</a> ya que no está operativa. Para cualquier duda, puedes responder al email <a href="mailto:mcatena@cop.es">mcatena@cop.es</a>.
        </div>
        
        <div class="signature">
          Mario Catena
          <div class="role">Psicólogo Sanitario</div>
        </div>
      </div>
      <div class="footer">
        <p style="margin: 0; font-size: 13px; color: #999;">Has recibido este email porque completaste el formulario de contacto en mariocatena.com. Si no has sido tú, puedes ignorar este mensaje.</p>
      </div>
    </div>
  </body>
</html>
`;
