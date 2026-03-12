---
title: "Notifications Resources"
domain: pushImplGuide
topic: notifications-resources
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:35.619Z
estimatedTokens: 586
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

-   **[Notification](atlas.en-us.pushImplGuide.meta/pushImplGuide/connect_resource_notifications_specific.htm)**
    Get a notification for the context user. Mark a notification as read, unread, seen, or unseen.
-   **[Notifications](atlas.en-us.pushImplGuide.meta/pushImplGuide/connect_resources_notifications_list.htm)**
    Get notifications for the context user. Mark notifications as read, unread, seen, or unseen.
-   **[Notifications Status](atlas.en-us.pushImplGuide.meta/pushImplGuide/connect_resources_notifications_status.htm)**
    Get the status of notifications for the context user.
-   **[Notification App Setting](atlas.en-us.pushImplGuide.meta/pushImplGuide/connect_resources_notification_app_setting.htm)**
    Get, set, and reset a notification app setting for the org.
-   **[Notification App Settings](atlas.en-us.pushImplGuide.meta/pushImplGuide/connect_resources_notification_app_settings.htm)**
    Get notification app settings for the org.
-   **[Notification Setting](atlas.en-us.pushImplGuide.meta/pushImplGuide/connect_resources_notification_setting.htm)**
    Get, set, and reset a notification setting for the org.
-   **[Notification Settings](atlas.en-us.pushImplGuide.meta/pushImplGuide/connect_resources_notification_settings.htm)**
    Get notification settings for the org.
-   **[CustomNotificationType](atlas.en-us.pushImplGuide.meta/pushImplGuide/tooling_api_objects_customnotificationtype.htm)**
    Stores information about custom notification types. This object is available in API version 46.0 and later.

## Related Topics

- /connect/notifications (atlas.en-us.pushImplGuide.meta/pushImplGuide/connect_resources_notifications_list.htm)
- /connect/notifications/notificationId (atlas.en-us.pushImplGuide.meta/pushImplGuide/connect_resource_notifications_specific.htm)
- /connect/notifications/status (atlas.en-us.pushImplGuide.meta/pushImplGuide/connect_resources_notifications_status.htm)
- Notification (atlas.en-us.pushImplGuide.meta/pushImplGuide/connect_resource_notifications_specific.htm)
- Notifications (atlas.en-us.pushImplGuide.meta/pushImplGuide/connect_resources_notifications_list.htm)
- Notifications Status (atlas.en-us.pushImplGuide.meta/pushImplGuide/connect_resources_notifications_status.htm)
- Notification App Setting (atlas.en-us.pushImplGuide.meta/pushImplGuide/connect_resources_notification_app_setting.htm)
- Notification App Settings (atlas.en-us.pushImplGuide.meta/pushImplGuide/connect_resources_notification_app_settings.htm)
- Notification Setting (atlas.en-us.pushImplGuide.meta/pushImplGuide/connect_resources_notification_setting.htm)
- Notification Settings (atlas.en-us.pushImplGuide.meta/pushImplGuide/connect_resources_notification_settings.htm)
