---
title: "Topics People Are Knowledgeable About"
domain: chatterapi
topic: topics-people-are-knowledgeable-about
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:21.379Z
estimatedTokens: 308
keywords: [Topics, People, Knowledgeable, topic, user]
---

# Topics People Are Knowledgeable About

> Represents a topic that a specified user is knowledgeable
about.

# Topics People Are Knowledgeable About

Represents a topic that a specified user is knowledgeable about.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| isEndorsedByMe | Boolean | Specifies if the knowledgeable user is endorsed for the topic by the context user, true if so, false otherwise | Small, 30.0 | 30.0 |
| knowledgeableId | String | ID of the knowledgeable record | Small, 30.0 | 30.0 |
| numEndorsements | Integer | Number of endorsements received by the knowledgeable user for the topic | Medium, 30.0 | 30.0 |
| reasons | String[] | Reason why the user is considered knowledgeable about the topic.Influential—User was mentioned in posts or in comments on posts with the topic or received likes on comments on posts with the topic.Endorsed—User received endorsement from another user for the topic. | Medium, 30.0 | 30.0 |
| topic | Topic | Topic that the user is knowledgeable about | Small, 30.0 | 30.0 |

#### See Also

-   [Topics People Are Knowledgeable About Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_topics_knowledgeable_about_collection.htm "A collection of topics people are knowledgeable about response bodies.")

## Related Topics

- Topic (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_topics.htm)
- Topics People Are Knowledgeable About Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_topics_knowledgeable_about_collection.htm)
