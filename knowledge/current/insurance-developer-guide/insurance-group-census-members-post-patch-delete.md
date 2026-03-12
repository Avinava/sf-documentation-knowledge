---
title: "Insurance Group Census Members (POST, PATCH, DELETE)"
domain: insurance-developer-guide
topic: insurance-group-census-members-post-patch-delete
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:40.170Z
estimatedTokens: 683
keywords: [Insurance, Group, Census, Members, POST, PATCH, Add]
---

# Insurance Group Census Members (POST, PATCH, DELETE)

> Add (POST) and update (PATCH) group census members. Delete all census members for the
    specified group census ID.

# Insurance Group Census Members (POST, PATCH, DELETE)

Add (POST) and update (PATCH) group census members. Delete all census members for the specified group census ID.

Resource

```

```

Resource example

```

```

Available version

65.0

HTTP methods

POST, PATCH, DELETE

Path parameter for POST, PATCH, and DELETE

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
| duplicate​Detection​Fields | String[] | List of field API names that are used to generate a unique key for identifying duplicate members along with default values.The default fields for duplicate detection are FirstName, LastName, AssociationWithPrimaryMbr, and GroupCensusId. | Optional | 65.0 |
| flowName | String | Name of the flow to use for processing group member data.Default value is Process Group Census Member Data. | Optional | 65.0 |
| members | Group Census Member Input[] | List of group census members to add or update. | Required | 65.0 |

Response body for POST

[Insurance Group Census Member Management](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_census_mgmt_output.htm "Output representation for the details of the group census members.")

Request body for PATCH

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| duplicate​Detection​Fields | String[] | List of field API names that are used to generate a unique key for identifying duplicate members along with default values.The default fields for duplicate detection are FirstName, LastName, AssociationWithPrimaryMbr, and GroupCensusId. | Optional | 65.0 |
| flowName | String | Name of the flow to use for processing group member data.Default value is Process Group Census Member Data. | Optional | 65.0 |
| members | Group Census Member Input[] | List of group census members to add or update. | Required | 65.0 |

Response body for PATCH

[Insurance Group Census Member Management](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_census_mgmt_output.htm "Output representation for the details of the group census members.")

Response body for DELETE

[Insurance Group Census Member Management](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_census_mgmt_output.htm "Output representation for the details of the group census members.")

## Code Examples

```
/connect/insurance/census-management/group-censuses/groupCensusId/group-census-members
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/insurance/census-management/group-censuses/0rlxx000000001aEAA/group-census-members
```

```
{
  "members": {
    "values": [
      {
                    "name": "member1",
                    "firstName": "fm",
                    "lastname": "lm",
                    "email": "cci@test.com",
                    "sourceSystemIdentifier": "1.primary",
                    "primaryMemberSource": null,
                    "relationshipToPrimaryMember": "Self",
                    "associationWithPrimaryMbr": "Self"
                },
                {
                    "name": "member2",
                    "firstName": "fm2",
                    "lastname": "lm2",
                    "email": "cci@test.com",
                    "sourceSystemIdentifier": "2.primary",
                    "primaryMemberSource": null,
                    "relationshipToPrimaryMember": "Self",
                    "associationWithPrimaryMbr": "Self"
                },
                {
                    "name": "dep1",
                    "firstName": "depfm",
                    "lastname": "depfm",
                    "email": "cci@test.com",
                    "associationWithPrimaryMbr": "Child",
                    "relationshipToPrimaryMember": "Child",
                    "sourceSystemIdentifier": "1.Child",
                    "primaryMemberSource": "1.primary"
                },
                {
                    "name": "dep2",
                    "firstName": "depfm2",
                    "lastname": "depfm2",
                    "email": "cci@test.com",
                    "associationWithPrimaryMbr": "Child",
                    "relationshipToPrimaryMember": "Child",
                    "sourceSystemIdentifier": "2.Child",
                    "primaryMemberSource": "2.primary"
                }
    ]
  },
  "duplicateDetectionFields": {
    "values": [
      "firstName"
    ]
  }
}
```

```
{
  "members": {
    "values": [
      {
                    "name": "member1",
                    "firstName": "fm",
                    "lastname": "lm",
                    "email": "cci@test.com",
                    "sourceSystemIdentifier": "1.primary",
                    "primaryMemberSource": null,
                    "relationshipToPrimaryMember": "Self",
                    "associationWithPrimaryMbr": "Self"
                },
                {
                    "name": "member2",
                    "firstName": "fm2",
                    "lastname": "lm2",
                    "email": "cci@test.com",
                    "sourceSystemIdentifier": "2.primary",
                    "primaryMemberSource": null,
                    "relationshipToPrimaryMember": "Self",
                    "associationWithPrimaryMbr": "Self"
                },
                {
                    "name": "dep1",
                    "firstName": "depfm",
                    "lastname": "depfm",
                    "email": "cci@test.com",
                    "associationWithPrimaryMbr": "Child",
                    "relationshipToPrimaryMember": "Child",
                    "sourceSystemIdentifier": "1.Child",
                    "primaryMemberSource": "1.primary"
                },
                {
                    "name": "dep2",
                    "firstName": "depfm2",
                    "lastname": "depfm2",
                    "email": "cci@test.com",
                    "associationWithPrimaryMbr": "Child",
                    "relationshipToPrimaryMember": "Child",
                    "sourceSystemIdentifier": "2.Child",
                    "primaryMemberSource": "2.primary"
                }
    ]
  },
  "duplicateDetectionFields": {
    "values": [
      "firstName"
    ]
  }
}
```

## Related Topics

- Group Census Member Input (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_group_census_member_input.htm)
- Insurance Group
              Census Member Management (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_census_mgmt_output.htm)
