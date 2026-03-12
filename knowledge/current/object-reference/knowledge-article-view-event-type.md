---
title: "Knowledge Article View Event Type"
domain: object-reference
topic: knowledge-article-view-event-type
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:09.263Z
estimatedTokens: 690
keywords: [Knowledge, Article, View, Event, events, contain, user, activity, base]
---

# Knowledge Article View Event Type

> Knowledge Article View events contain user activity with your
         knowledge base.

# Knowledge Article View Event Type

Knowledge Article View events contain user activity with your knowledge base.

For details about event monitoring, see the [Trailhead Event Monitoring module](https://trailhead.salesforce.com/en/modules/event_monitoring/units/event_monitoring_intro "HTML (New Window)") or [REST API Developer’s Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/using_resources_event_log_files.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| ARTICLE_ID | TypeIdDescriptionThe 15-character ID of the article.For example: 00Dxx0000001gEb. |
| ARTICLE_STATUS | TypeCharacterDescriptionPossible values are:D—DraftO—OnlineA—Archived |
| ARTICLE_VERSION | TypeNumberDescriptionArticle version number.For example: 2. |
| ARTICLE_VERSION_ID | TypeIdDescriptionThe 15-character ID of the article version.For example: ka0R00000005rt6. |
| CONTEXT | TypeStringDescriptionContext of the request.DescriptionPossible values are:ApexAPIempty string |
| ENTITY | TypeStringDescriptionEntity requested.For example: Knowledge__kav. |
| EVENT_TYPE | TypeStringDescriptionThe type of event. The value is always KnowledgeArticleView. |
| LANGUAGE | TypeStringDescriptioniso-code of the language.For example: en_US/Example |
| LARGE_LANGUAGE_MODEL | TypeStringDescriptionThe name of the large language model (LLM) that generated the knowledge article version. |
| LAST_VERSION | TypeBooleanDescriptionTrue if it is the last version.Possible values are:TrueFalse |
| ORGANIZATION_ID | TypeIdDescriptionThe 15-character ID of the organization.For example: 00D000000000123. |
| REQUEST_ID | TypeStringDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same REQUEST_ID.For example: 3nWgxWbDKWWDIk0FKfF5DV. |
| SESSION_ID | TypeStringDescriptionSession ID of the request.For example: gV7pCSW2vGaaJNFi3GSpuPIjNbKVbSxRvx34LJsIvuc=.Example |
| TIMESTAMP | TypeStringDescriptionThe access time of Salesforce services in GMT.For example: 20130715233322.670. |
| TIMESTAMP_DERIVED | TypeDateTimeDescriptionThe access time of Salesforce services in ISO8601-compatible format (YYYY-MM-DDTHH:MM:SS.sssZ).For example: 2015-07-27T11:32:59.555Z. The timezone is GMT. |
| USER_ID | TypeIdDescriptionThe 15-character ID of the user who’s using Salesforce services through the UI or the API.For example: 00530000009M943 |
| USER_ID_DERIVED | TypeIdDescriptionThe 18-character case insensitive ID of the user who’s using Salesforce services through the UI or the API.For example: 00590000000I1SNIA0. |
| USER_TYPE | TypeCharacterDescriptionUser type of the request.Possible values are:A—AppC—Customer PortalP—Partner PortalG—guest |
