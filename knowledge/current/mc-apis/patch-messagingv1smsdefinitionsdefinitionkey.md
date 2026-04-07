---
title: "PATCH /messaging/v1/sms/definitions/{definitionKey}"
domain: mc-apis
topic: patch-messagingv1smsdefinitionsdefinitionkey
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:25.667Z
estimatedTokens: 696
keywords: [PATCH, messaging, sms, definitions, definitionKey, Updates, specific, message, definition, take, two, minutes, outbound, messages, reflect]
---

# PATCH /messaging/v1/sms/definitions/{definitionKey}

> Updates a specific message definition. It can take up to two minutes for outbound messages to reflect the changes.

# PATCH /messaging/v1/sms/definitions/{definitionKey}

## **Overview**

Updates a specific message definition. It can take up to two minutes for outbound messages to reflect the changes.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| definitionKey | string | Required | Unique identifier of the definition. |
| Name | Type |  | Description |
| --- | --- | --- | --- |
| name | string | Required | Name of the definition. Must be unique. |
| content.message | string | Required | The message content that you want sent with each message. Use substitution strings and AMPscript to personalize the message. |
| status | string |  | Operational state of the definition: active, inactive, or deleted. A message sent to an active definition is processed and delivered. A message sent to an inactive definition isn’t processed or delivered. Instead, the message is queued for later processing for up to three days. |
| description | string |  | User-provided description of the send definition. |
| subscriptions.shortCode | string | Required | The short or long code for the mobile transmissions for each message on this definition. |
| subscriptions.countryCode | string |  | The country code associated with the shortCode for the mobile transmissions for each message on this definition. Don't use for long codes, unless your account configuration requires it. |
| subscriptions.keyword | string |  | The keyword used to track messages |
| subscriptions.autoAddSubscriber | boolean |  | Permits adding a recipient as subscriber against the shortCode using contactKey. When false, the message is rejected if contactKey does not exist as a subscriber. Default is true. |

## Usage

### Example Request

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
PATCH /messaging/v1/sms/definitions/2FA_order_accounts
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
  "description": "description updated",
  "status": "Inactive"
}
```

### Example Response

```js
HTTP/1.1 200 OK
{
  "requestId": "582bec09-6d04-4222-bbba-cea616495596",
  "name": "account-reset",
  "definitionKey": "account-reset",
  "description": "description updated",
  "status": "Inactive",
  "createdDate": "2019-05-14T21:05:00",
  "modifiedDate": "2019-05-14T21:05:00",
  "content": {
    "message": "%%FirstName%%, your 2FA token is %%password%%"
  },
  "subscriptions": {
    "shortCode": "8201221",
    "countryCode": "US",
    "autoAddSubscriber": true,
    "keyword": "PASSWORD"
  }
}
```

### HTTP Responses

| Response | Reason |
| --- | --- |
| 200 OK | Send definition is updated. Review example response. |
| 400 Bad Request | Invalid request |
| 403 Forbidden | Failed to pass authorization. |
| 500 Server Error | Internal error |

Last Updated: Jun 8, 2021
