
import { wallet } from '@cityofzion/neon-js';
import { add, createWalletAccount } from '../../render/neo/WalletService';

test('AP6jRHfaaxLsuYrbn1PkCFBbHvyg7CzAoQ is Address : true', () => {
  expect(wallet.isAddress("AP6jRHfaaxLsuYrbn1PkCFBbHvyg7CzAoQ")).toBe(true);
});

test('createWalletAccount ', () => {
  const passphase = '123456';
  const account = createWalletAccount(passphase, passphase);
  console.log(account);
  expect(account.address !== null).toBe(true);
});

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

