---
title: "ApexLog"
domain: tooling-api
topic: apexlog
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:44.617Z
estimatedTokens: 618
keywords: [ApexLog, Represents, debug, log., Supported, SOAP, Calls, REST, HTTP, Fields]
---

# ApexLog

> Represents a debug log.

# ApexLog

Represents a debug log.

To retrieve a raw log by ID, use the REST resource: /sobjects/**ApexLog/id**/Body/. (Available from API version 28.0 or later.)

## Supported SOAP Calls

delete(), describeSObjects(), query(), retrieve()

## Supported REST HTTP Methods

Query, GET, DELETE

## Fields

| Field | Details |
| --- | --- |
| Application | TypetextareaPropertiesFilter, Group, SortDescriptionThis value depends on the client type that triggered the log or heap dump.For API clients, this value is the client ID.For browser clients, this value is Browser.This field is required. |
| DurationMilliseconds | TypeintPropertiesFilter, Group, SortDescriptionThe duration of the transaction in milliseconds. This field is required. |
| Location | TypepicklistPropertiesFilter, Group, Sort, Nillable, Restricted picklistDescriptionSpecifies the location of the origin of the log or heap dump. Values are:Monitoring—Generated as part of debug log monitoring, and visible to all administrators. These types of logs are maintained for seven days or until a user deletes them.SystemLog—Generated as part of system log monitoring, and visible only to you. These types of logs are maintained for 24 hours or until the user clears them. |
| LogLength | TypeintPropertiesFilter, Group, SortDescriptionLength of the log or heap dump in bytes. This field is required. |
| LogUserId | TypereferencePropertiesFilter, Group, Sort, NillableDescriptionID of the user whose actions triggered the debug log or heap dump. |
| Operation | TypestringPropertiesFilter, Group, SortDescriptionName of the operation that triggered the debug log or heap dump, such as APEXSOAP, Apex Sharing Recalculation, and so on. This field is required. |
| Request | TypestringPropertiesFilter, Group, SortDescriptionRequest type. Values are:API—Request came from an API.Application—Request came from the Salesforce user interface.This field is required. |
| RequestIdentifier | TypestringPropertiesFilter, Group, SortDescriptionThe unique identifier of the request that triggered the debug log. Use this request identifier to correlate multiple debug logs triggered by the same request. |
|  |  |
| StartTime | TypedateTimePropertiesFilter, SortDescriptionStart time of the transaction. This field is required. |
| Status | TypestringPropertiesFilter, Group, SortDescriptionStatus of the transaction. This value is either Success, or the text of an unhandled Apex exception. This field is required. |
