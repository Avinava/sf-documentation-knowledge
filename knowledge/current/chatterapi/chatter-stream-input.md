---
title: "Chatter Stream Input"
domain: chatterapi
topic: chatter-stream-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.698Z
estimatedTokens: 285
keywords: [Chatter, Stream, Input, feed]
---

# Chatter Stream Input

> Chatter feed stream input.

# Chatter Stream Input

Chatter feed stream input.

Root XML tag

<stream>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| description | String | Description of the stream, up to 1,000 characters. | Optional | 39.0 |
| name | String | Name of the stream, up to 120 characters. | Required when creating a stream (POST)Optional when updating a stream (PATCH) | 39.0 |
| subscriptions​ToAdd | Stream Subscription Input[] | List of up to 25 entities whose feeds are included in the stream.Adding an entity that is already added results in no operation. Including the same entity in subscriptionsToAdd and subscriptionsToRemove results in no operation. | Optional | 39.0 |
| subscriptions​ToRemove | Stream Subscription Input[] | List of entities whose feeds are removed from the stream.Removing an entity that is already removed results in no operation. Including the same entity in subscriptionsToAdd and subscriptionsToRemove results in no operation. | Optional when updating a stream (PATCH)Not supported when creating a stream (POST) | 39.0 |

## Code Examples

```
{
   "description" : "Feeds from my management hierarchy.",
   "name" : "Managers Stream",
   "subscriptionsToAdd" : {
      "subscriptions" : [
         {"entityId" : "00590000000Dk5F"},
         {"entityId" : "00590000000Fk4M"},
         {"entityId" : "00590000000Sy7N"},
         {"entityId" : "00590000000Dk4H"},
         {"entityId" : "00590000000Uk7L"}
         ]
      }
}
```

## Related Topics

- Stream Subscription Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_stream_subscription_input.htm)
