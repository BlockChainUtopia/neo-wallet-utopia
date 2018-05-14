/**
 * neon-js 库相关的代码unitest
 */
import {wallet} from '@cityofzion/neon-js';

const walletAccount = { 
  address: 'AUMgtJsw3kBrcA7poBYNaonZTGMNoqZNLy',
  privateKey: '10bb026b4015c481f0b5142aa5de36de40a99fc8c26e956011a3f820f7708fba',
  publicKey: '03af2ad8725c4926632d6816f5502d8f749dec369afadfe0bb5ac697fe22a0ef77',
  scriptHash: 'a8f677c132f2c82d73ff138e817e784c25ab068a',
  WIF: 'KwnETPM2m8wTAY3qySvDVLf3Vpfg77nvJhxR2Qyi8uMWKoqP1Q3f',
  encryptedWIF: '6PYVHykkA1TfyQ2344wftv5e7vRoecV4iVwEVZ62aqCAx3dh3LDrRV19AS',
  passphase: '123456' 
};

// WIF <=> privateKey
test('WIF <=> privateKey',()=>{
  const wif = wallet.getWIFFromPrivateKey(walletAccount.privateKey);
  expect(wif).toBe(walletAccount.WIF);
  const privateKey = wallet.getPrivateKeyFromWIF(walletAccount.WIF);
  expect(privateKey).toBe(walletAccount.privateKey);
});

// privateKey => publicKey
test(`privateKey => publicKey:${walletAccount.privateKey}`,()=>{
  const pubKey = wallet.getPublicKeyFromPrivateKey(walletAccount.privateKey);
  expect(pubKey).toBe(walletAccount.publicKey);
});

// publicKey => ScriptHash
test(`publicKey => ScriptHash:${walletAccount.publicKey}`,()=>{
  const scriptHash = wallet.getScriptHashFromPublicKey(walletAccount.publicKey);
  expect(scriptHash).toBe(walletAccount.scriptHash);
});

// scriptHash <=> address
test('scriptHash <=> address',()=>{
  const address = wallet.getAddressFromScriptHash(walletAccount.scriptHash);
  expect(address).toBe(walletAccount.address);
  const scriptHash = wallet.getScriptHashFromAddress(walletAccount.address);
  expect(scriptHash).toBe(walletAccount.scriptHash);
});