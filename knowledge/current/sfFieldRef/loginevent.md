---
title: "LoginEvent"
domain: sfFieldRef
topic: loginevent
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:03.028Z
estimatedTokens: 710
keywords: [LoginEvent, event]
---

# LoginEvent

> An event related to the LoginEvent object.

# LoginEvent

An event related to the LoginEvent object.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [LoginEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_loginevent.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform and Platform Events Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AdditionalInfo | Additional Information | string |  | 10000 |  |  |
| ApiType | API Type | string |  | 64 |  |  |
| ApiVersion | API Version | string |  | 32 |  |  |
| Application | Application | string |  | 255 |  |  |
| AuthMethodReference | Authentication Method Reference | string |  | 128 |  |  |
| AuthServiceId | Authentication Service ID | reference |  | 18 |  |  |
| Browser | Browser | string |  | 64 |  |  |
| CipherSuite | TLS Cipher Suite | picklist |  | 255 |  |  |
| City | City | string |  | 200 |  |  |
| ClientVersion | Client Version | string |  | 64 |  |  |
| Country | Country | string |  | 200 |  |  |
| CountryIso | Country Code | string |  | 3 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EvaluationTime | Evaluation Time | double |  |  | 18 | 0 |
| EventDate | Event Date | datetime |  |  |  |  |
| EventIdentifier | Event Identifier | string |  | 80 |  |  |
| ForwardedForIp | Forwarded For IP | string |  | 256 |  |  |
| HttpMethod | HTTP Method | picklist |  | 255 |  |  |
| Id | Login Event ID | id |  | 18 |  |  |
| LoginGeoId | Login Geo Data ID | reference |  | 18 |  |  |
| LoginHistoryId | Login History ID | reference |  | 18 |  |  |
| LoginKey | Login Key | string |  | 24 |  |  |
| LoginLatitude | Latitude | double |  |  | 9 | 6 |
| LoginLongitude | Longitude | double |  |  | 9 | 6 |
| LoginSubType | Login Subtype | picklist |  | 255 |  |  |
| LoginType | Login Type | picklist |  | 255 |  |  |
| LoginUrl | Login URL | string |  | 1000 |  |  |
| Platform | Platform | string |  | 255 |  |  |
| PolicyId | Transaction Security Policy ID | reference |  | 18 |  |  |
| PolicyOutcome | Policy Outcome | picklist |  | 255 |  |  |
| PostalCode | Postal Code | string |  | 20 |  |  |
| RelatedEventIdentifier | Related Event Identifier | string |  | 80 |  |  |
| SessionKey | Session Key | string |  | 24 |  |  |
| SessionLevel | Session Level | picklist |  | 255 |  |  |
| SourceIp | Source IP | string |  | 80 |  |  |
| Status | Status | string |  | 128 |  |  |
| Subdivision | Subdivision | string |  | 200 |  |  |
| TlsProtocol | TLS Protocol | picklist |  | 255 |  |  |
| UserId | User ID | reference |  | 18 |  |  |
| UserType | User Type | picklist |  | 255 |  |  |
| Username | Username | string |  | 80 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
