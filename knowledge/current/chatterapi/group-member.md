---
title: "Group Member"
domain: chatterapi
topic: group-member
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.137Z
estimatedTokens: 205
keywords: [Group, Member, Chatter]
---

# Group Member

> Chatter group member.

# Group Member

Chatter group member.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| id | String | 18-character ID of the group membership | Small, 29.0 | 23.0 |
| lastFeed​​​AccessDate | String | The date and time at which the group member last accessed the group feed. Format is ISO 8601. | Small, 31.0 | 31.0 |
| role | String | Values are:GroupOwnerGroupManagerNotAMemberNotAMemberPrivateRequestedStandardMember | Small, 29.0 | 23.0 |
| url | String | URL to this membership | Small, 29.0 | 23.0 |
| user | User Summary | Information about the user who is subscribed to this group | Small, 29.0 | 23.0 |

#### See Also

-   [Group Member Page](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group_member_page.htm "Group member page.")

## Related Topics

- User Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_summary.htm)
- Group Member Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group_member_page.htm)
