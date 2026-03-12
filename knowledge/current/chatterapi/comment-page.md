---
title: "Comment Page"
domain: chatterapi
topic: comment-page
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.751Z
estimatedTokens: 420
keywords: [Comment, comments]
---

# Comment Page

> A page of comments.

# Comment Page

A page of comments.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| comments | Comment[] | Collection of comments.ImportantUse the items property as of version 32.0. | Small, 29.0 | 23.0–31.0 |
| currentPageToken | String | Token identifying the current page. | Medium, 37.0 | 37.0 |
| currentPageUrl | String | URL to the current page of comments, that is, the most recent comments. The default is 25 comments per page. | Medium, 29.0 | 23.0 |
| items | Comment[] | Collection of comments. | Small, 32.0 | 32.0 |
| nextPageToken | String | Token identifying the next page, or null if there isn’t a next page. | Small, 37.0 | 37.0 |
| nextPageUrl | String | URL to the next page of comments, that is, older comments. The default is 25 comments per page.If you want to read more of the comments in search results, all the comments in the thread are refreshed, not just the ones that match the search term. Avoid using nextPageUrl until the comments are refreshed. | Small, 29.0 | 23.0 |
| previousPageToken | String | Token identifying the previous page, or null if there isn’t a previous page. | Small, 44.0 | 44.0 |
| previousPageUrl | String | Connect REST API URL identifying the previous page, or null if there isn’t a previous page. | Small, 44.0 | 44.0 |
| total | Integer | Total number of published comments across all pages for the parent feed item. | Small, 29.0 | 23.0 |

#### See Also

-   [Comments Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_comments_capability.htm "If a feed element or comment has this capability, the context user can add a comment.")

## Related Topics

- Comment (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_comment.htm)
- Comments Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_comments_capability.htm)
