---
title: "CaptureNotification Class"
domain: apex-reference
topic: capturenotification-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.970Z
keywords: [CaptureNotification, Class, Sets, notification, status, same, value, sent, gateway., setStatus, Signature, Parameters, Return, Value]
---

# CaptureNotification Class

> Sets the notification status to the same value that was sent by the
      gateway.

### setStatus(status)

Sets the notification status to the same value that was sent by the gateway.

#### Signature

global void setStatus(commercepayments.NotificationStatus status)

#### Parameters

status

Type: [NotificationStatus](atlas.en-us.apexref.meta/apexref/apex_enum_commercepayments_NotificationStatus.htm "Shows whether the payments platform successfully received the notification from the gateway.")

Sets the Salesforce-specific result code information. Payment gateways have many response codes for payment calls. Salesforce uses the result code information to map payment gateway codes to a predefined set of standard Salesforce result codes.

#### Return Value

Type: void