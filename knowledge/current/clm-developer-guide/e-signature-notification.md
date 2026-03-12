---
title: "E-signature Notification"
domain: clm-developer-guide
topic: e-signature-notification
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:22.324Z
estimatedTokens: 143
keywords: [E-signature, Notification, settings]
---

# E-signature Notification

> Get e-signature notification settings.

# E-signature Notification

Get e-signature notification settings.

Resource

```

```

Available version

56.0

HTTP methods

GET

Example

```

```

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| sourceObjectId | String | Object ID of the document. | Required | 56.0 |

Response body for GET

[Notification Setting Response](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_notification_setting_respons.htm "E-signature notification settings.")

## Code Examples

```
/connect/e-sign/notification-settings
```

```
https://yourInstance.salesforce.com/services/data/v56.0/connect/e-sign/notification-settings?sourceObjectId=<sourceObjectId>
```

## Related Topics

- Notification Setting Response (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_notification_setting_respons.htm)
