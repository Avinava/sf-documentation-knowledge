---
title: "MedicationRequest"
domain: sfFieldRef
topic: medicationrequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:03.941Z
estimatedTokens: 974
keywords: [MedicationRequest, order, supply, medication, along, how, administered, API, version, 51.0, later]
---

# MedicationRequest

> Represents a request or order for the supply of medication, along with
      information about how it should be administered. This object is available in API version
    51.0 and later.

# MedicationRequest

Represents a request or order for the supply of medication, along with information about how it should be administered. This object is available in API version 51.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see MedicationRequest in the Salesforce Health Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AllowedSubstitutionTypeCodeId | Code Set Bundle ID | reference |  | 18 |  |  |
| CanSubstitute | Can be Substitute | boolean |  |  |  |  |
| CaseId | Case ID | reference |  | 18 |  |  |
| ClinicalEncounterId | Clinical Encounter ID | reference |  | 18 |  |  |
| ClinicalServiceRequestId | Clinical Service Request ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DispenseInterval | Dispense Interval | double |  |  | 6 | 2 |
| DispenseIntervalUnitId | Unit of Measure ID | reference |  | 18 |  |  |
| DispenserId | Account ID | reference |  | 18 |  |  |
| FillDurationUnitId | Unit of Measure ID | reference |  | 18 |  |  |
| FillQuantityUnitId | Unit of Measure ID | reference |  | 18 |  |  |
| Id | Medication Request ID | id |  | 18 |  |  |
| InitialFillDuration | Initial Fill Duration | double |  |  | 6 | 2 |
| InitialFillQuantity | Initial Fill Quantity | double |  |  | 6 | 2 |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsIgnored | Ignore request | boolean |  |  |  |  |
| IsSecondaryInformation | Secondary Information Source | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MedicationAdministrationContextId | Code Set Bundle ID | reference |  | 18 |  |  |
| MedicationCodeId | Code Set Bundle ID | reference |  | 18 |  |  |
| MedicationId | Medication ID | reference |  | 18 |  |  |
| MedicationRequestGroupId | Identifier ID | reference |  | 18 |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PatientId | Account ID | reference |  | 18 |  |  |
| PerformerId | Performer ID | reference |  | 18 |  |  |
| PerformerTypeId | Code Set Bundle ID | reference |  | 18 |  |  |
| PrescribedDate | Prescribed Date | datetime |  |  |  |  |
| PrescriptionPeriodEnd | Prescription Period End | datetime |  |  |  |  |
| PrescriptionPeriodStart | Prescription Period Start | datetime |  |  |  |  |
| PreviousPrescriptionId | Medication Request ID | reference |  | 18 |  |  |
| Priority | Priority | picklist |  | 40 |  |  |
| ReasonCodeId | Code Set Bundle ID | reference |  | 18 |  |  |
| ReasonReferenceId | Reason Reference ID | reference |  | 18 |  |  |
| RefillDuration | Refill Duration | double |  |  | 6 | 2 |
| RefillQuantity | Refill Quantity | double |  |  | 6 | 2 |
| RefillsAllowed | Refills Allowed | int | 9 |  |  |  |
| RelatedRequestId | Medication Request ID | reference |  | 18 |  |  |
| RequesterId | Requester ID | reference |  | 18 |  |  |
| SecondarySourceId | Secondary Source ID | reference |  | 18 |  |  |
| SourceSystem | Source System | string |  | 64 |  |  |
| SourceSystemIdentifier | Source System ID | string |  | 255 |  |  |
| SourceSystemModified | Source System Modified | datetime |  |  |  |  |
| Status | Status | picklist |  | 40 |  |  |
| StatusReasonCodeId | Code Set Bundle ID | reference |  | 18 |  |  |
| SubstitutionReasonCodeId | Code Set Bundle ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TherapyDuration | Therapy Duration | picklist |  | 40 |  |  |
| Type | Type | picklist |  | 40 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
