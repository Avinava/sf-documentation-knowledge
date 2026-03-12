---
title: "Insurance Member Plans (POST, PATCH)"
domain: insurance-developer-guide
topic: insurance-member-plans-post-patch
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:40.205Z
estimatedTokens: 405
keywords: [Insurance, Member, Plans, POST, PATCH, group, census]
---

# Insurance Member Plans (POST, PATCH)

> Create and update insurance plans for a group census member.

# Insurance Member Plans (POST, PATCH)

Create and update insurance plans for a group census member.

Resource

```

```

Resource example

```

```

Available version

65.0

HTTP methods

POST, PATCH

Path parameter for POST and PATCH

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| memberId | String | ID of the group census member for whom insurance plans must be created or updated. | Required | 65.0 |

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| groupCensusMemberPlans | Group Census Member Plan Input[] | List of plans to add to the member. | Required | 65.0 |

Response body for POST

[Insurance Add Member Plans](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_add_member_plans_output.htm "Output representation for the add member plans operation.")

Request body for PATCH

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| addedPlans | Group Census Member Plan Input[] | List of plans to add to the member. | Optional | 65.0 |
| deletedPlans | String[] | List of group census member plan IDs to delete. | Optional | 65.0 |

Response body for PATCH

[Insurance Update Member Plans](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_update_member_plans_output.htm "Output representation for the update member plans operation.")

## Code Examples

```
/connect/insurance/census-management/group-census-members/memberId/plans
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/insurance/census-management/group-census-members/0r6RM0000000h1pYAA/plans
```

```
{
  "groupCensusMemberPlans": {
    "values": [
      {
        "contractGroupPlanId": "0rgSG0000000e8jYAA"
      },
      {
        "contractGroupPlanId": "0rgSG0000000eALYAY"
      }
    ]
  }
}
```

```
{
  "addedPlans": {
    "values": [
      {
        "contractGroupPlanId": "0rgSG0000000e8jYAA"
      },
      {
        "contractGroupPlanId": "0rgSG0000000eALYAY"
      }
    ]
  },
  "deletedPlans": {
    "values": [
      "0rgSG0000000eALYAY",
      "0rgSG0000000e8jYAA"
    ]
  }
}
```

## Related Topics

- Group Census Member Plan Input[] (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_group_census_member_plan_input.htm)
- Insurance Add Member
              Plans (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_add_member_plans_output.htm)
- Insurance Update
              Member Plans (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_update_member_plans_output.htm)
