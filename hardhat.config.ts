// require("@nomicfoundation/hardhat-toolbox");
// require("dotenv").config();
// require("@nomiclabs/hardhat-etherscan");
// require("./tasks/block-number");
// require("hardhat-gas-reporter");
// require("solidity-coverage"); //command terminal : yarn hardhat coverage

import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";
import "@nomiclabs/hardhat-etherscan"
import "./tasks/block-number"
import "hardhat-gas-reporter"
import "solidity-coverage" //command terminal : yarn hardhat coverage
import "@typechain/hardhat" //pour avoir le type de contrat que l'on veut (typescript) dans le fichier de test "test-deploy.ts"

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL || "";
const PRIVATE_KEY = process.env.PRIVATE_KEY  || "";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY  || "";
const COINMARKETCAP = process.env.COINMARKETCAP  || "";


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    goerli: {
      url: GOERLI_RPC_URL,
      accounts: [`0x${PRIVATE_KEY}`],
      chainId: 5
    },
    localhost: {
      url: "http://127.0.0.1:8545",
      //accounts : Thanks hardhat !
      chainId: 31337,
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  gasReporter: {
    enabled: true,
    outputFile: "gas-report.txt",
    noColors: true,
    currency: "USD",
    coinmarketcap: COINMARKETCAP,
    //token: "MATIC"
  },
  solidity: "0.8.17",
};