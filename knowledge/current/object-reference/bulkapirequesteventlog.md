---
title: "BulkApiRequestEventLog"
domain: object-reference
topic: bulkapirequesteventlog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:05.729Z
estimatedTokens: 837
keywords: [BulkApiRequestEventLog, Bulk, API, event, captures, requests, received, job, batch, completes, version, 65.0, later, Calls, Special]
---

# BulkApiRequestEventLog

> The Bulk API request event captures when Bulk API requests are received to
         create a job, update a job, create a batch, update a batch, and when a job completes.
      This object is available in API version 65.0 and later.

# BulkApiRequestEventLog

The Bulk API request event captures when Bulk API requests are received to create a job, update a job, create a batch, update a batch, and when a job completes. This object is available in API version 65.0 and later.

## Supported Calls

describeSObjects(), query()

## Special Access Rules

To access this object, you must have the View Event Log Object Data user permission.

## Fields

| Field | Details |
| --- | --- |
| ApiVersion | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe API version. |
| BatchIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe 15-character ID of the Bulk API batch. |
| ClientIp | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe IP address of the client that’s using Salesforce services. A Salesforce internal IP (such as a login from AppExchange) is shown as “Salesforce.com IP”. |
| ClientName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the client making the request. |
| ConcurrencyMode | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe concurrency mode selected by the user. |
| ConnectedAppIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the connected app making a request. |
| CpuTime | TypedoublePropertiesFilter, Nillable, SortDescriptionThe CPU time in milliseconds used to complete the request. This field indicates the amount of activity taking place in the app server layer. |
| ErrorMessage | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe type of entity that the Bulk API used. |
| IsSuccess | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionWhether the batch was successful. |
| JobIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe 15-character ID of the Bulk API job |
| LoginKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe hash of the login id to allow click tracking across multiple transactions from login to action. |
| OperationType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe type of Bulk API operation. |
| RequestIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same REQUEST_ID. |
| RequestPath | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe path of the request. |
| RunTime | TypedoublePropertiesFilter, Nillable, SortDescriptionAmount of time the request took, as measured by SFDC code. |
| SessionKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe hash of the sid to allow click tracking across multiple transactions after login to action. |
| StatusCode | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe HTTP Status code indicating whether the batch was successful. |
| Timestamp | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp at which the log event was generated. |
| Uri | TypestringPropertiesFilter, Group, Nillable, SortDescriptionURI of the page receiving the request. |
| UserIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionDescriptionThe 15-character ID of the user who’s using Salesforce services through the UI or the API. For example: 00530000009M943. |
