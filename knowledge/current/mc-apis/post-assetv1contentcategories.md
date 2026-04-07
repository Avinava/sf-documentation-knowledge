---
title: "POST /asset/v1/content/categories"
domain: mc-apis
topic: post-assetv1contentcategories
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:20.806Z
estimatedTokens: 716
keywords: [POST, asset, content, categories, Creates, category, folder, Builder, **Overview**, Usage]
---

# POST /asset/v1/content/categories

> Creates a category (folder) in Content Builder.

# POST /asset/v1/content/categories

## **Overview**

Creates a category (folder) in Content Builder.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| Name | string | Required | Name of the category. |
| ParentId | number | Required | ID of the parent category. |
| CategoryType | string |  | The type of category, either asset or asset-shared, which is automatically set to the CategoryType of the parent category. If set to asset-shared, include the SharingProperties in the call. |
| EnterpriseId | number |  | ID of the enterprise this business unit belongs to. |
| MemberId | number |  | ID of the member who creates the category. |
| SharingProperties | object |  | Allows you to share categories with one or more business units that have Content Builder Sharing enabled. See Sharing for additional information. Stores the MIDs of business units this category is shared with and the sharing type. Only included in the response if CategoryType is asset-shared. |
| SharingProperties.SharedWith | object |  | List of up to 100 MID IDs the category is shared with. To share the category with all business units in the enterprise, and if your account has access to Content Builder Across Enterprise Sharing, set this to 0. SharedWith cannot contain 0 and other MIDs simultaneously. Since shared categories live in and are owned by the enterprise business unit, don't include the enterprise business unit in the SharedWith property. |
| SharingProperties.SharingType | string |  | Indicates the permission that you are granting to the list of MIDs in sharedWith. The only possible value for categories is edit. |
| Description | string |  | Description of the category. |

### Usage

**Example Non-Shared Category Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /asset/v1/content/categories
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "Name" : "My Pictures",
    "ParentId" : 99,
}
```

**Example Non-Shared Category Response**

```js
{
    "Id" : 27,
    "Name" : "My Pictures",
    "ParentId" : 99,
    "CategoryType" : "asset",
    "MemberId" : 1500,
    "EnterpriseId" : 1575
}
```

**Example Shared Category Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /asset/v1/content/categories
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "Name" : "Shared Pictures",
    "ParentId" : 99,
    "SharingProperties" : {
        "SharedWith" : [ 1575 ],
        "SharingType" : "edit"
    }
}
```

**Example Shared Category Response**

```js
{
    "Id" : 27,
    "Name" : "Shared Pictures",
    "ParentId" : 99,
    "CategoryType" : "asset-shared",
    "MemberId" : 1500,
    "EnterpriseId" : 1575,
    "SharingProperties" : {
        "SharedWith" : [ 1575 ],
        "SharingType" : "edit"
    }
}
```

Last Updated: Jun 8, 2021

## Related Topics

- Sharing (atlas.en-us.noversion.mc-apis.meta/mc-apis/sharing.htm)
