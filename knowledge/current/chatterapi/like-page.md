---
title: "Like Page"
domain: chatterapi
topic: like-page
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.298Z
estimatedTokens: 379
keywords: [Chatter, likes]
---

# Like Page

> Page of Chatter likes.

# Like Page

Page of Chatter likes.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| currentPageToken | String | Token identifying the current page. | Medium, 37.0 | 37.0 |
| currentPageUrl | String | URL to the current page of likes. | Medium, 29.0 | 23.0 |
| items | Like[] | Collection of likes. | Small, 32.0 | 32.0 |
| likes | Like[] | Collection of likes.ImportantAs of API version 32.0, use the items property. | Small, 29.0 | 23.0–31.0 |
| myLike | Reference | NoteThis field is no longer available as of version 24.0.Either returns a reference to the specific like or returns null. |  | 23.0–24.0 |
| nextPageToken | String | Token identifying the next page, or null if there isn’t a next page. | Small, 37.0 | 37.0 |
| nextPageUrl | String | URL to the next page of likes. | Small, 29.0 | 23.0 |
| previousPageToken | String | Token identifying the previous page, or null if there isn’t a previous page. | Medium, 37.0 | 37.0 |
| previousPageUrl | String | URL to the previous page of likes. | Medium, 29.0 | 23.0 |
| total | Integer | Total number of likes for the item. | Small, 29.0 | 23.0 |

#### See Also

-   [Chatter Likes Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_chatter_likes_capability.htm "If a feed element has this capability, the context user can like it. Exposes information about existing likes.")

-   [Comment](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_comment.htm "A comment.")

## Related Topics

- Like (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_like.htm)
- Reference (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_reference.htm)
- Chatter Likes Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_chatter_likes_capability.htm)
- Comment (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_comment.htm)
