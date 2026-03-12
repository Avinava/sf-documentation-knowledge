---
title: "MedReconRecommendation"
domain: sfFieldRef
topic: medreconrecommendation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:03.768Z
estimatedTokens: 480
keywords: [MedReconRecommendation, Stores, medication, recommendation, associates, reconciliation]
---

# MedReconRecommendation

> Stores information about a medication recommendation and associates a
         recommendation to a medication reconciliation.

# MedReconRecommendation

Stores information about a medication recommendation and associates a recommendation to a medication reconciliation.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see MedReconRecommendation in the Salesforce Health Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| Id | Medication Reconciliation Recommendation ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MedicationReconciliationId | Medication Reconciliation ID | reference |  | 18 |  |  |
| Name | Name | string |  | 255 |  |  |
| NoteForPatient | Note for Patient | textarea |  | 32000 |  |  |
| NoteForProvider | Note for Provider | textarea |  | 32000 |  |  |
| Priority | Priority | picklist |  | 40 |  |  |
| RecommendationReasonSubtype | Recommendation Reason Subtype | picklist |  | 40 |  |  |
| RecommendationReasonType | Recommendation Reason Type | picklist |  | 40 |  |  |
| RecommendationSubtype | Recommendation Subtype | picklist |  | 40 |  |  |
| RecommendationType | Recommendation Type | picklist |  | 40 |  |  |
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
