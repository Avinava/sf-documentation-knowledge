---
title: "Notification Collection Input"
domain: chatterapi
topic: notification-collection-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.199Z
estimatedTokens: 248
keywords: [Notification, Collection, Input, notifications]
---

# Notification Collection Input

> Collection of notifications to update.

# Notification Collection Input

Collection of notifications to update.

Root XML tag

<notifications>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| before | String | Notifications occurring before this ISO 8601 formatted date string to mark as read, unread, seen, or unseen. If unspecified, the default is the current date and time. | Optional | 49.0 |
| notificationIds | String[] | List of up to 50 notification IDs to mark as read, unread, seen, or unseen.This property can’t be used with the before property. | Optional | 49.0 |
| read | Boolean | Marks notifications as read (true) or unread (false).If notifications are marked as read, they are also marked as seen. If you set read to true and seen to false, you get an error. | Required if seen isn’t specified | 49.0 |
| seen | Boolean | Marks notifications as seen (true) or unseen (false). | Required if read isn’t specified | 49.0 |

## Code Examples

```
{
   "before": "2019-06-25T18:24:31.000Z",
   "read" : "true"
}
```
