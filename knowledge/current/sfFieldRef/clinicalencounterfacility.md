---
title: "ClinicalEncounterFacility"
domain: sfFieldRef
topic: clinicalencounterfacility
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:53.279Z
estimatedTokens: 330
keywords: [ClinicalEncounterFacility, different, facilities, involved, encounter, time, spent, facilies, relevant, child, ClinicalEncounter, API, version, 51.0, later]
---

# ClinicalEncounterFacility

> Represents information about the different facilities involved in an encounter,
      the time spent at those facilies, and other relevant details. This is a child object of
      ClinicalEncounter. This object is available in API version 51.0 and later.

# ClinicalEncounterFacility

Represents information about the different facilities involved in an encounter, the time spent at those facilies, and other relevant details. This is a child object of ClinicalEncounter. This object is available in API version 51.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see ClinicalEncounterFacility in the Salesforce Health Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ClinicalEncounterId | Clinical Encounter ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| FacilityId | Healthcare Facility ID | reference |  | 18 |  |  |
| Id | Clinical Encounter Facility ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
