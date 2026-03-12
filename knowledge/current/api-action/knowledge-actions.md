---
title: "Knowledge Actions"
domain: api-action
topic: knowledge-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.134Z
estimatedTokens: 2206
keywords: [Knowledge, Actions, Manage, articles, invocable, REST, HTTP, Archive, Assign, Draft, Online, Article, Publish, Restore, Version]
---

# Knowledge Actions

> Manage your Knowledge articles using invocable
    actions.

# Knowledge Actions

Manage your Knowledge articles using invocable actions.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_action)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

The Assign and Publish actions are available in API version 44.0 and later. All the other actions are available in API version 45.0 and later.

Lightning Knowledge must be set up in your org. The user must have permissions to manage articles.

You can use multiple inputs to an invocable action. This technique is useful for actions that don’t take lists, such as restoreKnowledgeArticleVersion.

## Supported REST HTTP Methods

URIs

[Archive Knowledge articles](#archiveKnowledgeArticles):

/services/data/vXX.X/actions/standard/archiveKnowledgeArticles

[Assign Knowledge articles](#assignKnowledgeArticles):

/services/data/vXX.X/actions/standard/assignKnowledgeArticles

[Create draft from online Knowledge articles](#createDraftFromOnlineKnowledgeArticle):

/services/data/vXX.X/actions/standard/createDraftFromOnlineKnowledgeArticle

[Delete Knowledge articles](#deleteKnowledgeArticles):

/services/data/vXX.X/actions/standard/deleteKnowledgeArticles

[Publish Knowledge articles](#publishKnowledgeArticles):

/services/data/vXX.X/actions/standard/publishKnowledgeArticles

[Restore Knowledge article version](#restoreKnowledgeArticleVersion):

/services/data/vXX.X/actions/standard/restoreKnowledgeArticleVersion

[Retrieve Smart Link URL](#getArticleSmartLinkUrl):

/services/data/vXX.X/actions/standard/getArticleSmartLinkUrl

[Submit Knowledge article for translation](#submitKnowledgeArticleForTranslation):

/services/data/vXX.X/actions/standard/submitKnowledgeArticleForTranslation

Formats

JSON, XML

HTTP Methods

GET, HEAD, POST

Authentication

Authorization: Bearer token

Other Information

[Error Response Types](#error_response_types)

## Archive Knowledge Articles

URI: /services/data/vXX.X/actions/standard/archiveKnowledgeArticles

| Input | Details |
| --- | --- |
| articleVersionIdList | TypestringDescriptionRequired. Comma-separated article version ID list. |

Sample Input

The following code sample archives two articles:

```

```

Sample Output

The following code sample illustrates a response after a successful request.

```

```

The following code sample illustrates a response with one success and one failure:

```

```

## Assign Knowledge Articles

URI: /services/data/vXX.X/actions/standard/assignKnowledgeArticles

| Input | Details |
| --- | --- |
| articleVersionIdList | TypestringDescriptionRequired. Comma-separated article version ID list. |
| assigneeId | TypeIDDescriptionRequired. ID of the assigned user. |
| assignAction | TypestringDescriptionRequired. Assign action. Valid actions are:ASSIGN_DRAFT_MASTERASSIGN_DRAFT_TRANSLATION |
| dueDate | TypestringDescriptionOptional. Assigned due date. |
| instruction | TypestringDescriptionOptional. Instructions for the assignee. |
| sendEmailNotification | TypebooleanDescriptionOptional. Indicates whether to send an email notification. Defaults to false. |

Sample Input

The following code sample assigns two articles for translation:

```

```

Sample Output

The following code sample illustrates a response after a successful request.

```

```

## Create Draft from Online Knowledge Article

URI: /services/data/vXX.X/actions/standard/createDraftFromOnlineKnowledgeArticle

| Input | Details |
| --- | --- |
| action | TypestringDescriptionRequired. Edit action for primary language or translation articles. Valid actions are:EDIT_AS_DRAFT_ARTICLEEDIT_AS_DRAFT_TRANSLATION |
| unpublish | TypebooleanDescriptionRequired. Indicates whether to keep the article published (false) or archive the published article (true). Use false to keep the current article version online and create a draft. Use true to archive the current online version, which removes it from the knowledge base, and creates a draft. |
| articleVersionId | TypestringDescriptionArticle version ID. Required to create a draft from an online (published) translation. Optional to create a draft from the online primary article if the Article ID is provided. |
| articleId | TypestringDescriptionArticle ID. Required when creating a draft from the online (published) primary article if the Article Version ID isn’t provided. |

Sample Input

The following code sample creates a draft from a primary article and archives the original article:

```

```

Sample Output

The following code sample illustrates a response after a successful request.

```

```

## Delete Knowledge Articles

URI: /services/data/vXX.X/actions/standard/deleteKnowledgeArticles

| Input | Details |
| --- | --- |
| articleVersionIdList | TypestringDescriptionRequired. Comma-separated article version ID list. |

Sample Input

The following code sample deletes two articles:

```

```

Sample Output

The following code sample illustrates a response after a successful request.

```

```

## Publish Knowledge Articles

URI: /services/data/vXX.X/actions/standard/publishKnowledgeArticles

| Input | Details |
| --- | --- |
| articleVersionIdList | TypestringDescriptionRequired. Comma-separated article version ID list. |
| pubAction | TypestringDescriptionRequired. Publish action. Valid actions are:PUBLISH_ARTICLE (which replaces the latest version)PUBLISH_ARTICLE_NEW_VERSION (which creates a new version)SCHEDULE_ARTICLE_FOR_PUBLICATIONPUBLISH_TRANSLATION |
| pubDate | TypestringDescriptionOptional. Scheduled publish date in ISO 8601 format yyyy-MM-dd\'T\'HH:mm:ss.SSSZ. For example, for February 8, 2023, 1:40 pm UTC+01:00 use 2023-02-08T13:40:00.000+0100. |

Sample Input

The following code sample publishes two articles:

```

```

Sample Output

The following code sample illustrates a response after a successful request.

```

```

## Restore Knowledge Article Version

URI: /services/data/vXX.X/actions/standard/restoreKnowledgeArticleVersion

| Input | Details |
| --- | --- |
| action | TypestringDescriptionRequired. The only valid action is: RESTORE_KNOWLEDGE_ARTICLE_VERSION |
| articleId | TypestringDescriptionRequired. Article ID. |
| versionNumber | TypeintegerDescriptionOptional. Version number of the archived article version to restore. Default is the latest archived version. |

Sample Input

The following code restores the latest archived version:

```

```

The following code restores a past archived version of a published article:

```

```

The following code restores two archived articles:

```

```

Sample Output

The following code sample illustrates a response after a successful request.

```

```

## Retrieve Smart Link URL

URI: /services/data/vXX.X/actions/standard/getArticleSmartLinkUrl

| Input | Details |
| --- | --- |
| articleVersionId | TypestringDescriptionRequired. The ID of the Knowledge article version. |

Sample Input

The following code sample retrieves the SmartLink URL of a Knowledge article version:

```

```

Sample Output

The following code sample illustrates a response after a successful request.

```

```

## Submit Knowledge Article for Translation

URI: /services/data/vXX.X/actions/standard/submitKnowledgeArticleForTranslation

| Input | Details |
| --- | --- |
| articleId | TypestringDescriptionRequired. Article ID. |
| language | TypestringDescriptionRequired. Language code for the translation. |
| assigneeId | TypeIDDescriptionRequired. ID of the assigned user. |
| dueDate | TypestringDescriptionOptional. Assigned due date. |
| sendEmailNotification | TypebooleanDescriptionOptional. Indicates whether to send an email notification. Defaults to false. |

| Output | Details |
| --- | --- |
| articleId | TypeIDDescriptionArticle ID. |
| language | TypestringDescriptionLanguage code for the translation. |

Sample Input

The following code sample submits one article for translation into Spanish:

```

```

Sample Output

The following code sample illustrates a response after a successful request.

```

```

## Error Response Types

Knowledge actions can respond with two types of error responses: action-scoped errors and item-scoped errors.

Action-scoped errors describe an error about the overall action that you’re trying to invoke. Action-scoped errors have a statusCode in addition to a message. This example illustrates an action-scoped error caused by sending invalid input values.

```

```

Item-scoped errors describe a problem with a specific article or article version within the action. For example, this code illustrates an archiveKnowledgeArticles action response with one failed item and one successful item.

```

```

If any type of error occurs with an action, the isSuccess field is false.

## Code Examples

```
{ 
  "inputs" : [
    {
      "articleVersionIdList" : [ "ka0RM00000004VeYAI", "ka0RM00000003doYAA" ]
    }
  ]
}
```

```
[ {
  "actionName" : "archiveKnowledgeArticles",
  "errors" : null,
  "isSuccess" : true,
  "outputValues" : {
    "ka0RM00000004Ve" : "Success",
    "ka0RM00000003do" : "Success"
  }
} ]
```

```
[ {
  "actionName" : "archiveKnowledgeArticles",
  "errors" : null,
  "isSuccess" : false,
  "outputValues" : {
    "ka0RM00000004Ve" : "You can't perform this action. Be sure the action is valid for the current state of the article, and that you have permission to perform it.",
    "ka0RM00000003do" : "Success"
  }
} ]
```

```
{ 
  "inputs" : [
    {
      "articleVersionIdList" : [ "ka0RM00000004VeYAI", "ka0RM00000003doYAA" ]
      "assigneeId" : "005RM00000AAAAAYA4",
      "assignAction" : "ASSIGN_DRAFT_TRANSLATION"
    }
  ]
}
```

```
[ {
  "actionName" : "assignKnowledgeArticles",
  "errors" : null,
  "isSuccess" : true,
  "outputValues" : {
    "ka0RM00000004Ve" : "Success",
    "ka0RM00000003do" : "Success"
  }
} ]
```
