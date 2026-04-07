---
title: "GET /platform/v1/ens-subscriptions-by-cb/{callbackId}"
domain: mc-apis
topic: get-platformv1ens-subscriptions-by-cbcallbackid
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:21.931Z
estimatedTokens: 454
keywords: [platform, ens-subscriptions-by-cb, callbackId, Retrieves, subscriptions, associated, callback, **Overview**, Usage, HTTP, Responses]
---

# GET /platform/v1/ens-subscriptions-by-cb/{callbackId}

> Retrieves details for all subscriptions associated with a callback.

# GET /platform/v1/ens-subscriptions-by-cb/{callbackId}

## **Overview**

Retrieves details for all subscriptions associated with a callback.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| callbackId | string | Required | Unique identifier of the callback. |

## Usage

### Example Request

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /platform/v1/ens-subscriptions-by-cb/65b885ab-c2b4-46fe-85d0-d6cb8be8057d
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

### Example Response

```js
HTTP/1.1 200 Success
[{
    "callbackId": "65b885ab-c2b4-46fe-85d0-d6cb8be8057d",
    "callbackName": "cbName",
    "url": "https://example.com/",
    "maxBatchSize": 1000,
    "subscriptionId": "d89c87c4-70f8-43d6-be1e-f01dce97fe4c",
    "subscriptionName": "subscriptionName",
    "eventCategoryTypes": ["TransactionalSendEvents.EmailNotSent",
    "TransactionalSendEvents.EmailSent"],
    "filters": ["definitionKey=12345"],
    "status": "active",
    "statusReason": ""
  },
{
    "callbackId": "65b885ab-c2b4-46fe-85d0-d6cb8be8057d",
    "callbackName": "cbName",
    "url": "https://example.com/",
    "maxBatchSize": 1000,
    "subscriptionId": "55afe59f-8d20-46fd-a2d1-ff01453abe90",
    "subscriptionName": "subscriptionName2",
    "eventCategoryTypes": ["TransactionalOpenEvents.EmailOpen",
    "TransactionalOpenEvents.EmailNotOpen"],
    "filters": ["definitionKey=12345"],
    "status": "active",
    "statusReason": ""
  }]
```

### HTTP Responses

| Response | Reason |
| --- | --- |
| 200 Success | Callback subscriptions retrieved. |
| 400 Bad Request | Invalid request |
| 403 Forbidden | Failed to pass authorization. |
| 404 Not Found | Callback ID doesn’t exist for this MID. |
| 500 Server Error | Internal error |

Last Updated: Jun 8, 2021
