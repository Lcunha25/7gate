// working return for sum
var jsonStream = require('duplex-json-stream')
var net = require('net')
var fs = require('fs');
var sodium = require('sodium-native');

var transaction;
try {
    transactionlog = require('./data.json')
}
catch (err) {
    transactionlog = [{cmd: 'balance', balance: 0}]
}

var json = JSON.stringify(transactionlog)
fs.writeFile("data.json", json, (err) =>{
    if (err) throw err;
})

var user_balance = transactionlog[0].balance;

function calculateBalance(log) {

    for(var i = 0; i < log.length; i++){
        if (log && log[i].cmd == 'deposit'){
            user_balance += parseInt(log[i].amount);
        }
    }
    // filters functions withdrawing money
    for(var i = 0; i < log.length; i++){
        if (log && log[i].cmd == 'withdraw'){
            user_balance -= parseInt(log[i].amount);
        }
    }

}

var server = net.createServer(function (socket) {
    socket = jsonStream(socket)
    socket.on('data', function (msg) {
        // filters functions depositing money
        calculateBalance(msg);

        console.log('Your Balance is: ', user_balance);

        // will have to change thi so that the message with the final value gets cryptographied.
        var FinalBalance = [{cmd: 'balance', balance: user_balance}];
        var NotEnoughFunds = [{cmd: 'balance', balance: undefined}];
        // reads already existing arrays from json
        if(user_balance <= 0){
            console.log('Your balance is less than 0, please add more value before we can conclude this transaction');
            fs.readFile('data.json', function (err, data)  {
                if (err) throw err;
                // parse array to be readed
                var json = JSON.parse(data)
                // push new information to old array
                json.push(NotEnoughFunds)
                // write array to json file with new information.
                var AppendBalance = JSON.stringify(json)
                fs.writeFile("data.json", AppendBalance, (err) =>{
                    if (err) throw err;
                })
            })
        } else{
            fs.readFile('data.json', function (err, data)  {
                if (err) throw err;
                // parse array to be readed
                var json = JSON.parse(data)
                // push new information to old array
                json.push(FinalBalance)
                // write array to json file with new information.
                var AppendBalance = JSON.stringify(json)
                fs.writeFile("data.json", AppendBalance, (err) =>{
                    if (err) throw err;
                })
            })
        }

        function InitialBlance(user){
            socket.write(user)
        }
        // CleanCrypto(FinalBalance)
        InitialBlance(FinalBalance);
    })
})
server.listen(3000)

process.on('uncaughtException', function (err) {
    console.log(err);
}); 




// function MakeCrypto(source){
//     var nonce = Buffer.alloc(sodium.crypto_secretbox_NONCEBYTES)
//     var key = sodium.sodium_malloc(sodium.crypto_secretbox_KEYBYTES) // secure buffer
//     // Convert input to string and then Buffer


//     var message = Buffer.from(JSON.stringify(source))
//     var ciphertext = Buffer.alloc(message.length + sodium.crypto_secretbox_MACBYTES)

//     sodium.randombytes_buf(nonce) // insert random data into nonce
//     sodium.randombytes_buf(key)
// }

// function CleanCrypto(source){
//      // Allocate Buffer for output hash
//      var nonce = Buffer.alloc(sodium.crypto_secretbox_NONCEBYTES)
//      var key = sodium.sodium_malloc(sodium.crypto_secretbox_KEYBYTES) // secure buffer
//      // Convert input to string and then Buffer
 
//      var message = Buffer.from(JSON.stringify(source))
//      var ciphertext = Buffer.alloc(message.length + sodium.crypto_secretbox_MACBYTES)
//     //  sodium.randombytes_buf(nonce) // insert random data into nonce
//     //  sodium.randombytes_buf(key)  // insert random data into key
 
//      sodium.crypto_secretbox_easy(ciphertext, message, nonce, key)
//      var plainText = Buffer.alloc(ciphertext.length - sodium.crypto_secretbox_MACBYTES)
  
//      if (!sodium.crypto_secretbox_open_easy(plainText, ciphertext, nonce, key)) {
//        console.log('Decryption failed!')
//      } else {
//          console.log(plainText)
//        console.log(plainText.toString())
//      }
// }


// var server = net.createServer(function (socket) {
//     socket = jsonStream(socket)
//     socket.on('data', function (msg) {
//         // filters functions depositing money
        
//         console.log(msg.data.toString())
//         calculateBalance(msg);

//         console.log('Your Balance is: ', user_balance);

//         // will have to change thi so that the message with the final value gets cryptographied.
//         var FinalBalance = [{cmd: 'balance', balance: user_balance}];
//         var NotEnoughFunds = [{cmd: 'balance', balance: undefined}];
//         // reads already existing arrays from json
//         if(user_balance <= 0){
//             console.log('Your balance is less than 0, please add more value before we can conclude this transaction');
//             fs.readFile('data.json', function (err, data)  {
//                 if (err) throw err;
//                 // parse array to be readed
//                 var json = JSON.parse(data)
//                 // push new information to old array
//                 json.push(NotEnoughFunds)
//                 // write array to json file with new information.
//                 var AppendBalance = JSON.stringify(json)
//                 fs.writeFile("data.json", AppendBalance, (err) =>{
//                     if (err) throw err;
//                 })
//             })
//         } else{
//             fs.readFile('data.json', function (err, data)  {
//                 if (err) throw err;
//                 // parse array to be readed
//                 var json = JSON.parse(data)
//                 // push new information to old array
//                 json.push(FinalBalance)
//                 // write array to json file with new information.
//                 var AppendBalance = JSON.stringify(json)
//                 fs.writeFile("data.json", AppendBalance, (err) =>{
//                     if (err) throw err;
//                 })
//             })
//         }

//         function InitialBlance(user){
//             socket.write(user)
//         }
//         // CleanCrypto(FinalBalance)
//         InitialBlance(FinalBalance);
//     })
// })
// server.listen(3000)

// process.on('uncaughtException', function (err) {
//     console.log(err);
// }); 