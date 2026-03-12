---
title: "User Group Page"
domain: chatterapi
topic: user-group-page
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:21.447Z
estimatedTokens: 211
keywords: [User, Group, paginated, collection, groups, member]
---

# User Group Page

> A paginated collection of groups a user is a member of.

# User Group Page

A paginated collection of groups a user is a member of.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| currentPageUrl | String | URL to the current page | Medium, 29.0 | 23.0 |
| groups | Group[] | Collection of groups for a user | Small, 29.0 | 23.0 |
| nextPageUrl | String | URL to the next page, if there is no next page, returns the string “null” | Small, 29.0 | 23.0 |
| previousPageUrl | String | URL to the previous page, if there is no previous page, returns the string “null” | Medium, 29.0 | 23.0 |
| total | Integer | Total number of groups a user is a member of.This number is always the total number of groups a user is a member of, even when the request is a search and the response contains a subset of that total. | Small, 29.0 | 23.0 |

## Related Topics

- Group (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group.htm)
