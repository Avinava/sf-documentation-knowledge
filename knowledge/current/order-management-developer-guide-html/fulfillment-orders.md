---
title: "Fulfillment Orders"
domain: order-management-developer-guide-html
topic: fulfillment-orders
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:20.118Z
estimatedTokens: 1195
keywords: [Fulfillment, Orders, FulfillmentOrder, record, supporting, records, including, FulfillmentOrderLineItems, FulfillmentOrderItemAdjustments, FulfillmentOrderItemTaxes, call, Order, Management, API, flow]
---

# Fulfillment Orders

> A FulfillmentOrder record has a set of supporting records,
      including FulfillmentOrderLineItems, FulfillmentOrderItemAdjustments, and
      FulfillmentOrderItemTaxes. When you call an Order Management API or the flow core action to
      create a fulfillment order, it also creates the supporting records.

# Fulfillment Orders

A FulfillmentOrder record has a set of supporting records, including FulfillmentOrderLineItems, FulfillmentOrderItemAdjustments, and FulfillmentOrderItemTaxes. When you call an Order Management API or the flow core action to create a fulfillment order, it also creates the supporting records.

For managed OrderSummaries, you create a fulfillment order via Apex, Connect API, or flow core action. This method also creates the supporting records, such as fulfillment order line items, and then sets the new fulfillment order’s Status to Allocated.

You can also create a fulfillment order externally using a platform API, such as sObject, Composite, or Bulk API 2.0. When you create a fulfillment order for an unmanaged OrderSummary, you can only use a platform API.

When you create a fulfillment order via a platform API, you also create the supporting records. In that case, when you create the fulfillment order, set its Status to Draft. After creating all the supporting records, change its Status to Allocated (or a custom status associated with the Activated Status Category).

In addition to the normally required fields, Order Management requires values for certain fields for each FulfillmentOrder record and supporting record. When creating a record of an object in this table, define values for all the listed fields.

| Object | Required Fields |
| --- | --- |
| FulfillmentOrder | AccountIdDeliveryMethodIdFulfilledFromLocationIdFulfilledToCityFulfilledToCountryFulfilledToEmailAddressFulfilledToLatitudeFulfilledToLongitudeFulfilledToNameFulfilledToPhoneFulfilledToPostalCodeFulfilledToStateFulfilledToStreetOrderIdOrderSummaryIdStatusType |
| FulfillmentOrderLineItem | DescriptionFulfillmentOrderIdGrossUnitPriceOrderItemIdOrderItemSummaryIdOriginalQuantityProduct2IdQuantityTotalLineAmountTypeTypeCodeUnitPrice |
| FulfillmentOrderItemAdjustment | AmountDescriptionFulfillmentOrderIdFulfillmentOrderLineItemIdOrderItemAdjustLineSummaryId |
| FulfillmentOrderItemTax | AmountDescriptionFulfillmentOrderIdFulfillmentOrderItemAdjustId (if applicable)FulfillmentOrderLineItemIdOrderItemTaxLineItemSummaryIdRateTaxEffectiveDateType |

## Location Capacity

You can limit the number of fulfillment orders assigned to a location by defining its fulfillment order capacity. The Location object has three fields for fulfillment order capacity.

Track Fulfillment Order Capacity

Indicates whether the location’s capacity is tracked. The default is false.

Fulfillment Order Capacity

The maximum number of fulfillment orders that can be assigned to the location per a user-defined time period. If the value is null, the location’s capacity is unlimited.

Assigned Fulfillment Order Count

The number of fulfillment orders currently assigned to the location. To define the time period associated with the maximum capacity, reset this value at a specified interval. For example, to track capacity per day, run an automated job that sets this value to 0 for each location at midnight of the location’s time zone.

You can manage location capacity using these Connect API resources and flow core actions.

Hold Fulfillment Order Capacity

When you want to assign a fulfillment order to a location, hold capacity for it at that location. If the location has no capacity, it returns an error. Free capacity is defined as the location’s fulfillment order capacity minus the sum of its held capacity and assigned fulfillment orders.

Confirm Held Fulfillment Order Capacity

When you assign a fulfillment order to a location, confirm the location’s held capacity. Confirming held capacity increases the location’s assigned fulfillment order count and decreases its held capacity.

Release Fulfillment Order Capacity

If you’re holding capacity for a fulfillment order at a location and decide not to assign that fulfillment order to that location, release the held capacity. Releasing capacity decreases the location’s held capacity without increasing its assigned fulfillment order count.

Get Fulfillment Order Capacity Values

Returns a location’s maximum capacity, assigned fulfillment order count, and capacity being held. This function is the only way to retrieve the held quantity, because it isn’t represented by a field on the Location object.

Changing a location’s Assigned Fulfillment Order Count doesn’t affect its held capacity. For example, resetting the assigned count at midnight doesn’t remove held capacity for unassigned fulfillment orders. To decrease held capacity, you must confirm or release it.

#### See Also

-   [Location Object Reference Topic](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_location.htm "Location Object Reference Topic - HTML (New Window)")
