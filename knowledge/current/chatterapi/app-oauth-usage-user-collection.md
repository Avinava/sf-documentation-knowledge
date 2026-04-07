---
title: "App OAuth Usage User Collection"
domain: chatterapi
topic: app-oauth-usage-user-collection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:16.715Z
estimatedTokens: 151
keywords: [App, OAuth, User, Collection, users]
---

> List of OAuth app users.

# App OAuth Usage User Collection

List of OAuth app users.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| currentPageUrl | String | URL identifying the current page. | Small, 59.0 | 59.0 |
| nextPageUrl | String | URL identifying the next page of the collection.This URL is returned with every page, even the last page of items. If you enter nextPageUrl that comes with the last page of items, an empty array is returned. | Small, 59.0 | 59.0 |
| users | App OAuth Usage User[] | Collection of OAuth users. | Small, 59.0 | 59.0 |

## Related Topics

- App OAuth Usage User (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_app_oauth_usage_user.htm)
