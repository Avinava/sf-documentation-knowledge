---
title: "ApexExecutionEventLog"
domain: object-reference
topic: apexexecutioneventlog
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:04.452Z
estimatedTokens: 1363
keywords: [ApexExecutionEventLog, Apex, Execution, event, logs, contain, classes, API, version, 55.0, later, Calls, Special, Access, Rules]
---

# ApexExecutionEventLog

> Apex Execution event logs contain details about Apex classes that are
         used. This object is available in API version 55.0 and later.

# ApexExecutionEventLog

Apex Execution event logs contain details about Apex classes that are used. This object is available in API version 55.0 and later.

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
| BotIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the bot. |
| BotSessionIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe bot session ID. |
| CalloutTime | TypedoublePropertiesFilter, Nillable, SortDescriptionTime spent waiting on webservice callouts, in milliseconds. |
| ClientIp | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe IP address of the client that’s using Salesforce services. A Salesforce internal IP (such as a login from AppExchange) is shown as “Salesforce.com IP”. If the user’s session context isn't available, this field returns a blank value. |
| CpuTime | TypedoublePropertiesFilter, Nillable, SortDescriptionThe CPU time in milliseconds used to complete the request. This field indicates the amount of activity taking place in the app server layer. |
| DatabaseTotalTime | TypedoublePropertiesFilter, Nillable, SortDescriptionTime (in milliseconds) spent waiting for database processing in aggregate for all operations in the request. Compare this field to CpuTime to determine whether performance issues are occurring in the database layer or in your own code. |
| EntryPoint | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe entry point for this Apex execution. For example, GeneralCloner.cloneAndInsertRecords or VF- /apex/CloneUser. |
| ExecutionTime | TypedoublePropertiesFilter, Nillable, SortDescriptionThe end-to-end Apex execution time (in milliseconds). |
| IsLongRunningRequest | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the request is counted against your org’s concurrent long-running Apex request limit (true) or not (false).Asynchronous Apex jobs (batch, queueable, scheduled, and future), background processes, and bulk API requests are not counted against the concurrent long-running limit. |
| LoginKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe string that ties together all events in a given user’s login session. It starts with a login event and ends with either a logout event or the user session expiring. For example: GeJCsym5eyvtEK2I. |
| PlannerIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the agent planner. |
| Quiddity | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe type of outer execution associated with this event. For example:A–ACS Batch ApexC–Scheduled ApexE–Inbound Email ServiceF–FutureH–Apex RESTI–Invocable ActionK–Quick ActionL–LightningM–Remote ActionP–Bulk Apex jobs running in parallelQ–QueueableR–Synchronous uncategorized (which is where all transactions not specified elsewhere end up)S–QueryLocator Batch Apex (Batch Apex jobs run faster when the start method returns a QueryLocator object that doesn't include related records via a subquery. See Batch Apex Best Practices in Using Batch Apex.)T–Tests ApexV–VisualforceW–SOAP WebservicesX–Execute AnonymousImplementations of the Process.Plugin interface use the quiddity value R. |
| RequestIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same RequestId. For example: 3nWgxWbDKWWDIk0FKfF5DV. |
| RunTime | TypedoublePropertiesFilter, Nillable, SortDescriptionThe amount of time the request took, as measured by SFDC code. |
| SessionKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe user’s unique session ID. You can use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started. For example: d7DEq/ANa7nNZZVD. |
| SoqlQueryCount | TypedoublePropertiesFilter, Nillable, SortDescriptionThe number of SOQL queries that were executed during the event.This value is the aggregate across all namespaces, and can exceed the per-namespace limits. For test executions, the aggregate total value across all test methods executed in the request is used. If you are using this value to track limit consumption, consider filtering out test execution quiddities (indicated by the Quiddity field). |
| Timestamp | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe access time of Salesforce services in GMT. For example, 2020-01-20T19:12:26.965Z. Milliseconds are the most granular setting. |
| Uri | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe URI of the page that’s receiving the request. For example: /home/home.jsp. |
| UserIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe 15-character ID of the user who’s using Salesforce services through the UI or the API. For example: 00530000009M943. |
