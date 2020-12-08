//use modul parse excell ke JSON
const excelToJson = require('convert-excel-to-json');
//use modul wbm (module auto bulk whatsapp web sender via url)
const wbm = require('wbm');
//masukan path file untuk parsing ke JSON
const result = excelToJson({sourceFile: 'bot.xlsx'});
//cek hasil parsing xlsx
console.log(result);
//mulai bot -> ASYNC function
wbm.start().then(async () => {
    const contacts = result;
    //pesan yang akan dikirimkan
    const message = 'Halo {{nama}}, Apa Kabar ?';
    await wbm.send(contacts, message);
    await wbm.end();
}).catch(err => console.log(err));