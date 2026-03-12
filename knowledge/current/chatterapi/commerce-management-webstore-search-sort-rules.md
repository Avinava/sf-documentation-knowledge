---
title: "Commerce Management Webstore Search, Sort Rules"
domain: chatterapi
topic: commerce-management-webstore-search-sort-rules
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.059Z
estimatedTokens: 195
keywords: [Commerce, Management, Webstore, Search, Sort, Rules, retrieve]
---

# Commerce Management Webstore Search, Sort Rules

> Create or retrieve sort rules for a webstore.

# Commerce Management Webstore Search, Sort Rules

Create or retrieve sort rules for a webstore.

Resource

```

```

Available version

54.0

HTTP methods

GET, PUT

Response body for GET

[Sort Rules Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_sort_rules_collection_output.htm "Collection of sort rules.")

Request body for PUT

Root XML tag

<sortRules>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| sortRules | Sort Rule Input[] | A collection of sort rules inputs. | Required | 54.0 |

Response body for PUT

[Sort Rules Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_sort_rules_collection_output.htm "Collection of sort rules.")

## Code Examples

```
/commerce/management/webstores/webstoreId/search/sort-rules
```

```
{
  "sortRules" : [
    {
      "type" : "ProductBased",
      "sortStandardField" : "Stock_Keeping_Unit",
      "direction" : "Ascending",
      "labelSuffix": "Asc",      "sortOrder" : "1"
    }
  ]
}
```

## Related Topics

- Sort Rules Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_sort_rules_collection_output.htm)
- Sort Rule Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_sort_rule_input.htm)
