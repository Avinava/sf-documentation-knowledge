---
title: "LoginEventStream"
domain: platform-events
topic: logineventstream
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:28.939Z
estimatedTokens: 3938
keywords: [LoginEventStream, tracks, login, activity, users, log, Salesforce, API, version, 46.0, later, Calls, Subscribers, Subscription, Channel]
---

# LoginEventStream

> LoginEventStream tracks login activity of users who log in to
			Salesforce. This object is available in API version 46.0 and later.

# LoginEventStream

LoginEventStream tracks login activity of users who log in to Salesforce. This object is available in API version 46.0 and later.

## Supported Calls

describeSObjects()

## Supported Subscribers

| Subscriber | Supported? |
| --- | --- |
| Apex Triggers |  |
| Flows |  |
| Processes |  |
| Pub/Sub API |  |
| Streaming API (CometD) |  |

## Subscription Channel

/event/LoginEventStream

## Special Access Rules

-   Accessing this object requires either the Salesforce Shield or Salesforce Event Monitoring add-on subscription and the View Real-Time Event Monitoring Data user permission.
-   LoginEventStream doesn’t track login activity for integration or internal users who log in to Salesforce, including login rates that exceed the limit.

## Event Delivery Allocation Enforced

No

## Fields

| Field | Details |
| --- | --- |
| AdditionalInfo | TypestringPropertiesNillableDescriptionJSON serialization of additional information that’s captured from the HTTP headers during a login request. For example, {"field1": "value1","field2": "value2"}. |
| ApiType | TypestringPropertiesNillableDescriptionThe type of API that’s used to log in. Values include:SOAP EnterpriseSOAP PartnerREST API |
| ApiVersion | TypestringPropertiesNillableDescriptionThe version number of the API. If no version number is available, “Unknown” is returned. |
| Application | TypestringPropertiesNillableDescriptionThe application used to access the org. Possible values include:AppExchangeBrowserSalesforce for iOSSalesforce Developers API ExplorerN/A |
| AuthMethodReference | TypestringPropertiesNillableDescriptionThe authentication method used by a third-party identification provider for an OpenID Connect single sign-on protocol. This field is available in API version 51.0 and later. |
| AuthServiceId | TypestringPropertiesNillableDescriptionThe 18-character ID for an authentication service for a login event. For example, you can use this field to identify the SAML or authentication provider configuration with which the user logged in. |
| Browser | TypestringPropertiesNillableDescriptionThe browser name and version if known. Possible values for the browser name are:ChromeFirefoxSafariUnknownFor example, “Chrome 77”. |
| CipherSuite | TypepicklistPropertiesNillable, Restricted picklistDescriptionThe TLS cipher suite used for the login. Values are OpenSSL-style cipher suite names, with hyphen delimiters, for example, ECDHE-RSA-AES256-GCM-SHA384. Available in API version 37.0 and later. |
| City | TypestringPropertiesNillableDescriptionThe city where the user’s IP address is physically located. This value isn’t localized. This field is available in API version 47.0 and later.NoteDue to the nature of geolocation technology, the accuracy of this field can vary. |
| ClientVersion | TypestringPropertiesNillableDescriptionThe version number of the login client. If no version number is available, “Unknown” is returned. |
| Country | TypestringPropertiesNillableDescriptionThe country where the user’s IP address is physically located. This value isn’t localized.This field is available in API version 47.0 and later.NoteDue to the nature of geolocation technology, the accuracy of this field can vary. |
| CountryIso | TypestringPropertiesNillableDescriptionThe ISO 3166 code for the country where the user’s IP address is physically located. For more information, see Country Codes - ISO 3166. |
| EvaluationTime | TypedoublePropertiesNillableDescriptionThe amount of time it took to evaluate the transaction security policy, in milliseconds. |
| EventDate | TypedateTimePropertiesNillableDescriptionThe login time of the specified event. For example, 2020-01-20T19:12:26.965Z. Milliseconds are the most granular setting. |
| EventIdentifier | TypestringProperties(none)DescriptionThe unique ID of the event, which is shared with the corresponding storage object. For example, 0a4779b0-0da1-4619-a373-0a36991dff90. Use this field to correlate the event with its storage object. Also, use this field as the primary key in your queries. Available in API version 42.0 and later. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. This field is available in API version 52.0 and later. |
| ForwardedForIp | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe value in the X-Forwarded-For header of HTTP requests sent by the client. For logins that use one or more HTTP proxies, the X-Forwarded-For header is sometimes used to store the origin IP and all proxy IPs.The ForwardedForIp field stores whatever value the client sends, which might not be an IP address. The maximum length is 256 characters. Longer values are truncated. The ForwardedForIp field isn’t populated for logins completed via OAuth flows or single sign-on (SSO).Available in API version 61.0 and later. |
| HttpMethod | TypepicklistPropertiesNillable, Restricted picklistDescriptionThe HTTP method of the login request; possible values are GET, POST, and Unknown. |
| LoginGeoId | TypestringPropertiesNillableDescriptionThe Salesforce ID of the LoginGeo object associated with the login user’s IP address. For example, 04FB000001TvhiPMAR. |
| LoginHistoryId | TypereferencePropertiesNillableDescriptionTracks a user session so you can correlate user activity with a particular login instance. This field is also available on the LoginHistory, AuthSession, and LoginHistory objects, making it easier to trace events back to a user’s original authentication. For example, 0YaB000002knVQLKA2. |
| LoginKey | TypestringPropertiesNillableDescriptionThe string that ties together all events in a given user’s login session. The session starts with a login event and ends with either a logout event or the user session expiring. For example, lUqjLPQTWRdvRG4. |
| LoginLatitude | TypedoublePropertiesNillableDescriptionThe latitude where the user’s IP address is physically located.This field is available in API version 47.0 and later.NoteDue to the nature of geolocation technology, the accuracy of this field can vary. |
| LoginLongitude | TypedoublePropertiesNillableDescriptionThe longitude where the user’s IP address is physically located.This field is available in API version 47.0 and later.NoteDue to the nature of geolocation technology, the accuracy of this field can vary. |
| LoginSubType | TypepicklistPropertiesNillable, Restricted picklistDescriptionThe type of login flow used. See the LoginSubType field of LoginHistory in the Object Reference guide for the list of possible values.Label is Login Subtype. |
| LoginType | TypepicklistPropertiesNillable, Restricted picklistDescriptionThe type of login used to access the session. See the LoginType field of LoginHistory in the Object Reference guide for the list of possible values. |
| LoginUrl | TypestringPropertiesNillableDescriptionThe URL of the login host from which the request is coming. For example, yourInstance.salesforce.com. |
| NetworkId | TypestringPropertiesNillableDescriptionThe ID of the Experience Cloud site that the user is logging in to. This field is available if Salesforce Experience Cloud is enabled for your organization. |
| Platform | TypestringPropertiesNillableDescriptionThe operating system name and version that are used during the login event. If no platform name is available, “Unknown” is returned. For example, Mac OSX or iOS/Mac. |
| PolicyId | TypereferencePropertiesNillableDescriptionThe ID of the transaction security policy associated with this event. For example, 0NIB000000000KOOAY. |
| PolicyOutcome | TypepicklistPropertiesNillable, Restricted picklistDescriptionThe result of the transaction policy. Possible values are:Block—The user was blocked from performing the operation that triggered the policy.Error—The policy caused an undefined error when it executed.ExemptNoAction—The user is exempt from transaction security policies, so the policy didn’t trigger.FailedInvalidPassword—The user entered an invalid password.FailedPasswordLockout—The user entered an invalid password too many times.MeteringBlock—The policy took longer than 3 seconds to process, so the user was blocked from performing the operation.MeteringNoAction—The policy took longer than 3 seconds to process, but the user isn't blocked from performing the operation.NoAction—The policy didn't trigger.Notified—A notification was sent to the recipient.TwoFAAutomatedSuccess—Salesforce Authenticator approved the request for access because the request came from a trusted location. After users enable location services in Salesforce Authenticator, they can designate trusted locations. When a user trusts a location for a particular activity, that activity is approved from the trusted location for as long as the location is trusted. An example of a particular activity is logging in from a recognized device.TwoFADenied—The user denied the approval request in the authenticator app, such as Salesforce Authenticator.TwoFAFailedGeneralError—An error caused by something other than an invalid verification code, too many verification attempts, or authenticator app connectivity.TwoFAFailedInvalidCode—The user provided an invalid verification code.TwoFAFailedTooManyAttempts—The user attempted to verify identity too many times. For example, the user entered an invalid verification code repeatedly.TwoFAInitiated—Salesforce initiated identity verification but hasn’t yet challenged the user.TwoFAInProgress—Salesforce challenged the user to verify identity and is waiting for the user to respond or for Salesforce Authenticator to send an automated response.TwoFANoAction—The policy specifies multi-factor authentication (formerly called two-factor authentication) as an action, but the user is already in a high-assurance session.TwoFARecoverableError—Salesforce can’t reach the authenticator app to verify identity, but will retry.TwoFAReportedDenied—The user denied the approval request in the authenticator app, such as Salesforce Authenticator, and also flagged the approval request to report to an administrator.TwoFASucceeded—The user’s identity was verified. |
| PostalCode | TypestringPropertiesNillableDescriptionThe postal code where the user’s IP address is physically located. This value isn’t localized.This field is available in API version 47.0 and later.NoteDue to the nature of geolocation technology, the accuracy of this field can vary. |
| RelatedEventIdentifier | TypestringPropertiesNillableDescriptionRepresents the EventIdentifier of the related event. For example, bd76f3e7-9ee5-4400-9e7f-54de57ecd79c.This field is populated only when the activity that this event monitors requires extra authentication, such as multi-factor authentication. In this case, Salesforce generates more events and sets the RelatedEventIdentifier field of the new events to the value of the EventIdentifier field of the original event. Use this field with the EventIdentifier field to correlate all the related events. If no extra authentication is required, this field is blank. |
| RemoteIdentifier | TypestringPropertiesNillableDescriptionReserved for future use. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| SessionKey | TypestringPropertiesNillableDescriptionThe user’s unique session ID. Use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started. For example, vMASKIU6AxEr+Op5. |
| SessionLevel | TypepicklistPropertiesNillable, Restricted picklistDescriptionSession-level security controls user access to features that support it, such as connected apps and reporting. Possible values are:HIGH_ASSURANCE—A high assurance session was used for resource access. For example, when the user tries to access a resource such as a connected app, report, or dashboard that requires a high-assurance session level.LOW—The user’s security level for the current session meets the lowest requirements.NoteThis low level isn’t available, nor used, in the Salesforce UI. User sessions through the UI are either standard or high assurance. You can set this level using the API, but users assigned this level experience unpredictable and reduced functionality in their Salesforce org.STANDARD—The user’s security level for the current session meets the Standard requirements set in the org’s Session Security Levels. |
| SourceIp | TypestringPropertiesNillableDescriptionThe IP address of the incoming client request that first reaches Salesforce during a login. For example, 126.7.4.2. For clients that redirect through one or more HTTP proxies, this field stores the IP address of the first proxy to reach Salesforce. To better identify the origin IP for these cases, check the ForwardedForIp field instead. |
| Status | TypestringPropertiesNillableDescriptionDisplays the status of the attempted login. Status is either success or a reason for failure. |
| Subdivision | TypestringPropertiesNillableDescriptionThe name of the subdivision where the user’s IP address is physically located. In the U.S., this value is usually the state name (for example, Pennsylvania). This value isn’t localized.This field is available in API version 47.0 and later.NoteDue to the nature of geolocation technology, the accuracy of this field can vary. |
| TlsProtocol | TypepicklistPropertiesNillable, Restricted picklistDescriptionThe TLS protocol version used for the login. Valid values are:TLS 1.0TLS 1.1TLS 1.2TLS 1.3Unknown |
| UserId | TypereferencePropertiesNillableDescriptionThe user’s unique ID. For example, 005000000000123. |
| Username | TypestringPropertiesNillableDescriptionThe username in the format of user@company.com. |
| UserType | TypepicklistPropertiesNillable, Restricted picklistDescriptionThe category of user license. Each UserType is associated with one or more UserLicense records. Each UserLicense is associated with one or more profiles. Valid values are:CsnOnly—Users whose access to the application is limited to Chatter. This user type includes Chatter Free and Chatter moderator users.CspLitePortal—CSP Lite Portal license. Users whose access is limited because they’re organization customers and access the application through a customer portal or an Experience Cloud site.CustomerSuccess—Customer Success license. Users whose access is limited because they’re organization customers and access the application through a customer portal.GuestPowerCustomerSuccess—Power Customer Success license. Users whose access is limited because they’re organization customers and access the application through a customer portal. Users with this license type can view and edit data they directly own or data owned by or shared with users below them in the customer portal role hierarchy.PowerPartner—Power Partner license. Users whose access is limited because they’re partners and typically access the application through a partner portal or site.SelfServiceStandard—Standard user license. This user type also includes Salesforce Platform and Salesforce Platform One user licenses. |

#### See Also

-   [LoginEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_loginevent.htm "LoginEvent tracks the login activity of users who log in to Salesforce. You can use LoginEvent in a transaction security policy. LoginEvent is a big object that stores the event data of LoginEventStream. This object is available in API version 36.0 and later.")

## Related Topics

- LoginEvent (atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_loginevent.htm)
