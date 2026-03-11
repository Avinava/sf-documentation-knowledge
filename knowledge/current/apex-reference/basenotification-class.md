---
title: "BaseNotification Class"
domain: apex-reference
topic: basenotification-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.948Z
keywords: [BaseNotification, Class, Sets, status, notification, sent, gateway., setStatus, Signature, Parameters, Return, Value]
---

# BaseNotification Class

> Sets the status of the notification sent by the
    gateway.

### setStatus(status)

Sets the status of the notification sent by the gateway.

#### Signature

global void setStatus(commercepayments.NotificationStatus status)

#### Parameters

status

Type: [commercepayments.NotificationStatus](atlas.en-us.apexref.meta/apexref/apex_enum_commercepayments_NotificationStatus.htm "Shows whether the payments platform successfully received the notification from the gateway.")

Shows whether the payments platform successfully received the notification from the gateway.

#### Return Value

Type: void