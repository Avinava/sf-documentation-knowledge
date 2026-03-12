---
title: "FulfillmentOrderItemAdjustment"
domain: object-reference
topic: fulfillmentorderitemadjustment
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:10.845Z
estimatedTokens: 1045
keywords: [FulfillmentOrderItemAdjustment, price, adjustment, FulfillmentOrderLineItem, Corresponds, OrderItemAdjustmentLineSummary, associated, corresponding, OrderItemSummary, API, version, 48.0, later, Calls, Special]
---

# FulfillmentOrderItemAdjustment

> Represents a price adjustment on a FulfillmentOrderLineItem. Corresponds to an
      OrderItemAdjustmentLineSummary associated with the corresponding OrderItemSummary. This
    object is available in API version 48.0 and later.

# FulfillmentOrderItemAdjustment

Represents a price adjustment on a FulfillmentOrderLineItem. Corresponds to an OrderItemAdjustmentLineSummary associated with the corresponding OrderItemSummary. This object is available in API version 48.0 and later.

This object is used for calculations and doesn’t have a default record page.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

This object is only available in Salesforce Order Management orgs.

## Fields

| Field | Details |
| --- | --- |
| Amount | TypecurrencyPropertiesCreate, Filter, SortDescriptionAmount, not including tax, of the adjustment. |
| CampaignName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCampaign associated with the adjustment. |
| CouponName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCoupon associated with the adjustment. |
| CurrencyIsoCode | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionISO code for the currency of the FulfillmentOrderLineItem to which the adjustment applies. The default value is USD.Possible values are:DKK—Danish KroneEUR—EuroGBP—British PoundUSD—U.S. DollarThis field is available in API version 49.0 and later. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionText description of the adjustment. |
| FulfillmentOrderId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the FulfillmentOrder associated with the FulfillmentOrderLineItem to which the adjustment applies. |
| FulfillmentOrderItem​AdjustmentNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionID of the FulfillmentOrderLineItemAdjustment. |
| FulfillmentOrder​LineItemId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the FulfillmentOrderLineItem to which this adjustment applies. |
| OrderItemAdjust​LineSummaryId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionID of the OrderItemAdjustmentLineSummary associated with the adjustment. |
| PromotionName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPromotion associated with the adjustment. |
| TotalAmtWithTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal amount of the adjustment, inclusive of tax. This amount is equal to Amount + TotalTaxAmount.This field is available in API version 49.0 and later. |
| TotalTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTax on the Amount. |

#### See Also

-   [FulfillmentOrder](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_fulfillmentorder.htm "Represents a group of products, fees, and delivery charges on a single order that share the same fulfillment location, delivery method, and recipient. The FulfillmentOrderLineItems belonging to a FulfillmentOrder are associated with OrderItemSummary objects belonging to a single OrderSummary. This object is available in API version 48.0 and later.")

-   [FulfillmentOrderItemTax](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_fulfillmentorderitemtax.htm "Represents the tax on a FulfillmentOrderLineItem or FulfillmentOrderItemAdjustment. Corresponds to an OrderItemTaxLineItemSummary. This object is available in API version 48.0 and later.")

-   [FulfillmentOrderLineItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_fulfillmentorderlineitem.htm "Represents a product or delivery charge belonging to a FulfillmentOrder. Corresponds to an OrderItemSummary. This object is available in API version 48.0 and later.")

-   [OrderItemAdjustmentLineSummary](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderitemadjustmentlinesummary.htm "Represents the current properties and state of price adjustments on an OrderItemSummary. Corresponds to one or more order item adjustment line item objects, consisting of an original object and any change objects applicable to it. This object is available in API version 48.0 and later.")

## Related Topics

- FulfillmentOrder (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_fulfillmentorder.htm)
- FulfillmentOrderItemTax (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_fulfillmentorderitemtax.htm)
- FulfillmentOrderLineItem (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_fulfillmentorderlineitem.htm)
- OrderItemAdjustmentLineSummary (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderitemadjustmentlinesummary.htm)
