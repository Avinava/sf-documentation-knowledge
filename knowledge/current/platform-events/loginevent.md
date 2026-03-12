---
title: "LoginEvent"
domain: platform-events
topic: loginevent
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:28.909Z
estimatedTokens: 5104
keywords: [LoginEvent, tracks, login, activity, users, log, Salesforce, transaction, security, policy, big, stores, event, data, LoginEventStream]
---

# LoginEvent

> LoginEvent tracks the login activity of users who log in to
			Salesforce. You can use LoginEvent in a transaction security policy. LoginEvent is
		a big object that stores the event data of LoginEventStream. This object is available in API
		version 36.0 and later.

# LoginEvent

LoginEvent tracks the login activity of users who log in to Salesforce. You can use LoginEvent in a transaction security policy. LoginEvent is a big object that stores the event data of LoginEventStream. This object is available in API version 36.0 and later.

## Supported Calls

describeSObjects(), query()

## Special Access Rules

-   Accessing this object requires either the Salesforce Shield or Salesforce Event Monitoring add-on subscription and the View Real-Time Event Monitoring Data user permission.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_events)

#### Note

LoginEvent doesn't track login activity after login rates exceed the limit. This condition applies to all users, including integration users and internal users who log in to Salesforce.

## Fields

| Field | Details |
| --- | --- |
| AdditionalInfo | TypestringPropertiesNillableDescriptionJSON serialization of additional information that’s captured from the HTTP headers during a login request. For example, {"field1": "value1","field2": "value2"}.See Working with AdditionalInfo. |
| ApiType | TypestringPropertiesNillableDescriptionThe type of API that’s used to log in. Values include:SOAP EnterpriseSOAP PartnerREST API |
| ApiVersion | TypestringPropertiesNillableDescriptionThe version number of the API. If no version number is available, “Unknown” is returned. |
| Application | TypestringPropertiesNillableDescriptionThe application used to access the org. Possible values include:AppExchangeBrowserSalesforce for iOSSalesforce Developers API ExplorerN/A |
| AuthMethodReference | TypestringPropertiesNillableDescriptionThe authentication method used by a third-party identification provider for an OpenID Connect single sign-on protocol. This field is available in API version 51.0 and later. |
| AuthServiceId | TypereferencePropertiesNillableDescriptionThe 18-character ID for an authentication service for a login event. For example, you can use this field to identify the SAML or authentication provider configuration with which the user logged in. |
| Browser | TypestringPropertiesNillableDescriptionThe browser name and version if known. Possible values for the browser name are:ChromeFirefoxSafariUnknownFor example, “Chrome 77”. |
| CipherSuite | TypepicklistPropertiesNillable, Restricted picklistDescriptionThe TLS cipher suite used for the login. Values are OpenSSL-style cipher suite names, with hyphen delimiters, for example, ECDHE-RSA-AES256-GCM-SHA384. Available in API version 37.0 and later. |
| City | TypestringPropertiesNillableDescriptionThe city where the user’s IP address is physically located. This value isn’t localized. This field is available in API version 47.0 and later.NoteDue to the nature of geolocation technology, the accuracy of this field can vary. |
| ClientVersion | TypestringPropertiesNillableDescriptionThe version number of the login client. If no version number is available, “Unknown” is returned. |
| Country | TypestringPropertiesNillableDescriptionThe country where the user’s IP address is physically located. This value isn’t localized.This field is available in API version 47.0 and later.NoteDue to the nature of geolocation technology, the accuracy of this field can vary. |
| CountryIso | TypestringPropertiesNillableDescriptionThe ISO 3166 code for the country where the user’s IP address is physically located. For more information, see Country Codes - ISO 3166. This field is available in API version 37.0 and later. |
| EvaluationTime | TypedoublePropertiesNillableDescriptionThe amount of time it took to evaluate the transaction security policy, in milliseconds. This field is available in API version 46.0 and later. |
| EventDate | TypedateTimePropertiesFilter, SortDescriptionThe login time of the specified event. For example, 2020-01-20T19:12:26.965Z. Milliseconds are the most granular setting. |
| EventIdentifier | TypestringPropertiesFilter, SortDescriptionThe unique identifier for each record in LoginEvent. Use this field as the primary key in your queries. Available in API version 42.0 and later. |
| ForwardedForIp | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe value in the X-Forwarded-For header of HTTP requests sent by the client. For logins that use one or more HTTP proxies, the X-Forwarded-For header is sometimes used to store the origin IP and all proxy IPs.The ForwardedForIp field stores whatever value the client sends, which might not be an IP address. The maximum length is 256 characters. Longer values are truncated. The ForwardedForIp field isn’t populated for logins completed via OAuth flows or single sign-on (SSO).Available in API version 61.0 and later. |
| HttpMethod | TypepicklistPropertiesNillable, Restricted picklistDescriptionThe HTTP method of the login request; possible values are GET, POST, and Unknown. |
| HttpReferer | TypestringPropertiesNillableDescriptionThe referring URI of the page that’s receiving the request. |
| LoginGeoId | TypereferencePropertiesNillableDescriptionThe Salesforce ID of the LoginGeo object associated with the login user’s IP address. For example, 04FB000001TvhiPMAR. |
| LoginHistoryId | TypereferencePropertiesNillableDescriptionTracks a user session so you can correlate user activity with a particular login instance. This field is also available on the LoginHistory, AuthSession, and other objects, making it easier to trace events back to a user’s original authentication. For example, 0YaB000002knVQLKA2. |
| LoginKey | TypestringPropertiesNillableDescriptionThe string that ties together all events in a given user’s login session. The session starts with a login event and ends with either a logout event or the user session expiring. This field is available in API version 46.0 and later. For example, lUqjLPQTWRdvRG4. |
| LoginLatitude | TypedoublePropertiesNillableDescriptionThe latitude where the user’s IP address is physically located.This field is available in API version 47.0 and later.NoteDue to the nature of geolocation technology, the accuracy of this field can vary. |
| LoginLongitude | TypedoublePropertiesNillableDescriptionThe longitude where the user’s IP address is physically located.This field is available in API version 47.0 and later.NoteDue to the nature of geolocation technology, the accuracy of this field can vary. |
| LoginSubType | TypepicklistPropertiesNillable, Restricted picklist,DescriptionThe type of login flow used. See the LoginSubType field of LoginHistory in the Object Reference guide for the list of possible values.Label is Login Subtype. |
| LoginType | TypepicklistPropertiesNillable, Restricted picklistDescriptionThe type of login used to access the session. See the LoginType field of LoginHistory in the Object Reference guide for the list of possible values. |
| LoginUrl | TypestringPropertiesNillableDescriptionThe URL of the login host from which the request is coming. For example, yourInstance.salesforce.com. |
| NetworkId | TypereferencePropertiesNillableDescriptionThe ID of the Experience Cloud site that the user is logging in to. This field is available if Salesforce Experience Cloud is enabled for your organization. |
| Platform | TypestringPropertiesNillableDescriptionThe operating system name and version that are used during the login event. If no platform name is available, “Unknown” is returned. For example, Mac OSX or iOS/Mac. |
| PolicyId | TypereferencePropertiesNillableDescriptionThe ID of the transaction security policy associated with this event. This field is available in API version 46.0 and later. For example, 0NIB000000000KOOAY. |
| PolicyOutcome | TypepicklistPropertiesNillable, Restricted picklistDescriptionThe result of the transaction policy. Possible values are:Block—The user was blocked from performing the operation that triggered the policy.Error—The policy caused an undefined error when it executed.ExemptNoAction—The user is exempt from transaction security policies, so the policy didn’t trigger.FailedInvalidPassword—The user entered an invalid password.FailedPasswordLockout—The user entered an invalid password too many times.MeteringBlock—The policy took longer than 3 seconds to process, so the user was blocked from performing the operation.MeteringNoAction—The policy took longer than 3 seconds to process, but the user isn't blocked from performing the operation.NoAction—The policy didn't trigger.Notified—A notification was sent to the recipient.TwoFAAutomatedSuccess—Salesforce Authenticator approved the request for access because the request came from a trusted location. After users enable location services in Salesforce Authenticator, they can designate trusted locations. When a user trusts a location for a particular activity, that activity is approved from the trusted location for as long as the location is trusted. An example of a particular activity is logging in from a recognized device.TwoFADenied—The user denied the approval request in the authenticator app, such as Salesforce Authenticator.TwoFAFailedGeneralError—An error caused by something other than an invalid verification code, too many verification attempts, or authenticator app connectivity.TwoFAFailedInvalidCode—The user provided an invalid verification code.TwoFAFailedTooManyAttempts—The user attempted to verify identity too many times. For example, the user entered an invalid verification code repeatedly.TwoFAInitiated—Salesforce initiated identity verification but hasn’t yet challenged the user.TwoFAInProgress—Salesforce challenged the user to verify identity and is waiting for the user to respond or for Salesforce Authenticator to send an automated response.TwoFANoAction—The policy specifies multi-factor authentication (formerly called two-factor authentication) as an action, but the user is already in a high-assurance session.TwoFARecoverableError—Salesforce can’t reach the authenticator app to verify identity, but will retry.TwoFAReportedDenied—The user denied the approval request in the authenticator app, such as Salesforce Authenticator, and also flagged the approval request to report to an administrator.TwoFASucceeded—The user’s identity was verified.This field is available in API version 46.0 and later. |
| PostalCode | TypestringPropertiesNillableDescriptionThe postal code where the user’s IP address is physically located. This value isn’t localized.This field is available in API version 47.0 and later.NoteDue to the nature of geolocation technology, the accuracy of this field can vary. |
| RelatedEventIdentifier | TypestringPropertiesNillableDescriptionRepresents the EventIdentifier of the related event. For example, bd76f3e7-9ee5-4400-9e7f-54de57ecd79c.This field is populated only when the activity that this event monitors requires extra authentication, such as multi-factor authentication. In this case, Salesforce generates more events and sets the RelatedEventIdentifier field of the new events to the value of the EventIdentifier field of the original event. Use this field with the EventIdentifier field to correlate all the related events. If no extra authentication is required, this field is blank. |
| RemoteIdentifier | TypestringPropertiesNillableDescriptionReserved for future use. |
| SessionKey | TypestringPropertiesNillableDescriptionThe user’s unique session ID. Use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started. For LoginEvent, this field is often null because the event is captured before a session is created. For example, vMASKIU6AxEr+Op5. This field is available in API version 46.0 and later. |
| SessionLevel | TypepicklistPropertiesNillable, Restricted picklistDescriptionSession-level security controls user access to features that support it, such as connected apps and reporting. Possible values are:HIGH_ASSURANCE—A high assurance session was used for resource access. For example, when the user tries to access a resource such as a connected app, report, or dashboard that requires a high-assurance session level.LOW—The user’s security level for the current session meets the lowest requirements.NoteThis low level isn’t available, nor used, in the Salesforce UI. User sessions through the UI are either standard or high assurance. You can set this level using the API, but users assigned this level experience unpredictable and reduced functionality in their Salesforce org.STANDARD—The user’s security level for the current session meets the Standard requirements set in the org’s Session Security Levels.This field is available in API version 42.0 and later. |
| SourceIp | TypestringPropertiesNillableDescriptionThe IP address of the incoming client request that first reaches Salesforce during a login. For example, 126.7.4.2. For clients that redirect through one or more HTTP proxies, this field stores the IP address of the first proxy to reach Salesforce. To better identify the origin IP for these cases, check the ForwardedForIp field instead. |
| Status | TypestringPropertiesNillableDescriptionDisplays the status of the attempted login. Status is either success or a reason for failure. |
| Subdivision | TypestringPropertiesNillableDescriptionThe name of the subdivision where the user’s IP address is physically located. In the U.S., this value is usually the state name (for example, Pennsylvania). This value isn’t localized.This field is available in API version 47.0 and later.NoteDue to the nature of geolocation technology, the accuracy of this field can vary. |
| TlsProtocol | TypepicklistPropertiesNillable, Restricted picklistDescriptionThe TLS protocol version used for the login. Available in API version 37.0 and later. Valid values are:TLS 1.0TLS 1.1TLS 1.2TLS 1.3Unknown |
| UseApiToken | TypestringPropertiesNillableDescriptionLogin with API Token - T token, or P password. |
| UserId | TypereferencePropertiesNillableDescriptionThe user’s unique ID. For example, 005000000000123. |
| Username | TypestringPropertiesNillableDescriptionThe username in the format of user@company.com. |
| UserType | TypepicklistPropertiesNillable, Restricted picklistDescriptionThe category of user license. Each UserType is associated with one or more UserLicense records. Each UserLicense is associated with one or more profiles. Valid values are:CsnOnly—Users whose access to the application is limited to Chatter. This user type includes Chatter Free and Chatter moderator users.CspLitePortal—CSP Lite Portal license. Users whose access is limited because they’re organization customers and access the application through a customer portal or Experience Cloud site.CustomerSuccess—Customer Success license. Users whose access is limited because they’re organization customers and access the application through a customer portal.GuestPowerCustomerSuccess—Power Customer Success license. Users whose access is limited because they’re organization customers and access the application through a customer portal. Users with this license type can view and edit data they directly own or data owned by or shared with users below them in the customer portal role hierarchy.PowerPartner—Power Partner license. Users whose access is limited because they’re partners and typically access the application through a partner portal or site.SelfServiceStandard—Standard user license. This user type also includes Salesforce Platform and Salesforce Platform One user licenses.This field is available only in the Real-Time Event Monitoring in API version 42.0 and later. |

## Working with AdditionalInfo

AdditionalInfo enables you to extend the login event with custom data that can be queried later. For example, you can capture a correlation ID when a user logs in from an external system that shares that unique ID. This process enables tracking logins across systems. To store data with LoginEvent, begin all AdditionalInfo field names with x-sfdc-addinfo-{fieldname}. For example, a valid field assignment is x-sfdc-addinfo-correlation\_id = ABC123 where x-sfdc-addinfo-correlation\_id is the field name and ABC123 is the field value.

When defining field names, note the following:

-   x-sfdc-addinfo- is case-insensitive. x-sfdc-addinfo-{field name} is the same as X-SFDC-ADDINFO-{FIELD NAME}.
-   Fields can contain only alphanumeric and “\_” (underscore) characters.
-   Field names must be from 2 and 29 characters in length, excluding x-sfdc-addinfo-.
-   Field names that don’t start with x-sfdc-addinfo- are ignored.
-   Field names that contain invalid characters after x-sfdc-addinfo- can cause an HTTP 400 Bad Request error.
-   Only the first 30 valid field names are stored in AdditionalInfo. Field names aren’t necessarily stored in the same order in which they were passed to authentication.

When determining field values, keep the following in mind:

-   You can’t use existing API field names as AdditionalInfo names in the HTTP header. If the AdditionalInfo name conflicts with an object’s API name, the field value isn’t stored. For example, the HTTP header X-SFDC-ADDINFO-UserId='abc123' doesn’t get stored in AdditionalInfo.
-   Additional field values can contain only alphanumeric, “\_,” and “-” characters.
-   Field values must be 255 characters in length or fewer. If a field value exceeds 255 characters, only the first 255 characters are stored and the rest are truncated.
-   Field values that contain invalid characters are saved with a field header of Empty String ("").
-   Only the first 30 valid field names are stored in the AdditionalInfo field. They aren’t guaranteed to be stored in the same order that they were passed into the authentication.
-   When AggregationFieldName is SourceIp, you can’t filter on AggregationFieldValue if its value is Salesforce.com IP.

