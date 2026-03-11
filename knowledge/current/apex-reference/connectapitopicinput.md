---
title: "ConnectApi.TopicInput"
domain: apex-reference
topic: connectapitopicinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.693Z
keywords: [ConnectApi.TopicInput, See]
---

# ConnectApi.TopicInput

# ConnectApi.TopicInput

Update a topic’s name or description or merge topics.

| Property | Type | Description | Available Version |
| --- | --- | --- | --- |
| description | String | Description of the topic | 29.0 |
| idsToMerge | List<String> | List of up to five secondary topic IDs to merge with the primary topicIf any of the secondary topics are navigational or featured topics, they lose their topic type, topic images, and children topics. Their feed items are reassigned to the primary topic. If you merge a topic with a content topic, the content associations are preserved. If you merge a topic with an inactive endorsee, the endorsement isn’t mapped to the primary topic. | 33.0 |
| name | String | Name of the topicUse this property to change only the capitalization and spacing of the topic name. | 29.0 |

#### See Also

-   [updateTopic(communityId, topicId, topic)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_updateTopic "Update the description or name of a topic or merge up to five secondary topics with a primary topic.")