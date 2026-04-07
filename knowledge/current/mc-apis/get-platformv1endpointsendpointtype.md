---
title: "GET /platform/v1/endpoints/{endpointType}"
domain: mc-apis
topic: get-platformv1endpointsendpointtype
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:22.264Z
estimatedTokens: 192
keywords: [platform, endpoints, endpointType, **Overview**, Usage]
---

# GET /platform/v1/endpoints/{endpointType}

# GET /platform/v1/endpoints/{endpointType}

## **Overview**

Gets endpoint data.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| endpointType | enum | Required | Value of endpointType. Valid endpoints are ftp, soap, and rest. |

### Usage

**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /platform/v1/endpoints/soap
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**

```js
HTTP/1.1 200
{
    "type": "soap",
    "url": "https://webservice.s4.exacttarget.com/Service.asmx"
}
```

**Error Response**

```js
HTTP/1.1 404 Not Found
{
    "documentation": "",
    "errorcode": 30003,
    "message": "No endpoint exists for key 'foobar'."
}
```

Last Updated: Jun 8, 2021
