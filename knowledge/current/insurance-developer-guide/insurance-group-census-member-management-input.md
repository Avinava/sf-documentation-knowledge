---
title: "Insurance Group Census  Member Management Input"
domain: insurance-developer-guide
topic: insurance-group-census-member-management-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.797Z
estimatedTokens: 207
keywords: [Insurance, Group, Census, Member, Management, Input, representation, add, members]
---

# Insurance Group Census  Member Management Input

> Input representation for the details to add or update group census members.

# Insurance Group Census Member Management Input

Input representation for the details to add or update group census members.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| duplicate​Detection​Fields | String[] | List of field API names that are used to generate a unique key for identifying duplicate members along with default values.The default fields for duplicate detection are FirstName, LastName, AssociationWithPrimaryMbr, and GroupCensusId. | Optional | 65.0 |
| flowName | String | Name of the flow to use for processing group member data.Default value is Process Group Census Member Data. | Optional | 65.0 |
| members | Group Census Member Input[] | List of group census members to add or update. | Required | 65.0 |

## Code Examples

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
