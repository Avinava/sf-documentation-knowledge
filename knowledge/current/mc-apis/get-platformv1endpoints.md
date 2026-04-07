---
title: "GET /platform/v1/endpoints"
domain: mc-apis
topic: get-platformv1endpoints
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:22.269Z
estimatedTokens: 195
keywords: [platform, endpoints, **Overview**, Usage]
---

# GET /platform/v1/endpoints

# GET /platform/v1/endpoints

## **Overview**

Gets endpoint data.

### Usage

**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /platform/v1/endpoints/?IsTSE=true
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**

```js
HTTP/1.1 200
{
    "page": 1,
    "pageSize": 3,
    "count": 3,
    "items": [
        {
            "type": "ftp",
            "url": "ftp://YOUR_SUBDOMAIN.ftp.marketingcloudops.com"
        },
        {
            "type": "rest",
            "url": "https://restapi.s4.exacttarget.com"
        },
        {
            "type": "soap",
            "url": "https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/Service.asmx"
        }
    ]
}
```

Last Updated: Jun 8, 2021
