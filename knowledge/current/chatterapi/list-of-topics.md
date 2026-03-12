---
title: "List of Topics"
domain: chatterapi
topic: list-of-topics
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.754Z
estimatedTokens: 650
keywords: [Topics, organization, topic]
---

# List of Topics

> Get information about topics in the organization or create a
   topic.

# List of Topics

Get information about topics in the organization or create a topic.

Resource

```

```

```

```

Available since version

29.0

In version 28.0, use /chatter/topics.

HTTP methods

GET, POST, or HEAD

POST is available in version 36.0 and later.

Request parameters for GET

| Parameter Name | Values | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| exactMatch | Boolean | Use with the q parameter and specify true to find a topic by its exact, case-insensitive name. Specify true and use with the q parameter and the fallBackToRenamed​Topics parameter set to true to find the most recent renamed topic match if there isn’t an exact match. Default value is false. | Optional | 28.0 |
| fallBackTo​RenamedTopics | Boolean | Use with the q parameter and the exactMatch parameter set to true. If an exact match isn’t found and fallBackToRenamed​Topics is set to true, the most recent renamed topic match is returned. If there are multiple renamed topic matches, only the most recent is returned. If there are no renamed topic matches, an empty collection is returned. | Optional | 35.0 |
| page | Integer | An integer greater than 0 specifying a page of topics. The default value is zero. | Optional | 28.0 |
| pageSize | Integer | Specifies the number of items per page. Valid values are from 1 to 100. The default value is 25. | Optional | 28.0 |
| q | String | A query string to filter the results. The string must contain at least two characters, not including wildcards. | Optional | 28.0 |
| sort | String | One of the following values:popularDesc—Sorts topics by popularity with the most popular first. This value is the default.alphaAsc—Sorts topics alphabetically. | Optional | 28.0 |

Response body for GET

[Topic Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_topics_collection.htm "Topic collection.")

Example for GET

This example requests a list of topics sorted alphabetically:

```

```

Request body for POST

Root XML tag

<topic>

JSON example

```

```

Properties

| Parameter Name | Type | Description | Available Since |
| --- | --- | --- | --- |
| description | String | Text description of the topic | 36.0 |
| name | String | Name of the topic | 36.0 |

Request parameters for POST

| Parameter Name | Type | Description | Available Since |
| --- | --- | --- | --- |
| description | String | Text description of the topic | 36.0 |
| name | String | Name of the topic | 36.0 |

Response body for POST

[Topic](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_topics.htm "Topic.")

## Code Examples

```
/connect/topics
```

```
/connect/communities/communityId/topics
```

```
/connect/topics?sort=alphaAsc
```

```
{
"description":"World Wide Web Consortium (W3C) is the main international standards organization for the web.",
"name":"W3C"
}
```

## Related Topics

- Topic Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_topics_collection.htm)
- Topic (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_topics.htm)
