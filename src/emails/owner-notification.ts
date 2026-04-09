interface OwnerNotificationParams {
  name: string;
  email: string;
  phone?: string;
  serviceLabel: string;
  message: string;
}

export const ownerNotificationTemplate = ({ name, email, phone, serviceLabel, message }: OwnerNotificationParams) => `
<!DOCTYPE html>
<html>
  <head>
    <style>
      body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #fbfbfb; color: #1b1b1b; margin: 0; padding: 0; }
      .container { max-width: 600px; margin: 20px auto; background-color: #ffffff; border: 1px solid rgba(26,25,22,0.1); border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.03); }
      .header { background-color: #0084FF; color: #ffffff; padding: 30px; text-align: left; }
      .header h1 { margin: 0; font-size: 20px; font-weight: 700; }
      .content { padding: 30px; line-height: 1.6; }
      .data-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
      .data-table td { padding: 12px 0; border-bottom: 1px solid #EDEDED; vertical-align: top; }
      .label { font-weight: 700; color: #4D4D4D; width: 100px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; }
      .value { color: #1b1b1b; font-size: 16px; }
      .message-box { background-color: #fbfbfb; border-radius: 8px; padding: 20px; border-left: 4px solid #0084FF; margin-top: 20px; }
      .footer { background-color: #EDEDED; padding: 20px; text-align: center; color: #666666; font-size: 12px; }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>Nueva solicitud de consulta</h1>
      </div>
      <div class="content">
        <table class="data-table">
          <tr>
            <td class="label">Nombre</td>
            <td class="value">${name}</td>
          </tr>
          <tr>
            <td class="label">Email</td>
            <td class="value">${email}</td>
          </tr>
          <tr>
            <td class="label">Teléfono</td>
            <td class="value">${phone || "No facilitado"}</td>
          </tr>
          <tr>
            <td class="label">Servicio</td>
            <td class="value">${serviceLabel}</td>
          </tr>
        </table>
        
        <h3 style="color: #4D4D4D; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 10px;">Mensaje:</h3>
        <div class="message-box">
          ${message.replace(/\n/g, '<br>')}
        </div>
      </div>
      <div class="footer">
        Enviado desde el formulario de contacto de mariocatena.com
      </div>
    </div>
  </body>
</html>
`;
