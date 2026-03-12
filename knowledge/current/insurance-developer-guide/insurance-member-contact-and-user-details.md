---
title: "Insurance Member Contact and User Details"
domain: insurance-developer-guide
topic: insurance-member-contact-and-user-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.619Z
estimatedTokens: 161
keywords: [Insurance, Member, Contact, User, Output, representation, member's, portal, that's, created]
---

# Insurance Member Contact and User Details

> Output representation of a member's contact and portal user details that's
  created.

# Insurance Member Contact and User Details

Output representation of a member's contact and portal user details that's created.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| contactId | String | ID of the contact record that's created. | Small, 65.0 | 65.0 |
| groupCensusId | String | ID of the group census for the specific member. | Small, 65.0 | 65.0 |
| groupCensus​MemberId | String | ID of the group census member who's processed. | Small, 65.0 | 65.0 |
| userId | String | ID of the portal user that's created. | Small, 65.0 | 65.0 |

## Code Examples

```
{
  "contactId": "003abc123DEF456ghi",
  "groupCensusId": "0rfAbcDefGhiJklMno",
  "groupCensusMemberId": "0r6PrimaryMemberId",
  "userId": "005jkl789MNO012pqr"
}
```
