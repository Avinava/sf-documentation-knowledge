---
title: "ConnectApi.TopicsCapability"
domain: apex-reference
topic: connectapitopicscapability
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:42:40.136Z
keywords: [ConnectApi.TopicsCapability, See]
---

# ConnectApi.TopicsCapability

# ConnectApi.TopicsCapability

If a feed element has this capability, the context user can add topics to it. Topics help users organize and discover conversations.

Subclass of [ConnectApi.FeedElementCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capability.htm "A feed element capability, which defines the characteristics of a feed element.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| canAssignTopics | Boolean | true if a topic can be assigned to the feed element, false otherwise. | 32.0 |
| items | List<ConnectApi.​Topic> | A collection of topics associated with this feed element. | 32.0 |

#### See Also

-   [ConnectApi.FeedElementCapabilities](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capabilities.htm "A container for all capabilities that can be included with a feed element.")