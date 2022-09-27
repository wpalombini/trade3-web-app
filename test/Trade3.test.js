const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Trade3 Smart Contract', () => {
  let trade3Contract;
  let deployer, user1, user2, users;

  beforeEach(async () => {
    [deployer, user1, user2, ...users] = await ethers.getSigners();

    const Trade3Factory = await ethers.getContractFactory('Trade3');

    trade3Contract = await Trade3Factory.deploy();

    await trade3Contract.deployed();
  });

  describe('testFunction', () => {
    it('should return 1', async () => {
      expect(await trade3Contract.testFunction()).to.equal(1);
    });
  });
});
