// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {

  const Teacher = await hre.ethers.getContractFactory("Teacher");
  const teacher = await Teacher.deploy();
  await teacher.deployed();
  console.log(
    `score deployed to ${teacher.address}, for verify: npx hardhat verify ${teacher.address} --network goerli`
  );


  const Score = await hre.ethers.getContractFactory("Score");
  const score = await Score.deploy(teacher.address);

  await score.deployed();

  console.log(
    `score deployed to ${score.address}, for verify: npx hardhat verify ${score.address} --network mumbai`
  );


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});