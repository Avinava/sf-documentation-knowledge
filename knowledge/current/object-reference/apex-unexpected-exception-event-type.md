---
title: "Apex Unexpected Exception Event Type"
domain: object-reference
topic: apex-unexpected-exception-event-type
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:08.913Z
estimatedTokens: 1111
keywords: [Apex, Unexpected, Exception, Event, captures, exceptions, code, execution, EventLogFile, API, version, 45.0, later, captured, @IsTest]
---

# Apex Unexpected Exception Event Type

> The Apex Unexpected Exception event type captures information about
         unexpected exceptions in Apex code execution. This event type is available in the
      EventLogFile object in API version 45.0 and later. Unexpected exception information is not
      captured in the EventLogFile object with @IsTest and
      anonymous Apex.

# Apex Unexpected Exception Event Type

The Apex Unexpected Exception event type captures information about unexpected exceptions in Apex code execution. This event type is available in the EventLogFile object in API version 45.0 and later. Unexpected exception information is not captured in the EventLogFile object with @IsTest and anonymous Apex.

For details about event monitoring, see the [Trailhead Event Monitoring module](https://trailhead.salesforce.com/en/modules/event_monitoring/units/event_monitoring_intro "HTML (New Window)") or [REST API Developer’s Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/using_resources_event_log_files.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| EVENT_TYPE | TypeStringDescriptionThe type of event. The value is always ApexUnexpectedException. |
| EXCEPTION_CATEGORY | TypeStringDescriptionThe category of the unexpected Apex exception. Provides a breakdown of unhandled exceptions based on the type. For example, the LimitException exception type is split into subcategories that indicate if you exceeded a limit, such as the total heap size or CPU time.Possible values:Subcategories of LimitException that indicate the Apex limit you’ve exceeded. Examples:LimitException: CpuTime: Maximum CPU time on the Salesforce servers.LimitException: HeapSize: Total heap size.LimitException: Queries: Total number of SOQL queries issued.LimitException: QueryRows: Total number of records retrieved by SOQL queries.LimitException: DmlStatements: Total number of DML statements issued.LimitException: Callouts: Total number of callouts (HTTP requests or web services calls) in a transaction.See Execution Governors and Limits for other limits.CustomException: Unhandled custom exception.An Apex exception that isn’t limit-related; see Exception Class and Built-In ExceptionsThis field is available in API version 57.0 and later.ExampleLimitException: CpuTime |
| EXCEPTION_MESSAGE | TypeTextDescriptionThe exception’s message.ExampleDivide by 0 |
| EXCEPTION_TYPE | TypeStringDescriptionThe class type of the unexpected exception.ExampleSystem.MathException |
| ORGANIZATION_ID | TypeIdDescriptionThe 15-character ID of the org.For example: 00D000000000123. |
| REQUEST_ID | TypeStringDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same REQUEST_ID.For example: 3nWgxWbDKWWDIk0FKfF5DV. |
| STACK_TRACE | TypeTextDescriptionThe stack trace for the exception.NoteIf the exception is thrown from a managed package, STACK_TRACE is omitted.ExampleClass.OpportunityUtility.insert: line 22, column 1 AnonymousBlock: line 1, column 1 |
| TIMESTAMP | TypeStringDescriptionThe access time of Salesforce services in GMT.For example: 2024-08-08T06:08:02.755+0000. |
| TIMESTAMP_DERIVED | TypeDateTimeDescriptionThe access time of Salesforce services in ISO8601-compatible format (YYYY-MM-DDTHH:MM:SS.sssZ).For example: 2015-07-27T11:32:59.555Z. Timezone is GMT. |
| USER_ID | TypeIdDescriptionThe 15-character ID of the user who’s using Salesforce services through the UI or the API. For example: 00530000009M943. |
| USER_ID_DERIVED | TypeIdDescriptionThe 18-character case-insensitive ID of the user who’s using Salesforce services through the UI or the API.For example: 00590000000I1SNIA0. |

#### See Also

-   [EventLogFile Supported Event Types](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_supportedeventtypes.htm "The EventType field in the EventLogFile object supports these events. Some common fields, such as CPU_TIME and RUN_TIME, can have null or zero values depending on how the events are generated for a given feature. Sometimes, three quotation marks appear around event data containing special characters in the CSV file. The third quotation mark is necessary for tools and applications to parse the field data at the correct field value boundary.")

-   [EventLogFile](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm "Represents event log files for event monitoring. The event monitoring product gathers information about your Salesforce org’s operational events, which you can use to analyze usage trends and user behavior. This object is available in API version 32.0 and later. The Interval and Sequence fields are available only in API version 37.0 and later.")

## Related Topics

- EventLogFile Supported Event Types (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_supportedeventtypes.htm)
- EventLogFile (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm)
