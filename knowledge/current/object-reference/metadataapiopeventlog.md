---
title: "MetadataApiOpEventLog"
domain: object-reference
topic: metadataapiopeventlog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:12.876Z
estimatedTokens: 629
keywords: [MetadataApiOpEventLog, stores, Metadata, API, retrieval, deployment, requests, version, 62.0, later, Calls, Special, Access, Rules]
---

# MetadataApiOpEventLog

> MetadataApiOpEventLog stores details of Metadata API retrieval and deployment
         requests.  This object is available in API version 62.0 and later.

# MetadataApiOpEventLog

MetadataApiOpEventLog stores details of Metadata API retrieval and deployment requests. This object is available in API version 62.0 and later.

## Supported Calls

describeSObjects(), query()

## Special Access Rules

To access this object, you must have the View Event Log Object Data user permission.

## Fields

| Field | Details |
| --- | --- |
|  |  |
| ClientIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe API client ID. |
| ClientIp | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe IP address of the client that’s using Salesforce services. A Salesforce internal IP (such as a login from AppExchange) is shown as “Salesforce.com IP”.For example: 96.43.144.26. |
| CpuTime | TypedoublePropertiesFilter, Nillable, SortDescriptionThe CPU time in milliseconds used to complete the request. This field indicates the amount of activity taking place in the app server layer. |
| LoginKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe string that ties together all events in a given user’s login session. It starts with a login event and ends with either a logout event or the user session expiring.For example: GeJCsym5eyvtEK2I. |
| OperationType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe operation that’s being performed.Possible Valuesmeta_deploymeta_listmeta_retrievemeta_synchronous_createmeta_synchronous_readmeta_synchronous_upsert |
| RequestIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionGlobally unique id for a given request.For example: 3nWgxWbDKWWDIk0FKfF5DV. |
| RunTime | TypedoublePropertiesFilter, Nillable, SortDescriptionThe amount of time that the request took in milliseconds. |
| SessionKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe user’s unique session ID. You can use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started.For example: d7DEq/ANa7nNZZVD. |
| Timestamp | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe access time of Salesforce services in GMT.For example: 20130715233322.670. |
| Uri | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe URI of the page that’s receiving the request.For example: /home/home.jsp. |
| UserIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe 18-character ID of the user who’s using Salesforce services through the UI or the API.For example: 00530000009M943YAS |
