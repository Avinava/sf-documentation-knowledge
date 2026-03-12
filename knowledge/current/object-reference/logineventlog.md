---
title: "LoginEventLog"
domain: object-reference
topic: logineventlog
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:12.554Z
estimatedTokens: 2130
keywords: [LoginEventLog, Login, event, logs, contain, Salesforce, org's, user, history, API, version, 61.0, later, Calls, Special]
---

# LoginEventLog

> Login event logs contain details about your Salesforce org's user login
			history. This object is available in API version
		61.0
		and later.

# LoginEventLog

Login event logs contain details about your Salesforce org's user login history. This object is available in API version 61.0 and later.

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
| ApiType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe type of API request.Possible values are:D—Apex ClassE—SOAP EnterpriseI—SOAP Cross InstanceM—SOAP MetadataO—Old SOAPP—SOAP PartnerS—SOAP ApexT—SOAP ToolingX—XmlRPCf—Feedl—Live Agentp—SOAP ClientSync |
| ApiVersion | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe version of the API that’s being used. For example: 36.0. |
| AuthenticatedMethodReference | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe authentication method used by a third-party identification provider for an OpenID Connect single sign-on protocol. |
| BrowserType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe identifier string returned by the browser used at login.Example values are:Go-http-client/1.1Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv%3A50.0) Gecko/20100101 Firefox/50.0Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.84 Safari/537.36 |
| CipherSuite | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe TLS cipher suite used for the login. Values are OpenSSL-style cipher suite names, with hyphen delimiters. For more information, see OpenSSL Cryptography and SSL/TLS Toolkit. |
| ClientIp | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe IP address of the client that’s using Salesforce services. A Salesforce internal IP (such as a login from AppExchange) is shown as “Salesforce.com IP”. For example: 96.43.144.26. |
| CpuTime | TypedoublePropertiesFilter, Nillable, SortDescriptionThe CPU time in milliseconds used to complete the request. This field indicates the amount of activity taking place in the app server layer. |
| DatabaseTotalTime | TypedoublePropertiesFilter, Nillable, SortDescriptionThe time in nanoseconds for a database round trip. Includes time spent in the JDBC driver, network to the database, and DatabaseTotalTime. Compare this field to CpuTime to determine whether performance issues are occurring in the database layer or in your own code. |
| ForwardedForIp | TypestringPropertiesFilter, Group, Nillable, SortDescriptionReserved for future use. |
| LoginKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe string that ties together all events in a given user’s login session. It starts with a login event and ends with either a logout event or the user session expiring. For example: GeJCsym5eyvtEK2I. |
| LoginStatus | TypedoublePropertiesFilter, Nillable, SortDescriptionThe status of the login attempt. For successful logins, the value is LOGIN_NO_ERROR. All other values indicate errors or authentication issues. For details, see Login Event Type — LOGIN_STATUS Values. |
| LoginSubType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe type of login flow used. Possible values are:uiup—UI Username-Passwordoauthpassword—OAuth Username-Passwordoauthtoken—OAuth User-Agentoauthhybridtoken—OAuth User-Agent for Hybrid Appsoauthtokenidtoken—OAuth User-Agent with ID Tokenoauthclientcredential—OAuth Client Credentialoauthcode—OAuth Web Serveroauthhybridauthcode—OAuth Web Server for Hybrid Apps |
| LoginType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe type of login used to access the session. Possible values are:7—AppExchangeA—Applications—Certificate-based logink—Chatter Communities External Usern—Chatter Communities External User Third Party SSOr—Employee Login to Communityz—Lightning Loginl—Networks Portal API Only6—Remote Access Clienti—Remote Access 2.0I—Other Apex APIR—Partner Productw—Passwordless Login3—Customer Service Portalq—Partner Portal Third-Party SSO9—Partner Portal5—SAML Idp Initiated SSOm—SAML Chatter Communities External User SSOb—SAML Customer Service Portal SSOc—SAML Partner Portal SSOh—SAML Site SSO8—SAML Sfdc Initiated SSOE—SelfServicej—Third Party SSO |
| RequestIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same RequestIdentifier. For example: 3nWgxWbDKWWDIk0FKfF5DV. |
| RequestStatus | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe status of the request for a page view or user interface action.Possible values are:S—Success. Salesforce handled the request successfully. If an Apex controller throws an exception, this status is also returned.F—Failure. Typically 4xx or 5xx HTTP codes, such as no permission to view page, page took too long to render, page is read-only.U—UndefinedA—Authorization ErrorR—Redirect. Typically a 3xx HTTP code, possibly initiated by an Apex controller in a Visualforce page.N—Not Found. 404 error. |
| RunTime | TypedoublePropertiesFilter, Nillable, SortDescriptionThe amount of time that the request took in milliseconds. |
| SessionKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe user’s unique session ID. You can use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started. For Login Event Type, this field is usually null because the event is captured before a session is created. For example: d7DEq/ANa7nNZZVD. |
| SourceIp | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe source IP of the login request. |
| Timestamp | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe access time of Salesforce services in GMT. For example, 2020-01-20T19:12:26.965Z. Milliseconds are the most granular setting. |
| TransportLayerSecurityProtocol | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe TLS protocol used for the login.Possible values are:1.01.11.2 |
| Uri | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe URI of the page that’s receiving the request. For example: /home/home.jsp. |
| UserIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe 15-character ID of the user who’s using Salesforce services through the UI or the API. For example: 00530000009M943. |
| UserName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe username that’s used for login. |
| UserType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe category of user license.Possible values are:CsnOnly—Users whose access to the application is limited to Chatter. This user type includes Chatter Free and Chatter moderator users.CspLitePortal—CSP Lite Portal license. Users whose access is limited because they’re organization customers and access the application through a customer portal or an Experience Cloud site.CustomerSuccess—Customer Success license. Users whose access is limited because they’re organization customers and access the application through a customer portal.Guest—Users whose access is limited so that your customers can view and interact with your site without logging in.PowerCustomerSuccess—Power Customer Success license. Users whose access is limited because they’re organization customers and access the application through a customer portal. Users with this license type can view and edit data they directly own or data owned by or shared with users below them in the customer portal role hierarchy.PowerPartner—Power Partner license. Users whose access is limited because they’re partners and typically access the application through a partner portal or site.SelfService—Users whose access is limited because they’re organization customers and access the application through a self-service portal.Standard—Standard user license. This user type also includes Salesforce Platform and Salesforce Platform One user licenses, and admins for this org. |
| Username | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe username that’s used for login. |

## Related Topics

- Login Event Type
												— LOGIN_STATUS Values (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_login_status.htm)
