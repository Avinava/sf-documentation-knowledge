---
title: "ProductComponentGrpOverride"
domain: revenue-cloud
topic: productcomponentgrpoverride
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T14:37:50.693Z
keywords: [ProductComponentGrpOverride, Supported, Calls, Special, Access, Rules, Fields]
---

# ProductComponentGrpOverride

# ProductComponentGrpOverride

Represents override information for a Product Component Group. The cardinality of the product component group can be overridden in the context of a product bundle. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

Product Catalog Management must be enabled to access this object.

## Fields

| Field | Details |
| --- | --- |
| IsExcluded | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the product component group is excluded from the product bundle in the runtime. Excluding a group automatically excludes all child components of the group.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the product component override record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the product component override record was last viewed. |
| MaxBundleComponents | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe maximum number of components that can be added to a group. |
| MinBundleComponents | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe minimum number of components that must be added to a group. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the overridden product component group. |
| OverrideContextId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe root bundle product in whose context the group cardinality is overridden.This field is a polymorphic relationship field.Relationship NameOverrideContextRelationship TypeLookupRefers ToProduct2 |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the product component group override record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ProductComponentGroupId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the product component group record.This field is a relationship field.Relationship NameProductComponentGroupRelationship TypeLookupRefers ToProductComponentGroup |