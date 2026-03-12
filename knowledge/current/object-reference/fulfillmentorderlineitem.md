---
title: "FulfillmentOrderLineItem"
domain: object-reference
topic: fulfillmentorderlineitem
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:10.871Z
estimatedTokens: 2394
keywords: [FulfillmentOrderLineItem, product, delivery, charge, belonging, FulfillmentOrder, Corresponds, OrderItemSummary, API, version, 48.0, later, Calls, Special, Access]
---

# FulfillmentOrderLineItem

> Represents a product or delivery charge belonging to a FulfillmentOrder.
      Corresponds to an OrderItemSummary. This object is available in API version 48.0 and
    later.

# FulfillmentOrderLineItem

Represents a product or delivery charge belonging to a FulfillmentOrder. Corresponds to an OrderItemSummary. This object is available in API version 48.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

This object is only available in Salesforce Order Management orgs.

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionAvailable only for orgs with the multicurrency feature enabled. ISO code for the currency of the FulfillmentOrder associated with the FulfillmentOrderLineItem.Possible values are:DKK—Danish KroneEUR—EuroGBP—British PoundUSD—U.S. DollarThe default value is USD.This field is available in API version 49.0 and later. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription of the FulfillmentOrderLineItem. |
| EndDate | TypedateTimePropertiesCreate, Filter, Nillable, SortDescriptionEnd date of the FulfillmentOrderLineItem. |
| FulfillmentOrderId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the FulfillmentOrder associated with the FulfillmentOrderLineItem.This field is a relationship field.Relationship NameFulfillmentOrderRelationship TypeLookupRefers ToFulfillmentOrder |
| FulfillmentOrder​LineItemNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionID of the FulfillmentOrderLineItem. |
| GrossUnitPrice | TypecurrencyPropertiesCreate, Filter, Nillable, SortDescriptionUnit price, including tax, of the FulfillmentOrderLineItem. This value is equal to TotalPrice + TotalTaxAmount.This field is available in API version 49.0 and later. |
| IsReship | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the FulfillmentOrderLineItem belongs to a reshipment. The default value is false.This field is available in API version 53.0 and later. |
| MainFulfillmentOrderLineItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionID of the original FulfillmentOrderLineItem.This field is a relationship field.This field is available in API version 63.0 and later.Relationship NameFulfillmentOrderLineItemRelationship TypeLookupRefers ToFulfillmentOrderLineItem |
| OrderItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionID of the original OrderItem for the OrderItemSummary associated with the FulfillmentOrderLineItem.This field is a relationship field.Relationship NameOrderItemRelationship TypeLookupRefers ToOrderItem |
| OrderItemSummaryId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionID of the OrderItemSummary associated with the FulfillmentOrderLineItem.This field is a relationship field.Relationship NameOrderItemSummaryRelationship TypeLookupRefers ToOrderItemSummary |
| OriginalQuantity | TypedoublePropertiesCreate, Filter, SortDescriptionOriginal quantity of the FulfillmentOrderLineItem. |
| Product2Id | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionID of the product represented by the FulfillmentOrderLineItem.This field is a relationship field.Relationship NameProduct2Relationship TypeLookupRefers ToProduct2 |
| Quantity | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionCurrent quantity of the FulfillmentOrderLineItem. Equal to the original quantity minus any canceled quantity. |
| QuantityUnitOfMeasure | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionUnit of measure of the quantity, for example: unit, gallon, ton, or case. |
| RejectedQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed by the Distributed Order Management package and Store Fulfillment app to store the quantity that has been rejected by a fulfillment location.This field is available in API version 57.0 and later. |
| RejectReason | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIf the FulfillmentOrderLineItem was rejected by a fulfillment location, the reason for the rejection.Default values are:DamagedJust SoldOtherOut of Packing SuppliesOut of StockThis field is available in API version 56.0 and later. |
| ReshipReason | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIf the FulfillmentOrderLineItem belongs to a reshipment, the reason for the reshipment.Default values are:DamagedLostUnknownWrong ItemThis field is available in API version 53.0 and later. |
| ServiceDate | TypedateTimePropertiesCreate, Filter, Nillable, SortDescriptionService or start date of the FulfillmentOrderLineItem. |
| ScopeIdentifierText | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionUnique identifier used to identify the scope in which this fulfillment order line item record is created. |
| TotalAdjustmentAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal of any price adjustments applied to the FulfillmentOrderLineItem. |
| TotalAdjustment​AmountWithTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal amount of the price adjustments applied to the FulfillmentOrderLineItem, inclusive of tax. This amount is equal to TotalAdjustmentAmount + TotalAdjustmentTaxAmount.This field is available in API version 49.0 and later. |
| TotalAdjustment​TaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTax on the TotalAdjustmentAmount. |
| TotalAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal, including adjustments and tax, of the FulfillmentOrderLineItem. |
| TotalLineAmount | TypecurrencyPropertiesCreate, Defaulted on create, Filter, Nillable, SortDescriptionTotal, not including adjustments or tax, of the FulfillmentOrderLineItem. |
| TotalLineAmount​WithTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal price of the FulfillmentOrderLineItem, inclusive of tax. This amount is equal to TotalLineAmount + TotalLineTaxAmount.This field is available in API version 49.0 and later. |
| TotalLineTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTax on the TotalLineAmount. |
| TotalPrice | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal, including adjustments but not tax, of the FulfillmentOrderLineItem. Equal to UnitPrice times Quantity. |
| TotalTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTax on the TotalPrice. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionType of the FulfillmentOrderLineItem. Matches the type of the associated OrderItemSummary. Delivery Charge indicates that the FulfillmentOrderLineItem represents a delivery charge. Fee indicates that it represents another type of fee, such as a return fee. Order Product indicates that it represents any other type of product, service, or charge. Each type corresponds to one type code, shown here in parentheses.Possible values are:Delivery Charge (Charge)Fee (Charge) This value is available in API v56.0 and later.Order Product (Product) |
| TypeCode | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionType code of the FulfillmentOrderLineItem. Matches the type code of the associated OrderItemSummary. Processing depends on this value. Charge indicates that the FulfillmentOrderLineItem represents a charge or fee. Product indicates that it represents any other type of product, service, or charge. A type code can be associated with one or more types.Possible values are:ChargeProduct |
| UnitPrice | TypecurrencyPropertiesCreate, Defaulted on create, Filter, Nillable, SortDescriptionUnit price of the FulfillmentOrderLineItem. |

[FulFillmentOrderChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

#### See Also

-   [FulfillmentOrder](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_fulfillmentorder.htm "Represents a group of products, fees, and delivery charges on a single order that share the same fulfillment location, delivery method, and recipient. The FulfillmentOrderLineItems belonging to a FulfillmentOrder are associated with OrderItemSummary objects belonging to a single OrderSummary. This object is available in API version 48.0 and later.")

-   [FulfillmentOrderItemAdjustment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_fulfillmentorderitemadjustment.htm "Represents a price adjustment on a FulfillmentOrderLineItem. Corresponds to an OrderItemAdjustmentLineSummary associated with the corresponding OrderItemSummary. This object is available in API version 48.0 and later.")

-   [FulfillmentOrderItemTax](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_fulfillmentorderitemtax.htm "Represents the tax on a FulfillmentOrderLineItem or FulfillmentOrderItemAdjustment. Corresponds to an OrderItemTaxLineItemSummary. This object is available in API version 48.0 and later.")

-   [OrderItemSummary](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderitemsummary.htm "Represents the current properties and state of a product or charge on an OrderSummary. Corresponds to one or more order item objects, consisting of an original object and any change objects applicable to it. This object is available in API version 48.0 and later.")

## Related Topics

- FulfillmentOrder (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_fulfillmentorder.htm)
- FulfillmentOrderItemAdjustment (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_fulfillmentorderitemadjustment.htm)
- FulfillmentOrderItemTax (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_fulfillmentorderitemtax.htm)
- OrderItemSummary (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderitemsummary.htm)
