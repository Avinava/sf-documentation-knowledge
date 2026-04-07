---
title: "POST /asset/v1/content/assets/query"
domain: mc-apis
topic: post-assetv1contentassetsquery
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:20.188Z
estimatedTokens: 1529
keywords: [POST, asset, content, assets, query, collection, advanced, **Overview**, Sort, Filter, simpleOperators, Usage]
---

# POST /asset/v1/content/assets/query

> Gets an asset collection by advanced query.

# POST /asset/v1/content/assets/query

## **Overview**

Gets an asset collection by advanced query.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| query | object | Required | Contains the actual search request, comprised of one or more simple queries. Combine multiple query objects into an advanced query using the logical operator AND or OR. |
| query.property | string |  | Refers to an element of the asset you are querying |
| query.simpleOperator | string |  | Represents the comparison you are making between the property and the value |
| query.value | string |  | Represents the data you are comparing the property for returning search results. The value can be practically any constant expression: a single word, a phrase or sentence, a number with our without decimals. When filtering for a property among multiple values, such as when using the in operator, the value field becomes values. |
| page | object |  | Contains page and pageSize. For page, start with 1 and continue until you get zero results. pageSize is the number of results per page to return. |
| sort | object |  | Contains one or more properties to use for sorting, and also determines the direction in which to sort the data. |
| fields | object |  | List of asset properties used to reduce the size of your results to only the properties you need. |

### Sort Syntax

The sort syntax is the asset property name followed by the order direction, either asc or desc. This example sorts by both ID and version, in ascending and descending order, respectively.

```
"sort":
[
    { "property":"id", "direction":"ASC" },
    { "property":"version", "direction":"DESC" }
]
```

### Query Syntax

A complex query is comprised of two or more simple queries joined with an AND or OR logical comparison operator. The simple queries are contained in a leftOperand JSON field and rightOperand JSON field. A third field, the logicalOperator, is used to compare the two operands. You can also embed queries inside other queries.

### Filter simpleOperators

| Operator | Description |
| --- | --- |
| equal | Compares numbers and strings. Specifies that search results must contain an exact match of the words included in the search terms. |
| notEqual | Compares numbers and strings. |
| lessThan | Compares numbers only. |
| lessThanOrEqual | Compares numbers only. |
| greaterThan | Compares numbers only. |
| greaterThanOrEqual | Compares numbers only. |
| like | Is similar to. Compares strings only. |
| isNull |  |
| isNotNull |  |
| contains | Compares strings only. Specifies that search results must contain at least one of the words included in the search terms. |
| mustcontain | Specifies that search results must contain all words included in the search terms. |
| startsWith | Compares strings only. |
| in | Value is among the list of values. Use this operator to retrieve a list of assets by their IDs, or a list of assets by nearly any enumerable value. |
| where | Value is an exact match of the property's value. Compares only strings within enumerables, such as tags and attributes). Use this operator to query the tags and attributes list properties for assets where at least one item in the list matches your query. |

### Usage

**Example Request**

This example returns all assets whose version is 1 and assetType name is "Template"; returning the first 50 results, sorted by asset ID, ascending.

```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST //asset/v1/content/assets/query
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "page":
    {
        "page":1,
        "pageSize":50
    },

    "query":
    {
        "leftOperand":
        {
            "property":"version",
            "simpleOperator":"equal",
            "value":1
        },
        "logicalOperator":"AND",
        "rightOperand":
        {
            "property":"assetType.name",
            "simpleOperator":"equal",
            "value":"Template"
        }
    },

    "sort":
    [
        { "property":"id", "direction":"ASC" }
    ],

    "fields":
    [
        "enterpriseId",
        "memberId",
        "thumbnail",
        "category",
        "content",
        "data"
    ]
}
```

**Example Response** In addition to standard fields always returned on the asset object, the response contains any optional asset fields specified in the request.

```
{
  "count": 2,
  "page": 1,
  "pageSize": 50,
  "links": {},
  "items": [
    {
      "id": 12610,
      "customerKey": "a7b2c298-7701-43e0-bfab-86110065d81f",
      "objectID": "c9bbebfd-c360-4cf9-a7a7-9f662d491c58",
      "assetType": {
        "id": 4,
        "name": "hello there",
        "displayName": "Template"
      },
      "name": "new-template",
      "description": "new-template",
      "createdDate": "2016-09-15T15:28:42.143-06:00",
      "createdBy": {
        "id": 6247779,
        "email": "email@example.com",
        "name": "Sean Smith",
        "userId": "6247779"
      },
      "modifiedDate": "2016-09-15T15:28:42.143-06:00",
      "modifiedBy": {
        "id": 6247779,
        "email": "email@example.com",
        "name": "Sean Smith",
        "userId": "6247779"
      },
      "enterpriseId": 6264462,
      "memberId": 6264462,
      "status": {
        "id": 1,
        "name": "Draft"
      },
      "thumbnail": {
        "thumbnailUrl": "/v1/assets/12610/thumbnail"
      },
      "category": {
        "id": 284889,
        "parentId": 0,
        "name": "Content Builder"
      },
      "content": "<div>hello world</div>",
      "data": {
        "email": {
          "options": {
            "generateFrom": null
          }
        }
      }
    },
    ...
  ]
}
```

For more use cases related to this reference material, see [Use Case Examples for Enhanced Content Search](https://developer.salesforce.com/docs/atlas.en-us.noversion.mc-apis.meta/mc-apis/use-case-enhanced-content-search.htm).

The Enhanced Content Search use cases show how the fictitious Northern Trail Outfitters company might use the Marketing Cloud Enhanced Content Search feature.

Last Updated: Jun 8, 2021
