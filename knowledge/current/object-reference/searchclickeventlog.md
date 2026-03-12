---
title: "SearchClickEventLog"
domain: object-reference
topic: searchclickeventlog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:16.698Z
estimatedTokens: 493
keywords: [SearchClickEventLog, Search, Click, Event, Log, user’s, interaction, results, API, version, 61.0, later, Calls, Special, Access]
---

# SearchClickEventLog

> Search Click Event Log contains details about the user’s interaction with the
         search results. This object is available in API version 61.0 and later.

# SearchClickEventLog

Search Click Event Log contains details about the user’s interaction with the search results. This object is available in API version 61.0 and later.

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
| ClickedRecordIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the result the user clicked in the search results page. |
| QueryIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionUnique ID of the search query. |
| Rank | TypeintPropertiesFilter, Group, Nillable, SortDescriptionRanking of the result clicked in the search results page. |
| RequestIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same RequestIdentifier. For example: 3nWgxWbDKWWDIk0FKfF5DV. |
| Timestamp | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe access time of Salesforce services in GMT. For example, 2020-01-20T19:12:26.965Z. Milliseconds are the most granular setting. |
| UserIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the user who’s using Salesforce services through the UI or the API. For example: 00530000009M943. |

## Usage

All searches within the app, including Experience Cloud sites, are included. However, unauthenticated guest users don’t have a unique Salesforce user ID.
