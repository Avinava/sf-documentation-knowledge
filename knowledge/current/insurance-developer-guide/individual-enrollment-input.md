---
title: "Individual Enrollment Input"
domain: insurance-developer-guide
topic: individual-enrollment-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.837Z
estimatedTokens: 116
keywords: [Individual, Enrollment, Input, representation]
---

# Individual Enrollment Input

> Input representation for individual enrollment.

# Individual Enrollment Input

Input representation for individual enrollment.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| flowName | String | API name of an optional flow to run as part of the enrollment process.The default value is Process Group Census Member Data. | Optional | 65.0 |
| plan | String | ID of the root contract group plan. | Required | 65.0 |

## Code Examples

```
{
  "flowName": "MyEnrollmentFlow",
  "plan": "0gpp00000004C9wAAE"
}
```
