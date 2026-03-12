---
title: "CareDiagnosis"
domain: sfFieldRef
topic: carediagnosis
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:51.398Z
estimatedTokens: 840
keywords: [CareDiagnosis, diagnosis, including, code, care, diagnoses, associated]
---

# CareDiagnosis

> Represents the details of a diagnosis including code type, name, and
         description. One or more care diagnoses can be associated with a care
      request.

# CareDiagnosis

Represents the details of a diagnosis including code type, name, and description. One or more care diagnoses can be associated with a care request.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see CareDiagnosis in the Salesforce Health Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CareRequestCaseId | Case ID | reference |  | 18 |  |  |
| CareRequestId | Care Request ID | reference |  | 18 |  |  |
| CodeDescription | Code Description | string |  | 255 |  |  |
| CodeType | Code Type | picklist |  | 40 |  |  |
| CodeTypeIdentifier | Code Type ID | string |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DiagnosisCodeId | Healthcare Diagnosis ID | reference |  | 18 |  |  |
| DiagnosisCodeSetId | diagnosis codeset ID | reference |  | 18 |  |  |
| DischargeCode | Discharge Code | string |  | 32 |  |  |
| DischargeCodeDescription | Discharge Code Description | string |  | 255 |  |  |
| DischargeCodeType | Discharge Code Type | picklist |  | 40 |  |  |
| DischargeCodeTypeIdentifier | Discharge Code Type ID | string |  | 255 |  |  |
| DischargeDiagnosisCodeId | Healthcare Diagnosis ID | reference |  | 18 |  |  |
| DischargeDiagnosisEffectiveDate | Discharge Diagnosis Effective Date | date |  |  |  |  |
| DischargeDiagnosisEndDate | Discharge Diagnosis End Date | date |  |  |  |  |
| DischrgeDiagnosisCodeSetId | discharge diagnosis codeset ID | reference |  | 18 |  |  |
| EffectiveDate | Effective Date | date |  |  |  |  |
| EndDate | End Date | date |  |  |  |  |
| HealthConditionId | Health Condition ID | reference |  | 18 |  |  |
| Id | Care Diagnosis ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsDischargeDiagnosisPrimary | Primary Discharge Diagnosis | boolean |  |  |  |  |
| IsModifiedDiagnosisPrimary | Modified Primary Diagnosis | boolean |  |  |  |  |
| IsPrimary | Primary | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| ModifiedCode | Modified Code | string |  | 32 |  |  |
| ModifiedCodeDescription | Modified Code Description | string |  | 255 |  |  |
| ModifiedCodeType | Modified Code Type | picklist |  | 40 |  |  |
| ModifiedCodeTypeIdentifier | Modified Code Type ID | string |  | 255 |  |  |
| ModifiedDiagnosisCodeId | Healthcare Diagnosis ID | reference |  | 18 |  |  |
| ModifiedDiagnosisCodeSetId | modified diagnosis codeset ID | reference |  | 18 |  |  |
| ModifiedEffectiveDate | Modified Effective Date | date |  |  |  |  |
| ModifiedEndDate | Modified End Date | date |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| PresentOnAdmission | Present On Admission | picklist |  | 40 |  |  |
| SourceSystem | Source System | string |  | 255 |  |  |
| SourceSystemIdentifier | Source System Identifier | string |  | 255 |  |  |
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
