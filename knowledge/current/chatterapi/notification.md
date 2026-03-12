---
title: "Notification"
domain: chatterapi
topic: notification
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.515Z
estimatedTokens: 459
keywords: [Notification, context, user, Mark, unread, seen, unseen]
---

# Notification

> Notification.

# Notification

Notification.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| additional​Data | String | Reserved for future use. | Small, 49.0 | 49.0 |
| communityId | String | ID of the Experience Cloud site for the notification. | Small, 49.0 | 49.0 |
| community​Name | String | Name of the Experience Cloud site for the notification. | Small, 49.0 | 49.0 |
| count | Integer | Total number of events for the notification. For custom notifications that are exposed to third-party developers, the value is 1. | Small, 49.0 | 49.0 |
| id | String | ID of the notification. | Small, 49.0 | 49.0 |
| image | String | URL to the image associated with the notification. | Medium, 49.0 | 49.0 |
| lastModified | String | Date and time when the notification was last modified. | Small, 49.0 | 49.0 |
| messageBody | String | Body of the message for the notification. | Small, 49.0 | 49.0 |
| messageTitle | String | Title of the message for the notification. | Small, 49.0 | 49.0 |
| mostRecent​ActivityDate | String | Date and time of the most recent activity for the notification. | Small, 49.0 | 49.0 |
| organization​Id | String | ID of the notification recipient’s org. | Small, 49.0 | 49.0 |
| read | Boolean | Specifies whether the notification is marked read (true) or unread (false). | Small, 49.0 | 49.0 |
| recipient​Id | String | ID of the recipient of the notification. | Small, 49.0 | 49.0 |
| seen | Boolean | Specifies whether the notification is marked seen (true) or unseen (false). | Small, 49.0 | 49.0 |
| target | String | ID of the record associated with the notification. | Medium, 49.0 | 49.0 |
| targetPageRef | String | Page reference for notification target. | Medium, 50.0 | 50.0 |
| type | String | Type of notification. For custom notifications, this is the custom notification type ID. | Small, 49.0 | 49.0 |
| url | String | URL to the notification. | Small, 49.0 | 49.0 |

## Code Examples

```
{ "read" : "true" }
```

## Related Topics

- Notification (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_notification.htm)