## How to Pass Additional Information by Using HTTP with cURL

Here’s an example of passing additional information via the command line.

```

```

## How to Pass Additional Information in Java

Here’s an example of passing additional information in Java.

```

```

## Standard SOQL Usage

Currently, the only supported SOQL function on LoginEvent is WHERE, and you can only use comparison operators (=, <, >, <=, and >=) on the final expression in a WHERE clause. The != operator isn’t supported.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_events)

#### Note

Date functions such as convertTimezone() aren’t supported. For example, SELECT CALENDAR\_YEAR(EventDate), Count(EventIdentifier) FROM LoginEvent GROUP BY CALENDAR\_YEAR(EventDate) returns an error. You can use date literals in your queries and some date and date/time functions like TODAY, YESTERDAY, and LAST\_n\_DAYS:1. However, these functions use comparison operators behind the scenes, which means you can only use them in the final expression of a WHERE clause.

LoginEvent allows filtering over two ordered fields: EventDate and EventIdentifier. There’s a catch here; your query doesn’t work unless you use the correct order and combination of these fields. The following list provides some examples of valid and invalid queries:

-   **Unfiltered**
    -   **Valid**—Contains no WHERE clause, so no special rules apply.

        ```

        ```

-   **Filtered on EventDate**
    -   **Valid**—You can filter solely on EventDate, but single filters on other fields fail. You can also use a comparison operator in this query type.

        ```

        ```

    -   **Valid**—You can filter on EventDate using date literals.

        ```

        ```

