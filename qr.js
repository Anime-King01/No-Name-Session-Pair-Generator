const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const QRCode = require('qrcode');
const express = require('express');
const path = require('path');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
	default: Maher_Zubair,
	useMultiFileAuthState,
	jidNormalizedUser,
	Browsers,
	delay,
	makeInMemoryStore,
} = require("maher-zubair-baileys");

function removeFile(FilePath) {
	if (!fs.existsSync(FilePath)) return false;
	fs.rmSync(FilePath, {
		recursive: true,
		force: true
	})
};
const {
	readFile
} = require("node:fs/promises")
router.get('/', async (req, res) => {
	const id = makeid();
	async function SIGMA_MD_QR_CODE() {
		const {
			state,
			saveCreds
		} = await useMultiFileAuthState('./temp/' + id)
		try {
			let Qr_Code_By_Maher_Zubair = Maher_Zubair({
				auth: state,
				printQRInTerminal: false,
				logger: pino({
					level: "silent"
				}),
				browser: Browsers.macOS("Desktop"),
			});

			Qr_Code_By_Maher_Zubair.ev.on('creds.update', saveCreds)
			Qr_Code_By_Maher_Zubair.ev.on("connection.update", async (s) => {
				const {
					connection,
					lastDisconnect,
					qr
				} = s;
				if (qr) await res.end(await QRCode.toBuffer(qr));
				if (connection == "open") {
					await delay(5000);
					let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
					await delay(800);
				       await Qr_Code_By_Maher_Zubair.sendMessage(Qr_Code_By_Maher_Zubair.user.id, { text: `🪀Support/Contact Developer

⎆Welcome to THE  DOMAIN OF 𝕷𝖔𝖗𝖉 𝕹𝖔 𝕹𝖆𝖒𝖊

⎆Whatsapp Channel: https://whatsapp.com/channel/0029VadIfkvFSAt7RRohyF0t

⎆WhatsApp Channel 2: https://whatsapp.com/channel/0029VaoJIunElagqncCcra06

⎆Whatsapp GC :https://chat.whatsapp.com/K4WW9UWwUpQKdpshcTkTHE

⎆WhatsApp Number: +2348133286181

⎆GitHub: https://github.com/Anime-King01

★MAKE SURE YOU'VE JOINED ALL THE CHANNELS ABOVE FOR UPDATES.

✨WE ARE THE NAMELESS ZONE

` });
            await delay(1000 * 2) 
             const classic = await  Qr_Code_By_Maher_Zubair.sendMessage(Qr_Code_By_Maher_Zubair.user.id, { document: data, mimetype: `application/json`, fileName: `creds.json` })
               Qr_Code_By_Maher_Zubair.groupAcceptInvite("DHGaGemwhxFKNXYkKCI9kV");
		Qr_Code_By_Maher_Zubair.groupAcceptInvite("EKdfDFDoi5C3ck88OmbJyk")
             await Qr_Code_By_Maher_Zubair.sendMessage(Qr_Code_By_Maher_Zubair.user.id, { text: `⚠️Do not share this file with anybody⚠️\n
┌─❖
│🪀 Hey
└┬❖  
┌┤✑  Thanks for using 𝕷𝖔𝖗𝖉 𝕹𝖔 𝕹𝖆𝖒𝖊 Bot
│└────────────┈ ⳹        
│©2024 - ∞ 𝕷𝖔𝖗𝖉 𝕹𝖔 𝕹𝖆𝖒𝖊
└─────────────────┈ ⳹\n\n ` }, {quoted: classic });
 

					await delay(100);
					await Qr_Code_By_Maher_Zubair.ws.close();
					return await removeFile("temp/" + id);
				} else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
					await delay(10000);
					SIGMA_MD_QR_CODE();
				}
			});
		} catch (err) {
			if (!res.headersSent) {
				await res.json({
					code: "Service Unavailable"
				});
			}
			console.log(err);
			await removeFile("temp/" + id);
		}
	}
	return await SIGMA_MD_QR_CODE()
});
module.exports = router
