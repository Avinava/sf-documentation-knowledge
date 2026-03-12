---
title: "MLDataDefinition"
domain: tooling-api
topic: mldatadefinition
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:45.234Z
estimatedTokens: 1411
keywords: [MLDataDefinition, modeling, data, definition, model, machine, learning, application, Examples, include, filters, exclude, API, version, 50.0]
---

# MLDataDefinition

> Represents a modeling data definition, which specifies the data used
            to create a model for a machine learning (ML) application. Examples of such data can
            include filters, fields to include, and fields to exclude. Available from API
        version 50.0 or later.

# MLDataDefinition

Represents a modeling data definition, which specifies the data used to create a model for a machine learning (ML) application. Examples of such data can include filters, fields to include, and fields to exclude. Available from API version 50.0 or later.

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
| DeveloperName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Label is Record Type Name. This field is automatically generated, but you can supply your own value if you create the record using the API.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance may slow as a DeveloperName is generated for each record. |
| EntityDeveloperName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe developer name of the object from which the model data is retrieved.NoteAfter the MLDataDefinition entity is created, EntityDeveloperName can’t be updated. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the associated MLDataDefinition type in Metadata API. The full name can include a namespace prefix.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe language of the MLDataDefinition. |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| MasterLabel | TypestringPropertiesFilter, Group, Nillable, SortDescriptionLabel that identifies the MLDataDefinition throughout the Salesforce user interface. |
| Metadata | TypeMLDataDefinitionPropertiesCreate, Nillable, UpdateDescriptionThe metadata of MLDataDefinition.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix associated with this object. Each Developer Edition organization that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values:In Developer Edition organizations, the namespace prefix is set to the namespace prefix of the organization for all objects that support it. There is an exception if an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition organization of the package developer.In organizations that are not Developer Edition organizations, NamespacePrefix is only set for objects that are part of an installed managed package. There is no namespace prefix for all other objects. |
| ParentDefinitionId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the MLrecommendationDefinition or MLPredictionDefinition that this MLDatadefinition belongs to.This is a polymorphic relationship field.Relationship NameParentDefinitionRelationship TypeLookupRefers ToMLPredictionDefinition, MLRecommendationDefinition |
| ScoringFilterId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionSpecifies the record ID to which the prediction scores are written.This is a relationship field.Relationship NameScoringFilterRelationship TypeLookupRefers ToMLFilter |
| SegmentFilterId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionSpecifies the record IDs of the data used for training and scoring.This is a relationship field.Relationship NameSegmentFilterRelationship TypeLookupRefers ToMLFilter |
| TrainingFilterId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionSpecifies the record IDs that make up the training set.This is a relationship field.Relationship NameTrainingFilterRelationship TypeLookupRefers ToMLFilter |
| Type | TypepicklistPropertiesFilter, Group, Restricted picklist, Nillable, SortDescriptionSpecifies the data type. Valid values are:CandidateInteractionPredictionRecipientNoteAfter the model is created, type can’t be updated.. |
