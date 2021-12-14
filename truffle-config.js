const HDWalletProvider = require("@truffle/hdwallet-provider");
const fs = require("fs");
const secrets = JSON.parse(fs.readFileSync(".secrets.json").toString().trim());

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },

    bsc_testnet: {
      provider: () => new HDWalletProvider(secrets.mnemonic, `https://data-seed-prebsc-2-s2.binance.org:8545/`),
      network_id: 97,
      confirmations: 3,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
  },

  compilers: {
    solc: {
      settings: {
        optimizer: {
          enabled: true,
          runs: 1000
        },
      },
      version: "0.6.12"
    },
  },
}
