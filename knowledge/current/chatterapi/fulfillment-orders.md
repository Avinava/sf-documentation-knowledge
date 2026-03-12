---
title: "Fulfillment Orders"
domain: chatterapi
topic: fulfillment-orders
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.490Z
estimatedTokens: 880
keywords: [Fulfillment, Orders, FulfillmentOrders, FulfillmentOrderLineItems, OrderDeliveryGroupSummary, delivery, recipient, OrderSummary, specify, OrderItemSummaries, allocate, fulfilled, different, locations, Specifying]
---

# Fulfillment Orders

> Create one or more FulfillmentOrders and FulfillmentOrderLineItems
      for an OrderDeliveryGroupSummary, which defines a delivery method and recipient for an
      OrderSummary. You specify the OrderItemSummaries to allocate, which can be fulfilled from
      different locations. Specifying multiple fulfillment groups creates one FulfillmentOrder for
      each location. For each OrderItemSummary, a FulfillmentOrderLineItem is created and assigned
      to the corresponding FulfillmentOrder.

# Fulfillment Orders

Create one or more FulfillmentOrders and FulfillmentOrderLineItems for an OrderDeliveryGroupSummary, which defines a delivery method and recipient for an OrderSummary. You specify the OrderItemSummaries to allocate, which can be fulfilled from different locations. Specifying multiple fulfillment groups creates one FulfillmentOrder for each location. For each OrderItemSummary, a FulfillmentOrderLineItem is created and assigned to the corresponding FulfillmentOrder.

Resource

```

```

Available version

48.0

HTTP methods

POST

Request body for POST

[Fulfillment Order Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_fulfillment_order_input.htm "An OrderDeliveryGroupSummary that defines a delivery method and recipient, and a list of fulfillment groups to assign to FulfillmentOrders. Each fulfillment group is a set of OrderItemSummaries that match the OrderDeliveryGroupSummary and share the same fulfillment location. The method creates a FulfillmentOrder for each fulfillment group and a FulfillmentOrderLineItem for each OrderItemSummary.")

Root XML tag

<fulfillmentOrderInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| defaultActivationStatus | String | Default activation status for a new fulfillment order. If you don't specify a value, the default value is Allocated, which belongs to the Activated status category. This default can be changed, but the replacement status must also have a status category of Activated. | Optional | 58.0 |
| fulfillmentGroups | Fulfillment Group Input[] | List of fulfillment groups that specify the OrderItemSummaries and fulfillment locations. | Required | 48.0 |
| orderDeliveryGroup​SummaryId | String | ID of the OrderDeliveryGroupSummary. | Required | 48.0 |
| orderSummaryId | String | ID of the OrderSummary. | Required | 48.0 |

Response body for POST

-   When the HTTP status code indicates success, the response body is a [Fulfillment Order Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_fulfillment_order_output.htm "A list of IDs of the created FulfillmentOrders."). The response body can still indicate processing errors.
-   When the HTTP status code is in the 400 (client error) or 500 (server error) range, the response body is an [Error with Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_with_output.htm "Contains extra information about errors. In rare cases, an error message isn't enough to describe the reason for a failure. For example, when a conflicting precondition exists, the error result can include the information about the cause of the conflict."). The output property is a [Fulfillment Order Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_fulfillment_order_output.htm "A list of IDs of the created FulfillmentOrders."), and the value of the enhancedErrorType property can be ignored.

#### See Also

-   [Fulfillment Orders, Cancel Item](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_fulfillment_orders_cancel_items.htm "Cancel FulfillmentOrderLineItems from a FulfillmentOrder. This action doesn’t cancel the associated OrderItemSummaries, so reallocate the canceled quantities to a new FulfillmentOrder.")

-   [Fulfillment Orders, Create Invoice](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_fulfillment_orders_create_invoice.htm "Create an invoice for a FulfillmentOrder that doesn’t have one.")

## Code Examples

```
/commerce/fulfillment/fulfillment-orders
```

```
{  
  "defaultActivationStatus":"Allocated",
  "orderSummaryId":"1Osxx0000000000001",
  "orderDeliveryGroupSummaryId":"0ag7Q000000xPYgQAM",
  "fulfillmentGroups":[  
    {  
      "fulfilledFromLocationId":"131xx00000000W0001",
      "fulfillmentType":"warehouse",
      "orderItemSummaries":[  
        {  
          "orderItemSummaryId":"10uxx00000000W0001",
          "quantity":3
        },
        {  
          "orderItemSummaryId":"10uxx00000000W0002",
          "quantity":1
        }
      ]
    }
  ]
}
```

## Related Topics

- Fulfillment Order Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_fulfillment_order_input.htm)
- Fulfillment Group Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_fulfillment_group_input.htm)
- Fulfillment Order Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_fulfillment_order_output.htm)
- Error with Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_with_output.htm)
- Fulfillment Orders, Cancel Item (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_fulfillment_orders_cancel_items.htm)
- Fulfillment Orders, Create Invoice (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_fulfillment_orders_create_invoice.htm)
