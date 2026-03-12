---
title: "LightningPageViewEventLog"
domain: object-reference
topic: lightningpagevieweventlog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:11.812Z
estimatedTokens: 2447
keywords: [LightningPageViewEventLog, Lightning, View, event, logs, represent, occurred, Experience, Salesforce, mobile, app, log, tracks, user, visited]
---

# LightningPageViewEventLog

> Lightning Page View event logs represent information about the page on which
         the event occurred in Lightning Experience and the Salesforce mobile app. A Lightning Page
         View event log tracks the page a user visited, how long the user spent on the page, and the
         load time for the page. This object is available in API version
      61.0
      and later.

# LightningPageViewEventLog

Lightning Page View event logs represent information about the page on which the event occurred in Lightning Experience and the Salesforce mobile app. A Lightning Page View event log tracks the page a user visited, how long the user spent on the page, and the load time for the page. This object is available in API version 61.0 and later.

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
| AppName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the application that the user accessed. |
| BrowserName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the browser that the user accessed. For example: Chrome, IE, Safari, Gecko. |
| BrowserVersion | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe version of the browser that the user accessed in major.minor version format. Some browsers don’t provide a minor version. |
| ClientGeolocation | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe geolocation of the client in the form of <Country>/<State\|Province>. For example: United States/California. |
| ClientIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe API client ID. |
| ClientIp | TypestringPropertiesFilter, Group, Nillable, SortDescriptionIP address of the client employing salesforce.com services. |
| ConnectionType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe type of connection.Possible values are:CDMA1xCDMAEDGEEVDO0EVDOAEVDOBGPRSHRPDHSDPAHSUPALTEWIFI |
| DeviceIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique identifier used to identify a device when tracking events. DeviceIdentifier is a generated value that’s created when the mobile app is initially run after installation. |
| DeviceModel | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the device model. For example: iPad, iPhone. |
| DevicePlatform | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe type of application experience in name:experience:form format. Possible values are:NameAPP_BUILDERCUSTOMS1SFXExperienceBROWSERHYBRIDFormDESKTOPPHONETABLET |
| DeviceSessionIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique identifier of the user’s session based on page load time. When the user reloads a page, a new session is started. For example: 321a1ddfaf924803a075f1e69fc87bc06f53ccd0. |
| DoesEffectivePageTimeDeviate | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionWhen a deviation is detected, DoesEffectivePageTimeDeviate records true. The default value is false. |
| Duration | TypedoublePropertiesFilter, Nillable, SortDescriptionThe duration in milliseconds since the page start time.This field is being deprecated. Use EffectivePageTime instead. |
| EffectivePageTime | TypedoublePropertiesFilter, Nillable, SortDescriptionIndicates how many milliseconds it took for the page to load before a user could interact with the page’s functionality. Multiple factors can affect effective page time, such as network speed, hardware performance, or page complexity. If an effective page time greater than 60 seconds is detected, the value of this field is set to null or 0. |
| EffectivePageTimeErrorType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionIndicates the origin of an error. This field is populated when EFFECTIVE_PAGE_TIME_DEVIATION_REASON contains the PAGE_HAS_ERROR value. |
| EffectivePageTimeReason | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe reason for deviation in page loading time.Examples of possible values include:PageInDom- The page was loaded from a cachePageHasError- An undefined page loading error occurred. |
| GrandparentUiElement | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe grandparent scope of the page element where the event occurred. |
| LoginKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe string that ties together all events in a user’s login session. It starts with a login event and ends with either a logout event or the user session expiring. For example: GeJCsym5eyvtEK2I. |
| MobileSdkAppType | TypestringDescriptionThe mobile SDK application type.Possible ValuesHYBRIDHYBRIDLOCALHYBRIDREMOTENATIVEREACTNATIVE |
| MobileSdkVersion | TypeStringDescriptionThe mobile SDK application version number.Example5.0 |
| OperatingSystemName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe operating system name, derived from UserAgent. For example: Android, iOS, OSX, Windows. |
| OperatingSystemVersion | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe operating system version, derived from UserAgent. |
| PageAppName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe internal name of the application that the user accessed from the App Launcher. For example: LightningSales. |
| PageContext | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the component hosting the main content of the page. For example: clients:cardsContainer. |
| PageObjectIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique entity identifier of the event. For example: 0013000000I3zJAAAZ. |
| PageObjectType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe object type of the event. For example: task, contacts. |
| PageStartTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe time when the page was initially loaded, measured in milliseconds. For example: 1471564788642. |
| PageUrl | TypestringPropertiesFilter, Group, Nillable, SortDescriptionRelative URL of the top-level Lightning Experience or Salesforce mobile app page that the user opened. The page can contain one or more Lightning components. Multiple record IDs can be associated with PageUrl. For example: /sObject/0064100000JXITSAA5/view. |
| ParentUiElement | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe parent scope of the page element where the event occurred. |
| PreviousPageAppName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe internal name of the previous application that the user accessed from the App Launcher. For example: LightningSales. |
| PreviousPageContext | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe context of the previous page where the event occurred. For example: clients:cardsContainer. |
| PreviousPageObjectIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique previous page object identifier of the event. |
| PreviousPageObjectType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe previous page object type of the event. For example: task, contacts. |
| PreviousPageUrl | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe relative URL of the previous Lightning Experience or Salesforce mobile app page that the user opened. For example: /sObject/006410000. |
| RequestIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same RequestIdentifier. For example: 3nWgxWbDKWWDIk0FKfF5DV. |
| SdkAppVersion | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe SDK application version number. For example: 5.0. |
| SessionKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe user’s unique session ID. You can use this value to identify all events in Lightning Experience within a session. When the user logs out and logs in again, a new session is started. For example: cdd09305cb6babf34059e27f70e47f1b11dec868. |
| TargetUiElement | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe target page element where the event occurred. For example: label bBody truncate, tabitem-link. |
| Timestamp | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe access time of Salesforce services in GMT. For example, 2020-01-20T19:12:26.965Z. Milliseconds are the most granular setting. |
| UiEventSequenceNumber | TypedoublePropertiesFilter, Nillable, SortDescriptionAn auto-incremented sequence number of the current event since the session started. |
| UiEventTimestamp | TypedateTimePropertiesFilter, Nillable, SortDescriptionAn auto-incremented sequence number of the current event since the session started. |
| UserAgent | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe numeric code for the type of client used to make the request (for example, the browser, application, or API) as a string. |
| UserIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe 15-character ID of the user accessing Salesforce services through the UI or API. For example: 00530000009M943. |
| UserType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe category of user license of the user accessing Salesforce services through the UI or API.Possible values are:A: Automated Processb: High Volume PortalC: Customer Portal UserD: External WhoF: Self ServiceG: GuestL: Package License ManagerN: Salesforce to Salesforcen: CSN OnlyO: Power Customo: CustomP: Partnerp: Customer Portal ManagerS: StandardX: Salesforce Administrator |
