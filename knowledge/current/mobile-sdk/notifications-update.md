---
title: "Notifications Update"
domain: mobile-sdk
topic: notifications-update
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:32.133Z
estimatedTokens: 268
keywords: [Notifications, Updates, “read”, non-null, “seen”, statuses, IDs, sent, date, iOS, Android]
---

# Notifications Update

> Updates the “read” (if non-null) and “seen” (if non-null) statuses of notifications
        with the given IDs, or those sent before the given date.

# Notifications Update

Updates the “read” (if non-null) and “seen” (if non-null) statuses of notifications with the given IDs, or those sent before the given date.

## iOS

In iOS, use the Swift UpdateNotificationsRequestBuilder object or the Objective-C SFSDKUpdateNotificationsRequestBuilder object to create update requests.

To define the range of affected notifications, pass either an array of notification IDs or a “before” date. The ID array and “before” date are mutually exclusive parameters.

Swift

```

```

Objective-C

```

```

## Android

Kotlin

fun getRequestForNotificationUpdate(apiVersion: String?, notificationId: String?, read: Boolean?, seen: Boolean?): RestRequest

Java

**Parameters**

-   apiVersion (String)
-   -   notificationIds (Array)

        OR

    -   before (Date)
-   read (Boolean)
-   seen (Boolean)

```

```

## See Also

-   [“Notifications” in *Connect REST API Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_resources_notifications_list.htm "HTML (New Window)")

## Code Examples

```
let builder = UpdateNotificationsRequestBuilder.init() 
// builder.setNotificationIds("<array_of_ids>") 
// OR 
// builder.setBefore(Date.init()) 
builder.setRead(true) 
builder.setSeen(true) 
let request = .
    builder.buildUpdateNotificationsRequest(SFRestDefaultAPIVersion)
```

```
#import <SalesforceSDKCore/SFRestAPI+Notifications.h>
...

SFSDKUpdateNotificationsRequestBuilder *builder = 
    [[SFSDKUpdateNotificationsRequestBuilder alloc] init];
// [builder setNotificationIds:<array_of_ids>]
// OR 
// [builder setBefore: [NSDate date]];
[builder setRead:true];
[builder setSeen:true];
SFRestRequest *updateRequest = 
    [builder buildUpdateNotificationsRequest:kSFRestDefaultAPIVersion];
```

```apex
public static RestRequest getRequestForNotificationsUpdate(String apiVersion, 
    List<String> notificationIds, Date before, Boolean read, Boolean seen)
```
