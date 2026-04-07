---
title: "Notifications"
domain: mobile-sdk
topic: notifications
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:27.336Z
estimatedTokens: 200
keywords: [Notifications, Android, number, maximum, archived, Notification, Builder, “before”, “after”, date, iOS]
---

> Gets the given number (maximum 20) of archived Notification Builder notifications
        based on the given “before” or “after” date.

# Notifications

Gets the given number (maximum 20) of archived Notification Builder notifications based on the given “before” or “after” date.

## Parameters

-   API version (string)
-   Batch size (integer)
-   Date before (date, optional)
-   Date after (date, optional)

## iOS

In iOS, use the FetchNotificationsRequestBuilder object or the Objective-C SFSDKFetchNotificationsRequestBuilder to create GET requests for notifications.

Swift

```

```

Objective-C

```

```

## Android

Kotlin

fun getRequestForNotifications(apiVersion: String?, size: Int?, before: Date?, after: Date?): RestRequest

Java

```

```

## See Also

-   [“Query” in *REST API Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_query.htm "HTML (New Window)")

## Code Examples

```
let builder = FetchNotificationsRequestBuilder.init()
builder.setSize(10)
builder.setBefore(Date.init())
let request = builder.buildFetchNotificationsRequest(SFRestDefaultAPIVersion)
```

```
#import <SalesforceSDKCore/SFRestAPI+Notifications.h>
...

SFSDKFetchNotificationsRequestBuilder *builder = 
    [[SFSDKFetchNotificationsRequestBuilder alloc] init];
[builder setBefore: [NSDate date]];
[builder setSize:10];
SFRestRequest *fetchRequest = 
    [builder buildFetchNotificationsRequest:kSFRestDefaultAPIVersion];
```

```apex
public static RestRequest getRequestForNotifications(String apiVersion, 
    Integer size, Date before, Date after)
```
