---
title: "Using Event Monitoring"
domain: rest-api
topic: using-event-monitoring
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:36.237Z
estimatedTokens: 1748
keywords: [Event, Monitoring, examples, REST, API, event, monitoring, data, contains, information, useful, assessing, org, usage, trends, user, behavior., accessed, through, Lightning]
---

# Using Event Monitoring

> These examples use REST API event monitoring data that contains information useful for
    assessing org usage trends and user behavior. Event monitoring is accessed through the Lightning
    Platform SOAP API and REST API by way of the EventLogFile object. Therefore, you can integrate
    log data with your own back-end storage and data marts to correlate data from multiple orgs and
    across disparate systems.

# Using Event Monitoring

These examples use REST API event monitoring data that contains information useful for assessing org usage trends and user behavior. Event monitoring is accessed through the Lightning Platform SOAP API and REST API by way of the EventLogFile object. Therefore, you can integrate log data with your own back-end storage and data marts to correlate data from multiple orgs and across disparate systems.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

#### Note

For the supported event types that you can use with event monitoring, see [Object Reference for Salesforce and Lightning Platform: EventLogFile Object](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm "HTML (New Window)").

-   Log files can be created within three days of generation. In the unlikely case where no log files are created for three days, contact Salesforce Customer Support.
-   Log data is read only. You can’t insert, update, or delete log data. However, you can delete event log files.
-   To determine which files were generated for your org, use the EventType field.
-   An event generates log data in real time. However, daily log files are generated during nonpeak hours the day after an event takes place. Therefore, daily log file data is unavailable for at least 1 day after an event. For hourly log files, depending on event delivery and final processing time, expect an event to take place 3–6 hours from the time of the event to be available in the log file. However, it can take longer.
-   Log files are generated only when at least one event of a type, represented by the EventType field, occurs for the day or hour. If no events took place, the file isn’t generated.
-   Event log file retention varies based on the Salesforce org type and subscriptions:
    -   Orgs with Salesforce Shield or Event Monitoring Add-on subscriptions: Log files are retained, by default, for 30 days after their CreatedDate. Then, they are automatically deleted. Customers can adjust the data retention period and download up to one year of event log file data. This adjustment can be made via the Event Monitoring Settings or using the EventSettings Metadata API type.
    -   Developer Edition and Trial orgs: Log Files are available for one day.
-   All event monitoring logs are exposed to the API through the EventLogFile object. However, there’s no access through the user interface, except through the Event Monitoring Analytics app.
-   Log files don’t count towards your org’s data or file storage allocations.
-   Event Monitoring log files aren’t a system of record for user activity. They’re a source of truth, but they aren’t durable. During Salesforce site switches, instance refreshes, or unplanned system outages, data loss can occur. For example, if Salesforce moves your production org instance, your event log files can have a gap in data. Salesforce makes commercially reasonable efforts to preserve event log file data integrity and avoid data loss. When Salesforce performs a site switch or instance refresh, it uses an automated process to replicate event logs.
-   Hourly event log files are provided for you to review events in your orgs on an accelerated basis. However, it’s possible that you don’t get all event log data in hourly event log files, especially during site switches, instance refreshes, or unplanned system outages. For complete data, use the daily log files.
-   If event transmission failures take too long to recover from, log files are retransmitted to ensure that they’re delivered at least one time. As a result, latent log files can sometimes contain duplicate event data. When your application consumes latent log files, make sure that your application handles duplicate event delivery.
-   When a daily incremental log file is delivered, a new file replaces the original file with the full set of available logs for that date. To ensure that you’re looking at the most recent log file, check the CreatedDate field.
-   We recommend that you always query the EventLogFile object for new log files to ensure that you also include latent ones. To identify newly created log files, use the EventLogFile CreatedDate field. Hourly and daily incremental logs are delivered differently. For details, see [Differences Between Hourly and 24-Hour Event Logs](atlas.en-us.api_rest.meta/api_rest/event_log_file_hourly_diff.htm "You receive event log files approximately every hour in addition to 24-hour log files. Review the differences between the two logs so that you can filter your files to analyze the event data you want.").

All queries and examples in this section require the View Event Log Files and API Enabled user permissions. Users with the View All Data permission can also view event monitoring data.

-   **[Describe Event Monitoring Using REST](atlas.en-us.api_rest.meta/api_rest/dome_event_log_file_describe.htm)**
    Use the \*\*\* resource to retrieve all metadata for an object, including information about fields, URLs, and child relationships.
-   **[Query Event Monitoring Data with REST](atlas.en-us.api_rest.meta/api_rest/dome_event_log_file_query.htm)**
    Use the Query resource to retrieve field values from a record. Specify the fields you want to retrieve in the fields parameter and use the GET method of the resource.
-   **[Get Event Monitoring Content from a Record](atlas.en-us.api_rest.meta/api_rest/dome_event_log_file_blob.htm)**
    Use the sObject Blob Retrieve resource to retrieve BLOB data for a given record.
-   **[Download Large Event Log Files Using cURL with REST](atlas.en-us.api_rest.meta/api_rest/dome_event_log_file_download.htm)**
    You might have some event log files that are larger than your tool can handle. A command line tool such as cURL is one method to download files larger than 100 MB using the sObject Blob Get object
-   **[Delete Event Monitoring Data](atlas.en-us.api_rest.meta/api_rest/event_log_file_delete.htm)**
    You can delete event log files that contain a user’s log data. Deleting log files helps you comply with data protection and privacy regulations and controls the information that others can access. You can’t delete individual rows from event logs. Instead, you must delete the entire log file that contains the user activity.
-   **[Query or View Hourly Event Log Files](atlas.en-us.api_rest.meta/api_rest/event_log_file_hourly_overview.htm)**
    To review events in your org on an accelerated basis, get event log files in hourly increments for recent activity. Hourly event log files can give you quicker visibility into security anomalies and custom code performance issues.

-   [← Previous](atlas.en-us.api_rest.meta/api_rest/using_resources_working_with_processes.htm "Working with Approval Processes and Process Rules")
-   [Next →](atlas.en-us.api_rest.meta/api_rest/using_composite_resources.htm "Using Composite Resources")

## Related Topics

- Differences Between Hourly and 24-Hour Event Logs (atlas.en-us.api_rest.meta/api_rest/event_log_file_hourly_diff.htm)
- Describe Event Monitoring Using REST (atlas.en-us.api_rest.meta/api_rest/dome_event_log_file_describe.htm)
- Query Event Monitoring Data with REST (atlas.en-us.api_rest.meta/api_rest/dome_event_log_file_query.htm)
- Get Event Monitoring Content from a Record (atlas.en-us.api_rest.meta/api_rest/dome_event_log_file_blob.htm)
- Download Large Event Log Files Using cURL with REST (atlas.en-us.api_rest.meta/api_rest/dome_event_log_file_download.htm)
- Delete Event Monitoring Data (atlas.en-us.api_rest.meta/api_rest/event_log_file_delete.htm)
- Query or View Hourly Event Log Files (atlas.en-us.api_rest.meta/api_rest/event_log_file_hourly_overview.htm)
- ← Previous (atlas.en-us.api_rest.meta/api_rest/using_resources_working_with_processes.htm)
- Next → (atlas.en-us.api_rest.meta/api_rest/using_composite_resources.htm)
