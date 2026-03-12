---
title: "ConnectApi.GroupMemberPage"
domain: apex-reference
topic: connectapigroupmemberpage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:27.559Z
estimatedTokens: 197
keywords: [ConnectApi.GroupMemberPage, Page, group, members.]
---

# ConnectApi.GroupMemberPage

> Page of group members.

# ConnectApi.GroupMemberPage

Page of group members.

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| currentPageUrl | String | Connect REST API URL identifying the current page. | 28.0 |
| members | List<ConnectApi.​GroupMember> | List of group members. | 28.0 |
| myMembership | ConnectApi.​​Reference | If the context user is a member of this group, returns information about that membership, otherwise, null. | 28.0 |
| nextPageUrl | String | Connect REST API URL identifying the next page, or null if there isn’t a next page. | 28.0 |
| previousPageUrl | String | Connect REST API URL identifying the previous page, or null if there isn’t a previous page. | 28.0 |
| totalMemberCount | Integer | Total number of group members across all pages. | 28.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​GroupMember (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Group_Member_Output.htm)
- ConnectApi.​​Reference (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_reference.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
