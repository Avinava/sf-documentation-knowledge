---
title: "Unit of Measure Status"
domain: revenue-cloud
topic: unit-of-measure-status
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:08.593Z
estimatedTokens: 131
keywords: [Unit, Measure, Status, Output, representation, status, API, request.]
---

# Unit of Measure Status

> Output representation of the status of the Unit of Measure API request.

# Unit of Measure Status

Output representation of the status of the Unit of Measure API request.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Unit Of Measure Error[] | Errors encountered during the processing of the API request. | Small, 63.0 | 63.0 |
| httpStatus​Code | String | HTTP status code of the API request. | Small, 63.0 | 63.0 |
| message | String | Localized response message. | Small, 63.0 | 63.0 |

## Code Examples

```
"status": {
    "errors": [],
    "httpStatusCode": "200",
    "message": " Successfully fetched UnitOfMeasure Info. "
  }
```

## Related Topics

- Unit Of Measure Error (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_unit_of_measure_error_output.htm)
