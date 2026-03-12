---
title: "Topics Capability Input"
domain: chatterapi
topic: topics-capability-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.977Z
estimatedTokens: 170
keywords: [Topics, Capability, Input, Assign, feed, element]
---

# Topics Capability Input

> Assign topics to a feed element.

# Topics Capability Input

Assign topics to a feed element.

Root XML tag

<topicsCapability>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contextTopic​Name | String | Name of the parent topic in the site to which the feed element belongs. | Optional | 38.0 |
| topics | String[] | List of topics to assign to the feed element. | Required | 38.0 |

#### See Also

-   [Feed Element Capabilities Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_element_capabilities_input.htm "A container for all capabilities that can be included when creating a feed element.")

## Code Examples

```
{
   "contextTopicName": "Recreation",
   "topics": ["Hiking", "Backpacking", "Camping"]
}
```

## Related Topics

- Feed Element Capabilities Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_element_capabilities_input.htm)
