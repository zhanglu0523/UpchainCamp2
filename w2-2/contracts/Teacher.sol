// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "./Score.sol";

contract Teacher{

    function callSetScore(IScore scoreContract, address student, uint256 score) external {
        scoreContract.setStudentScore(student, score);
    }

}