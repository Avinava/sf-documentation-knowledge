---
title: "Sort Rules Collection Input"
domain: chatterapi
topic: sort-rules-collection-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:10.278Z
estimatedTokens: 96
keywords: [Sort, Collection, admin, webstore]
---

> Sort rules input collection information an admin can use to create sort rules
      for a webstore.

# Sort Rules Collection Input

Sort rules input collection information an admin can use to create sort rules for a webstore.

Root XML tag

<sortRules>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| sortRules | Sort Rule Input[] | A collection of sort rules inputs. | Required | 54.0 |

## Code Examples

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

- Sort Rule Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_sort_rule_input.htm)
