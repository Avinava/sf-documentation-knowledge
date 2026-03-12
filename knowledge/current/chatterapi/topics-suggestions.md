---
title: "Topics Suggestions"
domain: chatterapi
topic: topics-suggestions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.770Z
estimatedTokens: 304
keywords: [Topics, Suggestions, topic, text, feed, item, record]
---

# Topics Suggestions

> Get a list of topic suggestions for a string of text, feed
   item, or record.

# Topics Suggestions

Get a list of topic suggestions for a string of text, feed item, or record.

Resource

```

```

```

```

Available since version

29.0

In version 28.0, use /chatter/topics/suggestions.

HTTP methods

GET or HEAD

Request parameters

| Parameter Name | Values | Description | Required or Optional |
| --- | --- | --- | --- |
| maxResults | Integer | Maximum number of topic suggestions that get returned. The default is 5. Value must be greater than 0 and less than or equal to 25. | Optional |
| recordId | String | 18-character ID of a feed item or record from which to extract topics. Administrators must enable topics for objects to see topic suggestions for records of that object type. Topics for objects is available in version 30.0. | Required if the text parameter isn’t used |
| text | String | Text from which to extract topics. | Required if the recordId parameter isn’t used |

Response body

[Topic Suggestion Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_topics_suggestion_collection.htm "Topic suggestion collection.")

Example for GET

This example gets topic suggestions for the text “Working on the planning meeting for our new initiative.”

```

```

## Code Examples

```
/connect/topics/suggestions
```

```
/connect/communities/communityId/topics/suggestions
```

```
/connect/topics/suggestions?text=Working+on+the+planning+meeting+for+our+new+initiative.
```

## Related Topics

- Topic Suggestion
            Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_topics_suggestion_collection.htm)
