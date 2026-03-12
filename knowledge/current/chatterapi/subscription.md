---
title: "Subscription"
domain: chatterapi
topic: subscription
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:21.236Z
estimatedTokens: 324
keywords: [Subscription, Chatter]
---

# Subscription

> Chatter subscription, or following, information.

# Subscription

Chatter subscription, or following, information.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| community | Reference | Information about the Experience Cloud site. Returns null if the subscription exists in the default site or if digital experiences isn’t enabled. | Medium, 29.0 | 26.0 |
| id | String | 18-character ID of the subscription. | Small, 29.0 | 23.0 |
| subject | Depends | Information about the parent, that is, the thing or person being followed. Valid values are:Group (23.0)Record Summary (23.0)Topic (29.0)User Summary (23.0) | Small, 29.0 |  |
| subscriber | Depends | Information about the subscriber, that is, the person following this item. Valid values are:GroupUser Summary | Small, 29.0 | 23.0 |
| url | String | Relative URL to this specific subscription. | Small, 29.0 | 23.0 |

#### See Also

-   [Follower Page](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_followers.htm "Page of Chatter followers.")

-   [Following Page](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_following_page.htm "Page of Chatter followers.")

-   [Subscription Page](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_subscription_page.htm "Page of Chatter subscriptions.")

## Related Topics

- Reference (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_reference.htm)
- Group (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group.htm)
- Record Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_record_summary.htm)
- Topic (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_topics.htm)
- User Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_summary.htm)
- Follower Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_followers.htm)
- Following Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_following_page.htm)
- Subscription Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_subscription_page.htm)
