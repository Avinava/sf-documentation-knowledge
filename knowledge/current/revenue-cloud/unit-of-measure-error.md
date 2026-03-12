---
title: "Unit of Measure Error"
domain: revenue-cloud
topic: unit-of-measure-error
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:10.038Z
estimatedTokens: 171
keywords: [Unit, Measure, Error, Output, representation, errors, encountered, processing, API]
---

# Unit of Measure Error

> Output representation of the details of errors encountered during the processing of the
    Unit of Measure API request.

# Unit of Measure Error

Output representation of the details of errors encountered during the processing of the Unit of Measure API request.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errorCode | String | Localized error code. | Small, 63.0 | 63.0 |
| messageDetail | String | Localized details of the error message. | Small, 63.0 | 63.0 |
| messageTitle | String | Localized title of the error message. | Small, 63.0 | 63.0 |
| recordIds | String[] | List of erroneous record IDs. | Small, 63.0 | 63.0 |
| source | String | Localized source of the error. | Small, 63.0 | 63.0 |

## Code Examples

```
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
  }
```
