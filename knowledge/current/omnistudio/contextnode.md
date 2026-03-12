---
title: "ContextNode"
domain: omnistudio
topic: contextnode
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:54.696Z
estimatedTokens: 621
keywords: [ContextNode, Represents, information, structure, nodes, within, context., Within, node, related, attributes, describe, object., hierarchy, defined, here., API, version, 59.0, later.]
---

# ContextNode

> Represents information about the structure of the nodes within the context.
         Within a structure, each node can have other nodes related to them and attributes to
         describe the object. A hierarchy for the nodes can also be defined here. This object
      is available in API version 59.0 and later.

# ContextNode

Represents information about the structure of the nodes within the context. Within a structure, each node can have other nodes related to them and attributes to describe the object. A hierarchy for the nodes can also be defined here. This object is available in API version 59.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| CanonicalNodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe canonical node associated with the context node.This field is a relationship field.This field is available in API version 61.0 and later.Relationship NameCanonicalNodeRefers ToContextNode |
| ContextDefinitionVersionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe context definition version record associated with the context node.This field is a relationship field.Relationship NameContextDefinitionVersionRelationship TypeLookupRefers ToContextDefinitionVersion |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe description of the context node. |
| DisplayName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe display name of the context node.This field is available in API version 61.0 and later. |
| InheritedFrom | TypestringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe name of the parent context node that's used to derive the current context node.This field is available in API version 60.0 and later. |
| IsTransposable | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the data in the Context Node record can be converted to field names (true) or not (false).The default value is false. |
| ManageableState | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package.Possible values are:beta—Managed-Betadeleted—Managed-Proposed-Deleteddeprecated—Managed-Proposed-DeprecateddeprecatedEditable—SecondGen-Installed-Deprecatedinstalled—Managed-InstalledinstalledEditable—SecondGen-Installed-Editablereleased—Managed-Releasedunmanaged—Unmanaged |
| Title | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the context node. |
