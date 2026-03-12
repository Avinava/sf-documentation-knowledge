---
title: "Feed-Items Topics"
domain: chatterapi
topic: feed-items-topics
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.076Z
estimatedTokens: 625
keywords: [Feed-Items, Topics, Add, topic, feed, item, Remove]
---

# Feed-Items Topics

> Add a topic to a feed item. Remove a topic from a
         feed item.

# Feed-Items Topics

Add a topic to a feed item. Remove a topic from a feed item.

Only users with the Assign Topics permission can add or remove existing topics from feed items. Only users with the Create Topics permission can add new topics to feed items.

Resource

```

```

Available versions

28.0–31.0

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=chatterapi)

#### Important

In version 32.0 and later, use [Feed Elements Capability, Topics](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element_capability_topics.htm "Get, delete, and post topics associated with a feed element.").

Requires Chatter

Yes

HTTP methods

DELETE, POST

Request parameter for DELETE

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| topicId | String | ID of an existing topic | Required | 28.0–31.0 |

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
| topicId | String | ID of an existing topic | Required for existing topics if the topicName parameter isn’t used | 28.0–31.0 |
| topicName | String | Name of a new or existing topic, up to 150 characters | Required for new topics; required for existing topics if the topicId parameter isn’t used | 28.0–31.0 |

Response for DELETE

[204: Successful Delete](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.")

Response body for POST

[Topic](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_topics.htm "Topic.")

Example for POST

This example passes the ID of an existing topic in the topidId parameter to associate it with a feed item:

```

```

## Code Examples

```
/chatter/feed-items/feedItemId/topics
```

```
{ "topicName": "W3C"
}
```

```
/chatter/feed-items/0D5D0000000JmiB/topics?topicId=0TOD0000000090r
```

## Related Topics

- Feed Elements Capability, Topics (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element_capability_topics.htm)
- 204: Successful Delete (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
- Topic (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_topics.htm)
