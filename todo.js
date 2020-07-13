const fs = require('fs');
const process = require('process');
const {
  argv
} = require('process');
let file = JSON.parse(fs.readFileSync('add.json', 'utf8'));

const args = process.argv
const arg = process.argv[2]
let datas = args.splice(3, args.length)
let isi = (datas.join(' '));

let tags = datas.slice(1, datas.length)
let n = datas[0]
let t = args.slice(3)

if (args.length <= 2) {
  console.log(' >>> JS TODO <<<');
  console.log(`$ node todo.js <command>`);
  console.log('$ node todo.js list');
  console.log('$ node todo.js task <task_id>');
  console.log('$ node todo.js add <task_content>');
  console.log('$ node todo.js delete <task_id>');
  console.log('$ node todo.js complete <task_id>');
  console.log('$ node todo.js uncomplete <task_id>');
  console.log('$ node todo.js list: outstanding asc|desc');
  console.log('$ node todo.js list: completed asc|desc');
  console.log('$ node todo.js tag <task_id><tag_name_1><tag_name_2>...<tag_name_n>');
  console.log('$ node todo.js filter:<tag_name>');
  }

switch (arg) {
  case 'add':
    file.push({
      todo: isi,
      complete: false,
      tag: ''
    })
    let myJson = JSON.stringify(file);
    fs.writeFileSync('add.json', myJson, 'utf8')
    console.log(`"${isi}" berhasil ditambahkan`);
    break;
  case 'list':
    console.log('daftar pekerjaan : ');
    let i = 0
    for (; i < file.length; i++) {
      console.log(` ${i +1}. ${file[i].complete ? '[x]' : '[ ]'} ${file[i].todo}`);
    }
    break;
  case 'delete':
    console.log(`"${file[datas -1].todo}" telah berhasil dihapus`);
    file.splice(datas - 1, 1)
    let hapus = JSON.stringify(file)
    fs.writeFileSync('add.json', hapus, 'utf8')
    break;
  case 'complete':
    console.log(`"${file[datas -1].todo}" telah dilakukan`);
    file[datas - 1].complete = true;
    let selesai = JSON.stringify(file)
    fs.writeFileSync('add.json', selesai, 'utf8')
    break;
  case 'uncomplete':
    console.log(`${file[datas -1].todo} status selesai dibatalkan`);
    file[datas - 1].complete = false;
    let unselesai = JSON.stringify(file)
    fs.writeFileSync('add.json', unselesai, 'utf8')
    break;
  case 'list:outstanding':
    console.log('daftar pekerjaan : ');
    for (let i = 0; i < file.length; i++) {
      if (file[i].complete == false) {
        console.log(` ${i +1}. [ ] ${file[i].todo}`);
      }
    }
    break;
  case 'list:completed':
    console.log('daftar pekerjaan : ');
    for (let i = 0; i < file.length; i++) {
      if (file[i].complete == true) {
        console.log(` ${i +1}. [x] ${file[i].todo}`);
      }
    }
    break;
  case 'tag':
    console.log(`tag ${tags} telah ditambahkan kedalam ${file[n-1].todo}`);
    file[n - 1].tag = tags.join(' ');
    let taggg = JSON.stringify(file)
    fs.writeFileSync('add.json', taggg, 'utf8')
    break;
}