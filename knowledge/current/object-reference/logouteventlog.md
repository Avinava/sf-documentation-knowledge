---
title: "LogoutEventLog"
domain: object-reference
topic: logouteventlog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:12.602Z
estimatedTokens: 1183
keywords: [LogoutEventLog, user, sessions, ending, revoked, API, version, 65.0, later, Calls, Special, Access, Rules]
---

# LogoutEventLog

> Contains details of user sessions ending or being revoked. This object
      is available in API version 65.0 and later.

# LogoutEventLog

Contains details of user sessions ending or being revoked. This object is available in API version 65.0 and later.

## Supported Calls

describeSObjects(), query()

## Special Access Rules

To access this object, you must have the View Event Log Object Data user permission.

## Fields

| Field | Details |
| --- | --- |
| ApiType | TypeContains details of user sessions ending or being revoked.stringPropertiesFilter, Group, Nillable, SortDescriptionThe type of API request.Possible values are:D—Apex ClassE—SOAP EnterpriseM—SOAP MetadataP—SOAP PartnerS—SOAP ApexT—SOAP Toolingf—Feedl—Live Agentp—SOAP ClientSync |
| ApiVersion | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe version of the API that’s being used.For example: 36.0. |
| AppType | TypedoublePropertiesFilter, Nillable, SortDescriptionThe application type that was in use upon logging out.Example Values1000: Application1007: SFDC Application1014: Chat2501: CTI2514: OAuth3475: SFDC Partner Portal |
| BrowserType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe identifier string returned by the browser used at login.Example values are:Go-http-client/1.1Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv%3A50.0) Gecko/20100101 Firefox/50.0Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.84 Safari/537.36 |
| ClientIp | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe IP address of the client that’s using Salesforce services. A Salesforce internal IP (such as a login from AppExchange) is shown as “Salesforce.com IP”.For example: 96.43.144.26. |
| ClientVersion | TypedoublePropertiesFilter, Nillable, SortDescriptionThe version of the client that was in use upon logging out. |
| IsUserInitiatedLogout | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionThe value is 1 if the user intentionally logged out of the organization by clicking the Logout button. If the user’s session timed out due to inactivity or another implicit logout action, the value is 0. |
| LoginKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe string that ties together all events in a given user’s login session. It starts with a login event and ends with either a logout event or the user session expiring.For example: GeJCsym5eyvtEK2I. |
| PlatformType | TypedoublePropertiesFilter, Nillable, SortDescriptionThe code for the client platform. If a timeout caused the logout, this field is null.Example Values1000: Windows1008: Windows 20031013: Windows 8.11015: Windows 102003: Macintosh/Apple OSX4000: Linux5005: Android5006: iPhone5007: iPad5200: Android 10.0 |
| RequestIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same REQUEST_ID. |
| ResolutionType | TypedoublePropertiesFilter, Nillable, SortDescriptionThe screen resolution of the client. If a timeout caused the logout, this field is null. |
| SessionKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe user’s unique session ID. You can use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started. |
| SessionLevel | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe security level of the session that was used when logging out. |
| SessionType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe session type that was used when logging out.Possible ValuesA: APII: APIOnlyUserN: ChatterNetworksZ: ChatterNetworksAPIOnlyC: ContentP: OauthApprovalUIO: Oauth2T: SiteStudioR: SitePreviewS: SubstituteUserB: TempContentExchangeG: TempOauthAccessTokenFrontdoorY: TempVisualforceExchangeF: TempUIFrontdoorU: UIE: UserSiteV: VisualforceW: WDC_API |
| Timestamp | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe access time of Salesforce services in GMT.For example: 20130715233322.670.When a customer logs out by using the Logout button, the TIMESTAMP field records the actual logout time. However, when a customer is logged out automatically, Salesforce detects the event by using a process that runs every 15 minutes. TIMESTAMP values can reflect a logout time up to 15 minutes later than the actual automatic logout time. |
| UserIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe 15-character ID of the user who’s using Salesforce services through the UI or the API.For example: 00530000009M943 |
| UserType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe category of user license of the user accessing Salesforce services through the UI or API. |
