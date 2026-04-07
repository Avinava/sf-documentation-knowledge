---
title: "Secure Key Storage in Android"
domain: mobile-sdk
topic: secure-key-storage-in-android
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:29.835Z
estimatedTokens: 451
keywords: [Secure, Key, Storage, Android, Mobile, SDK, encrypts, data, user, identity, tokens, SmartStore, databases, normal, workflow]
---

# Secure Key Storage in Android

> Mobile SDK
    encrypts data such as user identity tokens and SmartStore databases. In a
    normal workflow, the data protection pattern Mobile SDK uses is
    considered highly secure. However, “zero day” vulnerabilities can arise even in the most heavily
    guarded schemes. To stay ahead of hackers and malicious attacks, Mobile SDK reinforces its
    encryption with the highest standards Android supports.

# Secure Key Storage in Android

Mobile SDK encrypts data such as user identity tokens and SmartStore databases. In a normal workflow, the data protection pattern Mobile SDK uses is considered highly secure. However, “zero day” vulnerabilities can arise even in the most heavily guarded schemes. To stay ahead of hackers and malicious attacks, Mobile SDK reinforces its encryption with the highest standards Android supports.

For some time, Mobile SDK has used a symmetric key pair for its encryption tasks. Mobile SDK 7.1 and later adds another level of encryption on top of this scheme that takes advantage of the Android Keystore. Any device that meets the current Mobile SDK Android requirements can support Android Keystore. Keystore implementation is hardware-dependent and varies with Android API version, device manufacturer, and other factors.

To enhance security, Mobile SDK generates an asymmetric public-private key pair to encrypt its symmetric key pair. This asymmetric key pair, which uses RSA-2048 encryption, is stored in the Android Keystore. At runtime, Mobile SDK encrypts the symmetric key with the asymmetric public key and then stores the encrypted key in a SharedPreferences file. To decrypt customer data, the app asks Mobile SDK for the symmetric key. To access that key, Mobile SDK fetches the asymmetric private key from the Keystore and uses it to decrypt the contents of the SharedPreferences file. Mobile SDK then delivers the unencrypted symmetric key to the application.

## Upgrading Apps

Mobile SDK automatically upgrades its keys to the new encryption scheme. Behavior and usage of getEncryptionKey() is unchanged.

## See Also

-   [“Android keystore system” at developer.android.com](https://developer.android.com/training/articles/keystore "HTML (New Window)")
