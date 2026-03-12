---
title: "SearchEventLog"
domain: object-reference
topic: searcheventlog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:16.705Z
estimatedTokens: 511
keywords: [SearchEventLog, Search, Event, Log, user’s, query, API, version, 61.0, later, Calls, Special, Access, Rules, Usage]
---

# SearchEventLog

> Search Event Log provides details about the user’s search query. This
      object is available in API version 61.0 and later.

# SearchEventLog

Search Event Log provides details about the user’s search query. This object is available in API version 61.0 and later.

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
| PrefixesSearched | TypestringPropertiesFilter, Group, Nillable, SortDescriptionA space-delineated list of key prefixes that are searched. |
| QueryIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionUnique ID of the search query. |
| RequestIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same RequestIdentifier. For example: 3nWgxWbDKWWDIk0FKfF5DV. |
| ResultCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionNumber of results returned by the search query. |
| SearchQuery | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe first 100 characters of the search query. |
| Timestamp | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe access time of Salesforce services in GMT. For example, 2020-01-20T19:12:26.965Z. Milliseconds are the most granular setting. |
| UserIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the user who’s using Salesforce services through the UI or the API. For example: 00530000009M943. |

## Usage

All searches within the app, including Experience Cloud sites, are included. However, unauthenticated guest users don’t have a unique Salesforce user ID.
