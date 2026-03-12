---
title: "Archive the Primary Version of an Article"
domain: knowledge-dev
topic: archive-the-primary-version-of-an-article
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:41.438Z
estimatedTokens: 263
keywords: [Archive, Primary, Version, Article, Archives, actions, defined, change, resource, publishStatus, Archived, schedule, date, archiving, archiveScheduleDate]
---

# Archive the Primary Version of an Article

> Archives the primary version of an article. The actions are defined by the field change
  you request on the resource. To archive the primary version, use "publishStatus":"Archived". To schedule a date for archiving, use "archiveScheduleDate" : <date>.

# Archive the Primary Version of an Article

Archives the primary version of an article. The actions are defined by the field change you request on the resource. To archive the primary version, use "publishStatus":"Archived". To schedule a date for archiving, use "archiveScheduleDate" : <date>.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=knowledge_dev)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

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
| publishStatus | Publishing status of the article. Use archived. |
| archiveScheduleDate | Date to archive the article. |

Input:

Archive:

```

```

Schedule for archiving (using GMT date format):

```

```

Output:

HTTP status code 204 is returned when an existing record is updated.

## Code Examples

```
/services/data/v25.0/knowledgeManagement/articleVersions/masterVersions/<versionID>
```

```
{
      "publishStatus":"Archived"
      }
```

```
{
       "archiveScheduleDate" : "2012-04-19T07:00:00.000+0000"
       }
```
