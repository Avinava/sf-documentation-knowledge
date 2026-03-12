---
title: "Managed Topic Position Collection Input"
domain: chatterapi
topic: managed-topic-position-collection-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.087Z
estimatedTokens: 358
keywords: [Managed, Topic, Position, Collection, Input, relative, positions, topics]
---

# Managed Topic Position Collection Input

> A collection of relative positions of
managed topics.

# Managed Topic Position Collection Input

A collection of relative positions of managed topics.

Root XML tag

<managedTopicPositionCollection>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| managedTopic​Positions | Managed Topic Position Input[] | Collection of managed topic position request bodies. This collection can include Featured and Navigational managed topics and doesn’t have to include all managed topics.If you don’t include all managed topics in managedTopicPositions, the managed topics are reordered by respecting the positions indicated in managedTopicPositions. Any managed topics that aren’t included in managedTopicPositions are pushed down to the next available position. See Reorder managed topics example. | Required | 32.0 |

Reorder managed topics example

If you have these managed topics:

| Managed Topic | Position |
| --- | --- |
| ManagedTopicA | 0 |
| ManagedTopicB | 1 |
| ManagedTopicC | 2 |
| ManagedTopicD | 3 |
| ManagedTopicE | 4 |

And you reorder managed topics by including this information in Managed Topic Position Collection Input:

| Managed Topic | Position |
| --- | --- |
| ManagedTopicD | 0 |
| ManagedTopicE | 2 |

The result is:

| Managed Topic | Position |
| --- | --- |
| ManagedTopicD | 0 |
| ManagedTopicA | 1 |
| ManagedTopicE | 2 |
| ManagedTopicB | 3 |
| ManagedTopicC | 4 |

## Code Examples

```
{
"managedTopicPositions" : [
  {
    "managedTopicId" :"0mtD0000000001aIAA",
    "position" :"0"
  },
  {
    "managedTopicId" :"0mtD0000000002qIAA",
    "position" :"2"
  }
  ]
}
```

## Related Topics

- Managed Topic Position Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_managed_topic_position_input.htm)
