---
title: "AsmtQstnRespRecommendation"
domain: health-cloud-object-reference
topic: asmtqstnresprecommendation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:37.352Z
estimatedTokens: 806
keywords: [AsmtQstnRespRecommendation, Maps, assessment, question’s, recommendation, provide, care, plan, Recommendations, problems, goals, interventions, assessments, API, version]
---

# AsmtQstnRespRecommendation

> Maps an assessment question’s response to the recommendation it has to
         provide for a care plan. Recommendations can be problems, goals, interventions, or other
         assessments. This object is available in API version 57.0 and later.

# AsmtQstnRespRecommendation

Maps an assessment question’s response to the recommendation it has to provide for a care plan. Recommendations can be problems, goals, interventions, or other assessments. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssessmentQuestionVersionId | TypeMaster-detailPropertiesCreate, Filter, Group, SortDescriptionThe assessment question whose response is mapped to a recommendation.The combination of values selected in the AssessmentQuestionVersionId and OmniProcessId fields must have a matching combination in at least one OmniProcessAsmtQuestionVer record.Relationship NameAssessmentQuestionVersionRefers ToAssessmentQuestionVersion |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record |
| OmniProcessId | TypeLookupPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe assessment that this question-response-recommendation mapping is valid for. If a response to a question is mapped to the same recommendation, regardless of what assessment it’s a part of, then leave this field blank.This field is a relationship field.Relationship NameOmniProcessRefers ToOmniProcess |
| RecommendationReferenceId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe problem, goal, interventions, or assessment that a response to a question is mapped to.Relationship NameRecommendationReferenceRelationship TypeLookupRefers ToActionPlanTemplateVersionGoalDefinitionOmniProcessProblemDefinition |
| TextResponse | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe response to a question that a recommendation is mapped to.This value must be under 255 characters. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AsmtQstnRespRecommendationFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[AsmtQstnRespRecommendationHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- AsmtQstnRespRecommendationFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- AsmtQstnRespRecommendationHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
