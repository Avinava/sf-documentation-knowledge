---
title: "ApexExtlCalloutEventLog"
domain: object-reference
topic: apexextlcallouteventlog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:04.463Z
estimatedTokens: 944
keywords: [ApexExtlCalloutEventLog, Apex, Extl, Callout, EventLog, represent, external, data, callouts, via, custom, adapters, Salesforce, Connect, API]
---

# ApexExtlCalloutEventLog

> Apex Extl Callout EventLog represent external data callouts via custom
         adapters for Salesforce Connect. This object is available in API version 61.0 and
      later.

# ApexExtlCalloutEventLog

Apex Extl Callout EventLog represent external data callouts via custom adapters for Salesforce Connect. This object is available in API version 61.0 and later.

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
| Action | TypestringPropertiesFilter, Group, Nillable, SortDescriptionAction performed by the callout. |
| ExecutionTime | TypedoublePropertiesFilter, Nillable, SortDescriptionThe end-to-end Apex execution time in milliseconds. |
| FetchTime | TypedoublePropertiesFilter, Nillable, SortDescriptionDuration (in milliseconds) it takes to retrieve the query results from the external system. |
| IsSuccess | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the query was successful (true) or not (false).The default value is false. |
| Message | TypestringPropertiesFilter, Nillable, SortDescriptionError or warning message associated with the failed call. |
| ObjectType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe type of event. The value is always BulkApi2. |
| QueryFilter | TypestringPropertiesFilter, Group, Nillable, SortDescriptionField expressions to filter the rows to return. Corresponds to WHERE in SOQL queries. |
| QueryLimit | TypedoublePropertiesFilter, Nillable, SortDescriptionMaximum number of rows to return for a query. Corresponds to LIMIT in SOQL queries. |
| QueryOffset | TypedoublePropertiesFilter, Nillable, SortDescriptionNumber of rows to skip when paging through a result set. Corresponds to OFFSET in SOQL queries. |
| QueryOrderBy | TypestringPropertiesFilter, Group, Nillable, SortDescriptionField or column to use for sorting query results, and whether to sort the results in ascending (default) or descending order. Corresponds to ORDER BY in SOQL queries. |
| QuerySelect | TypestringPropertiesFilter, Group, Nillable, SortDescriptionComma-delineated list of fields being queried. Corresponds to SELECT in SOQL queries. |
| RequestIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same RequestIdentifier. For example: 3nWgxWbDKWWDIk0FKfF5DV. |
| RowCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionTotal number of records in the result set. |
| RowsFetched | TypedoublePropertiesFilter, Nillable, SortDescriptionNumber of rows fetched by the callout. |
| Subqueries | TypedoublePropertiesFilter, Nillable, SortDescriptionNumber of subqueries this query has been split into. |
| Throughput | TypedoublePropertiesFilter, Nillable, SortDescriptionNumber of records retrieved in one second. |
| Timestamp | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe access time of Salesforce services in GMT. For example, 2020-01-20T19:12:26.965Z. Milliseconds are the most granular setting. |
| TotalTime | TypedoublePropertiesFilter, Nillable, SortDescriptionHow long it takes (in milliseconds) to prepare and execute the query and to retrieve the query results. |
| UserIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the user who’s using Salesforce services through the UI or the API. For example: 00530000009M943. |
