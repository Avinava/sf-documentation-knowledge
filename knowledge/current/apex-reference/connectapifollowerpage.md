---
title: "ConnectApi.FollowerPage"
domain: apex-reference
topic: connectapifollowerpage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:25.952Z
estimatedTokens: 153
keywords: [ConnectApi.FollowerPage, followers]
---

# ConnectApi.FollowerPage

> Page of followers.

# ConnectApi.FollowerPage

Page of followers.

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| currentPageUrl | String | Connect REST API URL identifying the current page. | 28.0 |
| followers | List<ConnectApi.​Subscription> | List of subscriptions. | 28.0 |
| nextPageUrl | String | Connect REST API URL identifying the next page, or null if there isn’t a next page. | 28.0 |
| previousPageUrl | String | Connect REST API URL identifying the previous page, or null if there isn’t a previous page. | 28.0 |
| total | Integer | Total number of followers across all pages. | 28.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​Subscription (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_subscription.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
