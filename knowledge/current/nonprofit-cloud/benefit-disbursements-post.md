---
title: "Benefit Disbursements (POST)"
domain: nonprofit-cloud
topic: benefit-disbursements-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:00.797Z
estimatedTokens: 264
keywords: [Benefit, Disbursements, POST, hoc, walk-in, participants]
---

# Benefit Disbursements (POST)

> Create benefit disbursements for ad hoc walk-in
    participants.

# Benefit Disbursements (POST)

Create benefit disbursements for ad hoc walk-in participants.

Resource

```

```

Example URI

```

```

Available version

57.0

HTTP methods

POST

Request body for POST

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

Response body for POST

[Benefit Disbursements Output](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_responses_benefit_disbursements_output.htm "Output representation of the request to create benefit disbursements.")

## Code Examples

```
/connect/program-mgmt/benefit/${benefitId}/benefit-disbursements
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect​​/program-mgmt/benefit/${benefitId}/benefit-disbursements
```

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

## Related Topics

- Benefit Disbursements Output (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_responses_benefit_disbursements_output.htm)
