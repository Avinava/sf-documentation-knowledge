---
title: "SurveyQuestionResponse"
domain: salesforce-feedback-management-dev-guide
topic: surveyquestionresponse
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:41.661Z
estimatedTokens: 767
keywords: [SurveyQuestionResponse, participant’s, answer, specific, question, Calls, Associated, Objects]
---

# SurveyQuestionResponse

> Represents a participant’s answer to a specific question.

# SurveyQuestionResponse

Represents a participant’s answer to a specific question.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_feedback_management_dev_guide)

#### Note

You can’t define custom fields for the SurveyQuestionResponse object using the Object Manager.

## Fields

| Field | Details |
| --- | --- |
| ChoiceValue | TypetextareaPropertiesFilter, Nillable, SortDescriptionResponse provided by a participant for the following question types:Multiple choicePicklistRadioRanking |
| Datatype | TypePropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe data type of the question response. Possible values are:Boolean This value is available in API v49.0 and later.DateDoubleIntNumberString |
| DateTimeValue | TypedateTimePropertiesFilter, Nillable, SortDescriptionResponse provided by a participant for a question of the type date time. |
| DateValue | TypedatePropertiesFilter, Group, Nillable, SortDescriptionResponse provided by a participant for a question of the type date. |
| InvitationId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the SurveyInvitation that was sent to the survey participant. |
| IsTrueOrFalse | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionResponse provided by a participant for a question type which has only two possible values: True and False. |
| NumberValue | TypeintPropertiesFilter, Group, Nillable, SortDescriptionResponse provided by a participant for the following question types:Net Promoter Score (NPS)RatingScoreSlider |
| QuestionChoiceId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of SurveyQuestionChoice that a participant chose in response to a question. |
| QuestionId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the SurveyQuestion that a participant provided an answer for. |
| Rank | TypeintPropertiesFilter, Group, Nillable, SortDescriptionRank provided by a participant for an answer choice for the ranking question type. |
| ResponseId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the SurveyResponse that is the parent of this SurveyQuestionResponse. |
| ResponseShortText | TypestringPropertiesFilter, Group, idLookup, SortDescriptionUp to the first 250 characters of the response provided by a participant for a text type question. |
| ResponseValue | TypetextareaPropertiesNillableDescriptionResponse provided by a participant for a question. |
| SurveyVersionId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the SurveyVersion that the response belongs to. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

SurveyQuestionResponseChangeEvent

Change events are available for the object.
