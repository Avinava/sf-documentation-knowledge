---
title: "Product Requirement Specification Version Input"
domain: mfg-api-devguide
topic: product-requirement-specification-version-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.941Z
estimatedTokens: 224
keywords: [Product, Requirement, Specification, Version, Input, representation, versions, including, data, associated, items, PropertiesListWrapperInput]
---

# Product Requirement Specification Version Input

> Input representation for a list of specification versions, including version data and
    associated items.

# Product Requirement Specification Version Input

Input representation for a list of specification versions, including version data and associated items.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| productRequirementSpecificationItems | Product Requirement Specification Item Input | A list of items associated with this version. | Optional | 66.0 |
| properties | PropertiesListWrapperInput | A list of key-value pairs for the version's fields. | Required | 66.0 |

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
        "field": "VersionNumber",
        "value": "3.5"
      },
      {
        "field": "VersionName",
        "value": "Q1 2025 Release"
      },
      {
        "field": "ApprovalStatus",
        "value": "Pending"
      },
      {
        "field": "ApprovedBy",
        "value": "John Doe"
      }
    ]
  },
  "productRequirementSpecificationItems": {
    "productRequirementSpecificationItems": [
      {
        "properties": {
          "properties": [
            {
              "field": "TestCriteria",
              "value": "ISO-9001 Compliance"
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
        "field": "VersionNumber",
        "value": "3.5"
      },
      {
        "field": "VersionName",
        "value": "Q1 2025 Release"
      },
      {
        "field": "ApprovalStatus",
        "value": "Pending"
      },
      {
        "field": "ApprovedBy",
        "value": "John Doe"
      }
    ]
  }
```

## Related Topics

- Product Requirement Specification Item
                      Input (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/connect_requests_product_requirement_specification_item_input.htm)
