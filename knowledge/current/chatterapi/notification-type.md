---
title: "Notification Type"
domain: chatterapi
topic: notification-type
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.940Z
estimatedTokens: 212
keywords: [Notification]
---

# Notification Type

> Notification type information.

# Notification Type

Notification type information.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| actionGroups | Notification Action Group[] | Action groups supported by the notification type. | Small, 66.0 | 66.0 |
| apiName | String | Custom notification API name (prefixed by the namespace if it’s installed with a managed package) or standard notification type API name. | Small, 66.0 | 66.0 |
| label | String | Notification type label. | Small, 66.0 | 66.0 |
| type | String | Type of notification. For custom notifications, this is the custom notification type ID. | Small, 66.0 | 66.0 |

#### See Also

-   [Notification Type Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_notification_type_collection.htm "Collection of notification types.")

## Related Topics

- Notification
                  Action Group (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_notification_action_group.htm)
- Notification Type Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_notification_type_collection.htm)
