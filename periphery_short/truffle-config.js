require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: "7545",
      network_id: "*" // match any network id
    },
    // rinkeby: {
    //     host: "localhost",
    //     port: 8545,
    //     network_id: 4,
    //     gas: 4700000
    // },
    rinkeby: {
      from: process.env.OPERATOR_ADDRESS,
      provider: () => new HDWalletProvider(process.env.OPERATOR_PRIVATE_KEY, 'https://rinkeby.infura.io/v3/'.concat(process.env.INFURA_PROJECT_ID)),
      network_id: 4,       // Ropsten's id
      gas: 4700000        // Ropsten has a lower block limit than mainnet
    },
    ropsten: {
      from: process.env.OPERATOR_ADDRESS,
      provider: () => new HDWalletProvider(process.env.OPERATOR_PRIVATE_KEY, 'https://ropsten.infura.io/v3/'.concat(process.env.INFURA_PROJECT_ID)),
      network_id: 3,       // Ropsten's id
      gas: 4700000        // Ropsten has a lower block limit than mainnet
    }

  }
};
