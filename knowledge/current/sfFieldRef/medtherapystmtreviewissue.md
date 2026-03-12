---
title: "MedTherapyStmtReviewIssue"
domain: sfFieldRef
topic: medtherapystmtreviewissue
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:03.810Z
estimatedTokens: 365
keywords: [MedTherapyStmtReviewIssue, junction, Medication, Therapy, Statement, Review, Clinical, Detected, Issue, objects]
---

# MedTherapyStmtReviewIssue

> Represents a junction object between the Medication Therapy Statement Review
         and Clinical Detected Issue objects.

# MedTherapyStmtReviewIssue

Represents a junction object between the Medication Therapy Statement Review and Clinical Detected Issue objects.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see MedTherapyStmtReviewIssue in the Salesforce Health Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ClinicalDetectedIssueId | Clinical Detected Issue ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Medication Therapy Statement Review Issue ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MedicationTherapyStmtReviewId | Medication Therapy Statement Review ID | reference |  | 18 |  |  |
| Name | Name | string |  | 255 |  |  |
| SourceSysModifiedDateTime | Source System Modified Date | datetime |  |  |  |  |
| SourceSystem | Source System | string |  | 255 |  |  |
| SourceSystemIdentifier | Source System ID | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
