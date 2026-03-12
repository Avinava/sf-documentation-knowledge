---
title: "ConnectApi.DirectMessageMemberPage"
domain: apex-reference
topic: connectapidirectmessagememberpage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:27.128Z
estimatedTokens: 252
keywords: [ConnectApi.DirectMessageMemberPage, collection, direct, message, members]
---

# ConnectApi.DirectMessageMemberPage

> A collection of direct message members.

# ConnectApi.DirectMessageMemberPage

A collection of direct message members.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| currentPageToken | String | Page token to access the current page of direct message members. | 39.0 |
| currentPageUrl | String | URL to the current page of direct message members. | 39.0 |
| nextPageToken | String | Page token to access the next page of direct message members. | 39.0 |
| nextPageUrl | String | URL to the next page of direct message members. | 39.0 |
| users | List<ConnectApi.​UserSummary> | Collection of direct message members. | 39.0 |

#### See Also

-   [ConnectApi.DirectMessageCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_direct_message_capability.htm "If a feed element has this capability, it’s a direct message.")

-   [ConnectApi.DirectMessageMemberActivity](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_direct_message_membership_activity.htm "Direct message member activity.")

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​UserSummary (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_summary.htm)
- ConnectApi.DirectMessageCapability (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_direct_message_capability.htm)
- ConnectApi.DirectMessageMemberActivity (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_direct_message_membership_activity.htm)
