---
title: "ConnectApi.VotePage"
domain: apex-reference
topic: connectapivotepage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:29.335Z
estimatedTokens: 388
keywords: [ConnectApi.VotePage, upvotes, downvotes, feed, element, comment]
---

# ConnectApi.VotePage

> A page of upvotes or downvotes on a feed element or
    comment.

# ConnectApi.VotePage

A page of upvotes or downvotes on a feed element or comment.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| currentPageToken | Integer | Token identifying the current page. | 42.0 |
| currentPageUrl | String | Connect REST API URL identifying the current page. | 42.0 |
| items | List<ConnectApi.​Vote> | Collection of users and their upvotes or downvotes.Upvotes include likes and upvotes. For example, if a post receives five likes and three upvotes, the number of upvotes is eight. For this reason, the collection of users and their upvotes also includes users who liked the post or comment. If a user both liked and upvoted a post, they appear only once in the collection. | 42.0 |
| nextPageToken | Integer | Token identifying the next page, or null if there isn’t a next page. | 42.0 |
| nextPageUrl | String | Connect REST API URL identifying the next page, or null if there isn’t a next page. | 42.0 |
| previousPageToken | Integer | Token identifying the previous page, or null if there isn’t a previous page. | 42.0 |
| previousPageUrl | String | Connect REST API URL identifying the previous page, or null if there isn’t a previous page. | 42.0 |
| total | Long | Total number of upvotes or downvotes for the feed element or comment.The number of upvotes includes the number of likes and upvotes. For example, if a post receives five likes and three upvotes, the total number of upvotes is eight. If a user both liked and upvoted a post, we count that as two upvotes. | 42.0 |

## Related Topics

- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​Vote (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_vote.htm)
- Long (atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm)
