---
title: "MLModel"
domain: object-reference
topic: mlmodel
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:12.930Z
estimatedTokens: 650
keywords: [MLModel, model, Einstein, Prediction, Builder, Recommendation, features, API, version, 53.0, later, Calls, Special, Access, Rules]
---

# MLModel

> Represents an AI model that can be used in Einstein Prediction Builder,
         Einstein Recommendation Builder, and other Einstein features. This object is available
      in API version 53.0 and later.

# MLModel

Represents an AI model that can be used in Einstein Prediction Builder, Einstein Recommendation Builder, and other Einstein features. This object is available in API version 53.0 and later.

This object contains information that represents many types of AI models. Some fields contain information for only a specific type of model.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

Available with Einstein Prediction Builder and Einstein Recommendation Builder.

## Fields

| Field | Details |
| --- | --- |
| ApprovalStatus | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionIndicates whether the model is approved, pending approval, or rejected.Possible values are:ApprovedPendingRejectedThe default value is Pending. |
| Dataset | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the dataset used to create the model. |
| ModelType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the type of model.Possible values are:BinaryClassificationDecisionTreeDeepLearningIntentDeepLearningNERGeneralizedLinearModelsGlobalDeepLearningIntentGlobalDeepLearningNERGlobalLanguageDetectionGradientBoostedTreesLinearRegressionLinearSupportVectorClassifiersLogisticRegressionMulticlassClassificationNaiveBayesNeuralNetPopularityCountRandomForestRegressionXGBoost |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe automatically generated ID that uniquely identifies the model. |
| PredictionDefinitionId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the related prediction definition.This field is a relationship field.Relationship NamePredictionDefinitionRelationship TypeLookupRefers ToMLPredictionDefinition |
| RecommendationDefinitionId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the related recommendation definition.This field is a relationship field.Relationship NameRecommendationDefinitionRelationship TypeLookupRefers ToMLRecommendationDefinition |
| ScoringStatus | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionIndicates whether scoring is enabled or disabled.Possible values are:DisabledEnabled |
| TrainingEndTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionIndicates the date and time when the training ended. |
| TrainingStartTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionIndicates the date and time when the training started. |
