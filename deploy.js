const hre = require("hardhat");

async function main() {
  const [owner1, owner2, owner3] = await hre.ethers.getSigners();
  
  console.log("Deploying Multisig with owners:");
  console.log("1:", owner1.address);
  console.log("2:", owner2.address);
  console.log("3:", owner3.address);

  // Deploy Multisig requiring 2 out of 3 confirmations
  const MultiSigWallet = await hre.ethers.getContractFactory("MultiSigWallet");
  const wallet = await MultiSigWallet.deploy(
    [owner1.address, owner2.address, owner3.address],
    2
  );

  await wallet.waitForDeployment();
  console.log(`MultiSig Wallet deployed to: ${wallet.target}`);

  // Test: Send ETH to the wallet
  await owner1.sendTransaction({
    to: wallet.target,
    value: hre.ethers.parseEther("1.0")
  });
  console.log("Sent 1 ETH to wallet");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
