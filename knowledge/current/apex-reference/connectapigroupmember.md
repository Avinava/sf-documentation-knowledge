---
title: "ConnectApi.GroupMember"
domain: apex-reference
topic: connectapigroupmember
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:25.980Z
estimatedTokens: 198
keywords: [ConnectApi.GroupMember, Member, group]
---

# ConnectApi.GroupMember

> Member of a group.

# ConnectApi.GroupMember

Member of a group.

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| id | String | User’s 18-character ID. | 28.0 |
| lastFeed​AccessDate | Datetime | The date and time at which the group member last accessed the group feed. | 31.0 |
| role | ConnectApi.​GroupMembership​Type Enum | Type of membership the user has with the group.GroupOwnerGroupManagerNotAMemberNotAMemberPrivateRequestedStandardMember | 28.0 |
| url | String | Connect REST API URL to this membership. | 28.0 |
| user | ConnectApi.​User​Summary | Information about the user who is subscribed to this group. | 28.0 |

#### See Also

-   [ConnectApi.GroupMemberPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_groupMemberPage.htm "Page of group members.")

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Datetime (atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm)
- ConnectApi.​User​Summary (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_summary.htm)
- ConnectApi.GroupMemberPage (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_groupMemberPage.htm)
