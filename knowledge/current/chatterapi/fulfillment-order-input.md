---
title: "Fulfillment Order Input"
domain: chatterapi
topic: fulfillment-order-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:11.776Z
estimatedTokens: 465
keywords: [Fulfillment, Order, Input, OrderDeliveryGroupSummary, delivery, recipient, groups, assign, FulfillmentOrders, group, OrderItemSummaries, match, share, location, creates]
---

# Fulfillment Order Input

> An OrderDeliveryGroupSummary that defines a delivery method and
    recipient, and a list of fulfillment groups to assign to FulfillmentOrders. Each fulfillment
    group is a set of OrderItemSummaries that match the OrderDeliveryGroupSummary and share the same
    fulfillment location. The method creates a FulfillmentOrder for each fulfillment group and a
    FulfillmentOrderLineItem for each OrderItemSummary.

# Fulfillment Order Input

An OrderDeliveryGroupSummary that defines a delivery method and recipient, and a list of fulfillment groups to assign to FulfillmentOrders. Each fulfillment group is a set of OrderItemSummaries that match the OrderDeliveryGroupSummary and share the same fulfillment location. The method creates a FulfillmentOrder for each fulfillment group and a FulfillmentOrderLineItem for each OrderItemSummary.

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

#### See Also

-   [Fulfillment Orders](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_fulfillment_orders.htm "Create one or more FulfillmentOrders and FulfillmentOrderLineItems for an OrderDeliveryGroupSummary, which defines a delivery method and recipient for an OrderSummary. You specify the OrderItemSummaries to allocate, which can be fulfilled from different locations. Specifying multiple fulfillment groups creates one FulfillmentOrder for each location. For each OrderItemSummary, a FulfillmentOrderLineItem is created and assigned to the corresponding FulfillmentOrder.")

## Code Examples

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

- Fulfillment Group Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_fulfillment_group_input.htm)
- Fulfillment Orders (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_fulfillment_orders.htm)
