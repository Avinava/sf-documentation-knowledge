---
title: "ConnectApi.UserGroupDetailPage"
domain: apex-reference
topic: connectapiusergroupdetailpage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:29.275Z
estimatedTokens: 153
keywords: [ConnectApi.UserGroupDetailPage, groups, user, member]
---

# ConnectApi.UserGroupDetailPage

> A page of groups that a user is a member of.

# ConnectApi.UserGroupDetailPage

A page of groups that a user is a member of.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| currentPageUrl | String | URL to the current page. | 45.0 |
| groups | List<ConnectApi.​ChatterGroupDetail> | Collection of groups that the user is a member of. | 45.0 |
| nextPageUrl | String | URL to the next page, or null if there is no next page. | 45.0 |
| previousPageUrl | String | URL to the previous page, or null if there is no previous page. | 45.0 |
| total | Integer | Total number of groups that the user is a member of. | 45.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​ChatterGroupDetail (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_GroupDetail.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
