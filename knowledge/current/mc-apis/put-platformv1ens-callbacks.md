---
title: "PUT /platform/v1/ens-callbacks"
domain: mc-apis
topic: put-platformv1ens-callbacks
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:20.852Z
estimatedTokens: 362
keywords: [PUT, platform, ens-callbacks, Updates, registered, callback, take, two, minutes, changes, become, active, **Overview**, HTTP, Responses]
---

> Updates a registered callback. It can take up to two minutes for callback changes to become active.

# PUT /platform/v1/ens-callbacks

## **Overview**

Updates a registered callback. It can take up to two minutes for callback changes to become active.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| callbackName | string | Required | Name of the callback. |
| callbackId | string | Required | Unique identifier of the callback. |
| maxBatchSize | integer |  | Must be at least 100 and no more than 1,000. Default is 1,000. |

## Usage

### Example Request

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
PUT /platform/v1/ens-callbacks
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

[{
  "callbackId": "65b885ab-c2b4-46fe-85d0-d6cb8be8057d",
  "callbackName": "cb1",
  "maxBatchSize": 1000
}]
```

### Example Response

```js
HTTP/1.1 200 OK
[{
  "callbackId": "65b885ab-c2b4-46fe-85d0-d6cb8be8057d",
  "callbackName": "cb1",
  "url": "https://example.com/",
  "maxBatchSize": 1000
}]
```

### HTTP Responses

| Response | Reason |
| --- | --- |
| 200 OK | Callback is updated. Review example response. |
| 201 Created | Callback is new. Response includes callbackId, callbackName, url, and maxBatchSize. |
| 304 No Change | Callback already exists on the server. |
| 400 Bad Request | Unable to process the request. |
| 403 Forbidden | Failed to pass authorization. |
| 404 Not Found | Callback ID doesn’t exist for this MID. |
| 500 Server Error | Internal error |

Last Updated: Jun 8, 2021
