const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const {ethers} = require('hardhat');
const contract = require("../artifacts/contracts/HelloWorld.sol/HelloWorld.json");

// provider - Alchemy
const alchemyProvider = new ethers.providers.AlchemyProvider(network="ropsten", API_KEY);


// signer - owner of private key (me) --> it should be the client
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

// contract instance --> any tume interacting with that we are interacting with the contract in the address CONTRACT_ADDRESS, 
// which has the interface contract.abi and it is going to be me who is interacting with the contract
const helloWorldContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

async function main() {
    const message = await helloWorldContract.message(); // we can access to the variable because it is public
    console.log("The message is: "+ message);

    console.log("Updating message");

    const tx = await helloWorldContract.update("uoooo world");

    await tx.wait(); // make sure that transaction is done in the blockchain

    const newMessage = await helloWorldContract.message(); // we can access to the variable because it is public
    console.log("The new message is: "+ newMessage);

}

 
main()
.then(() => process.exit(0))
.catch(error => {
  console.error(error);
  process.exit(1);
});
