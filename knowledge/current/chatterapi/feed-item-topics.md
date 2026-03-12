---
title: "Feed Item Topics"
domain: chatterapi
topic: feed-item-topics
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:18.796Z
estimatedTokens: 200
keywords: [Feed, Item, Topics]
---

# Feed Item Topics

> Feed item topics.

# Feed Item Topics

Feed item topics.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=chatterapi)

#### Important

This response body isn’t available in version 32.0 and later. In version 32.0 and later, [Topics Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_topics_capability.htm "If a feed element has this capability, the context user can add topics to it. Topics help users organize and discover conversations.") is used.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| canAssignTopics | Boolean | true if a topic can be assigned to the feed item, false otherwise | Small, 29.0 | 28.0–31.0 |
| topics | Topic[] | Collection of topics | Small, 29.0 | 28.0–31.0 |

## Related Topics

- Topics Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_topics_capability.htm)
- Topic (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_topics.htm)
