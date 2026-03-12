---
title: "Topic Input"
domain: chatterapi
topic: topic-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.971Z
estimatedTokens: 259
keywords: [Topic, Input]
---

# Topic Input

> Topic input.

# Topic Input

Topic input.

Root XML tag

<topic>

JSON example

```

```

Properties

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| description | String | Text description of the topic | 28.0 |
| idsToMerge | String[] | List of up to five secondary topic IDs to merge with the primary topicIf any of the secondary topics are navigational or featured topics, they lose their topic type, topic images, and children topics. Their feed items are reassigned to the primary topic. If you merge a topic with a content topic, the content associations are preserved. If you merge a topic with an inactive endorsee, the endorsement isn’t mapped to the primary topic. | 33.0 |
| name | String | Name of the topicUse this property to change only the capitalization and spacing of the topic name. | 28.0 |

#### See Also

-   [Create a Topic Hierarchy in Experience Cloud Sites](atlas.en-us.chatterapi.meta/chatterapi/quickreference_create_topic_hierarchy.htm "Create a topic hierarchy in Experience Cloud sites.")

## Code Examples

```
{
"description":"World Wide Web Consortium (W3C) is the main international standards organization for the web.",
"name":"W3C"
}
```

## Related Topics

- Create a Topic Hierarchy in Experience Cloud Sites (atlas.en-us.chatterapi.meta/chatterapi/quickreference_create_topic_hierarchy.htm)
