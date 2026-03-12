---
title: "Insurance Plan Rating"
domain: insurance-developer-guide
topic: insurance-plan-rating
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.645Z
estimatedTokens: 200
keywords: [Insurance, Plan, Rating, Output, representation, individual, plan's, pricing, result]
---

# Insurance Plan Rating

> Output representation of an individual plan's pricing result.

# Insurance Plan Rating

Output representation of an individual plan's pricing result.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| contributions | Insurance Contribution | Contribution details for the plan, if applicable. | Small, 65.0 | 65.0 |
| coverages | Insurance Coverage Rating[] | Coverage details for the insurance plan. | Small, 65.0 | 65.0 |
| errors | Insurance Error[] | Error details. | Small, 65.0 | 65.0 |
| id | String | ID of the plan for which the rating is calculated. | Small, 65.0 | 65.0 |
| rates | Insurance Object Map | Rate details for each plan. | Small, 65.0 | 65.0 |
| proratedRates | Insurance Object Map | Prorated rates for the specified plan. | Small, 65.0 | 65.0 |

## Code Examples

```
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
```

## Related Topics

- Insurance Contribution (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_contribution_output.htm)
- Insurance Coverage Rating[] (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_coverage_rating_output.htm)
- Insurance Error[] (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_error_output.htm)
- Insurance Object Map (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_object_map_output.htm)
