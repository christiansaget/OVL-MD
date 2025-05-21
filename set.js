const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  PREFIXE: process.env.PREFIXE || "😉",
  NOM_OWNER: process.env.NOM_OWNER || "꧁ 𝙏𝙄𝙎𝙏𝙄𝘼𝙉 ∘‌⃟🎧❥⃝ 𝙈𝙄𝙓 ꧂",
  NUMERO_OWNER: process.env.NUMERO_OWNER || "50935603875",
  MODE: process.env.MODE || "private",
  MENU: process.env.MENU || "https://i.ibb.co/ynx9QcZ/image.jpg",
  SESSION_ID: process.env.SESSION_ID || "Ovl-MD_mWcw3jja_SESSION-ID",
  LEVEL_UP: process.env.LEVEL_UP || "non",
  STICKER_PACK_NAME: process.env.STICKER_PACK_NAME || "꧁ 𝙏𝙄𝙎𝙏𝙄𝘼𝙉 ∘‌⃟🎧❥⃝ 𝙈𝙄𝙓 ꧂",
  STICKER_AUTHOR_NAME: process.env.STICKER_AUTHOR_NAME || "꧁ 𝙏𝙄𝙎𝙏𝙄𝘼𝙉 ∘‌⃟🎧❥⃝ 𝙈𝙄𝙓 ꧂",
  DATABASE: process.env.DATABASE,
  RENDER_API_KEY: process.env.RENDER_API_KEY,
};
