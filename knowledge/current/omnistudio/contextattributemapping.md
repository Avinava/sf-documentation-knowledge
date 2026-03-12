---
title: "ContextAttributeMapping"
domain: omnistudio
topic: contextattributemapping
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:53.006Z
estimatedTokens: 467
keywords: [ContextAttributeMapping, relationship, attribute, defined, context, objects, API, version, 59.0, later, SOAP, Calls, REST]
---

# ContextAttributeMapping

> Represents the relationship between the attribute defined in the context and
         the values in the related objects. This object is available in API version 59.0 and
      later.

# ContextAttributeMapping

Represents the relationship between the attribute defined in the context and the values in the related objects. This object is available in API version 59.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| ContextAttributeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe context attribute record associated with this context attribute mapping.This field is a relationship field.Relationship NameContextAttributeRelationship TypeLookupRefers ToContextAttribute |
| ContextInputAttributeName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionStores the name of input attribute. |
| ContextNodeMappingId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe context node mapping record that's associated with the context attribute mapping.This field is a relationship field.Relationship NameContextNodeMappingRelationship TypeLookupRefers ToContextNodeMapping |
| ManageableState | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package.Possible values are:beta—Managed-Betadeleted—Managed-Proposed-Deleteddeprecated—Managed-Proposed-DeprecateddeprecatedEditable—SecondGen-Installed-Deprecatedinstalled—Managed-InstalledinstalledEditable—SecondGen-Installed-Editablereleased—Managed-Releasedunmanaged—Unmanaged |
| InheritedFrom | TypestringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe name of the parent context attribute mapping that's used to derive the current context attribute mapping.This field is available in API version 60.0 and later. |
