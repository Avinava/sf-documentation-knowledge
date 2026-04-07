---
title: "PUT /push/v1/application/{appId}/key/{key}"
domain: mc-apis
topic: put-pushv1applicationappidkeykey
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:25.672Z
estimatedTokens: 248
keywords: [PUT, push, application, appId, key, Updates, custom, associated, app, **Overview**, Usage]
---

# PUT /push/v1/application/{appId}/key/{key}

> Updates information on a single custom key value associated with an app.

# PUT /push/v1/application/{appId}/key/{key}

## **Overview**

Updates information on a single custom key value associated with an app.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| appId | string | Required | String value identifying the app |
| key | string | Required | String value identifying the key (must be less than or equal to 15 characters) |

### Usage

**Example Request**

```json
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
PUT /push/v1/application/B2E635FA-4894-4A4F-9125-5A88B27FCD04/key
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "description": "Text that describes the key"
}
```

**Example Response**

If the request passes successfully, the API returns this response.

```json
200 (OK)
Content-Type: application/json
{
    "description": "Text that describes the key"
}
```

If the request includes invalid information, the API returns a 400 response with details on the error.

Last Updated: Jun 8, 2021
