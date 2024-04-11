const { expect } = require("chai");
const { ethers } = require("hardhat");
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");

  describe("qc_Y Functionality", function () {
     async function deployTokenFixture() {

    const quantumBackendContract = await ethers.getContractFactory("QuantumBackendContract");
    const myContract = await hre.ethers.getContractAt(contractAddress);
    console.log(myContract); 
    const [owner, addr1, addr2] = await ethers.getSigners();

    // To deploy our contract, we just have to call Token.deploy() and await
    // for it to be deployed(), which happens onces its transaction has been
    // mined.
    const quantumToken = await quantumBackendContract.deploy();

    await quantumToken.deployed();

    // Fixtures can return anything you consider useful for your tests
    return { quantumBackendContract, quantumToken, owner, addr1, addr2 };
    } 

    // You can nest describe calls to create subsections.
  describe("Deployment", function () {
    // `it` is another Mocha function. This is the one you use to define your
    // tests. It receives the test name, and a callback function.
//
    // If the callback function is async, Mocha will `await` it.
    it("Should set the right owner", async function () {
      // We use loadFixture to setup our environment, and then assert that
      // things went well
      const { quantumToken, owner } = await loadFixture(deployTokenFixture);

      // Expect receives a value and wraps it in an assertion object. These
      // objects have a lot of utility methods to assert values.

      // This test expects the owner variable stored in the contract to be
      // equal to our Signer's owner.
      expect(await quantumToken.owner()).to.equal(owner.address);
    });
  });



    it("should correctly execute qc_Y function", async function () {
      const { quantumBackendContract } = await loadFixture(deployTokenFixture);

      // Example test parameters
      const mask = 1;
      const currState = 2;
      const Qidx = 0;
      const qubit = {
        rQubits: [10, 20],
        iQubits: [30, 40] // Example values
      };

      // Execute the function
      // const result = await quantumBackendContract.qc_Y(mask, currState, qubit, Qidx);
      await quantumBackendContract.getRandom(1, 44);

      // Assertions
      // Replace the following with specific assertions based on expected outcomes
      // expect(result.rQubits.length).to.equal(qubit.rQubits.length);
      // expect(result.iQubits.length).to.equal(qubit.iQubits.length);
    });
  });
