---
title: "iOS APIs Removed in Mobile SDK 11.0"
domain: mobile-sdk
topic: ios-apis-removed-in-mobile-sdk-110
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:27.467Z
estimatedTokens: 265
keywords: [SFCryptChunks, SFDecryptStream, SFEncryptionKey, SFKeyStoreManager, SFSecureEncryptionKey, SFSoupSpec, SFAlterSoupLongOperation, SFSmartStore, iOS, APIs, Removed, Mobile, SDK, 11.0, show, artifacts, were, 10.0]
---

> These lists show Mobile SDK objects and
    artifacts for iOS that were removed in Mobile SDK 10.0.

# iOS APIs Removed in Mobile SDK 11.0

These lists show Mobile SDK objects and artifacts for iOS that were removed in Mobile SDK 10.0.

## SFCryptChunks

```

```

## SFDecryptStream

```

```

-   Use SFSDKDecryptStream instead. This class should only be used for upgrade steps.

## SFEncryptionKey

```

```

## SFKeyStoreManager

```

```

## SFSecureEncryptionKey

```

```

## SFSoupSpec

```

```

-   External storage and soup spec have been removed in 11.0.

## SFAlterSoupLongOperation

```

```

-   External storage and soup spec have been removed in 11.0 - use other constructor instead.

## SFSmartStore

```

```

-   External storage and soup spec have been removed in 11.0.

```

```

-   External storage and soup spec have been removed in 11.0. Use registerSoup with soupName instead.

```

```

-   External storage and soup spec have been removed in 11.0.

```

```

-   External storage and soup spec have been removed in 11.0.

```

```

-   External storage and soup spec have been removed in 11.0. Use other alterSoup method instead.

## Code Examples

```
@interface SFCryptChunks : NSObject
```

```
@interface SFDecryptStream : NSInputStream <SFCryptChunksDelegate>
```

```
@interface SFEncryptionKey : NSObject <NSCoding, NSCopying>
```

```
@interface SFKeyStoreManager : NSObject
```

```
@interface SFSecureEncryptionKey : SFEncryptionKey
```
