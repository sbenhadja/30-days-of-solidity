require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
/** @type import('hardhat/config').HardhatUserConfig */
const { PRIVATE_KEY, ALCHEMY_HTTP_URL,ANKR_HTTP_URL } = process.env;

module.exports = {
  solidity: "0.8.24",
  // defaultNetwork: "eth_sepolia",
  // defaultNetwork: "polygon_amoy",
  networks: {

    hardhat: {},
    eth_sepolia: {
      url: ALCHEMY_HTTP_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    polygon_amoy : {
      url: ANKR_HTTP_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};
