const main = async () => {
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();
    console.log("COntract deployed to:", waveContract.address);
};

const runMain =async () => {
    try {
        await main();
        process.exit(0);
    } catch (error){
        console.log(error);
        process(1);
    }
};

runMain();