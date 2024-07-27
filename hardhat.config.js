require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
/** @type import('hardhat/config').HardhatUserConfig */
const { PRIVATE_KEY } = process.env;
module.exports = {
  solidity: "0.8.24",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/YfAPAyxybFpzFSlTGEt1PWdIN4X6MpLA",
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};
