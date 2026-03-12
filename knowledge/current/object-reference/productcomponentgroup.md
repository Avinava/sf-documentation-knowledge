---
title: "ProductComponentGroup"
domain: object-reference
topic: productcomponentgroup
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:15.327Z
estimatedTokens: 608
keywords: [ProductComponentGroup, logical, grouping, associated, products, bundle, products’, arrangement, policy, group, cardinality, API, version, 58.0, later]
---

# ProductComponentGroup

> Represents the logical grouping of associated products in a bundle
			and the products’ arrangement policy (group cardinality). This object is available
		in API version 58.0 and later.

# ProductComponentGroup

Represents the logical grouping of associated products in a bundle and the products’ arrangement policy (group cardinality). This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available when Industries EPC or Subscription Management is enabled.

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDescribes the group items of a product bundle feature. For example, a group’s contents can be the associated products that accompany a main product in a bundle. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a related record or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, it’s possible that the user indirectly accessed this record (LastReferencedDate), but not viewed it. |
| MaxBundleComponents | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe maximum number of associated products allowed in a group. |
| MinBundleComponents | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe minimum number of associated products allowed in a group. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the product component group. Maximum length is 255 characters (of any type). |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe unique identifier of the owner of this object.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ParentProductId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe unique identifier associated with the main product record.This field is a relationship field.Relationship NameParentProductRelationship TypeLookupRefers ToProduct2 |
| Sequence | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDetermines the arrangement of the order products when configuring a bundle or set. |
