require("@nomicfoundation/hardhat-toolbox");

let dotenv = require("dotenv");
dotenv.config({path:"./.env"})

const mnemonic = process.env.Mnemonic
const scankey = process.env.Polygon_API_KEY


/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  defaultNetwork: "mumbai",
  networks: {
    hardhat: {
    },
    goerli: {
      url: "https://goerli.infura.io/v3/3f381652632a4f70af6c9dcde5bf9d94",
      accounts: {mnemonic:mnemonic,},
      chainId:5
    },
    // polygon
    mumbai: {
      url: "https://endpoints.omniatech.io/v1/matic/mumbai/public",
      accounts: {mnemonic:mnemonic,},
      chainId:80001
    }
  },
  solidity: {
    version: "0.8.10",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  etherscan: {
    
      apiKey: scankey
    
  },
  mocha: {
    timeout: 20000
  }
}