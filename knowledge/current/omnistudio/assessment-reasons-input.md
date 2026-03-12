---
title: "Assessment Reasons Input"
domain: omnistudio
topic: assessment-reasons-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:47.081Z
estimatedTokens: 118
keywords: [Assessment, Reasons, Input, representation, reason]
---

# Assessment Reasons Input

> Input representation of the assessment reason in Assessment Response request.

# Assessment Reasons Input

Input representation of the assessment reason in Assessment Response request.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| referenceRecord | String | Reason for the assessment. | Optional | 63.0 |
| referenceValue | String | The supporting information when there is no Salesforce record to be added as the reference record. | Optional | 63.0 |

## Code Examples

```
{
        "assessmentReasons": [
            {
                "referenceRecord": "0jySG0000000qRdxxI"
            },
            {
                "referenceRecord": "0SqSG00000005HRxxY"
            },
            {
                "referenceRecord": "0kmSG0000000n7BxxQ",
                "referenceValue": "Medication Request sample"
            },
            {
                "referenceValue": "Reference Record not present"
            }
        ]
        }
    }
}
```
