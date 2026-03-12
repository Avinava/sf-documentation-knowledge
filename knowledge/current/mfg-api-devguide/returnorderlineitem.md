---
title: "ReturnOrderLineItem"
domain: mfg-api-devguide
topic: returnorderlineitem
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:56.155Z
estimatedTokens: 1511
keywords: [ReturnOrderLineItem, product, recalled, repaired, part, order, API, version, 60.0, later, Calls]
---

# ReturnOrderLineItem

> Represents a product that is returned, recalled, or repaired as part of a
         return order. This object is available in API version 60.0 and later.

# ReturnOrderLineItem

Represents a product that is returned, recalled, or repaired as part of a return order. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| AssetId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe asset associated with the return order line item.This is a relationship field.Relationship NameAssetRelationship TypeLookupRefers ToAsset |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the return order line item. |
| DestinationLocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe location where the items are being returned to. For example, if the return order tracks the return of products from a technician center to a warehouse, the warehouse is the destination location.This is a relationship field.Relationship NameDestinationLocationRelationship TypeLookupRefers ToLocation |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate isn’t null, the user accessed this record or list view indirectly. |
| OrderItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe order product associated with the return order line item.This is a relationship field.Relationship NameOrderItemRelationship TypeLookupRefers ToOrderItem |
| ProcessingPlan | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the preferred fate of the items after their return. Available values are:Repair—Repair the items and return them to the ownerDiscard—Discard the itemsSalvage—Salvage the items’ working partsRestock—Return the items to your inventory |
| Product2Id | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product associated with the return order line item.This is a relationship field.Relationship NameProduct2Relationship TypeLookupRefers ToProduct2 |
| ProductItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product item representing the location of the product at the start of the return.This is a relationship field.Relationship NameProductItemRelationship TypeLookupRefers ToProductItem |
| ProductRequestLineItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product request line item associated with the return order line item.This is a relationship field.Relationship NameProductRequestLineItemRelationship TypeLookupRefers ToProductRequestLineItem |
| QuantityExpected | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe quantity of items expected to be returned. |
| QuantityReceived | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe actual quantity of items received for return. |
| QuantityRejected | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe quantity of items rejected for return. |
| QuantityReturned | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe quantity of items being returned. If multiple types of products are being returned, track each product in a different return order line item. |
| QuantityUnitOfMeasure | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUnits of the returned items. For example, kilograms or liters. Quantity Unit of Measure picklist values are inherited from the Quantity Unit of Measure field on products. |
| ReasonForRejection | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionReason for rejecting returned items on this return order line item.Possible values are:Damaged ItemExpired WarrantyMissing Item or PartWrong ItemThe default value is Missing Item or Part. |
| ReasonForReturn | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe reason the items are being returned. Available values are:DamagedDefectiveDuplicate OrderWrong ItemWrong QuantityNot SatisfiedOutdatedOther |
| ReasonForChangeText | TypestringPropertiesFilter, Group, SortDescriptionThe details about the reason for the return change |
| RepaymentMethod | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe method by which the customer or owner will be reimbursed for the items being returned. Available values are:Replace—The items will be replacedRefund—The items will be returned and the owner will be refundedCredit—The items will be returned and the owner will receive credit for themReturn—The items will be returned to the owner (for example, following their repair) |
| ReturnOrderId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe return order that the return order line item belongs to.This is a relationship field.Relationship NameReturnOrderRelationship TypeLookupRefers ToReturnOrder |
| ReturnOrderLineItemNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe auto-generated number that identifies the return order line item. |
| SourceLocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe items’ location at the start of the return or repair. For example, if the return order tracks the return of products from a technician’s service center to a warehouse, the service vehicle is the source location.This is a relationship field.Relationship NameSourceLocationRelationship TypeLookupRefers ToLocation |
