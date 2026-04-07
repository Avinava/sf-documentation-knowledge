---
title: "Notification"
domain: mobile-sdk
topic: notification
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:27.326Z
estimatedTokens: 134
keywords: [Notification, Android, Fetches, iOS]
---

> Fetches a single notification by its notification ID.

# Notification

Fetches a single notification by its notification ID.

## Parameters

-   API version (string)
-   Notification ID (string)

## iOS

Swift

```

```

Objective-C

```

```

## Android

Kotlin

fun getRequestForNotification(apiVersion: String?, notificationId: String?): RestRequest

Java

```

```

## See Also

-   [“Notification” in *Connect REST API Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_resource_notifications_specific.htm "HTML (New Window)")

## Code Examples

```
RestClient.shared.request(forNotification:apiVersion:)
```

```
#import <SalesforceSDKCore/SFRestAPI+Notifications.h>
...
- (SFRestRequest *)requestForNotification:(NSString *)notificationId apiVersion:(NSString *)apiVersion;
```

```apex
public static RestRequest getRequestForNotification(String apiVersion, String notificationId)
```
