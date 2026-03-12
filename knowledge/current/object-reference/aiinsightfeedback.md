---
title: "AIInsightFeedback"
domain: object-reference
topic: aiinsightfeedback
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:04.150Z
estimatedTokens: 734
keywords: [AIInsightFeedback, Einstein, prediction, insight, feedback, API, version, 47.0, later, Calls, Special, Access, Rules, Usage]
---

# AIInsightFeedback

> Represents an Einstein prediction insight feedback. This object is
    available in API version 47.0 and later.

# AIInsightFeedback

Represents an Einstein prediction insight feedback. This object is available in API version 47.0 and later.

An Einstein insight is created every time an Einstein feature, such as Prediction Builder, makes a prediction. An insight is represented by a root AIRecordInsight and the following child objects: AIInsightAction, AIInsightFeedback, AIInsightReason, and AIInsightValue.

AIInsightFeedback is a one-to-many child of AIRecordInsight. AIInsightFeedback contains information about explicit and implicit feedback collected from users for a particular insight.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

Prediction insight objects are only available in orgs that have Einstein features, such as Prediction Builder or Case Classification, enabled.

## Fields

| Field | Details |
| --- | --- |
| ActualValue | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe raw feedback value. This field is null when no recommendation is selected. |
| AiFeedback | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe feedback user sentiment. Possible values are:Negative—Negative feedbackNeutral—Neutral feedbackPositive—Positive feedback |
| AiInsightFeedbackType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe nature of the feedback. Possible values are:Explicit—Explicit feedback. For example, a user applies and saves an Einstein recommendation on a case.Implicit—Implicit feedback. For example, a user edits or updates a case field without viewing or applying field recommendations from Einstein. |
| AiRecordInsightId | TypereferencePropertiesFilter, Group, SortDescriptionThe unique ID of the associated AIRecordInsight.This is a relationship field.Relationship NameAiRecordInsightRelationship TypeLookupRefers ToAIRecordInsight |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the AIInsightFeedback. |
| Rank | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe feedback score. |
| ValueId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe unique ID of the associated AIInsightValue.This is a polymorphic relationship field.Relationship NameValueRelationship TypeLookupRefers ToAIInsightAction, AIInsightValue |

## Usage

Salesforce creates AIInsightFeedback records based on user responses to predictions after the prediction has been created. User feedback, such as a thumbs up/down response or accepting a recommended value, results in the creation of a feedback record in which the feedback type is explicit. An implicit feedback record is created when Einstein makes a recommendation but the field is updated in another way, for example, by a process. Once the AIInsightFeedback record has been created, it’s immutable.

Custom fields can’t be added to Einstein insight objects.
