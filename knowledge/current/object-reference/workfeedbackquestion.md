---
title: "WorkFeedbackQuestion"
domain: object-reference
topic: workfeedbackquestion
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:19.589Z
estimatedTokens: 865
keywords: [WorkFeedbackQuestion, free-form, text, multiple, choice, question, questions, Calls, Associated, Objects]
---

# WorkFeedbackQuestion

> Represents a free-form text type or multiple choice question within
			a set of questions.

# WorkFeedbackQuestion

Represents a free-form text type or multiple choice question within a set of questions.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

The original WDC feature is unavailable as of Spring ’22. This object isn’t available as of API version 54.0. For more information, see [Phased WDC (legacy Work.com) Feature Retirement](https://help.salesforce.com/s/articleView?id=000356306&type=1&language=en_US).

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| Choices | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionNew-line separated list of valid choices for multiple choice questions. Maximum length is 1000 characters. |
| Detail | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDetailed instructions on how to answer the question. |
| IsConfidentialAnswer | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionAnswers to questions marked confidential will not be shared with the subject of the review. This field applies only to performance summaries. |
| IsOptional | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIf this option is selected, the question is optional and isn’t required to be answered. This field applies only to performance summaries. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionA short description of the question, which can be used as a header for reports and Calibration. |
| Number | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe order of the question that is displayed within the question set, such as question number three in a question set that has five questions. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of the WorkFeedbackQuestion. |
| QuestionSetId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe question set this question is a part of. |
| Text | TypetextareaPropertiesCreate, UpdateDescriptionThe body of the question. Max length is 16384 characters. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionAllows for either a free-form text answer or a multiple choice question defined by new-line separate choices in the ‘Choices’ field. Valid picklist values are:MultipleChoiceFreeTextRating |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[WorkFeedbackQuestionOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[WorkFeedbackQuestionShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- WorkFeedbackQuestionOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- WorkFeedbackQuestionShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
