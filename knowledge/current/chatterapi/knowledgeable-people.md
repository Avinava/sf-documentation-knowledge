---
title: "Knowledgeable People"
domain: chatterapi
topic: knowledgeable-people
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:21.375Z
estimatedTokens: 293
keywords: [Knowledgeable, People, User, topic]
---

# Knowledgeable People

> User that is knowledgeable about a topic.

# Knowledgeable People

User that is knowledgeable about a topic.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| isEndorsedByMe | Boolean | Specifies if the knowledgeable user is endorsed for the topic by the context user, true if so, false otherwise. | Small, 30.0 | 30.0 |
| knowledgeableId | String | ID of the knowledgeable record. | Small, 30.0 | 30.0 |
| numEndorsements | Integer | Number of endorsements received by the knowledgeable user for the topic. | Medium, 30.0 | 30.0 |
| reasons | String | Reason why the user is considered knowledgeable about the topic. Values are:Influential—User was mentioned in posts or in comments on posts with the topic or received likes on comments on posts with the topic.Endorsed—User received endorsement from another user for the topic. | Medium, 30.0 | 30.0 |
| user | User Summary | User that is knowledgeable about the topic. | Small, 30.0 | 30.0 |

#### See Also

-   [Knowledgeable People Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_topics_knowledgeable_collection.htm "A collection of knowledgeable people response bodies.")

## Related Topics

- User Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_summary.htm)
- Knowledgeable People Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_topics_knowledgeable_collection.htm)
