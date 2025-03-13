# vetkeys-client-utils

Makes ic-vetkd-utils usable in Expo and smartphone WebViews. This package provides a TypeScript-friendly wrapper around the Internet Computer's VETKeys (Verifiable Encrypted Threshold Keys) functionality.

## Installation

```bash
npm install vetkeys-client-utils
```

## Features

- Identity-Based Encryption (IBE) operations
- Symmetric key creation
- Transport Secret Key management
- Full TypeScript support
- Version-independent principal handling (accepts raw Uint8Array)

## Usage

### Creating a Transport Secret Key

```typescript
import { createTransportSecretKey } from 'vetkeys-client-utils';

// Create a transport secret key from a 32-byte seed
const seed = new Uint8Array(32); // Your secure random seed
const tsk = createTransportSecretKey(seed);

// Get the public key
const publicKey = tsk.getPublicKey();
```

### Creating a Symmetric Key

```typescript
import { createSymmetricKey } from 'vetkeys-client-utils';

const key = createSymmetricKey({
  seed: new Uint8Array(32), // Your secure random seed
  encryptedKey: encryptedKeyBytes, // From your canister
  publicKey: publicKeyBytes, // From your canister
  principal: principalBytes, // Principal as Uint8Array
  keyLength: 32, // Optional, defaults to 32
  purpose: 'aes-256-cbc-hmac-sha256', // Optional, defaults to 'aes-256-cbc-hmac-sha256'
});
```

### Encrypting Data with IBE

```typescript
import { ibeEncrypt } from 'vetkeys-client-utils';

const ciphertext = await ibeEncrypt({
  data: new TextEncoder().encode('Hello, World!'), // Data to encrypt
  principal: principalBytes, // Principal as Uint8Array
  publicKey: publicKeyBytes, // From your canister
  seed: new Uint8Array(32), // Random seed for encryption
});
```

### Decrypting Data with IBE

```typescript
import { ibeDecrypt } from 'vetkeys-client-utils';
import * as vetkd from 'ic-vetkd-utils-wasm2js';

const plaintext = await ibeDecrypt({
  ciphertext: encryptedData, // Encrypted data
  principal: principalBytes, // Principal as Uint8Array
  encryptedKey: encryptedKeyBytes, // From your canister
  publicKey: publicKeyBytes, // From your canister
  tsk: new vetkd.TransportSecretKey(seed), // Your transport secret key
});
```

## API Reference

### `createTransportSecretKey(seed: Uint8Array): TransportSecretKeyWrapper`

Creates a new transport secret key wrapper from a 32-byte seed.

### `createSymmetricKey(params: CreateSymmetricKeyParams): Uint8Array`

Creates a symmetric key using Identity-Based Encryption.

### `ibeEncrypt(params: IBEEncryptParams): Promise<Uint8Array>`

Encrypts data using Identity-Based Encryption.

### `ibeDecrypt(params: IBEDecryptParams): Promise<Uint8Array>`

Decrypts data using Identity-Based Encryption.

### `TransportSecretKeyWrapper`

A class that wraps the VETKeys transport secret key functionality:

- `getPublicKey()`: Gets the public key
- `decrypt(params)`: Decrypts an encrypted key
- `decryptAndHash(params)`: Decrypts and hashes to derive a symmetric key

## Development

1. Install dependencies:

```bash
npm install
```

2. Run tests:

```bash
npm test
```

3. Build the package:

```bash
npm run build
```

## License

MIT
