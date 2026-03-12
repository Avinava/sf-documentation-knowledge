---
title: "Insurance Member Plans Delete (POST)"
domain: insurance-developer-guide
topic: insurance-member-plans-delete-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:40.098Z
estimatedTokens: 252
keywords: [Insurance, Member, Plans, POST, group, census]
---

# Insurance Member Plans Delete (POST)

> Delete specified plans for a group census member.

# Insurance Member Plans Delete (POST)

Delete specified plans for a group census member.

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
| memberId | String | ID of the group census member for whom insurance plans must be deleted. | Required | 65.0 |

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| plans | String[] | List of group census member plan IDs to delete.If you specify the root plan ID, all the associated details will be deleted. | Required | 65.0 |

Response body for POST

[Delete Member Plans](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_delete_member_plans_output.htm "Output representation for the member plan deletion process.")

## Code Examples

```
/connect/insurance/census-management/group-census-members/memberId/plans/action/delete
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/insurance/census-management/group-census-members/0r6RM0000000h1pYAA/plans/action/delete
```

```
{
  "plans": {
    "values": [
      "0rgSG0000000eALYAY",
      "0rgSG0000000e8jYAA"
    ]
  }
}
```

## Related Topics

- Delete Member Plans (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_delete_member_plans_output.htm)
