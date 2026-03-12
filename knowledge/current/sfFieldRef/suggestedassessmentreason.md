---
title: "SuggestedAssessmentReason"
domain: sfFieldRef
topic: suggestedassessmentreason
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:14.675Z
estimatedTokens: 343
keywords: [SuggestedAssessmentReason, Stores, reasons, suggested, assessment, API, version, 60.0, later]
---

# SuggestedAssessmentReason

> Stores the reasons for a suggested assessment. This object is available
      in API version 60.0 and later.

# SuggestedAssessmentReason

Stores the reasons for a suggested assessment. This object is available in API version 60.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see SuggestedAssessmentReason in the Industries Common Resources Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Suggested Assessment Reason ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| PrimaryAsmtQuestionResponseId | Assessment Question Response ID | reference |  | 18 |  |  |
| PrimaryAssessmentId | Assessment ID | reference |  | 18 |  |  |
| SuggestedAssessmentDefId | Suggested Assessment Definition ID | reference |  | 18 |  |  |
| SuggestionSourceType | Suggestion Source Type | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
