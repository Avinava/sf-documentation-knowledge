---
title: "Delivery Group Input"
domain: chatterapi
topic: delivery-group-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:11.503Z
estimatedTokens: 170
keywords: [Delivery, Group, Input]
---

# Delivery Group Input

> Delivery group input.

# Delivery Group Input

Delivery group input.

Root XML tag

<deliveryGroup>

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| deliveryAddress | Checkout Address Input | Shipping address input. | Optional | 53.0 |
| deliveryMethodId | String | ID of the delivery method. | Optional | 53.0 |
| desiredDeliveryDate | String | Delivery date of the delivery group. | Optional | 53.0 |
| id | String | ID of the delivery group. | Optional | 53.0 |
| name | String | Name of the delivery group. | Optional | 60.0 |
| shippingInstructions | String | Shipping instructions for the delivery group. | Optional | 53.0 |

## Related Topics

- Checkout Address Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_checkout_address_input.htm)
