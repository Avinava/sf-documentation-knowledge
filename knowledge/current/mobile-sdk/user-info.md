---
title: "User Info"
domain: mobile-sdk
topic: user-info
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:27.403Z
estimatedTokens: 99
keywords: [Android, User, Info, current, iOS]
---

> Returns information associated with the current user.

# User Info

Returns information associated with the current user.

## iOS

Swift

```

```

Objective-C

```

```

## Android

Kotlin

val requestForUserInfo: RestRequest

Java

```

```

## See Also

-   [“Query for User Information” in *Salesforce Help*](https://help.salesforce.com/s/articleView?id=xcloud.remoteaccess_using_userinfo_endpoint.htm&type=5&language=en_US "HTML (New Window)")

## Code Examples

```
RestClient.shared.requestForUserInfo()
```

```
- (SFRestRequest *)requestForUserInfo;
```

```apex
public static RestRequest getRequestForUserInfo()
```
