---
title: "Group Member Page"
domain: chatterapi
topic: group-member-page
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.141Z
estimatedTokens: 184
keywords: [Group, Member]
---

# Group Member Page

> Group member page.

# Group Member Page

Group member page.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| currentPageUrl | String | URL to this page of members | Medium, 29.0 | 23.0 |
| members | Group Member[] | Collection of group members | Small, 29.0 | 23.0 |
| myMembership | Reference | If the context user is a member of this group, returns information about that membership, or returns null otherwise | Medium, 29.0 | 23.0 |
| nextPageUrl | String | URL to the next page of members | Small, 29.0 | 23.0 |
| previousPageUrl | String | URL to the previous page of members | Medium, 29.0 | 23.0 |
| totalMember​Count | Integer | Total number of group members | Small, 29.0 | 23.0 |

## Related Topics

- Group Member (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group_member.htm)
- Reference (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_reference.htm)
