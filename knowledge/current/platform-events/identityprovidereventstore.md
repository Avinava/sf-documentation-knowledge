---
title: "IdentityProviderEventStore"
domain: platform-events
topic: identityprovidereventstore
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:28.677Z
estimatedTokens: 921
keywords: [IdentityProviderEventStore, Tracks, problems, successes, inbound, SAML, OpenID, Connect, authentication, requests, another, app, provider, records, outbound]
---

# IdentityProviderEventStore

> Tracks problems and successes with inbound SAML or OpenID Connect
      authentication requests from another app provider. It also records outbound SAML responses
      when Salesforce is acting as an identity provider. IdentityProviderEventStore is a big
    object. This object is available in API version 51.0 and later.

# IdentityProviderEventStore

Tracks problems and successes with inbound SAML or OpenID Connect authentication requests from another app provider. It also records outbound SAML responses when Salesforce is acting as an identity provider. IdentityProviderEventStore is a big object. This object is available in API version 51.0 and later.

## Supported Calls

describeSObjects(), query()

## Special Access Rules

Accessing this object requires either the Salesforce Shield or Salesforce Event Monitoring add-on subscription as well as the View Real-Time Event Monitoring Data and CustomizeApplication permissions.

## Fields

| Field | Details |
| --- | --- |
| AppId | TypereferencePropertiesNillableDescriptionThe ID of the app provider seeking authentication. |
| AuthSessionId | TypereferencePropertiesNillableDescriptionThe ID of the authentication session. |
| ErrorCode | TypepicklistPropertiesRestricted picklistDescriptionThe error code for the authentication issue.Possible values are:AppAccessDenied—Error: App access deniedAppBlocked—Error: App blockedClientUnapproved—Error: Invalid grantCodeExpired—Error: Expired authorization codeInternalError—Error: Internal ErrorInvalidAuthnRequest—Error: Unable to parse AuthnRequest from service providerInvalidClientCredentials—Error: Invalid client credentialsInvalidCode—Error: Invalid authorization codeInvalidDeviceId—Error: Invalid device IDInvalidIdpEndpoint—Error: Invalid Identity Provider Endpoint URLInvalidIssuer—Error: Invalid IssuerInvalidScope—Error: One or more invalid scopesInvalidSessionLevel—Error: Invalid session levelInvalidSettings—Error: IdP certificate is invalid or doesn’t existInvalidSignature—Error: Invalid SignatureInvalidSp—Error: Misconfigured or invalid service providerInvalidSpokeSp—Error: Invalid spoke SP settingsInvalidUserCredentials—Error: Invalid user credentialsNoAccess—Error: User doesn’t have access to this service providerNoCustomAttrValue—Error: User doesn’t have a value for the subject custom attributeNoCustomField—Error: Custom field not foundNoSpokeId—Error: No Spoke ID foundNoSubdomain—Error: My Domain isn’t configuredNoUserFedId—Error: User doesn’t have a Federation Identifier selectedOauthError—OAuth ErrorSuccessUnableToResolve—Error: Unable to resolve request into a Service ProviderUnknownError—Unknown Error |
| EventDate | TypedateTimePropertiesFilter, SortDescriptionThe date and time of the event. |
| EventIdentifier | TypestringPropertiesFilter, SortDescriptionThe unique identifier for each record in IdentityProviderEventStore. |
| HasLogoutUrl | TypebooleanPropertiesDefaulted on createDescriptionWhether a logout URL has been assigned to the app. Users are redirected to this URL when they log out. The default value is false. |
| IdentityUsed | TypestringPropertiesNillableDescriptionThe identity (username) of the user being authenticated. |
| InitiatedBy | TypepicklistPropertiesRestricted picklistDescriptionThe code describing how the authentication request was initiated.Possible values are:IdP—IdP-Initiated SAMLOauthAuthorize—OAuth AuthorizationOauthTokenExchange—OAuth Token ExchangeSP—SP-Initiated SAMLUnused |
| SamlEntityUrl | TypestringPropertiesDescriptionThe authentication URL of the SAML provider. |
| SsoType | TypepicklistPropertiesNillable, Restricted picklistDescriptionThe type of SSO.Possible values are:OidcSaml |
| UserId | TypereferencePropertiesNillableDescriptionThe ID of the user seeking authentication. |

#### See Also

-   [*Big Objects Implementation Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.bigobjects.meta/bigobjects/big_object.htm "
    Big Objects Implementation Guide
    - HTML (New Window)")
