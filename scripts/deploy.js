const hre = require("hardhat");

async function main() {
  const { ethers } = hre;
  const Assessment = await ethers.getContractFactory("Assessment");
  const assessment = await Assessment.deploy();
  await assessment.deployed();

  console.log(`Contract deployed to ${assessment.address} with an initial balance of 1 ETH`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
