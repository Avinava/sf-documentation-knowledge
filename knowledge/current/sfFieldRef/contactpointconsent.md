---
title: "ContactPointConsent"
domain: sfFieldRef
topic: contactpointconsent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:53.941Z
estimatedTokens: 532
keywords: [ContactPointConsent, customer's, consent, contacted, via, specific, contact, point, email, address, phone, number, API, version, 48.0]
---

# ContactPointConsent

> Represents a customer's consent to be contacted via a specific contact point,
      such as an email address or phone number. This object is available in API version 48.0
    and later.

# ContactPointConsent

Represents a customer's consent to be contacted via a specific contact point, such as an email address or phone number. This object is available in API version 48.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ContactPointConsent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_contactpointconsent.htm "HTML (New Window)") in the Life Sciences Cloud Developer Guide and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BusinessBrandId | Business Brand ID | reference |  | 18 |  |  |
| CaptureContactPointType | Capture Contact Point Type | picklist |  | 255 |  |  |
| CaptureDate | Capture Date | datetime |  |  |  |  |
| CaptureSource | Capture Source | string |  | 255 |  |  |
| ContactPointId | Contact Point ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DataUsePurposeId | Data Use Purpose ID | reference |  | 18 |  |  |
| DoubleConsentCaptureDate | Double Consent Capture Date | datetime |  |  |  |  |
| EffectiveFrom | Effective From | datetime |  |  |  |  |
| EffectiveTo | Effective To | datetime |  |  |  |  |
| Id | Contact Point Consent ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PartyId | Individual ID | reference |  | 18 |  |  |
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
