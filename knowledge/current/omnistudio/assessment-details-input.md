---
title: "Assessment Details Input"
domain: omnistudio
topic: assessment-details-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:48.060Z
estimatedTokens: 133
keywords: [Assessment, Details, Input, representation, assessment, details, Response, request.]
---

# Assessment Details Input

> Input representation of the assessment details of Assessment Response request.

# Assessment Details Input

Input representation of the assessment details of Assessment Response request.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| assessmentQuestionsResponseDetails | Map<String, Object> | The details of the assessment questions response. Only available for Health Cloud users. | Optional | 63.0 |
| assessmentReasons | List<AssessmentReasonInputRepresentation> | Details of the assessment. | Optional | 63.0 |

## Code Examples

```
{
    "assessmentDetails": {
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
        ],
        "assessmentQuestionsResponseDetails": {
            "First_Name": {
                "originType": "Auto",
                "reviewerRole": "0hsSG0000002t8TxxQ",
                "reviewer": "003SG00000BTzxpxxD"
            },
            "Last_Name": {
                "originType": "Auto",
                "reviewerRole": "0hsSG0000002t8TxxQ",
                "reviewer": "003SG00000BTzxpxxD"
            },
            "Email": {
                "originType": "Auto",
                "reviewerRole": "0hsSG0000002t8TxxQ",
                "reviewer": "003SG00000BTzxpxxD"
            },
            "Phone": {
                "originType": "Auto",
                "reviewerRole": "0hsSG0000002t8TxxQ",
                "reviewer": "003SG00000BTzxpxxD"
            },
            "Multi_Select": {
                "originType": "Auto",
                "reviewerRole": "0hsSG0000002t8TxxQ",
                "reviewer": "003SG00000BTzxpxxD"
            }
        }
    }
}
```

## Related Topics

- List<AssessmentReasonInputRepresentation> (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_assessment_responses_assessment_reason_input.htm)
