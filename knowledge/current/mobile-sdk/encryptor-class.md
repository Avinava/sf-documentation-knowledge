---
title: "Encryptor class"
domain: mobile-sdk
topic: encryptor-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:24.892Z
estimatedTokens: 150
keywords: [Encryptor, helper, encrypting, decrypting, strings, hashes, SDK, It’s, native, apps, remember, keys, Mobile, Base64-encoded, encryption, patterns, accepted]
---

> The Encryptor helper class
provides static helper methods for encrypting and decrypting strings
using the hashes required by the SDK. It’s important for native
apps to remember that all keys used by the Mobile SDK must be Base64-encoded.
No other encryption patterns are accepted. Use the Encryptor c

# Encryptor class

The Encryptor helper class provides static helper methods for encrypting and decrypting strings using the hashes required by the SDK. It’s important for native apps to remember that all keys used by the Mobile SDK must be Base64-encoded. No other encryption patterns are accepted. Use the Encryptor class when creating hashes to ensure that you use the correct encoding.

Most Encryptor methods are for internal use, but apps are free to use this utility as needed. For example, if an app implements its own database, it can use Encryptor as a free encryption and decryption tool.
