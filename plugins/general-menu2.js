import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {
let date = moment.tz('Asia/Jakarta').format("dddd, Do MMMM, YYYY")
let time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
conn.sendHydrated(m.chat, '*『 sᴀᴋᴜʀᴀ 』*', `ʜᴀɪ.sᴀʏᴀ ᴀᴅᴀʟᴀʜ ʙᴏᴛ ʏᴀɴɢ ᴅɪ ʙᴜᴀᴛ ᴏʟᴇʜ ʜᴀɴ.ʙᴇʟɪᴀᴜ ᴍᴀsɪʜ ᴘᴇᴍᴜʟᴀ ᴄᴜᴍᴀɴ ʙɪsᴀ ɴɢᴇ ᴄᴏᴘʏ ᴅᴏᴀɴɢ:ᴘ,ʙᴏᴛ ɪɴɪ ʙɪsᴀ ᴍᴇᴍʙᴀɴᴛᴜ ᴀɴᴅᴀ ᴜɴᴛᴜᴋ ᴍᴇɴᴅᴏᴡʟᴏᴀᴅ sᴇsᴜᴀᴛᴜ sᴇᴘᴇʀᴛɪ ᴛɪᴋᴛᴏᴋ,ʏᴛ,ɪɢ,ᴅᴀɴ ʟᴀɪɴɴʏᴀ,\nꜱɪʟᴀʜᴋᴀɴ ᴋᴇᴛɪᴋ ᴛᴏᴍʙᴏʟ ᴍᴇɴᴜ ᴜɴᴛᴜᴋ ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴍᴇɴᴜ ʙᴏᴛ\n\nᴅᴀᴛᴇ: ${date}\nᴛɪᴍᴇ: ${time} ﹙ɢᴍᴛ +7:00)`.trim(), './media/broadcast.jpg', 'bit.ly/Papah-Chan', 'ʏᴏᴜᴛᴜʙᴇ ᴏᴡɴᴇʀ', null, null, [
[`ᴍᴇɴᴜ`, '.m'],
[`ᴘɪɴɢ`, '.ping'],
[`ᴅᴀsʜʙᴏᴀʀᴅ` '.dasboard'],
], m, {asLocation: true})
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu)$/i

export default handler