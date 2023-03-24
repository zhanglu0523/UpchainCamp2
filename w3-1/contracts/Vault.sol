//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Vault {
    mapping(address => uint) deposited;
    function deposit(address TZtoken ,uint amount) public {
        IERC20(TZtoken).transferFrom(msg.sender, address(this), amount);
        deposited[msg.sender] += amount;
    }

    function withdraw(address TZtoken) external {
        uint balance = deposited[msg.sender];
        require(balance > 0,"Invalid balance");
        IERC20(TZtoken).transfer(msg.sender,balance);
    }
}