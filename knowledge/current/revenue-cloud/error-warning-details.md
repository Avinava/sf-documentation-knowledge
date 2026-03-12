---
title: "Error Warning Details"
domain: revenue-cloud
topic: error-warning-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:07.707Z
estimatedTokens: 132
keywords: [Error, Warning, Details, Output, representation, individual, warning, error, message, associated, record, details.]
---

# Error Warning Details

> Output representation of the individual warning or error message with associated record details.

# Error Warning Details

Output representation of the individual warning or error message with associated record details.

JSON example

This example shows error details with record information.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| relatedObjectAPIName | String | API name of the related object. | Big, 66.0 | 66.0 |
| records | Record Details[] | Details of records that triggered the specific warning or error. | Big, 66.0 | 66.0 |

## Code Examples

```
{
  "errorDetails": [
    {
      "relatedObjectAPIName": "ProductUsageRule",
      "records": [
        {
          "id": "a0bxx0000004CqZAAU",
          "name": "PUR-001"
        }
      ]
    }
  ]
}
```

## Related Topics

- Record Details (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_record_details_output.htm)
