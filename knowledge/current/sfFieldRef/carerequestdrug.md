---
title: "CareRequestDrug"
domain: sfFieldRef
topic: carerequestdrug
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:52.274Z
estimatedTokens: 1320
keywords: [CareRequestDrug, requested, drug, including, strength, frequency, instructions, administration, requests, associated, care]
---

# CareRequestDrug

> Represents the details of a requested drug including name, strength,
         frequency, and instructions for administration. One or more drug requests can be associated
         with a care request.

# CareRequestDrug

Represents the details of a requested drug including name, strength, frequency, and instructions for administration. One or more drug requests can be associated with a care request.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see CareRequestDrug in the Salesforce Health Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ApprovedUnits | Approved Units | int | 9 |  |  |  |
| AuthApprovalIdentifier | Authorization Approval Identifier | string |  | 255 |  |  |
| AuthorizationRefIdentifier | Authorization Reference Identifier | string |  | 255 |  |  |
| CareRequestCaseId | Case ID | reference |  | 18 |  |  |
| CareRequestId | Care Request ID | reference |  | 18 |  |  |
| ClinicalDetermination | Clinical Determination | picklist |  | 40 |  |  |
| ClinicalDeterminationNote | Clinical Determination Note | textarea |  | 32000 |  |  |
| ClinicalDeterminationReasonId | Code Set ID | reference |  | 18 |  |  |
| Code | Code | string |  | 32 |  |  |
| CodeType | Code Type | picklist |  | 40 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DaysSupply | Days Supply | int | 9 |  |  |  |
| DecisionDate | Decision Date | datetime |  |  |  |  |
| DeniedUnits | Denied Units | int | 9 |  |  |  |
| DispenserAddress | Dispenser Address | address |  |  |  |  |
| DispenserCity | Dispenser City | string |  | 40 |  |  |
| DispenserCountry | Dispenser Country | string |  | 80 |  |  |
| DispenserFaxNumber | Dispenser Fax Number | phone |  | 40 |  |  |
| DispenserGeocodeAccuracy | Dispenser Geocode Accuracy | picklist |  | 255 |  |  |
| DispenserIdentifier | Dispenser ID | string |  | 32 |  |  |
| DispenserLatitude | Dispenser Latitude | double |  |  | 18 | 15 |
| DispenserLongitude | Dispenser Longitude | double |  |  | 18 | 15 |
| DispenserName | Dispenser Name | string |  | 255 |  |  |
| DispenserPhoneNumber | Dispenser Phone Number | phone |  | 40 |  |  |
| DispenserPostalCode | Dispenser Postal Code | string |  | 20 |  |  |
| DispenserState | Dispenser State | string |  | 80 |  |  |
| DispenserStreet | Dispenser Street | textarea |  | 255 |  |  |
| DispenserTaxIdentifier | Dispenser Tax ID | string |  | 32 |  |  |
| DispenserVerbalNotificationDateTime | Dispenser Verbal Notification Date | datetime |  |  |  |  |
| DispenserWrittenNotificationDateTime | Dispenser Written Notification Date | datetime |  |  |  |  |
| DispensingPharmacyId | Dispensing Pharmacy ID | reference |  | 18 |  |  |
| Dose | Dose | string |  | 255 |  |  |
| DrugAdministrationSetting | Drug Administration Setting | picklist |  | 40 |  |  |
| DrugCodeId | Drug Code ID | reference |  | 18 |  |  |
| Frequency | Frequency | string |  | 255 |  |  |
| Id | Care Request Drug ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MedicationCodeId | Medication ID | reference |  | 18 |  |  |
| MedicationRefObjectId | Medication Reference Object ID | reference |  | 18 |  |  |
| ModifiedCode | Modified Code | string |  | 32 |  |  |
| ModifiedCodeType | Modified Code Type | picklist |  | 40 |  |  |
| ModifiedDaysSupply | Modified Days Supply | int | 9 |  |  |  |
| ModifiedDose | Modified Dose | string |  | 255 |  |  |
| ModifiedFrequency | Modified Frequency | string |  | 255 |  |  |
| ModifiedName | Modified Name | string |  | 255 |  |  |
| ModifiedSig | Modified Sig | textarea |  | 32000 |  |  |
| ModifiedStrength | Modified Strength | string |  | 255 |  |  |
| ModifiedTherapyDuration | Modified Therapy Duration | int | 9 |  |  |  |
| ModifiedUnits | Modified Units | int | 9 |  |  |  |
| Name | Name | string |  | 255 |  |  |
| PrescriptionDate | Prescription Date | date |  |  |  |  |
| PrescriptionFillDate | Prescription Fill Date | date |  |  |  |  |
| PrescriptionFills | Prescription Fill | int | 9 |  |  |  |
| PrescriptionNumber | Prescription Number | string |  | 32 |  |  |
| Priority | Priority | picklist |  | 40 |  |  |
| RequestType | Request Type | picklist |  | 40 |  |  |
| ServiceCategory | Service Category | string |  | 255 |  |  |
| ServiceCategoryCode | Service Category Code | string |  | 32 |  |  |
| ServicingFacilityId | Servicing Facility ID | reference |  | 18 |  |  |
| ServicingProviderId | Healthcare Provider ID | reference |  | 18 |  |  |
| Sig | Sig | textarea |  | 32000 |  |  |
| SourceSystem | Source System | string |  | 255 |  |  |
| SourceSystemIdentifier | Source System Identifier | string |  | 255 |  |  |
| SourceSystemModified | Source System Modified | datetime |  |  |  |  |
| Status | Status | picklist |  | 40 |  |  |
| StatusReason | Status Reason | picklist |  | 40 |  |  |
| Strength | Strength | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TherapyDuration | Therapy Duration | int | 9 |  |  |  |
| Units | Units | int | 9 |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
