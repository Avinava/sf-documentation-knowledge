---
title: "ProductRelationshipType"
domain: object-reference
topic: productrelationshiptype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:15.401Z
estimatedTokens: 480
keywords: [ProductRelationshipType, relationship, two, sales, transaction, items, bundle, component, API, version, 57.0, later, Calls, Special, Access]
---

# ProductRelationshipType

> Defines the relationship between two sales transaction items. For
			example, defines a relationship between a bundle and a bundle component. This
		object is available in API version 57.0 and later.

# ProductRelationshipType

Defines the relationship between two sales transaction items. For example, defines a relationship between a bundle and a bundle component. This object is available in API version 57.0 and later.

## Supported Calls

create(), describeLayout(), describeSObjects(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Special Access Rules

In version 58.0 and later, this object is available when B2B Commerce, B2C Commerce, or Subscription Management is enabled.

In version 57.0, this object is available when B2B Commerce or B2C Commerce is enabled.

## Fields

| Field | Details |
| --- | --- |
| AssociatedProductRoleCat | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe position category that the associated product plays in the relationship.Possible values are:AddOnComponent—The associated product is an add-on.BundleComponent — The associated product is part of a bundle.SetComponent — The associated product is part of a set. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate), but not viewed it. |
| MainProductRoleCat | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe position category that the main product plays in the relationship.Possible values are:AddOn—The parent of the add-on.Bundle—The bundle parent.Set—The set parent. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the relationship between two product items. |
