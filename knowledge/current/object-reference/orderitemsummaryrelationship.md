---
title: "OrderItemSummaryRelationship"
domain: object-reference
topic: orderitemsummaryrelationship
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:13.958Z
estimatedTokens: 1128
keywords: [OrderItemSummaryRelationship, Junction, track, how, original, order, summary, created, any, exchanges, occurred, relates, objects, chain, exchange]
---

# OrderItemSummaryRelationship

> Junction object used to track how an original order summary (created before any
      exchanges have occurred) relates to other order summary objects in a chain of exchange orders.
      This object is available in API version 60.0 and later. An exchange order is an OrderSummary
      object whose SourceProcess property is set to Exchange. An original order summary can have an
      exchange order, which in turn can have yet another exchange order, and so on. The
      OrderSummaryRelationship object maintains this relationship between OrderSummary
      objects.

# OrderItemSummaryRelationship

Junction object used to track how an original order summary (created before any exchanges have occurred) relates to other order summary objects in a chain of exchange orders. This object is available in API version 60.0 and later. An exchange order is an OrderSummary object whose SourceProcess property is set to Exchange. An original order summary can have an exchange order, which in turn can have yet another exchange order, and so on. The OrderSummaryRelationship object maintains this relationship between OrderSummary objects.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssociatedOrderItemInventory | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionControls whether the inventory of the associated order item is included in the inventory of the main order item.Possible values are:IncludedInMainInventory—Included in Main InventoryNotIncludedInMainInventory—Not Included in Main Inventory |
| AssociatedOrderItemSumPricing | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAn enum that describes how the related order item summary is priced relative to the primary order item summary.Possible values are:IncludedInBundlePrice—Included in Bundle PriceNotIncludedInBundlePrice—Not Included in Bundle Price |
| AssociatedOrderItemSummaryId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe related order item summary of this order item summary relationship. For bundle relationships, this denotes the ID of the child order item summary.This field is a relationship field.Relationship NameAssociatedOrderItemSummaryRefers ToOrderItemSummary |
| AssociatedOrderItemSummaryRole | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe role of the associated order item summary of this relationship.Possible values are:AddOnComponent—Addon ComponentBundleComponent—Bundle ComponentClassificationComponent—Product Classification ComponentSetComponent—Set Component |
| AssociatedQuanScaleMethod | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAn enum that describes how to scale the quantity of the associated order item summary relative to the main order item summary.Possible values are:ConstantProportionalThe default value is Proportional. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe ISO code for the currency of the OrderSummary.Possible values are:USD—U.S. DollarThe default value is USD. |
| MainOrderItemSummaryId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe primary order item summary ID of this order item summary relationship.This field is a relationship field.Relationship NameMainOrderItemSummaryRelationship TypeMaster-detailRefers ToOrderItemSummary (the master object) |
| MainOrderItemSummaryRole | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe role of the primary order item summary of this relationship.Possible values are:AddOn—Addon ParentBundle—Bundle ParentSet—Set Parent |
| MainOrderSummaryId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the main order item summary.This field is a relationship field.Relationship NameMainOrderSummaryRefers ToOrderSummary |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the relationship. |
| OrderItemRelationshipId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe order summary ID of the order item summary.This field is a relationship field.Relationship NameOrderItemRelationshipRefers ToOrderItemRelationship |
| ProductRelatedComponentId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe lookup ID from the product related component.This field is a relationship field.Relationship NameProductRelatedComponentRefers ToProductRelatedComponent |
| ProductRelationshipTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe lookup from the product relationship type.This field is a relationship field.Relationship NameProductRelationshipTypeRefers ToProductRelationshipType |
