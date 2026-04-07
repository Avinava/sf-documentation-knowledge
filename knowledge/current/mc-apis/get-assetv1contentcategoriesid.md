---
title: "GET /asset/v1/content/categories/{id}"
domain: mc-apis
topic: get-assetv1contentcategoriesid
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:17.139Z
estimatedTokens: 182
keywords: [asset, content, categories, Builder, category, **Overview**]
---

> Returns one Content Builder category by ID.

# GET /asset/v1/content/categories/{id}

## **Overview**

Returns one Content Builder category by ID.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| id | number | Required | The ID of the category. |

**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /asset/v1/content/categories/3916
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**

```
{
    "Id" : 3916,
    "Name" : "Shared Pictures",
    "ParentId" : 99,
    "CategoryType" : "asset-shared",
    "MemberId" : 20720,
    "EnterpriseId" : 20720,
    "SharingProperties" : {
        "SharingType" : "edit",
        "SharedWith" : [ 0 ]
    }
}
```

Last Updated: Jun 8, 2021
