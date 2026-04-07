---
title: "GET /platform/v1/ens-callbacks"
domain: mc-apis
topic: get-platformv1ens-callbacks
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:17.074Z
estimatedTokens: 274
keywords: [platform, ens-callbacks, Retrieves, registered, callbacks, **Overview**, HTTP, Responses]
---

> Retrieves details about all registered callbacks.

# GET /platform/v1/ens-callbacks

## **Overview**

Retrieves details about all registered callbacks.

## Usage

### Example Request

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /platform/v1/ens-callbacks
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

### Example Response

```js
HTTP/1.1 200 Success
[{
    "callbackId": "65b885ab-c2b4-46fe-85d0-d6cb8be8057d",
    "callbackName": "cb1",
    "url": "https://example1.com/",
    "maxBatchSize": 1000,
    "status": "verified",
    "statusReason": "none"
  },
  {
    "callbackId": "65b885ab-c2b4-46fe-85d0-d6cb8be8057e",
    "callbackName": "cb2",
    "url": "https://example2.com/",
    "maxBatchSize": 750,
    "status": "verified",
          "statusReason": "none"
  }]
```

### HTTP Responses

| Response | Reason |
| --- | --- |
| 200 Success | Callbacks retrieved. Review example response. |
| 400 Bad Request | Invalid request |
| 403 Forbidden | Failed to pass authorization. |
| 404 Not Found | Callback doesn’t exist |
| 500 Server Error | Internal error |

Last Updated: Jun 8, 2021

## Code Examples

```
HTTP/1.1 200 Success  
[{
    "callbackId": "65b885ab-c2b4-46fe-85d0-d6cb8be8057d",
    "callbackName": "cb1",
    "url": "https://example1.com/",
    "maxBatchSize": 1000,
    "status": "verified",
    "statusReason": "none"
  },
  {
    "callbackId": "65b885ab-c2b4-46fe-85d0-d6cb8be8057e",
    "callbackName": "cb2",
    "url": "https://example2.com/",
    "maxBatchSize": 750,
    "status": "verified",
          "statusReason": "none"
  }]
```
