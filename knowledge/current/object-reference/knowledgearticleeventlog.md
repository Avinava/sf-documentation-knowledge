---
title: "KnowledgeArticleEventLog"
domain: object-reference
topic: knowledgearticleeventlog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:11.457Z
estimatedTokens: 743
keywords: [KnowledgeArticleEventLog, Knowledge, Article, View, event, logs, contain, user, activity, base, API, version, 61.0, later, Calls]
---

# KnowledgeArticleEventLog

> Knowledge Article View event logs contain user activity with your knowledge
         base. This object is available in API version
      61.0
      and later.

# KnowledgeArticleEventLog

Knowledge Article View event logs contain user activity with your knowledge base. This object is available in API version 61.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

This object stores event data that's queryable from platform APIs. For event data stored in event log files, see [EventLogFile](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm).

## Supported Calls

describeSObjects(), query()

## Special Access Rules

To access this object, you must have the View Event Log Object Data user permission.

## Fields

| Field | Details |
| --- | --- |
| ArticleIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe id of the article. For example: 00Dxx0000001gEb. |
| ArticleStatus | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe status of the article.Possible values are:D—DraftO—OnlineA—Archived |
| ArticleVersion | TypedoublePropertiesFilter, Nillable, SortDescriptionThe article version number. For example: 2. |
| ArticleVersionIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe 15-character ID of the article version. For example: ka0R00000005rt6. |
| Context | TypestringPropertiesFilter, Group, Nillable, SortDescriptionContext of the request. |
| IsLargeLanguageModel | TypestringPropertiesFilter, Group, Nillable, SortDescriptionWhether the article was written with an LLM. |
| IsLastVersion | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionTrue if it is the last version of the article.The default value is false. |
| Language | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ISO code of the language. For example: en_US/ |
| ObjectType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe object requested. For example: Knowledge__kav. |
| RequestIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same RequestIdentifier. For example: 3nWgxWbDKWWDIk0FKfF5DV. |
| SessionIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionSession ID of the request. For example: gV7pCSW2vGaaJNFi3GSpuPIjNbKVbSxRvx34LJsIvuc=. |
| Timestamp | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe access time of Salesforce services in GMT. For example, 2020-01-20T19:12:26.965Z. Milliseconds are the most granular setting. |
| UserIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe 15-character ID of the user who’s using Salesforce services through the UI or the API. For example: 00530000009M943. |
| UserType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionUser type of the request.Possible values are:A—AppC—Customer PortalP—Partner PortalG—Guest |
