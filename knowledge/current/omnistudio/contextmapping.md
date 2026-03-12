---
title: "ContextMapping"
domain: omnistudio
topic: contextmapping
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:54.683Z
estimatedTokens: 460
keywords: [ContextMapping, Represents, mapping, both, attributes, nodes, related, objects., API, version, 59.0, later., Supported, SOAP, Calls, REST, Fields]
---

# ContextMapping

> Represents the mapping of both attributes and nodes to related objects.
      This object is available in API version 59.0 and later.

# ContextMapping

Represents the mapping of both attributes and nodes to related objects. This object is available in API version 59.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| ContextDefinitionVersionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe context definition version record that's associated with the context mapping.This field is a relationship field.Relationship NameContextDefinitionVersionRelationship TypeLookupRefers ToContextDefinitionVersion |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the context mapping. |
| IsDefault | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the mapping for a context definition version is default (true) or not (false).The default value is false. |
| ManageableState | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package.Possible values are:beta—Managed-Betadeleted—Managed-Proposed-Deleteddeprecated—Managed-Proposed-DeprecateddeprecatedEditable—SecondGen-Installed-Deprecatedinstalled—Managed-InstalledinstalledEditable—SecondGen-Installed-Editablereleased—Managed-Releasedunmanaged—Unmanaged |
| Title | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the context mapping. |
| InheritedFrom | TypestringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe name of the parent mapping that's used to derive the current mapping.This field is available in API version 60.0 and later. |
