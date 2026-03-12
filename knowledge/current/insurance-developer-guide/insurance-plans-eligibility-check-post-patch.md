---
title: "Insurance Plans Eligibility Check (POST, PATCH)"
domain: insurance-developer-guide
topic: insurance-plans-eligibility-check-post-patch
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:40.263Z
estimatedTokens: 481
keywords: [Insurance, Plans, Eligibility, Check, POST, PATCH, Evaluate, product, configuration, rules, group, census, member, their, selected]
---

# Insurance Plans Eligibility Check (POST, PATCH)

> Evaluate product configuration rules for a group census member based on their selected
  plan and coverage options during initial enrollment (POST). Reevaluate plan eligibility for a
  group census member when plans are added or removed (PATCH).

# Insurance Plans Eligibility Check (POST, PATCH)

Evaluate product configuration rules for a group census member based on their selected plan and coverage options during initial enrollment (POST). Reevaluate plan eligibility for a group census member when plans are added or removed (PATCH).

Resource

```

```

Resource example

```

```

Available version

66.0

HTTP methods

POST, PATCH

Path Parameter for POST and PATCH

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| memberId | String | ID of the group census member. | Required | 66.0 |

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| plans | Insurance Group Plan Input[] | List of contract group plans for initial eligibility validation. | Required | 66.0 |

Response body for POST

[Insurance Plans Eligibility Details](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_plans_eligibility_output.htm "Output representation of the plan eligibility check for an.")

Request body for PATCH

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| addedPlans | Insurance Group Plan Input[] | List of contract group plans to add to the member's enrollment for eligibility checking. | Optional | 66.0 |
| contextId | String | ID of the context. | Required | 66.0 |
| deletedPlans | Insurance Group Plan Input[] | List of contract group plans to remove from the member's enrollment. | Optional | 66.0 |

Response body for PATCH

[Insurance Plans Eligibility Details](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_plans_eligibility_output.htm "Output representation of the plan eligibility check for an.")

## Code Examples

```
/connect/insurance/census-management/group-census-members/memberId/enrollment-rules/actions/invoke
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/insurance/census-management/group-census-members/0r6RM0000000h1pYAA/enrollment-rules/actions/invoke
```

```
{
  "plans": [
    {
      "planId": "0gpp00000004C9wAAE",
      "coverages": []
    }
  ]
}
```

```
{
  "contextId": "42ce00ea6a44dcc0d308ba1ea7c4c9bb455bd14bb0405ff03dca1b5371c42cda",
  "addedPlans": [
    {
      "planId": "0gpp00000004C9wAAE",
      "coverages": [
        {
          "planId": "0rgxx0000000001AAA"
        }
      ]
    }
  ],
  "deletedPlans": []
}
```

## Related Topics

- Insurance Group Plan Input (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_insurance_group_plan_input.htm)
- Insurance Plans Eligibility
       Details (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_plans_eligibility_output.htm)
