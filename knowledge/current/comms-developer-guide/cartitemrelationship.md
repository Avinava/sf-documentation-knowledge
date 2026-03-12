---
title: "CartItemRelationship"
domain: comms-developer-guide
topic: cartitemrelationship
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:23.208Z
estimatedTokens: 881
keywords: [CartItemRelationship, row, relationship, cart, items, API, version, 66.0, later, Calls, Special, Access, Rules]
---

# CartItemRelationship

> Each row represents a relationship between cart items. This object is
      available in API version 66.0 and later.

# CartItemRelationship

Each row represents a relationship between cart items. This object is available in API version 66.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

The CartItemRelationship object is available with CMERLMB2CAddOn license.

## Fields

| Field | Details |
| --- | --- |
| AssociatedCartItemId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the associated cart item.This field is a relationship field.Relationship NameAssociatedCartItemRefers ToCartItem |
| AssociatedCartItemPricing | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies how the associated cart item is priced relative to the main cart item.Possible values are:IncludedInBundlePrice—Included in Bundle PriceNotIncludedInBundlePrice—Not Included in Bundle Price |
| AssociatedCartItemRole | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the role of the associated cart item in the relationship.Possible values are:AddOnComponent—Addon ComponentBundleComponent—Bundle ComponentClassificationComponent—Product Classification ComponentProductRequestComponent—Product Request ComponentSetComponent—Set Component |
| AssociatedQuantScaleMethod | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies how the quantity of the associated cart item scales, relative to the main cart item.Possible values are:ConstantProportionalThe default value is Proportional. |
| CartId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the related cart.This field is a relationship field.Relationship NameCartRefers ToWebCart |
| IsPriceIncluded | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the price of bundle is included in the root bundle (true) or not (false).The default value is false. |
| MainCartItemId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the main cart item.This field is a relationship field.Relationship NameMainCartItemRelationship TypeMaster-detailRefers ToCartItem (the master object) |
| MainCartItemRole | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the role of the main cart item in the relationship.Possible values are:AddOn—Addon ParentBundle—Bundle ParentProductRequest—Product RequestSet—Set Parent |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the CartItemRelationship. |
| ProductRelatedComponentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the product related component.This field is a relationship field.Relationship NameProductRelatedComponentRefers ToProductRelatedComponent |
| ProductRelationshipTypeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the record that describes the relationship between the main and associated cart items.This field is a relationship field.Relationship NameProductRelationshipTypeRefers ToProductRelationshipType |
| RootCartItemId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the root cart item.This field is a relationship field.Relationship NameRootCartItemRefers ToCartItem |
