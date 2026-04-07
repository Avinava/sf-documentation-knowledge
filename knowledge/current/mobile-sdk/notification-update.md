---
title: "Notification Update"
domain: mobile-sdk
topic: notification-update
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:27.331Z
estimatedTokens: 221
keywords: [Android, Notification, Updates, “read”, non-null, “seen”, statuses, iOS]
---

> Updates the “read” (if non-null) and “seen” (if non-null) statuses of the
        notification with the given ID.

# Notification Update

Updates the “read” (if non-null) and “seen” (if non-null) statuses of the notification with the given ID.

## iOS

In iOS, use the Swift UpdateNotificationsRequestBuilder object or the Objective-C SFSDKUpdateNotificationsRequestBuilder object to create update requests.

Pass the notification’s ID to the notificationId property

Swift

```

```

Objective-C

```

```

## Android

**Parameters**

-   apiVersion (String)
-   notificationId (String)
-   read (Boolean)
-   seen (Boolean)

Kotlin

fun getRequestForNotificationUpdate(apiVersion: String?, notificationId: String?, read: Boolean?, seen: Boolean?): RestRequest

Java

```

```

## See Also

-   [“Notification” in *Connect REST API Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_resource_notifications_specific.htm "HTML (New Window)")

## Code Examples

```
let builder = UpdateNotificationsRequestBuilder.init()
builder.setNotificationId("<some_id>")
builder.setBefore(Date.init())
builder.setRead(true)
builder.setSeen(true)
let request = builder.buildUpdateNotificationsRequest(SFRestDefaultAPIVersion)
```

```
#import <SalesforceSDKCore/SFRestAPI+Notifications.h>
...

SFSDKUpdateNotificationsRequestBuilder *builder = 
    [[SFSDKUpdateNotificationsRequestBuilder alloc] init];
[builder setNotificationId:"<some_id>"]
[builder setRead:true];
[builder setSeen:true];
[builder setBefore: [NSDate date]];
SFRestRequest *updateRequest = [builder buildUpdateNotificationsRequest:kSFRestDefaultAPIVersion];
```

```apex
public static RestRequest getRequestForNotificationUpdate(String apiVersion, 
    String notificationId, Boolean read, Boolean seen)
```
