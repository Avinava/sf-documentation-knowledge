---
title: "Index Configuration Collection"
domain: revenue-cloud
topic: index-configuration-collection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:07.765Z
estimatedTokens: 214
keywords: [Index, Configuration, Collection, Output, representation, collection, index, configuration, details.]
---

# Index Configuration Collection

> Output representation of the collection of index configuration details.

# Index Configuration Collection

Output representation of the collection of index configuration details.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| correlationId | String | Unique token to track and associate related events or transactions across different components of the application. If unspecified, a Universally Unique Identifier (UUID) is generated. | Small, 62.0 | 62.0 |
| errors | Error Output[] | List of errors, if any. | Small, 62.0 | 62.0 |
| index​Configurations | Index Configuration Field[] | Details of the index-configured fields. | Small, 62.0 | 62.0 |
| metadata | Metadata[] | Details of the metadata for objects. | Small, 62.0 | 62.0 |
| statusCode | String | Code that indicates the status of the request. | Small, 62.0 | 62.0 |

## Code Examples

```
{
  "correlationId": "ad960cb6-392d-4d11-bac3-3824baedf67e",
  "errors": [],
  "indexConfigurations": [
    {
      "isSearchable": true,
      "name": "Name",
      "type": "Standard"
    }
  ],
  "metadata": {
    "objectInfos": [
      {
        "fields": [
          {
            "dataType": "text",
            "isFacetableConfigurable": true,
            "isSearchableConfigurable": false,
            "label": "Product Name",
            "name": "Name",
            "type": "Standard"
          },
          {
            "dataType": "multilinetext",
            "isFacetableConfigurable": false,
            "isSearchableConfigurable": true,
            "label": "Product Description",
            "name": "Description",
            "type": "Standard"
          }
        ],
        "name": "Product2"
      },
      {
        "fields": [
          {
            "dataType": "stringplusclob",
            "label": "Description",
            "name": "Description",
            "type": "ProductAttributeDefinitionStandard"
          },
          {
            "dataType": "text",
            "label": "Name",
            "name": "Name",
            "type": "ProductAttributeDefinitionStandard"
          },
        ],
        "name": "ProductAttributeDefinition"
      }
    ]
  },
  "statusCode": "200"
}
```

## Related Topics

- Error Output (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_epc_error_output.htm)
- Index Configuration Field (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_index_configuration_field_output.htm)
- Metadata (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_metadata_output.htm)
