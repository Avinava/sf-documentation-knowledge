---
title: "Bulk API 2.0 Event Type"
domain: object-reference
topic: bulk-api-20-event-type
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:08.991Z
estimatedTokens: 1288
keywords: [Bulk, API, 2.0, Event, BulkApi2, events, contain, requests]
---

# Bulk API 2.0 Event Type

> BulkApi2 events contain details about Bulk API 2.0 requests.

# Bulk API 2.0 Event Type

BulkApi2 events contain details about Bulk API 2.0 requests.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

This event type does not include Bulk API requests. For information about the BulkApi event type, see [Bulk API Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_bulkapi.htm "Bulk API events contain details about Bulk API requests.").

You can monitor the following Bulk API 2.0 parameters:

-   The type of data processed via Bulk API 2.0 operations, and how much of that data was processed.
-   Bulk API 2.0 limits.
-   For jobs, track how long it takes to complete, database, and CPU usage.
-   Understand users and the operations they performed.
-   Detailed errors and failures.

BulkApi2 events represent the steps in the Bulk API 2.0 workflow and changes in job state.

For a Bulk API 2.0 **Ingest** job, an event is emitted when a job is marked:

-   created
    -   Note: For multi-part requests, there is no “created” event emitted, only an uploadComplete event.
-   uploadComplete
-   inProgress
-   with a processing update
-   complete
-   aborted
-   deleted

For a Bulk API 2.0 **Query** job, an event is emitted when a job is marked:

-   created
-   uploadComplete
-   inProgress
-   with a processing update
-   complete
-   aborted
-   deleted

For details about event monitoring, see the [Trailhead Event Monitoring module](https://trailhead.salesforce.com/en/modules/event_monitoring/units/event_monitoring_intro "HTML (New Window)") or [REST API Developer’s Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/using_resources_event_log_files.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| CLIENT_IP | TypeStringDescriptionThe IP address of the client that’s using Salesforce services. A Salesforce internal IP (such as a login from AppExchange) is shown as “Salesforce.com IP”.For example: 96.43.144.26. |
| CPU_TIME | TypeNumberDescriptionThe CPU time in milliseconds used to complete the request. This field indicates the amount of activity taking place in the app server layer. |
| ENTITY_TYPE | TypeStringDescriptionThe type of entity that Bulk API 2.0 used.For example, Account or Contact. |
| EVENT_TYPE | TypeStringDescriptionThe type of event. The value is always BulkApi2. |
| JOB_ID | TypeStringDescriptionThe 15-character ID of the Bulk API 2.0 job. |
| JOB_STATUS | TypeStringDescriptionThe job’s current status. |
| LOGIN_KEY | TypeStringDescriptionThe string that ties together all events in a given user’s login session. It starts with a login event and ends with either a logout event or the user session expiring.For example: GeJCsym5eyvtEK2I. |
| OPERATION_TYPE | TypeStringDescriptionThe type of Bulk API 2.0 operation that was performed. |
| ORGANIZATION_ID | TypeIdDescriptionThe 15-character ID of the organization.For example: 00D000000000123. |
| RECORDS_FAILED | TypeNumberDescriptionThe total number of records that failed.For example: 150. |
| RECORDS_PROCESSED | TypeNumberDescriptionNumber of records processed for this event.For example: 980.NoteThe number of records processed is reported differently for ingest and query jobs.For ingest jobs:Events with a status of InProgress report (if applicable) the number of records processed.For query jobs:Events with a status of JobComplete or InProgress report (if applicable) the number of records processed. |
| RESULT_SIZE_MB | TypeNumberDescriptionNumber of megabytes returned in query. Empty for ingest jobs.For example: 670.NoteRESULT_SIZE_MB currently does not emit events, but is shown here as a placeholder for future enhancement. |
| REQUEST_ID | TypeStringDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same REQUEST_ID.For example: 3nWgxWbDKWWDIk0FKfF5DV. |
| RUN_TIME | TypeNumberDescriptionThe amount of time that the request took in milliseconds. |
| SESSION_KEY | TypeStringDescriptionThe user’s unique session ID. You can use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started.For example: d7DEq/ANa7nNZZVD. |
| TIMESTAMP | TypeStringDescriptionThe access time of Salesforce services in GMT.For example: 20130715233322.670. |
| TIMESTAMP_DERIVED | TypeDateTimeDescriptionThe access time of Salesforce services in ISO8601-compatible format (YYYY-MM-DDTHH:MM:SS.sssZ).For example: 2015-07-27T11:32:59.555Z. Timezone is GMT. |
| URI | TypeStringDescriptionThe URI of the page that’s receiving the request.For example: /home/home.jsp. |
| URI_ID_DERIVED | TypeIDDescriptionThe 18-character case-safe ID of the URI of the page that’s receiving the request. |
| USER_ID | TypeIdDescriptionThe 15-character ID of the user who’s using Salesforce services through the UI or the API.For example: 00530000009M943 |
| USER_ID_DERIVED | TypeIdDescriptionThe 18-character case-safe ID of the user who’s using Salesforce services through the UI or the API.For example: 00590000000I1SNIA0. |

## Related Topics

- Bulk API Event Type (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_bulkapi.htm)
