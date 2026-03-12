---
title: "Bulk Subscriptions"
domain: api-streaming
topic: bulk-subscriptions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.502Z
estimatedTokens: 84
keywords: [Bulk, Subscriptions, subscribe, multiple, topics, time]
---

# Bulk Subscriptions

> You can subscribe to multiple topics at the same time.

# Bulk Subscriptions

You can subscribe to multiple topics at the same time.

To do so, send a JSON array of subscribe messages instead of a single subscribe message. For example this code subscribes to three topics:

```

```

For more information, see the [Bayeux Specification](http://svn.cometd.com/trunk/bayeux/bayeux.html#toc_57).

## Code Examples

```
[
  {
     "channel": "/meta/subscribe",
     "clientId": "Un1q31d3nt1f13r",
     "subscription": "/topic/foo"
   },
  {
     "channel": "/meta/subscribe",
     "clientId": "Un1q31d3nt1f13r",
     "subscription": "/topic/bar"
   },
  {
     "channel": "/meta/subscribe",
     "clientId": "Un1q31d3nt1f13r",
     "subscription": "/topic/baz"
   }

]
```
