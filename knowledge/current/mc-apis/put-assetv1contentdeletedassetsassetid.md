---
title: "PUT /asset/v1/content/deletedAssets/[AssetID]"
domain: mc-apis
topic: put-assetv1contentdeletedassetsassetid
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:20.860Z
estimatedTokens: 442
keywords: [PUT, asset, content, deletedAssets, AssetID, Updates, Builder, category, **Overview**]
---

> Updates one Content Builder category by ID.

# PUT /asset/v1/content/deletedAssets/\[AssetID\]

## **Overview**

Updates one Content Builder category by ID.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| id | number | Required | The ID of the category. |
| Name | Type |  | Description |
| --- | --- | --- | --- |
| Id | number | Required | System-assigned ID of the category, |
| Name | string | Required | Name of the category. |
| ParentId | number | Required | ID of the parent category. |
| EnterpriseId | number |  | ID of the enterprise this business unit belongs to. |
| CategoryType | string |  | The type of category, either asset or asset-shared. |
| MemberId | number |  | ID of the member who creates the category. |
| SharingProperties | object |  | Stores the MIDs of business units this category is shared with and the sharing type. Only included in the response if CategoryType is asset-shared. |
| SharingProperties.SharedWith | object |  | List of MID IDs the category is shared with. |
| SharingProperties.SharingType | string |  | Indicates the permission that you are granting to the list of MIDs in sharedWith. The only possible value for categories is edit. |
| Description | string |  | Description of the category. |

**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
PUT /asset/v1/content/categories/3916
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "Id" : 3916,
    "Name" : "Pictures",
    "ParentId" : 99,
    "CategoryType" : "asset",
    "MemberId" : 20720,
    "EnterpriseId" : 20720
}
```

**Example Response**

```
{
    "Id" : 3916,
    "Name" : "Pictures",
    "ParentId" : 99,
    "CategoryType" : "asset",
    "MemberId" : 20720,
    "EnterpriseId" : 20720,
}
```

Last Updated: Jun 8, 2021
