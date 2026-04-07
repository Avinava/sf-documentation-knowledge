---
title: "GET /asset/v1/content/categories"
domain: mc-apis
topic: get-assetv1contentcategories
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:17.134Z
estimatedTokens: 774
keywords: [asset, content, categories, Builder, owned, reside, MID, shared, add, scope, call, **Overview**, Sort, Filter, Operators]
---

> Returns one or more Content Builder categories that are owned by or reside in your MID. To request categories that have been shared with your MID, add a scope parameter to the call.

# GET /asset/v1/content/categories

## **Overview**

Returns one or more Content Builder categories that are owned by or reside in your MID. To request categories that have been shared with your MID, add a scope parameter to the call.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| $filter | string |  | Filter by ParentId using a simple operator and value. ParentId is the only allowed field. If you don't provide a $filter parameter, the query returns all the Categories in your MID. |
| $page | number |  | Page number to return from the paged results. Start with 1 and continue until you get zero results. Typically provided along with the $pagesize parameter. |
| $pagesize | number |  | Number of results per page to return. Typically provided along with the $page parameter. |
| $orderBy | string |  | Determines which category property to use for sorting, and also determines the direction in which to sort the data. If you don't provide the $orderBy parameter, the results are sorted by category ID in ascending order. |
| scope | string |  | Determines which MIDs the query results come from. To return categories that reside in your MID, either don't add the scope parameter or call the endpoint like this: .../categories?scope=Ours. To return categories that are shared to your MID, or that you have shared with other MIDs, call the endpoint like this: .../categories?scope=Shared. To return all categories visible to your MID, call the endpoint like this: .../categories?scope=Ours,Shared. |

**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /asset/v1/content/categories?$pagesize=20&$filter=parentId eq 3916
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**

```
{
    "Id" : 27,
    "Name" : "Test Category",
    "ParentId" : 3916,
    "CategoryType" : "asset",
    "MemberId" : 20720,
    "EnterpriseId" : 20720
},
{
    "Id" : 27,
    "Name" : "Test Category",
    "ParentId" : 3916,
    "CategoryType" : "asset-shared",
    "MemberId" : 20720,
    "EnterpriseId" : 20720,
    "SharingProperties" : {
        "SharingType" : "edit",
        "SharedWith" : [ 0 ]
    }
}
```

### Sort Syntax

The sort syntax is the category property name followed by the order direction, either asc or desc, with a space in between. The following example sorts by name in descending order: /asset/v1/content/categories?$orderBy=name asc.

### Filter Syntax

Each filter is separated by &. The following example filters all categories whose parent id is similar to the value 3916: /asset/v1/content/categories?$filter=parentId eq 3916

### Filter Operators

| Operator | Description |
| --- | --- |
| eq | Equals. Compares numbers and strings. |
| neq | Is not equal to. Compares numbers and strings. |
| lt | Is less than. Compares numbers only. |
| lte | Is less than or equal to. Compares numbers only. |
| gt | Is greater than. Compares numbers only. |
| gte | Is greater than or equal to. Compares numbers only. |
| like | Is similar to. Compares strings only. |

Last Updated: Jun 8, 2021
