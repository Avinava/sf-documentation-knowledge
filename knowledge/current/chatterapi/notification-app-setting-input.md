---
title: "Notification App Setting
    Input"
domain: chatterapi
topic: notification-app-setting-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.194Z
estimatedTokens: 248
keywords: [Notification, App, Setting, Input]
---

# Notification App Setting
    Input

> Notification app setting.

# Notification App Setting Input

Notification app setting.

Root XML tag

<notificationAppSetting>

JSON example

```

```

Properties

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

Starting in API version 64.0, the Notification App Setting Input request body supports external client apps, in addition to connected apps. Mobile, push notification, and notification plugins for external client apps (beta) are available in API version 64.0.

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| applicationId | String | ID of the connected app or external client app. If not specified and called from a connected app or external client app, defaults to the app information from the session. | Optional | 47.0 |
| enabled | Boolean | Specifies whether to enable delivery of the notification type for the connected app or external client app (true) or not (false). | Optional | 47.0 |

## Code Examples

```
{
   "enabled":"false"
}
```
