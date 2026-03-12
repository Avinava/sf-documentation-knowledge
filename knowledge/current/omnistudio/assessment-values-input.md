---
title: "Assessment Values Input"
domain: omnistudio
topic: assessment-values-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:47.085Z
estimatedTokens: 200
keywords: [Assessment, Input, representation]
---

# Assessment Values Input

> Input representation of the assessment value of Assessment Response request.

# Assessment Values Input

Input representation of the assessment value of Assessment Response request.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| Assessment.AssessmentStatus | String | Status of the assessment. | Optional | 60.0 |
| assessmentDetails | AssessmentDetailsInputRepresentation | Metadata of the Assessment Questions. | Optional | 63.0 |
| assessor | String | Person who carried out the assessment and recorded the responses. | Optional | 63.0 |
| completedDateTime | Integer | The date and time when the assessment was completed. | Optional | 63.0 |
| identifier | String | Unique identifier of a completed or partially completed assessment in the source system. | Optional | 63.0 |

## Code Examples

```
{
    "assessmentValues": {
        "Assessment.AssessmentStatus": "Completed",
        "completedDateTime": "2024-10-23T14:45:29.123+05:30",
        "assessor": "001SG00000laIWPYA2",
        "identifier": "Test identifier",
        "assessmentDetails": {
            "assessmentReasons": [
                {
                    "referenceRecord": "0jySG0000000qRdYAI"
                },
                {
                    "referenceRecord": "0SqSG00000005HR0AY"
                },
                {
                    "referenceRecord": "0kmSG0000000n7BYAQ",
                    "referenceValue": "Medication Request sample"
                },
                {
                    "referenceValue": "Reference Record not present"
                }
            ],
            "assessmentQuestionsResponseDetails": {
                "First_Name": {
                    "originType": "Auto",
                    "reviewerRole": "0hsSG0000002t8TYAQ",
                    "reviewer": "003SG00000BTzxpYAD"
                },
                "Last_Name": {
                    "originType": "Auto",
                    "reviewerRole": "0hsSG0000002t8TYAQ",
                    "reviewer": "003SG00000BTzxpYAD"
                },
                "Email": {
                    "originType": "Auto",
                    "reviewerRole": "0hsSG0000002t8TYAQ",
                    "reviewer": "003SG00000BTzxpYAD"
                },
                "Phone": {
                    "originType": "Auto",
                    "reviewerRole": "0hsSG0000002t8TYAQ",
                    "reviewer": "003SG00000BTzxpYAD"
                },
                "Multi_Select": {
                    "originType": "Auto",
                    "reviewerRole": "0hsSG0000002t8TYAQ",
                    "reviewer": "003SG00000BTzxpYAD"
                }
            }
        }
    }
}
```

## Related Topics

- AssessmentDetailsInputRepresentation (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_assessment_responses_assessment_details_input.htm)
