---
title: "ContextNodeMapping"
domain: omnistudio
topic: contextnodemapping
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:53.059Z
estimatedTokens: 506
keywords: [ContextNodeMapping, relationship, node, context, input, schema, API, version, 59.0, later, SOAP, Calls, REST]
---

# ContextNodeMapping

> Represents the relationship between the node in the context and values in the
         input schema. This object is available in API version 59.0 and later.

# ContextNodeMapping

Represents the relationship between the node in the context and values in the input schema. This object is available in API version 59.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| ContextMappingId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe context mapping record that's associated with the context node mapping.This field is a relationship field.Relationship NameContextMappingRelationship TypeLookupRefers ToContextMapping |
| ContextNodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe context node record associated with this context node mapping.This field is a relationship field.Relationship NameContextNodeRelationship TypeLookupRefers ToContextNode |
| ManageableState | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package.Possible values are:beta—Managed-Betadeleted—Managed-Proposed-Deleteddeprecated—Managed-Proposed-DeprecateddeprecatedEditable—SecondGen-Installed-Deprecatedinstalled—Managed-InstalledinstalledEditable—SecondGen-Installed-Editablereleased—Managed-Releasedunmanaged—Unmanaged |
| Object | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the object used for the mapping. |
| InheritedFrom | TypestringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe name of the parent context node mapping that's used to derive the current context node mapping.This field is available in API version 60.0 and later. |
| MappedContextDefinition | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe API name of the context definition when context-to-context mappings exist.This field is available in API version 61.0 and later. |
