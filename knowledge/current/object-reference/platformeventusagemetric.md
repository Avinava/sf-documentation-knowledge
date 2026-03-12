---
title: "PlatformEventUsageMetric"
domain: object-reference
topic: platformeventusagemetric
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:14.936Z
estimatedTokens: 1969
keywords: [PlatformEventUsageMetric, usage, data, event, publishing, delivery, CometD, Pub, Sub, API, clients, empApi, Lightning, components, relays]
---

# PlatformEventUsageMetric

> Contains usage data for event publishing and delivery to CometD and Pub/Sub API
      clients, empApi Lightning components, and event relays. If
      Enhanced Usage Metrics isn't enabled, usage data is available for the last 24 hours, ending at
      the last hour, and for historical daily usage. In API 58.0 and later, you can enable Enhanced
      Usage Metrics to get usage data by event name and client for granular time intervals.
      PlatformEventUsageMetric contains separate usage metrics for platform events and change data
      capture events. This object is available in API version 50.0 and later.

# PlatformEventUsageMetric

Contains usage data for event publishing and delivery to CometD and Pub/Sub API clients, empApi Lightning components, and event relays. If Enhanced Usage Metrics isn't enabled, usage data is available for the last 24 hours, ending at the last hour, and for historical daily usage. In API 58.0 and later, you can enable Enhanced Usage Metrics to get usage data by event name and client for granular time intervals. PlatformEventUsageMetric contains separate usage metrics for platform events and change data capture events. This object is available in API version 50.0 and later.

## Supported Calls

describeSObjects(), query()

## Fields

| Field | Details |
| --- | --- |
| Client | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThis field is available only when Enhanced Usage Metrics is enabled. The ID of the client. The Client field is populated with one of the following values.The Client field can be one of these values.For a Streaming API (CometD) client and the empApi Lightning component, the client value is the ID of the CometD session.For a Pub/Sub API client, the client value is PUB_SUB_API.For an event relay, the client value is EVENT_RELAY.For the publish usage of Change Data Capture events, the client value is SYSTEM.For publish usages using REST API, the client value is REST_API.For publish usages using Flow, the client value is FLOW.For publish usages using SOAP API, the client value is SOAP_API.For publish usages using Bulk API, the client value is BULK_API.For Apex, the publish usage client value is APEX and the delivery usage client value is the Apex Trigger ID starting with 01q. |
| EndDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe end date and time in UTC used for querying usage metrics. The date granularity is hourly.To get usage data for the last 24 hours, the end date is the current date in UTC. The time is the current time in UTC rounded down to the previous hour. For example, 11:23 is 11:00 and the date format is: 2020-08-04T11:00:00.000ZTo get historical data, the end date in UTC is the end of the date range with hours specified as 0. For example: 2020-08-04T00:00:00.000Z. To query a date range, you can use the < or <= operators.For the date format to use, see Date Formats and Date Literals in the SOQL and SOSL Reference. |
| EventName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThis field is available only when Enhanced Usage Metrics is enabled. The API name of a custom platform event or a change event.Custom platform event with the label My Event: My_Event__eChange event example: AccountChangeEventWhen you query usage metrics for EventName, specify the UsageType field in the SELECT or WHERE clause. |
| EventType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThis field is available when Enhanced Usage Metrics is enabled. The type of event you would like to query usage metrics for, such as a change event or a custom platform event.Possible values are:CHANGE_EVENT—A Change Data Capture event.CUSTOM_PLATFORM_EVENT—A platform event that an admin defined in your Salesforce org.When you query usage metrics for EventType, specify the UsageType field in the SELECT or WHERE clause. |
| ExternalId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThis field is not in use. |
| Name | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe name of the metric to get usage for.Possible values are:CHANGE_EVENTS_DELIVERED—Number of change data capture events delivered to CometD and Pub/Sub API clients, empApi Lightning components, and event relaysCHANGE_EVENTS_PUBLISHED—Number of change data capture events publishedPLATFORM_EVENTS_DELIVERED—Number of platform events delivered to CometD and Pub/Sub API clients, empApi Lightning components, and event relaysPLATFORM_EVENTS_PUBLISHED—Number of platform events published |
| StartDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe start date and time in UTC used for querying usage metrics. The date granularity is hourly.To get usage data for the last 24 hours, the start date is the previous day in UTC. The time is the current time in UTC rounded down to the previous hour. For example, 11:23 is 11:00 and the date format is: 2020-08-03T11:00:00.000ZTo get historical data, the start date is the start of the date range with hours specified as 0. For example: 2020-08-03T00:00:00.000Z. To specify a date range, you can use the > or >= operators.If Enhanced Usage Metrics is enabled, keep in mind these tips.Make sure the time span between StartDate and EndDate is valid for the TimeSegment value chosen.The maximum date range that you can specify between StartDate and EndDate is 60 days.For the date format to use, see Date Formats and Date Literals in the SOQL and SOSL Reference. |
| TimeSegment | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThis field is available when Enhanced Usage Metrics is enabled.  The time interval used for aggregating usage data returned in the query results. Valid TimeSegment values depend on the time range specified with StartDate and EndDate.Possible values are:DailyUsage data is aggregated for each day within the specified time range.Valid only if the time range specified with StartDate and EndDate in the query is at least 24 hours.HourlyUsage data is aggregated for each hour within the specified time range.Valid only if the time range specified with StartDate and EndDate in the query is between one hour and 24 hours.FifteenMinutesUsage data is aggregated for each 15-minute period within the specified time range.Valid only if the time range specified with StartDate and EndDate in the query is between 15 minutes and one hour. |  |  |  | Daily | Usage data is aggregated for each day within the specified time range. | Valid only if the time range specified with StartDate and EndDate in the query is at least 24 hours. | Hourly | Usage data is aggregated for each hour within the specified time range. | Valid only if the time range specified with StartDate and EndDate in the query is between one hour and 24 hours. | FifteenMinutes | Usage data is aggregated for each 15-minute period within the specified time range. | Valid only if the time range specified with StartDate and EndDate in the query is between 15 minutes and one hour. |
|  |  |  |
| Daily | Usage data is aggregated for each day within the specified time range. | Valid only if the time range specified with StartDate and EndDate in the query is at least 24 hours. |
| Hourly | Usage data is aggregated for each hour within the specified time range. | Valid only if the time range specified with StartDate and EndDate in the query is between one hour and 24 hours. |
| FifteenMinutes | Usage data is aggregated for each 15-minute period within the specified time range. | Valid only if the time range specified with StartDate and EndDate in the query is between 15 minutes and one hour. |
| UsageType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThis field is available when Enhanced Usage Metrics is enabled. The type of event usage metrics to query for, such as event publishing or event delivery. Use this field with the EventName or EventType fields.Possible values are:PUBLISH—Usage metrics for published events.DELIVERY—Usage metrics for events that were delivered to subscribers. |
| Value | TypelongPropertiesFilter, Group, Nillable, SortDescriptionThe usage value for the specified metric and date range. |

## Usage

For more information, see [Monitor Platform Event Publishing and Delivery Usage](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_events_monitor_usage.htm "HTML (New Window)") in the Platform Events Developer Guide.
