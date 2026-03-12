---
title: "Subscriptions Resource"
domain: chatterapi
topic: subscriptions-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.696Z
estimatedTokens: 212
keywords: [Subscriptions, Resource, subscription, unfollow, record, topic]
---

# Subscriptions Resource

> Information about the specified
subscription. Also used to delete a subscription, for example, to
unfollow a record or a topic.

# Subscriptions Resource

Information about the specified subscription. Also used to delete a subscription, for example, to unfollow a record or a topic.

A subscription ID is returned as part of the response body for follower and following resources, for example, /records/recordId/followers. In addition, subscriptions IDs are also returned in many summary response bodies, such as group summary or user summary.

Resource

```

```

```

```

Available since version

23.0

Requires Chatter

Yes

HTTP methods

GET, DELETE, or HEAD

Response body for GET

[Subscription](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_subscription.htm "Chatter subscription, or following, information.")

#### See Also

-   [Stop Following a Record](atlas.en-us.chatterapi.meta/chatterapi/quickreference_unfollow_record.htm "Stop following a record.")

## Code Examples

```
/chatter/subscriptions/subscriptionId
```

```
/connect/communities/communityId/chatter/subscriptions/subscriptionId
```

## Related Topics

- Subscription (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_subscription.htm)
- Stop Following a Record (atlas.en-us.chatterapi.meta/chatterapi/quickreference_unfollow_record.htm)
