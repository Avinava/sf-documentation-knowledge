---
title: "Notification Input"
domain: chatterapi
topic: notification-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.203Z
estimatedTokens: 145
keywords: [Notification, Input]
---

# Notification Input

> Notification to update.

# Notification Input

Notification to update.

Root XML tag

<notification>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| read | Boolean | Marks a notification as read (true) or unread (false).If a notification is marked as read, it is also marked as seen. If you set read to true and seen to false, you get an error. | Required if seen isn’t specified | 49.0 |
| seen | Boolean | Marks a notification as seen (true) or unseen (false). | Required if read isn’t specified | 49.0 |

## Code Examples

```
{ "read" : "true" }
```
