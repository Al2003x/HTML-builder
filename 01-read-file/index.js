const path = require('path');
const fs = require('fs');
const stream = fs.createReadStream(path.join(__dirname, 'text.txt'));

let data = '';
stream.on('data', chunk => data += chunk);
stream.on('end', () => console.log('End', data));