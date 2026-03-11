---
title: "createMultipleFulfillmentOrder(multipleFulfillmentOrderInput)"
domain: apex-reference
topic: createmultiplefulfillmentordermultiplefulfillmentorderinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.131Z
keywords: [createMultipleFulfillmentOrder, multipleFulfillmentOrderInput, Create, FulfillmentOrders, multiple, OrderDeliveryGroups, single, request., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# createMultipleFulfillmentOrder(multipleFulfillmentOrderInput)

> Create FulfillmentOrders for multiple OrderDeliveryGroups in a single
      request.

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