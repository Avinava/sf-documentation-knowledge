---
title: "SurveyQuestionScore"
domain: object-reference
topic: surveyquestionscore
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.549Z
estimatedTokens: 1176
keywords: [SurveyQuestionScore, aggregate, responses, question, date, multiple, choice, picklist, radio, ranking, rating, scoring, slider, Net, Promoter]
---

# SurveyQuestionScore

> Represents the aggregate of responses for the following question types: date,
      multiple choice, picklist, radio, ranking, rating, scoring, slider, and Net Promoter Score® (NPS®).

# SurveyQuestionScore

Represents the aggregate of responses for the following question types: date, multiple choice, picklist, radio, ranking, rating, scoring, slider, and [Net Promoter Score® (NPS®)](https://www.salesforce.com/content/dam/web/en_us/www/documents/legal/Agreements/product-specific-terms/net-promoter-and-nps.pdf).

## Supported Calls

delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete()

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

You can’t define custom fields for the SurveyQuestionScore object using the Object Manager.

## Fields

| Field | Details |
| --- | --- |
| CumulativeScore | TypedoublePropertiesFilter, Nillable, SortDescriptionSum of the responses provided by all the participants for a question of the following types: rating, scoring, and slider. For a question of the type ranking, sum of the weights provided by all the participants for each item.NoteThis field is only applicable for the overall score type. |
| DateResponse | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe date selected by one or more participants for a question of the type date.NoteThis field is only applicable for the individual score type. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionFor an overall score type record:Name of a question.Name of an item in a question of the type ranking.For an individual score type record:Name of an item in a question of the type ranking.Name of a question of the type date.Response provided by one or more participants for questions of the following types: picklist, multiple choice, rating, ranking, score, slider, NPS. |
| QuestionChoiceId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionUnique identifier of the answer choice selected by one or more participants. For an individual score type record, this field is applicable for questions of the following types: picklist, radio, multi choice, ranking and rating. For an overall score type record, this field is applicable for questions of the type ranking. |
| QuestionDeveloperName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe API name of the question for which response is recorded. The API name must be unique within a particular version of the survey. |
| QuestionId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionUnique identifier of the question for which response is recorded. |
| QuestionName | TypetextareaPropertiesNillableDescriptionName of the question for which response is recorded. |
| QuestionSkippedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionNumber of participants who didn’t respond to the question.NoteThis field is only applicable for the overall score type. |
| ResponseCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionFor an overall score type record, number of participants who responded to the question. For an individual score type record, number of participants who selected a particular answer choice. |
| ResponseValue | TypedoublePropertiesFilter, Nillable, SortDescriptionAnswer choice selected by one or more participants for a question of the following types: rating, slider, score, NPS. Rank provided by the participant for an item in a question of the type ranking.NoteThis field is only applicable for the individual score type. |
| Score | TypedoublePropertiesFilter, Nillable, SortDescriptionFor an individual score type record, percentage of participants who selected a particular answer choice.NoteFor questions of the type ranking, the percentage of participants who have provided the same rank to an item.For overall score type record:Average score of questions of the following question types: rating, scoring, and slider.Score of an NPS type question.Average weight provided by all participants for each item in question of the type ranking.Number of participants who responded to the question for the following question types: date, radio, multi choice, and picklist. |
| ScoreType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionType of the score calculated for a record. Possible values are:IndividualOverall |
| SurveyId | TypereferencePropertiesFilter, Group, SortDescriptionUnique identifier of the survey that contains the question for which scores are calculated. |
| SurveyInvitationId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionUnique identifier of the survey invitation for which scores are calculated. |
| SurveyVersionId | TypereferencePropertiesFilter, Group, SortDescriptionUnique identifier of the survey version for which scores are calculated. |
