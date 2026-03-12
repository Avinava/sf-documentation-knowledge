---
title: "Push Notifications Resource"
domain: pushImplGuide
topic: push-notifications-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:35.587Z
estimatedTokens: 382
keywords: [Push, Notifications, Resource, Send, mobile, notification, client, apps, users’, devices, accessible, session, established, app, developed]
---

# Push Notifications Resource

> Send a mobile push notification to client apps on users’
         devices. This resource is only accessible when the session is established with a client app
         that is developed in the same org or installed in the same package as the
         recipient’s client app.

# Push Notifications Resource

Send a mobile push notification to client apps on users’ devices. This resource is only accessible when the session is established with a client app that is developed in the same org or installed in the same package as the recipient’s client app.

Resource

```

```

Available version

31.0

HTTP methods

POST

Request body for POST

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

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| appName | String | The API name of the client app that the push notification is sent to. | Required | 31.0 |
| namespace | String | The namespace of the client app that the push notification is sent to. | Required if the namespace is set | 31.0 |
| payload | String | The push notification payload in JSON format. | Required | 31.0 |
| userIds | String[] | The push notification recipient user ids. | Required | 31.0 |

## Code Examples

```
/connect/notifications/push
```

```
{   "appName" : "TestApp",
    "namespace" : "abc",
    "userIds" : ["005x00000013dPK", "005x00000013dPL"],
    "payload" : "{'aps':{'alert':'test', 'badge':0, 'sound':'default'}}"
}
```
