---
title: "LoginHistory"
domain: sfFieldRef
topic: loginhistory
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:03.056Z
estimatedTokens: 480
keywords: [LoginHistory, login, history, successful, failed, attempts, organizations, enabled, portals, API, version, 21.0, later]
---

# LoginHistory

> Represents the login history for all successful and failed login
      attempts for organizations and enabled portals. This object is available in API version
    21.0 and later.

# LoginHistory

Represents the login history for all successful and failed login attempts for organizations and enabled portals. This object is available in API version 21.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [LoginHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_loginhistory.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ApiType | API Type | string |  | 64 |  |  |
| ApiVersion | API Version | string |  | 32 |  |  |
| Application | Application | string |  | 64 |  |  |
| AuthMethodReference | Authentication Method Reference | string |  | 128 |  |  |
| AuthenticationServiceId | Authentication Service ID | reference |  | 18 |  |  |
| Browser | Browser | string |  | 64 |  |  |
| CipherSuite | TLS Cipher Suite | picklist |  | 40 |  |  |
| ClientVersion | Client Version | string |  | 64 |  |  |
| CountryIso | Country Code | string |  | 3 |  |  |
| ForwardedForIp | Forwarded For IP | string |  | 255 |  |  |
| Id | Login History Id | id |  | 18 |  |  |
| LoginGeoId | Login Geo Data ID | reference |  | 18 |  |  |
| LoginSubType | Login Subtype | picklist |  | 40 |  |  |
| LoginTime | Login Time | datetime |  |  |  |  |
| LoginType | Login Type | picklist |  | 40 |  |  |
| LoginUrl | Login URL | string |  | 255 |  |  |
| OptionsIsGet | Login via GET | boolean |  |  |  |  |
| OptionsIsPost | Login via POST | boolean |  |  |  |  |
| Platform | Platform | string |  | 64 |  |  |
| SourceIp | Source IP | string |  | 39 |  |  |
| Status | Status | string |  | 128 |  |  |
| TlsProtocol | TLS Protocol | picklist |  | 40 |  |  |
| UserId | User ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
