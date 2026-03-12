---
title: "Insurance Member Eligible Plans (GET)"
domain: insurance-developer-guide
topic: insurance-member-eligible-plans-get
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:40.128Z
estimatedTokens: 255
keywords: [Insurance, Member, Eligible, Plans, contract, group, census, their, dependents]
---

# Insurance Member Eligible Plans (GET)

> Get the contract group plans for which a group census member and their dependents are
  eligible.

# Insurance Member Eligible Plans (GET)

Get the contract group plans for which a group census member and their dependents are eligible.

Resource

```

```

Resource example

```

```

Available version

65.0

HTTP methods

GET

Path Parameter for GET

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| memberId | String | ID of the group census member. | Required | 65.0 |

Request parameter for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| shouldInclude​Dependents | Boolean | Indicates whether to include the eligible plans for the member's dependents in the response (true) or not (false).The default value is false. | Optional | 65.0 |

Response body for GET

[Insurance Member Eligible Plans Response](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_get_members_plans.htm "Output representation for a member's eligible plans.")

## Code Examples

```
/connect/insurance/census-management/group-census-members/memberId/eligible-plans
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/insurance/census-management/group-census-members/0r6RM0000000h1pYAA/eligible-plans
```

## Related Topics

- Insurance Member Eligible
       Plans Response (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_get_members_plans.htm)
