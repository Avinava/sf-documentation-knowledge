---
title: "Login Event Type"
domain: object-reference
topic: login-event-type
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:09.412Z
estimatedTokens: 2993
keywords: [Login, Event, events, contain, org’s, user, history]
---

# Login Event Type

> Login events contain details about your org’s user login
         history.

# Login Event Type

Login events contain details about your org’s user login history.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

The Login event type is used by EventLogFile (ELF). It isn’t a real-time event. For the LoginEvent real-time event, which is part of Real-Time Event Monitoring (RTEM), see [LoginEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/sforce_api_objects_loginevent.htm "HTML (New Window)") in the Platform Events Developer Guide.

For details about event monitoring, see the [Trailhead Event Monitoring module](https://trailhead.salesforce.com/en/modules/event_monitoring/units/event_monitoring_intro "HTML (New Window)") or the [REST API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/using_resources_event_log_files.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| API_TYPE | TypeStringDescriptionThe type of API request.Possible values are:D—Apex ClassE—SOAP EnterpriseM—SOAP MetadataP—SOAP PartnerS—SOAP ApexT—SOAP Toolingf—Feedl—Live Agentp—SOAP ClientSync |
| API_VERSION | TypeStringDescriptionThe version of the API that’s being used.For example: 36.0. |
| AUTHENTICATION_METHOD_REFERENCE | TypeStringDescriptionThe authentication method used by a third-party identification provider for an OpenID Connect single sign-on protocol. This field is available in API version 51.0 and later. |
| AUTHENTICATION_SERVICE_ID | TypeIdDescriptionThe 15-character ID for the authentication service used to log in. This field stores IDs for these authentication services.SAML single sign-on providersToken exchange handlersAvailable in API version 60.0 and later. |
| BROWSER_TYPE | TypeStringDescriptionThe identifier string returned by the browser used at login.Example values are:Go-http-client/1.1Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv%3A50.0) Gecko/20100101 Firefox/50.0Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.84 Safari/537.36 |
| CIPHER_SUITE | TypeStringDescriptionThe TLS cipher suite used for the login. Values are OpenSSL-style cipher suite names, with hyphen delimiters. For more information, see OpenSSL Cryptography and SSL/TLS Toolkit. |
| CLIENT_IP | TypeStringDescriptionThe IP address of the client that’s using Salesforce services. A Salesforce internal IP (such as a login from AppExchange) is shown as “Salesforce.com IP”.For example: 96.43.144.26. |
| COUNTRY_CODE | TypeStringDescriptionThe country code associated with the IP address of the user logging in. |
| CPU_TIME | TypeNumberDescriptionThe CPU time in milliseconds used to complete the request. This field indicates the amount of activity taking place in the app server layer. |
| DB_TOTAL_TIME | TypeNumberDescriptionThe time in nanoseconds for a database round trip. Includes time spent in the JDBC driver, network to the database, and DB_CPU_TIME. Compare this field to CPU_TIME to determine whether performance issues are occurring in the database layer or in your own code. |
| EVENT_TYPE | TypeStringDescriptionThe type of event. The value is always Login. |
| FORWARDED_FOR_IP | TypeStringDescriptionThe value in the X-Forwarded-For header of HTTP requests sent by the client. For logins that use one or more HTTP proxies, the X-Forwarded-For header is sometimes used to store the origin IP and all proxy IPs.The FORWARDED_FOR_IP field stores whatever value the client sends, which might not be an IP address. The maximum length is 256 characters. Longer values are truncated. The FORWARDED_FOR_IP field isn’t populated for logins completed via OAuth flows or single sign-on (SSO).Available in API version 61.0 and later. |
| HTTP_REFERER | TypeStringDescriptionThe referring URI of the page that’s receiving the request. |
| LOGIN_KEY | TypeStringDescriptionThe string that ties together all events in a given user’s login session. It starts with a login event and ends with either a logout event or the user session expiring.For example: GeJCsym5eyvtEK2I. |
| LOGIN_STATUS | TypeStringDescriptionThe status of the login attempt. For successful logins, the value is LOGIN_NO_ERROR. All other values indicate errors or authentication issues. For details, see Login Event Type — LOGIN_STATUS Values. |
| LOGIN_SUB_TYPE | TypepicklistPropertiesNillable, Restricted picklistDescriptionThe type of login flow used. See the LoginSubType field of LoginHistory in the Object Reference guide for the list of possible values.Label is Login Subtype. |
| LOGIN_TYPE | TypeStringDescriptionThe type of login used to access the session.Possible values are:7—AppExchangeA—Applications—Certificate-based logink—Chatter Communities External Usern—Chatter Communities External User Third Party SSOx—Cross Tenant Login (for internal use only)r—Employee Login to Communityz—Lightning Loginl—Networks Portal API Only6—Remote Access Clienti—Remote Access 2.0I—Other Apex APIR—Partner Productw—Passwordless Login3—Customer Service Portalq—Partner Portal Third-Party SSO9—Partner Portal5—SAML Idp Initiated SSOm—SAML Chatter Communities External User SSOb—SAML Customer Service Portal SSOc—SAML Partner Portal SSOh—SAML Site SSO8—SAML Sfdc Initiated SSOE—SelfServicej—Third Party SSO |
| LOGIN_URL | TypeStringDescriptionThe URL of the login page. |
| ORGANIZATION_ID | TypeIdDescriptionThe 15-character ID of the organization.For example: 00D000000000123. |
| REQUEST_ID | TypeStringDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same REQUEST_ID.For example: 3nWgxWbDKWWDIk0FKfF5DV. |
| REQUEST_STATUS | TypeStringDescriptionThe status of the request for a page view or user interface action.For example:S—Success. Salesforce handled the request successfully. If an Apex controller throws an exception, this status is also returned.F—Failure. Typically 4xx or 5xx HTTP codes, such as no permission to view page, page took too long to render, page is read-only.U—UndefinedA—Authorization ErrorR—Redirect. Typically a 3xx HTTP code, possibly initiated by an Apex controller in a Visualforce page.N—Not Found. 404 error.This field can have a blank value. |
| RUN_TIME | TypeNumberDescriptionThe amount of time that the request took in milliseconds. |
| SESSION_KEY | TypeStringDescriptionThe user’s unique session ID. You can use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started. For Login Event Type, this field is usually null because the event is captured before a session is created.Exampled7DEq/ANa7nNZZVD |
| SOURCE_IP | TypeIPDescriptionThe IP address of the incoming client request that first reaches Salesforce during a login. For example, 126.7.4.2. For clients that redirect through one or more HTTP proxies, this field stores the IP address of the first proxy to reach Salesforce. To better identify the origin IP for these cases, check the FORWARDED_FOR_IP field instead. |
| TIMESTAMP | TypeStringDescriptionThe access time of Salesforce services in GMT.For example: 20130715233322.670. |
| TIMESTAMP_DERIVED | TypeDateTimeDescriptionThe access time of Salesforce services in ISO8601-compatible format (YYYY-MM-DDTHH:MM:SS.sssZ).For example: 2015-07-27T11:32:59.555Z. Time zone is GMT. |
| TLS_PROTOCOL | TypeStringDescriptionThe TLS protocol used for the login.ExampleThere are 3 possible values.1.01.11.2 |
| URI | TypeStringDescriptionThe URI of the page that’s receiving the request.For example: /home/home.jsp. |
| URI_ID_DERIVED | TypeIDDescriptionThe 18-character case insensitive ID of the URI of the page that’s receiving the request. |
| USE_API_TOKEN | TypeStringDescriptionLogin with API Token - T token, or P password. |
| USER_ID | TypeIdDescriptionThe 15-character ID of the user who’s using Salesforce services through the UI or the API.For example: 00530000009M943 |
| USER_ID_DERIVED | TypeIdDescriptionThe 18-character case insensitive ID of the user who’s using Salesforce services through the UI or the API.For example: 00590000000I1SNIA0. |
| USER_NAME | TypeStringDescriptionThe username that’s used for login. |
| USER_TYPE | TypeStringDescriptionThe category of user license.Possible values are:CsnOnly—Users whose access to the application is limited to Chatter. This user type includes Chatter Free and Chatter moderator users.CspLitePortal—CSP Lite Portal license. Users whose access is limited because they’re organization customers and access the application through a customer portal or an Experience Cloud site.CustomerSuccess—Customer Success license. Users whose access is limited because they’re organization customers and access the application through a customer portal.Guest—Users whose access is limited so that your customers can view and interact with your site without logging in.PowerCustomerSuccess—Power Customer Success license. Users whose access is limited because they’re organization customers and access the application through a customer portal. Users with this license type can view and edit data they directly own or data owned by or shared with users below them in the customer portal role hierarchy.PowerPartner—Power Partner license. Users whose access is limited because they’re partners and typically access the application through a partner portal or site.SelfService—Users whose access is limited because they’re organization customers and access the application through a self-service portal.Standard—Standard user license. This user type also includes Salesforce Platform and Salesforce Platform One user licenses, and admins for this org. |

