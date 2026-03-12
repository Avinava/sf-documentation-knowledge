---
title: "ClinicalEncounter"
domain: sfFieldRef
topic: clinicalencounter
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:53.256Z
estimatedTokens: 615
keywords: [ClinicalEncounter, Salesforce, Health, Cloud, Developer]
---

# ClinicalEncounter

> For more information, see ClinicalEncounter in the Salesforce Health Cloud Developer Guide.

# ClinicalEncounter

For more information, see ClinicalEncounter in the Salesforce Health Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AdmissionSource | Admission Source | picklist |  | 40 |  |  |
| Category | Category | picklist |  | 40 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DestinationFacilityId | Healthcare Facility ID | reference |  | 18 |  |  |
| DestinationOrganizationId | Account ID | reference |  | 18 |  |  |
| DietPreference | Diet Preference | multipicklist |  | 4099 | 0 |  |
| DischargeDispositionId | Code Set Bundle ID | reference |  | 18 |  |  |
| Duration | Duration | double |  |  | 6 | 2 |
| DurationUnitId | Unit of Measure ID | reference |  | 18 |  |  |
| EndDate | End Date | datetime |  |  |  |  |
| FacilityId | Healthcare Facility ID | reference |  | 18 |  |  |
| Id | Clinical Encounter ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PatientId | Account ID | reference |  | 18 |  |  |
| PreAdmissionIdentifierId | Clinical Encounter Identifier ID | reference |  | 18 |  |  |
| PreviousFacilityId | Healthcare Facility ID | reference |  | 18 |  |  |
| PreviousOrganizationId | Account ID | reference |  | 18 |  |  |
| PriorityId | Code Set Bundle ID | reference |  | 18 |  |  |
| ReadmissionCodeId | Code Set Bundle ID | reference |  | 18 |  |  |
| RelatedClinicalEncounterId | Clinical Encounter ID | reference |  | 18 |  |  |
| ServiceType | Service Type | picklist |  | 40 |  |  |
| SourceSystem | Source System | string |  | 64 |  |  |
| SourceSystemIdentifier | Source System ID | string |  | 255 |  |  |
| SourceSystemModified | Source System Modified | datetime |  |  |  |  |
| SpecialCourtesy | Special Courtesy | picklist |  | 40 |  |  |
| StartDate | Start Date | datetime |  |  |  |  |
| Status | Status | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TypeId | Code Set Bundle ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
