---
title: "FulfillmentLineRel"
domain: revenue-cloud
topic: fulfillmentlinerel
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:10.262Z
estimatedTokens: 742
keywords: [FulfillmentLineRel, Represents, relationship, between, two, fulfillment, order, lines., API, version, 61.0, later., Important, Supported, Calls, Fields]
---

# FulfillmentLineRel

> Represents a relationship between two fulfillment order lines.
      This object is available in API version 61.0 and later.

# FulfillmentLineRel

Represents a relationship between two fulfillment order lines. This object is available in API version 61.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=revenue_lifecycle_management_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssociatedFoItemInventory | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionInventory level for the associated fulfillment order item.Valid values are:Included in Main InventoryNot Included in Main InventoryThis field is available in API version 63.0 and later. |
| AssociatedFulfillOrderItemId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe identifier of the associated fulfillment order line item.This field is a relationship field.Relationship NameAssociatedFulfillOrderItemRefers ToFulfillmentOrderLineItem |
| AssociatedLineRole | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe role of the associated fulfillment order line item.Valid values are:BundleComponentClassificationComponent—Product Classification Component |
| AssociatedQuanScaleMethod | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionMethod used to scale the quantity of the associated order item summary relative to the main fulfillment order item.Valid values are:ConstantProportionalThe default value is Proportional.This field is available in API version 63.0 and later. |
| FulfillmentOrderId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the parent fulfillment order.This field is a relationship field.Relationship NameFulfillmentOrderRefers ToFulfillmentOrder |
| MainFulfillOrderItemRole | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe role of the primary fulfillment order line item.Valid value is Bundle. |
| MainFulfillmentOrderItemId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the associated fulfillment order line item.This field is a relationship field.Relationship NameMainFulfillmentOrderItemRelationship TypeMaster-detailRefers ToFulfillmentOrderLineItem (the master object) |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the fulfillment order line relationship. |
| ProductRelationshipTypeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe type of relationship between two assets.This field is a relationship field.Relationship NameProductRelationshipTypeRefers ToProductRelationshipType |
