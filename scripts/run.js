const {ethers} = require("hardhat");

async function main(){

  const deployNFTContract = await ethers.deployContract("ElonNFT");

  const elon = await deployNFTContract.deployed();

  console.log("Elon contract address is:", await elon.address);

  console.log("Minting NFT...");
  let txn = await elon.mintNFT();
  await txn.wait();
  console.log("Yayy.. NFT minted successfully!!!");
}

main().then(() => process.exit(0))
.catch((err) => {
  console.error(err);
  process.exit(1);
})
