---
title: "LightningLoggerEventLog"
domain: object-reference
topic: lightningloggereventlog
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:11.780Z
estimatedTokens: 1443
keywords: [LightningLoggerEventLog, Lightning, Logger, Event, Log, observed, component, logs, API, version, 61.0, later, Calls, Special, Access]
---

# LightningLoggerEventLog

> Lightning Logger Event Log provides information from observed Lightning
         component logs. This object is available in API version 61.0 and later.

# LightningLoggerEventLog

Lightning Logger Event Log provides information from observed Lightning component logs. This object is available in API version 61.0 and later.

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
| AppName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the application the user accessed. |
| BrowserName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the browser the user accessed. |
| BrowserVersion | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe user’s browser version in major.minor format. Some browsers don’t provide a minor version. |
| ClientGeolocation | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe geolocation of the client in the form of <Country>/<State\|Province>. |
| ClientIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe API client ID. |
| ClientIp | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe IP address of the client that’s using Salesforce services. A Salesforce internal IP (such as a login from AppExchange) is shown as “Salesforce.com IP”. For example: 96.43.144.26. |
| ConnectionType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe type of connection.Possible values are:CDMA1xCDMAEDGEEVDO0EVDOAEVDOBGPRSHRPDHSDPAHSUPALTEWIFI |
| DeviceModel | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the device model. For example: iPad, iPhone. |
| DevicePlatform | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe type of application experience in name:experience:form format. Possible values are:NameAPP_BUILDERCUSTOMS1SFXExperienceBROWSERHYBRIDFormDESKTOPPHONETABLET |
| DeviceSessionIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique identifier of the user’s session is based on page load time. When the user reloads a page, a new session starts. For example: 321a1ddfaf924803a075f1e69fc87bc06f53ccd0 |
| LoginKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe string that ties together all events in a given user’s login session. It starts with a login event and ends with either a logout event or the user session expiring. For example: GeJCsym5eyvtEK2I. |
| Message | TypestringPropertiesFilter, Nillable, SortDescriptionThe message is passed to the lightning/logger log() method. The message can be a JSON object or a string. |
| MobileSdkAppType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe mobile SDK application type. Possible Values:HYBRIDHYBRIDLOCALHYBRIDREMOTENATIVEREACTNATIVE |
| MobileSdkVersion | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe mobile SDK application version number. For example, 5.0. |
| OperatingSystemName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe operating system name, derived from the User Agent. For example:AndroidiOSOSXWindows |
| OperatingSystemVersion | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe operating system version, derived from the User Agent. |
| PageContext | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the component hosting the main content of the page. For example: clients:cardsContainer. |
| PageObjectIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique entity identifier of the event. For example: 0013000000I3zJAAAZ. |
| PageObjectType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe object type of the event. For example: task, contacts. |
| PageUrl | TypestringPropertiesFilter, Group, Nillable, SortDescriptionRelative URL of the top-level Lightning Experience or Salesforce mobile app page that the user opened. The page can contain one or more Lightning components. Multiple record IDs can be associated with PageUrl. For example: /sObject/0064100000JXITSAA5/view. |
| RequestIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same RequestIdentifier. For example: 3nWgxWbDKWWDIk0FKfF5DV. |
| SdkAppVersion | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe app version used in this request. |
| SessionKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe user’s unique session ID. You can use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started. For example: d7DEq/ANa7nNZZVD. |
| Timestamp | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe access time of Salesforce services in GMT. For example, 2020-01-20T19:12:26.965Z. Milliseconds are the most granular setting. |
| UiRootActivityIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID for the root activity, if any, when this message was logged. |
| UserIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the user who’s using Salesforce services through the UI or the API. For example: 00530000009M943. |
| UserType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionType of user employing Salesforce services, whether through the UI or API. |
