let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}

	const sections = [
   {
	title: `${htki} List Options ${htka}`,
	rows: [
	{title: `✨ ${htjava} Welcome`, rowId: `${usedPrefix + command} welcome`},
	{title: `🚫 ${htjava} Delete`, rowId: `${usedPrefix + command} delete`},
	{title: `🔞 ${htjava} NSFW`, rowId: `${usedPrefix + command} nsfw`},
	{title: `🌎 ${htjava} Public`, rowId: `${usedPrefix + command} public`},
	{title: `🌎 ${htjava} Bc Join`, rowId: `${usedPrefix + command} bcjoin`},
	{title: `🗣️ ${htjava} Simi`, rowId: `${usedPrefix + command} simi`},
	{title: `🔗 ${htjava} Anti Link Wa`, rowId: `${usedPrefix + command} antilinkwa`},
	{title: `🔗 ${htjava} Anti Link Tik`, rowId: `${usedPrefix + command} antilinktik`},
	{title: `🔗 ${htjava} Anti Link Yt`, rowId: `${usedPrefix + command} antilinkyt`},
	{title: `🔗 ${htjava} Anti Link Tel`, rowId: `${usedPrefix + command} antilinktel`},
	{title: `🔗 ${htjava} Anti Link Fb`, rowId: `${usedPrefix + command} antilinkfb`},
	{title: `🔗 ${htjava} Anti Link Ig`, rowId: `${usedPrefix + command} antilinkig`},
	{title: `🔗 ${htjava} Anti Link`, rowId: `${usedPrefix + command} antihatetepe`},
	{title: `🚫 ${htjava} Anti Delete`, rowId: `${usedPrefix + command} antidelete`},
	{title: `👽 ${htjava} Anti Virtex`, rowId: `${usedPrefix + command} antivirtex`},
	{title: `🤬 ${htjava} Anti Toxic`, rowId: `${usedPrefix + command} antitoxic`},
	{title: `🗿 ${htjava} Anti Satir`, rowId: `${usedPrefix + command} antisatir`},
	{title: `⏏️ ${htjava} Auto Levelup`, rowId: `${usedPrefix + command} autolevelup`},
	{title: `🎙️️ ${htjava} Auto Vn`, rowId: `${usedPrefix + command} autovn`},
	{title: `🎙️️ ${htjava} Auto DelVn`, rowId: `${usedPrefix + command} autodelvn`},
	{title: `📷 ${htjava} Auto Sticker`, rowId: `${usedPrefix + command} autosticker`},
	{title: `⏏️ ${htjava} Auto Up News`, rowId: `${usedPrefix + command} autoupnews`},
	{title: `⏏️ ${htjava} Auto Up Anime`, rowId: `${usedPrefix + command} autoupnime`},
	{title: `❗ ${htjava} Anti Sticker`, rowId: `${usedPrefix + command} antisticker`},
	{title: `👤 ${htjava} Auto Join`, rowId: `${usedPrefix + command} autojoin`},
	{title: `🔎 ${htjava} Detect`, rowId: `${usedPrefix + command} detect`},
	{title: `📑 ${htjava} Document`, rowId: `${usedPrefix + command} document`},
	{title: `👤 ${htjava} White List My Contact`, rowId: `${usedPrefix + command} whitelistmycontact`},
	{title: `❗ ${htjava} Restrict`, rowId: `${usedPrefix + command} restrick`},
	{title: `😐 ${htjava} Nyimak`, rowId: `${usedPrefix + command} nyimak`},
	{title: `☑️ ${htjava} Auto Read`, rowId: `${usedPrefix + command} autoread`},
	{title: `💬 ${htjava} PcOnly`, rowId: `${usedPrefix + command} pconly`},
	{title: `🏢 ${htjava} GcOnly`, rowId: `${usedPrefix + command} gconly`},
	{title: `📷 ${htjava} SwOnly`, rowId: `${usedPrefix + command} swonly`},
	]
    },
]

