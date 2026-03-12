---
title: "Publish the Primary Version of an Article"
domain: knowledge-dev
topic: publish-the-primary-version-of-an-article
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:41.462Z
estimatedTokens: 338
keywords: [Publish, Primary, Version, Article, Publishes]
---

# Publish the Primary Version of an Article

> Publishes the primary version of an article.

# Publish the Primary Version of an Article

Publishes the primary version of an article.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=knowledge_dev)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

The publishing actions are defined by the field change you request on the resource. To publish a minor version, use "publishStatus":"Online". To publish a major version, use "publishStatus":"Online" and "versionNumber":"NextVersion". To schedule a publication date, use "publishScheduleDate" : <date>.

## Syntax

URI

```

```

Formats

JSON, XML

HTTP Method

PATCH

Authentication

Authorization: OAuth **accesstoken**

Parameters

| Parameter | Description |
| --- | --- |
| publishStatus | Publishing status of the article. Use online. |
| versionNumber | Version of the article. |
| publishScheduleDate | Date to publish the article in ISO 8601 format YYYY-MM-DDTHH:mm:ss+/-HHmm. For example, for February 8, 2023, 1:40 pm UTC+01:00 use 2023-02-08T13:40:31+0100.. |

Input

Publish a minor version:

```

```

Publish a major version:

```

```

Schedule for publication:

```

```

Output

HTTP status code 204 is returned when an existing record is updated.

## Code Examples

```
/services/data/v25.0/knowledgeManagement/articleVersions/masterVersions/<versionId>
```

```
{
       "publishStatus":"Online"
       }
```

```
{
       "publishStatus":"Online",
       "versionNumber":"NextVersion"
       }
```

```
{
       "publishScheduleDate" : "2012-05-19T07:00:00+0000"
       }
```
