---
title: "Index Configuration Field"
domain: revenue-cloud
topic: index-configuration-field
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:09.451Z
estimatedTokens: 230
keywords: [Index, Configuration, Output, representation, index-configured]
---

# Index Configuration Field

> Output representation of the details of the index-configured field.

# Index Configuration Field

Output representation of the details of the index-configured field.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| attribute​DefinitionId | String | ID of the attribute definition. | Small, 62.0 | 62.0 |
| attribute​FieldId | String | ID of the attribute field. | Small, 62.0 | 62.0 |
| facetDisplay​Rank | Integer | Sort order for displaying the facets at run time. | Small, 63.0 | 63.0 |
| is​Facetable | Boolean | Indicates whether the field is facetable (true) or not (false). | Small, 63.0 | 63.0 |
| is​Searchable | Boolean | Indicates whether the index-configured field is searchable (true) or not (false). | Small, 62.0 | 62.0 |
| name | String | Name of the index-configured field. | Small, 62.0 | 62.0 |
| type | String | Type of the index-configured field. | Small, 62.0 | 62.0 |

## Code Examples

```
"indexConfigurations": [
    {
      "attributeDefinitionId": "0tjT1000000002bIAA",
      "name": "Color",
      "type": "ProductDynamicAttribute",
      "isSearchable": true
    },
    {
      "attributeFieldId": "00Nxx000001FwnABII",
      "name": "Message__c",
      "type": "Custom",
      "isSearchable": true
    },
    {
      "name": "Code",
      "type": "Standard",
      "isSearchable": true
    },
    {
      "facetDisplayRank": 1,
      "isFacetable": false,
      "isSearchable": true,
      "name": "Family",
      "type": "Standard"
    }
  ]
```
