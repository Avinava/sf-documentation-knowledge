---
title: "Monitor Change Event Publishing and Delivery Usage"
domain: change-data-capture
topic: monitor-change-event-publishing-and-delivery-usage
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:09.632Z
estimatedTokens: 1825
keywords: [Monitor, Change, Event, Publishing, Delivery, Usage, data, CometD, Pub, Sub, API, clients, empApi, Lightning, components]
---

# Monitor Change Event Publishing and Delivery Usage

> To get usage data for event publishing and delivery to CometD and Pub/Sub API clients,
   empApi Lightning components, and event relays, query the
  PlatformEventUsageMetric object. In API 58.0 and later, enable and use Enhanced Usage Metrics to
  get granular usage data for various time segments. If Enhanced Usage Metrics isn’t enabled, usage
  data is available for the last 24 hours, ending at the last hour, and for historical daily usage.
  PlatformEventUsageMetric is available in API version 50.0 and later.

# Monitor Change Event Publishing and Delivery Usage

To get usage data for event publishing and delivery to CometD and Pub/Sub API clients, empApi Lightning components, and event relays, query the PlatformEventUsageMetric object. In API 58.0 and later, enable and use Enhanced Usage Metrics to get granular usage data for various time segments. If Enhanced Usage Metrics isn’t enabled, usage data is available for the last 24 hours, ending at the last hour, and for historical daily usage. PlatformEventUsageMetric is available in API version 50.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=change_data_capture)

#### Important

We recommend that you use Enhanced Usage Metrics. With Enhanced Usage Metrics, you can query usage data at a granular level. You can break down usage metrics by event name, client ID, event type, and usage type. And you can get usage data by various time segments, including daily, hourly, and 15-minute periods. See [Enhanced Usage Metrics](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_events_monitor_enhanced_usage.htm) in the Platform Events Developer Guide.

Use PlatformEventUsageMetric to get visibility into your event usage and usage trends. The usage data gives you an idea of how close you are to your allocations and when you need more allocations. The usage metrics stored in PlatformEventUsageMetric are separate from the REST API limits values. Use the REST API limits to track your monthly delivery usage against your allocations. The monthly event delivery usage that the limits API returns is common for platform events and change data capture events in CometD and Pub/Sub API clients, empApi Lightning components, and event relays. PlatformEventUsageMetric breaks down usage of platform events and change data capture events so you can track their usage separately.

Because dates are stored in Coordinated Universal Time (UTC), convert your local dates and times to UTC for the query. For the date format to use, see [Date Formats and Date Literals](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_dateformats.htm "HTML (New Window)") in the SOQL and SOSL Reference.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=change_data_capture)

#### Note

