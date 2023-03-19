// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

interface IScore {
    event SetStudentScore(address indexed student, uint256 score);

    function setStudentScore(address student, uint256 score) external;
    function getScore(address student) external view returns(uint256 score);
    
}

contract Score is IScore {
    address public teacher;
    address public owner;
    mapping(address => uint256) private scores;

    error NotOwner();
    error NotTeacher();
    error InvalidScore();
    error ZeroAddress();

    constructor(address teacher_) {
        owner = msg.sender;
        teacher = teacher_;
    }

    modifier onlyTeacher() {
        if(msg.sender != teacher) revert NotTeacher();
        _;
    }

    modifier onlyOwner() {
        if(msg.sender != owner) revert NotOwner();
        _;
    }

    function setStudentScore(address student, uint256 score) onlyTeacher external override {
        if(msg.sender == address(0)) revert ZeroAddress();
        if(score > 100) revert InvalidScore();
        scores[student] = score;
        emit SetStudentScore(student,score);
    }

    function getScore(address student) external view override returns (uint256){
        return scores[student];
    }

    function setTeacher(address teacher_) onlyOwner external {
        teacher = teacher_;
    }

    function getTeacher() external view returns(address) {
        return teacher;
    }
}