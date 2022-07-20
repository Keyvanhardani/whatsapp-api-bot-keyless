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
		
        console.log(BTC());

	}else if(message.body.startsWith('!sendto ')){

        // const number = "+49171000000";
        // Your message.
        // const text = "Hey Key";
        // Getting chatId from the number.
        // we have to delete "+" from the beginning and add "@c.us" at the end of the number.
        // const chatId = number.substring(1) + "@c.us";

        let number = message.body.split(' ')[1];
        let messageIndex = message.body.indexOf(number) + number.length;
        let messagees = message.body.slice(messageIndex, message.body.length);
        number = number.includes('@c.us') ? number : `${number}@c.us`;
        // Sending message.
        client.sendMessage(number, messagees);
    }
});

client.initialize();