const fs = require('fs');
const { ethers } = require('hardhat');

async function main() {
  const [deployer, user1] = await ethers.getSigners();
  // We get the contract factory to deploy
  const Trade3Factory = await ethers.getContractFactory('Trade3');
  // Deploy contract
  const trade3 = await Trade3Factory.deploy();
  // Save contract address file in project
  const contractsDir = __dirname + '/../src/contractsData';
  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(contractsDir + `/trade3-address.json`, JSON.stringify({ address: trade3.address }, undefined, 2));

  const contractArtifact = artifacts.readArtifactSync('Trade3');

  fs.writeFileSync(contractsDir + `/trade3.json`, JSON.stringify(contractArtifact, undefined, 2));
  console.log('Trade3 deployed to:', trade3.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
