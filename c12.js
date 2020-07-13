const readline = require('readline');
const fs = require('fs');
const {
  resolveSoa
} = require('dns');
const {
  on
} = require('process');

if (process.argv.length <= 2) {
  console.log('tolong sertakan nama file sebagai inputan nya, misalnya "node solution.js data.json"');
  process.exit(0);
}

const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'tebakan : '
});

let count = 0
let wrong = 0

console.log('Selamat datang di permainan tebak kata, kamu akan diberikan pertanyaan oleh file ini "data.json", untuk bermain jawablah dengan sesuai, gunakan "skip" untuk menangguhkan pertanyaan nya, dan di akhir pertanyaan akan ditanyakan lagi\n');
console.log(`-- ${data[count].definition}`);

rl.prompt();

rl.on('line', (jawaban) => {
  if (jawaban.toLowerCase() == data[count].term) {
    console.log('anda berhasil !');
    count++;

    if (count == data.length) {
      rl.close()
      console.log('anda beruntung..!');
    }
    console.log(`-- ${data[count].definition}`);
  } else if (jawaban.toLowerCase() == 'skip') {
    data.push(data[count])
    wrong = 0
    count++;
    console.log(`-- ${data[count].definition}`);
  } else {
    wrong++
    console.log(`anda belum beruntung, anda telah salah ${wrong} kali, silakan coba lagi`)
  }

  rl.prompt();

}).on('close', () => {
  process.exit(0);
});