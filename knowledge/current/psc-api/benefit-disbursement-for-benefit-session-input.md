---
title: "Benefit Disbursement for Benefit Session Input"
domain: psc-api
topic: benefit-disbursement-for-benefit-session-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:29.840Z
estimatedTokens: 231
keywords: [Benefit, Disbursement, Session, Input, representation]
---

# Benefit Disbursement for Benefit Session Input

> Input representation of a benefit disbursement.

# Benefit Disbursement for Benefit Session Input

Input representation of a benefit disbursement.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| actualCompletionDate | String | Date the benefit was disbursed. | Required | 58.0 |
| benefitCategory | String | Category of the benefit. | Optional | 58.0 |
| benefitSessionId | String | ID of the benefit session record associated with the benefit disbursement. | Required | 58.0 |
| description | String | Description for the benefit disbursement. | Optional | 58.0 |
| disbursementStatus | String | Disbursement status of the benefit. Possible values are:AbsentCompletedEnrolledExcused | Optional | 58.0 |
| endDate | String | Date the disbursement of the benefit ends. | Optional | 58.0 |
| startDate | String | Date the disbursement of the benefit starts. | Optional | 58.0 |

## Code Examples

```
"records": [
      {
        "actualCompletionDate": "02-12-2024",
        "benefitCategory": "Monetary",
        "benefitSessionId": "0nDDD0000000EVj2AM",
        "description": "This is a monetary benefit to be disbursed",
        "disbursementStatus": "Completed",
        "endDate": "15-03-2023",
        "startDate": "01-01-2022"
      }
    ]
```
