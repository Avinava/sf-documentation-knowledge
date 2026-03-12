---
title: "Rating Input Node"
domain: insurance-developer-guide
topic: rating-input-node
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.988Z
estimatedTokens: 209
keywords: [Rating, Input, Node, representation, context]
---

# Rating Input Node

> Input representation of details of context node.

# Rating Input Node

Input representation of details of context node.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additionalFields | Map<String, Object> | Map of additional fields that must be updated in the quote context. | Optional | 63.0 |
| attributes | Map<String, Object> | Map of attributes key-value pairs that's used to determine pricing. | Optional | 63.0 |
| instanceKeys | String[] | List of instance keys for context path. | Required | 63.0 |
| productCode | String | Unique code to identify a product. | Required | 63.0 |
| reusable | Boolean | Indicate whether the node is reusable across multiple roots (true) or not (false). | Optional | 66.0 |
| targetRecords | String[] | List of target records. | Optional | 63.0 |

## Code Examples

```
{
  "ratingInputs": [
    {
      "instanceKeys": [
        "AutoRoot"
      ],
      "productCode": "AUTOROOT",
      "attributes": {
        "Deductible": 1000
      }
    },
    {
      "instanceKeys": [
        "AutoRoot",
        "Audi"
      ],
      "productCode": "AUTO",
      "attributes": {
        "Mileage": 20000
      }
    },
    {
      "instanceKeys": [
        "AutoRoot",
        "Audi",
        "Tom"
      ],
      "productCode": "DRIVER",
      "attributes": {
        "DriverAge": 50,
        "DriverAccident": 0
      },
      "targetRecords": [
        "003xx000004WkvEAAS"
      ]
    }
  ]
}
```
