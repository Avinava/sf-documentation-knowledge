---
title: "AssessmentQuestion"
domain: sfFieldRef
topic: assessmentquestion
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:48.257Z
estimatedTokens: 494
namespace: Namespace
keywords: [AssessmentQuestion, Stores, questions, assessment, API, version, 55.0, later]
---

# AssessmentQuestion

> Stores the questions required for an assessment. This object is
      available in API version 55.0 and later.

**Namespace:** `Namespace`

# AssessmentQuestion

Stores the questions required for an assessment. This object is available in API version 55.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see AssessmentQuestion in the Education Cloud Developer Guide, Industries Common Resources Developer Guide, and Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActiveVersionId | Assessment Question Version ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DataType | Data Type | picklist |  | 255 |  |  |
| Description | Description | textarea |  | 1000 |  |  |
| DeveloperName | Developer Name | string |  | 80 |  |  |
| FormulaResponseDataType | Formula Response Data Type | picklist |  | 255 |  |  |
| Id | Assessment Question ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| Namespace | Namespace | string |  | 15 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| QuestionCategory | Category | picklist |  | 40 |  |  |
| QuestionText | Question Text | textarea |  | 1000 |  |  |
| RelatedQuestionId | Assessment Question ID | reference |  | 18 |  |  |
| ShouldExcludeFromMetadata | Exclude From Metadata | boolean |  |  |  |  |
| ShouldHideInDesigner | Hide In Designer | boolean |  |  |  |  |
| SourceSystemName | Source System Name | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UniqueIndex | Unique Index | string |  | 100 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
