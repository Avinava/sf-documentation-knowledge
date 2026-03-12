---
title: "Checkout Order Action List Input"
domain: chatterapi
topic: checkout-order-action-list-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.270Z
estimatedTokens: 243
keywords: [Checkout, Order, Action, Input, representation, Commerce, store, checkout.request]
---

# Checkout Order Action List Input

> Input representation of the Commerce store checkout.request.

# Checkout Order Action List Input

Input representation of the Commerce store checkout.request.

Root XML tag

checkoutPlaceOrderActionList

JSON example

Example request for the prepare action in a place order request:

```

```

Example request for the submit action in a place order request:

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| actions | Checkout Order Action Input | Details of the action to be performed on the place order request. | Required | 64.0 |

#### See Also

-   [Commerce Webstore Checkout, Place Order Action](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_checkouts_place_order_v2.htm "Place an order for a Commerce store checkout.")

-   [Checkout Order Action Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_checkout_order_action_collection.htm "Output representation of the Commerce store checkout request.")

## Code Examples

```
{
  "actions": [
    {
      "action": "prepare"
    }
  ]
}
```

```
{
  "actions": [
    {
      "action": "submit"
    }
  ]
}
```

## Related Topics

- Checkout Order
                        Action Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_checkout_order_action_input.htm)
- Commerce Webstore Checkout, Place Order Action (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_checkouts_place_order_v2.htm)
- Checkout Order Action Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_checkout_order_action_collection.htm)
