---
title: "Concurrent Long-Running Apex Limit Event Type"
domain: object-reference
topic: concurrent-long-running-apex-limit-event-type
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:09.037Z
estimatedTokens: 1168
keywords: [Concurrent, Long-Running, Apex, Limit, Event, events, contain, requests, org, Salesforce, terminated, reaching, org’s, concurrency, established]
---

# Concurrent Long-Running Apex Limit Event Type

> Concurrent Long-Running Apex Limit events contain information about
         long-running concurrent Apex requests in your org that Salesforce terminated after reaching
         your org’s concurrency limit. Requests with an established Apex context that execute for 5
         seconds are counted towards your org’s limit of concurrent long-running requests.
         (Asynchronous requests don’t count towards the limit.) When the long-running requests
         exceed the org default limit, all new Apex invocation requests are denied. This event
      type is available in the EventLogFile object in API version 45.0 and later.

# Concurrent Long-Running Apex Limit Event Type

Concurrent Long-Running Apex Limit events contain information about long-running concurrent Apex requests in your org that Salesforce terminated after reaching your org’s concurrency limit. Requests with an established Apex context that execute for 5 seconds are counted towards your org’s limit of concurrent long-running requests. (Asynchronous requests don’t count towards the limit.) When the long-running requests exceed the org default limit, all new Apex invocation requests are denied. This event type is available in the EventLogFile object in API version 45.0 and later.

For details about event monitoring, see the [Trailhead Event Monitoring module](https://trailhead.salesforce.com/en/modules/event_monitoring/units/event_monitoring_intro "HTML (New Window)") or [REST API Developer’s Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/using_resources_event_log_files.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| EVENT_TYPE | TypeStringDescriptionThe type of event. The value is always ConcurrentLongRunningApexLimit. |
| NUMBER_REQUESTS | TypeNumberDescriptionCount of requests with an established Apex context executing for longer than 5 seconds in your org. |
| ORGANIZATION_ID | TypeIdDescriptionThe 15-character ID of the organization.For example: 00D000000000123. |
| REQUEST_ID | TypeStringDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same REQUEST_ID.For example: 3nWgxWbDKWWDIk0FKfF5DV. |
| REQUEST_URI | TypeStringDescriptionURI of the long-running Apex request that Salesforce terminated.Example/apex/ApexClassName |
| REQUESTS_LIMIT | TypeNumberDescriptionMaximum count of requests with an established Apex context that can execute for longer than 5 seconds. When NUMBER_REQUESTS reaches this limit, then additional long-running Apex requests are terminated. (Asynchronous requests don’t count towards the limit.)See Apex Developer Guide: Lightning Platform Apex Limits.Example10 |
| TIMESTAMP | TypeStringDescriptionThe access time of Salesforce services in GMT.For example: 20130715233322.670. |
| TIMESTAMP_DERIVED | TypeDateTimeDescriptionThe access time of Salesforce services in ISO8601-compatible format (YYYY-MM-DDTHH:MM:SS.sssZ).For example: 2015-07-27T11:32:59.555Z. Timezone is GMT. |
| USER_ID | TypeIdDescriptionThe 15-character ID of the user who’s using Salesforce services through the UI or the API.For example: 00530000009M943 |

## Usage

For example, you can monitor Concurrent Long-Running Apex Limit log counts to get a benchmark or plot a count by hour. To identify where the limit was exceeded, see the REQUEST\_URI field. Then, cross-reference this data with [Apex Execution event](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_apexexecution.htm "Apex Execution events contain details about Apex classes that are used.") data where the average RUN\_TIME exceeds 5 seconds. To identify synchronous requests only, cross-reference event data with the QUIDDITY field in Apex Execution event data. For example, QUIDDITY NOT IN (A,BA,F,Q,S) and CALLOUT\_TIME (>5000).

#### See Also

-   [EventLogFile Supported Event Types](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_supportedeventtypes.htm "The EventType field in the EventLogFile object supports these events. Some common fields, such as CPU_TIME and RUN_TIME, can have null or zero values depending on how the events are generated for a given feature. Sometimes, three quotation marks appear around event data containing special characters in the CSV file. The third quotation mark is necessary for tools and applications to parse the field data at the correct field value boundary.")

-   [EventLogFile](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm "Represents event log files for event monitoring. The event monitoring product gathers information about your Salesforce org’s operational events, which you can use to analyze usage trends and user behavior. This object is available in API version 32.0 and later. The Interval and Sequence fields are available only in API version 37.0 and later.")

-   [*Salesforce Developers Blog*: Designing Force.com Applications That Avoid Hitting Concurrent Request Limits](https://developer.salesforce.com/blogs/engineering/2013/05/force-com-concurrent-request-limits.html "
    Salesforce Developers Blog: Designing Force.com Applications That
    Avoid Hitting Concurrent Request Limits - HTML (New Window)")

## Related Topics

- Apex Execution event (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_apexexecution.htm)
- EventLogFile Supported Event Types (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_supportedeventtypes.htm)
- EventLogFile (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm)
