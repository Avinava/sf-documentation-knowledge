---
title: "setPayload(payload)"
domain: pushImplGuide
topic: setpayloadpayload
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:35.568Z
estimatedTokens: 240
keywords: [setPayload, payload, push, notification, message]
---

# setPayload(payload)

> Sets the payload of the push notification
message.

# setPayload(payload)

Sets the payload of the push notification message.

## Signature

public void setPayload(Map<String,Object\> payload)

## Parameters

payload

Type: Map<String, Object>

The payload, expressed as a map of key-value pairs.

Payload parameters can be different for each mobile OS vendor. For more information on Apple’s payload parameters, search for “Apple Push Notification Service” at [https://developer.apple.com/library/mac/documentation/](https://developer.apple.com/library/mac/documentation "HTML (New Window)").

To create the payload for an Apple device, see the [PushNotificationPayload Class](atlas.en-us.pushImplGuide.meta/pushImplGuide/apex_classes_push_notification_payload.htm "Contains methods to create the notification message payload for an Apple device.").

## Example

See the [Push Notification Example](atlas.en-us.pushImplGuide.meta/pushImplGuide/apex_classes_push_notification.htm#push_notification_example_code).

## Related Topics

- PushNotificationPayload
Class (atlas.en-us.pushImplGuide.meta/pushImplGuide/apex_classes_push_notification_payload.htm)
- Push Notification
Example (atlas.en-us.pushImplGuide.meta/pushImplGuide/apex_classes_push_notification.htm)
