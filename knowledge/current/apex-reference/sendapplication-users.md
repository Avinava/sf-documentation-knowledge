---
title: "send(application, users)"
domain: apex-reference
topic: sendapplication-users
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.962Z
keywords: [send, application, users, Signature, Parameters, Example]
---

# send(application, users)

# send(application, users)

Sends a push notification message to the specified users.

## Signature

public void send(String application, Set<String\> users)

## Parameters

application

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The connected app API name. This corresponds to the mobile client app the notification should be sent to.

users

Type: [Set](atlas.en-us.apexref.meta/apexref/apex_methods_system_set.htm#apex_methods_system_set "Represents a collection of unique elements with no duplicate values.")

A set of user IDs that correspond to the users the notification should be sent to.

## Example

See the [Push Notification Example](atlas.en-us.apexref.meta/apexref/apex_classes_push_notification.htm#push_notification_example_code).