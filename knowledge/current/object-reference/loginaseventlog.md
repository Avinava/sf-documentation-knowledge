---
title: "LoginAsEventLog"
domain: object-reference
topic: loginaseventlog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:12.532Z
estimatedTokens: 799
keywords: [LoginAsEventLog, user, logs, another, org, API, version, 61.0, later, Calls, Special, Access, Rules]
---

# LoginAsEventLog

> LoginAsEventLog contains details about when a user logs in as another user in
         your org. This object is available in API version
      61.0
      and later.

# LoginAsEventLog

LoginAsEventLog contains details about when a user logs in as another user in your org. This object is available in API version 61.0 and later.

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
| ClientIp | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe IP address of the client that’s using Salesforce services. A Salesforce internal IP (such as a login from AppExchange) is shown as “Salesforce.com IP”. For example: 96.43.144.26. |
| CpuTime | TypedoublePropertiesFilter, Nillable, SortDescriptionThe CPU time in milliseconds used to complete the request. This field indicates the amount of activity taking place in the app server layer. |
| DelegatedUserIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionUnique ID that identifies the user who’s logging in as, or impersonating, another user. For example: 00530000009M943. |
| DelegatedUserName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe username of the user who’s logging in as, or impersonating, another user. |
| LoginKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe string that ties together all events in a given user’s login session. It starts with a login event and ends with either a logout event or the user session expiring. For example: GeJCsym5eyvtEK2I. |
| RequestIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same RequestIdentifier. For example: 3nWgxWbDKWWDIk0FKfF5DV. |
| RunTime | TypedoublePropertiesFilter, Nillable, SortDescriptionThe amount of time that the request took in milliseconds. |
| SessionKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe impersonated user’s unique session ID. You can use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started. For Login Event Type, this field is usually null because the event is captured before a session is created. For example: d7DEq/ANa7nNZZVD. |
| Timestamp | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe access time of Salesforce services in GMT. For example, 2020-01-20T19:12:26.965Z. Milliseconds are the most granular setting. |
| Uri | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe URI of the page that’s receiving the request. For example: /home/home.jsp. |
| UserIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionUnique ID that identifies the user who is being logged in as, or impersonated, by another user. For example: 005000000000123. |
