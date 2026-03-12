---
title: "Insurance Member Eligible Plans Response"
domain: insurance-developer-guide
topic: insurance-member-eligible-plans-response
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.583Z
estimatedTokens: 135
keywords: [Insurance, Member, Eligible, Plans, Output, representation, member's]
---

# Insurance Member Eligible Plans Response

> Output representation for a member's eligible plans.

# Insurance Member Eligible Plans Response

Output representation for a member's eligible plans.

JSON example

This is a sample JSON for a successful API reqest.

```

```

This is a sample JSON with error.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| memberId | String | ID for the primary group census member. | Small, 65.0 | 65.0 |
| membersPlans​Details | Members Plans | List of members with their eligible plans or errors. | Small, 65.0 | 65.0 |

## Code Examples

```
{
  "memberId": "0r6xx0000000001AAA",
  "membersPlansDetails": {
    "values": [
      {
        "memberId": "0r6xx0000000001AAA",
        "plans": {
          "Medical": {
            "values": [
              {
                "attributes": [],
                "coverages": [
                  {
                    "attributes": [],
                    "coverages": [],
                    "isOptional": false,
                    "isPrimarySubscribed": false,
                    "isSubscribed": false,
                    "planId": "0rgxx000000001dAAA",
                    "planName": "Annual Health Checkups"
                  },
                  {
                    "attributes": [],
                    "coverages": [],
                    "isOptional": false,
                    "isPrimarySubscribed": false,
                    "isSubscribed": false,
                    "planId": "0rgxx000000003FAAQ",
                    "planName": "OPD Consults"
                  }
                ],
                "isOptional": false,
                "isPrimarySubscribed": false,
                "isSubscribed": false,
                "planId": "0rgxx0000000001AAA",
                "planName": "Bajaj Medical Premium"
              }
            ]
          }
        }
      },
      {
        "memberId": "0r6xx0000000002AAB",
        "plans": {
          "Medical": {
            "values": [
              {
                "attributes": [],
                "coverages": [
                  {
                    "attributes": [],
                    "coverages": [],
                    "isOptional": false,
                    "isPrimarySubscribed": false,
                    "isSubscribed": false,
                    "planId": "0rgxx000000001dAAA",
                    "planName": "Annual Health Checkups"
                  }
                ],
                "isOptional": false,
                "isPrimarySubscribed": false,
                "isSubscribed": false,
                "planId": "0rgxx0000000001AAA",
                "planName": "Bajaj Medical Premium"
              }
            ]
          }
        }
      }
    ]
  }
}
```

```
{
  "memberId": "0r6xx0000000001AAA",
  "membersPlansDetails": {
    "values": [
      {
        "error": {
          "additionalInfo": {},
          "code": "SF-0001-0005",
          "message": "Specify a valid input for memberId."
        },
        "memberId": "0r6xx0000000001AAA",
        "plans": {}
      }
    ]
  }
}
```

## Related Topics

- Members Plans (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_members_plans_details_list.htm)
