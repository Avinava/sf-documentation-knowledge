---
title: "MedicationTherapyStmtReview"
domain: sfFieldRef
topic: medicationtherapystmtreview
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:04.034Z
estimatedTokens: 381
keywords: [MedicationTherapyStmtReview, junction, Medication, Therapy, Review, Statement, objects]
---

# MedicationTherapyStmtReview

> Represents a junction object between the Medication Therapy Review and
         Medication Statement objects.

# MedicationTherapyStmtReview

Represents a junction object between the Medication Therapy Review and Medication Statement objects.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see MedicationTherapyStmtReview in the Salesforce Health Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Comment | Comment | textarea |  | 32000 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Medication Therapy Statement Review ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MedicationStatementId | Medication Statement ID | reference |  | 18 |  |  |
| MedicationTherapyReviewId | Medication Therapy Review ID | reference |  | 18 |  |  |
| Name | Name | string |  | 255 |  |  |
| SourceSysModifiedDateTime | Source System Modified Date | datetime |  |  |  |  |
| SourceSystem | Source System | string |  | 255 |  |  |
| SourceSystemIdentifier | Source System ID | string |  | 255 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
