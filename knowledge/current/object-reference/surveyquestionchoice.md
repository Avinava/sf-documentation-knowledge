---
title: "SurveyQuestionChoice"
domain: object-reference
topic: surveyquestionchoice
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.530Z
estimatedTokens: 588
keywords: [SurveyQuestionChoice, answer, choice, participant, select, survey, question, Calls, Associated, Objects]
---

# SurveyQuestionChoice

> Represents an answer choice that a participant can select for a
         survey question.

# SurveyQuestionChoice

Represents an answer choice that a participant can select for a survey question.

## Supported Calls

describeLayout(), getDeleted(), getUpdated(), query(), retrieve()

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

You can’t define custom fields for the SurveyQuestionChoice object using the Object Manager.

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique API name of the SurveyQuestionChoice object. |
| DisplayOrder | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe order in which the question choice is displayed within the parent question. This field is available in API v55.0 and later, with Feedback Management - Starter and Feedback Management - Growth licenses. |
| IsDeprecated | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether a question choice was deleted from the survey. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionA label for the question choice that appears in the UI. |
| QuestionId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the SurveyQuestion object that this choice belongs to. |
| SurveyVersionId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe version of the survey that this question choice belongs to. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[SurveyQuestionChoiceChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

## Related Topics

- SurveyQuestionChoiceChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
