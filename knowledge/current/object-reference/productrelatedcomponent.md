---
title: "ProductRelatedComponent"
domain: object-reference
topic: productrelatedcomponent
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:15.394Z
estimatedTokens: 1617
keywords: [ProductRelatedComponent, product, included, bundle, add-on, API, version, 57.0, later, Calls, Special, Access, Rules]
---

# ProductRelatedComponent

> Represents a product that is included in a product bundle, a set, or
			a product and an add-on. This object is available in API version 57.0 and
		later.

# ProductRelatedComponent

Represents a product that is included in a product bundle, a set, or a product and an add-on. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

In version 58.0 and later, this object is available when B2B Commerce, B2C Commerce, Industries Automotive, Industries EPC, or Subscription Management is enabled.

In version 57.0, this object is available when B2B Commerce, B2C Commerce, or Industries Automotive is enabled.

## Fields

|  | Details |
| --- | --- |
| ChildProductId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe unique identifier of the associated product.This field is a relationship field. In a bundle relationship, this item is the child product.Relationship NameChildProductRelationship TypeLookupRefers ToProduct2 |
| ChildProductRole | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe position of the associated product in the relationship.Possible values are:AddOnComponent—The child product is an add-on to another product. Available in API version 58.0 and later.BundleComponent—The child product is a component in a bundle.SetComponent—The child product is a component in a set. |
| ChildSellingModelId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique identifier of the associated product’s sales model.This field is a relationship field.Relationship NameChildSellingModelRelationship TypeLookupRefers ToProductSellingModel |
| DoesBundlePriceIncludeChild | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the bundle price includes the associated product’s price. |
| IsComponentRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the associated product is required for configuring a bundle or set.The default value is false. |
| IsDefaultComponent | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the associated product is part of the product bundle or set automatically, or can be added after the bundle’s or set’s creation.The default value is false. |
| IsQuantityEditable | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether you can edit the component’s quantity in the bundle or set after the bundle’s or set’s creation.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, it’s possible that the user accessed this record or list view (LastReferencedDate) without viewing it. |
| MaxQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe associated product’s allowed maximum quantity. |
| MinQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe associated product’s allowed minimum quantity. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the associated product. |
| ParentProductId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe unique identifier of the main product around which the bundle or set is built.This field is a relationship field.Relationship NameParentProductRelationship TypeLookupRefers ToProduct2 |
| ParentProductRole | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionIndicates the position of the main product in the relationship.Possible values are:AddOn—The main product is the add-on parent. Available in API version 58.0 and later.Bundle—The main product is the bundle parent.Set— The main product is the set parent. |
| ParentSellingModelId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe unique identifier of the main product’s sales model.This field is a relationship field.Relationship NameParentSellingModelRelationship TypeLookupRefers ToProductSellingModel |
| ProductComponentGroupId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique identifier of the group of a product bundle or set. This group contains the associated products that can be included in the main product’s bundle or set.This field is a relationship field.Relationship NameProductComponentGroupRelationship TypeLookupRefers ToProductComponentGroup |
| ProductRelationshipTypeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique identifier of the record that describes the relationship between the main and associated products.This field is a relationship field.Relationship NameProductRelationshipTypeRelationship TypeLookupRefers ToProductRelationshipType |
| Quantity | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionThe unit count of the associated product. |
| QuantityScaleMethod | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe scaling method is used to calculate the associated product’s quantity based on changes made to the main product’s quantity in a transaction.Possible values are:Constant — The associated product’s quantity remains the same in relation to the main product’s quantity. For example, the main product has a quantity of one and the associated component has a quantity of one. If you increase the quantity of the main product to two, the associated component’s quantity remains at one.Proportional — The associated product’s quantity increases or decreases based on the main product’s quantity. For example, the main component has a quantity of one and the associated product has a quantity of two. If you increase the quantity of the main product to two, the associated product’s quantity increases to four.The default value is Proportional. |
| Sequence | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDetermines the arrangement of the order products when configuring a bundle or set. |
