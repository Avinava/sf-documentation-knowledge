---
title: "apple(alert, sound, badgeCount, userData)"
domain: pushImplGuide
topic: applealert-sound-badgecount-userdata
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:35.549Z
estimatedTokens: 318
keywords: [apple, alert, sound, badgeCount, userData, Helper, creates, payload, arguments, Usage]
---

# apple(alert, sound, badgeCount, userData)

> Helper method that creates a valid Apple
payload from the specified arguments.

# apple(alert, sound, badgeCount, userData)

Helper method that creates a valid Apple payload from the specified arguments.

## Signature

public static Map<String,Object\> apple(String alert, String sound, Integer badgeCount, Map<String,Object\> userData)

## Parameters

alert

Type: String

Notification message to be sent to the mobile client.

sound

Type: String

Name of a sound file to be played as an alert. This sound file should be in the mobile application bundle.

badgeCount

Type: Integer

Number to display as the badge of the application icon.

userData

Type: Map<String, Object>

Map of key-value pairs that contains any additional data used to provide context for the notification. For example, it can contain IDs of the records that caused the notification to be sent. The mobile client app can use these IDs to display these records.

## Return Value

Type:Map<String, Object>

Returns a formatted payload that includes all of the specified arguments.

## Usage

To generate a valid payload, you must provide a value for at least one of the following parameters: alert, sound, badgeCount.

## Example

See the [Push Notification Example](atlas.en-us.pushImplGuide.meta/pushImplGuide/apex_classes_push_notification.htm#push_notification_example_code).

## Related Topics

- Push Notification
Example (atlas.en-us.pushImplGuide.meta/pushImplGuide/apex_classes_push_notification.htm)
