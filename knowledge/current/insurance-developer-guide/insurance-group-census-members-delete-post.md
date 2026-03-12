---
title: "Insurance Group Census Members Delete (POST)"
domain: insurance-developer-guide
topic: insurance-group-census-members-delete-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:40.174Z
estimatedTokens: 236
keywords: [Insurance, Group, Census, Members, POST]
---

# Insurance Group Census Members Delete (POST)

> Delete one or more census members of the specified group census ID.

# Insurance Group Census Members Delete (POST)

Delete one or more census members of the specified group census ID.

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
| groupCensusId | String | ID of the group census. | Required | 65.0 |

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| memberIds | String[] | IDs of the group census member that must be deleted. | Required | 65.0 |

Response body for POST

[Insurance Group Census Member Management](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_census_mgmt_output.htm "Output representation for the details of the group census members.")

## Code Examples

```
/connect/insurance/census-management/group-censuses/groupCensusId/group-census-members/delete
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/insurance/census-management/group-censuses/0rlxx000000001aEAA/group-census-members/delete
```

```
{
  "memberIds": [
    "0r6RM0000000h1pYAA"
  ]
}
```

## Related Topics

- Insurance Group
              Census Member Management (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_census_mgmt_output.htm)
