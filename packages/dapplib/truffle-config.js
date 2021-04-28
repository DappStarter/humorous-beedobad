require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half problem forward tooth warrior ridge remain erosion grace casino sudden seminar'; 
let testAccounts = [
"0x190cedf3a7c5faf96418bf8225f196a7f70c1d1736119f32f043a99829c13200",
"0xff08fbcd4f37df285a4f898b3701e101d8baa21ee750402e56d02f236a304f92",
"0xe370e3752f289820c1478361fba68edf32e02f9bbb714828bd7cbd09fe1a9486",
"0x95c094b8646ae16f8b2c23fb6e0916a164716618d233eeb7f9ec7135e78fe3ce",
"0xe182dd7a207d3a7d6a6485bca0f4f3288585ad1be3242a0c1b02c2e9ae0b12e0",
"0x01ebbcd7bca8fa4669f7a45045d4191a5dec759602be50179260a842afa8a8cc",
"0x103b5946bccbeb72dc92c6576528a9fe869d91e53d1fb7c86037a378fc953a1f",
"0xea65d24c3aac79713b373f07be4de857b8a4583767189206db2c6d21d59e23d4",
"0x68f2b45d42b95d5d0f647a49e1050967b16c609a4e3364da417b755c965b25c9",
"0x289970d9d0b8e74874701b378fe25d8b4030d3a2ebb34725e22cf1ff88b7aa21"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
