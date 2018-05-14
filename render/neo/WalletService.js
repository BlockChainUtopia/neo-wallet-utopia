// @flow
import { wallet } from '@cityofzion/neon-js';
/**
 * notes:

 */
type WalletAccount = {
  address: string,
  encrypted?: string,
  privateKey: string,
  publicKey: string,
  scriptHash: string,
  /**
   * WIF -> wallet import format , it is transformed from privateKey
   * core.getWIFFromPrivateKey(this._privateKey)
   */
  WIF: string,
  encryptedWIF?: string,
  passphase?: string
}
/**
 * 生成一个neo账号，并通过passphase生成encryted key
 * @param {*} passphase 
 * @param {*} confirmPassphase 
 * @param {*} wif 
 */
export function createWalletAccount(passphase: string, confirmPassphase: string, wif?: string): ?WalletAccount {

  if (passphase !== confirmPassphase) return null;

  var account = new wallet.Account(wif || wallet.generatePrivateKey());
  const encryptedWIF = wallet.encrypt(account.WIF, passphase);
  console.log(account);

  const result: WalletAccount = {
    address: account.address,
    privateKey: account.privateKey,
    publicKey: account.publicKey,
    scriptHash: account.scriptHash,
    WIF: account.WIF,
    encryptedWIF,
    passphase,
  }

  return result;
}

export function add(x: number, y: number): number {
  return x + y;
}


