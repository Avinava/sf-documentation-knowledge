---
title: "ProductBatchItem"
domain: life-sciences-dev-guide
topic: productbatchitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:46.751Z
estimatedTokens: 854
keywords: [ProductBatchItem, product, items, batch, API, version, 65.0, later, Calls]
---

# ProductBatchItem

> Represents the details about the product items in each batch. This
      object is available in API version 65.0 and later.

# ProductBatchItem

Represents the details about the product items in each batch. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssigneeId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the user or group assigned to the product batch item.This field is a polymorphic relationship field.Relationship NameAssigneeRefers ToGroup, User |
| ExpirationDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the product batch item expires and is no longer usable. |
| InitialAllocatedQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe initial allocated quantity of product items in the product batch item. |
| IsProductionBatchActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the production batch associated with the product batch item is active (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. |
| LocationId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe location associated with the product batch item.This field is a relationship field.Relationship NameLocationRefers ToLocation |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the product batch item. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of the product batch item record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ProductId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe product associated with the product batch item.This field is a relationship field.Relationship NameProductRefers ToProduct2 |
| ProductItemId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe product item associated with the product batch item.This field is a relationship field.Relationship NameProductItemRefers ToProductItem |
| ProductionBatchId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe production batch associated with the product batch item.This field is a relationship field.Relationship NameProductionBatchRefers ToProductionBatch |
| QuantityDeductedFromWeb | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe quantity of the product batch item deducted through the web interface. |
| QuantityUnitOfMeasure | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionSpecifies the unit of measure for the quantity of the product batch item. |
| RemainingQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe remaining quantity of product items in the product batch item. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the product batch item. |
