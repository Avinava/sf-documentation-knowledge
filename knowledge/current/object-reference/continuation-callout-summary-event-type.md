---
title: "Continuation Callout Summary Event Type"
domain: object-reference
topic: continuation-callout-summary-event-type
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:09.085Z
estimatedTokens: 1233
keywords: [Continuation, Callout, Summary, Event, events, contain, asynchronous, callouts, performed, transaction, their, status, codes, execution, times]
---

# Continuation Callout Summary Event Type

> Continuation Callout Summary events contain information about all of
   the asynchronous callouts performed during a transaction, their response status codes, execution
   times, and URL endpoint destinations. This event type is available in the EventLogFile
  object in API version 43.0 and later.

# Continuation Callout Summary Event Type

Continuation Callout Summary events contain information about all of the asynchronous callouts performed during a transaction, their response status codes, execution times, and URL endpoint destinations. This event type is available in the EventLogFile object in API version 43.0 and later.

For details about event monitoring, see the [Trailhead Event Monitoring module](https://trailhead.salesforce.com/en/modules/event_monitoring/units/event_monitoring_intro "HTML (New Window)") or the [REST API Developer’s Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/using_resources_event_log_files.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| CONTINUATION_ID | TypeStringDescriptionA unique ID identifying a sequence of events within a request.ExampleSFDC-Continuation-14e3cg85-961d-389e-7bz1-3d171543162a |
| DURATION | TypeNumberDescriptionTotal duration of continuation, in milliseconds. |
| EVENT_TYPE | TypeStringDescriptionThe type of event. The value is always ContinuationCalloutSummary. |
| ORGANIZATION_ID | TypeIdDescriptionThe 15-character ID of the organization.For example: 00D000000000123. |
| ORIGIN_REQUEST_ID | TypeIdDescriptionThe ID of the request that initiated a callout.ExampleTID:5ILoVKlztX_rDDJcp7 |
| REQUEST_FORM_SIZE | TypeStringDescriptionContinuation request form size, in bytes. Depending on how many HTTP requests were used in a continuation, this field can contain up to three space-separated values. |
| REQUEST_ID | TypeStringDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same REQUEST_ID.For example: 3nWgxWbDKWWDIk0FKfF5DV. |
| RESPONSE_SIZE | TypeStringDescriptionThe size of the callout response, in bytes. Depending on how many HTTP requests were used in a continuation, this field can contain up to three space-separated values. |
| STATUS_CODE | TypeStringDescriptionThe HTTP status or internal code returned by the remote endpoint. A status code of 200 indicates that the request was successful. Other status code values indicate the type of problem that was encountered. Depending on how many HTTP requests were used in a continuation, this field can contain up to three space-separated values.Examples2000—The timeout was reached, and the server didn’t get a chance to respond.2001—There was a connection failure.2002—Exceptions occurred.2003—The response hasn’t arrived (which also means that the Apex asynchronous callout framework hasn’t resumed).2004—The response size is too large (greater than 1 MB). |
| SUCCESS | TypeBooleanDescriptionIndicates whether the continuation was successful (1) or not (0). |
| TIMESTAMP | TypeStringDescriptionThe access time of Salesforce services in GMT.For example: 20130715233322.670. |
| TIMESTAMP_DERIVED | TypeDateTimeDescriptionThe access time of Salesforce services in ISO8601-compatible format (YYYY-MM-DDTHH:MM:SS.sssZ).For example: 2015-07-27T11:32:59.555Z. Timezone is GMT. |
| URL | TypeStringDescriptionThe callout endpoint URL. Depending on how many HTTP requests were used in a continuation, this field can contain up to three space-separated values.Examplehttp://prod.location.amazonaws.com:1000/orders/order/_search |
| USER_ID | TypeIdDescriptionThe 15-character ID of the user who’s using Salesforce services through the UI or the API.For example: 00530000009M943 |
| USER_ID_DERIVED | TypeIdDescriptionThe 18-character case insensitive ID of the user who’s using Salesforce services through the UI or the API.For example: 00590000000I1SNIA0. |
| VF_CONTROLLER_SIZE | TypeStringDescriptionContinuation Visualforce controller size, in bytes. Depending on how many HTTP requests were used in a continuation, this field can contain up to three space-separated values. |

#### See Also

-   [EventLogFile Supported Event Types](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_supportedeventtypes.htm "The EventType field in the EventLogFile object supports these events. Some common fields, such as CPU_TIME and RUN_TIME, can have null or zero values depending on how the events are generated for a given feature. Sometimes, three quotation marks appear around event data containing special characters in the CSV file. The third quotation mark is necessary for tools and applications to parse the field data at the correct field value boundary.")

-   [EventLogFile](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm "Represents event log files for event monitoring. The event monitoring product gathers information about your Salesforce org’s operational events, which you can use to analyze usage trends and user behavior. This object is available in API version 32.0 and later. The Interval and Sequence fields are available only in API version 37.0 and later.")

## Related Topics

- EventLogFile Supported Event Types (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_supportedeventtypes.htm)
- EventLogFile (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm)
