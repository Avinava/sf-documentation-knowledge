---
title: "FulfillmentOrder Class"
domain: apex-reference
topic: fulfillmentorder-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:18.861Z
estimatedTokens: 2091
namespace: ConnectApi
keywords: [FulfillmentOrder, Cancel, FulfillmentOrderLineItems, action, doesn’t, associated, OrderItemSummaries, reallocate, canceled, quantities, new, cancelFulfillmentOrderLineItems, fulfillmentOrderId, cancelFulfillmentOrderLineItemsInput, API]
---

# FulfillmentOrder Class

> Cancel FulfillmentOrderLineItems from a FulfillmentOrder. This
      action doesn’t cancel the associated OrderItemSummaries, so reallocate the canceled quantities
      to a new FulfillmentOrder.

**Namespace:** `ConnectApi`

# FulfillmentOrder Class

Fulfill orders in Order Management.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## FulfillmentOrder Methods

These methods are for FulfillmentOrder. All methods are static.

-   **[cancelFulfillmentOrderLineItems(fulfillmentOrderId, cancelFulfillmentOrderLineItemsInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_FulfillmentOrder_static_methods.htm#apex_ConnectAPI_FulfillmentOrder_cancelFulfillmentOrderLineItems_1)**
    Cancel FulfillmentOrderLineItems from a FulfillmentOrder. This action doesn’t cancel the associated OrderItemSummaries, so reallocate the canceled quantities to a new FulfillmentOrder.
-   **[createFulfillmentOrders(fulfillmentOrderInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_FulfillmentOrder_static_methods.htm#apex_ConnectAPI_FulfillmentOrder_createFulfillmentOrders_1)**
    Create one or more FulfillmentOrders and FulfillmentOrderLineItems for an OrderDeliveryGroupSummary, which defines a delivery method and recipient for an OrderSummary. You specify the OrderItemSummaries to allocate, which can be fulfilled from different locations. Specifying multiple fulfillment groups creates one FulfillmentOrder for each location. For each OrderItemSummary, a FulfillmentOrderLineItem is created and assigned to the corresponding FulfillmentOrder.
-   **[createInvoice(fulfillmentOrderId, invoiceInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_FulfillmentOrder_static_methods.htm#apex_ConnectAPI_FulfillmentOrder_createInvoice_1)**
    Create an invoice for a FulfillmentOrder that doesn’t have one.
-   **[createMultipleFulfillmentOrder(multipleFulfillmentOrderInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_FulfillmentOrder_static_methods.htm#apex_ConnectAPI_FulfillmentOrder_createMultipleFulfillmentOrder_1)**
    Create FulfillmentOrders for multiple OrderDeliveryGroups in a single request.
-   **[createMultipleInvoices(invoicesInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_FulfillmentOrder_static_methods.htm#apex_ConnectAPI_FulfillmentOrder_createMultipleInvoices_1)**
    Create Invoices for multiple FulfillmentOrders.

### cancelFulfillmentOrderLineItems(fulfillmentOrderId, cancelFulfillmentOrderLineItemsInput)

Cancel FulfillmentOrderLineItems from a FulfillmentOrder. This action doesn’t cancel the associated OrderItemSummaries, so reallocate the canceled quantities to a new FulfillmentOrder.

#### API Version

48.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.FulfillmentOrderCancelLineItemsOutputRepresentation cancelFulfillmentOrderLineItems(String fulfillmentOrderId, ConnectApi.FulfillmentOrderLineItemsToCancelInputRepresentation cancelFulfillmentOrderLineItemsInput)

#### Parameters

fulfillmentOrderId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the FulfilllmentOrder.

cancelFulfillmentOrderLineItemsInput

Type: [ConnectApi.FulfillmentOrderLineItemsToCancelInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_fulfillment_order_line_items_to_cancel.htm "A list of FulfillmentOrderLineItems and quantities to cancel.")

List of FulfillmentOrderLineItems to cancel.

#### Return Value

Type: [ConnectApi.FulfillmentOrderCancelLineItemsOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_fulfillment_order_cancel_line_items_output.htm "Wraps the base output.")

#### Example

```

```

### createFulfillmentOrders(fulfillmentOrderInput)

Create one or more FulfillmentOrders and FulfillmentOrderLineItems for an OrderDeliveryGroupSummary, which defines a delivery method and recipient for an OrderSummary. You specify the OrderItemSummaries to allocate, which can be fulfilled from different locations. Specifying multiple fulfillment groups creates one FulfillmentOrder for each location. For each OrderItemSummary, a FulfillmentOrderLineItem is created and assigned to the corresponding FulfillmentOrder.

#### API Version

48.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.FulfillmentOrderOutputRepresentation createFulfillmentOrders(ConnectApi.FulfillmentOrderInputRepresentation fulfillmentOrderInput)

#### Parameters

fulfillmentOrderInput

Type: [ConnectApi.FulfillmentOrderInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_fulfillment_order.htm "An OrderDeliveryGroupSummary that defines a delivery method and recipient, and a list of fulfillment groups to assign to FulfillmentOrders. Each fulfillment group is a set of OrderItemSummaries that match the OrderDeliveryGroupSummary and share the same fulfillment location. The method creates a FulfillmentOrder for each fulfillment group and a FulfillmentOrderLineItem for each OrderItemSummary.")

OrderItemSummaries to allocate, with location and delivery information.

#### Return Value

Type: [ConnectApi.FulfillmentOrderOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_fulfillment_order_output.htm "A list of IDs of the created FulfillmentOrders.")

#### Example

```

```

### createInvoice(fulfillmentOrderId, invoiceInput)

Create an invoice for a FulfillmentOrder that doesn’t have one.

#### API Version

48.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.FulfillmentOrderInvoiceOutputRepresentation createInvoice(String fulfillmentOrderId, ConnectApi.FulfillmentOrderInvoiceInputRepresentation invoiceInput)

#### Parameters

fulfillmentOrderId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the FulfillmentOrder.

invoiceInput

Type: [ConnectApi.FulfillmentOrderInvoiceInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_fulfillment_order_invoice.htm "Instantiate and include this object with no properties when creating an invoice.")

Required input with no data.

#### Return Value

Type: [ConnectApi.FulfillmentOrderInvoiceOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_fulfillment_order_invoice_output.htm "ID of the created invoice.")

#### Example

```

```

### createMultipleFulfillmentOrder(multipleFulfillmentOrderInput)

Create FulfillmentOrders for multiple OrderDeliveryGroups in a single request.

#### API Version

50.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.MultipleFulfillmentOrderOutputRepresentation createMultipleFulfillmentOrder(ConnectApi.MultipleFulfillmentOrderInputRepresentation multipleFulfillmentOrderInput)

#### Parameters

multipleFulfillmentOrderInput

Type: [ConnectApi.MultipleFulfillmentOrderInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_multiple_fulfillment_order.htm "List of inputs for creating fulfillment orders.")

Wraps a list of inputs for creating fulfillment orders.

#### Return Value

Type: [ConnectApi.MultipleFulfillmentOrderOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_multiple_fulfillment_order_output.htm "A list of responses for the individual FulfillmentOrder creation attempts from a request to create multiple fulfillment orders.")

### createMultipleInvoices(invoicesInput)

Create Invoices for multiple FulfillmentOrders.

#### API Version

52.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.MultipleFulfillmentOrderInvoicesOutputRepresentation createMultipleInvoices(ConnectApi.MultipleFulfillmentOrderInvoicesInputRepresentation invoicesInput)

#### Parameters

invoicesInput

Type: [ConnectApi.MultipleFulfillmentOrderInvoicesInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_multiple_fulfillment_order_invoices.htm "The FulfillmentOrders to create Invoices for.")

The FulfillmentOrders to create Invoices for.

#### Return Value

Type: [ConnectApi.MultipleFulfillmentOrderInvoicesOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_multiple_fulfillment_order_invoices_output.htm "IDs of the created Invoices.")

## Code Examples

```apex
String fulfillmentOrderId = '0a3xx0000000085AAA';
List<ConnectApi.FulfillmentOrderLineItemInputRepresentation> itemToCancelList = new List<ConnectApi.FulfillmentOrderLineItemInputRepresentation>();

for(FulfillmentOrderLineItem fulfillmentOrderLineItem : fulfillmentOrder.FulfillmentOrderLineItems){
  ConnectApi.FulfillmentOrderLineItemInputRepresentation itemToCancel = new ConnectApi.FulfillmentOrderLineItemInputRepresentation();
  itemToCancel.fulfillmentOrderLineItemId = fulfillmentOrderLineItem.Id;
  itemToCancel.quantity = 1;
  itemToCancelList.add(itemToCancel);
}

ConnectAPI.FulfillmentOrderLineItemsToCancelInputRepresentation input = new ConnectAPI.FulfillmentOrderLineItemsToCancelInputRepresentation();        
input.fulfillmentOrderLineItemsToCancel = itemToCancelList;

ConnectAPI.FulfillmentOrderCancelLineItemsOutputRepresentation result = ConnectAPI.FulfillmentOrder.cancelFulfillmentOrderLineItems(fulfillmentOrderId, input);
```

```apex
String orderSummaryId = '1Osxx0000004CCG';
String fulfillmentType = 'warehouse';

String warehouseFromLocationId = [SELECT Id from Location WHERE LocationType='Warehouse' LIMIT 1].Id;

ConnectApi.FulfillmentOrderInputRepresentation fulfillmentOrderInput = new ConnectApi.FulfillmentOrderInputRepresentation();
fulfillmentOrderInput.orderSummaryId = orderSummaryId;

List<OrderDeliveryGroupSummary> orderDeliveryGroupSummaryList = [SELECT Id FROM OrderDeliveryGroupSummary WHERE OrderSummaryId =: orderSummaryId];

for (OrderDeliveryGroupSummary orderDeliveryGroupSummary: orderDeliveryGroupSummaryList){

  fulfillmentOrderInput.orderDeliveryGroupSummaryId = orderDeliveryGroupSummary.Id;
  List<ConnectApi.FulfillmentGroupInputRepresentation> fulfillmentGroups = new List<ConnectApi.FulfillmentGroupInputRepresentation>();
  ConnectApi.FulfillmentGroupInputRepresentation fulfillmentGroup = new ConnectApi.FulfillmentGroupInputRepresentation();
  fulfillmentGroup.fulfilledFromLocationId = warehouseFromLocationId;
  fulfillmentGroup.fulfillmentType = fulfillmentType;

  List<ConnectApi.OrderItemSummaryInputRepresentation> orderItemSummaries = new List<ConnectApi.OrderItemSummaryInputRepresentation>();

  List<OrderItemSummary> orderItemSummaryList = [Select Id, quantity FROM OrderItemSummary WHERE OrderSummaryId =: orderSummaryId AND OrderDeliveryGroupSummaryId =: orderDeliveryGroupSummary.Id];
  for(OrderItemSummary orderItemSummary : orderItemSummaryList){
    ConnectApi.OrderItemSummaryInputRepresentation oisInputRepresentation = new ConnectApi.OrderItemSummaryInputRepresentation();
    oisInputRepresentation.orderItemSummaryId = orderItemSummary.Id;
    oisInputRepresentation.quantity = orderItemSummary.quantity;
    orderItemSummaries.add(oisInputRepresentation);
  }

  fulfillmentGroup.orderItemSummaries = orderItemSummaries;
  fulfillmentGroups.add(fulfillmentGroup);      
  fulfillmentOrderInput.fulfillmentGroups = fulfillmentGroups;

}

ConnectApi.FulfillmentOrderOutputRepresentation result = ConnectAPI.FulfillmentOrder.createFulfillmentOrders(fulfillmentOrderInput);
```

```
String fulfillmentOrderId = '0a3xx0000000085AAA';

ConnectApi.FulfillmentOrderInvoiceInputRepresentation input = new ConnectApi.FulfillmentOrderInvoiceInputRepresentation();
ConnectAPI.FulfillmentOrderInvoiceOutputRepresentation result = ConnectApi.FulfillmentOrder.createInvoice(fulfillmentOrderId, input);
```

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- cancelFulfillmentOrderLineItems(fulfillmentOrderId, cancelFulfillmentOrderLineItemsInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_FulfillmentOrder_static_methods.htm)
- createFulfillmentOrders(fulfillmentOrderInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_FulfillmentOrder_static_methods.htm)
- createInvoice(fulfillmentOrderId, invoiceInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_FulfillmentOrder_static_methods.htm)
- createMultipleFulfillmentOrder(multipleFulfillmentOrderInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_FulfillmentOrder_static_methods.htm)
- createMultipleInvoices(invoicesInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_FulfillmentOrder_static_methods.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.FulfillmentOrderLineItemsToCancelInputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_fulfillment_order_line_items_to_cancel.htm)
- ConnectApi.FulfillmentOrderCancelLineItemsOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_fulfillment_order_cancel_line_items_output.htm)
- ConnectApi.FulfillmentOrderInputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_fulfillment_order.htm)
