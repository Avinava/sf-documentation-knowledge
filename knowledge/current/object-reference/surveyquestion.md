---
title: "SurveyQuestion"
domain: object-reference
topic: surveyquestion
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.526Z
estimatedTokens: 1021
keywords: [SurveyQuestion, question, survey, Calls, Associated, Objects]
---

# SurveyQuestion

> Represents a question in a survey.

# SurveyQuestion

Represents a question in a survey.

## Supported Calls

describeLayout()describeSObjects()getDeleted(), getUpdated(), query(), retrieve()

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

You can’t define custom fields for the SurveyQuestion object using the Object Manager.

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe API name of the SurveyQuestion. The API name must be unique within a particular version of the survey. |
| IsDeprecated | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the question was deleted from the survey. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionUp to the first 250 characters of the label for the question. |
| PageDisplayOrder | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe order in which the page is displayed. This field is available in API version 54.0 and later. |
| PageName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe label for the page. This field is available in API version 52.0 and later. |
| QuestionChoiceCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of choices for the question. This field is available in API version 62.0 and later. |
| QuestionName | TypetextareaPropertiesNillableDescriptionThe label for the question. |
| QuestionOrder | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe order in which the question is displayed.The label for the page. This field is available in API version 52.0 and later. |
| QuestionType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of question. Possible values include:Boolean—This value is available in API v49.0 and later.CSATCurrencyDateDateTimeFreeTextImageMatrix—This value is available in API v55.0 and later.MultipleChoiceMultiSelectPicklistNPSNumberPicklistRadioButtonStackRankRatingShortText—This value is available in API v49.0 and later.SliderToggle |
| RelatedQuestionId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the parent question. This field is blank when the question itself is the parent question. This field is available in API v55.0 and later, with Feedback Management - Starter and Feedback Management - Growth licenses. |
| SubQuestionDisplayOrder | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe order in which the question is displayed within the parent question. This field is available in API v55.0 and later, with Feedback Management - Starter and Feedback Management - Growth licenses. |
| SurveyPageId | TypereferencePropertiesFilter, Group, SortDescriptionLookup to the SurveyPage that contains the question. |
| SurveyVersionId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the SurveyVersion that the question belongs to. |
| ValidationType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe validations available for the short-text question. Possible values include:Custom - CuNumber - Nu |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[SurveyQuestionChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

## Related Topics

- SurveyQuestionChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
