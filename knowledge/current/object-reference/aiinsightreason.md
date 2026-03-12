---
title: "AIInsightReason"
domain: object-reference
topic: aiinsightreason
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:04.158Z
estimatedTokens: 1144
keywords: [AIInsightReason, Einstein, prediction, insight, reason, API, version, 47.0, later, Calls, Special, Access, Rules, Usage]
---

# AIInsightReason

> Represents an Einstein prediction insight reason. This object is available
    in API version 47.0 and later.

# AIInsightReason

Represents an Einstein prediction insight reason. This object is available in API version 47.0 and later.

An Einstein insight is created every time an Einstein feature, such as Prediction Builder, makes a prediction. An insight is represented by a root AIRecordInsight and the following child objects: AIInsightAction, AIInsightFeedback, AIInsightReason, and AIInsightValue.

AIInsightReason is a one-to-many child of AIInsightValue. AIInsightReason contains details about how Einstein predicted an insight value.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

Prediction insight objects are only available in orgs that have Einstein features, such as Prediction Builder or Case Classification, enabled.

## Fields

| Field | Details |
| --- | --- |
| AiInsightValueId | TypereferencePropertiesFilter, Group, SortDescriptionThe unique ID of the associated AIInsightValue.This is a relationship field.Relationship NameAiInsightValueRelationship TypeLookupRefers ToAIInsightValue |
| Contribution | TypedoublePropertiesFilter, Nillable, SortDescriptionThe contribution weight for this insight reason. |
| FeatureType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe type of the feature, such as BOOL. |
| FeatureValue | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe value of the feature, such as TRUE or FALSE. |
| FieldName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the field the insight uses for its evaluation. |
| FieldValue | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe value for the field the insight uses for its evaluation. |
| Intensity | TypedoublePropertiesFilter, Nillable, SortDescriptionThe intensity weight for this insight reason. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the AIInsightReason. |
| Operator | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe logical operator the insight uses to compare the field value with the expression value. For example, if the prediction evaluates whether the fieldValue for the field bonus__c is greater than $5,000, the logical operator is greater than. |
| ReasonLabelKey (Beta) | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe key used to map an Einstein Key Accounts Identification (Beta) insight phrase or phrases to the correct messaging template. |
| RelatedInsightReasonId (Beta) | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID used to relate multiple insights to a single model reason in the Einstein Key Accounts Identification (Beta) feature.This is a relationship field.Relationship NameRelatedInsightReasonRelationship TypeLookupRefers ToAIInsightReason |
| SortOrder (Beta) | TypeintPropertiesFilter, Group, Nillable, SortDescriptionA number value used to organize the phrases in the model’s insights message in the Einstein Key Accounts Identification (Beta) feature. |
| Variance | TypedoublePropertiesFilter, Nillable, SortDescriptionThe variance weight for this insight reason. |

## Usage

When an Einstein feature makes a prediction and saves the results, the following events happen in a single atomic operation:

-   An AIRecordInsight record is created and populated with information about the prediction insight. AIInsightAction, AIInsightReason, and AIInsightValue records are also created and made children of the AIRecordInsight record.
-   If the Einstein feature uses AI prediction fields, prediction result values are written to the target AI prediction field.
-   An AIPredictionEvent platform event is created, and any subscriber to AIPredictionEvent is notified.

When Einstein writes prediction results back to AI prediction fields, record save custom logic, such as Apex triggers, workflow rules, and assignment rules, aren’t run. To add custom logic based on Einstein prediction results, use a platform event subscriber, such as Process Builder, to get notifications for AIPredictionEvents that contain references to Einstein insight objects.

Custom fields can’t be added to Einstein insight objects.

Einstein insights contain information about target fields and predicted value. Your org may have created Einstein predictions that are associated with target fields with field-level security restrictions. To control how users access Einstein insights records, use Salesforce data access features such as user profiles and permission sets.
