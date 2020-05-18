const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = '.';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'AnaniSikim') {
    msg.reply('Bir daha burda anneye küfür edenein ben anasını sikerim');
  }
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Camimi Lan Bura Orospu Çocuğu');
  }
  if (msg.content.toLowerCase() === '31') {
    msg.reply('anlayan anladı');
  }
  if (msg.content.toLowerCase() === 'napıyosunuz') {
    msg.reply('Seni');
  }
  if (msg.content === prefix+'replik') {
    msg.reply('Gaza Geldim Anneni Sikmeye Hazırım');
  }
});

client.login('NzEyMDEwNzcwMzY3NTEyNjc5.XsLbUg.tD_x-TFdJKvM8s5TcMnn3wJpOC8');
