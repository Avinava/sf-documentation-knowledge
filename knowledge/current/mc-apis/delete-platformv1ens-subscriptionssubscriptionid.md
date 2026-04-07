---
title: "DELETE /platform/v1/ens-subscriptions/{subscriptionId}"
domain: mc-apis
topic: delete-platformv1ens-subscriptionssubscriptionid
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:21.436Z
estimatedTokens: 190
keywords: [platform, ens-subscriptions, subscriptionId, Deletes, subscription, **Overview**, Usage, HTTP, Responses]
---

# DELETE /platform/v1/ens-subscriptions/{subscriptionId}

> Deletes a subscription.

# DELETE /platform/v1/ens-subscriptions/{subscriptionId}

## **Overview**

Deletes a subscription.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| subscriptionId | string | Required | Unique identifier for the subscription to delete. |

## Usage

### Example Request

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
DELETE /platform/v1/ens-subscriptions/d89c87c4-70f8-43d6-be1e-f01dce97fe4c
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

### HTTP Responses

| Response | Reason |
| --- | --- |
| 200 Success | Subscription deleted. |
| 403 Forbidden | Failed to pass authorization. |
| 404 Not Found | Subscription ID doesn’t exist. |
| 500 Server Error | Internal error |

Last Updated: Jun 8, 2021
