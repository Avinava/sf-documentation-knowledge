---
title: "PUT /push/v1/application/{appId}/key"
domain: mc-apis
topic: put-pushv1applicationappidkey
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:25.591Z
estimatedTokens: 242
keywords: [PUT, push, application, appId, key, Updates, custom, associated, app, **Overview**, Usage]
---

# PUT /push/v1/application/{appId}/key

> Updates information on all custom key values associated with an app.

# PUT /push/v1/application/{appId}/key

## **Overview**

Updates information on all custom key values associated with an app.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| appId | string | Required | String value identifying the app |

### Usage

**Example Request**

```json
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
PUT /push/v1/application/B2E635FA-4894-4A4F-9125-5A88B27FCD04/key
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

[
    {
        "key": "key1",
        "description": "description1"
    },
    {
        "key": "key2",
        "description": "description2"
    },
    {
        "key": "key3",
        "description": "description3"
    }
]
```

**Example Response**

If the request passes successfully, the API returns the following response.

```json
200 (OK)
```

If the request includes invalid information, the API returns a 400 response with details on the error.

Last Updated: Jun 8, 2021
