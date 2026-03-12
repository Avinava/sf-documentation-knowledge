---
title: "apple(alertBody, actionLocKey, locKey, locArgs, launchImage, sound, badgeCount, userData)"
domain: pushImplGuide
topic: applealertbody-actionlockey-lockey-locargs-launchimage-sound-badgecount-userdata
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:35.553Z
estimatedTokens: 439
keywords: [apple, alertBody, actionLocKey, locKey, locArgs, launchImage, sound, badgeCount, userData, Helper, creates, payload, arguments, Usage]
---

# apple(alertBody, actionLocKey, locKey, locArgs, launchImage, sound, badgeCount, userData)

> Helper method that creates a valid Apple
payload from the specified arguments.

# apple(alertBody, actionLocKey, locKey, locArgs, launchImage, sound, badgeCount, userData)

Helper method that creates a valid Apple payload from the specified arguments.

## Signature

public static Map<String,Object\> apple(String alertBody, String actionLocKey, String locKey, String\[\] locArgs, String launchImage, String sound, Integer badgeCount, Map<String,Object\> userData)

## Parameters

alertBody

Type: String

Text of the alert message.

actionLocKey

Type: String

If a value is specified for the actionLocKey argument, an alert with two buttons is displayed. The value is a key to get a localized string in a Localizable.strings file to use for the right button’s title.

locKey

Type: String

Key to an alert-message string in a Localizable.strings file for the current localization.

locArgs

Type: List<String>

Variable string values to appear in place of the format specifiers in locKey.

launchImage

Type: String

File name of an image file in the application bundle.

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

Type: Map<String, Object>

Returns a formatted payload that includes all of the specified arguments.

## Usage

To generate a valid payload, you must provide a value for at least one of the following parameters: alert, sound, badgeCount.
