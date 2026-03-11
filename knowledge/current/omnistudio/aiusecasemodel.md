---
title: "AIUsecaseModel"
domain: omnistudio
topic: aiusecasemodel
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:12.316Z
keywords: [AIUsecaseModel, Important, Supported, SOAP, API, Calls, REST, Methods, Fields]
---

# AIUsecaseModel

# AIUsecaseModel

Represents information about the object that stores the machine learning models that generate predictions for use cases. This object is available in API version 55.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=industries_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| AiFeatureExtractorId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the feature extractor that’s related to the use case model.This is a relationship field.Relationship NameAiFeatureExtractorRelationship TypeLookupRefers ToAIFeatureExtractor |
| AiUsecaseDefinitionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the use case definition that’s associated with the use case model.This is a relationship field.Relationship NameAiUsecaseDefinitionRelationship TypeLookupRefers ToAIUsecaseDefinition |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe developer name of the use case model.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the use case model. |
| ManageableState | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package.Possible values are:beta—Managed-Betadeleted—Managed-Proposed-Deleteddeprecated—Managed-Proposed-DeprecateddeprecatedEditable—SecondGen-Installed-Deprecatedinstalled—Managed-InstalledinstalledEditable—SecondGen-Installed-Editablereleased—Managed-Releasedunmanaged—Unmanaged |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe label for the use case model. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionNamespace prefix associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. |
| PredictionDefinition | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe unique identifier of the prediction definition that’s related to the use case model. This identifier can be an external ID. |
| PredictionPlatform | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe platform on which the machine learning model is created and deployed. Available in API version 57.0 and later.Possible values are:Data_CloudDefault—For internal use only.Einstein_DiscoveryEinstein_on_Data_Cloud—Available in API version 62.0 and later.The default value is Einstein_Discovery. |