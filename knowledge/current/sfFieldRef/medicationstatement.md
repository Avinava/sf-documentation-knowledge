---
title: "MedicationStatement"
domain: sfFieldRef
topic: medicationstatement
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:03.969Z
estimatedTokens: 355
keywords: [MedicationStatement, record, medication, patient, currently, taking, taken, past, API, version, 51.0, later]
---

# MedicationStatement

> Represents a record of medication that the patient is currently taking or has
      taken in the past. This object is available in API version 51.0 and later.

# MedicationStatement

Represents a record of medication that the patient is currently taking or has taken in the past. This object is available in API version 51.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see MedicationStatement in the Salesforce Health Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Medication Statement ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MedicationCodeId | Code Set Bundle ID | reference |  | 18 |  |  |
| MedicationId | Medication ID | reference |  | 18 |  |  |
| MedicationReasonCodeId | Code Set Bundle ID | reference |  | 18 |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PatientId | Account ID | reference |  | 18 |  |  |
| Status | Status | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
