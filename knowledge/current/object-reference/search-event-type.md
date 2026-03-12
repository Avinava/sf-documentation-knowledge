---
title: "Search Event Type"
domain: object-reference
topic: search-event-type
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:09.592Z
estimatedTokens: 755
keywords: [Search, Event, events, contain, user’s, query, searches, app, including, Experience, Cloud, sites, included, However, unauthenticated]
---

# Search Event Type

> Search events contain details about the user’s search query. All
         searches within the app, including Experience Cloud sites, are included. However,
         unauthenticated users won’t have a unique Salesforce user ID.

# Search Event Type

Search events contain details about the user’s search query. All searches within the app, including Experience Cloud sites, are included. However, unauthenticated users won’t have a unique Salesforce user ID.

For details about event monitoring, see the [Trailhead Event Monitoring module](https://trailhead.salesforce.com/en/modules/event_monitoring/units/event_monitoring_intro "HTML (New Window)") or [REST API Developer’s Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/using_resources_event_log_files.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| EVENT_TYPE | TypeStringDescriptionThe type of event. The value is always Search. |
| NUM_RESULTS | TypeNumberDescriptionNumber of results returned by the search query.Possible Values0251000 |
| ORGANIZATION_ID | TypeIdDescriptionThe 15-character ID of the organization.For example: 00D000000000123. |
| PREFIXES_SEARCHED | TypeStringDescriptionSpace-separated list of key prefixes that were searched.Example001 006 ka0 |
| QUERY_ID | TypeStringDescriptionUnique ID of the search query.Example-2vx8relit08r |
| REQUEST_ID | TypeStringDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same REQUEST_ID.For example: 3nWgxWbDKWWDIk0FKfF5DV. |
| SEARCH_QUERY | TypeStringDescriptionThe first 100 characters of the search query.ExampleSalesforce |
| TIMESTAMP | TypeStringDescriptionThe access time of Salesforce services in GMT.For example: 20130715233322.670. |
| TIMESTAMP_DERIVED | TypeDateTimeDescriptionThe access time of Salesforce services in ISO8601-compatible format (YYYY-MM-DDTHH:MM:SS.sssZ).For example: 2015-07-27T11:32:59.555Z. Timezone is GMT. |
| USER_ID | TypeIdDescriptionThe 15-character case insensitive ID of the user who’s using Salesforce services through the UI or the API.For example: 00590000000I1SNIA0. |

#### See Also

-   [EventLogFile Supported Event Types](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_supportedeventtypes.htm "The EventType field in the EventLogFile object supports these events. Some common fields, such as CPU_TIME and RUN_TIME, can have null or zero values depending on how the events are generated for a given feature. Sometimes, three quotation marks appear around event data containing special characters in the CSV file. The third quotation mark is necessary for tools and applications to parse the field data at the correct field value boundary.")

-   [EventLogFile](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm "Represents event log files for event monitoring. The event monitoring product gathers information about your Salesforce org’s operational events, which you can use to analyze usage trends and user behavior. This object is available in API version 32.0 and later. The Interval and Sequence fields are available only in API version 37.0 and later.")

## Related Topics

- EventLogFile Supported Event Types (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_supportedeventtypes.htm)
- EventLogFile (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm)
