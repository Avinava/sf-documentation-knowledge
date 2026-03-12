---
title: "apple(alert, sound, badgeCount, userData)"
domain: apex-reference
topic: applealert-sound-badgecount-userdata
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:19.779Z
estimatedTokens: 570
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

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Notification message to be sent to the mobile client.

sound

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of a sound file to be played as an alert. This sound file should be in the mobile application bundle.

badgeCount

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number to display as the badge of the application icon.

userData

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."), Object>

Map of key-value pairs that contains any additional data used to provide context for the notification. For example, it can contain IDs of the records that caused the notification to be sent. The mobile client app can use these IDs to display these records.

## Return Value

Type:[Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."), Object>

Returns a formatted payload that includes all of the specified arguments.

## Usage

To generate a valid payload, you must provide a value for at least one of the following parameters: alert, sound, badgeCount.

## Example

See the [Push Notification Example](atlas.en-us.apexref.meta/apexref/apex_classes_push_notification.htm#push_notification_example_code).

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- Map (atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm)
- Push Notification
Example (atlas.en-us.apexref.meta/apexref/apex_classes_push_notification.htm)
