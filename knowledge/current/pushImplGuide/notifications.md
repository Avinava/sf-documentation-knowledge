---
title: "Notifications"
domain: pushImplGuide
topic: notifications
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:35.616Z
estimatedTokens: 991
keywords: [Notifications, context, user, Mark, unread, seen, unseen]
---

# Notifications

> Get notifications for the context user. Mark notifications as
   read, unread, seen, or unseen.

# Notifications

Get notifications for the context user. Mark notifications as read, unread, seen, or unseen.

When the context user makes a GET request, the API returns the context user’s notifications. The API uses the context of the requesting client app and returns notifications for the appropriate types.

If a client app makes a GET request, the API returns only custom notifications for the types that the client app subscribes to with org-level settings applied. For example, if an admin disabled a notification type for the app, the API doesn’t return notifications for that type.

If a third party (not a client app) makes a GET request, the API returns only custom notifications for the types that are enabled for desktop.

Resource

/connect/notifications

Available since version

49.0

HTTP methods

GET, PATCH

Request parameters for GET

| Parameter | Return Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| after | String | Notifications occurring after this ISO 8601 formatted date string to mark as read, unread, seen, or unseen.This parameter can’t be used with the before parameter. | Optional | 49.0 |
| before | String | Notifications occurring before this ISO 8601 formatted date string to mark as read, unread, seen, or unseen. If unspecified, the default is the current date and time. | Optional | 49.0 |
| size | Integer | Number of notifications to return. Values are from 1 through 50. If you specify a number greater than 50, only 50 notifications are returned. If unspecified, the default is 10. | Optional | 49.0 |
| trimMessages | Boolean | Specifies whether the content of notifications is trimmed (true) or returned in full (false). If true, the title of notifications returns up to 120 characters and the body returns up to 320 characters. If false, the title of notifications returns up to 250 characters and the body returns up to 750 characters. If unspecified, the default is true. | Optional | 50.0 |

Request body for PATCH

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

Request parameters for PATCH

| Parameter | Return Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| before | String | Notifications occurring before this ISO 8601 formatted date string to mark as read, unread, seen, or unseen. If unspecified, the default is the current date and time. | Optional | 49.0 |
| notification​Ids | String[] | List of up to 50 notification IDs to mark as read, unread, seen, or unseen. | Optional | 49.0 |
| read | Boolean | Marks notifications as read (true) or unread (false).If notifications are marked as read, they are also marked as seen. If you set read to true and seen to false, you get an error. | Required if seen isn’t specified | 49.0 |
| seen | Boolean | Marks notifications as seen (true) or unseen (false). | Required if read isn’t specified | 49.0 |

Response body for GET and PATCH

[Notification Collection](atlas.en-us.pushImplGuide.meta/pushImplGuide/connect_responses_notification_collection.htm "Collection of notifications.")

## Code Examples

```
{
   "before": "2019-06-25T18:24:31.000Z",
   "read" : "true"
}
```

## Related Topics

- Notification Collection (atlas.en-us.pushImplGuide.meta/pushImplGuide/connect_responses_notification_collection.htm)
