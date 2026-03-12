---
title: "Checkout Order Action Input"
domain: chatterapi
topic: checkout-order-action-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:11.267Z
estimatedTokens: 190
keywords: [Checkout, Order, Action, Input, representation, including]
---

# Checkout Order Action Input

> Input representation of the Checkout Order action request, including the action and its
    parameters for a single order.

# Checkout Order Action Input

Input representation of the Checkout Order action request, including the action and its parameters for a single order.

Root XML tag

checkoutOrderAction

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| action | String | Name of the action to be performed on the place order request. Valid values are:prepare—Validates the request, temporarily reserves inventory, and applies coupons on the items in the cart.submit—Validates the request, enqueues order creation, and returns the order reference number. | Required | 64.0 |
| parameters | Checkout Order Action Parameters Input | Parameter for the submit action in a place order request. | Optional | 64.0 |

## Related Topics

- Checkout Order Action Parameters Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_checkout_order_action_parameters_input.htm)
