---
title: "Submit an Article for Translation"
domain: knowledge-dev
topic: submit-an-article-for-translation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:41.489Z
estimatedTokens: 262
keywords: [Submit, Article, Translation, Submits, multiple, languages, blocks, translations, inactive]
---

# Submit an Article for Translation

> Submits an article for translation for multiple languages and blocks
   translations for inactive languages.

# Submit an Article for Translation

Submits an article for translation for multiple languages and blocks translations for inactive languages.

## Syntax

URI

```

```

Available since release

25.0

Some parameters are supported in API versions 43.0 and higher.

Formats

JSON, XML

HTTP Method

POST

Authentication

Authorization: OAuth **accesstoken**

Parameters

| Parameter | Description | Available |
| --- | --- | --- |
| articleID | String. Required. The ID of the article. | 25.0 |
| assignments | JSON Array. An array of assignment details. Each assignment is a list with these properties:language: Required. A language code.assigneeId: A user Id or queue Id.dueDate: The date that the task is due.If you use this parameter, don’t use the language parameter. | 43.0 |
| language | String. A language code.If you use this parameter, don’t use the assignments parameter. | 25.0-42.0 |
| sendEmailNotification | Boolean. Specifies whether to send an email to the assignee (true) or not (false). | 43.0 |

Example Request Body

```

```

## Code Examples

```
/knowledgeManagement/articleVersions/translations
```

```
{
   "articleId":"kA0xx00000000BO",
   "assignments":[
      {
         "language":"sq",
         "assigneeId":"005xx000001T7MF",
         "dueDate":""
      },
      {
         "language":"zh_CN",
         "assigneeId":"005xx000001T7MF",
         "dueDate":""
      }
   ],
   "sendEmailNotification":true
}
```
