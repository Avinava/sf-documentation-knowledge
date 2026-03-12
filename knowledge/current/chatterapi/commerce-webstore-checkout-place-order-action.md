---
title: "Commerce Webstore Checkout, Place Order Action"
domain: chatterapi
topic: commerce-webstore-checkout-place-order-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.344Z
estimatedTokens: 331
keywords: [Commerce, Webstore, Checkout, Place, Order, Action, store]
---

# Commerce Webstore Checkout, Place Order Action

> Place an order for a Commerce store checkout.

# Commerce Webstore Checkout, Place Order Action

Place an order for a Commerce store checkout.

Resource

```

```

Values for activeOrCheckoutId are:

-   checkoutId—ID of the checkout.
-   active—Active checkout.

Resource examples

```

```

```

```

```

```

Available version

64.0

HTTP methods

POST

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| effectiveAccountId | String | ID of the account for which the request is made. If not specified, it defaults to the account ID for the context user. | Optional | 64.0 |

Request body for POST

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

Response body for POST

[Checkout Order Action Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_checkout_order_action_collection.htm "Output representation of the Commerce store checkout request.")

## Code Examples

```
/commerce/webstores/${webstoreId}/checkouts/${activeOrCheckoutId}/orders/actions
```

```
https://yourInstance.salesforce.com/services/data/66.0/commerce/webstores/​0ZExx000000005rGAA/checkouts/2z9R000000008LfIAI/orders/actions
```

```
https://yourInstance.salesforce.com/services/data/66.0/commerce/webstores/​0ZExx000000005rGAA/checkouts/active/orders/actions
```

```
https://yourInstance.salesforce.com/services/data/66.0/commerce/webstores/​0ZExx000000005rGAA/checkouts/active/orders/actions?effectiveAccountId=001xx000003GYv5AAG
```

```
{
  "actions": [
    {
      "action": "prepare"
    }
  ]
}
```

## Related Topics

- Checkout Order
                        Action Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_checkout_order_action_input.htm)
- Checkout Order Action Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_checkout_order_action_collection.htm)
