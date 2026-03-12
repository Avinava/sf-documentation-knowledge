---
title: "Content Transfer Event Type"
domain: object-reference
topic: content-transfer-event-type
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:09.075Z
estimatedTokens: 961
keywords: [Content, Transfer, Event, events, contain, downloads, uploads, previews, includes, performed, files, attachments, records]
---

# Content Transfer Event Type

> Content Transfer events contain information about content transfer
         events, such as downloads, uploads, and previews. This information includes events
         performed on files and attachments to records.

# Content Transfer Event Type

Content Transfer events contain information about content transfer events, such as downloads, uploads, and previews. This information includes events performed on files and attachments to records.

For details about event monitoring, see the [Trailhead Event Monitoring module](https://trailhead.salesforce.com/en/modules/event_monitoring/units/event_monitoring_intro "HTML (New Window)") or [REST API Developer’s Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/using_resources_event_log_files.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| DOCUMENT_ID | TypeIdDescriptionThe 15-character ID of the document that’s being shared. |
| DOCUMENT_ID_DERIVED | TypeIdDescriptionThe 18-character case insensitive ID of the document that’s being shared. |
| EVENT_TYPE | TypeStringDescriptionThe type of event. The value is always ContentTransfer. |
| FILE_PREVIEW_TYPE | TypeStringDescriptionThe content type of the file preview. |
| FILE_TYPE | TypeStringDescriptionThe content type of the file version. |
| ORGANIZATION_ID | TypeIdDescriptionThe 15-character ID of the organization.For example: 00D000000000123. |
| REQUEST_ID | TypeStringDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same REQUEST_ID.For example: 3nWgxWbDKWWDIk0FKfF5DV. |
| SIZE_BYTES | TypeNumberDescriptionThe size of the file transfer, in bytes. |
| TIMESTAMP | TypeStringDescriptionThe access time of Salesforce services in GMT.For example: 20130715233322.670. |
| TIMESTAMP_DERIVED | TypeDateTimeDescriptionThe access time of Salesforce services in ISO8601-compatible format (YYYY-MM-DDTHH:MM:SS.sssZ).For example: 2015-07-27T11:32:59.555Z. Timezone is GMT. |
| TRANSACTION_TYPE | TypeStringDescriptionThe operation that was performed, including operations on files and attachments to records. For example, you can track operations in the Attachments related list on a case.Possible ValuesVersionDownloadAction and VersionDownloadApi represent downloads via the user interface and API respectively.VersionRenditionDownload represents a file preview action.saveVersion represents a file that’s being uploaded. |
| USER_ID | TypeIdDescriptionThe 15-character ID of the user who’s using Salesforce services through the UI or the API.For example: 00530000009M943 |
| USER_ID_DERIVED | TypeIdDescriptionThe 18-character case insensitive ID of the user who’s using Salesforce services through the UI or the API.For example: 00590000000I1SNIA0. |
| VERSION_ID | TypeIdDescriptionThe 15-character ID of the content version. |
| VERSION_ID_DERIVED | TypeIdDescriptionThe 18-character case insensitive ID of the content version. |

#### See Also

-   [EventLogFile Supported Event Types](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_supportedeventtypes.htm "The EventType field in the EventLogFile object supports these events. Some common fields, such as CPU_TIME and RUN_TIME, can have null or zero values depending on how the events are generated for a given feature. Sometimes, three quotation marks appear around event data containing special characters in the CSV file. The third quotation mark is necessary for tools and applications to parse the field data at the correct field value boundary.")

-   [EventLogFile](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm "Represents event log files for event monitoring. The event monitoring product gathers information about your Salesforce org’s operational events, which you can use to analyze usage trends and user behavior. This object is available in API version 32.0 and later. The Interval and Sequence fields are available only in API version 37.0 and later.")

## Related Topics

- EventLogFile Supported Event Types (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_supportedeventtypes.htm)
- EventLogFile (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm)
