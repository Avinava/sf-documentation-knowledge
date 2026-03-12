---
title: "Notification Setting Input"
domain: chatterapi
topic: notification-setting-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.210Z
estimatedTokens: 219
keywords: [Notification, Setting, Input]
---

# Notification Setting Input

> Notification setting input.

# Notification Setting Input

Notification setting input.

Root XML tag

<notificationTargetSetting>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| desktopEnabled | Boolean | Specifies whether to enable desktop delivery for the notification type (true) or not (false). If not specified, the setting doesn’t change. | Optional | 47.0 |
| emailEnabled | Boolean | Specifies whether to enable email delivery for the notification type (true) or not (false). If not specified, the setting doesn’t change. | Optional | 47.0 |
| mobileEnabled | Boolean | Specifies whether to enable mobile delivery for the notification type (true) or not (false). If not specified, the setting doesn’t change. | Optional | 47.0 |
| slackEnabled | Boolean | Reserved for future use. | Optional | 52.0 |

## Code Examples

```
{
   "desktopEnabled":"false"
}
```