-   Usage data is stored for at least 45 days. Usage data is updated hourly and is available only when usage is nonzero for a 24-hour period. Usage data isn’t available for 1-hour intervals or any other arbitrary interval. The only supported intervals are the last 24 hours and daily data. Also, usage data isn’t available for standard-volume platform events.
-   After a Salesforce major upgrade, usage data can be inaccurate for the day and the last 24 hours within the upgrade window. New usage data overwrites the data for the hour that the 5-minute upgrade occurs in. The new usage data includes metrics that start after the upgrade for that hour. For more information about Salesforce upgrades, see [Salesforce Upgrades and Maintenance](https://help.salesforce.com/articleView?id=getstart_upgrades.htm&language=en_US "HTML (New Window)") in Help and [Salesforce Status](https://status.salesforce.com/ "HTML (New Window)").

For change events, you can query usage data for these metrics. The first value is the metric name value that you supply in the query.

-   CHANGE\_EVENTS\_PUBLISHED—Number of change data capture events published
-   CHANGE\_EVENTS\_DELIVERED—Number of change data capture events delivered to CometD and Pub/Sub API clients, empApi Lightning components, and event relays

For platform events, you can query usage data for these metrics. The first value is the metric name value that you supply in the query.

-   PLATFORM\_EVENTS\_PUBLISHED—Number of platform events published
-   PLATFORM\_EVENTS\_DELIVERED—Number of platform events delivered to CometD and Pub/Sub API clients, empApi Lightning components, and event relays

## Obtain Usage Metrics for the Last 24 Hours

To get usage metrics for the last 24 hours, ending at the last hour, perform a query by specifying the start and end date and time in UTC, and the metric name.

For the last 24-hour period, the end date is the current date in UTC, with the time rounded down to the previous hour. The start date is 24 hours before the end date. Dates have hourly granularity.

## Example

Based on the current date and time of August 4, 2020 11:23 in UTC, the last hour is 11:00. The query includes these dates.

-   Start date in UTC format: 2020-08-03T11:00:00.000Z
-   End date in UTC format: 2020-08-04T11:00:00.000Z

This query returns the usage for the number of platform events delivered between August 3, 2020 at 11:00 and August 4, 2020 at 11:00.

```

```

The query returns this result for the last 24-hour usage.

| Name | StartDate | EndDate | Value |
| --- | --- | --- | --- |
| CHANGE_EVENTS_DELIVERED | 2020-08-03T11:00:00.000+0000 | 2020-08-04T11:00:00.000+0000 | 575 |

The time span between StartDate and EndDate is 24 hours for the stored 24-hour usage. Therefore, you can specify either StartDate or EndDate in the query and you get the same result.

## Obtain Historical Daily Usage Metrics

To get daily usage metrics for 1 or more days, perform a query by specifying the start date and end date in UTC, and metric name.

## Example

To get usage metrics for a period of 3 days, from July 19 to July 22, 2020, use these start and end dates. Time values are 0.

-   Start date for the query: 2020-07-19T00:00:00.000Z
-   End date for the query: 2020-07-22T00:00:00.000Z

This query selects usage metrics for the number of platform events delivered for a 3-day period.

```

```

The query returns these results for the specified date range.

| Name | StartDate | EndDate | Value |
| --- | --- | --- | --- |
| CHANGE_EVENTS_DELIVERED | 2020-07-19T00:00:00.000+0000 | 2020-07-20T00:00:00.000+0000 | 575 |
| CHANGE_EVENTS_DELIVERED | 2020-07-20T00:00:00.000+0000 | 2020-07-21T00:00:00.000+0000 | 899 |
| CHANGE_EVENTS_DELIVERED | 2020-07-21T00:00:00.000+0000 | 2020-07-22T00:00:00.000+0000 | 1,035 |

## General Considerations

If you query the Id of PlatformEventUsageMetric, the Id value returned isn’t a valid record ID. For example, this query returns an Id field value of 000000000000000AAA.

```

```

As a result, you can’t use PlatformEventUsageMetric in batch Apex with QueryLocator because QueryLocator requires valid record IDs to be passed in to the execute method. Using PlatformEventUsageMetric with batch Apex and QueryLocator causes unexpected results. Instead, use an iterable with batch Apex and PlatformEventUsageMetric. For more information, see [Using Batch Apex](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_batch_interface.htm) in the Platform Events Developer Guide.

#### See Also

-   [*Object Reference for Salesforce and Lightning Platform*: PlatformEventUsageMetric](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_platformeventusagemetric.htm "Object Reference for Salesforce and Lightning Platform:
    PlatformEventUsageMetric - HTML (New Window)")

## Code Examples

```
SELECT Name, StartDate, EndDate, Value FROM PlatformEventUsageMetric 
WHERE Name='CHANGE_EVENTS_DELIVERED' 
AND StartDate=2020-08-03T11:00:00.000Z AND EndDate=2020-08-04T11:00:00.000Z
```

```
SELECT Name, StartDate, EndDate, Value FROM PlatformEventUsageMetric 
WHERE Name='CHANGE_EVENTS_DELIVERED' 
AND StartDate>=2020-07-19T00:00:00.000Z and EndDate<=2020-07-22T00:00:00.000Z
```

```
SELECT Id, Name, StartDate, EndDate, Value FROM PlatformEventUsageMetric WHERE Name='CHANGE_EVENTS_DELIVERED'
```
