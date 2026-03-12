---
title: "Insurance Member Rating Details"
domain: insurance-developer-guide
topic: insurance-member-rating-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.624Z
estimatedTokens: 122
keywords: [Insurance, Member, Rating, Output, representation, individual, member's, results]
---

# Insurance Member Rating Details

> Output representation of an individual member's rating results.

# Insurance Member Rating Details

Output representation of an individual member's rating results.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Insurance Error[] | Error details. | Small, 65.0 | 65.0 |
| memberId | String | ID of the member whose rating is calculated. | Small, 65.0 | 65.0 |
| plans | Insurance Plan Rating[] | Rating details for the plan. | Small, 65.0 | 65.0 |

## Code Examples

```
{
  "memberId": "0r6PrimaryMemberId",
  "plans": [
    {
      "id": "0kfMedicalPlanId01",
      "rates": {
        "data": {
          "total": 350
        }
      },
      "proratedRates": {
        "data": {
          "total": 350
        }
      },
      "contributions": {
        "employeePremiumAmount": 100,
        "employerPremiumAmount": 250,
        "groupClassContributionId": "gcc-001-a",
        "errors": []
      },
      "coverages": [
        {
          "coverageId": "cov-hosp-01",
          "rates": {
            "data": {
              "total": 350
            }
          },
          "proratedRates": {
            "data": {
              "total": 350
            }
          },
          "contributions": {
            "employeePremiumAmount": 100,
            "employerPremiumAmount": 250,
            "groupClassContributionId": "gcc-001-a",
            "errors": []
          }
        }
      ],
      "errors": []
    }
  ],
  "errors": []
}
```

## Related Topics

- Insurance Error[] (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_error_output.htm)
- Insurance Plan Rating[] (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_plan_rating_output.htm)
