---
title: "ReturnOrderLineItem"
domain: field-service
topic: returnorderlineitem
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:56.492Z
estimatedTokens: 3215
keywords: [ReturnOrderLineItem, Represents, specific, product, returned, repaired, part, order, Field, service, item, Order, Management., API, version, 42.0, later., Supported, Calls, Special]
---

# ReturnOrderLineItem

> Represents a specific product that is returned or repaired as part of
			a return order in Field service, or a specific order item that is returned as part of a
			return order in Order Management. This object is available in API version 42.0 and
		later.

# ReturnOrderLineItem

Represents a specific product that is returned or repaired as part of a return order in Field service, or a specific order item that is returned as part of a return order in Order Management. This object is available in API version 42.0 and later.

Return orders are available in Lightning Experience, Salesforce Classic, the Salesforce mobile app, the Field Service mobile app for Android and iOS, and communities built using Salesforce Tabs + Visualforce.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Field Service or Order Management must be enabled.

## Fields

| Field Name | Details |
| --- | --- |
| AssetId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe asset associated with the return order line item. One or more of the following fields must be filled out: AssetId, OrderItemId, Product2Id, ProductItemId, and ProductRequestLineItemId.This is a relationship field.Relationship NameAssetRelationship TypeLookupRefers ToAsset |
| ChangeOrderItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionID of the change order item associated with the return order line item.This field is available in API version 50.0 and later.This is a relationship field.Relationship NameChangeOrderItemRelationship TypeLookupRefers ToOrderItem |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, SortDescriptionAvailable only for orgs with the multicurrency feature enabled. Contains the ISO code for the currency of the original Order associated with the ReturnOrderLineItem.Possible values are:DKK—Danish KroneEUR—EuroGBP—British PoundUSD—U.S. DollarThe default value is USD.This field is available in API version 49.0 and later. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionNotes or context about the return order line item. |
| DestinationLocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe location where the items are being returned to. For example, if the return order tracks the return of products from a technician’s van to a warehouse, the warehouse is the destination location.This is a relationship field.Relationship NameDestinationLocationRelationship TypeLookupRefers ToLocation |
| GrossUnitPrice | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUnit price, including tax, of the product represented by the associated order item summary.This field is available in API version 50.0 and later. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the return order line item was last modified. Its label in the user interface is Last Modified Date. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the return order line item was last viewed. |
| OrderItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe order product associated with the return order line item. One or more of the following fields must be filled out: AssetId, OrderItemId, Product2Id, ProductItemId, and ProductRequestLineItemId.This is a relationship field.Relationship NameOrderItemRelationship TypeLookupRefers ToOrderItem |
| OrderItemSummaryId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionID of the order item summary associated with the return order line item.This field is available in API version 50.0 and later. |
| ProcessingPlan | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates the preferred fate of the items following their return. Available values are:Repair—Repair the items and return them to the ownerDiscard—Discard the itemsSalvage—Salvage the items’ working partsRestock—Return the items to your inventory |
| Product2Id | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product associated with the return order line item. One or more of the following fields must be filled out: AssetId, OrderItemId, Product2Id, ProductItemId, and ProductRequestLineItemId.This is a relationship field.Relationship NameProduct2Relationship TypeLookupRefers ToProduct2 |
| ProductItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product item representing the location of the product at the start of the return. One or more of the following fields must be filled out: AssetId, OrderItemId, Product2Id, ProductItemId, and ProductRequestLineItemId.This is a relationship field.Relationship NameProductItemRelationship TypeLookupRefers ToProductItem |
| ProductRequestLineItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product request line item associated with the return order line item. One or more of the following fields must be filled out: AssetId, OrderItemId, Product2Id, ProductItemId, and ProductRequestLineItemId.This is a relationship field.Relationship NameProductRequestLineItemRelationship TypeLookupRefers ToProductRequestLineItem |
| ProductServiceCampaignId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe product service campaign associated with the return order line item. |
| ProductServiceCampaignItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product service campaign item associated with the return order line item. |
| QuantityExpected | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe quantity of items expected to be returned.This field is available in API version 50.0 and later. |
| QuantityReceived | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe actual quantity of items received for return.This field is available in API version 50.0 and later. |
| QuantityRejected | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe quantity of items rejected for return.This field is available in API version 50.0 and later. |
| QuantityReturned | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe quantity of items being returned. If multiple types of products are being returned, track each product in a different return order line item. |
| QuantityUnitOfMeasure | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUnits of the returned items; for example, kilograms or liters. Quantity Unit of Measure picklist values are inherited from the Quantity Unit of Measure field on products. |
| ReasonForRejection | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionReason for rejecting returned items on this return order line item.Possible values are:Damaged ItemExpired WarrantyMissing Item or PartWrong ItemThe default value is Missing Item or Part.This field is available in API version 50.0 and later. |
| ReasonForReturn | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe reason the items are being returned. Available values are:DamagedDefectiveDuplicate OrderWrong ItemWrong QuantityNot SatisfiedOutdatedOtherThe default value is Damaged. |
| ReasonForChangeText | TypestringPropertiesFilter, Group, SortDescriptionDetails about the reason for return change |
| RepaymentMethod | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe method by which the customer or owner will be reimbursed for the items being returned. Available values are:Replace—The items will be replacedRefund—The items will be returned and the owner will be refundedCredit—The items will be returned and the owner will receive credit for themReturn—The items will be returned to the owner (for example, following their repair) |
| ReturnOrderId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe return order that the return order line item belongs to.This is a relationship field.Relationship NameReturnOrderRelationship TypeLookupRefers ToReturnOrder |
| ReturnOrderLineItemNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescription(Read only) Auto-generated number that identifies the return order line item. |
| SourceLocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe items’ location at the start of the return or repair. For example, if the return order tracks the return of products from a technician’s service vehicle to a warehouse, the service vehicle is the source location.This is a relationship field.Relationship NameSourceLocationRelationship TypeLookupRefers ToLocation |
| TotalAdjustmentAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal of all price adjustments applied to the return order line item.This is a calculated field.This field is available in API version 50.0 and later. |
| TotalAdjustmentAmountWithTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal amount of the price adjustments applied to the return order line item, inclusive of tax. This amount is equal to TotalAdjustmentAmount + TotalAdjustmentTaxAmount.This is a calculated field.This field is available in API version 50.0 and later. |
| TotalAdjustmentTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTax on the TotalAdjustmentAmount.This is a calculated field.This field is available in API version 50.0 and later. |
| TotalAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal, including adjustments and tax, of the return order line item.This is a calculated field.This field is available in API version 50.0 and later. |
| TotalLineAmount | TypecurrencyPropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionTotal, not including adjustments or tax, of the return order line item.This field is available in API version 50.0 and later. |
| TotalLineAmountWithTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal price of the return order line item, inclusive of tax. This amount is equal to TotalLineAmount + TotalLineTaxAmount.This is a calculated field.This field is available in API version 50.0 and later. |
| TotalLineTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTax on the TotalLineAmount.This is a calculated field.This field is available in API version 50.0 and later. |
| TotalPrice | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal, including adjustments but not tax, of the return order line item. Equal to UnitPrice times Quantity.This is a calculated field. |
| TotalTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTax on the TotalAmount.This is a calculated field.This field is available in API version 50.0 and later. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionType of the return order line item. Matches the type of the associated order item summary. Delivery Charge indicates that the return order line item represents a delivery charge. Fee indicates that it represents another type of fee, such as a return fee. Order Product indicates that it represents any other type of product, service, or charge. Each type corresponds to one type code, shown here in parentheses.Possible values are:Delivery Charge (Charge)Fee (Charge) This value is available in API v56.0 and later.Order Product (Product)This field is available in API version 50.0 and later. |
| TypeCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionType code of the return order line item. Matches the type code of the associated order item summary. Processing depends on this value. Charge indicates that the return order line item represents a delivery charge. Product indicates that it represents an other type of product, service, or charge. Each type category corresponds to one or more types.Possible values are:ChargeProductThis field is available in API version 50.0 and later. |
| UnitPrice | TypecurrencyPropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionUnit price of the return order line item.This field is available in API version 50.0 and later. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

ReturnOrderLineItemChangeEvent (API version 48.0)

Change events are available for the object.

ReturnOrderLineItemFeed

Feed tracking is available for the object.

ReturnOrderLineItemHistory

History is available for tracked fields of the object.
