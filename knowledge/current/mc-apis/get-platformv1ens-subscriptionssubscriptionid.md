---
title: "GET /platform/v1/ens-subscriptions/{subscriptionId}"
domain: mc-apis
topic: get-platformv1ens-subscriptionssubscriptionid
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:17.408Z
estimatedTokens: 330
keywords: [platform, ens-subscriptions, subscriptionId, Retrieves, subscription, **Overview**, HTTP, Responses]
---

> Retrieves details for a subscription.

# GET /platform/v1/ens-subscriptions/{subscriptionId}

## **Overview**

Retrieves details for a subscription.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| subscriptionId | string | Required | Unique identifier for the subscription. |

## Usage

### Example Request

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /platform/v1/ens-subscriptions/d89c87c4-70f8-43d6-be1e-f01dce97fe4c
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

### Example Response

```js
HTTP/1.1 200 Success
{
    "callbackId": "65b885ab-c2b4-46fe-85d0-d6cb8be8057d",
    "callbackName": "cb1",
    "url": "https://example.com/",
    "maxBatchSize": 1000,
    "subscriptionName": "subscriptionName",
    "eventCategoryTypes": ["TransactionalSendEvents.EmailNotSent",
    "TransactionalSendEvents.EmailSent"],
    "subscriptionId": "d89c87c4-70f8-43d6-be1e-f01dce97fe4c",
    "filters": ["definitionKey=12345"],
    "status": "active",
    "statusReason": "none"
}
```

### HTTP Responses

| Response | Reason |
| --- | --- |
| 200 Success | Callback subscription is retrieved. |
| 400 Bad Request | Invalid request |
| 403 Forbidden | Failed to pass authorization. |
| 404 Not Found | Subscription ID doesn’t exist. |
| 500 Server Error | Internal error |

Last Updated: Jun 8, 2021
