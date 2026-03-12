---
title: "Sample Limits Validation Response Output"
domain: life-sciences-dev-guide
topic: sample-limits-validation-response-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:42.902Z
estimatedTokens: 159
keywords: [Sample, Limits, Validation, Output, representation]
---

# Sample Limits Validation Response Output

> Output representation for a sample limits validation request.

# Sample Limits Validation Response Output

Output representation for a sample limits validation request.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| code | String | The API error code, if available. | Small, 65.0 | 65.0 |
| message | String | The error or success message, if available. | Small, 65.0 | 65.0 |
| response | Map<String, Object> | Data related to the sample limits validation results. | Small, 65.0 | 65.0 |
| success | Boolean | Indicates whether the request was successful (true) or not (false). | Small, 65.0 | 65.0 |

## Code Examples

```
{
  "code": null,
  "message": null,
  "response": {
    "result": "Error",
    "validationResults": [
      {
        "message": "Quantity exceeds sample limits",
        "errors": [
          {
            "type": "sampleLimit",
            "message": "Quantity exceeds sample limits",
            "lotAllocationWarningMessage": null,
            "filters": [
              {
                "value": "1KeXXXXXXXXXXXX0AM",
                "field": "sample"
              }
            ],
            "accountId": "001XXXXXXXXXXXXAAG"
          }
        ],
        "errorLevel": "validation",
        "errorBehaviour": "Error"
      }
    ],
    "errorBehaviour": "Error",
    "message": "Quantity exceeds sample limits",
    "errors": [
      {
        "type": "sampleLimit",
        "message": "Quantity exceeds sample limits",
        "lotAllocationWarningMessage": null,
        "filters": [
          {
            "value": "1KeXXXXXXXXXXXXz0AM",
            "field": "sample"
          }
        ],
        "accountId": "001XXXXXXXXXXXX1AAG"
      }
    ],
    "errorLevel": "validation"
  },
  "success": true
}
```
