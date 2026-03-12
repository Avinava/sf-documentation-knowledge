---
title: "Index Configuration Input"
domain: revenue-cloud
topic: index-configuration-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:08.041Z
estimatedTokens: 251
keywords: [Index, Configuration, Input, representation, persist]
---

# Index Configuration Input

> Input representation of the request to persist the index configuration.

# Index Configuration Input

Input representation of the request to persist the index configuration.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| attribute​DefinitionId | String | ID of the attribute definition. | Required if the attribute​FieldIdproperty isn’t specified. | 62.0 |
| attribute​FieldId | String | ID of the attribute field. | Required if the attribute​DefinitionIdproperty isn’t specified. | 62.0 |
| facet​DisplayRank | Integer | Sort order for displaying the facets at run time. | Optional | 63.0 |
| is​Facetable | Boolean | Indicates whether the field is facetable (true) or not (false). | Optional | 63.0 |
| is​Searchable | Boolean | Indicates whether the index-configured field is searchable (true) or not (false). | Optional | 62.0 |
| name | String | Name of the index-configured field. | Required | 62.0 |
| type | String | Type of the index-configured field. | Required | 62.0 |

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
