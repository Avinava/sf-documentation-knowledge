---
title: "Subscription Page"
domain: chatterapi
topic: subscription-page
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:21.252Z
estimatedTokens: 214
keywords: [Subscription, Chatter, subscriptions]
---

# Subscription Page

> Page of Chatter subscriptions.

# Subscription Page

Page of Chatter subscriptions.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| currentPageUrl | String | Returns the current page of subscriptions | Medium, 29.0 | 23.0 |
| nextPageUrl | String | Returns the next page of subscriptions. If there is no next page, returns the string “null” | Small, 29.0 | 23.0 |
| mySubscription | Reference | Returns information about the subscription, or null the context user is not subscribed. | Medium, 29.0 | 23.0 |
| previousPageUrl | String | Returns the previous page of subscriptions. If there is no previous page, returns the string “null” | Medium, 29.0 | 23.0 |
| subscriptions | Subscription[] | Collection of subscriptions | Small, 29.0 | 23.0 |
| total | Integer | Total number of subscriptions | Small, 29.0 | 23.0 |

## Related Topics

- Reference (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_reference.htm)
- Subscription (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_subscription.htm)
