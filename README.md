# Whatsapp-api-bot


This is a Whatsapp API Bot that allows users to perform certain actions on the messaging platform using specific commands. The bot is built using the Whatsapp-Web.js library, which provides a simple and reliable way to interact with the Whatsapp Web client.

The bot is capable of performing two main actions:

Getting the current Bitcoin price: By sending the command "!getprice" to the bot, a request is sent to the Blockchain API to get the current Bitcoin price in Euros. The bot then parses the JSON response and calculates the average value between the buy and sell prices. Finally, the bot sends a message to the user with the current Bitcoin price in Euros.

Sending a message to a contact: By sending the command "!gettel" to the bot, the user is prompted to enter the phone number of the contact they wish to send a message to. The bot then sends a message to the entered phone number with the text "Hallo Welt!".

The bot's functionality can be extended by adding more commands to the "message" event listener. To use this bot, the user must scan the QR code generated by the bot with their Whatsapp mobile app to establish a connection between the two.

** You can even add this bot to any groups or us it for yourself. 

# Usage:
npm install<br>
npm run start

# On Whatsapp:<br>
!getprice


# Todo:
More API's?
