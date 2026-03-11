---
title: "removePushNotificationListener()"
domain: service-cloud
topic: removepushnotificationlistener
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.637Z
keywords: [removePushNotificationListener, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# removePushNotificationListener()

# removePushNotificationListener()

Removes a listener that gets added for a push notification. This method is only available in API version 26.0 or later.

For more information on push notifications, see [Methods for Push Notifications](atlas.en-us.api_console.meta/api_console/sforce_api_console_methods_push_notifications.htm).

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| callback | function | A function called when the removal of the push notification listener completes. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method.

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | true if removing the push notification listener was successful; false if removing the push notification listener wasn’t successful. |