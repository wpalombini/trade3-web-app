const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Trade3Minter Smart Contract', () => {
  let trade3MinterContract;
  let deployer, user1, user2, users;

  beforeEach(async () => {
    [deployer, user1, user2, ...users] = await ethers.getSigners();

    const Trade3MinterFactory = await ethers.getContractFactory('Trade3Minter');

    trade3MinterContract = await Trade3MinterFactory.deploy();

    await trade3MinterContract.deployed();
  });

  describe('mint', () => {
    it('mints a new token successfully', async () => {
      const tokenURI1 = 'testURI1';
      const tokenURI2 = 'testURI2';

      await expect(trade3MinterContract.mint(user1.address, tokenURI1))
        .to.emit(trade3MinterContract, 'TokenMinted')
        .withArgs(1, tokenURI1, user1.address);

      await expect(trade3MinterContract.mint(user2.address, tokenURI2))
        .to.emit(trade3MinterContract, 'TokenMinted')
        .withArgs(2, tokenURI2, user2.address);
    });
  });
});
