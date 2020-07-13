const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'tulis kalimat mu disini>'
});

rl.prompt();

rl.on('line', (jawaban) => {
  console.log(`hasil konversi >   ${sentenceManipulation(jawaban)} `);
  rl.prompt();

}).on('close', () => {
  console.log('good bye');
  process.exit(0);
});

function stringManipulation(word) {
    var vocal = ['a', 'i', 'u', 'e', 'o']
    for (let i = 0; i <= vocal.length; i++) {
        while (word.startsWith(vocal[i])) {
            return word
        }
    }
    return word.slice(1) + word.slice(0, 1) + 'nyo'
}

function sentenceManipulation(sentence) {
    var word = sentence.split(' ')
    var hasil = ''
    for (let i = 0; i < word.length; i++) {
        hasil += stringManipulation(word[i]) + ' ' 
    }
    return hasil
}