-   **Filtered on EventDate and EventIdentifier**
    -   **Valid**—Successful queries on LoginEvent filter over both fields.

        ```

        ```

    -   **Invalid**—Queries on LoginEvent with EventDate and standard date literals.

        ```

        ```

    -   **Invalid**—Filtering only on EventDate with <= or >= operator and EventIdentifier field isn’t supported.

        ```

        ```


#### See Also

-   [LoginEventStream](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_logineventstream.htm "LoginEventStream tracks login activity of users who log in to Salesforce. This object is available in API version 46.0 and later.")

-   [*Big Objects Implementation Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.bigobjects.meta/bigobjects/big_object.htm "
    Big Objects Implementation Guide
    - HTML (New Window)")

## Code Examples

```
curl https://yourInstance.salesforce.com/services/oauth2/token -d "grant_type=password" -d
"client_id=3MVG9PhR6g6B7ps4RF_kNPoWSxVQstrazijsE8njPtkpUzVPPffzy8
jIoRE6q9rPznNtlsqbP9ob8kUfMjXXX" -d "client_secret=4180313776440635XXX" -d
"username=user@company.com" -d "password=123456" -H "X-PrettyPrint:1" -H
"x-sfdc-addinfo-correlationid:
d18c5a3f-4fba-47bd-bbf8-6bb9a1786624"
```

```apex
//adding additional info headers ..
Map<String, String> httpHeaders = new HashMap<String,String>();
httpHeaders.put("x-sfdc-addinfo-fieldname1" /* additional info field*/ ,
"d18c5a3f-4fba-47bd-bbf8-6bb9a1786624" /* value*/);
httpHeaders.put("x-sfdc-addinfo-fieldname2" /* additional info field*/ ,
"d18c5a3f-4fba-47bd-bbf8-6bb9a1786624" /* value*/);
ConnectorConfig config = new ConnectorConfig();
config.setUsername(userId);
config.setPassword(passwd);
config.setAuthEndpoint(authEndPoint);
config.setProxy(proxyHost, proxyPort);
//setting additional info headers
for (Map.Entry<String, String> entry : httpHeaders.entrySet()) {
config.setRequestHeader(entry.getKey(), entry.getValue());
}
// Set the username and password if your proxy must be authenticated
9
LoginEvent
config.setProxyUsername(proxyUsername);
config.setProxyPassword(proxyPassword);
try {
EnterpriseConnection connection = new EnterpriseConnection(config);
// etc.
} catch (ConnectionException ce) {
ce.printStackTrace();
}
```

```
SELECT Application, Browser, EventDate, EventIdentifier, LoginUrl, UserId
FROM LoginEvent
```

```
SELECT Application, Browser, EventDate, EventIdentifier, LoginUrl, UserId
FROM LoginEvent
WHERE EventDate<=2014-11-27T14:54:16.000Z
```

```
SELECT Application, Browser, EventDate, EventIdentifier, LoginUrl, UserId
FROM LoginEvent
WHERE EventDate<=TODAY
```

## Related Topics

- LoginEventStream (atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_logineventstream.htm)
