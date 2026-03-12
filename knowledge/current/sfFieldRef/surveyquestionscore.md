---
title: "SurveyQuestionScore"
domain: sfFieldRef
topic: surveyquestionscore
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:14.802Z
estimatedTokens: 466
keywords: [SurveyQuestionScore, aggregate, responses, question, date, multiple, choice, picklist, radio, ranking, rating, scoring, slider, Net, Promoter]
---

# SurveyQuestionScore

> Represents the aggregate of responses for the following question types: date,
      multiple choice, picklist, radio, ranking, rating, scoring, slider, and Net Promoter Score® (NPS®).

# SurveyQuestionScore

Represents the aggregate of responses for the following question types: date, multiple choice, picklist, radio, ranking, rating, scoring, slider, and [Net Promoter Score® (NPS®)](https://www.salesforce.com/content/dam/web/en_us/www/documents/legal/Agreements/product-specific-terms/net-promoter-and-nps.pdf).

For more information, see SurveyQuestionScore in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CumulativeScore | Cumulative Score | double |  |  | 18 | 0 |
| DateResponse | Date Response | date |  |  |  |  |
| Id | Question Score ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| QuestionChoiceId | Survey Question Choice ID | reference |  | 18 |  |  |
| QuestionDeveloperName | Question Developer Name | string |  | 255 |  |  |
| QuestionId | Survey Question ID | reference |  | 18 |  |  |
| QuestionName | Question Name | textarea |  | 4000 |  |  |
| QuestionSkippedCount | Question Skipped Count | int | 9 |  |  |  |
| ResponseCount | Response Count | int | 9 |  |  |  |
| ResponseValue | Response Value | double |  |  | 18 | 0 |
| Score | Score | double |  |  | 18 | 0 |
| ScoreType | Question Score Type | picklist |  | 255 |  |  |
| SurveyId | Survey ID | reference |  | 18 |  |  |
| SurveyInvitationId | Survey Invitation ID | reference |  | 18 |  |  |
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
