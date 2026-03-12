---
title: "User Page"
domain: chatterapi
topic: user-page
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:21.470Z
estimatedTokens: 222
keywords: [User, Chatter, users]
---

# User Page

> Page of Chatter users.

# User Page

Page of Chatter users.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| currentPageToken | String | Token identifying the current page. | Medium, 37.0 | 37.0 |
| currentPageUrl | String | URL to the current page. | Medium, 29.0 | 23.0 |
| nextPageToken | String | Token identifying the next page, or null if there isn’t a next page. | Small, 37.0 | 37.0 |
| nextPageUrl | String | URL to the next page. If there is no next page, returns null. | Small, 29.0 | 23.0 |
| previousPageToken | String | Token identifying the previous page, or null if there isn’t a previous page. | Medium, 37.0 | 37.0 |
| previousPageUrl | String | URL to the previous page. If there is no previous page, returns null. | Medium, 29.0 | 23.0 |
| users | User Detail[] | Collection of user detail information. | Small, 29.0 | 24.0 |

## Related Topics

- User Detail (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_detail.htm)
