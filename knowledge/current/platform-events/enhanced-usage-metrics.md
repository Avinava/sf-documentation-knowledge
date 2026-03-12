---
title: "Enhanced Usage Metrics"
domain: platform-events
topic: enhanced-usage-metrics
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:27.883Z
estimatedTokens: 3281
keywords: [Enhanced, Usage, Metrics, API, version, 58.0, later, enable, granular, data, time, segments, PlatformEventUsageMetric, queries, break]
---

# Enhanced Usage Metrics

> In API version 58.0 and later, enable Enhanced Usage Metrics to get granular usage data
  and time segments in PlatformEventUsageMetric queries. You can break down usage metrics by event
  name, client ID, event type, and usage type. And you can get usage data by granular time segments,
  including daily, hourly, and 15-minute periods.

# Enhanced Usage Metrics

In API version 58.0 and later, enable Enhanced Usage Metrics to get granular usage data and time segments in PlatformEventUsageMetric queries. You can break down usage metrics by event name, client ID, event type, and usage type. And you can get usage data by granular time segments, including daily, hourly, and 15-minute periods.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_events)

#### Note

Enhanced Usage Metrics isn’t available in Government Cloud.


| User Permissions Needed |
| --- |
| To query the PlatformEventUsageMetric Client, EventName, EventType, and UsageType fields: | View All Data |

## Enable Enhanced Usage Metrics

Before you can get more usage metrics, enable Enhanced Usage Metrics in Metadata API. Set the enableEnhancedUsageMetrics field to true in PlatformEventSettings. See [PlatformEventSettings](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_platformeventsettings.htm) in the Metadata API Developer Guide.

## Query Example: Get Usage Metrics for the Last 24 Hours Aggregated by Event Name

If you don’t specify the StartDate and EndDate in your query, the query returns data for the last 24 hours by default. The example query aggregates the results per event because the EventName field is specified in the SELECT statement. Also, the query aggregates the data per hour as specified by the TimeSegment field. The query also includes the event type and the usage type.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=platform_events)

#### Tip

Before you run this query, use Metadata API to enable Enhanced Usage Metrics. In the PlatformEventSettings metadata type, set the enableEnhancedUsageMetrics field to true. See [PlatformEventSettings](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_platformeventsettings.htm) in the Metadata API Developer Guide.

```

```

In this sample result, usage data for published and delivered events is returned for all events: Order\_Event\_\_e and AccountChangeEvent. The query aggregates usage data per hour.

| EventName | EventType | UsageType | Value | StartDate | EndDate |
| --- | --- | --- | --- | --- | --- |
| Order_Event__e | CUSTOM_PLATFORM_EVENT | DELIVERY | 1154 | 2023-04-01T00:00:00.000+0000 | 2023-04-01T01:00:00.000+0000 |
| Order_Event__e | CUSTOM_PLATFORM_EVENT | DELIVERY | 1316 | 2023-04-01T01:00:00.000+0000 | 2023-04-01T02:00:00.000+0000 |
| Order_Event__e | CUSTOM_PLATFORM_EVENT | PUBLISH | 577 | 2023-04-01T00:00:00.000+0000 | 2023-04-01T01:00:00.000+0000 |
| Order_Event__e | CUSTOM_PLATFORM_EVENT | PUBLISH | 658 | 2023-04-01T01:00:00.000+0000 | 2023-04-01T02:00:00.000+0000 |
| AccountChangeEvent | CHANGE_EVENT | PUBLISH | 15 | 2023-04-01T01:00:00.000+0000 | 2023-04-01T02:00:00.000+0000 |
| AccountChangeEvent | CHANGE_EVENT | DELIVERY | 15 | 2023-04-01T01:00:00.000+0000 | 2023-04-01T02:00:00.000+0000 |

For valid TimeSegment values, check the TimeSegment field of [PlatformEventUsageMetric](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_platformeventusagemetric.htm) in the Object Reference for the Salesforce Platform.

You can refine the query results by adding fields in the WHERE clause. To view usage data for only a specific usage type, add the UsageType field in the WHERE clause. For example, to query for only delivered event usage, add this condition.

```

```

Or add this condition for published events.

```

```

You can narrow the query by event type. For example, to query for custom platform events only, add this condition.

```

```

Or add this condition for change events.

```

```

You can query usage for one event only. For example:

```

```

## Query Rules

