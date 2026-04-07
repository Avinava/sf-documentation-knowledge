---
title: "PUT /platform/v1/ens-regenerate"
domain: mc-apis
topic: put-platformv1ens-regenerate
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:23.271Z
estimatedTokens: 306
keywords: [PUT, platform, ens-regenerate, Regenerates, key, callback, Regenerating, deactivates, **Overview**, Usage, HTTP, Responses]
---

# PUT /platform/v1/ens-regenerate

> Regenerates a signature key for a given callback. Regenerating a signature key deactivates the existing key.

# PUT /platform/v1/ens-regenerate

## **Overview**

Regenerates a signature key for a given callback. Regenerating a signature key deactivates the existing key.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| callbackId | string | Required | Unique identifier of the callback. |

## Usage

### Example Request

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
PUT /platform/v1/ens-regenerate
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

[{
  "callbackId": "65b885ab-c2b4-46fe-85d0-d6cb8be8057d"
}]
```

### Example Response

```js
HTTP/1.1 200 OK
[{
  "callbackName": "cb1",
  "callbackId": "65b885ab-c2b4-46fe-85d0-d6cb8be8057d",
  "url": "https://example.com/",
  "signatureKey": "KktBXb9V556KtSDG7Wb5a0xHAu/z9n3k+YekDzLy7i0="
}]
```

### HTTP Responses

| Response | Reason |
| --- | --- |
| 200 OK | New signature key generated. Review example response. |
| 400 Bad Request | Unable to process the request. |
| 401 Unauthorized | Request not authorized; missing or incorrect bearer token. |
| 403 Forbidden | Failed to pass authorization. |
| 404 Not Found | Callback ID doesn’t exist for this MID. |
| 500 Server Error | Internal error |

Last Updated: Jun 8, 2021
