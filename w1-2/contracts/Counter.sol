// SPDX-License-Identifier: MIT
pragma solidity  ^0.8.10;

import "hardhat/console.sol";
contract Counter{
    uint256 public counter;
    address public owner;
    constructor (){
        owner = msg.sender;
    }
    function count(uint256 x) public {
        require(msg.sender == owner,"Not owner,you can't use it");
        counter += x;
        console.log(counter);
    }
}