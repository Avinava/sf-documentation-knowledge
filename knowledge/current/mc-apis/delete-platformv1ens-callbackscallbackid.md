---
title: "DELETE /platform/v1/ens-callbacks/{callbackId}"
domain: mc-apis
topic: delete-platformv1ens-callbackscallbackid
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:21.349Z
estimatedTokens: 241
keywords: [platform, ens-callbacks, callbackId, Deletes, registered, callback, isn't, any, subscriptions, deleting, **Overview**, Usage, HTTP, Responses]
---

# DELETE /platform/v1/ens-callbacks/{callbackId}

> Deletes a registered callback that isn't used by any subscriptions. Delete all subscriptions for the callback before deleting the callback.

# DELETE /platform/v1/ens-callbacks/{callbackId}

## **Overview**

Deletes a registered callback that isn't used by any subscriptions. Delete all subscriptions for the callback before deleting the callback.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| callbackId | string | Required | Unique identifier of the callback. |

## Usage

### Example Request

```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
DELETE /platform/v1/ens-callbacks/65b885ab-c2b4-46fe-85d0-d6cb8be8057d
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

### HTTP Responses

| Response | Reason |
| --- | --- |
| 200 Success | Callback is deleted. |
| 403 Forbidden | Failed to pass authorization. |
| 404 Not Found | Callback ID doesn’t exist. |
| 409 Conflict | Subscriptions exist for the callback. Delete all subscriptions for the callback before deleting the callback. |
| 500 Server Error | Internal error |

Last Updated: Jun 8, 2021
