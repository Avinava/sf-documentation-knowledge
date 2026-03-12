---
title: "Topics on Records Resource"
domain: chatterapi
topic: topics-on-records-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.388Z
estimatedTokens: 853
keywords: [Topics, Records, Resource, assigned, record, feed, item, add, remove, replace, Optionally, suggest, assign, improve, future]
---

# Topics on Records Resource

> Get information about topics assigned to a record or feed
         item and add, remove, and replace topics on a record or feed item. Optionally, suggest a
         list of topics to assign to a record or feed item to improve future topic suggestions.
      Only users with the Assign Topics permission can remove topics from records or feed items and
      add existing topics to records or feed items. Only users with the Create Topics permission can
      add new topics to records or feed items. Administrators
         must enable topics for objects before users can add topics to records of that object
         type.

# Topics on Records Resource

Get information about topics assigned to a record or feed item and add, remove, and replace topics on a record or feed item. Optionally, suggest a list of topics to assign to a record or feed item to improve future topic suggestions. Only users with the Assign Topics permission can remove topics from records or feed items and add existing topics to records or feed items. Only users with the Create Topics permission can add new topics to records or feed items. Administrators must enable topics for objects before users can add topics to records of that object type.

Resource

```

```

```

```

Available since version

30.0

HTTP methods

GET, DELETE, POST, PUT

PUT is supported in version 35.0 and later.

Request parameters for DELETE

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| topicId | String | ID of an existing topic | Required | 30.0 |

Response body for DELETE

[204: Successful Delete](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.")

Request body for POST

Root XML tag

<topicAssignment>

JSON

The following example assigns a topic to a record:

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| topicId | String | ID of an existing topic. | Required for existing topics if the topicName property isn’t used. | 30.0 |
| topicName | String | Name of a new or existing topic. | Required for new topics; required for existing topics if the topicId property isn’t used. | 30.0 |

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| topicId | String | ID of an existing topic | Required for existing topics if the topicName parameter isn’t used | 30.0 |
| topicName | String | Name of a new or existing topic | Required for new topics; required for existing topics if the topicId parameter isn’t used | 30.0 |

Response body for POST

[Topic](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_topics.htm#connect_responses_topics "Topic.")

Example for POST

This example passes the ID of an existing topic in the topidId parameter to associate it with an opportunity record:

```

```

Request body for PUT

PUT requests reassign all topics on a record or feed item, that is, replace all assigned topics on a record or feed item with different topics. Optionally, PUT requests can suggest a list of topics to assign to a record or feed item to improve future topic suggestions.

Root XML tag

<topicNamesCollection>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| topicNames | String[] | A list of up to 10 topic names for a feed item or 100 topic names for a record. | Required | 35.0 |
| topicSuggestions | String[] | A list of suggested topics to assign to a record or feed item to improve future topic suggestions. | Optional | 37.0 |

Response body for PUT

[Topic Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_topics_collection.htm "Topic collection.")

## Code Examples

```
/connect/records/recordId/topics
```

```
/connect/communities/communityId/records/recordId/topics
```

```
{ "topicId": "0TOD0000000090r"
}
```

```
POST /connect/records/006D000000CtYBc/topics?topicId=0TOD0000000090r
```

```
{ "topicNames": ["API", "Connect REST API", "ConnectApi"]
}
```

## Related Topics

- 204: Successful Delete (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
- Topic (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_topics.htm)
- Topic Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_topics_collection.htm)
