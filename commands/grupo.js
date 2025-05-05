module.exports = {
  name: 'grupo',
  alias: ['group'],
  description: 'Abrir o cerrar el grupo',
  category: 'admin',
  async execute(m, { conn, args, isAdmin, isGroup, isBotAdmin }) {
    if (!isGroup) return m.reply('❌ Este comando solo funciona en grupos.');
    if (!isAdmin) return m.reply('❌ Solo los admins pueden usar este comando.');
    if (!isBotAdmin) return m.reply('❌ El bot necesita ser administrador.');

    const accion = args[0]?.toLowerCase();

    if (accion === 'abrir') {
      await conn.groupSettingUpdate(m.chat, 'not_announcement');
      return m.reply('✅ Grupo abierto: todos pueden enviar mensajes.');
    } else if (accion === 'cerrar') {
      await conn.groupSettingUpdate(m.chat, 'announcement');
      return m.reply('✅ Grupo cerrado: solo administradores pueden escribir.');
    } else {
      return m.reply('❌ Usa el comando así: !grupo abrir o !grupo cerrar');
    }
  }
};
