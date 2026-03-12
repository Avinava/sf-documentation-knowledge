---
title: "Notification App Settings"
domain: chatterapi
topic: notification-app-settings
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.968Z
estimatedTokens: 252
keywords: [Notification, App, Settings, org]
---

# Notification App Settings

> Get notification app settings for the org.

# Notification App Settings

Get notification app settings for the org.

Resource

```

```

Available version

47.0

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

Starting in API version 64.0, this resource supports external client apps, in addition to connected apps. Mobile, push notification, and notification plugins for external client apps are available in API version 64.0.

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| applicationId | String | ID of the connected app or external client app. If not specified and called from a connected app or external client app, defaults to the app information from the session. | Optional | 47.0 |

Response body for GET

[Notification App Settings Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_notification_app_settings_collection.htm "Notification app settings.")

## Code Examples

```
/connect/notifications/app-settings/organization
```

## Related Topics

- Notification App Settings Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_notification_app_settings_collection.htm)