-   **[Login Event Type — LOGIN\_STATUS Values](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_login_status.htm)**
    When users attempt to log in to your org, the success or failure of their login attempts is tracked in event log file data. Specifically, the LOGIN\_STATUS field in the Login event type contains the result of these login attempts. The data in LOGIN\_STATUS can help you determine whether your users’ login attempts were successful. This field is available in the Login event type in the EventLogFile object in API version 39.0 and later.

#### See Also

-   [Login Event Type — LOGIN\_STATUS Values](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_login_status.htm "When users attempt to log in to your org, the success or failure of their login attempts is tracked in event log file data. Specifically, the LOGIN_STATUS field in the Login event type contains the result of these login attempts. The data in LOGIN_STATUS can help you determine whether your users’ login attempts were successful. This field is available in the Login event type in the EventLogFile object in API version 39.0 and later.")

-   [EventLogFile Supported Event Types](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_supportedeventtypes.htm "The EventType field in the EventLogFile object supports these events. Some common fields, such as CPU_TIME and RUN_TIME, can have null or zero values depending on how the events are generated for a given feature. Sometimes, three quotation marks appear around event data containing special characters in the CSV file. The third quotation mark is necessary for tools and applications to parse the field data at the correct field value boundary.")

-   [EventLogFile](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm "Represents event log files for event monitoring. The event monitoring product gathers information about your Salesforce org’s operational events, which you can use to analyze usage trends and user behavior. This object is available in API version 32.0 and later. The Interval and Sequence fields are available only in API version 37.0 and later.")

## Related Topics

- Login Event Type
												— LOGIN_STATUS Values (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_login_status.htm)
- Login Event Type — LOGIN_STATUS Values (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_login_status.htm)
- EventLogFile Supported Event Types (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_supportedeventtypes.htm)
- EventLogFile (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm)
