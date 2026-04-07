---
title: "GET /messaging/v1/sms/definitions/{definitionKey}"
domain: mc-apis
topic: get-messagingv1smsdefinitionsdefinitionkey
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:17.364Z
estimatedTokens: 345
keywords: [messaging, sms, definitions, definitionKey, send, definition, configuration, key, **Overview**, HTTP, Responses]
---

> Gets send definition configuration details for a definition key.

# GET /messaging/v1/sms/definitions/{definitionKey}

## **Overview**

Gets send definition configuration details for a definition key.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| definitionKey | string | Required | Unique identifier of the definition. |

## Usage

### Example Request

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /messaging/v1/sms/definitions/2FA_order_accounts
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

### Example Response

```js
HTTP/1.1 200 Success
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
    "countryCode": "US",
    "autoAddSubscriber": true,
    "keyword": "PASSWORD"
  }
}
```

### HTTP Responses

| Response | Reason |
| --- | --- |
| 200 Success | Definition retrieved. Review example response. |
| 400 Bad Request | Invalid request |
| 403 Forbidden | Failed to pass authorization. |
| 404 Not Found | Definition key doesn’t exist for this MID |
| 500 Server Error | Internal error |

Last Updated: Jun 8, 2021
