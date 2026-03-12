---
title: "Query or View Hourly Event Log Files"
domain: rest-api
topic: query-or-view-hourly-event-log-files
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:35.127Z
estimatedTokens: 846
keywords: [Query, View, Hourly, Event, Log, Files, review, events, org, accelerated, basis, get, event, log, files, hourly, increments, recent, activity., give]
---

# Query or View Hourly Event Log Files

> To review events in your org on an accelerated basis, get event log files in hourly
		increments for recent activity. Hourly event log files can give you quicker visibility into
		security anomalies and custom code performance issues.

# Query or View Hourly Event Log Files

To review events in your org on an accelerated basis, get event log files in hourly increments for recent activity. Hourly event log files can give you quicker visibility into security anomalies and custom code performance issues.

| Available in: Enterprise, Performance, Unlimited, and Developer Editions |
| --- |


| User Permissions Needed |
| --- |
| To access the API and query log files: | API Enabled AND View Event Log Files |
| To view event log files: | View All Data |

**Examples**

Suppose you’re a security analyst monitoring for anomalous user behavior. By pulling more frequent updates into your security system, you can be alerted that a suspicious event has taken place within hours, rather than one or two days later.

In another example, let’s say you’re a developer. You’ve identified a series of Apex failures in your org, and you want to proactively refactor your Apex code to improve performance. You review hourly log files to pinpoint the issues and fix your code in hours, before your end users start complaining about poor performance.

**Considerations**

-   Hourly event log file integration with the Event Monitoring Analytics app is unavailable.
-   Depending on event delivery and final processing time, an event is expected to take three to six hours from the time of the event to be available in the log file. However, it can take longer.
-   When delays in processing occur and event logs for a particular hour arrive later, a new log file is created for the event/date/hour and lists only the new events. Use the creation date and an incremental sequence number to identify a new log file. Always use the most recently processed event log file for a particular date. However, if event log files have already been pulled into a third-party application, they could require deduplication in that application.

    If both hourly and daily logs are enabled, daily logs always have a sequence number of 0 because there is only one file per daily interval. CreatedDate indicates when the file was generated. If CreatedDate is after the last event log file download, there are new events to be processed.

    For best practices, use CreatedDate in the WHERE clause to select logs created after the last downloaded event log file. For example, if the last downloaded file was at 12PM 2/1/2018, to find the next log file, use +CreatedDate+>+"2018-02-01T12:00:00Z" in the WHERE clause.

-   Your event log files may show a gap in data during site switches, instance refreshes, or unplanned system outages. However, during site switches and instance refreshes, Salesforce makes a commercially reasonable effort to avoid such data loss by using an automated process to replicate event logs.
-   In the unlikely case in which no log files are generated for 24 hours, contact Salesforce Support.

-   **[Query Hourly Event Log Files](atlas.en-us.api_rest.meta/api_rest/event_log_file_hourly_query.htm)**
    You query hourly event log files in the same way you query 24-hour log files.
-   **[Differences Between Hourly and 24-Hour Event Logs](atlas.en-us.api_rest.meta/api_rest/event_log_file_hourly_diff.htm)**
    You receive event log files approximately every hour in addition to 24-hour log files. Review the differences between the two logs so that you can filter your files to analyze the event data you want.

## Related Topics

- Query Hourly Event Log Files (atlas.en-us.api_rest.meta/api_rest/event_log_file_hourly_query.htm)
- Differences Between Hourly and 24-Hour Event Logs (atlas.en-us.api_rest.meta/api_rest/event_log_file_hourly_diff.htm)
