---
title: "Stream Subscription Input"
domain: chatterapi
topic: stream-subscription-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.878Z
estimatedTokens: 154
keywords: [Stream, Subscription, Input, entity, subscribe, feed]
---

# Stream Subscription Input

> An entity to subscribe to for a feed stream.

# Stream Subscription Input

An entity to subscribe to for a feed stream.

Root XML tag

<streamSubscription>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| entityId | String | The ID of any feed-enabled entity, such as a group, record, or user, that the context user can access. When subscribed, the entity’s feed is included in the feed stream. | Required | 39.0 |

#### See Also

-   [Chatter Stream Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_stream_input.htm "Chatter feed stream input.")

## Code Examples

```
{
   "entityId" : "0TOD0000000090r"
}
```

## Related Topics

- Chatter Stream Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_stream_input.htm)
