---
title: "MedicationDispense"
domain: sfFieldRef
topic: medicationdispense
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:03.875Z
estimatedTokens: 315
keywords: [MedicationDispense, dispense, medication, patient, order, includes, instructions, how, administered, API, version, 54.0, later]
---

# MedicationDispense

> Represents the dispense of a medication to a patient in response to a
         medication request or order. This object also includes the instructions for how the
         medication is to be administered This object is available in API version 54.0 and
      later.

# MedicationDispense

Represents the dispense of a medication to a patient in response to a medication request or order. This object also includes the instructions for how the medication is to be administered This object is available in API version 54.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see MedicationDispense in the Salesforce Health Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Medication Dispense ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PatientId | Account ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
