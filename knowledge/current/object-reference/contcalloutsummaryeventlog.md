---
title: "ContCalloutSummaryEventLog"
domain: object-reference
topic: contcalloutsummaryeventlog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:07.002Z
estimatedTokens: 754
keywords: [ContCalloutSummaryEventLog, Continuation, Callout, Summary, events, contain, asynchronous, callouts, performed, transaction, their, status, codes, execution, times]
---

# ContCalloutSummaryEventLog

> Continuation Callout Summary events contain information about all of the
         asynchronous callouts performed during a transaction, their response status codes,
         execution times, and URL endpoint destinations. This object is available in API
      version 65.0 and later.

# ContCalloutSummaryEventLog

Continuation Callout Summary events contain information about all of the asynchronous callouts performed during a transaction, their response status codes, execution times, and URL endpoint destinations. This object is available in API version 65.0 and later.

## Supported Calls

describeSObjects(), query()

## Special Access Rules

To access this object, you must have the View Event Log Object Data user permission.

## Fields

| Field | Details |
| --- | --- |
| ContinuationIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionA unique ID identifying a sequence of events within a request. |
| Duration | TypedoublePropertiesFilter, Nillable, SortDescriptionTotal duration of continuation, in milliseconds. |
| IsSuccess | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the continuation was successful or not. |
| OriginRequestIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the request that initiated a callout. |
| RequestFormSize | TypestringPropertiesFilter, Group, Nillable, SortDescriptionContinuation request form size, in bytes. Depending on how many HTTP requests were used in a continuation, this field can contain up to three space-separated values. |
| RequestIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same REQUEST_ID. |
| ResponseSize | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe size of the callout response, in bytes. Depending on how many HTTP requests were used in a continuation, this field can contain up to three space-separated values. |
| StatusCode | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe HTTP status or internal code returned by the remote endpoint. A status code of 200 indicates that the request was successful. Other status code values indicate the type of problem that was encountered. Depending on how many HTTP requests were used in a continuation, this field can contain up to three space-separated values. |
| Timestamp | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe access time of Salesforce services in GMT. For example, 20130715233322.670. |
| Url | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe callout endpoint URL. Depending on how many HTTP requests were used in a continuation, this field can contain up to three space-separated values. |
| UserIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe 15-character ID of the user who’s using Salesforce services through the UI or the API. For example: 00530000009M943. |
| VisualforceControllerSize | TypestringPropertiesFilter, Group, Nillable, SortDescriptionContinuation Visualforce controller size, in bytes. Depending on how many HTTP requests were used in a continuation, this field can contain up to three space-separated values. |
