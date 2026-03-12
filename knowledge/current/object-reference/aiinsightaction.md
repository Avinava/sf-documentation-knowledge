---
title: "AIInsightAction"
domain: object-reference
topic: aiinsightaction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:04.143Z
estimatedTokens: 949
keywords: [AIInsightAction, Einstein, prediction, insight, action, API, version, 47.0, later, Calls, Special, Access, Rules, Usage]
---

# AIInsightAction

> Represents an Einstein prediction insight action. This object is available
    in API version 47.0 and later.

# AIInsightAction

Represents an Einstein prediction insight action. This object is available in API version 47.0 and later.

An Einstein insight is created every time an Einstein feature, such as Prediction Builder, makes a prediction. An insight is represented by a root AIRecordInsight and the following child objects: AIInsightAction, AIInsightFeedback, AIInsightReason, and AIInsightValue.

AIInsightAction is a one-to-many child of AIRecordInsight. AIInsightAction contains information about predicted actions for this particular insight. AIInsightAction has one or more AIInsightValue children which contain predicted values for the action. For example, an AIInsightAction could represent a quick action, and have a child AIInsightValue with the recommended value used by the quick action.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

Prediction insight objects are only available in orgs that have Einstein features, such as Prediction Builder or Case Classification, enabled.

## Fields

| Field | Details |
| --- | --- |
| ActionId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe unique ID of the associated action, such as the ID of a Macro.This is a polymorphic relationship field.Relationship NameActionRelationship TypeLookupRefers ToApexClass, AuraDefinitionBundle |
| ActionName | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe ID of the action. For example, a value of “Case.SendEmail” indicates a send email quick action on Case. |
| AiRecordInsightId | TypereferencePropertiesFilter, Group, SortDescriptionThe unique ID of the associated AIRecordInsight.This is a relationship field.Relationship NameAiRecordInsightRelationship TypeLookupRefers ToAIRecordInsight |
| Confidence | TypedoublePropertiesFilter, Nillable, SortDescriptionRelative confidence strength of the generated prediction insight. Higher values (near 1.0) indicate stronger confidence. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the AIInsightAction. |
| Type | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of action. Possible values are:InvocableAction—Invocable ActionMacro—MacroQuickAction—Quick action.StandardAction—Standard Action. An example standard action would be to update a record. |

## Usage

When an Einstein feature makes a prediction and saves the results, the following events happen in a single atomic operation:

-   An AIRecordInsight record is created and populated with information about the prediction insight. AIInsightAction, AIInsightReason, and AIInsightValue records are also created and made children of the AIRecordInsight record.
-   If the Einstein feature uses AI prediction fields, prediction result values are written to the target AI prediction field.
-   An AIPredictionEvent platform event is created, and any subscriber to AIPredictionEvent is notified.

When Einstein writes prediction results back to AI prediction fields, record save custom logic, such as Apex triggers, workflow rules, and assignment rules, aren’t run. To add custom logic based on Einstein prediction results, use a platform event subscriber, such as Process Builder, to get notifications for AIPredictionEvents that contain references to Einstein insight objects.

Custom fields can’t be added to Einstein insight objects.

Einstein insights contain information about target fields and predicted value. Your org may have created Einstein predictions that are associated with target fields with field-level security restrictions. To control how users access Einstein insights records, use Salesforce data access features such as user profiles and permission sets.
