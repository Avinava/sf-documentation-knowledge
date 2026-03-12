---
title: "Insurance Member Plans"
domain: insurance-developer-guide
topic: insurance-member-plans
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.580Z
estimatedTokens: 166
keywords: [Insurance, Member, Plans, Output, representation, service, individual]
---

# Insurance Member Plans

> Output representation of the Insurance Get Member Plans service for an individual member.

# Insurance Member Plans

Output representation of the Insurance Get Member Plans service for an individual member.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| error | Insurance Error | Error details if an error occurred while getting plans for the member. | Small, 65.0 | 65.0 |
| memberId | String | ID of the group census member. | Small, 65.0 | 65.0 |
| plans | Map<String, Insurance Plan List> | Map of eligible plans, where the key is the plan category, such as Medical and Dental, and the value is a list of plans in that category. | Small, 65.0 | 65.0 |

## Code Examples

```
{
  "error": null,
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
}
```

## Related Topics

- Insurance Error (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_error_output.htm)
- Insurance Plan List (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_plan_list_output.htm)
