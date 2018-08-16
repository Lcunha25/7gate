// TODO: give unique identity to client + add and subtract from main number + codify messages + give limit of withdraw for positive limits

var jsonStream = require('duplex-json-stream')
var net = require('net')
const fs = require('fs');


var client = jsonStream(net.connect(3000))
var lucas_balance = [
    {cmd: 'deposit', amount: 130},
    {cmd: 'deposit', amount: 0},
    {cmd: 'deposit', amount: 120},
    {cmd: 'deposit', amount: 120},
    {cmd: 'deposit', amount: 120},
    {cmd: 'withdraw', amount: 70},
  ];

client.on('data', function (msg) {
    
    // reads already existing arrays from json
    fs.readFile('data.json', function (err, data)  {
        if (err) throw err;
        // parse array to be readed
        var json = JSON.parse(data)
        // push new information to old array
        json.push(lucas_balance)
        // write array to json file with new information.
        var AppendList = JSON.stringify(json)
        fs.writeFile("data.json", AppendList, (err)=>{
            if (err) throw err;    
        })
        console.log(msg);
    })
})

function DepositList(user){
    client.end(user)
}
DepositList(lucas_balance);

process.on('uncaughtException', function (err) {
    console.log(err);
}); 



// TODO: give unique identity to client + add and subtract from main number + codify messages + give limit of withdraw for positive limits

// var jsonStream = require('duplex-json-stream')
// var net = require('net')
// const fs = require('fs');
// var sodium = require('sodium-native');



// var client = jsonStream(net.connect(3000))
// var obj = [
//     {cmd: 'deposit', amount: 130},
//     {cmd: 'deposit', amount: 0},
//     {cmd: 'deposit', amount: 120},
//     {cmd: 'deposit', amount: 120},
//     {cmd: 'deposit', amount: 120},
//     {cmd: 'deposit', amount: 120},
//     {cmd: 'withdraw', amount: 70},
//   ];

// client.on('data', function (msg) {
    
//     // reads already existing arrays from json
//     fs.readFile('data.json', function (err, data)  {
//         if (err) throw err;
//         // parse array to be readed
//         var json = JSON.parse(data)
//         // push new information to old array
//         var test = json.push(obj)

//         function sendCrypto(){
//             var nonce = Buffer.alloc(sodium.crypto_secretbox_NONCEBYTES)
//             var key = sodium.sodium_malloc(sodium.crypto_secretbox_KEYBYTES) // secure buffer
         
//             var message = Buffer.from(JSON.stringify(test))
//             var ciphertext = Buffer.alloc(message.length + sodium.crypto_secretbox_MACBYTES)
        
//             sodium.crypto_secretbox_easy(ciphertext, message, nonce, key)
//         }

//         // write array to json file with new information.
//         var AppendList= sendCrypto()
//         console.log(AppendList)
//         fs.writeFile("data.json", AppendList, (err)=>{
//             if (err) throw err;    
//         })
//         console.log(msg);
//     })
// })

// function DepositList(user){
//     client.end(user)
// }
// DepositList(obj);

// process.on('uncaughtException', function (err) {
//     console.log(err);
// }); 

// TODO: give unique identity to client + add and subtract from main number + codify messages + give limit of withdraw for positive limits



// var jsonStream = require('duplex-json-stream')
// var net = require('net')
// var sodium = require('sodium-native');
// const fs = require('fs');


// var client = jsonStream(net.connect(3000))
// var lucas_balance = [
//     {cmd: 'deposit', amount: 130},
//     {cmd: 'deposit', amount: 0},
//     {cmd: 'deposit', amount: 120},
//     {cmd: 'deposit', amount: 120},
//     {cmd: 'deposit', amount: 120},
//     {cmd: 'withdraw', amount: 70},
//   ];

// client.on('data', function (msg) {
    
//     // reads already existing arrays from json
//     fs.readFile('data.json', function (err, data)  {
//         if (err) throw err;
//         // parse array to be readed
//         var json = JSON.parse(data)
//         // push new information to old array
//         json.push(lucas_balance)
//         // write array to json file with new information.
//         var AppendList = JSON.stringify(json)
//         fs.writeFile("data.json", AppendList, (err)=>{
//             if (err) throw err;    
//         })
//         console.log(msg);
//     })
// })



//     var nonce = Buffer.alloc(sodium.crypto_secretbox_NONCEBYTES)
//     var key = sodium.sodium_malloc(sodium.crypto_secretbox_KEYBYTES) // secure buffer
    
//     var message = Buffer.from(JSON.stringify(lucas_balance))
//     var ciphertext = Buffer.alloc(message.length + sodium.crypto_secretbox_MACBYTES)

//     sodium.crypto_secretbox_easy(ciphertext, message, nonce, key)
//     var plainText = Buffer.alloc(ciphertext.length - sodium.crypto_secretbox_MACBYTES)
//     if (!sodium.crypto_secretbox_open_easy(plainText, ciphertext, nonce, key)) {
//         console.log('Decryption failed!')
//     } else {
//         console.log(plainText)
//     }
//     // write array to json file with new information.


// function DepositList(user){
//     client.end(user)
// }
// DepositList(plainText);

// process.on('uncaughtException', function (err) {
//     console.log(err);
// }); 

