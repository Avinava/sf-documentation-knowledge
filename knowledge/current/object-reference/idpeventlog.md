---
title: "IdpEventLog"
domain: object-reference
topic: idpeventlog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:11.157Z
estimatedTokens: 834
keywords: [IdpEventLog, Identity, Provider, Event, Log, records, problems, successes, inbound, SAML, OpenID, Connect, authentication, requests, another]
---

# IdpEventLog

> Represents the Identity Provider Event Log. This log records both problems and
      successes with inbound SAML or OpenID Connect authentication requests from another app
      provider. It also records outbound SAML responses when Salesforce is acting as an identity
      provider. This object is available in API version 39.0 and later.

# IdpEventLog

Represents the Identity Provider Event Log. This log records both problems and successes with inbound SAML or OpenID Connect authentication requests from another app provider. It also records outbound SAML responses when Salesforce is acting as an identity provider. This object is available in API version 39.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| AppId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the app provider seeking authentication. |
| AuthSessionId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the authentication session. |
| ErrorCode | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe error code for the authentication issue.Possible values are:AppAccessDenied—Error: App access deniedAppBlocked—Error: App blockedClientUnapproved—Error: Invalid grantCodeExpired—Error: Expired authorization codeForceAuthNLogout—User logged out due to forced authentication requestInternalError—Error: Internal ErrorInvalidAuthnRequest—Error: Unable to parse AuthnRequest from service providerInvalidClientCredentials—Error: Invalid client credentialsInvalidCode—Error: Invalid authorization codeInvalidDeviceId—Error: Invalid device IDInvalidIdpEndpoint—Error: Invalid Identity Provider Endpoint URLInvalidIssuer—Error: Invalid IssuerInvalidScope—Error: Invalid scope(s)InvalidSessionLevel—Error: Invalid session levelInvalidSettings—Error: IdP certificate is invalid or does not existInvalidSignature—Error: Invalid SignatureInvalidSp—Error: Misconfigured or invalid service providerInvalidSpokeSp—Error: Invalid spoke SP settingsInvalidUserCredentials—Error: Invalid user credentialsNoAccess—Error: User does not have access to this service providerNoCustomAttrValue—Error: User does not have a value for the subject custom attributeNoCustomField—Error: Custom field not foundNoSpokeId—Error: No Spoke ID foundNoSubdomain—Error: No My Domain deployed in the orgNoUserFedId—Error: User does not have a Federation Identifier selectedOauthError—OAuth ErrorSuccessUnableToResolve—Error: Unable to resolve request into a Service ProviderUnknownError—Unknown Error |
| IdentityUsed | TypestringPropertiesFilter, Nillable, SortDescriptionThe identity (username) of the user being authenticated. |
| InitiatedBy | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe code describing how the authentication request was initiated.Possible values are:IdP—IdP-Initiated SAMLOauthAuthorize—OAuth AuthorizationOauthTokenExchange—OAuth Token ExchangeSP—SP-Initiated SAML |
| OptionsHasLogoutUrl | TypebooleanPropertiesFilterDescriptionWhether a logout URL has been assigned to the app. This URL is where users are redirected when they log out. |
| SamlEntityUrl | TypestringPropertiesFilter, SortDescriptionThe authentication URL of the SAML provider. |
| SsoType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe type of SSO. Options are:0–SAML1–OpenID Connect |
| Timestamp | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time on which the event occurred. |
| UserId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the user seeking authentication. |
