---
title: "AIFeatureExtractor"
domain: omnistudio
topic: aifeatureextractor
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:12.272Z
keywords: [AIFeatureExtractor, Important, Supported, SOAP, API, Calls, REST, Methods, Fields]
---

# AIFeatureExtractor

# AIFeatureExtractor

Represents information about the feature extractor that’s used to extract the data required by the machine learning model for making predictions. This object is available in API version 55.0 and later.

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
| AiUsecaseModelId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe use case model that’s related to the feature extractor.This is a relationship field.Relationship NameAiUsecaseModelRelationship TypeLookupRefers ToAIUsecaseModel |
| BatchInputSourceIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier of the input source containing batch job-computed features that a model can use to generate predictions. Available in API version 57.0 and later. |
| ClassName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Apex class name of the feature extractor. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe developer name of the feature extractor.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| FeatureInputType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of feature input that’s used in generating predictions. Available in API version 57.0 and later.Possible values are:Batch_And_Realtime_InputBatch_InputRealtime_InputSample_InputThe default value is Realtime_Input. |
| InputContext | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe features that serve as the context for the feature extractor in the JSON or CSV file. Available in API version 57.0 and later. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the feature extractor. |
| ManageableState | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package.Possible values are:beta—Managed-Betadeleted—Managed-Proposed-Deleteddeprecated—Managed-Proposed-DeprecateddeprecatedEditable—SecondGen-Installed-Deprecatedinstalled—Managed-InstalledinstalledEditable—SecondGen-Installed-Editablereleased—Managed-Releasedunmanaged—Unmanaged |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe label for the feature extractor. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionNamespace prefix associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. |
| Type | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of the feature extractor.Valid values are:APEXHYBRIDJAVAThe default value is APEX. |