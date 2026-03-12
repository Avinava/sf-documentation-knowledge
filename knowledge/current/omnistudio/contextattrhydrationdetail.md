---
title: "ContextAttrHydrationDetail"
domain: omnistudio
topic: contextattrhydrationdetail
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:54.633Z
estimatedTokens: 531
keywords: [ContextAttrHydrationDetail, Represents, SOQL, database, queries, fetch, data, chosen, attribute, input, schema., API, version, 59.0, later., Supported, SOAP, Calls, REST, Fields]
---

# ContextAttrHydrationDetail

> Represents the SOQL (database) queries that fetch data for a chosen attribute
         from the input schema. This object is available in API version 59.0 and later.

# ContextAttrHydrationDetail

Represents the SOQL (database) queries that fetch data for a chosen attribute from the input schema. This object is available in API version 59.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| ContextAttributeMappingId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe context attribute mapping record that's associated with the attribute hydration detail.This field is a relationship field.Relationship NameContextAttributeMappingRelationship TypeLookupRefers ToContextAttributeMapping |
| ManageableState | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package.Possible values are:beta—Managed-Betadeleted—Managed-Proposed-Deleteddeprecated—Managed-Proposed-DeprecateddeprecatedEditable—SecondGen-Installed-Deprecatedinstalled—Managed-InstalledinstalledEditable—SecondGen-Installed-Editablereleased—Managed-Releasedunmanaged—Unmanaged |
| ObjectName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the object used for the attribute hydration detail. |
| ParentHydrationDetailId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe parent hydration detail attribute. Based on the attribute mapping, there can be more than one hydration information sources.This field is a relationship field.Relationship NameParentHydrationDetailRelationship TypeLookupRefers ToContextAttrHydrationDetail |
| QueryAttribute | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe SOQL or query that is the source of the hydration. |
| InheritedFrom | TypestringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe name of the parent context attribute hydration detail that's used to derive the current context attribute hydration detail.This field is available in API version 60.0 and later. |
