---
title: "MessagingEndUser"
domain: sfFieldRef
topic: messagingenduser
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:04.214Z
estimatedTokens: 555
keywords: [MessagingEndUser, address—such, phone, number, Facebook, page—communicating, Messaging, channel, API, version, 40.0, later]
---

# MessagingEndUser

> Represents a single address—such as a phone number or Facebook
      page—communicating with a single Messaging channel. This object is available in API
    version 40.0 and later.

# MessagingEndUser

Represents a single address—such as a phone number or Facebook page—communicating with a single Messaging channel. This object is available in API version 40.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [MessagingEndUser](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_messagingenduser.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| AuthenticatedEndUserId | User ID | reference |  | 18 |  |  |
| ContactId | Contact ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| HasInitialResponseSent | Has Initial Response Been Sent | boolean |  |  |  |  |
| Id | Messaging User ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsFullyOptedIn | Opted In | boolean |  |  |  |  |
| IsoCountryCode | ISO Country Code | string |  | 2 |  |  |
| Language | Language | picklist |  | 255 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LeadId | Lead ID | reference |  | 18 |  |  |
| Locale | Locale | string |  | 20 |  |  |
| MessageType | Message Type | picklist |  | 255 |  |  |
| MessagingChannelId | Messaging Channel ID | reference |  | 18 |  |  |
| MessagingConsentStatus | Messaging Consent Status | picklist |  | 255 |  |  |
| MessagingPlatformKey | Messaging Platform Key | string |  | 255 |  |  |
| Name | Messaging User Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ProfilePictureUrl | Profile Picture URL | url |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
