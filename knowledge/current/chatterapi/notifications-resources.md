---
title: "Notifications Resources"
domain: chatterapi
topic: notifications-resources
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:15.992Z
estimatedTokens: 198
keywords: [Notifications, Resources, Execute, action, notification, status, actions]
---

# Notifications Resources

> Get or update notifications. Execute an action for a notification. Get the status of
  notifications. Get supported notification type details and actions.

# Notifications Resources

Get or update notifications. Execute an action for a notification. Get the status of notifications. Get supported notification type details and actions.

Available resources are:

| Resource | Description |
| --- | --- |
| /connect/notifications | Get notifications for the context user. Mark notifications as read, unread, seen, or unseen. |
| /connect/notifications/notificationId | Get a notification for the context user. Mark a notification as read, unread, seen, or unseen. |
| /connect/notifications/notificationId/actionKey (beta) | Execute an action on a notification. |
| /connect/notifications/status | Get the status of notifications for the context user. |
| /connect/notifications/types (beta) | Get supported notification type details and actions. |

## Related Topics

- /connect/notifications (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_notifications_list.htm)
- /connect/notifications/notificationId (atlas.en-us.chatterapi.meta/chatterapi/connect_resource_notifications_specific.htm)
- /connect/notifications/notificationId/actionKey
         (beta) (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_notification_action_key.htm)
- /connect/notifications/status (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_notifications_status.htm)
- /connect/notifications/types (beta) (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_notifications_types.htm)
