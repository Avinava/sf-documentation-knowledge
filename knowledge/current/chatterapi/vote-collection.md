---
title: "Vote Collection"
domain: chatterapi
topic: vote-collection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:21.536Z
estimatedTokens: 422
keywords: [Vote, Collection, upvotes, downvotes, feed, element, comment]
---

# Vote Collection

> A collection of upvotes or downvotes for a feed element or
      comment.

# Vote Collection

A collection of upvotes or downvotes for a feed element or comment.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| currentPageToken | Integer | Token identifying the current page. | Medium, 42.0 | 42.0 |
| currentPageUrl | String | Connect REST API URL identifying the current page. | Medium, 42.0 | 42.0 |
| items | Vote[] | Collection of users and their upvotes or downvotes.Upvotes include likes and upvotes. For example, if a post receives five likes and three upvotes, the number of upvotes is eight. For this reason, the collection of users and their upvotes also includes users who liked the post or comment. If a user both liked and upvoted a post, they appear only once in the collection. | Small, 42.0 | 42.0 |
| nextPageToken | Integer | Token identifying the next page, or null if there isn’t a next page. | Small, 42.0 | 42.0 |
| nextPageUrl | String | Connect REST API URL identifying the next page, or null if there isn’t a next page. | Small, 42.0 | 42.0 |
| previousPageToken | Integer | Token identifying the previous page, or null if there isn’t a previous page. | Medium, 42.0 | 42.0 |
| previousPageUrl | String | Connect REST API URL identifying the previous page, or null if there isn’t a previous page. | Medium, 42.0 | 42.0 |
| total | Long | Total number of upvotes or downvotes for the feed element or comment.The number of upvotes includes the number of likes and upvotes. For example, if a post receives five likes and three upvotes, the total number of upvotes is eight. If a user both liked and upvoted a post, we count that as two upvotes. | Small, 42.0 | 42.0 |

## Related Topics

- Vote (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_vote.htm)
