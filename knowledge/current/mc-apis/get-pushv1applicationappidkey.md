---
title: "GET /push/v1/application/{appId}/key"
domain: mc-apis
topic: get-pushv1applicationappidkey
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:18.648Z
estimatedTokens: 239
keywords: [push, application, appId, key, Retrieves, app, **Overview**]
---

> Retrieves all custom key values associated with an app.

# GET /push/v1/application/{appId}/key

## **Overview**

Retrieves all custom key values associated with an app.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| appId | string | Required | String value identifying the app |

### Usage

**Example Request**

```json
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /push/v1/application/{B2E635FA-4894-4A4F-9125-5A88B27FCD04}/key
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**

If the request passes successfully, the API returns the following response.

```json
200 (OK)
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

If the request includes invalid information, the API returns a 400 response with details on the error.

Last Updated: Jun 8, 2021
