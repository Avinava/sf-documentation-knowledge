---
title: "Data Row Input"
domain: revenue-cloud
topic: data-row-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:06.042Z
estimatedTokens: 102
keywords: [Data, Row, Input, representation, details, input, data, rounding, request.]
---

# Data Row Input

> Input representation of the details of the input for a data rounding request.

# Data Row Input

Input representation of the details of the input for a data rounding request.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| fieldData​Inputs | Field Data Input[] | List of field-level data inputs. | Required | 63.0 |
| key | String | Key that identifies a unique data row. | Required | 63.0 |

## Code Examples

```
JSON example
{
  "dataRowInputs": [
    {
      "key": "PRC1",
      "fieldDataInputs": [
        {
          "fieldApiName": "MaxQuantity",
          "originalValue": 1234.5678,
          "unitOfMeasureId": "0hExx0000000001EAA"
        },
        {
          "fieldApiName": "MinQuantity",
          "originalValue": "987462848934739347.32232590183756545",
          "unitOfMeasureId": "0hExx000000001dEAA"
        }
      ]
    },
    {
      "key": "PRC2",
      "fieldDataInputs": [
        {
          "fieldApiName": "MaxQuantity",
          "originalValue": 1234.5678,
          "unitOfMeasureId": "uomId1"
        },
        {
          "fieldApiName": "MinQuantity",
          "originalValue": 987.4628,
          "unitOfMeasureId": "Kgs Id"
        }
      ]
    },
    {
      "key": "PRC3",
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
    }
  ]
}
```

## Related Topics

- Field Data Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_field_data_input.htm)
