---
title: "Return Order Input"
domain: chatterapi
topic: return-order-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.707Z
estimatedTokens: 364
keywords: [Order, Input, Data, creating, ReturnOrder, ReturnOrderLineItems]
---

# Return Order Input

> Data for creating a ReturnOrder and
    ReturnOrderLineItems.

# Return Order Input

Data for creating a ReturnOrder and ReturnOrderLineItems.

Root XML tag

<returnOrderInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| orderSummaryId | String | ID of the OrderSummary containing the items to be returned. The OrderSummary’s OrderLifeCycleType must be Managed. | Required | 50.0 |
| returnOrder​LifeCycleType | String | The LifeCycleType of the ReturnOrder. Possible values are:Managed—Process the ReturnOrder using the APIs and actions. It can generate change orders and affects financial fields and rollup calculations.Unmanaged—The ReturnOrder is for tracking purposes only. It isn’t involved in any financial calculations and doesn’t generate any change orders. The system doesn’t prevent the creation of duplicate ReturnOrderLineItems in an unmanaged ReturnOrder for the same OrderItem. | Required | 51.0 |
| returnOrder​LineItems | Return Order Line Item Input[] | List of data for creating ReturnOrderLineItems. | At least one element is required | 50.0 |
| status | String | Status to assign the ReturnOrder. This value must match an entry in the ReturnOrder object’s Status picklist. | Required | 50.0 |

#### See Also

-   [Return Orders](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_return_orders.htm "Create a ReturnOrder and ReturnOrderLineItems for items belonging to an OrderSummary.")

## Code Examples

```
{
  "orderSummaryId": "1Osxx0000004EAqCAM",
  "status" : "Submitted",
  "returnOrderLifeCycleType" : "Unmanaged",
  "returnOrderLineItems": [
    {
      "quantityExpected": "1",
      "reasonForReturn": "Not Satisfied",
      "canReduceShipping": false,
      "orderItemSummaryId": "10uxx0000004GKbAAM",
      "quantityReceived": "0"
    }
  ]
}
```

## Related Topics

- Return Order Line Item Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_return_order_line_item_input.htm)
- Return Orders (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_return_orders.htm)
