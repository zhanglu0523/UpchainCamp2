// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {

  const NftMarket = await hre.ethers.getContractFactory("NftMarket");
  const nftMarket = await NftMarket.deploy("0xd3e8a41f34628cdD44083bcFC39CCC2BBcdb359b","0x59594C5Ca5606f22835bEd868Ab3b93059035100");
  await nftMarket.deployed();
  console.log(
    `nftMarket deployed to ${nftMarket.address}, for verify: npx hardhat verify ${nftMarket.address} --network mumbai`
  );


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});