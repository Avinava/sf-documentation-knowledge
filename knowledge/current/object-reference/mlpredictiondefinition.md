---
title: "MLPredictionDefinition"
domain: object-reference
topic: mlpredictiondefinition
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:12.965Z
estimatedTokens: 645
keywords: [MLPredictionDefinition, prediction, definition, API, version, 50.0, later, Calls]
---

# MLPredictionDefinition

> Represents a prediction definition that specifies details about the
      prediction. This object is available in API version 50.0 and later.

# MLPredictionDefinition

Represents a prediction definition that specifies details about the prediction. This object is available in API version 50.0 and later.

## Supported Calls

delete(), describeSObjects(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| ApplicationId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe unique ID of the parent AI Application. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| Language | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe language of the prediction. Possible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionLabel that identifies the prediction throughout the Salesforce user interface. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionSpecifies the namespace of the prediction, if installed with a managed package. |
| PredictionField | TypestringPropertiesFilter, Group, Nillable, SortDescriptionField that the prediction is based on. |
| PushbackField | TypestringPropertiesFilter, Group, Nillable, SortDescriptionField that the prediction writes scores to. |
| Status | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe status of the prediction. Possible values are:DisabledDraftEnabled |
| Type | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of model that returns the prediction values. Possible values are:BinaryClassificationDeepLearningIntentClassificationDeepLearningNameEntityRecognitionGlobalDeepLearningIntentClassificationGlobalDeepLearningNameEntityRecognitionLanguageDetectionMulticlassClassificationRegressionScoringSpecificOutcome |
