pragma solidity ^0.8.0;
// SPDX-License-Identifier: UNLICENSED
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
contract TimToken is ERC20 {
 constructor() ERC20("Tim Token", "TimZhang") {
    _mint(msg.sender, 1000*10**18);
    }
}