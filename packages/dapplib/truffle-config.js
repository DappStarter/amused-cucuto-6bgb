require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh skull drift random stereo huge inner kangaroo army giggle'; 
let testAccounts = [
"0xc3a0f704ae7ce1e8875e72613bffdb3a98bd3fe168e73920e17cc47b5bba7595",
"0x7926283ed21cb3c233a799fd26ac5302160431cf7d6e01a35e04a03f36af2d99",
"0xa01b761eab009e7b75e904d1a1e40155c1e14cdcb71d89f94b92d18069af454f",
"0x6ebdc9b3a9391034c790f33b4a6ee2d6158f8f045cd5443f0b7daebb0bb6ce9e",
"0x4e9118f2ea7cac05de276d72b19c7fadf75dd0877c6b61c6323ced44b92ac756",
"0x63ae63aa56ab18958ca1b77299cbf1f07a8427ee1f648686fcdc02ad121949b4",
"0xcd3c3ebc13aee6d9bf7bc449bb85c761627c7f560ade7b9581bc3a718423508c",
"0xf9e8ee6e8f1c53a49ad7c80201cf758799ac92115e3172ee7a1e110c6924c752",
"0x68152118a68c463fc4d941347a06b03bc9f3e0967fa6ee5de3c82ac5ce051bf7",
"0x807ea05eaf3263504a2d2508cfa734edd26355bb0ffb984337fc77dc2f19ce0c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
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

