---
title: "Facetable Attributes Collection Input"
domain: chatterapi
topic: facetable-attributes-collection-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.663Z
estimatedTokens: 91
keywords: [Facetable, Attributes, Collection, Input, settings, search]
---

# Facetable Attributes Collection Input

> Collection of facetable settings for search
    attributes.

# Facetable Attributes Collection Input

Collection of facetable settings for search attributes.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| facetable​Attribute​Settings | Facetable Attribute Input[] | Collection of up to 50 facetable settings. | Required | 49.0 |

## Code Examples

```
{
"facetableAttributeSettings" : [
   {
   "type" : "ProductCategory",
   "nameOrId" : "Id",
   "displayRank" : "1",
   "displayType" : "CategoryTree"
   },
  {
  "type" : "Standard",
  "nameOrId" : "Family",
  "displayRank" : "2",
  "displayType" : "MultiSelect"
  },
  {
  "type" : "Custom",
  "nameOrId" : "color__c",
  "displayRank" : "3",
  "displayType" : "MultiSelect"
  }
  ]
}
```

## Related Topics

- Facetable Attribute Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_facetable_attribute_input.htm)
