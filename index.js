const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth()
});

// Genera il codice QR nel terminale per l'accesso
client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
    console.log('Scansiona questo codice QR con WhatsApp!');
});

// Conferma l'avvenuta connessione
client.on('ready', () => {
    console.log('Il bot è pronto e attivo!');
});

// Risposta automatica ai messaggi
client.on('message', message => {
    if (message.body.toLowerCase() === 'ciao') {
        message.reply('benvenuto nel gruppo,leggi le regole e buona permanenza');
    }
});

client.initialize();
