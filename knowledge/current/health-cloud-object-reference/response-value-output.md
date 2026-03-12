---
title: "Response Value Output"
domain: health-cloud-object-reference
topic: response-value-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:33.754Z
estimatedTokens: 130
keywords: [Output, specific, answer, data, sequence, question, assessment]
---

# Response Value Output

> Contains the specific answer data and its sequence for a question within an
    assessment.

# Response Value Output

Contains the specific answer data and its sequence for a question within an assessment.

Properties

| Property Name | Type | Description |
| --- | --- | --- |
| response​Identifier | String | The unique identifier of the retrieved response, such as an answer ID or question name. |
| response​Question​Sequence | Integer | The sequence number of the question within the assessment question set. |
| response​Value | String | The actual value of the retrieved response provided by the user. |
