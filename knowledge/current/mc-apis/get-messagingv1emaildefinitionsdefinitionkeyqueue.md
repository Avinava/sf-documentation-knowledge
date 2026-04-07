---
title: "GET /messaging/v1/email/definitions/{definitionKey}/queue"
domain: mc-apis
topic: get-messagingv1emaildefinitionsdefinitionkeyqueue
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:17.318Z
estimatedTokens: 227
keywords: [messaging, email, definitions, definitionKey, queue, metrics, messages, send, definition, accepted, yet, processed, **Overview**]
---

> Gets metrics for the messages of a send definition. Applies to messages that are accepted but not yet processed.

# GET /messaging/v1/email/definitions/{definitionKey}/queue

## **Overview**

Gets metrics for the messages of a send definition. Applies to messages that are accepted but not yet processed.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| definitionKey | string | Required | Unique identifier of the definition. |

## Usage

Check the queue depth and age of the oldest record not yet processed. If you set a definition to inactive and continue to send message requests to it, the count and age increase.

### Example Request

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /messaging/v1/email/definitions/2FA_order_accounts/queue
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

### Example Response

```js
HTTP/1.1 200 OK
{
  "requestId": "ba9633fa-5c8d-4c42-8efa-a16412ac0c53",
  "count": 22,
  "ageSeconds": 45
}
```

Last Updated: Jun 8, 2021
