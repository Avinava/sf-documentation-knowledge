---
title: "GET /platform/v1/ens-callbacks/{callbackId}"
domain: mc-apis
topic: get-platformv1ens-callbackscallbackid
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:17.104Z
estimatedTokens: 256
keywords: [platform, ens-callbacks, callbackId, Retrieves, registered, callback, **Overview**, HTTP, Responses]
---

> Retrieves details about a registered callback.

# GET /platform/v1/ens-callbacks/{callbackId}

## **Overview**

Retrieves details about a registered callback.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| callbackId | string | Required | Unique identifier of the callback. |

## Usage

### Example Request

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /platform/v1/ens-callbacks/65b885ab-c2b4-46fe-85d0-d6cb8be8057d
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
  "status": "verified",
  "statusReason": "none"
}
```

### HTTP Responses

| Response | Reason |
| --- | --- |
| 200 Success | Callback retrieved. Review example response. |
| 400 Bad Request | Unable to process the request. |
| 403 Forbidden | Failed to pass authorization. |
| 404 Not Found | Callback ID doesn't exist. |

Last Updated: Jun 8, 2021
