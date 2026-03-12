---
title: "IdpEventLog"
domain: sfFieldRef
topic: idpeventlog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:00.727Z
estimatedTokens: 349
keywords: [IdpEventLog, Identity, Provider, Event, Log, records, problems, successes, inbound, SAML, OpenID, Connect, authentication, requests, another]
---

# IdpEventLog

> Represents the Identity Provider Event Log. This log records both problems and
      successes with inbound SAML or OpenID Connect authentication requests from another app
      provider. It also records outbound SAML responses when Salesforce is acting as an identity
      provider. This object is available in API version 39.0 and later.

# IdpEventLog

Represents the Identity Provider Event Log. This log records both problems and successes with inbound SAML or OpenID Connect authentication requests from another app provider. It also records outbound SAML responses when Salesforce is acting as an identity provider. This object is available in API version 39.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [IdpEventLog](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_idpeventlog.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AppId | Connected App ID | reference |  | 18 |  |  |
| AuthSessionId | Auth Session ID | reference |  | 18 |  |  |
| ErrorCode | Status | picklist |  | 40 |  |  |
| Id | Event Log Entry ID | id |  | 18 |  |  |
| IdentityUsed | Identity Used | string |  | 765 |  |  |
| InitiatedBy | Usage Type | picklist |  | 40 |  |  |
| OptionsHasLogoutUrl | Has Logout URL | boolean |  |  |  |  |
| SamlEntityUrl | Entity ID | string |  | 1500 |  |  |
| SsoType | SSO Type | picklist |  | 40 |  |  |
| Timestamp | Timestamp | datetime |  |  |  |  |
| UserId | User ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
