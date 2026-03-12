---
title: "ConcurApexLimitEventLog"
domain: object-reference
topic: concurapexlimiteventlog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:06.732Z
estimatedTokens: 642
keywords: [ConcurApexLimitEventLog, Concurrent, Apex, Limit, event, logs, contain, long-running, requests, org, Salesforce, terminated, reaching, org’s, concurrency]
---

# ConcurApexLimitEventLog

> Concurrent Apex Limit event logs contain information about long-running
         concurrent Apex requests in your org that Salesforce terminated after reaching your org’s
         concurrency limit. Requests with an established Apex context that execute for 5 seconds are
         counted towards your org’s limit of concurrent long-running requests. (Asynchronous
         requests don’t count towards the limit.) When the long-running requests exceed the org
         default limit, additional long-running requests are denied. This object is available
      in API version
      61.0
      and later.

# ConcurApexLimitEventLog

Concurrent Apex Limit event logs contain information about long-running concurrent Apex requests in your org that Salesforce terminated after reaching your org’s concurrency limit. Requests with an established Apex context that execute for 5 seconds are counted towards your org’s limit of concurrent long-running requests. (Asynchronous requests don’t count towards the limit.) When the long-running requests exceed the org default limit, additional long-running requests are denied. This object is available in API version 61.0 and later.

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
| RequestCount | TypeintPropertiesFilter, Nillable, SortDescriptionCount of requests with an established Apex context executing for longer than 5 seconds in your org. |
| RequestIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same RequestIdentifier. For example: 3nWgxWbDKWWDIk0FKfF5DV. |
| RequestLimit | TypedoublePropertiesFilter, Nillable, SortDescriptionMaximum count of requests with an established Apex context that can execute for longer than 5 seconds. When RequestCount reaches this limit, then additional long-running Apex requests are terminated. (Asynchronous requests don’t count towards the limit.) See Apex Developer Guide: Lightning Platform Apex Limits. For example: 10. |
| RequestUri | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe URI of the long-running Apex request that Salesforce terminated. For example: /apex/ApexClassName. |
| Timestamp | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe access time of Salesforce services in GMT. For example, 2020-01-20T19:12:26.965Z. Milliseconds are the most granular setting. |
| UserIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe 15-character ID of the user who’s using Salesforce services through the UI or the API. For example: 00530000009M943. |
