---
title: "HealthcareProvider"
domain: sfFieldRef
topic: healthcareprovider
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:00.327Z
estimatedTokens: 595
keywords: [HealthcareProvider, business-level, provider, organization, practitioner]
---

# HealthcareProvider

> Represents business-level details about the provider organization or the
         practitioner.

# HealthcareProvider

Represents business-level details about the provider organization or the practitioner.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see HealthcareProvider in the Life Sciences Cloud Developer Guide and Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| CaqhIdentifier | CAQH Identifier | string |  | 80 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| EffectiveFrom | Effective From | date |  |  |  |  |
| EffectiveTo | Effective To | date |  |  |  |  |
| EhrSystem | EHR System | textarea |  | 32000 |  |  |
| HasCarrierContract | Use CMS MA Contract Amendment | boolean |  |  |  |  |
| Id | Healthcare Provider ID | id |  | 18 |  |  |
| InitialStartDate | Initial Start Date | date |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsNotSearchable | Exclude from search | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Healthcare Provider Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PractitionerId | Contact ID | reference |  | 18 |  |  |
| ProviderClass | Provider Class | picklist |  | 40 |  |  |
| ProviderPhotoId | Content Document ID | reference |  | 18 |  |  |
| ProviderType | Provider Type | picklist |  | 40 |  |  |
| ReferredByContactId | Contact ID | reference |  | 18 |  |  |
| RelatedUserId | User ID | reference |  | 18 |  |  |
| SourceSystem | Source System | string |  | 64 |  |  |
| SourceSystemIdentifier | Source System Identifier | string |  | 255 |  |  |
| Status | Status | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TerminationDate | Termination Date | date |  |  |  |  |
| TerminationReason | Termination Reason | string |  | 255 |  |  |
| TotalLicensedBeds | Total Licensed Beds | int | 7 |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
