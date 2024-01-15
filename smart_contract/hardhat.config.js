require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/u4eW1m24T1Fmp0YmE9iZPyxd1q6JIkQc`,
      accounts: [`309383c9fb1f3c1be0056bca53cb93adbce293cf250f8fda8215625f32a88c2e`]
    },
  }
};
