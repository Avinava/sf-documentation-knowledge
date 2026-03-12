---
title: "Trending Topics"
domain: chatterapi
topic: trending-topics
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.774Z
estimatedTokens: 366
keywords: [Trending, Topics, top, five, org]
---

# Trending Topics

> Get the top five trending topics for the org.

# Trending Topics

Get the top five trending topics for the org.

The more frequently people add a specific topic to their posts and comments and comment on or like posts with the same topic over a short period of time, the more likely it is to become a trending topic. For example, if your coworkers are attending the upcoming Dreamforce conference and have started discussing it in Chatter, you may see a trending topic for Dreamforce. A trending topic is not solely based on popularity and usually relates to a one-time or infrequent event that has a spike in activity, such as a conference or a project deadline.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

In API versions earlier than 28.0, topics began with a hashtag (#).

Resource

```

```

```

```

Available since version

29.0

In versions 24.0–28.0, use /chatter/topics/trending and /connect/communities/communityId/chatter/topics/trending.

HTTP methods

GET or HEAD

Request parameters

| Parameter Name | Values | Description |
| --- | --- | --- |
| maxResults | Integer | Maximum number of trending topics that get returned. The default is 5. Value must be greater than 0 and less than 100. |

Response body

[Topic Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_topics_collection.htm "Topic collection.")

Example response body (version 28.0 and later)

```

```

Example response body (version 24.0–27.0)

```

```

## Code Examples

```
/connect/topics/trending
```

```
/connect/communities/communityId/topics/trending
```

```
{"currentPageUrl" : "/services/data/v66.0/connect/topics/trending?maxResults=5",
"nextPageUrl" : null,
"topics" : [
   {
      "createdDate": "2013-01-01T20:43:31.000Z",
      "id" : "0TOD0000000090qOAA",
      "description" : "Application Programming Interface",
      "talkingAbout" : 527,
      "name" : "API",
      "url": "/services/data/v66.0/connect/topics/0TOD0000000090qOAA"
   },
   {
      "createdDate": "2012-11-14T05:24:23.000Z",
      "id" : "0TOD000000006RxOAI",
      "description" : "The cloud computing event of the year.",
      "talkingAbout" : 424,
      "name" : "Dreamforce",
      "url": "/services/data/v66.0/connect/topics/0TOD000000006RxOAI"
   },
   {
      "createdDate": "2013-02-25T10:47:51.000Z",
      "id" : "0TOD0000000090rOAA",
      "description" : "All things related to mobile.",
      "talkingAbout" : 87,
      "name" : "Mobile",
      "url": "/services/data/v66.0/connect/topics/0TOD0000000090rOAA"
   }
]}
```

```
{"topics" : [
   {
      "name" : "#API"
   },
   {
      "name" : "#Dreamforce"
   },
   {
      "name" : "#Mobile"
   }
]}
```

## Related Topics

- Topic Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_topics_collection.htm)
