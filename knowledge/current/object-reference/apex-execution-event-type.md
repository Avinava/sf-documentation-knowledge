---
title: "Apex Execution Event Type"
domain: object-reference
topic: apex-execution-event-type
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:08.859Z
estimatedTokens: 1726
keywords: [Apex, Execution, Event, events, contain, classes]
---

# Apex Execution Event Type

> Apex Execution events contain details about Apex classes that are used.

# Apex Execution Event Type

Apex Execution events contain details about Apex classes that are used.

For details about event monitoring, see the [Trailhead Event Monitoring module](https://trailhead.salesforce.com/en/modules/event_monitoring/units/event_monitoring_intro "HTML (New Window)") or [REST API Developer’s Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/using_resources_event_log_files.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| BOT_IDENTIFIER | TypestringDescriptionThe ID of the bot. |
| BOT_SESSION_IDENTIFIER | TypestringDescriptionThe bot session ID. |
| CALLOUT_TIME | TypeNumberDescriptionTime spent waiting on webservice callouts, in milliseconds. |
| CLIENT_IP | TypeStringDescriptionThe IP address of the client that’s using Salesforce services. A Salesforce internal IP (such as a login from AppExchange) is shown as “Salesforce.com IP”. If the user’s session context isn't available, this field returns a blank value. |
| CPU_TIME | TypeNumberDescriptionThe CPU time in milliseconds used to complete the request. This field indicates the amount of activity taking place in the app server layer. |
| DB_TOTAL_TIME | TypeNumberDescriptionTime (in milliseconds) spent waiting for database processing in aggregate for all operations in the request. Compare this field to CPU_TIME to determine whether performance issues are occurring in the database layer or in your own code. |
| ENTRY_POINT | TypeStringDescriptionThe entry point for this Apex execution.ExampleGeneralCloner.cloneAndInsertRecordsVF- /apex/CloneUser |
| EVENT_TYPE | TypeStringDescriptionThe type of event. The value is always ApexExecution. |
| EXEC_TIME | TypeNumberDescriptionThe end-to-end Apex execution time (in milliseconds). |
| IS_LONG_RUNNING_REQUEST | TypeBooleanDescriptionIndicates whether the request is counted against your org’s concurrent long-running Apex request limit (true) or not (false).NoteAsynchronous Apex jobs (batch, queueable, scheduled, and future), background processes, and bulk API requests aren’t counted against the concurrent long-running limit. |
| LOGIN_KEY | TypeStringDescriptionThe string that ties together all events in a given user’s login session. It starts with a login event and ends with either a logout event or the user session expiring.For example: GeJCsym5eyvtEK2I. |
| NUMBER_SOQL_QUERIES | TypeNumberDescriptionThe number of SOQL queries that were executed during the event.This value is the aggregate across all namespaces, and can exceed the per-namespace limits. For test executions, the aggregate total value across all test methods executed in the request is used. If you’re using this value to track limit consumption, consider filtering out test execution quiddities (indicated by the QUIDDITY field). |
| ORGANIZATION_ID | TypeIdDescriptionThe 15-character ID of the organization.For example: 00D000000000123. |
| PLANNER_IDENTIFIER | TypestringDescriptionThe ID of the agent planner. |
| QUIDDITY | TypeStringDescriptionThe type of outer execution associated with this event.ExampleA–ACS Batch ApexB–Bulk API and Bulk API 2.0BA–Start method of a Batch Apex jobC–Scheduled ApexCI–Commerce IntegrationDL– Discoverable Login pageE–Inbound Email ServiceF–FutureFC–Function CallbackH–Apex RESTI–Invocable ActionK–Quick ActionL–LightningM–Remote ActionP–Not used in API version 63.0 and later.PEPC–Platform Event Publish CallbackPI–Post install script for a managed packageQ–QueueableQTXF–Transaction Finalizer for QueueableR–Synchronous uncategorized (which is where all transactions not specified elsewhere end up)S–QueryLocator Batch Apex (Batch Apex jobs run faster when the start method returns a QueryLocator object that doesn't include related records via a subquery. See Batch Apex Best Practices in Using Batch Apex.)TA–Tests AsyncTD–Tests DeploymentTS–Tests SynchronousUD–Undefined is the default when an event hasn’t been assigned a more descriptive quiddity.V–VisualforceW–SOAP WebservicesX–Execute AnonymousNoteImplementations of the Process.Plugin interface use the quiddity value R. |
| REQUEST_ID | TypeStringDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same REQUEST_ID.For example: 3nWgxWbDKWWDIk0FKfF5DV. |
| RUN_TIME | TypeNumberDescriptionThe amount of time that the request took in milliseconds.Requests with a value over five seconds are considered long-running requests for the purposes of the Concurrent Long-Running Apex Limit.NoteHTTP callout processing time isn't included when calculating the 5-second limit. We pause the timer for the callout and resume it when the callout completes. |
| SESSION_KEY | TypeStringDescriptionThe user’s unique session ID. You can use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started.For example: d7DEq/ANa7nNZZVD. |
| TIMESTAMP | TypeStringDescriptionThe access time of Salesforce services in GMT.For example: 20130715233322.670. |
| TIMESTAMP_DERIVED | TypeDateTimeDescriptionThe access time of Salesforce services in ISO8601-compatible format (YYYY-MM-DDTHH:MM:SS.sssZ).For example: 2015-07-27T11:32:59.555Z. Timezone is GMT. |
| URI | TypeStringDescriptionThe URI of the page that’s receiving the request.For example: /home/home.jsp. |
| URI_ID_DERIVED | TypeIDDescriptionThe 18-character case insensitive ID of the URI of the page that’s receiving the request. |
| USER_ID | TypeIdDescriptionThe 15-character ID of the user who’s using Salesforce services through the UI or the API.For example: 00530000009M943 |
| USER_ID_DERIVED | TypeIdDescriptionThe 18-character case insensitive ID of the user who’s using Salesforce services through the UI or the API.For example: 00590000000I1SNIA0. |

#### See Also

-   [EventLogFile Supported Event Types](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_supportedeventtypes.htm "The EventType field in the EventLogFile object supports these events. Some common fields, such as CPU_TIME and RUN_TIME, can have null or zero values depending on how the events are generated for a given feature. Sometimes, three quotation marks appear around event data containing special characters in the CSV file. The third quotation mark is necessary for tools and applications to parse the field data at the correct field value boundary.")

-   [EventLogFile](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm "Represents event log files for event monitoring. The event monitoring product gathers information about your Salesforce org’s operational events, which you can use to analyze usage trends and user behavior. This object is available in API version 32.0 and later. The Interval and Sequence fields are available only in API version 37.0 and later.")

## Related Topics

- EventLogFile Supported Event Types (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_supportedeventtypes.htm)
- EventLogFile (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm)
