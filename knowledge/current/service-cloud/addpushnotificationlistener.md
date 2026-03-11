---
title: "addPushNotificationListener()"
domain: service-cloud
topic: addpushnotificationlistener
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:49.730Z
keywords: [addPushNotificationListener, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# addPushNotificationListener()

# addPushNotificationListener()

Adds a listener for a push notification. A user can only register a listener once until he or she removes the listener, or the listener is removed by another user. This method is only available in API version 26.0 or later.

For more information on push notifications, see [Methods for Push Notifications](atlas.en-us.api_console.meta/api_console/sforce_api_console_methods_push_notifications.htm).

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| objects | array | Objects set to receive notifications. |
| eventHandler | function | JavaScript method called when there is a push notification. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method.

| Name | Type | Description |
| --- | --- | --- |
| id | string | The object ID of the push notification. |
| entityType | string | The type of object included in the push notification. For example, Account or Contact.Objects available for push notifications are determined by the administrator who set up a Salesforce console. |
| Type | string | The field of the object included in the push notification. For example, the Account Name field on Account. Notifications occur when the field is either updated or created.Fields on objects available for push notifications are determined by the administrator who set up a Salesforce console. |
| LastModifiedById | string | The user ID of the user who last modified the object in the push notification. |