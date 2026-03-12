---
title: "ConnectApi.Topic"
domain: apex-reference
topic: connectapitopic
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:29.153Z
estimatedTokens: 806
keywords: [ConnectApi.Topic, Topic.]
---

# ConnectApi.Topic

> Topic.

# ConnectApi.Topic

Topic.

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| createdDate | Datetime | ISO 8601 date string, for example, 2011-02-25T18:24:31.000Z. | 29.0 |
| description | String | Description of the topic. | 29.0 |
| id | String | 18-character ID. | 29.0 |
| images | ConnectApi.​TopicImages | Images associated with the topic. | 32.0 |
| isBeingDeleted | Boolean | true if the topic is currently being deleted; false otherwise.After the topic is deleted, when attempting to retrieve the topic, the output is NOT_FOUND. | 33.0 |
| name | String | Name of the topic. | 29.0 |
| nonLocalized​Name | String | Non-localized name of the topic. | 36.0 |
| talkingAbout | Integer | Number of people talking about this topic over the last two months, based on factors such as topic additions and comments on posts with the topic. | 29.0 |
| url | String | URL to the topic detail page. | 29.0 |

#### See Also

-   [ConnectApi.ManagedTopic](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_topic.htm "Represents a managed topic in an Experience Cloud site.")

-   [ConnectApi.TopicPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topicPage.htm "Page of topics.")

-   [ConnectApi.TopicEndorsement](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topicendorsement.htm "Represents one user endorsing another user for a single topic.")

-   [assignTopic(communityId, recordId, topicId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_assignTopic "Assign a topic to a record or feed item.")

-   [assignTopicByName(communityId, recordId, topicName)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_assignTopicByName "Assign a topic to a record or feed item.")

-   [getTopic(communityId, topicId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_getTopic "Get a topic.")

-   [updateTopic(communityId, topicId, topic)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_updateTopic "Update the description or name of a topic or merge up to five secondary topics with a primary topic.")

-   [createTopic(communityId, name, description)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_createTopic_10 "Create a topic.")

-   [mergeTopics(communityId, topicId, idsToMerge)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_mergeTopics "Merge up to five secondary topics with a primary topic.")

-   [ConnectApi.TopicEndorsementCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topicendorsementcollection.htm "Collection of topic endorsement response bodies.")

-   [ConnectApi.TopicSuggestion](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topicSuggestion.htm "Topic suggestion.")

-   [ConnectApi.TopicsCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topics_capability.htm "If a feed element has this capability, the context user can add topics to it. Topics help users organize and discover conversations.")

## Related Topics

- Datetime (atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​TopicImages (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topic_images.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- ConnectApi.ManagedTopic (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_topic.htm)
- ConnectApi.TopicPage (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topicPage.htm)
- ConnectApi.TopicEndorsement (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topicendorsement.htm)
- assignTopic(communityId, recordId, topicId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm)
- assignTopicByName(communityId, recordId, topicName) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm)
