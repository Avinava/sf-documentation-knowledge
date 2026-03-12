---
title: "Topics, Endorse People"
domain: chatterapi
topic: topics-endorse-people
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.734Z
estimatedTokens: 435
keywords: [Topics, Endorse, People, Endorsements, knowledgeable, topic, user]
---

# Topics, Endorse People

> Endorsements on knowledgeable
people for the specified topic. Get endorsements for a specified topic
and endorse a user for the specified topic.

# Topics, Endorse People

Endorsements on knowledgeable people for the specified topic. Get endorsements for a specified topic and endorse a user for the specified topic.

Resource

```

```

```

```

Available since version

30.0

Requires Chatter

Yes

HTTP methods

GET, HEAD, POST

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Since |
| --- | --- | --- | --- | --- |
| endorseeId | String | Specifies the ID of the user who received endorsements. | Optional | 31.0 |
| endorserId | String | Specifies the ID of the user who endorsed others. | Optional | 31.0 |
| page | Integer | An integer greater than 0 specifying a page of endorsements. The default value is zero. | Optional | 30.0 |
| pageSize | Integer | Specifies the number of items per page. Valid values are between 1 and 100. The default value is 25. | Optional | 30.0 |

Request body for POST

Root XML tag

<topicEndorsement>

JSON

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| userId | String | ID of the user to be endorsed for the specified topic. | Required | 30.0 |

Request parameters for POST

| Parameter Name | Type | Description | Available Since |
| --- | --- | --- | --- |
| userId | String | ID of the user to endorse | 30.0 |

Response body for GET

[Topic Endorsement Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_topics_endorsement_collection.htm "A collection of topic endorsement response bodies.")

Response body for POST

[Topic Endorsement](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_topics_endorsement.htm "Represents one user endorsing another user for a single topic.")

## Code Examples

```
/connect/topics/topicId/endorsements
```

```
/connect/communities/communityId/topics/topicId/endorsements
```

```
{ 
   "userId" : "005B0000000Ge16"
}
```

## Related Topics

- Topic Endorsement Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_topics_endorsement_collection.htm)
- Topic Endorsement (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_topics_endorsement.htm)
