/**
 * Whatsapp Api Bot
 * Author: Keyvan Hardani
 * Version: 1.0.0
 */

const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');
const client = new Client();
const request = require('request');

client.on('qr', (qr) => {
    // Generate and scan this code with your phone
    qrcode.generate(qr, {small: true});
    console.log('QR RECEIVED', qr);
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', message => {
	
        if(message.body === '!getprice') {
            // send a request to blockchain
            request('https://blockchain.info/de/ticker', (error, response, body) => {

                // parse the json answer and get the current bitcoin value
                const data = JSON.parse(body);
                value = (parseInt(data.EUR.buy, 10) + parseInt(data.EUR.sell, 10)) / 2;
                value = value.toFixed(2);
                client.sendMessage(message.from, ''+value+'€');
    });
    
    }    

    if (message.body === '!gettel') {
        client.sendMessage(message.from, 'Bitte gib die Telefonnummer des Empfängers ein:');
        client.once('message', response => {
          const receiverNumber = response.body.trim();
          client.sendMessage(receiverNumber + '@c.us', 'Hallo Welt!');
        });
      }
});

client.initialize();