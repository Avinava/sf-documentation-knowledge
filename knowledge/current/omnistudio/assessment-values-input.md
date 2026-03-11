---
title: "Assessment Values Input"
domain: omnistudio
topic: assessment-values-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:08.050Z
keywords: [Assessment, Values, Input]
---

# Assessment Values Input

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