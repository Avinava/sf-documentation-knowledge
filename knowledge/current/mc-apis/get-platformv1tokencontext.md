---
title: "GET /platform/v1/tokenContext"
domain: mc-apis
topic: get-platformv1tokencontext
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:22.303Z
estimatedTokens: 133
keywords: [platform, tokenContext, authenticated, token, **Overview**, Usage]
---

# GET /platform/v1/tokenContext

> Returns information about the authenticated token.

# GET /platform/v1/tokenContext

## **Overview**

Returns information about the authenticated token.

### Usage

**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /platform/v1/tokenContext
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**

```js
HTTP/1.1 202 Accepted
{
    "enterprise": {
        "id": 1081365
    },
    "organization": {
        "id": 1081365
    },
    "user": {
        "id": 1093240
    }
}
```

Last Updated: Jun 8, 2021
