---
title: "Managed Topic Position Input"
domain: chatterapi
topic: managed-topic-position-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.091Z
estimatedTokens: 172
keywords: [Managed, Topic, Position, Input, relative]
---

# Managed Topic Position Input

> The relative position of a managed topic.

# Managed Topic Position Input

The relative position of a managed topic.

Root XML tag

<managedTopicPosition>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| managedTopicId | String | ID of existing managed topic. | Required | 32.0 |
| position | Integer | Relative position of the managed topic, indicated by zero-indexed, ascending whole numbers. | Required | 32.0 |

#### See Also

-   [Managed Topic Position Collection Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_managed_topic_position_collection_input.htm "A collection of relative positions of managed topics.")

## Code Examples

```
{
"managedTopicId" :"0mtD0000000001aIAA",
"position" :"0"
}
```

## Related Topics

- Managed Topic Position Collection Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_managed_topic_position_collection_input.htm)
