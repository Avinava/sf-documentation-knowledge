---
title: "Feed Elements Capability, Topics"
domain: chatterapi
topic: feed-elements-capability-topics
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.268Z
estimatedTokens: 647
keywords: [Feed, Elements, Capability, Topics, post, associated, element]
---

# Feed Elements Capability, Topics

> Get, delete, and post topics associated with a feed
    element.

# Feed Elements Capability, Topics

Get, delete, and post topics associated with a feed element.

Resource

```

```

```

```

Available version

32.0

Requires Chatter

Yes

HTTP methods

GET, DELETE, POST

Request body for POST

Root XML tag

<feedItemTopic>

JSON

The following example attaches a new topic to a feed item:

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| topicId | String | ID of an existing topic | Required for existing topics if the topicName property isn’t used | 29.0 |
| topicName | String | Name of a new or existing topic, up to 150 characters | Required for new topics; required for existing topics if the topicId property isn’t used | 29.0 |

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| topicId | String | ID of an existing topic. | Required for existing topics if the topicName property isn’t used. | 32.0 |
| topicName | String | Name of a new or existing topic, up to 150 characters. | Required for new topics; required for existing topics if the topicId property isn’t used. | 32.0 |

Request parameters for DELETE

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| topicId | String | An existing topic ID. | Required | 32.0 |

Response body for POST

[Topic](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_topics.htm#connect_responses_topics "Topic.")

If the feed element doesn’t support this capability, the response is [404: Not Found](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.").

Response body for GET

[Topics Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_topics_capability.htm#connect_responses_topics_capability "If a feed element has this capability, the context user can add topics to it. Topics help users organize and discover conversations.")

If the feed element doesn’t support this capability, the response is [404: Not Found](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.").

## Code Examples

```
/chatter/feed-elements/feedElementId/capabilities/topics
```

```
/connect/communities/communityId/chatter/feed-elements/feedElementId/capabilities/topics
```

```
{ "topicName": "W3C"
}
```

## Related Topics

- Topic (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_topics.htm)
- 404: Not
            Found (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
- Topics Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_topics_capability.htm)
