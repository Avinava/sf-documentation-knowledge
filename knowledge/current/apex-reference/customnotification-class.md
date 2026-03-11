---
title: "CustomNotification Class"
domain: apex-reference
topic: customnotification-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.797Z
keywords: [CustomNotification, Class, Sets, target, page, custom, notification., setTargetPageRef, pageRef, Signature, Parameters, Return, Value, Example]
---

# CustomNotification Class

> Sets the target page of the custom notification.

### setTargetPageRef(pageRef)

Sets the target page of the custom notification.

#### Signature

public void setTargetPageRef(String pageRef)

#### Parameters

pageRef

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The PageReference for the navigation target of the notification.

Either a targetID or a targetPageRef is required to send a custom notification. See [Custom Notification Usage](#custom_notification_usage).

#### Return Value

Type: void

#### Example

See the [Custom Notification Example](#custom_notification_example_code).