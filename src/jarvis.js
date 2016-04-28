import Discord from 'discord.js';
import { LINQ } from 'node-linq';

class Jarvis {

  constructor(brain) {
    this._brain = brain;
    this._bot = new Discord.Client();

    this._bot.on('message', (message) => {
        let mentions = new LINQ(message.mentions);
        if (mentions.Any(e => e.username == 'jk-jarvis'))
          this._handleMessage(message);
      });
  }

  connect(token) {
    this._bot.loginWithToken(token)
        .then(() => {
            console.log('connected.');
          })
        .catch((err) => {
            console.log(err);
          });
  }

  _handleMessage(message) {
    let predictions = this._brain.predict(message.content);
    let sureness = 0;
    let command;
    for (let i = 0; i < predictions.length; i++) {
      if (predictions[i].prediction > sureness) {
        sureness = predictions[i].prediction;
        command = predictions[i].command;
      }
    }

    if (sureness < 0.7) {
      console.log(predictions);
      this._bot.reply(message, 'I did not understand.');
    }else {
      this._bot.reply(message, command);
    }
  }
}

export default Jarvis;
