// SPDX-License-Identifier: MIT
pragma solidity  ^0.8.10;

contract Counter{
    uint256 public counter;
    function add(uint256 x) public returns(uint256){
        counter += x;
        return counter;
    }
}