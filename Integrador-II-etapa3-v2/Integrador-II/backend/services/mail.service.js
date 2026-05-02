const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

// Mail de bienvenida al registrarse
const enviarMailBienvenida = async (nombre, email) => {
  try {
    await transporter.sendMail({
      from: `"TechStore" <${process.env.MAIL_USER}>`,
      to: email,
      subject: '¡Bienvenido a TechStore! 🚀',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0f; color: #e8e8f0; padding: 40px; border-radius: 12px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #00d4ff; font-size: 2rem; margin: 0;">TECH<span style="color: #e8e8f0;">STORE</span></h1>
          </div>
          <h2 style="color: #00d4ff;">¡Hola ${nombre}! 👋</h2>
          <p>Tu cuenta fue creada exitosamente. Ya podés explorar nuestro catálogo y realizar compras.</p>
          <div style="text-align: center; margin: 30px 0;">
            <a href="${process.env.FRONTEND_URL || 'https://techstore-5038.onrender.com'}/productos"
               style="background: #00d4ff; color: #000; padding: 12px 30px; border-radius: 8px; text-decoration: none; font-weight: bold;">
              Ver productos
            </a>
          </div>
          <p style="color: #6b7280; font-size: 0.85rem; text-align: center;">TechStore © 2026 — Todos los derechos reservados</p>
        </div>
      `,
    });
    console.log(`✅ Mail de bienvenida enviado a ${email}`);
  } catch (error) {
    console.error('❌ Error al enviar mail de bienvenida:', error.message);
  }
};

// Mail de confirmación de pedido
const enviarMailPedido = async (email, nombre, items, total) => {
  try {
    const itemsHTML = items.map(item => `
      <tr>
        <td style="padding: 8px; border-bottom: 1px solid #1a1a27;">${item.nombre}</td>
        <td style="padding: 8px; border-bottom: 1px solid #1a1a27; text-align: center;">${item.cantidad}</td>
        <td style="padding: 8px; border-bottom: 1px solid #1a1a27; text-align: right;">$${(item.precio * item.cantidad).toLocaleString('es-AR')}</td>
      </tr>
    `).join('');

    await transporter.sendMail({
      from: `"TechStore" <${process.env.MAIL_USER}>`,
      to: email,
      subject: '✅ Confirmación de tu pedido — TechStore',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0f; color: #e8e8f0; padding: 40px; border-radius: 12px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #00d4ff; font-size: 2rem; margin: 0;">TECH<span style="color: #e8e8f0;">STORE</span></h1>
          </div>
          <h2 style="color: #10b981;">¡Pedido confirmado! ✅</h2>
          <p>Hola <strong>${nombre || 'cliente'}</strong>, recibimos tu pedido correctamente.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <thead>
              <tr style="background: #1a1a27;">
                <th style="padding: 10px; text-align: left; color: #00d4ff;">Producto</th>
                <th style="padding: 10px; text-align: center; color: #00d4ff;">Cantidad</th>
                <th style="padding: 10px; text-align: right; color: #00d4ff;">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              ${itemsHTML}
            </tbody>
            <tfoot>
              <tr>
                <td colspan="2" style="padding: 12px; font-weight: bold; color: #00d4ff;">TOTAL</td>
                <td style="padding: 12px; text-align: right; font-weight: bold; font-size: 1.2rem;">$${total.toLocaleString('es-AR')}</td>
              </tr>
            </tfoot>
          </table>

          <p style="color: #6b7280;">Nos pondremos en contacto para coordinar la entrega. ¡Gracias por tu compra!</p>
          <p style="color: #6b7280; font-size: 0.85rem; text-align: center; margin-top: 30px;">TechStore © 2026 — Todos los derechos reservados</p>
        </div>
      `,
    });
    console.log(`✅ Mail de pedido enviado a ${email}`);
  } catch (error) {
    console.error('❌ Error al enviar mail de pedido:', error.message);
  }
};

// Mail de recuperación de contraseña
const enviarMailRecuperacion = async (nombre, email) => {
  try {
    await transporter.sendMail({
      from: `"TechStore" <${process.env.MAIL_USER}>`,
      to: email,
      subject: 'Recuperación de contraseña — TechStore',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0f; color: #e8e8f0; padding: 40px; border-radius: 12px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #00d4ff; font-size: 2rem; margin: 0;">TECH<span style="color: #e8e8f0;">STORE</span></h1>
          </div>
          <h2 style="color: #00d4ff;">Hola ${nombre} 👋</h2>
          <p>Recibimos una solicitud para restablecer la contraseña de tu cuenta.</p>
          <p style="color: #6b7280;">Si no fuiste vos, podés ignorar este mensaje. Tu contraseña no cambiará.</p>
          <p>Para restablecer tu contraseña, contactate con nuestro soporte respondiendo este mail.</p>
          <p style="color: #6b7280; font-size: 0.85rem; text-align: center; margin-top: 30px;">TechStore © 2026 — Todos los derechos reservados</p>
        </div>
      `,
    });
    console.log(`✅ Mail de recuperación enviado a ${email}`);
  } catch (error) {
    console.error('❌ Error al enviar mail de recuperación:', error.message);
  }
};

module.exports = { enviarMailBienvenida, enviarMailPedido, enviarMailRecuperacion };
