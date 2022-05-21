const fs = require('fs');
const path = require('path');
const output = fs.createWriteStream(path.join(__dirname, 'text.txt'));
const { stdin, stdout, exit } = require('process');

stdout.write('Введите текст:');
stdin.on('data', (data) => {
  if (data.toString().trim() === 'exit') {
    stdout.write('Пока!');
    exit();
  }
  output.write(data);
});

process.on ('SIGINT', () => {
  stdout.write('Пока!');
  exit();
});
