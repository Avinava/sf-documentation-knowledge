---
title: "Topics, Knowledgeable People List"
domain: chatterapi
topic: topics-knowledgeable-people-list
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.743Z
estimatedTokens: 214
keywords: [Topics, Knowledgeable, People, topic]
---

# Topics, Knowledgeable People List

> People who are knowledgeable
about topics. Get a list of knowledgeable people for the specified
topic.

# Topics, Knowledgeable People List

People who are knowledgeable about topics. Get a list of knowledgeable people for the specified topic.

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

GET or HEAD

Request parameters

| Parameter Name | Values | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| page | Integer | An integer greater than 0 specifying a page of topics. The default value is zero. | Optional | 30.0 |
| pageSize | Integer | Specifies the number of items per page. Valid values are between 1 and 100. The default value is 25. | Optional | 30.0 |

Response body

[Knowledgeable People Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_topics_knowledgeable_collection.htm "A collection of knowledgeable people response bodies.")

## Code Examples

```
/connect/topics/topicId/knowledgeable-users
```

```
/connect/communities/communityId/topics/topicId/knowledgeable-users
```

## Related Topics

- Knowledgeable People
              Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_topics_knowledgeable_collection.htm)
