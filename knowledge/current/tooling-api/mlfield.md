---
title: "MLField"
domain: tooling-api
topic: mlfield
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:38.282Z
keywords: [MLField, Supported, SOAP, API, Calls, REST, Methods, Fields]
---

# MLField

# MLField

Represents a field in a modeling data definition. A modeling data definition specifies the data used to create a model for a machine learning (ML) application. Available from API version 50.0 or later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| Entity | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Nillable, Sort, UpdateDescriptionThe object that contains the MLField. Valid values include all Salesforce objects except the Internal, Interface, Virtual, and InDevelopment custom objects. |
| Field | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Nillable, Sort, UpdateDescriptionThe name of the MLField. Valid values include all Salesforce objects except the Internal, Interface, Virtual, and InDevelopment custom objects. |
| ParentDefinitionId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the MLrecommendationDefinition or MLPredictionDefinition that this MLField belongs to.This is a polymorphic relationship field.Relationship NameParentDefinitionRelationship TypeLookupRefers ToMLDataDefinition, MLRecommendationDefinition |
| RelatedFieldId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReserved for future use.This is a relationship field.Relationship NameRelatedFieldRelationship TypeLookupRefers ToMLField |
| RelationType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionReserved for future use. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Nillable, Sort, UpdateDescriptionIndicates how the field is used in a prediction. Valid values are:ExcludedExpressionIncludedJoinNegativeExpressionPositiveExpressionPredictionPushbackRelatedScoringExpressionSegmentExpressionSourceDateTrainingExpression |