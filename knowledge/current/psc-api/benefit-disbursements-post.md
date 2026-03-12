---
title: "Benefit Disbursements (POST)"
domain: psc-api
topic: benefit-disbursements-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:30.287Z
estimatedTokens: 200
keywords: [Benefit, Disbursements, POST, session, disburse, benefits, participants, enrolled]
---

# Benefit Disbursements (POST)

> Create benefit disbursements for a benefit session to disburse
      benefits to participants enrolled in the benefit session.

# Benefit Disbursements (POST)

Create benefit disbursements for a benefit session to disburse benefits to participants enrolled in the benefit session.

Resource

```

```

Resource example

```

```

Available version

58.0

Requires Chatter

No

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| benefitDisbursements | Benefit Disbursement for Benefit Session Input[] | Details of benefit disbursements to be created for a benefit session. | Required | 58.0 |

Response body for POST

[Generic Output](atlas.en-us.psc_api.meta/psc_api/connect_responses_generic_output.htm "Output representation of the created care plan record or care plan template record.")

## Code Examples

```
/connect/benefit-assignment/${benefitAssignmentId}/benefit-disbursements
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/benefit-assignment/0nDxx0000000001EAA/benefit-disbursements
```

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
- Generic Output (atlas.en-us.psc_api.meta/psc_api/connect_responses_generic_output.htm)
