function hi() {
  console.log("Hello World!");
}
hi();
const {
  cmd,
  commands
} = require("../command");
const {
  fetchJson
} = require("../lib/functions");
cmd({
  'pattern': "pixel",
  'alias': ["sd2", "imagine2"],
  'react': '🌟',
  'desc': "Generate an image using AI.",
  'category': "main",
  'filename': __filename
}, async (_0x5a78f8, _0x7467dd, _0x47db20, {
  from: _0x2cd9e2,
  quoted: _0x4ae6ac,
  body: _0x5d3a1b,
  isCmd: _0x10b35a,
  command: _0x3b26d5,
  args: _0x1beb7d,
  q: _0x25348c,
  isGroup: _0x29e57a,
  sender: _0x58962b,
  senderNumber: _0x1eb72c,
  botNumber2: _0x4b362a,
  botNumber: _0x1c59e7,
  pushname: _0x57356a,
  isMe: _0x4bf42d,
  isOwner: _0x379775,
  groupMetadata: _0xe66faa,
  groupName: _0x3c2091,
  participants: _0x3d14a2,
  groupAdmins: _0x2c4a72,
  isBotAdmins: _0x1abdfe,
  isAdmins: _0x4bfc83,
  reply: _0x447e6b
}) => {
  try {
    if (!_0x25348c) {
      return _0x447e6b("Please provide a prompt for the image.");
    }
    await _0x447e6b("> *Gmax Imagining Your image...*");
    let _0x42e10a = await fetchJson("https://api.giftedtech.web.id/api/ai/fluximg?apikey=gifted&prompt=" + _0x25348c);
    const _0x3aeeab = _0x42e10a.result;
    await _0x5a78f8.sendMessage(_0x47db20.chat, {
      'image': {
        'url': _0x3aeeab,
        'caption': "Generated by Gmax"
      }
    });
  } catch (_0x381f93) {
    console.error(_0x381f93);
    _0x447e6b("An error occurred: " + _0x381f93.message);
  }
});