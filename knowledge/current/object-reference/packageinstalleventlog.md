---
title: "PackageInstallEventLog"
domain: object-reference
topic: packageinstalleventlog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:14.228Z
estimatedTokens: 855
keywords: [PackageInstallEventLog, stores, package, installation, organization, API, version, 62.0, later, Calls, Special, Access, Rules]
---

# PackageInstallEventLog

> PackageInstallEventLog stores details about package installation in the
         organization. This object is available in API version 62.0 and later.

# PackageInstallEventLog

PackageInstallEventLog stores details about package installation in the organization. This object is available in API version 62.0 and later.

## Supported Calls

describeSObjects(), query()

## Special Access Rules

To access this object, you must have the View Event Log Object Data user permission.

## Fields

| Field | Details |
| --- | --- |
| ClientIp | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe IP address of the client that’s using Salesforce services. A Salesforce internal IP (such as a login from AppExchange) is shown as “Salesforce.com IP”.For example: 96.43.144.26. |
| CpuTime | TypedoublePropertiesFilter, Nillable, SortDescriptionThe CPU time in milliseconds used to complete the request. This field indicates the amount of activity taking place in the app server layer. |
| ErrorType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionA general categorization of any error that’s encountered. |
| IsManaged | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionTrue if the operation is performed on a managed package.The default value is false. |
| IsPush | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionTrue if the package was installed as a result of a push upgrade.The default value is false. |
| IsReleased | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionTrue if the operation is performed on a released package.The default value is false. |
| IsSuccessful | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionTrue if the package was successfully installed.The default value is false. |
| LoginKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe string that ties together all events in a given user’s login session. It starts with a login event and ends with either a logout event or the user session expiring.For example: GeJCsym5eyvtEK2I. |
| OperationType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe type of package operation.Possible ValuesINSTALLUPGRADEEXPORTUNINSTALLVALIDATE_PACKAGEINIT_EXPORT_PKG_CONTROLLER |
| PackageName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the package that’s being installed. |
| RequestIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same REQUEST_ID.For example: 3nWgxWbDKWWDIk0FKfF5DV. |
| RunTime | TypedoublePropertiesFilter, Nillable, SortDescriptionThe amount of time that the request took in milliseconds. |
| SessionKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe user’s unique session ID. You can use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started.For example: d7DEq/ANa7nNZZVD. |
| Timestamp | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe access time of Salesforce services in GMT.For example: 20130715233322.670. |
| Uri | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe URI of the page that’s receiving the request.For example: /home/home.jsp. |
| UserIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe 18-character ID of the user who’s using Salesforce services through the UI or the API.For example: 00530000009M943YAS |
