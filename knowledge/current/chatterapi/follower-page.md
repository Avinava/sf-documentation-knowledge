---
title: "Follower Page"
domain: chatterapi
topic: follower-page
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.986Z
estimatedTokens: 229
keywords: [Follower, Chatter, followers]
---

# Follower Page

> Page of Chatter followers.

# Follower Page

Page of Chatter followers.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| currentPageUrl | String | URL of the current page | Medium, 29.0 | 23.0 |
| followers | Subscription[] | Collection of one or more subscriptions of those that follow a record | Small, 29.0 | 23.0 |
| mySubscription | Reference | NoteThis field is no longer available as of version 24.0.If the context user is following this user, contains information about the subscription, otherwise null. |  | 23.0–24.0 |
| nextPageUrl | String | Connect REST API URL identifying the next page, or null if there isn’t a next page. | Small, 29.0 | 23.0 |
| previousPageUrl | String | Connect REST API URL identifying the previous page, or null if there isn’t a previous page. | Medium, 29.0 | 23.0 |
| total | Integer | Total number of followers | Small, 29.0 | 23.0 |

## Related Topics

- Subscription (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_subscription.htm)
- Reference (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_reference.htm)
