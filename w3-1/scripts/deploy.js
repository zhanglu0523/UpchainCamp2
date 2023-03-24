// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {

  const TimToken = await hre.ethers.getContractFactory("TimToken");
  const timZhang = await TimToken.deploy();
  await timZhang.deployed();
  console.log(
    `timZhang deployed to ${timZhang.address}, for verify: npx hardhat verify ${timZhang.address} --network mumbai`
  );


  const Vault = await hre.ethers.getContractFactory("Vault");
  const valut = await Vault.deploy();

  await valut.deployed();

  console.log(
    `valut deployed to ${valut.address}, for verify: npx hardhat verify ${valut.address} --network mumbai`
  );

  const TimZhangERC721 = await hre.ethers.getContractFactory("TimZhangERC721");
  const timZhangERC721 = await TimZhangERC721.deploy();

  await timZhangERC721.deployed();

  console.log(
    `timZhangERC721 deployed to ${timZhangERC721.address}, for verify: npx hardhat verify ${timZhangERC721.address} --network mumbai`
  );


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});