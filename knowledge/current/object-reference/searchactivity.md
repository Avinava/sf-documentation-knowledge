---
title: "SearchActivity"
domain: object-reference
topic: searchactivity
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:16.694Z
estimatedTokens: 691
keywords: [SearchActivity, search, activity, Knowledge, article, known, KnowledgeSearchActivity, API, version, 38.0, later, Calls, Special, Access, Rules]
---

# SearchActivity

> Represents search activity on a Knowledge article. Also known as
         KnowledgeSearchActivity. This object is available in API version 38.0 and later.

# SearchActivity

Represents search activity on a Knowledge article. Also known as KnowledgeSearchActivity. This object is available in API version 38.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

The Knowledge Base Search Dashboard permission must be enabled in your org.

## Fields

| Field | Details |
| --- | --- |
| AvgNumResults | TypedoublePropertiesFilter, SortDescriptionThe number of search results returned for the search term. If Period is also included, this value is aggregated based on the time period specified. |
| ClickRank | TypedoublePropertiesFilter, Nillable, SortDescriptionThe order that the article appeared in the search results when the user sorted the results by relevance and clicked it from the list of results. |
| ClickedRecordId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the clicked article.This field is a polymorphic relationship field.Relationship NameClickedRecordRelationship TypeLookupRefers ToKnowledge__kav |
| ClickedRecordName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe title of the clicked article taken when the user sorts the search results by relevance. |
| CountQueries | TypeintPropertiesFilter, Group, SortDescriptionThe number of searches for the period (day, month, or year). |
| CountUsers | TypeintPropertiesFilter, Group, SortDescriptionThe number of individual users who clicked the article. |
| KbChannel | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe channel that’s applicable to the article.Possible values are:AllChannels—All ChannelsApp—Internal AppCsp—CustomerPkb—Public Knowledge BasePrm—Partner |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of search activity. |
| Period | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe time period that the search count is applied to. For example, a record where the Count is 70 and the Period is Monthly indicates that 70 searches took place over the past month. Totals are aggregated daily for the current month, monthly from the past full month through the past full year, and yearly beyond that.Activity totals are collected nightly and aren’t in real time.Possible values are:DAYMONTHYEAR |
| QueryDate | TypedatePropertiesFilter, Group, SortDescriptionThe date of the search. |
| QueryLanguage | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe language filter that’s applied to the user’s search. |
| SearchTerm | TypestringPropertiesFilter, Group, SortDescriptionThe first 100 characters of the search term that was used to search published articles in the knowledge base. |