const listMessage = {
  text: ' ',
  footer: botdate,
  title: `*${htki} OPTIONS ${htka}*`,
  buttonText: "Click Here!",
  sections
}

  let isEnable = /true|enable|(turn)?on|1/i.test(command)
  let chat = global.db.data.chats[m.chat]
  let user = global.db.data.users[m.sender]
  let bot = global.db.data.settings[conn.user.jid] || {}
  let type = (args[0] || '').toLowerCase()
  let isAll = false, isUser = false
  switch (type) {
    case 'welcome':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.welcome = isEnable
      break
     case 'detect':
       if (!m.isGroup) {
         if (!isOwner) {
           global.dfail('group', m, conn)
           throw false
         }
       } else if (!isAdmin) {
         global.dfail('admin', m, conn)
         throw false
       }
       chat.detect = isEnable
       break
    case 'delete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = isEnable
      break
    case 'antidelete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = !isEnable
      break
     case 'autodelvn':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('admin', m, conn)
           throw false
         }
       }
       chat.autodelvn = isEnable
       break
     case 'document':
       chat.useDocument = isEnable
       break
    case 'public':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['self'] = !isEnable
      break
      case 'bcjoin':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.bcjoin = isEnable
      break
    case 'antilink':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLink = isEnable
      break
      case 'antilinktik':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLinkTik = isEnable
      break
      case 'antilinkyt':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLinkYt = isEnable
      break
      case 'antilinktel':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLinkTel = isEnable
      break
      case 'antilinkfb':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLinkFb = isEnable
      break
      case 'antilinkig':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLinkIg = isEnable
      break
      case 'antilinkwa':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLinkWa = isEnable
      break
      case 'antihatetepe':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLinkHttp = isEnable
      break
      case 'nsfw':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.nsfw = isEnable
      break
      case 'antivirtex':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiVirtex = isEnable
      break
      case 'antisatir':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiSatir = isEnable
      break
      case 'simi':
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
      chat.simi = isEnable
      break
      case 'autovn':
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
      chat.autoVn = isEnable
      break
      case 'autosticker':
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
      chat.autoSticker = isEnable
      break
      case 'antisticker':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiSticker = isEnable
      break
      case 'autojoin':
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
      chat.autoJoin = isEnable
      break
      case 'autoupnews':
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
      chat.updateAnimeNews = isEnable
      break
      case 'autoupnime':
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
      chat.updateAnime = isEnable
      break
     case 'toxic':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('admin', m, conn)
           throw false
         }
       }
       chat.antiToxic = !isEnable
       break
     case 'antitoxic':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('admin', m, conn)
           throw false
         }
       }
       chat.antiToxic = isEnable
       break
     case 'autolevelup':
       isUser = true
       user.autolevelup = isEnable
       break
     case 'mycontact':
     case 'mycontacts':
     case 'whitelistcontact':
     case 'whitelistcontacts':
     case 'whitelistmycontact':
     case 'whitelistmycontacts':
       if (!isOwner) {
         global.dfail('owner', m, conn)
         throw false
       }
       conn.callWhitelistMode = isEnable
       break
    case 'restrict':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      bot.restrict = isEnable
      break
    case 'nyimak':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['nyimak'] = isEnable
      break
    case 'autoread':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['autoread'] = isEnable
      break
    case 'pconly':
    case 'privateonly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['pconly'] = isEnable
      break
    case 'gconly':
    case 'grouponly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['gconly'] = isEnable
      break
    case 'swonly':
    case 'statusonly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['swonly'] = isEnable
      break
    default:
      if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, listMessage, fdoc)
      throw false
  }
  
  conn.sendButton(m.chat, `*${htki} OPTIONS ${htka}*
🗂️ *Type:* ${type} 
📊 *Status:* Succes ✅
🎚️ *Options:* ${isEnable ? 'Enable' : 'Disable'}
📣 *For:* ${isAll ? 'This Bot' : isUser ? '' : 'This Chats'}
`,wm, null, [[`${isEnable ? '✖️ Disable' : '✔️ Enable'}`, `${isEnable ? `.off ${type}` : `.on ${type}`}`], ['🎀 Menu', '.menu']],m, fdoc)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i

export default handler