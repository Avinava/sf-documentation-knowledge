---
title: "MLPredictionDefinition"
domain: tooling-api
topic: mlpredictiondefinition
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:38.301Z
keywords: [MLPredictionDefinition, Important, Supported, SOAP, API, Calls, REST, Methods, Fields]
---

# MLPredictionDefinition

# MLPredictionDefinition

Represents the details about a prediction within a prediction definition used in a machine learning (ML) application. Available in API version 50.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_tooling)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| ApplicationId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the application associated with the prediction definition.This is a relationship field.Relationship NameApplicationRelationship TypeLookupRefers ToAIApplication |
| Description | TypestringPropertiesFilter, Group, Nillable, SortDescriptionDescription of the prediction. |
| DeveloperName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Label is Record Type Name. This field is automatically generated, but you can supply your own value if you create the record using the API.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance may slow as a DeveloperName is generated for each record. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the associated MLPredictionDefinition type in Metadata API. The full name can include a namespace prefix.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe language of the MLPredictionDefinition. |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| MasterLabel | TypestringPropertiesFilter, Group, Nillable, SortDescriptionLabel that identifies the MLPredictionDefinition definition throughout the Salesforce user interface. |
| Metadata | TypeAIApplicationPropertiesCreate, Nillable, UpdateDescriptionThe MLPredictionDefinition’s metadata.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| MLDataDefinitions | TypeQueryResultPropertiesNillableDescriptionA list of prediction definition records associated with an ML application record. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix associated with this object. Each Developer Edition organization that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values:In Developer Edition organizations, the namespace prefix is set to the namespace prefix of the organization for all objects that support it. There is an exception if an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition organization of the package developer.In organizations that are not Developer Edition organizations, NamespacePrefix is only set for objects that are part of an installed managed package. There is no namespace prefix for all other objects. |
| NegativeExpressionId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionReserved for future use.This is a relationship field.Relationship NameNegativeExpressionRelationship TypeLookupRefers ToMLFilter |
| PositiveExpressionId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionReserved for future use.This is a relationship field.Relationship NamePositiveExpressionRelationship TypeLookupRefers ToMLFilter |
| PredictionField | TypestringPropertiesFilter, Group, Nillable, SortDescriptionField that the prediction is based on. |
| PredictionStrategy | TypestringPropertiesFilter, Group, Nillable, SortDescriptionStrategy that the prediction is based on. |
| Priority | TypeintPropertiesFilter, Group, Nillable, SortDescriptionReflects the priority of the MLPredictionDefinition (MLPD) object when an AIApplication has multiple child MLPDs. |
| PushbackField | TypestringPropertiesFilter, Group, Nillable, SortDescriptionField that the prediction writes scores to. |
| Status | TypepicklistPropertiesFilter, Group, Restricted picklist, Nillable, SortDescriptionThe status of the prediction. Valid values are:DisabledDraftEnabled |
| Type | TypepicklistPropertiesFilter, Group, Restricted picklist, Nillable, SortDescriptionThe type of model that returns the prediction values. Valid values are:BinaryClassification—1DeepLearningIntentClassification—5DeepLearningNameEntityRecognition—6GlobalDeepLearningIntentClassification—7GlobalDeepLearningNameEntityRecognition—8LanguageDetection—4MulticlassClassification—2Regression—3ScoringSpecificOutcome—0 |