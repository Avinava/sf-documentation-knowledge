---
title: "Benefit Disbursements Input"
domain: nonprofit-cloud
topic: benefit-disbursements-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:00.653Z
estimatedTokens: 181
keywords: [Benefit, Disbursements, Input, representation]
---

# Benefit Disbursements Input

> Input representation of the request to create benefit
      disbursements.

# Benefit Disbursements Input

Input representation of the request to create benefit disbursements.

Root XML tag

<BenefitDisbursementsInputRepresentation>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| disbursementDate | String | The date on which the benefit is disbursed. | Required | 57.0 |
| enrollees | String[] | The list of enrollees who will receive the benefit disbursement. The enrollee can either be a contact or an account. | Required | 57.0 |
| quantity | Double | The quantity of the benefit to be disbursed. | Required | 57.0 |
| status | String | The status of the benefit disbursement. | Required | 57.0 |

## Code Examples

```
{
  "enrollees": {
    "enrolleeList": [
      "003T1000001U6axIAC"
    ]
  },
  "quantity": 2.5,
  "status": "Enrolled",
  "disbursementDate": "2022-12-18T14:30:00.000"
}
```