-   If StartDate and EndDate aren’t specified in the WHERE clause, the query defaults to the last 24-hour period.
-   You must specify the StartDate and EndDate field values in the WHERE clause or neither. If only StartDate or EndDate are specified, you get an error.
-   The maximum time span between StartDate and EndDate is 30 days.
-   The minimum time span between StartDate and EndDate is 15 minutes.
-   The StartDate field can refer to a date that is no more than 60 days old.
-   The TimeSegment field must always be specified in the query’s WHERE clause. Optionally, it can also be part of the SELECT statement.
-   Make sure that the time span between StartDate and EndDate in the WHERE clause is valid for the TimeSegment value chosen. Check the TimeSegment field of [PlatformEventUsageMetric](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_platformeventusagemetric.htm) in the Object Reference for the Salesforce Platform.
-   A query must have at least one of Name, EventType, or EventName fields in either the SELECT or WHERE clause.
-   A query that uses EventName or EventType must also specify the UsageType in either the SELECT or WHERE clause.

## Query Considerations

-   We recommend that you include StartDate and EndDate in the query’s SELECT statement. Including these fields helps you interpret the query results and map each result with its corresponding time segment.
-   To make sure the query covers all time segments between the start date and end date, use the \>= and <= logical operators with StartDate and EndDate in the WHERE clause. For example: StartDate >= DateTime1 AND EndDate <= DateTime2
-   Date fields accept date literals, such as LAST\_WEEK, in addition to date values. For more information, see [Date Formats and Date Literals in WHERE](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_dateformats.htm) in the SOQL and SOSL Reference.
-   The maximum number of rows that can be returned in a query for enhanced usage metrics is 2,000. If the query generates more than 2,000 rows, you get an error and the query returns no results.
-   The LIMIT clause isn’t supported.
-   SOQL aggregate functions, such as SUM() and MAX(), aren’t supported. For more information, see [Aggregate Functions](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_agg_functions.htm) in the SOQL and SOSL Reference.

## Drill Into a Time Slot with the Highest Usage

The examples in this section follow a scenario that starts with a multiday time range and drills down into smaller time slots to find the time slot with the highest usage. The first example gets daily usage. The second and third examples drill down into hourly and 15-minute usage.

One of the fields these examples use is the Client field. The Client field is populated for both event publish and delivery usages. For publish usages the client can be one of the following: SYSTEM (Change Data Capture events only), PUB\_SUB\_API, REST\_API, FLOW, SOAP\_API, BULK\_API, or APEX. For delivery usages, the client can be one of the following: PUB\_SUB\_API, EVENT\_RELAY, Streaming API (CometD) client ID, or the Apex Trigger ID starting with 01q. The example query results contain placeholder values for the Client field for simplicity.

## Get Daily Usage Metrics Aggregated by Event Name and Client

This example query gets daily usage metrics for delivered events grouped by event name and client for a period of 2 days. The query aggregates the results per event and client because the EventName and Client fields are specified in the SELECT statement.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=platform_events)

#### Tip

Before you run this query, use Metadata API to enable Enhanced Usage Metrics. In the PlatformEventSettings metadata type, set the enableEnhancedUsageMetrics field to true. See [PlatformEventSettings](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_platformeventsettings.htm) in the Metadata API Developer Guide.

```

```

In this sample result, usage data is returned for all events: Order\_Event\_\_e and AccountChangeEvent. The query aggregates usage data by client. Two clients receive Order\_Event\_\_e events, and the usage data is computed for each. AccountChangeEvent events are received by one client only.

| EventName | EventType | Client | Value | StartDate | EndDate |
| --- | --- | --- | --- | --- | --- |
| Order_Event__e | CUSTOM_PLATFORM_EVENT | client1 | 31327 | 2023-04-01T00:00:00.000+0000 | 2023-04-02T00:00:00.000+0000 |
| Order_Event__e | CUSTOM_PLATFORM_EVENT | client1 | 20801 | 2023-04-02T00:00:00.000+0000 | 2023-04-03T00:00:00.000+0000 |
| Order_Event__e | CUSTOM_PLATFORM_EVENT | client2 | 399 | 2023-04-01T00:00:00.000+0000 | 2023-04-02T00:00:00.000+0000 |
| Order_Event__e | CUSTOM_PLATFORM_EVENT | client2 | 27 | 2023-04-02T00:00:00.000+0000 | 2023-04-03T00:00:00.000+0000 |
| AccountChangeEvent | CHANGE_EVENT | client3 | 1009 | 2023-04-01T00:00:00.000+0000 | 2023-04-02T00:00:00.000+0000 |
| AccountChangeEvent | CHANGE_EVENT | client3 | 780 | 2023-04-02T00:00:00.000+0000 | 2023-04-03T00:00:00.000+0000 |

