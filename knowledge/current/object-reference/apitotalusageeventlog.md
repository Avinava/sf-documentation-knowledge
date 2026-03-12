---
title: "ApiTotalUsageEventLog"
domain: object-reference
topic: apitotalusageeventlog
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:04.620Z
estimatedTokens: 775
keywords: [ApiTotalUsageEventLog, API, Total, Usage, Event, Log, Platform, SOAP, REST, Bulk, requests, version, 61.0, later, Calls]
---

# ApiTotalUsageEventLog

> API Total Usage Event Log contains details about Platform SOAP API, Platform
         REST API, and Bulk API requests. This object is available in API version 61.0 and
      later.

# ApiTotalUsageEventLog

API Total Usage Event Log contains details about Platform SOAP API, Platform REST API, and Bulk API requests. This object is available in API version 61.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

This object stores event data that's queryable from platform APIs. For event data stored in event log files, see [EventLogFile](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm).

## Supported Calls

describeSObjects(), query()

## Special Access Rules

To access this object, you must have the View Event Log Object Data user permission.

## Fields

| Field | Details |
| --- | --- |
| ApiFamily | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe API family. For example, REST, SOAP, or Bulk. |
| ApiResource | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe API method or resource. For example, describeSObjects for SOAP. |
| BotIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the bot. |
| BotSessionIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe bot session ID. |
| ClientIp | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe IP address of the client that’s using Salesforce services. A Salesforce internal IP, such as a login from AppExchange, is shown as “Salesforce.com IP”. For example: 96.43.144.26. |
| ClientName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the client making the API request. |
| ConnectedAppIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the connected app making the API request. |
| HttpMethod | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe HTTP method. For example, GET. |
| IsApiLimitCounted | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionWhether the request counted against the API limit (true) or not (false).The default value is false. |
| ObjectName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the object accessed by the API request. |
| PlannerIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the agent planner. |
| RequestIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same RequestIdentifier. For example: 3nWgxWbDKWWDIk0FKfF5DV. |
| StatusCode | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe HTTP response status code for the request. |
| Timestamp | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe access time of Salesforce services in GMT. For example, 2020-01-20T19:12:26.965Z. Milliseconds are the most granular setting. |
| UserIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the user who’s using Salesforce services through the UI or the API. For example: 00530000009M943. |
