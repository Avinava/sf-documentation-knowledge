---
title: "EventLogFile"
domain: object-reference
topic: eventlogfile
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:08.834Z
estimatedTokens: 1700
keywords: [EventLogFile, event, log, files, monitoring, product, gathers, Salesforce, org’s, operational, events, analyze, usage, trends, user]
---

# EventLogFile

> Represents event log files for event monitoring. The event monitoring
   product gathers information about your Salesforce org’s operational events, which you can use to
   analyze usage trends and user behavior. This object is available in API version 32.0 and
  later. The Interval and Sequence fields are available
  only in API version 37.0 and later.

# EventLogFile

Represents event log files for event monitoring. The event monitoring product gathers information about your Salesforce org’s operational events, which you can use to analyze usage trends and user behavior. This object is available in API version 32.0 and later. The Interval and Sequence fields are available only in API version 37.0 and later.

You can interact with event monitoring data by querying fields on the EventLogFile object (like EventType and LogDate). CreatedDate tracks when the log file was generated. To view the underlying event data, query the LogFile field. The EventType determines the schema of this field. Log files don’t count towards your org’s data or file storage allocations. For more information, see [EventLogFile Supported Event Types](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_supportedeventtypes.htm "The EventType field in the EventLogFile object supports these events. Some common fields, such as CPU_TIME and RUN_TIME, can have null or zero values depending on how the events are generated for a given feature. Sometimes, three quotation marks appear around event data containing special characters in the CSV file. The third quotation mark is necessary for tools and applications to parse the field data at the correct field value boundary.").

Composite requests that include multiple API requests in a single call aren’t supported. In the event of a composite request, EventLogFile captures only the parent request.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

Log data schema for each EventType can change. With each new release, use the LogFileFieldNames and LogFileFieldTypes fields to validate the schema changes. In the unlikely case in which no log files are generated for 24 hours, contact Salesforce Customer Support.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=object_reference)

#### Tip

Debug and troubleshoot performance issues by correlating logs using the customizable Request Identifier field, available in all Event Monitoring logs. To correlate logs pertaining to an API request call, set the X-SFDC-REQUEST-ID header with a 32 character OTEL compatible TraceId or a 22 -character alphanumeric Id. Using SOQL, search for the Event Monitoring logs with this RequestId to correlate the logs and see the unit of work performed as a part of the API transaction.

For details about event monitoring, see the [Trailhead Event Monitoring module](https://trailhead.salesforce.com/en/modules/event_monitoring/units/event_monitoring_intro "HTML (New Window)").

## Special Access Rules

Accessing this object requires View Event Log Files and API Enabled user permissions. Users with View All Data permission can view event log files.

## Supported Calls

describeSObjects(), query(), retrieve()

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

You can only delete event log file data if you enable the **Delete event monitoring data** setting in Setup.

## Fields

| Field | Details |
| --- | --- |
| ApiVersion | TypedoublePropertiesFilter, SortDescriptionThe specific API version for this log file. This field is available in API version 30.0 and later. |
| EventType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe event type—API, Login, Report, URI, and so forth. Use to determine which files were generated for your org. For the corresponding LogFile schema, see EventLogFile Supported Event Types. |
| Interval | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe generation schedule for the event log file. Possible values are:DailyHourlyThis field is available in API version 37.0 and later. This field is available in API version 37.0 and later to customers with hourly Event Log Files. |
| LogDate | TypedateTimePropertiesFilter, SortDescriptionThe date and time of the log file’s creation. For daily event log files, tracks usage activity for a 24-hour period, from 12:00 a.m. to 11:59 p.m. UTC time. For hourly event log files, indicates the hour in which the log file was generated. For example, for events that occur between 11:00 AM and 12:00 PM on 3/7/2016, this field’s value is 2016-03-07T11:00:00.000Z.NoteFor hourly event log files, we recommend using CreatedDate to query the date and time that an EventLogFile object was created. |
| LogFile | Typebase64DescriptionEncoded file data in .csv format. The EventType field defines the schema for this data. |
| LogFileContentType | TypestringPropertiesFilter, Group, SortDescriptionThe content type of the log file; always .csv. |
| LogFileFieldNames | TypestringPropertiesNillableDescriptionThe ordered list of fields in the log file data.NoteLogFileFieldNames and LogFileFieldTypes are specific to each EventType. For example, LogFileFieldNames has a different value for an API EventType and a Login EventType. |
| LogFileFieldTypes | TypestringPropertiesNillableDescriptionThe ordered list of field types in the log file data (String, Id, and so forth).NoteLogFileFieldNames and LogFileFieldTypes are specific to each EventType. For example, LogFileFieldTypes has a different value for an API EventType and a Login EventType. |
| LogFileLength | TypedoublePropertiesFilter, SortDescriptionThe log file length in bytes. You can use this field to plan storage needs for your log files. |
| Sequence | TypeintPropertiesFilter, Group, SortDescriptionThe number for the portion of the event log file data captured in an hour. For 24-hour event log file generation, the value of this field is 0. For hourly event log files, the initial value is 1. This value increases by 1 when events are added in the same hour after the latest event log file is created. The value resets to 1 in the subsequent hour. For example, you have activity between 2:00 and 3:00 PM. Two-log files are generated that contain the event log data for that hour, with Sequence values of 1 and 2. For event log data that occurs at 3:01 PM, the Sequence value resets to 1. This field is available in API version 37.0 and later. |

-   **[EventLogFile Supported Event Types](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_supportedeventtypes.htm)**
    The EventType field in the EventLogFile object supports these events. Some common fields, such as CPU\_TIME and RUN\_TIME, can have null or zero values depending on how the events are generated for a given feature. Sometimes, three quotation marks appear around event data containing special characters in the CSV file. The third quotation mark is necessary for tools and applications to parse the field data at the correct field value boundary.

## Related Topics

- EventLogFile
						Supported Event Types (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_supportedeventtypes.htm)
- EventLogFile Supported Event Types (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_supportedeventtypes.htm)
