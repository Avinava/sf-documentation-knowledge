---
title: "CareProviderFacilitySpecialty"
domain: sfFieldRef
topic: careproviderfacilityspecialty
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:52.139Z
estimatedTokens: 513
keywords: [CareProviderFacilitySpecialty, specialties, practitioner, location, physician, board-certified, spine, neuro, may, provide, services, another]
---

# CareProviderFacilitySpecialty

> Represents all the specialties that the practitioner provides at a given
         location. For example, a physician who is board-certified in both spine and neuro may
         provide spine services at one location and neuro services at another.

# CareProviderFacilitySpecialty

Represents all the specialties that the practitioner provides at a given location. For example, a physician who is board-certified in both spine and neuro may provide spine services at one location and neuro services at another.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see CareProviderFacilitySpecialty in the Life Sciences Cloud Developer Guide and Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| EffectiveFrom | Effective From | date |  |  |  |  |
| EffectiveTo | Effective To | date |  |  |  |  |
| HealthcareFacilityId | Healthcare Facility ID | reference |  | 18 |  |  |
| Id | Care Provider Facility Specialty ID | id |  | 18 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsPrimarySpecialty | Primary Specialty | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Provider Facility Specialty Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PractitionerFacilityId | Healthcare Practitioner Facility ID | reference |  | 18 |  |  |
| SourceSystem | Source System | string |  | 64 |  |  |
| SourceSystemIdentifier | Source System Identifier | string |  | 255 |  |  |
| SpecialtyId | Care Specialty ID | reference |  | 18 |  |  |
| SpecialtyRole | Specialty Role | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
