---
title: "Unit of Measure Rounded Data (POST)"
domain: revenue-cloud
topic: unit-of-measure-rounded-data-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:08.989Z
estimatedTokens: 232
keywords: [Unit, Measure, Rounded, Data, POST, Round, off, scale, decimal, specific]
---

# Unit of Measure Rounded Data (POST)

> Round off and scale decimal data for a specific set of
    fields.

# Unit of Measure Rounded Data (POST)

Round off and scale decimal data for a specific set of fields.

Resource

```

```

Resource example

```

```

Available version

63.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| correlation​Id | String | Unique token to track and associate related events or transactions across different components of the application. If unspecified, a Universally Unique Identifier (UUID) is generated. | Optional | 63.0 |
| dataRow​Inputs | Data Row Input[] | List of row inputs for rounding the data. | Required | 63.0 |

Response body for POST

[Data Rounding](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_data_rounding_output.htm "Output representation of the data rounding response.")

## Code Examples

```
/connect/pcm/unit-of-measure/rounded-data
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/pcm/unit-of-measure/rounded-data
```

```
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

- Data Row Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_data_row_input.htm)
- Data
            Rounding (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_data_rounding_output.htm)
