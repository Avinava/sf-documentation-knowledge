---
title: "Index Configurations Update"
domain: revenue-cloud
topic: index-configurations-update
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:09.454Z
estimatedTokens: 189
keywords: [Index, Configurations, Output, representation, updated, configuration]
---

# Index Configurations Update

> Output representation of the updated index configuration.

# Index Configurations Update

Output representation of the updated index configuration.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| correlationId | String | Unique token to track and associate related events or transactions across different components of the application. If unspecified, a Universally Unique Identifier (UUID) is generated. | Small, 62.0 | 62.0 |
| errors | Error Output[] | List of errors, if any. | Small, 62.0 | 62.0 |
| index​Configurations | Index Configuration Field[] | Details of the index-configured fields. | Small, 62.0 | 62.0 |
| status​Code | String | Code that indicates the status of the request. | Small, 62.0 | 62.0 |

## Code Examples

```
{
  "correlationId": "8545b5aa-f3e6-429a-8f21-9cc4ce50b1d7",
  "errors": [],
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
  ],
  "statusCode": "200"
}
```

## Related Topics

- Error Output (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_epc_error_output.htm)
- Index Configuration Field (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_index_configuration_field_output.htm)
