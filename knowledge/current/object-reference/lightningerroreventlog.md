---
title: "LightningErrorEventLog"
domain: object-reference
topic: lightningerroreventlog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:11.753Z
estimatedTokens: 1730
keywords: [LightningErrorEventLog, Lightning, Error, events, represent, errors, occurred, user, interactions, Experience, Salesforce, mobile, app, API, version]
---

# LightningErrorEventLog

> Lightning Error events represent errors that occurred during user
         interactions with Lightning Experience and the Salesforce mobile app. This object is
      available in API version 64.0 and later.

# LightningErrorEventLog

Lightning Error events represent errors that occurred during user interactions with Lightning Experience and the Salesforce mobile app. This object is available in API version 64.0 and later.

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
| BrowserName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the browser that the user accessed.ExampleChrome, Safari |
| BrowserVersion | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe version of the browser that the user accessed in major.minor version format. Some browsers don’t provide a minor version. |
| ClientGeolocation | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe geolocation of the client in the form of <Country>/<State\|Province>.ExampleUnited States/California |
| ClientIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe API client ID. |
| ClientIp | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe IP address of the client that’s using Salesforce services. A Salesforce internal IP (such as a login from AppExchange) is shown as “Salesforce.com IP”. |
| ComponentName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe internal name of the standard component that generated the error. The Salesforce developer assigned the name when the standard component was created. |
| ConnectionType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe type of connection. |
| DeviceIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique identifier used to identify a device when tracking events. DEVICE_ID is a generated value that’s created when the mobile app is initially run after installation. |
| DeviceModel | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the device model.ExampleiPad, iPhone |
| DevicePlatform | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe type of application experience in name:experience:form format. |
| DeviceSessionIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique identifier of the user’s session based on page load time. If the user reloads a page, it starts a new session. |
| ErrorMessage | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe error message generated. |
| LoginKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe string that ties together all events in a user’s login session. It starts with a login event and ends with either a logout event or the user session expiring. |
| MobileSdkAppType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe mobile application type. |
| MobileSdkVersion | TypestringPropertiesFilter, Group, Nillable, SortDescriptionMobile SDK version number. |
| OperatingSystemName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe operating system name.ExampleAndroid, iOS, OSX, Windows |
| OperatingSystemVersion | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe operating system version. |
| PageAppName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe internal name of the application that the user accessed from the App Launcher. |
| PageContext | TypestringPropertiesFilter, Group, Nillable, SortDescriptionContext of the page where the event occurred. |
| PageObjectIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionUnique entity ID of event. |
| PageObjectType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe entity type of event |
| PageStartTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionTime when page was initially loaded |
| PageUrl | TypestringPropertiesFilter, Group, Nillable, SortDescriptionRelative URL of the top-level Lightning Experience or Salesforce mobile app page that the user opened. The page can contain one or more Lightning components. |
| PreviousPageUrl | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe relative URL of the previous Lightning Experience or Salesforce mobile app page that the user opened |
| RequestIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same REQUEST_ID. |
| SdkAppVersion | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe mobile SDK application version number. |
| SessionKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe user’s unique session ID. You can use this value to identify all events in Lightning Experience within a session. When a user logs out and logs in again, a new session is started. |
| StackTrace | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe stack trace contains the location in the code where the error occurred along with the calling frames that led to the error. |
| Timestamp | TypedateTimePropertiesFilter, Nillable, SortExample20130715233322.670 |
| UiEventIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionID of the Lightning event type. |
| UiEventSequenceNumber | TypedoublePropertiesFilter, Nillable, SortDescriptionThe sequence number of current event since start of session. |
| UiEventSource | TypestringPropertiesFilter, Group, Nillable, SortExamplesHere are some examples of error flags returned in this field.AuraErrorErrorInvalidStateErrorRangeErrorReferenceErrorSecurityErrorSyntaxErrorTypeErrorunknown |
| UiEventTimestamp | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe time at which this event occurred, measured in milliseconds. |
| UiEventType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe type of error event. |
| UserAgent | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe numeric code for the type of client used to make the request (for example, browser, application, or API) as a string. |
| UserIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe 15-character ID of the user accessing Salesforce services through the UI or API. |
| UserType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe category of user license of the user accessing Salesforce services through the UI or API. |
