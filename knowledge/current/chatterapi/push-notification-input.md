---
title: "Push Notification Input"
domain: chatterapi
topic: push-notification-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.636Z
estimatedTokens: 161
keywords: [Push, Notification, Input]
---

# Push Notification Input

> A push notification.

# Push Notification Input

A push notification.

Root XML tag

<pushNotification>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| appName | String | The API name of the client app that the push notification is sent to. | Required | 31.0 |
| namespace | String | The namespace of the client app that the push notification is sent to. | Required if the namespace is set | 31.0 |
| payload | String | The push notification payload in JSON format. | Required | 31.0 |
| userIds | String[] | The push notification recipient user ids. | Required | 31.0 |

## Code Examples

```
{   "appName" : "TestApp",
    "namespace" : "abc",
    "userIds" : ["005x00000013dPK", "005x00000013dPL"],
    "payload" : "{'aps':{'alert':'test', 'badge':0, 'sound':'default'}}"
}
```
