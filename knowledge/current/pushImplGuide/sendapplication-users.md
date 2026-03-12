---
title: "send(application, users)"
domain: pushImplGuide
topic: sendapplication-users
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:35.565Z
estimatedTokens: 143
keywords: [send, application, users, push, notification, message]
---

# send(application, users)

> Sends a push notification message to the specified
  users.

# send(application, users)

Sends a push notification message to the specified users.

## Signature

public void send(String application, Set<String\> users)

## Parameters

application

Type: String

The connected app API name. This corresponds to the mobile client app the notification should be sent to.

users

Type: Set

A set of user IDs that correspond to the users the notification should be sent to.

## Example

See the [Push Notification Example](atlas.en-us.pushImplGuide.meta/pushImplGuide/apex_classes_push_notification.htm#push_notification_example_code).

## Related Topics

- Push Notification Example (atlas.en-us.pushImplGuide.meta/pushImplGuide/apex_classes_push_notification.htm)
