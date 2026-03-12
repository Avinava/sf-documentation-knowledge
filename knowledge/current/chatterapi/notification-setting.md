---
title: "Notification Setting"
domain: chatterapi
topic: notification-setting
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.973Z
estimatedTokens: 660
namespace: String
keywords: [Notification, Setting, reset, org]
---

# Notification Setting

> Get, set, and reset a notification setting for the
    org.

**Namespace:** `String`

# Notification Setting

Get, set, and reset a notification setting for the org.

Notification settings have default values that come from the notification type definition and application settings. Admins can disable notification settings that are enabled by default; however, they can’t enable notification settings that are disabled by default.

Resource

```

```

Available version

47.0

HTTP methods

GET, POST, DELETE

Request body for POST

Use POST to set a notification setting.

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

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| desktopEnabled | Boolean | Specifies whether to enable desktop delivery for the notification type (true) or not (false). If not specified, the setting doesn’t change. | Optional | 47.0 |
| emailEnabled | Boolean | Specifies whether to enable email delivery for the notification type (true) or not (false). If not specified, the setting doesn’t change. | Optional | 47.0 |
| mobileEnabled | Boolean | Specifies whether to enable mobile delivery for the notification type (true) or not (false). If not specified, the setting doesn’t change. | Optional | 47.0 |
| slackEnabled | Boolean | Reserved for future use. | Optional | 52.0 |

Response body for GET and POST

[Notification Setting](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_notification_settings.htm "Notification setting.")

Response for DELETE

Use DELETE to reset a notification setting to the default.

[204: Successful Delete](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.")

## Code Examples

```
/connect/notifications/settings/organization/notificationTypeOrId
```

```
{
   "desktopEnabled":"false"
}
```

## Related Topics

- Notification Setting (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_notification_settings.htm)
- 204: Successful Delete (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
- Notification Settings Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_notification_settings_collection.htm)