## Get Hourly Usage Metrics for One Event

Query hourly usage to view event usage for delivered events by hour for a time period up to 24 hours. This example query gets usage metrics for one event, Order\_Event\_\_e. The query aggregates the results into 1-hour intervals as specified by the TimeSegment field. Results are grouped per event and client because the EventName and Client fields are specified in the SELECT statement.

In the previous daily usage example, April 1 has the highest usage. To drill down into the usage for that day for one event, query for that date.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=platform_events)

#### Tip

Before you run this query, use Metadata API to enable Enhanced Usage Metrics. In the PlatformEventSettings metadata type, set the enableEnhancedUsageMetrics field to true. See [PlatformEventSettings](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_platformeventsettings.htm) in the Metadata API Developer Guide.

```

```

In this sample result, hourly usage data is returned for Order\_Event\_\_e on April 1. The query aggregates usage data by client. Two clients receive Order\_Event\_\_e events, and the usage data is computed for each. A partial list of results is included for brevity.

| EventName | Client | Value | StartDate | EndDate |
| --- | --- | --- | --- | --- |
| Order_Event__e | client1 | 1136 | 2023-04-01T00:00:00.000+0000 | 2023-04-01T01:00:00.000+0000 |
| Order_Event__e | client1 | 1301 | 2023-04-01T01:00:00.000+0000 | 2023-04-01T02:00:00.000+0000 |
| Order_Event__e | client1 | 903 | 2023-04-01T02:00:00.000+0000 | 2023-04-01T03:00:00.000+0000 |
| Order_Event__e | client2 | 17 | 2023-04-01T00:00:00.000+0000 | 2023-04-01T01:00:00.000+0000 |
| Order_Event__e | client2 | 15 | 2023-04-01T01:00:00.000+0000 | 2023-04-01T02:00:00.000+0000 |
| Order_Event__e | client2 | 13 | 2023-04-01T02:00:00.000+0000 | 2023-04-01T03:00:00.000+0000 |

## Get Granular Usage Metrics for a 15-Minute Period

Get event usage aggregated into 15-minute periods for a time period up to 1 hour. This example query gets event delivery usage metrics for one event, Order\_Event\_\_e. The query aggregates the results into 15-minute intervals as specified by the TimeSegment field. Results are grouped per event and client because the EventName and Client fields are specified in the SELECT statement.

In the previous hourly usage example, the time period between the hours of 01:00:00 and 02:00:00 on April 1 has the highest usage. To drill down into the usage for that day for one event, query for that date.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=platform_events)

#### Tip

Before you run this query, use Metadata API to enable Enhanced Usage Metrics. In the PlatformEventSettings metadata type, set the enableEnhancedUsageMetrics field to true. See [PlatformEventSettings](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_platformeventsettings.htm) in the Metadata API Developer Guide.

```

```

In this sample result, usage data for every 15 minutes is returned for Order\_Event\_\_e for client1 on April 1 between the hours of 01:00:00 and 02:00:00.

| EventName | Client | Value | StartDate | EndDate |
| --- | --- | --- | --- | --- |
| Order_Event__e | client1 | 321 | 2023-04-01T22:00:00.000+0000 | 2023-04-01T22:15:00.000+0000 |
| Order_Event__e | client1 | 399 | 2023-04-01T22:15:00.000+0000 | 2023-04-01T22:30:00.000+0000 |
| Order_Event__e | client1 | 265 | 2023-04-01T22:30:00.000+0000 | 2023-04-01T22:45:00.000+0000 |
| Order_Event__e | client2 | 298 | 2023-04-01T22:45:00.000+0000 | 2023-04-01T23:00:00.000+0000 |

#### See Also

-   [*Object Reference for the Salesforce Platform*: PlatformEventUsageMetric](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_platformeventusagemetric.htm)

## Code Examples

```
SELECT EventName, EventType, UsageType, Value, StartDate, EndDate 
FROM PlatformEventUsageMetric 
WHERE TimeSegment='Hourly'
```

```
WHERE UsageType='DELIVERY'
```

```
WHERE UsageType='PUBLISH'
```

```
WHERE EventType='CUSTOM_PLATFORM_EVENT'
```

```
WHERE UsageType='CHANGE_EVENT'
```
