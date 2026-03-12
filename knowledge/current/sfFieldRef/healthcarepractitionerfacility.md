---
title: "HealthcarePractitionerFacility"
domain: sfFieldRef
topic: healthcarepractitionerfacility
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:00.299Z
estimatedTokens: 664
keywords: [HealthcarePractitionerFacility, different, locations, practitioner, services]
---

# HealthcarePractitionerFacility

> Represents the different locations in which a practitioner provides
         services.

# HealthcarePractitionerFacility

Represents the different locations in which a practitioner provides services.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see HealthcarePractitionerFacility in the Life Sciences Cloud Developer Guide and Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| AvailabilityExceptions | Availability Exceptions | string |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| EffectiveFrom | Effective From | date |  |  |  |  |
| EffectiveTo | Effective To | date |  |  |  |  |
| GenderRestriction | Gender Restriction | picklist |  | 40 |  |  |
| Has24x7Service | 24x7 Support | boolean |  |  |  |  |
| HealthcareFacilityId | Healthcare Facility ID | reference |  | 18 |  |  |
| HealthcareProviderId | Healthcare Provider ID | reference |  | 18 |  |  |
| HighestValidAge | Highest Valid Age | int | 3 |  |  |  |
| Id | Healthcare Practitioner Facility ID | id |  | 18 |  |  |
| InitialStartDate | Initial Start Date | date |  |  |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsDirectoryPrint | Directory Print Indicator | boolean |  |  |  |  |
| IsPrimaryCarePhysician | Primary Care Physician | boolean |  |  |  |  |
| IsPrimaryFacility | Primary Facility | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LowestValidAge | Lowest Valid Age | int | 3 |  |  |  |
| Name | Practitioner Facility Name | string |  | 255 |  |  |
| OperatingHoursId | Operating Hour ID | reference |  | 18 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PractitionerId | Contact ID | reference |  | 18 |  |  |
| SourceSystem | Source System | string |  | 64 |  |  |
| SourceSystemIdentifier | Source System Identifier | string |  | 255 |  |  |
| SsaCountyCode | SSA/County Code | string |  | 10 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TerminationDate | Termination Date | date |  |  |  |  |
| TerminationReason | Termination Reason | picklist |  | 40 |  |  |
| TerminationRequestedById | User ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
