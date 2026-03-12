---
title: "Article Summary"
domain: chatterapi
topic: article-summary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.252Z
estimatedTokens: 388
keywords: [Article, Summary, knowledge]
---

# Article Summary

> A knowledge article summary.

# Article Summary

A knowledge article summary.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| articleType | String | Type of the knowledge article. | Small, 37.0 | 37.0 |
| knowledgeArticle​VersionId | String | ID of the knowledge article version. | Small, 39.0 | 39.0 |
| id | String | 18-character ID of the knowledge article. | Small, 37.0 | 37.0 |
| lastPublishedDate | String | Last published date of the knowledge article. Format is ISO 8601. | Small, 37.0 | 37.0 |
| motif | Motif | Small, medium, and large icons indicating that the object is a knowledge article. The motif can also contain the object’s base color.The icon is not a preview of the article. | Small, 37.0 | 37.0 |
| mySubscription | Reference | If the context user is following this article, it contains information about the subscription. Otherwise, it returns null. | Medium, 37.0 | 37.0 |
| name | String | Name of the article. | Small, 37.0 | 37.0 |
| rating | Double | The rating of the article. | Small, 37.0 | 37.0 |
| summary | String | Summary of the knowledge article contents. | Small, 37.0 | 37.0 |
| title | String | Title of the knowledge article. | Small, 37.0 | 37.0 |
| type | String | Value is KnowledgeArticle. | Small, 37.0 | 37.0 |
| url | String | URL to the knowledge article. | Small, 37.0 | 37.0 |
| urlName | String | URL name of the knowledge article. | Small, 37.0 | 37.0 |
| viewCount | Integer | Number of times the knowledge article has been viewed. | Small, 38.0 | 38.0 |

## Related Topics

- Motif (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_motif.htm)
- Reference (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_reference.htm)
