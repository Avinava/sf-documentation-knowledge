---
title: "CareProviderSearchableField"
domain: sfFieldRef
topic: careprovidersearchablefield
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:52.177Z
estimatedTokens: 937
keywords: [CareProviderSearchableField, holds, denormalized, data, certain, Provider, Relationship, Management, model, search, APIs, query, instead, multiple, objects]
---

# CareProviderSearchableField

> This object holds denormalized data from certain fields in the
      Provider Relationship Management data model. Provider search APIs query this object
    instead of multiple objects, which improves search performance. This object is available in API
    version 47.0 and later.

# CareProviderSearchableField

This object holds denormalized data from certain fields in the Provider Relationship Management data model. Provider search APIs query this object instead of multiple objects, which improves search performance. This object is available in API version 47.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see CareProviderSearchableField in the Life Sciences Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CertificationType | Certification Type | textarea |  | 4000 |  |  |
| Condition | Condition | textarea |  | 4000 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EducationType | Education Type | textarea |  | 4000 |  |  |
| FacilityAddress | Address | address |  |  |  |  |
| FacilityCity | Facility City | string |  | 40 |  |  |
| FacilityCountry | Facility Country | string |  | 80 |  |  |
| FacilityGeocodeAccuracy | Facility Geocode Accuracy | picklist |  | 40 |  |  |
| FacilityId | Account ID | reference |  | 18 |  |  |
| FacilityLatitude | Facility Latitude | double |  |  | 18 | 15 |
| FacilityLongitude | Facility Longitude | double |  |  | 18 | 15 |
| FacilityName | Facility Name | string |  | 255 |  |  |
| FacilityPhone | Facility Phone | phone |  | 40 |  |  |
| FacilityPostalCode | Facility Postal Code | string |  | 20 |  |  |
| FacilityState | Facility State | string |  | 80 |  |  |
| FacilityStreet | Facility Street | textarea |  | 255 |  |  |
| GenderRestriction | Gender Restriction | string |  | 255 |  |  |
| Id | Care Provider Search Data ID | id |  | 18 |  |  |
| IsAcceptingNewPatients | Accepts new patients | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsHandicapAccess | Accessible | boolean |  |  |  |  |
| IsUpdateNeeded | Update Needed | boolean |  |  |  |  |
| LanguagesSpoken | Languages Spoken | textarea |  | 4000 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LicenseJurisdictionCountry | License Jurisdiction Country | textarea |  | 4000 |  |  |
| LicenseJurisdictionRegion | License Jurisdiction Region | textarea |  | 4000 |  |  |
| LicenseJurisdictionState | License Jurisdiction State | textarea |  | 4000 |  |  |
| LicenseName | License Name | textarea |  | 4000 |  |  |
| LicenseStatus | License Status | textarea |  | 4000 |  |  |
| Name | Care Provider Searchable Field Name | string |  | 255 |  |  |
| NationalProviderIdentifier | National Provider Identifier | string |  | 255 |  |  |
| OperatingHoursId | Operating Hour ID | reference |  | 18 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PhotoUrl | Photo URL | string |  | 255 |  |  |
| PlanType | Plan Type | textarea |  | 4000 |  |  |
| ProviderGender | Provider Gender | string |  | 255 |  |  |
| ProviderId | Healthcare Provider ID | reference |  | 18 |  |  |
| ProviderName | Provider Name | string |  | 255 |  |  |
| ProviderType | Provider Type | string |  | 255 |  |  |
| Service | Service | textarea |  | 4000 |  |  |
| ServiceCode | Service Code | textarea |  | 4000 |  |  |
| Specialty | Specialty | textarea |  | 4000 |  |  |
| SubSpecialty | Subspecialty | textarea |  | 4000 |  |  |
| SyncLogRecord | Provider Search Sync Log ID | string |  | 25 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UniqueKey | Unique Key | string |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
