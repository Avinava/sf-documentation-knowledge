---
title: "Experience Cloud Site Trending Articles"
domain: chatterapi
topic: experience-cloud-site-trending-articles
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.703Z
estimatedTokens: 160
keywords: [Experience, Cloud, Site, Trending, Articles]
---

# Experience Cloud Site Trending Articles

> Get trending articles for an Experience Cloud site.

# Experience Cloud Site Trending Articles

Get trending articles for an Experience Cloud site.

Resource

```

```

Available version

36.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| maxResults | Integer | The maximum number of articles returned. Values can be from 0 to 25. Default is 5. | Optional | 36.0 |

Response body for GET

[Knowledge Article Version Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_knowledge_article_version_collection.htm "A collection of knowledge article versions.")

## Code Examples

```
/connect/communities/communityId/trending-articles
```

## Related Topics

- Knowledge Article Version Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_knowledge_article_version_collection.htm)
