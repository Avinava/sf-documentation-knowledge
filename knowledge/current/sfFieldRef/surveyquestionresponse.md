---
title: "SurveyQuestionResponse"
domain: sfFieldRef
topic: surveyquestionresponse
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:14.794Z
estimatedTokens: 382
keywords: [SurveyQuestionResponse, participant’s, answer, specific, question]
---

# SurveyQuestionResponse

> Represents a participant’s answer to a specific question.

# SurveyQuestionResponse

Represents a participant’s answer to a specific question.

For more information, see SurveyQuestionResponse in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ChoiceValue | Choice Value | textarea |  | 1000 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Datatype | Data Type | picklist |  | 255 |  |  |
| DateTimeValue | Date Time Value | datetime |  |  |  |  |
| DateValue | Date Value | date |  |  |  |  |
| Id | Survey Question Response ID | id |  | 18 |  |  |
| InvitationId | Survey Invitation ID | reference |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsTrueOrFalse | True or False | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| NumberValue | Number Value | int | 9 |  |  |  |
| QuestionChoiceId | Survey Question Choice ID | reference |  | 18 |  |  |
| QuestionId | Survey Question ID | reference |  | 18 |  |  |
| Rank | Rank | int | 9 |  |  |  |
| ResponseId | Survey Response ID | reference |  | 18 |  |  |
| ResponseShortText | Name | string |  | 255 |  |  |
| ResponseValue | Response Value | textarea |  | 32000 |  |  |
| SurveyVersionId | Survey Version ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
