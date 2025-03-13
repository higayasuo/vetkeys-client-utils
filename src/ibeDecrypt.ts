import * as vetkd from 'ic-vetkd-utils-wasm2js';

export interface IBEDecryptParams {
  ciphertext: Uint8Array;
  principal: Uint8Array;
  encryptedKey: Uint8Array;
  publicKey: Uint8Array;
  tsk: vetkd.TransportSecretKey;
}

/**
 * Decrypts a message using Identity-Based Encryption (IBE).
 * @param {IBEDecryptParams} params - The parameters for IBE decryption.
 * @returns {Promise<Uint8Array>} The decrypted data.
 */
export const ibeDecrypt = async ({
  ciphertext,
  principal,
  encryptedKey,
  publicKey,
  tsk,
}: IBEDecryptParams): Promise<Uint8Array> => {
  const keyBytes = tsk.decrypt(encryptedKey, publicKey, principal);
  const ciphertextObj = vetkd.IBECiphertext.deserialize(ciphertext);
  return ciphertextObj.decrypt(keyBytes);
};
