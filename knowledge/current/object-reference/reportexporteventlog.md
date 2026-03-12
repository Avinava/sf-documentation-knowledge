---
title: "ReportExportEventLog"
domain: object-reference
topic: reportexporteventlog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:16.238Z
estimatedTokens: 664
keywords: [ReportExportEventLog, Report, Export, events, contain, reports, user, exported, event, captures, exports, output, doesn’t, capture, users]
---

# ReportExportEventLog

> Report Export events contain details about reports that a user exported. For
         example, this event type captures when a user exports a report as Details Only output. But
         it doesn’t capture reports that users export as Formatted Report or XLSX Detail output. For
         that data, see the Report event type. This object is available in API version 65.0 and
      later.

# ReportExportEventLog

Report Export events contain details about reports that a user exported. For example, this event type captures when a user exports a report as Details Only output. But it doesn’t capture reports that users export as Formatted Report or XLSX Detail output. For that data, see the Report event type. This object is available in API version 65.0 and later.

## Supported Calls

describeSObjects(), query()

## Special Access Rules

To access this object, you must have the View Event Log Object Data user permission.

## Fields

| Field | Details |
| --- | --- |
| ClientInfo | TypestringPropertiesFilter, Group, Nillable, SortDescriptionInformation about the client that’s using Salesforce services. |
| ClientIp | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe IP address of the client that’s using Salesforce services. A Salesforce internal IP (such as a login from AppExchange) is shown as “Salesforce.com IP”. |
| CpuTime | TypedoublePropertiesFilter, Nillable, SortDescriptionThe CPU time in milliseconds used to complete the request. This field indicates the amount of activity taking place in the app server layer. |
| LoginKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe string that ties together all events in a given user’s login session. It starts with a login event and ends with either a logout event or the user session expiring. |
| ReportDescription | TypestringPropertiesFilter, Group, Nillable, SortDescriptionInformation about the report that was run. |
| RequestIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same REQUEST_ID. |
| RunTime | TypedoublePropertiesFilter, Nillable, SortDescriptionThe amount of time that the request took in milliseconds. |
| SessionKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe user’s unique session ID. You can use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started.For example: d7DEq/ANa7nNZZVD. |
| Timestamp | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe access time of Salesforce services in GMT.For example: 20130715233322.670. |
| Uri | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe URI of the page that’s receiving the request.For example: /home/home.jsp. |
| UserIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe 15-character ID of the user who’s using Salesforce services through the UI or the API.For example: 00530000009M943 |
