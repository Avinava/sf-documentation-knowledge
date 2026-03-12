---
title: "NamedCredentialEventLog"
domain: object-reference
topic: namedcredentialeventlog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:13.080Z
estimatedTokens: 749
namespace: Type
keywords: [NamedCredentialEventLog, Named, Credential, event, captures, Apex, callouts, credentials, their, endpoints, audit, installed, managed, packages, don’t]
---

# NamedCredentialEventLog

> The Named Credential event type captures information about Apex callouts that
         use named credentials as their endpoints. Use this event type to audit the installed
         managed packages that use named credentials. If you don’t recognize the package namespace
         in the named credential event log file, then you can investigate whether a security breach
         has occurred.  This object is available in API version 65.0 and later.

**Namespace:** `Type`

# NamedCredentialEventLog

The Named Credential event type captures information about Apex callouts that use named credentials as their endpoints. Use this event type to audit the installed managed packages that use named credentials. If you don’t recognize the package namespace in the named credential event log file, then you can investigate whether a security breach has occurred. This object is available in API version 65.0 and later.

## Supported Calls

describeSObjects(), query()

## Special Access Rules

To access this object, you must have the View Event Log Object Data user permission.

## Fields

| Field | Details |
| --- | --- |
| BotIdentifier | TypeStringDescriptionThe ID of the bot. |
| BotSessionIdentifier | TypeStringDescriptionThe bot session ID. |
| CallerPackageNamespace | TypeStringPropertiesFilter, Group, Nillable, SortDescriptionIf an Apex callout using a Named Credential endpoint is initiated from a package, then this field contains the package’s namespace. If the callout isn’t initiated from a package, then this field is empty. |
| ClientIp | TypeStringPropertiesFilter, Group, Nillable, SortDescriptionThe IP address of the client that is using Salesforce services. A Salesforce internal IP (such as a login from AppExchange) is shown as “Salesforce.com IP”. |
| CpuTime | TypeDoublePropertiesFilter, Nillable, SortDescriptionThe CPU time in milliseconds used to complete the request. This field indicates the amount of activity taking place in the app server layer. |
| LoginKey | TypeStringPropertiesFilter, Group, Nillable, SortDescriptionThe string that ties together all events in a given user’s login session. It starts with a login event and ends with either a logout event or the user session expiring. |
| NamedCredentialName | TypeStringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the named credential that’s the endpoint of the Apex callout. |
| PlannerIdentifier | TypeStringDescriptionThe ID of the agent planner. |
| RequestIdentifier | TypeStringPropertiesFilter, Group, Nillable, SortDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same REQUEST_ID. |
| RunTime | TypeDoublePropertiesFilter, Nillable, SortDescriptionThe amount of time that the request took in milliseconds.. |
| SessionKey | TypeStringPropertiesFilter, Group, Nillable, SortDescriptionThe user’s unique session ID. You can use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started. |
| Timestamp | TypeDateTimePropertiesFilter, Nillable, SortDescriptionThe access time of Salesforce services in GMT. |
| Uri | TypeStringPropertiesFilter, Group, Nillable, SortDescriptionThe URI of the page that’s receiving the request. |
| UserIdentifier | TypeStringPropertiesFilter, Group, Nillable, SortDescriptionThe 15-character ID of the user who is using Salesforce services through the UI or the API. |
