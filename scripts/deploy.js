// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.

/******* Commented By S.benhadja ********/
/*
const hre = require("hardhat");

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const unlockTime = currentTimestampInSeconds + 60;

  const lockedAmount = hre.ethers.parseEther("0.001");

  const lock = await hre.ethers.deployContract("Lock", [unlockTime], {
    value: lockedAmount,
  });

  await lock.waitForDeployment();

  console.log(
    `Lock with ${ethers.formatEther(
      lockedAmount
    )}ETH and unlock timestamp ${unlockTime} deployed to ${lock.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
********************************************************************/


/*****this script for HelloWorld.sol ***** commented on 27/07/2024 ********/
/**************************************************************************/
/*
async function main() {
  const HelloWorld = await ethers.getContractFactory("HelloWorld");
  console.log("Deploying Contract...")
  const helloWorld = await HelloWorld.deploy("Hello World! Bingo");
  const txHash = helloWorld.deployTransaction.hash;
  const txReceipt = await ethers.provider.waitForTransaction(txHash);
  console.log("Contract deployed to address:",  txReceipt.contractAddress);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
********************************************************************/


/******* add on 27/07/2024 for depoly the Greeter.sol smart contract *****************/
/*************************************************************************************/
/* 
// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through 'node <script>'.
// When running the script with 'npx hardhat run <script>' you'll find the Hardhat
// Runtime Environment's members are available in the global scope.
const {ethers} = require("hardhat");
 
async function main() {
  const Greeter = await ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Hello, Hardhat!");
 
  const txHash = greeter.deployTransaction.hash;
  const txReceipt = await ethers.provider.waitForTransaction(txHash);
  console.log("Greeter deployed to address:",  txReceipt.contractAddress);
 
}
 
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
  **********************************************************************/



/******* this for deploy horoscoopNFT.sol **************/
/*******************************************************/
const hre = require("hardhat");

async function main() {
  console.log("Deploying Contract...");
  const horoscope = await hre.ethers.deployContract(
    "contracts/horoscopeNFT.sol:horoscopeNFT"
  );
  console.log("Contract deployed to address:", horoscope.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

