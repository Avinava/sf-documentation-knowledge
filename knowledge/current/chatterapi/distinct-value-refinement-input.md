---
title: "Distinct Value Refinement Input"
domain: chatterapi
topic: distinct-value-refinement-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.515Z
estimatedTokens: 203
keywords: [Distinct, Refinement, Input, Attribute-based, product, search]
---

# Distinct Value Refinement Input

> Attribute-based refinement with distinct values for product
      search.

# Distinct Value Refinement Input

Attribute-based refinement with distinct values for product search.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| attributeType | String | Search attribute type. Values are:CustomProductAttributeStandard | Required | 50.0 |
| nameOrId | String | Developer name of the attribute. In version 49.0 and later, the ID of the attribute isn’t supported. | Required | 49.0 |
| type | String | Search facet type. Value is:DistinctValueRange | Required | 49.0 |
| values | String[] | Comma-separated list of attribute values. | Required | 49.0 |

#### See Also

-   [Product Search Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_product_search_input.htm "Product search.")

## Code Examples

```
{
  "attributeType": "Custom",
  "nameOrId": "Color__c",
  "values": ["red", "blue"],
  "type": "DistinctValue"
}
```

## Related Topics

- Product Search Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_product_search_input.htm)
