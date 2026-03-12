---
title: "ConnectApi.DirectMessageMemberActivityPage"
domain: apex-reference
topic: connectapidirectmessagememberactivitypage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:27.136Z
estimatedTokens: 223
keywords: [direct, message, member, activities]
---

# ConnectApi.DirectMessageMemberActivityPage

> A page of direct message member activities.

# ConnectApi.DirectMessageMemberActivityPage

A page of direct message member activities.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| activities | List<ConnectApi.​DirectMessage​MemberActivity> | Collection of direct message member activities. | 40.0 |
| currentPageToken | String | Token identifying the current page. | 40.0 |
| currentPageUrl | String | Connect REST API URL identifying the current page. | 40.0 |
| nextPageToken | String | Token identifying the next page, or null if there isn’t a next page. | 40.0 |
| nextPageUrl | String | Connect REST API URL identifying the next page, or null if there isn’t a next page. | 40.0 |

#### See Also

-   [ConnectApi.DirectMessageCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_direct_message_capability.htm "If a feed element has this capability, it’s a direct message.")

## Related Topics

- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​DirectMessage​MemberActivity (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_direct_message_membership_activity.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.DirectMessageCapability (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_direct_message_capability.htm)
