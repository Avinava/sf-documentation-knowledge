---
title: "ContextDefinition"
domain: omnistudio
topic: contextdefinition
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:12.391Z
keywords: [ContextDefinition, Supported, SOAP, API, Calls, REST, Methods, Fields]
---

# ContextDefinition

# ContextDefinition

Represents information about a context definition. The context definition describes the relationship between the node structures within a context. This object is available in API version 59.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| CanBeReferenceDefinition | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the context definition can be referred by other context definitions (true) or not (false).The default value is false.This field is available in API version 63.0 and later. |
| ClonedFrom | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the context definition that's used to clone the current context definition. |
| ContextTtl | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDisplays how long you’d like the data that’s loaded in the runtime context instances created by this context definition to stay in the cache.The default value is 10 minutes. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the context definition. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the context definition. |
| DisplayName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe display name of the context definition. |
| HasSystemTags | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the context definition has system tags (true) or not (false).The default value is false.This field is available in API version 63.0 and later. |
| InheritedFrom | TypestringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe name of the parent context definition that's used to derive the current context definition.This field is available in API version 60.0 and later. |
| InheritedFromVersion | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe version number of the parent definition that's used to derive the current context definition.This field is available in API version 60.0 and later. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the context definition. |
| ManageableState | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a packagePossible values are:beta—Managed-Betadeleted—Managed-Proposed-Deleteddeprecated—Managed-Proposed-DeprecateddeprecatedEditable—SecondGen-Installed-Deprecatedinstalled—Managed-InstalledinstalledEditable—SecondGen-Installed-Editablereleased—Managed-Releasedunmanaged—Unmanaged |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe UI label of the context definition. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation. |
| Title | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the context definition. |