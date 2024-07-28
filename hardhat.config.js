require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
/** @type import('hardhat/config').HardhatUserConfig */
const { PRIVATE_KEY } = process.env;
module.exports = {
  solidity: "0.8.24",
  // defaultNetwork: "sepolia",
  defaultNetwork: "amoy",
  networks: {
    hardhat: {},
    // sepolia: {
    //   url: "https://eth-sepolia.g.alchemy.com/v2/YfAPAyxybFpzFSlTGEt1PWdIN4X6MpLA",
    amoy: {
      url: "https://rpc.ankr.com/polygon_amoy",
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};
