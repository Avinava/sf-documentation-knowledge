---
title: "IdentityProviderEventStore"
domain: sfFieldRef
topic: identityprovidereventstore
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:00.676Z
estimatedTokens: 343
keywords: [IdentityProviderEventStore, Tracks, problems, successes, inbound, SAML, OpenID, Connect, authentication, requests, another, app, provider, records, outbound]
---

# IdentityProviderEventStore

> Tracks problems and successes with inbound SAML or OpenID Connect
      authentication requests from another app provider. It also records outbound SAML responses
      when Salesforce is acting as an identity provider. IdentityProviderEventStore is a big
    object. This object is available in API version 51.0 and later.

# IdentityProviderEventStore

Tracks problems and successes with inbound SAML or OpenID Connect authentication requests from another app provider. It also records outbound SAML responses when Salesforce is acting as an identity provider. IdentityProviderEventStore is a big object. This object is available in API version 51.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see IdentityProviderEventStore in the Platform Events Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AppId | Connected App ID | reference |  | 18 |  |  |
| AuthSessionId | Auth Session ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| ErrorCode | Status | picklist |  | 255 |  |  |
| EventDate | Event Date | datetime |  |  |  |  |
| EventIdentifier | Event Identifier | string |  | 80 |  |  |
| HasLogoutUrl | Has Logout URL | boolean |  |  |  |  |
| Id | Identity Provider Event Store ID | id |  | 18 |  |  |
| IdentityUsed | Identity Used | string |  | 765 |  |  |
| InitiatedBy | Usage Type | picklist |  | 255 |  |  |
| SamlEntityUrl | Entity ID | string |  | 1500 |  |  |
| SsoType | SSO Type | picklist |  | 255 |  |  |
| UserId | User ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
