---
title: "Notification"
domain: pushImplGuide
topic: notification
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:35.582Z
estimatedTokens: 573
keywords: [Notification, context, user, Mark, unread, seen, unseen]
---

# Notification

> Get a notification for the context user. Mark a notification
   as read, unread, seen, or unseen.

# Notification

Get a notification for the context user. Mark a notification as read, unread, seen, or unseen.

Resource

/connect/notifications/notificationId

Available since version

49.0

HTTP methods

GET, PATCH

Request parameters for GET

| Parameter | Return Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| trimMessages | Boolean | Specifies whether the content of a notification is trimmed (true) or returned in full (false). If true, the title of a notification returns up to 120 characters and the body returns up to 320 characters. If false, the title of a notification returns up to 250 characters and the body returns up to 750 characters. If unspecified, the default is true. | Optional | 50.0 |

Request body for PATCH

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

Request parameters for PATCH

| Parameter | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| read | Boolean | Marks a notification as read (true) or unread (false). | Required if seen isn’t specified | 49.0 |
| seen | Boolean | Marks a notification as seen (true) or unseen (false). | Required if read isn’t specified | 49.0 |

Response body for GET and PATCH

[Notification](atlas.en-us.pushImplGuide.meta/pushImplGuide/connect_responses_notification.htm "Notification.")

-   **[Notification](atlas.en-us.pushImplGuide.meta/pushImplGuide/connect_responses_notification.htm)**
    Notification.
-   **[Notification Collection](atlas.en-us.pushImplGuide.meta/pushImplGuide/connect_responses_notification_collection.htm)**
    Collection of notifications.
-   **[Notification Status](atlas.en-us.pushImplGuide.meta/pushImplGuide/connect_responses_notification_status.htm)**
    Status of notifications for the context user.

## Code Examples

```
{ "read" : "true" }
```

## Related Topics

- Notification (atlas.en-us.pushImplGuide.meta/pushImplGuide/connect_responses_notification.htm)
- Notification Collection (atlas.en-us.pushImplGuide.meta/pushImplGuide/connect_responses_notification_collection.htm)
- Notification Status (atlas.en-us.pushImplGuide.meta/pushImplGuide/connect_responses_notification_status.htm)
