---
title: "Logout Event Type"
domain: object-reference
topic: logout-event-type
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:09.437Z
estimatedTokens: 1791
keywords: [Logout, Event, user, sessions, ending, revoked]
---

# Logout Event Type

> Contains details of user sessions ending or being revoked.

# Logout Event Type

Contains details of user sessions ending or being revoked.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

Logout Event Type is used by EventLogFile (ELF). It isn’t a real-time event. For the LogoutEvent real-time event, which is part of Real-Time Event Monitoring (RTEM), see [LogoutEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/sforce_api_objects_logoutevent.htm) in the Platform Events Developer Guide.

These scenarios count as logout events.

-   Logging out via the UI
-   Session expiration
-   Revoking access for a connected app
-   Calling the Salesforce revocation endpoint
-   Salesforce disabling a connected app
-   ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

    #### Note

    For batch operations where multiple sessions are revoked at once, Salesforce records only one logout event. You can tell that it’s a batch operation because there’s no user ID.


For details about event monitoring, see the [Trailhead Event Monitoring module](https://trailhead.salesforce.com/en/modules/event_monitoring/units/event_monitoring_intro "HTML (New Window)") or [REST API Developer’s Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/using_resources_event_log_files.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| API_TYPE | TypeStringDescriptionThe type of API request.Possible values are:D—Apex ClassE—SOAP EnterpriseM—SOAP MetadataP—SOAP PartnerS—SOAP ApexT—SOAP Toolingf—Feedl—Live Agentp—SOAP ClientSync |
| API_VERSION | TypeStringDescriptionThe version of the API that’s being used.For example: 36.0. |
| APP_TYPE | TypeNumberDescriptionThe application type that was in use upon logging out.Example Values1000: Application1007: SFDC Application1014: Chat2501: CTI2514: OAuth3475: SFDC Partner Portal |
| BROWSER_TYPE | TypeStringDescriptionThe identifier string returned by the browser used at login.Example values are:Go-http-client/1.1Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv%3A50.0) Gecko/20100101 Firefox/50.0Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.84 Safari/537.36 |
| CLIENT_IP | TypeStringDescriptionThe IP address of the client that’s using Salesforce services. A Salesforce internal IP (such as a login from AppExchange) is shown as “Salesforce.com IP”.For example: 96.43.144.26. |
| CLIENT_VERSION | TypeNumberDescriptionThe version of the client that was in use upon logging out. |
| EVENT_TYPE | TypeStringDescriptionThe type of event. The value is always Logout. |
| LOGIN_KEY | TypeStringDescriptionThe string that ties together all events in a given user’s login session. It starts with a login event and ends with either a logout event or the user session expiring.For example: GeJCsym5eyvtEK2I. |
| ORGANIZATION_ID | TypeIdDescriptionThe 15-character ID of the organization.For example: 00D000000000123. |
| PLATFORM_TYPE | TypeNumberDescriptionThe code for the client platform. If a timeout caused the logout, this field is null.Example Values1000: Windows1008: Windows 20031013: Windows 8.11015: Windows 102003: Macintosh/Apple OSX4000: Linux5005: Android5006: iPhone5007: iPad5200: Android 10.0 |
| REQUEST_ID | TypeStringDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same REQUEST_ID.For example: 3nWgxWbDKWWDIk0FKfF5DV. |
| RESOLUTION_TYPE | TypeNumberDescriptionThe screen resolution of the client. If a timeout caused the logout, this field is null. |
| SESSION_KEY | TypeStringDescriptionThe user’s unique session ID. You can use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started.For example: d7DEq/ANa7nNZZVD. |
| SESSION_LEVEL | TypeStringDescriptionThe security level of the session that was used when logging out.Possible Values1: Standard Session10: High-Assurance Session |
| SESSION_TYPE | TypeStringDescriptionThe session type that was used when logging out.Possible ValuesA: APII: APIOnlyUserN: ChatterNetworksZ: ChatterNetworksAPIOnlyC: ContentP: OauthApprovalUIO: Oauth2T: SiteStudioR: SitePreviewS: SubstituteUserB: TempContentExchangeG: TempOauthAccessTokenFrontdoorY: TempVisualforceExchangeF: TempUIFrontdoorU: UIE: UserSiteV: VisualforceW: WDC_API |
| TIMESTAMP | TypeStringDescriptionThe access time of Salesforce services in GMT.For example: 20130715233322.670.When a customer logs out by using the Logout button, the TIMESTAMP field records the actual logout time. However, when a customer is logged out automatically, Salesforce detects the event by using a process that runs every 15 minutes. TIMESTAMP values can reflect a logout time up to 15 minutes later than the actual automatic logout time. |
| TIMESTAMP_DERIVED | TypeDateTimeDescriptionThe access time of Salesforce services in ISO8601-compatible format (YYYY-MM-DDTHH:MM:SS.sssZ).For example: 2015-07-27T11:32:59.555Z. Timezone is GMT. |
| USER_ID | TypeIdDescriptionThe 15-character ID of the user who’s using Salesforce services through the UI or the API.For example: 00530000009M943 |
| USER_ID_DERIVED | TypeIdDescriptionThe 18-character case insensitive ID of the user who’s using Salesforce services through the UI or the API.For example: 00590000000I1SNIA0. |
| USER_INITIATED_LOGOUT | TypeBooleanDescriptionThe value is 1 if the user intentionally logged out of the organization by clicking the Logout button. If the user’s session timed out due to inactivity or another implicit logout action, the value is 0. |
| USER_TYPE | TypeStringDescriptionThe category of user license of the user that logged out.Possible ValuesA: Automated Processb: High Volume PortalC: Customer Portal UserD: External WhoF: Self-ServiceG: GuestL: Package License ManagerN: Salesforce to Salesforcen: CSN OnlyO: Power Customo: CustomP: Partnerp: Customer Portal ManagerS: StandardX: Salesforce Administrator |

#### See Also

-   [EventLogFile Supported Event Types](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_supportedeventtypes.htm "The EventType field in the EventLogFile object supports these events. Some common fields, such as CPU_TIME and RUN_TIME, can have null or zero values depending on how the events are generated for a given feature. Sometimes, three quotation marks appear around event data containing special characters in the CSV file. The third quotation mark is necessary for tools and applications to parse the field data at the correct field value boundary.")

-   [EventLogFile](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm "Represents event log files for event monitoring. The event monitoring product gathers information about your Salesforce org’s operational events, which you can use to analyze usage trends and user behavior. This object is available in API version 32.0 and later. The Interval and Sequence fields are available only in API version 37.0 and later.")

## Related Topics

- EventLogFile Supported Event Types (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_supportedeventtypes.htm)
- EventLogFile (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm)
