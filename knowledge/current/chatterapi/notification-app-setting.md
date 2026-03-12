---
title: "Notification App Setting"
domain: chatterapi
topic: notification-app-setting
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.964Z
estimatedTokens: 903
namespace: String
keywords: [Notification, App, Setting, reset, org]
---

# Notification App Setting

> Get, set, and reset a notification app setting for the
    org.

**Namespace:** `String`

# Notification App Setting

Get, set, and reset a notification app setting for the org.

Notification app settings have default values that come from the notification type definition and application settings. Admins can disable standard notification app settings that are enabled by default; however, they can’t enable standard notification app settings that are disabled by default. If your app accepts custom notification app settings, admins can enable custom notification app settings that are disabled by default.

Resource

```

```

Available version

47.0

HTTP methods

GET, POST, DELETE

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| applicationId | String | ID of the connected app or external client app. If not specified and called from a connected app or external client app, defaults to the app information from the session. | Optional | 47.0 |

Response body for GET

[Notification App Settings Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_notification_app_settings_collection.htm "Notification app settings.")

Request body for POST

Use POST to set a notification app setting.

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

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| applicationId | String | ID of the connected app or external client app. If not specified and called from a connected app or external client app, defaults to the app information from the session. | Optional | 47.0 |
| enabled | Boolean | Specifies whether to enable delivery of the notification type for the connected app or external client app (true) or not (false). | Optional | 47.0 |

Response body for POST

[Notification App Setting](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_notification_app_settings.htm "Notification app setting.")

Request parameters for DELETE

Use DELETE to reset a notification app setting to the default.

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| applicationId | String | ID of the connected app or external client app. If not specified and called from a connected app or external client app, defaults to the app information from the session. | Optional | 40.0 |

Response for DELETE

[204: Successful Delete](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.")

## Code Examples

```
/connect/notifications/app-settings/organization/notificationTypeOrId
```

```
{
   "enabled":"false"
}
```

## Related Topics

- Notification App Settings Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_notification_app_settings_collection.htm)
- Notification App Setting (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_notification_app_settings.htm)
- 204: Successful Delete (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
