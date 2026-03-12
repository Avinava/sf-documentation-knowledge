---
title: "ApexUnexpectedExcpEventLog"
domain: object-reference
topic: apexunexpectedexcpeventlog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:04.610Z
estimatedTokens: 683
keywords: [ApexUnexpectedExcpEventLog, Apex, Unexpected, Excp, Event, Log, captures, exceptions, code, execution, API, version, 61.0, later, Calls]
---

# ApexUnexpectedExcpEventLog

> Apex Unexpected Excp Event Log captures information about unexpected
         exceptions in Apex code execution. This object is available in API version 61.0 and
      later.

# ApexUnexpectedExcpEventLog

Apex Unexpected Excp Event Log captures information about unexpected exceptions in Apex code execution. This object is available in API version 61.0 and later.

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
| ExceptionCategory | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe category of the unexpected Apex exception. For example, the LimitException exception type is split into subcategories that indicate if you exceeded a limit, such as the total heap size or CPU time. Possible values:Subcategories of LimitException that indicate the Apex limit you’ve exceeded. Examples:LimitException: CpuTime: Maximum CPU time on the Salesforce servers.LimitException: HeapSize: Total heap sizeLimitException: Queries: Total number of SOQL queries issued.LimitException: QueryRows: Total number of records retrieved by SOQL queries.LimitException: DmlStatements: Total number of DML statements issued.LimitException: Callouts: Total number of callouts (HTTP requests or web services calls) in a transaction. |
| ExceptionMessage | TypestringPropertiesFilter, Nillable, SortDescriptionThe exception message for a SOAP API request. An exception message gives details about errors in handling an API request, such as why an API request failed. For example: common.exception.ApiException: startDate cannot be more than 30 days ago. |
| ExceptionType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe class type of the unexpected exception. For example: System.MathException |
| RequestIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same RequestIdentifier. For example: 3nWgxWbDKWWDIk0FKfF5DV. |
| StackTrace | TypestringPropertiesFilter, Nillable, SortDescriptionThe stack trace for the exception. For example: Class.OpportunityUtility.insert: line 22, column 1 AnonymousBlock: line 1, column 1 |
| Timestamp | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe access time of Salesforce services in GMT. For example, 2020-01-20T19:12:26.965Z. Milliseconds are the most granular setting. |
