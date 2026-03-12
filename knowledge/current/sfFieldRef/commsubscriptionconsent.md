---
title: "CommSubscriptionConsent"
domain: sfFieldRef
topic: commsubscriptionconsent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:53.560Z
estimatedTokens: 585
keywords: [CommSubscriptionConsent, customer’s, consent, communication, subscription, API, version, 48.0, later]
---

# CommSubscriptionConsent

> Represents a customer’s consent to a communication subscription. This
    object is available in API version 48.0 and later.

# CommSubscriptionConsent

Represents a customer’s consent to a communication subscription. This object is available in API version 48.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [CommSubscriptionConsent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_commsubscriptionconsent.htm "HTML (New Window)") in the Life Sciences Cloud Developer Guide and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BusinessBrandId | Business Brand ID | reference |  | 18 |  |  |
| CommSubscriptionChannelTypeId | Communication Subscription Channel Type ID | reference |  | 18 |  |  |
| ConsentCapturedDateTime | Consent Captured Date Time | datetime |  |  |  |  |
| ConsentCapturedSource | Consent Captured Source | string |  | 255 |  |  |
| ConsentGiverId | Consent Giver ID | reference |  | 18 |  |  |
| ContactPointId | Contact Point ID | reference |  | 18 |  |  |
| ContactPointValue | Communication Subscription Consent Compliance Snapshot | string |  | 40 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| DataUsePurposeId | Data Use Purpose ID | reference |  | 18 |  |  |
| EffectiveFromDate | Effective From | date |  |  |  |  |
| EngagementChannelTypeId | Engagement Channel Type ID | reference |  | 18 |  |  |
| Id | Communication Subscription Consent ID | id |  | 18 |  |  |
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
