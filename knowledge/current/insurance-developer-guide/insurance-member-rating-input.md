---
title: "Insurance Member Rating Input"
domain: insurance-developer-guide
topic: insurance-member-rating-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.846Z
estimatedTokens: 117
keywords: [Insurance, Member, Rating, Input, representation, individual, members, group]
---

# Insurance Member Rating Input

> Input representation for rating the individual members within a group.

# Insurance Member Rating Input

Input representation for rating the individual members within a group.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| effectiveDate | String | Date on which the member's rating is calculated. | Optional | 65.0 |
| members | Insurance Member Rating Details Input[] | Details of the members and their plans to be rated. | Required | 65.0 |

## Code Examples

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
