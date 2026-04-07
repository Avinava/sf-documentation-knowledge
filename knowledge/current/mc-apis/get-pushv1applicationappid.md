---
title: "GET /push/v1/application/{appId}"
domain: mc-apis
topic: get-pushv1applicationappid
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:18.660Z
estimatedTokens: 355
keywords: [push, application, appId, Retrieves, app, account, **Overview**]
---

> Retrieves a single app associated with an account.

# GET /push/v1/application/{appId}

## **Overview**

Retrieves a single app associated with an account.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| appId | string | Required | String value identifying the app |

### Usage

**Example Request**

```json
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /push/v1/application/237690ac-41ff-4d3f-82f2-9c7efd89185f
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**

If the request passes successfully, the API returns this response.

```json
200 (OK)
[
    {
        "id":"237690ac-41ff-4d3f-82f2-9c7efd89185f",
        "name":"App A Name",
        "description":"App A Description",
        "createdDate":"2013-07-11T09:34:55.54Z",
        "modifiedDate":"2013-07-11T09:34:55.54Z",
        "keys":
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
        ],
        "apnsEnabled": true,
        "apnsCertificateExpiration": "2014-07-11T09:34:55.54Z",
        "gcmEnabled": true
    }
]
```

If the request includes invalid information, the API returns a 400 response with details on the error.

Last Updated: Jun 8, 2021
