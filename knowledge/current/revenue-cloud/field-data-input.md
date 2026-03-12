---
title: "Field Data Input"
domain: revenue-cloud
topic: field-data-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:07.964Z
estimatedTokens: 123
keywords: [Data, Input, representation]
---

# Field Data Input

> Input representation of the details of the field data input.

# Field Data Input

Input representation of the details of the field data input.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| fieldApi​Name | String | Unique API name of the field. | Required | 63.0 |
| original​Value | String | Original value of the fields. | Required | 63.0 |
| unitOf​MeasureId | String | ID of the unit of measure record that’s associated to the field. | Required | 63.0 |

## Code Examples

```
"fieldDataInputs": [
        {
          "fieldApiName": "MaxQuantity",
          "originalValue": 0.437584,
          "unitOfMeasureId": "uomId2"
        },
        {
          "fieldApiName": "MinQuantity",
          "originalValue": 7364.58923,
          "unitOfMeasureId": "uomId2"
        }
      ]
```
