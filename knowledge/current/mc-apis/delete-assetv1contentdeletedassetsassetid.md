---
title: "DELETE /asset/v1/content/deletedAssets/[AssetID]"
domain: mc-apis
topic: delete-assetv1contentdeletedassetsassetid
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:21.359Z
estimatedTokens: 124
keywords: [asset, content, deletedAssets, AssetID, Deletes, Builder, category, **Overview**]
---

# DELETE /asset/v1/content/deletedAssets/[AssetID]

> Deletes one Content Builder category by ID.

# DELETE /asset/v1/content/deletedAssets/\[AssetID\]

## **Overview**

Deletes one Content Builder category by ID.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| id | number | Required | The ID of the category. |

**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
DELETE /asset/v1/content/categories/3916
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**

```
200 OK
```

Last Updated: Jun 8, 2021
