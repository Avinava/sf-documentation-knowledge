---
title: "AsmtQstnRespRecommendation"
domain: sfFieldRef
topic: asmtqstnresprecommendation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:48.090Z
estimatedTokens: 355
keywords: [AsmtQstnRespRecommendation, Maps, assessment, question’s, recommendation, provide, care, plan, Recommendations, problems, goals, interventions, assessments, API, version]
---

# AsmtQstnRespRecommendation

> Maps an assessment question’s response to the recommendation it has to
         provide for a care plan. Recommendations can be problems, goals, interventions, or other
         assessments. This object is available in API version 57.0 and later.

# AsmtQstnRespRecommendation

Maps an assessment question’s response to the recommendation it has to provide for a care plan. Recommendations can be problems, goals, interventions, or other assessments. This object is available in API version 57.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see AsmtQstnRespRecommendation in the Life Sciences Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AssessmentQuestionVersionId | Assessment Question Version ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Assessment Question Response Recommendation ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OmniProcessId | Omni Process ID | reference |  | 18 |  |  |
| RecommendationReferenceId | Recommendation Reference ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
