---
title: "Bulk API Request Event Type"
domain: object-reference
topic: bulk-api-request-event-type
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:09.002Z
estimatedTokens: 1017
keywords: [Bulk, API, Event, captures, requests, received, job, batch, completes]
---

# Bulk API Request Event Type

> The Bulk API request event captures when Bulk API requests are
         received to create a job, update a job, create a batch, update a batch, and when a job
         completes.

# Bulk API Request Event Type

The Bulk API request event captures when Bulk API requests are received to create a job, update a job, create a batch, update a batch, and when a job completes.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

This event type doesn’t include Bulk API 2.0 requests. For information about the BulkApi2 event types, see [Bulk API 2.0 Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_bulkapi2.htm "BulkApi2 events contain details about Bulk API 2.0 requests.").

For details about event monitoring, see the [Trailhead Event Monitoring module](https://trailhead.salesforce.com/en/modules/event_monitoring/units/event_monitoring_intro "HTML (New Window)") or [REST API Developer’s Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/using_resources_event_log_files.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| API_VERSION | TypeNumberDescriptionThe API version. |
| BATCH_ID | TypeStringDescriptionThe 15-character ID of the Bulk API batch. |
| CLIENT_IP | TypeStringDescriptionThe IP address of the client that’s using Salesforce services. A Salesforce internal IP (such as a login from AppExchange) is shown as “Salesforce.com IP”.For example: 96.43.144.26. |
| CLIENT_NAME | TypeEscapedStringDescriptionThe name of the client making the request. |
| CONCURRENCY_MODE | TypeStringDescriptionThe concurrency mode selected by the user. |
| CONNECTED_APP_ID | TypeStringDescriptionThe ID of the connected app making a request. |
| CPU_TIME | TypeNumberDescriptionThe CPU time in milliseconds used to complete the request. This field indicates the amount of activity taking place in the app server layer. |
| ERROR_MESSAGE | TypeEscapedStringDescriptionThe type of entity that the Bulk API used. |
| EVENT_TYPE | TypeStringDescriptionThe type of event. The value is always BulkApiRequest. |
| JOB_ID | TypeStringDescriptionThe 15-character ID of the Bulk API job. |
| LOGIN_KEY | TypeStringDescriptionThe string that ties together all events in a given user’s login session. It starts with a login event and ends with either a logout event or the user session expiring.For example: GeJCsym5eyvtEK2I. |
| OPERATION_TYPE | TypeStringDescriptionThe type of Bulk API operation. |
| ORGANIZATION_ID | TypeIdDescriptionThe 15-character ID of the organization.For example: 00D000000000123. |
| REQUEST_ID | TypeStringDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same REQUEST_ID.For example: 3nWgxWbDKWWDIk0FKfF5DV. |
| REQUEST_PATH | TypeStringDescriptionThe path of the request. |
| RUN_TIME | TypeNumberDescriptionThe amount of time that the request took in milliseconds. |
| SESSION_KEY | TypeStringDescriptionThe user’s unique session ID. You can use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started.For example: d7DEq/ANa7nNZZVD. |
| STATUS_CODE | TypeNumberDescriptionThe HTTP Status code indicating whether the batch was successful. |
| SUCCESS | TypeBooleanDescriptionWhether the batch was successful. |
| TIMESTAMP | TypeStringDescriptionThe access time of Salesforce services in GMT.For example: 20130715233322.670. |
| TIMESTAMP_DERIVED | TypeDateTimeDescriptionThe access time of Salesforce services in ISO8601-compatible format (YYYY-MM-DDTHH:MM:SS.sssZ).For example: 2015-07-27T11:32:59.555Z. The timezone is GMT. |
| URI | TypeStringDescriptionThe URI of the page that’s receiving the request.For example: /home/home.jsp. |
| URI_ID_DERIVED | TypeIdDescriptionThe 18-character case insensitive ID of the URI of the page that’s receiving the request. |
| USER_ID | TypeIdDescriptionThe ID of the user making the request. |
| USER_ID_DERIVED | TypeIdDescriptionThe 18-character case insensitive ID of the user who’s using Salesforce services through the UI or the API.For example: 00590000000I1SNIA0. |

## Related Topics

- Bulk API 2.0 Event Type (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_bulkapi2.htm)
