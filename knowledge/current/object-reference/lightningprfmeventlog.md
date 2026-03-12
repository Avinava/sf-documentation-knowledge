---
title: "LightningPrfmEventLog"
domain: object-reference
topic: lightningprfmeventlog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:11.829Z
estimatedTokens: 1391
keywords: [LightningPrfmEventLog, Lightning, Performance, events, track, trends, Experience, Salesforce, mobile, app, API, version, 65.0, later, Calls]
---

# LightningPrfmEventLog

> Lightning Performance events track trends in Lightning Experience and
         Salesforce mobile app performance.  This object is available in API version 65.0 and
      later.

# LightningPrfmEventLog

Lightning Performance events track trends in Lightning Experience and Salesforce mobile app performance. This object is available in API version 65.0 and later.

## Supported Calls

describeSObjects(), query()

## Special Access Rules

To access this object, you must have the View Event Log Object Data user permission.

## Fields

| Field | Details |
| --- | --- |
| AppName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the application that the user accessed. |
| BrowserName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the browser that the user accessed.ExampleChrome, Safari |
| BrowserVersion | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe version of the browser that the user accessed in major.minor version format. Some browsers don’t provide a minor version. |
| ClientGeolocation | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe geolocation of the client in the form of <Country>/<State\|Province>.ExampleUnited States/California |
| ClientIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe API client ID. |
| ClientIp | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe IP address of the client that’s using Salesforce services. A Salesforce internal IP (such as a login from AppExchange) is shown as “Salesforce.com IP”.For example: 96.43.144.26. |
| ConnectionType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe type of connection.Possible ValuesCDMA1xCDMAEDGEEVDO0EVDOAEVDOBGPRSHRPDHSDPAHSUPALTEWIFI |
| DeviceIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique identifier used to identify a device when tracking events. DEVICE_ID is a generated value that’s created when the mobile app is initially run after installation. |
| DeviceModel | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the device model.ExampleiPad, iPhone |
| DevicePlatform | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe type of application experience in name:experience:form format.Possible Valuesname: APP_BUILDER, CUSTOM, S1, SFXexperience: BROWSER, HYBRIDform: DESKTOP, PHONE, TABLET |
| DeviceSessionIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique identifier of the user’s session based on page load time. When the user reloads a page, a new session is started.Example321a1ddfaf924803a075f1e69fc87bc06f53ccd0 |
| Duration | TypedoublePropertiesFilter, Nillable, SortDescriptionThe duration in milliseconds since the page start time. |
| LoginKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe string that ties together all events in a user’s login session. It starts with a login event and ends with either a logout event or the user session expiring.ExampleGeJCsym5eyvtEK2I |
| MobileSdkAppType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe mobile SDK application type.Possible ValuesHYBRIDHYBRIDLOCALHYBRIDREMOTENATIVEREACTNATIVE |
| MobileSdkVersion | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe mobile SDK application version number. |
| OperatingSystemName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe operating system name, derived from USER_AGENT. |
| OperatingSystemVersion | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe operating system version, derived from USER_AGENT. |
| PageStartTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe time when the page was initially loaded, measured in milliseconds. |
| PageUrl | TypestringPropertiesFilter, Group, Nillable, SortDescriptionRelative URL of the top-level Lightning Experience or Salesforce mobile app page that the user opened. The page can contain one or more Lightning components. |
| PreviousPageUrl | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe relative URL of the previous Lightning Experience or Salesforce mobile app page that the user opened. |
| RequestIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same REQUEST_ID. |
| SdkAppVersion | TypestringPropertiesFilter, Group, Nillable, SortDescriptionMobile SDK application version. |
| SessionKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe hash of the session ID to allow tracking of all events in a session. |
| Timestamp | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe access time of Salesforce services in GMT. |
| UiEventIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionId of the Lightning event type. |
| UiEventSource | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe source of the performance event. |
| UiEventTimestamp | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp of when event occurred. |
| UiEventType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe type of performance event. |
| UserAgent | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe client user agent string. |
| UserIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe 15-character ID of the user who’s using Salesforce services through the UI or the API.For example: 00530000009M943 |
| UserType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe category of user license of the user accessing Salesforce services through the UI or API. |
