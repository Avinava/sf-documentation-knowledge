---
title: "Secure Key Storage in iOS"
domain: mobile-sdk
topic: secure-key-storage-in-ios
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:25.227Z
estimatedTokens: 1006
keywords: [Secure, Key, Storage, iOS, protect, customer, Mobile, SDK, encrypts, sensitive, user, identity, tokens, SmartStore, databases, normal, workflow, protection, pattern, uses, considered, highly, However, “zero, day”, vulnerabilities, arise, heavily, guarded, schemes, stay, ahead, hackers, malicious, attacks, continually, upgrades, encryption, highest, standards, supports, Upgrading, Apps]
---

> To protect customer information, Mobile SDK encrypts sensitive
  data such as user identity tokens and SmartStore databases. In a normal
  workflow, the data protection pattern Mobile SDK uses is considered
  highly secure. However, “zero day” vulnerabilities can arise even in the most heavily guarded
  schemes. To stay ahead of hackers and malicious attacks, Mobile SDK continually
  upgrades its key encryption to the highest standards iOS supports.

# Secure Key Storage in iOS

To protect customer information, Mobile SDK encrypts sensitive data such as user identity tokens and SmartStore databases. In a normal workflow, the data protection pattern Mobile SDK uses is considered highly secure. However, “zero day” vulnerabilities can arise even in the most heavily guarded schemes. To stay ahead of hackers and malicious attacks, Mobile SDK continually upgrades its key encryption to the highest standards iOS supports.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=mobile_sdk)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

In iOS, each type of customer data uses its own unique key. These keys are stored in the iOS keychain and encrypted by a master key.

Within the iOS keychain, the master key is encrypted on disk and is accessible only to the app. The master key is secured with an industry-standard 256-bit Advanced Encryption Standard (AES) key. Nevertheless, a slight risk of exposure to malicious apps still exists. To impose extra protection, Mobile SDK provides the following enhancements.

-   It stores the master key in Apple’s hardware-based Secure Enclave. Mobile SDK apps never access private keys stored in the Secure Enclave. To create keys, store them securely, and perform other protected operations, Mobile SDK itself calls Secure Enclave APIs. The app receives only the requested output, such as encrypted SmartStore data, without handling unencrypted sensitive data.
-   It protects the master key with a 256-bit elliptic curve cryptography (ECC) private key. A 256-bit ECC private key is equivalent to a 3072-bit RSA private key. ECC format is the basis of cryptocurrencies such as BitCoin and Ethereum.

When an upgraded app first runs on a device, Mobile SDK automatically converts the master key to the current encryption level and moves it to the Secure Enclave.

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

Secure Enclave is available only on devices with Apple A7 or later A-series processors. On devices that don't support Secure Enclave, the master key remains in the keychain.

## Upgrading Encryption in Apps

Mobile SDK 9.2 updates its default encryption from AES-CBC to AES-GCM. For most apps, Mobile SDK handles this upgrade silently without requiring app changes. For a few cases, though, the app itself must perform a minor upgrade step.

Action on your part is required if:

-   **Your app initializes **KeyValueEncryptedFileStore** directly rather than going through the shared store class methods.**

    In this case, before initializing the key store, call **KeyValueEncryptedFileStore.updateEncryption(\_:\_:\_:)**. For the legacyKey argument, pass the key that was used originally to create the store. After the upgrade, the key will be managed by Mobile SDK. For example:

    ```

    ```

-   **Your app uses the **SFSmartStore** **setEncryptionKeyBlock:** Objective-C method.**

    To upgrade store encryption, continue using setEncryptionKeyBlock: with the original key. Mobile SDK 9.2 or later performs the encryption upgrade at runtime and then replaces the default SmartStore key with a new key that it generates.

    Although this automatic key replacement is the recommended path, you can opt to replace the default key yourself. To do so, call setEncryptionKeyGenerator: with a new key that you provide.

    In a future release, you can remove your call to setEncryptionKeyBlock:.


## See Also

-   [Storing Keys in the Secure Enclave (developer.apple.com/documentation/security)](https://developer.apple.com/documentation/security/certificate_key_and_trust_services/keys/storing_keys_in_the_secure_enclave "HTML (New Window)")
-   [Elliptic Curve Cryptography (wikipedia.com)](https://en.wikipedia.org/wiki/Elliptic-curve_cryptography "HTML (New Window)")

## Code Examples

```
// Pre 9.2 
let key = SFKeyStoreManager.sharedInstance().retrieveKey(withLabel: "kv_key", 
    autoCreate: true)
let store = KeyValueEncryptedFileStore(parentDirectory: "directory/path", 
    name: "storeName", encryptionKey: key)

// 9.2 upgrade
let key = SFKeyStoreManager.sharedInstance().retrieveKey(withLabel: "kv_key", 
    autoCreate: true)
KeyValueEncryptedFileStore.updateEncryption(parentDirectory: "directory/path", 
    name: "storeName", legacyKey: key)
let store = KeyValueEncryptedFileStore(parentDirectory: "directory/path", 
    name: "storeName")
```
