const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

const enviarMail = async (to, subject, html) => {
  try {
    await transporter.sendMail({
      from: `"TechStore" <${process.env.MAIL_USER}>`,
      to,
      subject,
      html,
    });
    console.log(`✅ Mail enviado a ${to}`);
  } catch (error) {
    console.error('❌ Error al enviar mail:', error.message);
  }
};

const enviarMailBienvenida = (nombre, email) => {
  enviarMail(
    email,
    '¡Bienvenido a TechStore! 🚀',
    `<div style="font-family:Arial,sans-serif;background:#0a0a0f;color:#e8e8f0;padding:40px;border-radius:12px;">
      <h1 style="color:#00d4ff;">TECH<span style="color:#e8e8f0;">STORE</span></h1>
      <h2 style="color:#00d4ff;">¡Hola ${nombre}! 👋</h2>
      <p>Tu cuenta fue creada exitosamente. Ya podés explorar nuestro catálogo.</p>
      <a href="${process.env.FRONTEND_URL}/productos" style="background:#00d4ff;color:#000;padding:12px 30px;border-radius:8px;text-decoration:none;font-weight:bold;">Ver productos</a>
    </div>`
  );
};

const enviarMailPedido = (email, nombre, items, total) => {
  const itemsHTML = items.map(i =>
    `<tr>
      <td style="padding:8px;border-bottom:1px solid #333;">${i.nombre}</td>
      <td style="padding:8px;border-bottom:1px solid #333;text-align:center;">${i.cantidad}</td>
      <td style="padding:8px;border-bottom:1px solid #333;text-align:right;">$${(i.precio * i.cantidad).toLocaleString('es-AR')}</td>
    </tr>`
  ).join('');

  enviarMail(
    email,
    '✅ Confirmación de tu pedido — TechStore',
    `<div style="font-family:Arial,sans-serif;background:#0a0a0f;color:#e8e8f0;padding:40px;border-radius:12px;">
      <h1 style="color:#00d4ff;">TECH<span style="color:#e8e8f0;">STORE</span></h1>
      <h2 style="color:#10b981;">¡Pedido confirmado! ✅</h2>
      <p>Hola <strong>${nombre}</strong>, recibimos tu pedido correctamente.</p>
      <table style="width:100%;border-collapse:collapse;margin:20px 0;">
        <thead><tr style="background:#1a1a27;">
          <th style="padding:10px;text-align:left;color:#00d4ff;">Producto</th>
          <th style="padding:10px;text-align:center;color:#00d4ff;">Cantidad</th>
          <th style="padding:10px;text-align:right;color:#00d4ff;">Subtotal</th>
        </tr></thead>
        <tbody>${itemsHTML}</tbody>
        <tfoot><tr>
          <td colspan="2" style="padding:12px;font-weight:bold;color:#00d4ff;">TOTAL</td>
          <td style="padding:12px;text-align:right;font-weight:bold;">$${total.toLocaleString('es-AR')}</td>
        </tr></tfoot>
      </table>
      <p style="color:#6b7280;">¡Gracias por tu compra!</p>
    </div>`
  );
};

const enviarMailRecuperacion = (nombre, email) => {
  enviarMail(
    email,
    'Recuperación de contraseña — TechStore',
    `<div style="font-family:Arial,sans-serif;background:#0a0a0f;color:#e8e8f0;padding:40px;border-radius:12px;">
      <h1 style="color:#00d4ff;">TECH<span style="color:#e8e8f0;">STORE</span></h1>
      <h2 style="color:#00d4ff;">Hola ${nombre} 👋</h2>
      <p>Recibimos una solicitud para restablecer tu contraseña.</p>
      <p style="color:#6b7280;">Si no fuiste vos, ignorá este mensaje.</p>
    </div>`
  );
};

module.exports = { enviarMailBienvenida, enviarMailPedido, enviarMailRecuperacion };