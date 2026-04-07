---
title: "POST /messaging/v1/sms/definitions"
domain: mc-apis
topic: post-messagingv1smsdefinitions
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:16.019Z
estimatedTokens: 1102
keywords: [POST, messaging, sms, definitions, Creates, send, definition, **Overview**, Short, Code, Long, HTTP, Responses]
---

> Creates a send definition.

# POST /messaging/v1/sms/definitions

## **Overview**

Creates a send definition.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| definitionKey | string | Required | Unique, user-generated key to access the definition object. |
| name | string | Required | Name of the definition. Must be unique. |
| content.message | string | Required | The message content that you want sent with each message. Use substitution strings and AMPscript to personalize the message. |
| status | string |  | Operational state of the definition: active, inactive, or deleted. A message sent to an active definition is processed and delivered. A message sent to an inactive definition isn’t processed or delivered. Instead, the message is queued for later processing for up to three days. |
| description | string |  | User-provided description of the send definition. |
| subscriptions.shortCode | string | Required | The short or long code for the mobile transmissions for each message on this definition. |
| subscriptions.countryCode | string |  | The country code associated with the shortCode for the mobile transmissions for each message on this definition. Don't use for long codes, unless your account configuration requires it. |
| subscriptions.keyword | string | Required | The keyword used to track messages |
| subscriptions.autoAddSubscriber | boolean |  | Allows you to add a recipient as subscriber against the shortCode using contactKey. When false, the message is rejected if contactKey doesn’t exist as a subscriber. Default is true. |

## Usage

### Example Request with Short Code

To associate a short code to a send definition, use the alphabetic countryCode and numeric shortCode attributes.

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /messaging/v1/sms/definitions/
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
  "definitionKey": "account-reset",
  "name": "account-reset",
  "description": "Using new SMS Transactional API",
  "content": {
    "message": "%%FirstName%%, your 2FA token is %%password%%"
  },
  "subscriptions": {
    "shortCode": "8201221",
    "countryCode": "US",
    "keyword": "PASSWORD"
  }
}
```

### Example Response with Short Code

```js
HTTP/1.1 201 Created
{
  "requestId": "582bec09-6d04-4222-bbba-cea616495596",
  "name": "account-reset",
  "definitionKey": "account-reset",
  "description": "Using new SMS Transactional API",
  "status": "Active",
  "createdDate": "2019-05-14T21:05:00",
  "modifiedDate": "2019-05-14T21:05:00",
  "content": {
    "message": "%%FirstName%%, your 2FA token is %%password%%"
  },
  "subscriptions": {
    "shortCode": "8201221",
    "autoAddSubscriber": true,
    "keyword": "PASSWORD"
  }
}
```

### Example Request with Long Code

To associate a long code or international phone number to a send definition, add the numeric country code at the beginning of the phone number. Then, use this number as the shortCode attribute. Don't use the alphabetic countryCode attribute unless your account configuration requires it.

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /messaging/v1/sms/definitions/
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
  "definitionKey": "account-reset",
  "name": "account-reset",
  "description": "Using new SMS Transactional API",
  "content": {
    "message": "%%FirstName%%, your 2FA token is %%password%%"
  },
  "subscriptions": {
    "shortCode": "971234567890",
    "keyword": "PASSWORD"
  }
}
```

### Example Response with Long Code

```js
HTTP/1.1 201 Created
{
  "requestId": "582bec09-6d04-4222-bbba-cea616495596",
  "name": "account-reset",
  "definitionKey": "account-reset",
  "description": "Using new SMS Transactional API",
  "status": "Active",
  "createdDate": "2019-05-14T21:05:00",
  "modifiedDate": "2019-05-14T21:05:00",
  "content": {
    "message": "%%FirstName%%, your 2FA token is %%password%%"
  },
  "subscriptions": {
    "shortCode": "971234567890",
    "autoAddSubscriber": true,
    "keyword": "PASSWORD"
  }
}
```

### HTTP Responses

| Response | Reason |
| --- | --- |
| 201 Created | Send definition is created. Review example response. |
| 409 Conflict | Send definition already exists on the server |
| 400 Bad Request | Invalid request |
| 403 Forbidden | Failed to pass authorization. |
| 500 Server Error | Internal error |

Last Updated: Jun 8, 2021
