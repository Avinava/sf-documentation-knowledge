---
title: "HealthcareFacility"
domain: sfFieldRef
topic: healthcarefacility
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:00.217Z
estimatedTokens: 486
keywords: [HealthcareFacility, healthcare, facility, may, physical, functional, geographic, business]
---

# HealthcareFacility

> Represents a healthcare facility and all its related details. These
         details may be physical, functional, geographic, or business details.

# HealthcareFacility

Represents a healthcare facility and all its related details. These details may be physical, functional, geographic, or business details.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see HealthcareFacility in the Public Sector Solutions Developer Guide and Salesforce Health Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| AvailabilityExceptions | Availability Exceptions | string |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| FacilityTypeId | Code Set Bundle ID | reference |  | 18 |  |  |
| HealthcareProviderId | Healthcare Provider ID | reference |  | 18 |  |  |
| Id | Healthcare Facility ID | id |  | 18 |  |  |
| IsAlwaysOpen | Always open | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LicensedBedCount | Licensed Bed Count | int | 9 |  |  |  |
| LocationId | Location ID | reference |  | 18 |  |  |
| LocationType | Location Type | picklist |  | 40 |  |  |
| Name | Name | string |  | 255 |  |  |
| ParentHealthcareFacilityId | Healthcare Facility ID | reference |  | 18 |  |  |
| SourceSystem | Source System | string |  | 64 |  |  |
| SourceSystemIdentifier | Source System ID | string |  | 255 |  |  |
| SourceSystemModified | Source System Modified | datetime |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
