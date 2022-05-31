async function main() {


  /*
  const HelloWorld = await ethers.getContractFactory("HelloWorld");
  // Start deployment, returning a promise that resolves to a contract object
  const hello_world = await HelloWorld.deploy("Hello World!");
  console.log("Contract HELLO deployed to address:", hello_world.address);


  const Basic = await ethers.getContractFactory("ERC20Basic");
  // Start deployment, returning a promise that resolves to a contract object
  const basic = await Basic.deploy();
  console.log("Contract BASIC deployed to address:", basic.address);

 */

  const Zep = await ethers.getContractFactory("ZEPToken");
  // Start deployment, returning a promise that resolves to a contract object
  const zep = await Zep.deploy(10**20); // 100 tokens
  console.log("Contract ZEP deployed to address:", zep.address);


}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
