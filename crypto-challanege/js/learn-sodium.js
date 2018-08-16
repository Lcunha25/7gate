var sodium = require('sodium-native')
 
var obj = [
    {cmd: 'deposit', amount: 130},
    {cmd: 'deposit', amount: 0},
    {cmd: 'deposit', amount: 120},
    {cmd: 'deposit', amount: 120},
    {cmd: 'deposit', amount: 120},
    {cmd: 'deposit', amount: 120},
    {cmd: 'withdraw', amount: 70},
  ];

// var nonce = Buffer.alloc(sodium.crypto_secretbox_NONCEBYTES)
// var key = sodium.sodium_malloc(sodium.crypto_secretbox_KEYBYTES) // secure buffer

// // var temp = JSON.parse(buf.toString());
// var message = Buffer.from(JSON.stringify(obj))
// var ciphertext = Buffer.alloc(message.length + sodium.crypto_secretbox_MACBYTES)

// sodium.randombytes_buf(nonce) // insert random data into nonce
// sodium.randombytes_buf(key)  // insert random data into key
 
// // encrypted message is stored in ciphertext.
// sodium.crypto_secretbox_easy(ciphertext, message, nonce, key)
 
// console.log('Encrypted message:', ciphertext)
 
// var plainText = Buffer.alloc(ciphertext.length - sodium.crypto_secretbox_MACBYTES)
 
// if (!sodium.crypto_secretbox_open_easy(plainText, ciphertext, nonce, key)) {
//   console.log('Decryption failed!')
// } else {
//   console.log('Decrypted message:', plainText, '(' + plainText.toString() + ')')
// }

// // Creating buffers
// test = Buffer.alloc(32) // Allocate empty 32 byte Buffer
// buf = Buffer.from('Hello, World!') // Allocate buffer and write 'Hello world'
// // buf = Buffer.from('48656c6c6f20776f726c64', 'hex') // Decode string from `hex`
// // buf = Buffer.alloc(32).fill('Hello') // Allocate 32 byte Buffer and repeat 'Hello'

// console.log(test)

// // buf1.equals(buf2) // Check whether buf1 and buf2 are equal byte by byte

// // Converting to printable strings
// var test2 = buf.toString('hex') // Octets in as hexadecimal
// var test3 = buf.toString('base64') // Octets as ascii safe string (base64)

// console.log(test2)
// console.log(test3)