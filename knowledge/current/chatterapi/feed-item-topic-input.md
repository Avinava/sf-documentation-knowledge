---
title: "Feed Item Topic Input"
domain: chatterapi
topic: feed-item-topic-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.692Z
estimatedTokens: 143
keywords: [Feed, Item, Topic, Input]
---

# Feed Item Topic Input

> Feed item topic input.

# Feed Item Topic Input

Feed item topic input.

Root XML tag

<feedItemTopic>

JSON

The following example attaches a new topic to a feed item:

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| topicId | String | ID of an existing topic | Required for existing topics if the topicName property isn’t used | 29.0 |
| topicName | String | Name of a new or existing topic, up to 150 characters | Required for new topics; required for existing topics if the topicId property isn’t used | 29.0 |

## Code Examples

```
{ "topicName": "W3C"
}
```
