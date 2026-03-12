---
title: "Bulk Unit Of Measure Info"
domain: revenue-cloud
topic: bulk-unit-of-measure-info
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:07.426Z
estimatedTokens: 213
keywords: [Bulk, Unit, Measure, Info, Output, representation, details, unit, measure, records, along, error, details.]
---

# Bulk Unit Of Measure Info

> Output representation of the details of the unit of measure records along with error
    details.

# Bulk Unit Of Measure Info

Output representation of the details of the unit of measure records along with error details.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| correlation​Id | String | Unique token to track and associate related events or transactions across different components of the application. If unspecified, a Universally Unique Identifier (UUID) is generated. | Small, 63.0 | 63.0 |
| errorCode​ToErrorMap | Map<String, Unit Of Measure Error> | Error codes mapped to their details. | Small, 63.0 | 63.0 |
| status | Unit Of Measure Status[] | Status of the API request. | Small, 63.0 | 63.0 |
| uomIdToUnit​OfMeasure​Info | Map<String, Unit Of Measure Info> | Unit of measure record IDs mapped to their details. | Small, 63.0 | 63.0 |

## Code Examples

```
{
  "correlationId": "928ea35f-8a2f-4932-9f7e-ec6cdbcabdbe",
  "errorCodeToErrorMap": {
    "UNIT_OF_MEASURE_INFO_INVALID_UOM_IDS": {
      "errorCode": "UOM_INFO_API_003",
      "messageDetail": "Invalid uomId is passed. Please specify a valid uomId.",
      "messageTitle": "Invalid uomId is passed.",
      "recordIds": [
        "sample"
      ],
      "source": "Unit_Of_Measure_Info_Api"
    }
  },
  "status": {
    "errors": [],
    "httpStatusCode": "200",
    "message": " Successfully fetched UnitOfMeasure Info. "
  },
  "uomIdToUnitOfMeasureInfo": {
    "0hEU200000003M5MAI": {
      "id": "0hEU200000003M5MAI",
      "name": "Pounds",
      "roundingMethod": "Nearest",
      "scale": 1,
      "unitCode": "Pounds"
    },
    "0hEU200000003KTMAY": {
      "id": "0hEU200000003KTMAY",
      "name": "Grams",
      "roundingMethod": "Down",
      "scale": 5,
      "unitCode": "Grams"
    }
  }
}
```

## Related Topics

- Unit Of Measure Error (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_unit_of_measure_error_output.htm)
- Unit Of Measure Status (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_unit_of_measure_status.htm)
- Unit Of Measure Info (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_unit_of_measure_info_output.htm)
