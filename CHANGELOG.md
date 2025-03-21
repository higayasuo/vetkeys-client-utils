# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.2] - 2024-03-13

### Changed

- Moved `ic-vetkd-utils-wasm2js` from dependencies to peerDependencies
- Changed main entry point to `index.cjs` for better CommonJS compatibility

## [0.1.1] - 2024-03-13

### Changed

- Changed principal type from `Principal` to `Uint8Array` to make it version-independent
- Removed `TransportSecretKeyWrapper` class in favor of direct `vetkd.TransportSecretKey` usage
- Removed dependency on `@dfinity/principal`

## [0.1.0] - 2024-03-07

### Added

- Initial release
- TypeScript-friendly wrapper for VETKeys functionality
- Support for Expo and smartphone WebViews
- Identity-Based Encryption (IBE) operations
  - `ibeEncrypt`: Encrypt data using IBE
  - `ibeDecrypt`: Decrypt data using IBE
- Symmetric key creation with `createSymmetricKey`
- Transport Secret Key management
  - `createTransportSecretKey`: Create a new transport secret key
  - `TransportSecretKeyWrapper` class with methods:
    - `getPublicKey`: Get the public key
    - `decrypt`: Decrypt an encrypted key
    - `decryptAndHash`: Decrypt and hash to derive a symmetric key

### Dependencies

- `ic-vetkd-utils-wasm2js`: ^0.1.0

[0.1.2]: https://github.com/higayasuo/vetkeys-client-utils/releases/tag/v0.1.2
[0.1.1]: https://github.com/higayasuo/vetkeys-client-utils/releases/tag/v0.1.1
[0.1.0]: https://github.com/higayasuo/vetkeys-client-utils/releases/tag/v0.1.0
