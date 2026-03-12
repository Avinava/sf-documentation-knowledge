---
title: "Insurance Member Rating"
domain: insurance-developer-guide
topic: insurance-member-rating
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.627Z
estimatedTokens: 136
keywords: [Insurance, Member, Rating, Output, representation, individual, members]
---

# Insurance Member Rating

> Output representation of the rating for individual members.

# Insurance Member Rating

Output representation of the rating for individual members.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Insurance Error[] | Error details. | Small, 65.0 | 65.0 |
| id | String | Unique ID that's generated during the member rating transaction. | Small, 65.0 | 65.0 |
| pricingResults | Insurance Member Rating Details[] | Details of pricing results for a member's rating calculation. | Small, 65.0 | 65.0 |

## Code Examples

```
{
  "errors": [],
  "id": "c639a6ec-11d1-4c66-b997-3fff967f052d",
  "pricingResults": [
    {
      "errors": [],
      "memberId": "0r6DR0000002UmvYAE",
      "plans": [
        {
          "contributions": {
            "employeePremiumAmount": 51.04,
            "employerPremiumAmount": 5.67,
            "errors": []
          },
          "coverages": [
            {
              "contributions": {
                "employeePremiumAmount": 51.04,
                "employerPremiumAmount": 5.67,
                "errors": [],
                "groupClassContributionId": "0rFDR00000002DM2AY"
              },
              "coverageId": "0rgDR0000001iVPYAY",
              "errors": [],
              "proratedRates": {
                "data": {
                  "NetUnitPrice": 56.71,
                  "NetTotalPrice": 56.71,
                  "StandardQLITaxAmount": 0
                }
              },
              "rates": {
                "data": {
                  "NetUnitPrice": 112.5,
                  "NetTotalPrice": 112.5,
                  "StandardQLITaxAmount": 0
                }
              }
            }
          ],
          "errors": [],
          "id": "0rgDR0000001iVLYAY",
          "proratedRates": {
            "data": {
              "NetUnitPrice": 56.71,
              "NetTotalPrice": 56.71,
              "StandardQLITaxAmount": 0
            }
          },
          "rates": {
            "data": {
              "NetUnitPrice": 112.5,
              "NetTotalPrice": 112.5,
              "StandardQLITaxAmount": 0
            }
          }
        }
      ]
    }
  ]
}
```

## Related Topics

- Insurance Error[] (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_error_output.htm)
- Insurance Member Rating Details[] (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_member_rating_details_output.htm)
