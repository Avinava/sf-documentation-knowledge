---
title: "PatientMedicalProcedureDetail"
domain: sfFieldRef
topic: patientmedicalproceduredetail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:07.107Z
estimatedTokens: 316
keywords: [PatientMedicalProcedureDetail, Associates, records, different, objects, patient, medical, procedure, record, add, multi-object, junction, API, version, 51.0]
---

# PatientMedicalProcedureDetail

> Associates records from different objects to a patient medical procedure record
      to add more information to the procedure record. This is a multi-object junction object.
    This object is available in API version 51.0 and later.

# PatientMedicalProcedureDetail

Associates records from different objects to a patient medical procedure record to add more information to the procedure record. This is a multi-object junction object. This object is available in API version 51.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see PatientMedicalProcedureDetail in the Salesforce Health Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Patient Medical Procedure Detail ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| PatientMedicalProcedureId | Patient Medical Procedure ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
