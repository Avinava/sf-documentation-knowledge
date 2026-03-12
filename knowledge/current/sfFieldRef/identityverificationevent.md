---
title: "IdentityVerificationEvent"
domain: sfFieldRef
topic: identityverificationevent
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:00.699Z
estimatedTokens: 471
keywords: [IdentityVerificationEvent, Tracks, user, identity, verification, events, org, big, stores, event, data, users, prompted, verify, their]
---

# IdentityVerificationEvent

> Tracks user identity verification events in your org.
			IdentityVerificationEvent is a big object that stores the event data when users are
			prompted to verify their identity.  Available in API version 47.0 and
		later.

# IdentityVerificationEvent

Tracks user identity verification events in your org. IdentityVerificationEvent is a big object that stores the event data when users are prompted to verify their identity. Available in API version 47.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see IdentityVerificationEvent in the Platform Events Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Activity | User Activity | picklist |  | 255 |  |  |
| City | City | string |  | 200 |  |  |
| Country | Country | string |  | 200 |  |  |
| CountryIso | Country Code | string |  | 3 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EventDate | Event Date | datetime |  |  |  |  |
| EventGroup | Verification Attempt | string |  | 255 |  |  |
| EventIdentifier | Event Identifier | string |  | 80 |  |  |
| Id | Identity Verification Event ID | id |  | 18 |  |  |
| Latitude | Latitude | double |  |  | 9 | 6 |
| LoginHistoryId | Login History ID | reference |  | 18 |  |  |
| LoginKey | Login Key | string |  | 24 |  |  |
| Longitude | Longitude | double |  |  | 9 | 6 |
| Policy | Triggered By | picklist |  | 255 |  |  |
| PostalCode | Postal Code | string |  | 20 |  |  |
| Remarks | Activity Message | string |  | 255 |  |  |
| ResourceId | Connected App ID | reference |  | 18 |  |  |
| SessionKey | Session Key | string |  | 24 |  |  |
| SessionLevel | Session Level | picklist |  | 255 |  |  |
| SourceIp | Source IP | string |  | 255 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| Subdivision | Subdivision | string |  | 200 |  |  |
| UserId | User ID | reference |  | 18 |  |  |
| Username | Username | string |  | 80 |  |  |
| VerificationMethod | Method | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
