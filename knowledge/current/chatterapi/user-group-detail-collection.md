---
title: "User Group Detail Collection"
domain: chatterapi
topic: user-group-detail-collection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:21.444Z
estimatedTokens: 173
keywords: [User, Group, Detail, Collection, groups, member]
---

# User Group Detail Collection

> A page of groups that a user is a member of.

# User Group Detail Collection

A page of groups that a user is a member of.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| currentPageUrl | String | URL to the current page. | Medium, 45.0 | 45.0 |
| groups | Group Detail[] | Collection of groups that the user is a member of. | Small, 45.0 | 45.0 |
| nextPageUrl | String | URL to the next page, or null if there is no next page. | Small, 45.0 | 45.0 |
| previousPageUrl | String | URL to the previous page, or null if there is no previous page. | Medium, 45.0 | 45.0 |
| total | Integer | Total number of groups that the user is a member of. | Small, 45.0 | 45.0 |

## Related Topics

- Group Detail (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group_detail.htm)
