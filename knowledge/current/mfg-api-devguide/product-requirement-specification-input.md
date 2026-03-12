---
title: "Product Requirement Specification Input"
domain: mfg-api-devguide
topic: product-requirement-specification-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.932Z
estimatedTokens: 230
keywords: [Product, Requirement, Specification, Input, representation, data, process, PropertiesListWrapperInput]
---

# Product Requirement Specification Input

> Input representation for the Product Requirement Specification data to
    process.

# Product Requirement Specification Input

Input representation for the Product Requirement Specification data to process.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| productRequirementSpecificationVersions | Product Requirement Specification Version Input | A list of specification versions, including version data and associated items. | Optional | 66.0 |
| properties | Property[PropertiesListWrapperInput] | A list of key-value pairs for the specification's fields. | Required | 66.0 |

## PropertiesListWrapperInput

A list of key-value pairs.

JSON example

```

```

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| field | String | The API name of the field. | Required | 66.0 |
| value | String | The value for the specified field. | Required | 66.0 |

## Code Examples

```
{
  "properties": {
    "properties": [
      {
        "field": "Name",
        "value": "Advanced Component Specification"
      },
      {
        "field": "Category",
        "value": "Electronics"
      },
      {
        "field": "Priority",
        "value": "High"
      }
    ]
  },
  "productRequirementSpecificationVersions": {
    "productRequirementSpecificationVersions": [
      {
        "properties": {
          "properties": [
            {
              "field": "VersionNumber",
              "value": "2.0"
            }
          ]
        }
      }
    ]
  }
}
```

```
{
  "properties": [
      {
        "field": "Name",
        "value": "Advanced Component Specification"
      },
      {
        "field": "Category",
        "value": "Electronics"
      },
      {
        "field": "Priority",
        "value": "High"
      }
    ]
  }
```

## Related Topics

- Product Requirement Specification Version
                      Input (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/connect_requests_product_requirement_specification_version_input.htm)
