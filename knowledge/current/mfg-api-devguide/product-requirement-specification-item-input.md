---
title: "Product Requirement Specification Item Input"
domain: mfg-api-devguide
topic: product-requirement-specification-item-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.937Z
estimatedTokens: 178
keywords: [Product, Requirement, Specification, Item, Input, representation, items, associated, version, PropertiesListWrapperInput]
---

# Product Requirement Specification Item Input

> Input representation of a list of items associated with this version.

# Product Requirement Specification Item Input

Input representation of a list of items associated with this version.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| properties | Property[PropertiesListWrapperInput] | A list of key-value pairs for the specification's fields |  | 66.0 |

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
          "field": "ItemType",
          "value": "Quality Check"
        },
        {
          "field": "TestMethod",
          "value": "Visual Inspection"
        },
        {
          "field": "AcceptanceCriteria",
          "value": "No visible defects"
        },
        {
          "field": "SamplingSize",
          "value": "100"
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
