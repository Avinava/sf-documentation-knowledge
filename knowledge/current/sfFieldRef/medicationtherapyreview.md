---
title: "MedicationTherapyReview"
domain: sfFieldRef
topic: medicationtherapyreview
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:04.010Z
estimatedTokens: 541
keywords: [MedicationTherapyReview, Stores, medication, therapy, review, conducted, patient]
---

# MedicationTherapyReview

> Stores information about a medication therapy review conducted for a
         patient.

# MedicationTherapyReview

Stores information about a medication therapy review conducted for a patient.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see MedicationTherapyReview in the Salesforce Health Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CareProgramId | Care Program ID | reference |  | 18 |  |  |
| ConductedById | User ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | string |  | 255 |  |  |
| Id | Medication Therapy Review ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsPatientInLtrmCareFacility | Patient in Long Term Care Facility | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PatientId | Account ID | reference |  | 18 |  |  |
| ReviewDueDateTime | Review Due Date | datetime |  |  |  |  |
| ReviewEndDateTime | Review End Date | datetime |  |  |  |  |
| ReviewStartDateTime | Review Start Date | datetime |  |  |  |  |
| ReviewSubtype | Review Subtype | multipicklist |  | 4099 | 0 |  |
| ReviewType | Review Type | picklist |  | 255 |  |  |
| SourceSysModifiedDateTime | Source System Modified Date | datetime |  |  |  |  |
| SourceSystem | Source System | string |  | 255 |  |  |
| SourceSystemIdentifier | Source System ID | string |  | 255 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SurrogateDecisionMakerId | Surrogate Decision Maker ID | reference |  | 18 |  |  |
| SurrogateLocationId | Surrogate Location ID | reference |  | 18 |  |  |
| SurrogateType | Surrogate Type | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
