---
title: "AssessmentQuestionResponse"
domain: sfFieldRef
topic: assessmentquestionresponse
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:48.301Z
estimatedTokens: 632
keywords: [AssessmentQuestionResponse, Stores, responses, submitted, assessment, API, version, 63.0, later]
---

# AssessmentQuestionResponse

> Stores the responses submitted to an assessment. This object is
      available in API version 63.0 and later.

# AssessmentQuestionResponse

Stores the responses submitted to an assessment. This object is available in API version 63.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see AssessmentQuestionResponse in the Education Cloud Developer Guide and Industries Common Resources Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AssessmentId | Assessment ID | reference |  | 18 |  |  |
| AssessmentQuestionId | Assessment Question Version ID | reference |  | 18 |  |  |
| ChoiceValue | Choice Value | textarea |  | 1000 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyValue | Currency Value | currency |  |  | 18 | 0 |
| DateTimeValue | Date Time Value | datetime |  |  |  |  |
| DateValue | Date Value | date |  |  |  |  |
| DecimalResponseValue | Decimal Response Value | double |  |  | 12 | 2 |
| ExtlAssessmentQuestionText | External Assessment Question Text | textarea |  | 32000 |  |  |
| ExtlResponseValueIdentifier | External Response Value Identifier | string |  | 255 |  |  |
| Id | Assessment Question Response ID | id |  | 18 |  |  |
| IntegerResponseValue | Integer Response Value | int | 9 |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsTrueOrFalseValue | Boolean Value | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OriginType | Origin Type | picklist |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ParentAsmtQuestionVersionId | Assessment Question Version ID | reference |  | 18 |  |  |
| RespondentTimezone | Respondent Timezone | string |  | 255 |  |  |
| ResponseText | Response Text | textarea |  | 131072 |  |  |
| ResponseType | Response Type | string |  | 50 |  |  |
| ResponseValue | Response Value | textarea |  | 131072 |  |  |
| ResponseValueScore | Response Value Score | double |  |  | 12 | 2 |
| ReviewerId | Reviewer ID | reference |  | 18 |  |  |
| ReviewerRoleId | Reviewer Role ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TimeValue | Time Value | time |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
