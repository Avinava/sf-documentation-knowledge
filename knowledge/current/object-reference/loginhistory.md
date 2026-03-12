---
title: "LoginHistory"
domain: object-reference
topic: loginhistory
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:12.582Z
estimatedTokens: 2505
keywords: [LoginHistory, login, history, successful, failed, attempts, organizations, enabled, portals, API, version, 21.0, later, Calls, Special]
---

# LoginHistory

> Represents the login history for all successful and failed login
      attempts for organizations and enabled portals. This object is available in API version
    21.0 and later.

# LoginHistory

Represents the login history for all successful and failed login attempts for organizations and enabled portals. This object is available in API version 21.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

You can also enable delete() in API version 42.0 and later. See [Enable delete of Field History and Field History Archive](https://help.salesforce.com/articleView?id=000321814&type=1&mode=1&language=en_US "HTML (New Window)").

## Special Access Rules

With one exception, only users with Manage Users or Monitor Login History permissions can access this object. The exception is that, in API version 37.0 and later, all users can retrieve their own login history records.

## Fields

| Field | Details |
| --- | --- |
| ApiType | TypestringPropertiesGroup, Nillable, SortDescriptionIndicates the API type, for example Soap Enterprise. Label is API Type. |
| ApiVersion | TypestringPropertiesGroup, Nillable, SortDescriptionDisplays the API version used by the client. Label is API Version. |
| Application | TypestringPropertiesGroup, Nillable, SortDescriptionThe application used to access the organization. Label is Application. |
| AuthMethodReference | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe authentication method used by a third-party identification provider for an OpenID Connect single sign-on protocol. This field is available in API version 51.0 and later. Label is Authentication Method Reference. |
| AuthenticationServiceId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe 18-character ID for an authentication service for a login event. For example, you can use this field to identify the SAML or authentication provider configuration with which the user logged in. This field is available in API version 34.0 and later. Label is Authentication Service Id.This field is a polymorphic relationship field.Relationship NameAuthenticationServiceRelationship TypeLookupRefers ToAuthProvider, SamlSsoConfig |
| Browser | TypestringPropertiesGroup, Nillable, SortDescriptionThe current browser version. Label is Browser. |
| CipherSuite | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe TLS cipher suite used for the login. Values are OpenSSL-style cipher suite names, with hyphen delimiters. For more information, see OpenSSL Cryptography and SSL/TLS Toolkit. This field is available in API version 37.0 and later. |
| ClientVersion | TypestringPropertiesGroup, Nillable, SortDescriptionVersion of the API client. Label is Client Version. |
| CountryIso | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ISO 3166 code for the country where the user’s IP address is physically located. For more information, see Country Codes - ISO 3166. This field is available in API version 37.0 and later. |
| ForwardedForIp | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe value in the X-Forwarded-For header of HTTP requests sent by the client. For logins that use one or more HTTP proxies, the X-Forwarded-For header is sometimes used to store the origin IP and all proxy IPs.The ForwardedForIp field stores whatever value the client sends, which might not be an IP address. The maximum length is 256 characters. Longer values are truncated. The ForwardedForIp field isn’t populated for logins completed via OAuth flows or single sign-on (SSO).Available in API version 61.0 and later. |
| LoginGeoId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe 18-character ID for the record of the geographic location of the user for a successful or unsuccessful login event. The accuracy of geolocation fields like country, city, or postal code can vary because of the nature of the technology.The Manage Users permission is required for accessing this field. This field is available in API version 34.0 and later.This field is a relationship field.Relationship NameLoginGeoRelationship TypeLookupRefers ToLoginGeo |
| LoginSubType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe type of login flow used.InternalSalesforceAuthentication–Internal Salesforce AuthenticationThis subtype is for internal use only.OauthClientCredentials–OAuth Client CredentialsOauthHybridRefreshToken—OAuth Refresh Token for Hybrid AppsOauthHybridTokenExchange—OAuth Token Exchange for Hybrid AppsOauthHybridUserAgent–OAuth User-Agent for Hybrid AppsOauthHybridWebServer–OAuth Web Server for Hybrid AppsOauthOtpLogin—OAuth OTP LoginOauthRefreshToken—OAuth Refresh TokenOauthTokenExchange—OAuth Token ExchangeOauthUserAgent–OAuth User-AgentOauthUserAgentIdToken–OAuth User-Agent with ID TokenOauthUsernamePassword–OAuth Username-PasswordOauthWebServer–OAuth Web ServerSoapApiLogin–SOAP APIThis subtype is for internal use only.SoapApiLoginMobile–SOAP API (Mobile)This subtype is for internal use only.SoapApiLoginNetworksPortal–SOAP API (Networks Portal)This subtype is for internal use only.SoapApiLoginPortal–SOAP API (Portal)This subtype is for internal use only.SoapApiLoginSelfService–SOAP API (Self-Service)This subtype is for internal use only.UiPasswordReset–UI Password ResetUsernamePasswordUiLogin–UI Username-PasswordLabel is Login Subtype. |
| LoginTime | TypedateTimePropertiesFilter, SortDescriptionTime zone is based on GMT. Label is Login Time. |
| LoginType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of login used to access the session.AppExchange–AppExchangeApplication–ApplicationCertificate–Certificate-based loginChatterCommunityPortalUnPwd–Chatter Communities External UserChatterCommunityThirdPartySso–Chatter Communities External User Third Party SSOCrossTenantLogin–Cross Tenant Login—For internal use only.EmployeeLoginToCommunity–Employee Login to CommunityHelpAndTraining–Help And TrainingIeOfflineClient–Offline ClientLightningLogin–Lightning LoginNetworksPortalApiOnly–Networks Portal API OnlyOauth, Remote Access Client–Remote Access ClientOauth2, Remote Access 2.0–Remote Access 2.0OtherApi–Other Apex APIPartner–Partner ProductPasswordlessLogin–Passwordless LoginPasswordlessPasskeyLogin–Passwordless Login via Passkeys (beta)Passwordless login with passkeys is a pilot or beta service that is subject to the Beta Services Terms at Agreements - Salesforce.com or a written Unified Pilot Agreement if executed by Customer, and applicable terms in the Product Terms Directory. Use of this pilot or beta service is at the Customer's sole discretion.Portal–Customer Service PortalPortalThirdPartySso–Customer Service Portal Third-Party SSOPrmPortalThirdPartySso–Partner Portal Third-Party SSOPrmPortal–Partner PortalSaml–SAML Idp Initiated SSOSamlChatterNetworks–SAML Chatter Communities External User SSOSamlCspPortal–SAML Customer Service Portal SSOSamlPrmPortal–SAML Partner Portal SSOSamlSite–SAML Site SSOSaml2–SAML Sfdc Initiated SSOSelfService–SelfServiceThirdPartySso–Third Party SSOLabel is Login Type. |
| LoginUrl | TypestringPropertiesFilter, Group, Nillable, SortDescriptionURL from which the login request is coming. Label is Login URL. |
| NetworkId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the Experience Cloud site that the user is logging in to. This field is available in API version 31.0 and later, if Salesforce Experience Cloud sites are enabled for your org. |
| OptionsIsGet | TypebooleanPropertiesFilterDescriptionThe HTTP method used for the session login is a GET request. |
| OptionsIsPost | TypebooleanPropertiesFilterDescriptionThe HTTP method used for the session login is a POST request. |
| Platform | TypestringPropertiesGroup, Nillable, SortDescriptionOperating system on the login machine. Label is Platform. |
| SourceIp | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe IP address of the incoming client request that first reaches Salesforce during a login. For example, 126.7.4.2.For clients that redirect through one or more HTTP proxies, this field stores the IP address of the first proxy to reach Salesforce. To better identify the origin IP for these cases, check the ForwardedForIp field instead.The SourceIp field doesn't support the LIKE comparison operator. |
| Status | TypestringPropertiesGroup, Nillable, SortDescriptionDisplays the status of the attempted login. Status is either success or a reason for failure. Label is Status. |
| TlsProtocol | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe TLS protocol used for the login. Possible values are:TLS 1.0TLS 1.1TLS 1.2TLS 1.3UnknownThis field is available in API version 37.0 and later. |
| UserId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the user logging in. Label is User ID. |

## Usage

Not all fields are filterable. You can only filter on the following fields:

-   AuthenticationServiceId
-   CipherSuite
-   CountryIso
-   Id
-   LoginTime
-   LoginType
-   LoginUrl
-   NetworkId
-   OptionsIsGet
-   OptionsIsPost
-   TlsProtocol
-   UserId

The API allows you to do many powerful queries. A few examples are:

| Sample Query | Query String |
| --- | --- |
| Simple query showing UserId & LoginTime for each user | SELECT UserId, LoginTime from LoginHistory; |
| Query showing logins only after a specified date and time | SELECT UserId, LoginTime from LoginHistory WHERE LoginTime > 2010-09-20T22:16:30.000Z; |
| Query showing logins for a specific time interval | SELECT UserId, LoginTime from LoginHistory WHERE LoginTime > 2010-09-20T22:16:30.000Z AND LoginTime < 2010-09-21T22:16:30.000Z; |
| Query showing the authentication service for a SAML login event, where Id=AuthenticationServiceId from LoginHistory | SELECT DeveloperName, Issuer, Version FROM SamlSsoConfig WHERE Id = '0LE###############' |
| Query showing the authentication service for an authentication provider login event, where Id=AuthenticationServiceId from LoginHistory | SELECT Type, DeveloperName FROM AuthProvider WHERE Id = '0SO###############' |
