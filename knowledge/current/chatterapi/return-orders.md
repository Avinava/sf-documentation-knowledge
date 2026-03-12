---
title: "Return Orders"
domain: chatterapi
topic: return-orders
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.601Z
estimatedTokens: 427
keywords: [Orders, ReturnOrder, ReturnOrderLineItems, items, belonging, OrderSummary]
---

# Return Orders

> Create a ReturnOrder and ReturnOrderLineItems for items belonging to
      an OrderSummary.

# Return Orders

Create a ReturnOrder and ReturnOrderLineItems for items belonging to an OrderSummary.

Resource

```

```

Available version

50.0

HTTP methods

POST

Request body for POST

[Return Order Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_return_order_input.htm "Data for creating a ReturnOrder and ReturnOrderLineItems.")

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

Response body for POST

[Return Order Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_return_order_output.htm "Output representation of the created Return Order.")

## Code Examples

```
/commerce/returns/return-orders
```

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

- Return Order Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_return_order_input.htm)
- Return Order Line Item Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_return_order_line_item_input.htm)
- Return Order Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_return_order_output.htm)
