---
title: "POST /contacts/v1/contacts/actions/delete/configSettings"
domain: mc-apis
topic: post-contactsv1contactsactionsdeleteconfigsettings
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:14.907Z
estimatedTokens: 306
keywords: [POST, contacts, actions, configSettings, configuration, settings, Contact, framework, **Overview**]
---

> Sets the configuration settings for the Contact Delete framework and components.

# POST /contacts/v1/contacts/actions/delete/configSettings

## **Overview**

Sets the configuration settings for the Contact Delete framework and components.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| items | array | Required | Key value pairs of configuration settings you are modifying. |
| items.SettingKey | string | Required | Configuration setting key to modify. This key supports only the SuppressionRestoreUntilDays value. |
| items.Value | string | Required | Value of the setting to modify. A value of -1 = 0 days. A value of 1 = 1 day. |

## Usage

### Example Request

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /contacts/v1/contacts/actions/delete/configSettings
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "items" : [{
            "settingKey" : "SuppressionRestoreUntilDays",
            "value" : "-1"
        }
    ]
}
```

### Example Response

```js
HTTP/1.1 200 Ok
{
"rowsEffected": 1,
"requestServiceMessageID": "c23e6308-1115-4655-aa83-da59712e40eb",
"responseDateTime": "2018-03-15T12:08:36.9709486-04:00",
"resultMessages": [],
"serviceMessageID": "57813e4a-3fa7-4058-9118-4c85752bbaf1"
}
```

Last Updated: Jun 8, 2021
