---
title: "Club Member Profile"
domain: loyalty
topic: club-member-profile
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.036Z
estimatedTokens: 232
keywords: [Club, Member, Profile, membership, number, contact, loyalty, program]
---

# Club Member Profile

> Get the profile details of a club member such as membership number, contact ID, and
    loyalty program name.

# Club Member Profile

Get the profile details of a club member such as membership number, contact ID, and loyalty program name.

Resource

```

```

Resource Example

```

```

Available version

64.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| club​Membership​Number | String | The membership number of the club member. |  | 64.0 |
| club​Name | String | The name of the club. |  | 64.0 |
| contact​Id | String | The contact ID of the member. |  | 64.0 |
| loyalty​Membership​Number | String | The membership number of the loyalty program member. |  | 64.0 |
| program​Name | String | The name of the loyalty program. |  | 64.0 |

Response body for GET

[Club Member Details](atlas.en-us.loyalty.meta/loyalty/connect_responses_club_member_detail.htm "Represents the output for Club Member Profile API.")

## Code Examples

```
/club/members
```

```
/club/members?clubName=NAME5&programName=SampleProgram
```

## Related Topics

- Club Member Details (atlas.en-us.loyalty.meta/loyalty/connect_responses_club_member_detail.htm)
