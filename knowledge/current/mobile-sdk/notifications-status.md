---
title: "Notifications Status"
domain: mobile-sdk
topic: notifications-status
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:27.342Z
estimatedTokens: 154
keywords: [Android, Notifications, Status, current, user’s, including, unread, unseen, count, iOS]
---

> Get the status of the current user’s notifications, including unread and unseen
        count.

# Notifications Status

Get the status of the current user’s notifications, including unread and unseen count.

## Parameters

-   API version (string)

## iOS

Swift

For the default forNotificationsStatus parameter, pass the API version string.

```

```

Objective-C

```

```

## Android

Kotlin

fun getRequestForNotificationsStatus(apiVersion: String?): RestRequest

Java

```

```

## See Also

-   [“Notifications Status” in *Connect REST API Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_resources_notifications_status.htm "HTML (New Window)")

## Code Examples

```
RestClient.shared.request(forNotificationsStatus:)
```

```
#import <SalesforceSDKCore/SFRestAPI+Notifications.h>
...
- (SFRestRequest *)requestForNotificationsStatus:(NSString *)apiVersion;
```

```apex
public static RestRequest getRequestForNotificationsStatus(String apiVersion)
```
