---
title: "Visibility Rules"
domain: revenue-cloud
topic: visibility-rules
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-06-07T00:37:41.090Z
estimatedTokens: 317
keywords: [Visibility]
---

> Output representation of the details of the visibility rules.

# Visibility Rules

Output representation of the details of the visibility rules.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| attributeId | String | ID of the attribute associated with this visibility rule. | Small, 67.0 | 67.0 |
| attribute​Picklist​ValueId | String | ID of the attribute picklist value associated with this visibility rule. | Small, 67.0 | 67.0 |
| message | String | Message to display when the visibility rule is applied. | Small, 67.0 | 67.0 |
| prcId | String | ID of the Product Relationship Configuration (PRC) associated with this visibility rule. | Small, 67.0 | 67.0 |
| productIds | String[] | List of product IDs affected by this visibility rule. | Small, 67.0 | 67.0 |
| scope | String | Scope of the visibility rule. Valid values are:PRODUCTBUNDLEVIRTUAL | Small, 67.0 | 67.0 |
| stiId | String | ID of the sales transaction item associated with this visibility rule. | Small, 67.0 | 67.0 |
| target | String | Target of the visibility rule. Valid values are:COMPONENTQUANTITYATTRIBUTEATTRIBUTE_PICKLIST_VALUEPRODUCT | Small, 67.0 | 67.0 |
| type | String | Type of visibility rule. Valid values are:HIDEDISABLE | Small, 67.0 | 67.0 |

## Code Examples

```
{
  "visibilityRules": [
    {
      "message": "128GB LRDIMM disables 16GB RDIMM",
      "productIds": [
        "01tVW000003l7uaYAA"
      ],
      "scope": "virtual",
      "target": "product",
      "type": "disable"
    },
    {
      "message": "Additional API disables Additional API Gov",
      "productIds": [
        "01tVW000003l7tzYAA"
      ],
      "scope": "virtual",
      "target": "product",
      "type": "disable"
    },
    {
      "message": "Disable All other API Products",
      "productIds": [
        "01tVW000003l7u0YAA",
        "01tVW000003l7u1YAA"
      ],
      "scope": "virtual",
      "target": "product",
      "type": "disable"
    },
    {
      "message": "32GB RDIMM disables 128GB LRDIMM",
      "productIds": [
        "01tVW000003l7v5YAA"
      ],
      "scope": "virtual",
      "target": "product",
      "type": "disable"
    },
    {
      "message": "API Access Requests AEH disables Additional API Prod",
      "productIds": [
        "01tVW000003l7u1YAA"
      ],
      "scope": "virtual",
      "target": "product",
      "type": "disable"
    }
  ]
}
```
