---
title: "ReferencedRefundNotification Class"
domain: apex-reference
topic: referencedrefundnotification-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.094Z
keywords: [ReferencedRefundNotification, Class, Sets, notification, status, value, object., setStatus, Signature, Parameters, Return, Value]
---

# ReferencedRefundNotification Class

> Sets the notification status value on the notification
    object.

### setStatus(status)

Sets the notification status value on the notification object.

#### Signature

global void setStatus(commercepayments.NotificationStatus status)

#### Parameters

status

Type: [NotificationStatus](atlas.en-us.apexref.meta/apexref/apex_enum_commercepayments_NotificationStatus.htm "Shows whether the payments platform successfully received the notification from the gateway.")

Indicates whether the payments platform successfully received the notification from the payment gateway.

#### Return Value

Type: void