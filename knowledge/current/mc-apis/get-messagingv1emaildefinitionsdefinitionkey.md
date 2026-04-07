---
title: "GET /messaging/v1/email/definitions/{definitionKey}"
domain: mc-apis
topic: get-messagingv1emaildefinitionsdefinitionkey
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:22.227Z
estimatedTokens: 427
keywords: [messaging, email, definitions, definitionKey, send, definition, configuration, key, retrieve, activated, Transactional, Journeys, created, Journey, Builder]
---

# GET /messaging/v1/email/definitions/{definitionKey}

> Gets send definition configuration details for a definition key. You can only retrieve activated Transactional Send Journeys created in Journey Builder.

# GET /messaging/v1/email/definitions/{definitionKey}

## **Overview**

Gets send definition configuration details for a definition key. You can only retrieve activated Transactional Send Journeys created in Journey Builder.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| definitionKey | string | Required | Unique identifier of the definition. |

## Usage

### Example Request

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /messaging/v1/email/definitions/2FA_order_accounts
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

### Example Response

```js
HTTP/1.1 200 Success
{
  "requestId": "1f1e8755-819b-424d-a914-e066b5ba20f8",
  "name": "My Unique Definition Name",
  "definitionKey": "2FA_order_accounts",
  "definitionId": "c13a2f02-2e02-e911-80e9-1402ec6b9711",
  "description": "description updated",
  "classification": "Default Transactional",
  "status": "Active",
  "createdDate": "2018-12-17T13:00:00",
  "modifiedDate": "2018-12-31T09:52:00",
  "content": {
    "customerKey": "bebf8650-137a-494c-8727-cdeb32534961"
  },
  "subscriptions": {
    "dataExtension": "test-de",
    "list": "test-list"
    "autoAddSubscriber": true,
    "updateSubscriber": true
  },
  "options": {
    "trackLinks": true
  },
  "journey": {
    "interactionKey": "81bcd4b9-10b0-47c2-be8e-fce576c8110c"
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
