---
title: "ConnectApi.FeedItemTopicPage"
domain: apex-reference
topic: connectapifeeditemtopicpage
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:42:37.712Z
keywords: [ConnectApi.FeedItemTopicPage, Important]
---

# ConnectApi.FeedItemTopicPage

# ConnectApi.FeedItemTopicPage

Feed item topic page.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

This class isn’t available in version 32.0 and later. In version 32.0 and later, [ConnectApi.TopicsCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topics_capability.htm "If a feed element has this capability, the context user can add topics to it. Topics help users organize and discover conversations.") is used.

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| canAssignTopics | Boolean | true if a topic can be assigned to the feed item, false otherwise. | 28.0–31.0 |
| topics | List<ConnectApi.​Topic> | List of topics. | 28.0–31.0 |