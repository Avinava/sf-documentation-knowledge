---
title: "ConnectApi.GroupMember"
domain: apex-reference
topic: connectapigroupmember
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:37.738Z
keywords: [ConnectApi.GroupMember, See]
---

# ConnectApi.GroupMember

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