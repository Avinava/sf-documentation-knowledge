---
title: "OrderItemRelationship"
domain: object-reference
topic: orderitemrelationship
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:13.885Z
estimatedTokens: 1482
keywords: [OrderItemRelationship, relationship, order, products, API, version, 58.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# OrderItemRelationship

> Describes a relationship between order products. This object is
      available in API version 58.0 and later.

# OrderItemRelationship

Describes a relationship between order products. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

This object is available when Subscription Management or Revenue Cloud is enabled.

## Fields

| Field | Details |
| --- | --- |
| AssociatedOrderItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe unique identifier of the associated order product.This field is a relationship field. In a bundle relationship, this order product is the bundle component.Relationship NameAssociatedOrderItemRelationship TypeLookupRefers ToOrderItem |
| AssociatedOrderItemInventory | TypepicklistPropertiesCreate, Filter, Group, Nillable, SortDescriptionA static enum that describes the associated order item inventory in the OrderItemSummaryRelationship.Possible values are:IncludedInMainInventory—The child product’s inventory is included in the main inventory.NotIncludedInMainInventory—The child product’s inventory isn’t included in the main inventory.Relationship NameAssociatedOrderItemInventory |
| AssociatedOrderItemPricing | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates how the associated order product is priced relative to the main order product. The value is informative; the system doesn’t check whether the associated order product is included in the bundle price.Possible values are:IncludedInBundlePrice—The associated order product’s cost is $0 because it’s included in the bundle’s price.NotIncludedInBundlePrice—The associated order product has a cost because it’s not included in the bundle’s price. |
| AssociatedOrderItemRole | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionDescribes the position of the associated order product in the relationship.Possible values are:BundleComponent—The associated order product is part of a bundle.SetComponent—The associated order product is part of a set. |
| AssociatedQuantScaleMethod | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionHow the quantity of the associated order product scales, relative to the main order product. The value is informative; the system doesn’t check whether the scaled quantities are correct.Possible values are:Constant— The associated order’s product quantity remains the same in relation to the main order product’s quantity. For example, the main order product has a quantity of one and the associated order product has a quantity of one.Proportional— The associated order’s product quantity increases or decreases based on the main order product’s quantity. For example, the main order product has a quantity of one and the associated order product has a quantity of two. In other words, there are two associated order products for every one main order product.The default value is Proportional. |
| IsPriceInclusive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether child products are included in the root bundle price. If set to true, the price of each child product is zero.The default value is false. |
| MainOrderItemId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe main order product’s unique identifier.This field is a relationship field. In a bundle relationship, this order product is the bundle parent.Relationship NameMainOrderItemRelationship TypeLookupRefers ToOrderItem |
| MainOrderItemRole | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the role of the main order product in the relationship.Possible values are:Bundle— The main order product is the bundle parent.Set— The main order product is the set parent.Subscription Management doesn’t support the Set value. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the order product relationship. |
| OrderId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe unique identifier of the related order.This field is a relationship field.Relationship NameOrderRelationship TypeLookupRefers ToOrder |
| ProductRelationshipTypeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe unique identifier of the record that describes the relationship between the main and associated order products.This field is a relationship field.Relationship NameProductRelationshipTypeRelationship TypeLookupRefers ToProductRelationshipType |
| RootOrderItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe root order item for the order item relationship. In a bundle relationship, the root order item is the root bundle.This field is a relationship field.Relationship NameRootOrderItemRefers ToOrderItem |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[OrderItemRelationshipFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[OrderItemRelationshipHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- OrderItemRelationshipFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- OrderItemRelationshipHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
