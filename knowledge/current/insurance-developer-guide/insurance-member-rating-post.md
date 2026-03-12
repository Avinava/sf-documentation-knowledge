---
title: "Insurance Member Rating (POST)"
domain: insurance-developer-guide
topic: insurance-member-rating-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:40.200Z
estimatedTokens: 350
keywords: [Insurance, Member, Rating, POST, Calculate, pricing, along, employee, employer, contribution, individual, members, group, census, plan]
---

# Insurance Member Rating (POST)

> Calculate pricing along with employee and employer contribution for
   individual members of a group census based on plan and coverages within the
  plan.

# Insurance Member Rating (POST)

Calculate pricing along with employee and employer contribution for individual members of a group census based on plan and coverages within the plan.

The prices and contribution are calculated at coverage level and then rolled up to plan and member level.

Special Access Rule

To use this API, the org must be enabled with Person Account and you must have Census Management user access.

Resource

```

```

Resource example

```

```

Available version

65.0

HTTP methods

POST

Path parameter for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| memberId | String | ID of the primary group census member for which the rating must be calculated. | Required | 65.0 |

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| effectiveDate | String | Date on which the member's rating is calculated. | Optional | 65.0 |
| members | Insurance Member Rating Details Input[] | Details of the members and their plans to be rated. | Required | 65.0 |

Response body for POST

[Insurance Member Rating](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_member_rating_output.htm "Output representation of the rating for individual members.")

## Code Examples

```
/connect/insurance/group-census-members/memberId/action/rate
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/insurance/group-census-members/0r6RM0000000h1pYAA/action/rate
```

```
{
  "effectiveDate": "2025-10-01",
  "members": [
    {
      "memberId": "0r6RM0000000h1pYAA",
      "plans": [
        {
          "planId": "0j5RM00000000a1YAA",
          "planCoverageIds": [
            "0k8RM00000001b2ZAA"
          ]
        }
      ]
    }
  ]
}
```

## Related Topics

- Insurance Member Rating Details Input[] (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_insurance_member_rating_details_input.htm)
- Insurance Member
       Rating (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_member_rating_output.htm)
