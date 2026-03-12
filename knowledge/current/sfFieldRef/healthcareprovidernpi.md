---
title: "HealthcareProviderNpi"
domain: sfFieldRef
topic: healthcareprovidernpi
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:00.347Z
estimatedTokens: 461
keywords: [HealthcareProviderNpi, identifiers, National, Provider, Identifier, assigned, every, facility, licensed, practitioner, United, States, includes, NPI, date]
---

# HealthcareProviderNpi

> Represents identifiers from the National Provider Identifier that are
         assigned to every facility and licensed practitioner in the United States. Also includes
         NPI assigned date, primary mailing address on file, and so on.

# HealthcareProviderNpi

Represents identifiers from the National Provider Identifier that are assigned to every facility and licensed practitioner in the United States. Also includes NPI assigned date, primary mailing address on file, and so on.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see HealthcareProviderNpi in the Life Sciences Cloud Developer Guide and Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| AccountNpiType | Account NPI Type | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| EffectiveFrom | Effective From | date |  |  |  |  |
| EffectiveTo | Effective To | date |  |  |  |  |
| Id | Healthcare Provider NPI ID | id |  | 18 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| Npi | NPI | string |  | 15 |  |  |
| NpiType | NPI Type | picklist |  | 40 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PractitionerId | Contact ID | reference |  | 18 |  |  |
| SourceSystem | Source System | string |  | 64 |  |  |
| SourceSystemIdentifier | Source System Identifier | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
