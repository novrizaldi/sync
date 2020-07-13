const readline = require('readline');
const fs = require('fs');
const { resolveSoa } = require('dns');
const { on } = require('process');

const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'tebakan : '
});

let count = 0

console.log('Selamat datang di permainan tebak kata, silakan isi dengan jawaban yang benar ya!');
console.log(`${data[count].definition}`);

rl.prompt();

rl.on('line', (jawaban) => { 
  if (jawaban == data[count].term){
    console.log('selamat anda benar !');
    count++;
    if (count == data.length) {
      rl.close()
    }
    console.log(`${data[count].definition}`);
  } else console.log('wkwk anda belum beruntung');
 
  rl.prompt();

}).on('close', () => {
  console.log('hore anda menang !');
  process.exit(0);
});