---
title: "Compliance Procedure Evaluation"
domain: omnistudio
topic: compliance-procedure-evaluation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:48.510Z
estimatedTokens: 253
keywords: [Compliance, Procedure, Evaluation, result]
---

# Compliance Procedure Evaluation

> Represents a single compliance procedure evaluation result.

# Compliance Procedure Evaluation

Represents a single compliance procedure evaluation result.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| controls | Compliance Control Evaluation[] | Details of the compliance control evaluation results. | Big, 64.0 | 64.0 |
| errorId | String | ID for the error that occurs when compliance evaluation fails. | Big, 64.0 | 64.0 |
| errorMessage | String | Messages for the error that occurs when compliance evaluation fails. | Big, 64.0 | 64.0 |
| isCompliant | Boolean | Indicates whether the compliance check has passed (true) or not (false). | Big, 64.0 | 64.0 |
| status | String | Specifies the status of the compliance check. Valid values are:ErrorSuccess | Big, 64.0 | 64.0 |
| transactionId | String | Transaction ID that's generated during the API call. | Big, 64.0 | 64.0 |
| transactionKey | String | Transaction key for the evaluation request. | Big, 64.0 | 64.0 |

## Code Examples

```
[
  {
    "status": "SUCCESS",
    "transactionId": "ZZ9123456789012345",
    "transactionKey": "uuid-1234-5678-9012-eu",
    "isCompliant": true,
    "errorId": [],
    "errorMessage": [],
    "controls": [
      {
        "complianceControlId": "18QXX0001234501",
        "complianceControlVersionId": "18tXX0001234501",
        "status": "SUCCESS",
        "isCompliant": true,
        "complianceMessage": "Control A passed",
        "errorId": [],
        "errorMessage": []
      }
    ]
  }
]
```

## Related Topics

- Compliance Control Evaluation (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_compliance_control_evaluation_output.htm)
