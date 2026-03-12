---
title: "ContactPointTypeConsent"
domain: sfFieldRef
topic: contactpointtypeconsent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:53.996Z
estimatedTokens: 535
keywords: [ContactPointTypeConsent, consent, contact, point, email, phone, API, version, 45.0, later]
---

# ContactPointTypeConsent

> Represents consent for a contact point type, such as email or
			phone. This object is available in API version 45.0 and later.

# ContactPointTypeConsent

Represents consent for a contact point type, such as email or phone. This object is available in API version 45.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ContactPointTypeConsent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_contactpointtypeconsent.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BusinessBrandId | Business Brand ID | reference |  | 18 |  |  |
| CaptureContactPointType | Capture Contact Point Type | picklist |  | 255 |  |  |
| CaptureDate | Capture Date | datetime |  |  |  |  |
| CaptureSource | Capture Source | string |  | 255 |  |  |
| ContactPointType | Contact Point Type ID | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DataUsePurposeId | Data Use Purpose ID | reference |  | 18 |  |  |
| DoubleConsentCaptureDate | Double Consent Capture Date | datetime |  |  |  |  |
| EffectiveFrom | Effective From | datetime |  |  |  |  |
| EffectiveTo | Effective To | datetime |  |  |  |  |
| EngagementChannelTypeId | Engagement Channel Type ID | reference |  | 18 |  |  |
| Id | Contact Point Type Consent ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PartyId | Party ID | reference |  | 18 |  |  |
| PartyRoleId | Party Role ID | reference |  | 18 |  |  |
| PrivacyConsentStatus | Privacy Consent Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
