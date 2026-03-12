---
title: "Wave Download Event Type"
domain: object-reference
topic: wave-download-event-type
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:09.759Z
estimatedTokens: 1036
keywords: [Wave, Download, Event, events, represent, downloads, made, lens, explorations, dashboard, widgets, CRM, Analytics, user, captured]
---

# Wave Download Event Type

> Wave Download events represent downloads made from lens explorations
         and dashboard widgets in the CRM Analytics user interface. A Wave Download event type is
         captured when a user downloads images ( .png ), Microsoft® Excel® data ( .xls ), or
         comma-separated values ( .csv ) files.

# Wave Download Event Type

Wave Download events represent downloads made from lens explorations and dashboard widgets in the CRM Analytics user interface. A Wave Download event type is captured when a user downloads images ( .png ), Microsoft® Excel® data ( .xls ), or comma-separated values ( .csv ) files.

For details about event monitoring, see the [Trailhead Event Monitoring module](https://trailhead.salesforce.com/en/modules/event_monitoring/units/event_monitoring_intro "HTML (New Window)") or [REST API Developer’s Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/using_resources_event_log_files.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| ASSET_ID | TypeIDDescriptionThe ID of the asset the user downloads from. |
| ASSET_TYPE | TypeStringDescriptionThe type of the asset the user downloads from.ValuesLens—A lens is a view into a dataset used in an exploratory mode or to get insight to a specific business question. The lens can be saved and shared independently. It can also be clipped to a dashboard.Dashboard—A dashboard is a curated set of charts, metrics, and tables based on the data in one or more lenses. |
| CLIENT_IP | TypeStringDescriptionThe IP address of the client that’s using Salesforce services. A Salesforce internal IP (such as a login from AppExchange) is shown as “Salesforce.com IP”.Example96.43.144.26 |
| CPU_TIME | TypeNumberDescriptionThe CPU time in milliseconds used to complete the request. This field indicates the amount of activity taking place in the app server layer. |
| DATASET_IDS | TypeStringDescriptionComma-separated list of IDs of utilized data sets. |
| DOWNLOAD_ERROR | TypeStringDescriptionThe message for the error blocking the download request, if any. |
| DOWNLOAD_FORMAT | TypeStringDescriptionThe data format of the export.Valuespng—Imagecsv—Comma-separated valuesxls— Microsoft Excel |
| EVENT_TYPE | TypeStringDescriptionThe type of event. The value is always WaveDownload. |
| LOGIN_KEY | TypeStringDescriptionThe string that ties together all events in a given user’s login session. It starts with a login event and ends with either a logout event or the user session expiring.ExampleGeJCsym5eyvtEK2I |
| NUMBER_OF_RECORDS | TypeNumberDescriptionThe number of records exported. |
| ORGANIZATION_ID | TypeIdDescriptionThe 15-character ID of the organization.Example00D000000000123 |
| REQUEST_ID | TypeStringDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same REQUEST_ID.Example3nWgxWbDKWWDIk0FKfF5DV |
| RUN_TIME | TypeNumberDescriptionThe amount of time that the request took in milliseconds. |
| SESSION_KEY | TypeStringDescriptionThe user’s unique session ID. You can use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started.Exampled7DEq/ANa7nNZZVD |
| TIMESTAMP | TypeStringDescriptionThe access time of Salesforce services in GMT.For example: 20130715233322.670. |  |
| TIMESTAMP_DERIVED | TypeDateTimeDescriptionThe access time of Salesforce services in ISO8601-compatible format (YYYY-MM-DDTHH:MM:SS.sssZ).For example: 2015-07-27T11:32:59.555Z. Timezone is GMT. |  |
| URI | TypeStringDescriptionThe URI of the page that’s receiving the request.Example/home/home.jsp |
| URI_ID_DERIVED | TypeIDDescriptionThe 18-character case insensitive ID of the URI of the page that’s receiving the request. |
| USER_ID | TypeIdDescriptionThe 15-character ID of the user who’s using Salesforce services through the UI or the API.Example00530000009M943 |
| USER_ID_DERIVED | TypeIdDescriptionThe 18-character case insensitive ID of the user who’s using Salesforce services through the UI or the API.Example00590000000I1SNIA0 |
| USER_TYPE | TypeStringDescriptionThe type of Salesforce user. |
| WAVE_SESSION_ID | TypeStringDescriptionThe ID of a particular session of CRM Analytics. Use this field to determine which log lines originated from a particular session. |
| WAVE_TIMESTAMP | TypeNumberDescriptionThe time at which this log line was generated. |
