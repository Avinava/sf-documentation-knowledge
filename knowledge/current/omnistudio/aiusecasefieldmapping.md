---
title: "AIUsecaseFieldMapping"
domain: omnistudio
topic: aiusecasefieldmapping
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:12.309Z
keywords: [AIUsecaseFieldMapping, Important, Supported, SOAP, API, Calls, REST, Methods, Fields]
---

# AIUsecaseFieldMapping

# AIUsecaseFieldMapping

Represents information about the field mapping that’s used to save the extracted features, scores, insights, and recommendations for a prediction. This object is available in API version 55.0 and later.

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
| AiUsecaseDefinitionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the use case definition that’s related to the field mapping.This is a relationship field.Relationship NameAiUsecaseDefinitionRelationship TypeLookupRefers ToAIUsecaseDefinition |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe developer name of the use case field mapping.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the use case field mapping. |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanagedAvailable in API version 56.0 and later. |
| MappedFieldName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the field where the prediction scoring response is stored. |
| MappedFieldType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of the response field.Valid values are:FEATUREINSIGHTPREDICTION_SCORESUGGESTIONThe default value is FEATURE. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe label for the use case field mapping. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix associated with this object. Each Developer Edition organization that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values:In Developer Edition organizations, the namespace prefix is set to the namespace prefix of the organization for all objects that support it. There is an exception if an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition organization of the package developer.In organizations that are not Developer Edition organizations, NamespacePrefix is only set for objects that are part of an installed managed package. There is no namespace prefix for all other objects.Available in API version 56.0 and later. |
| ResponseFieldName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the response object’s field that’s mapped to the field storing the scoring response. |
| ResponseObject | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe object whose field is mapped to the field storing the scoring response. |
| SequenceNumber | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe sequence number for the information stored in the field mapping. |