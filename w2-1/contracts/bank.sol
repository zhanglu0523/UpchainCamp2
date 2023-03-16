// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract Bank {
    address owner;
    mapping(address => uint256) private user_balances;

    event Deposit(address indexed account, uint256 amount);
    event Withdrawal(address indexed account, uint256 amount);

     constructor()  {
        owner = msg.sender;
    }
    receive() external payable {}
    fallback() external payable {}
    function deposit() public payable {
        require(msg.value > 0, "Amount must be greater than zero");
        user_balances[msg.sender] += msg.value;
        emit Deposit(msg.sender, msg.value);
    }

    function withdraw() public {
        require(msg.sender == owner,"invalid user");
        uint256 balance = address(this).balance;
        require(balance > 0 , "Insufficient balance");
        (bool success,) = payable(msg.sender).call{value:balance}("");
        require(success, "Withdrawal failed");
        emit Withdrawal(msg.sender, balance);
    }

    function getBalance(address _account) public view returns (uint256) {
        return user_balances[_account];
    }
}