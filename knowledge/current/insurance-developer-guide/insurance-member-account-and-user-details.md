---
title: "Insurance Member Account and User Details"
domain: insurance-developer-guide
topic: insurance-member-account-and-user-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.616Z
estimatedTokens: 182
keywords: [Insurance, Member, Account, User, Output, representation, member's, person, portal, created]
---

# Insurance Member Account and User Details

> Output representation of a member's person account and portal user details that are
  created.

# Insurance Member Account and User Details

Output representation of a member's person account and portal user details that are created.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| groupCensusId | String | ID of the group census for the specific member. | Small, 65.0 | 65.0 |
| groupCensus​MemberId | String | ID of the source group census member who's processed. | Small, 65.0 | 65.0 |
| person​AccountId | String | ID of the person account that's created. | Small, 65.0 | 65.0 |
| userId | String | ID of the portal user that's created. This property is null if portal user creation isn't requested. | Small, 65.0 | 65.0 |

## Code Examples

```
{
  "groupCensusId": "0rfAbcDefGhiJklMno",
  "groupCensusMemberId": "0r6PrimaryMemberId",
  "personAccountId": "003abc123DEF456ghi",
  "userId": "005jkl789MNO012pqr"
}
```
