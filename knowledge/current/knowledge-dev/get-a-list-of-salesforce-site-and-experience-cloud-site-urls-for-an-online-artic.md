---
title: "Get a List of Salesforce Site and Experience Cloud Site URLs for an
   Online Article"
domain: knowledge-dev
topic: get-a-list-of-salesforce-site-and-experience-cloud-site-urls-for-an-online-artic
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:41.484Z
estimatedTokens: 252
keywords: [Salesforce, Site, Experience, Cloud, URLs, Online, Article, Sites, visible, knowledge, base, partners, customers, API, creates]
---

# Get a List of Salesforce Site and Experience Cloud Site URLs for an
   Online Article

> Returns a list of article URLs in Salesforce Sites, Experience Cloud sites, or both.
  Article URLs from Salesforce Sites are returned if the article is visible in a public knowledge
  base. Article URLs from Experience Cloud sites are returned if the article is visible to partners
  or customers. This API creates the URLs for the Insert URL into Email
  Lightning action.

# Get a List of Salesforce Site and Experience Cloud Site URLs for an Online Article

Returns a list of article URLs in Salesforce Sites, Experience Cloud sites, or both. Article URLs from Salesforce Sites are returned if the article is visible in a public knowledge base. Article URLs from Experience Cloud sites are returned if the article is visible to partners or customers. This API creates the URLs for the **Insert URL into Email** Lightning action.

The org must have Lightning Knowledge enabled, and **Allow users to share articles via public URLs** enabled in Knowledge Settings. In addition, the API user must have read access on Knowledge.

Available in API versions 46.0 and later.

## Syntax

URI

```

```

Formats

JSON, XML

HTTP Method

GET

Authentication

Authorization: OAuth **accesstoken**

Parameters

| Parameter | Description |
| --- | --- |
| articleId | Either the 15– or 18–digit version of the article version ID. |
| language | Language for the selected article. |

Input

None

## Code Examples

```
/services/data/v46.0/knowledgeManagement/articles/siteListForOnlineArticle?articleId=articleId&language=xx_XX
```
