address = contract address as a sting  ""

the following function will, on console, return the keys and values stored on te contract
let test = web3.eth.getStorageAt(address, 1, 
function(error, result) {test = result})

to check if results are working: 
web3.toAscii(test)