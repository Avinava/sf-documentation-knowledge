---
title: "Benefit Disbursements for Benefit Session Input"
domain: psc-api
topic: benefit-disbursements-for-benefit-session-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:29.843Z
estimatedTokens: 113
keywords: [Benefit, Disbursements, Session, Input, representation]
---

# Benefit Disbursements for Benefit Session Input

> Input representation of the request to create benefit disbursements
      for a benefit session.

# Benefit Disbursements for Benefit Session Input

Input representation of the request to create benefit disbursements for a benefit session.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| benefitDisbursements | Benefit Disbursement for Benefit Session Input[] | Details of benefit disbursements to be created for a benefit session. | Required | 58.0 |

## Code Examples

```
{
  "benefitDisbursements": {
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
  }
}
```

## Related Topics

- Benefit Disbursement for Benefit Session
                      Input (atlas.en-us.psc_api.meta/psc_api/connect_requests_benefit_disbursement_for_benefit_session_input.htm)
