---
title: "Cart Interactions"
domain: exp-cloud-lwr
topic: cart-interactions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.640Z
estimatedTokens: 679
keywords: [Cart, Interactions, interaction, occurs, customer, interacts, their, checkout, Add, Event, Remove]
---

# Cart Interactions

> A cart interaction occurs when a customer interacts with their cart or
			checkout.

# Cart Interactions

A cart interaction occurs when a customer interacts with their cart or checkout.

| Interaction Name | Description |
| --- | --- |
| cart-add | Captures an event for the addition of an item to a cart. |
| cart-remove | Captures an event for the removal of an item from a cart. |
| cart-replace | Captures an event for the replacement of all items in a cart at the same time. |
| cart-update | Captures events for updates to a cart. |
| cart-view | Captures an event for when a user views their cart. Available in package version 1.3 and later |
| checkout-apply-coupon | Captures an event that occurs when a user applies a coupon during checkout. Available in package version 1.3 and later. |
| checkout-begin | Captures an event for when a checkout begins. Available in package version 1.3 and later. |
| checkout-billing-address | Captures an event that occurs when a user enters their billing address during checkout. Available in package version 1.3 and later. |
| checkout-contact-info | Captures an event that occurs when a user enters their contact info during checkout. Available in package version 1.3 and later. |
| checkout-payment | Captures an event that occurs when a user makes a payment during checkout. Available in package version 1.3 and later. |
| checkout-review | Captures an event that occurs when a user selects review checkout before submitting their order. Available in package version 1.3 and later. |
| checkout-shipping-address | Captures an event that occurs when a user enters their shipping address during checkout. Available in package version 1.3 and later. |
| checkout-shipping-options | Captures an event that occurs when a user chooses a shipping option during checkout. Available in package version 1.3 and later. |
| checkout-submit | Captures an event that occurs when a user submits their order at the end of the checkout process. Available in package version 1.3 and later. |
| checkout-user-register | Captures an event that occurs when a user registers during checkout. Available in package version 1.3 and later. |
| order-accepted | Captures an event that occurs when an order is accepted and ready for fulfillment. Available in package version 1.3 and later. |

## Fields

| Field | Details |
| --- | --- |
| attributes | TypeobjectDescriptionA dictionary of values that you supply. |
| id | TypestringDescriptionRequired. A unique ID representing the Cart object. |
| lineItems | TypeLine Item DataDescriptionRequired. A single Line Item Data value. |
| name | TypestringDescriptionRequired. The event name. |

## Add to Cart Interaction Event

```

```

## Remove from Cart Interaction Event

```

```

## Update Cart Interaction Event

```

```

## Code Examples

```
event.target.dispatchEvent(
   new CustomEvent('experience_interaction', {
      bubbles: true,
      composed: true,
      detail: {
         name: 'cart-add',
         cart: {
            id: 'cart-12345',
            lineItems: {
               id: 'line-item-12345',
               catalogObject: {
                  id: 'catalog-id-12345678',
                  type: 'Product'
               },
               attributes: {
                  quantity: 12,
                  price: 2.5,
                  imageUrl: 'https://commerce.salesforce.com/blueshirt.jpg',
                  name: 'blue-shirt'
               },
            },
            attributes: {
               currency: '$',
               name: 'my-personal-cart',
            },
         },
      },
   })
);
```

```
event.target.dispatchEvent(
   new CustomEvent('experience_interaction', {
      bubbles: true,
      composed: true,
      detail: {
         name: 'cart-remove',
         cart: {
            id: 'cart-12345',
            lineItems: {
               id: 'line-item-23112',
            },
            attributes: {
               name: 'my-personal-cart'
            },
         },
      },
   })
);
```

```
event.target.dispatchEvent(
   new CustomEvent('experience_interaction', {
      bubbles: true,
      composed: true,
      detail: {
         name: 'cart-update',
         cart: {
            id: 'cart-61221',
            lineItems: {
               id: 'line-item-11111',
               attributes: {
                  quantity: 2,
               },
            },
            attributes: {
               name: 'my-updated-cart'
            },
         },
      },
   })
);
```

## Related Topics

- Line Item
												Data (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/event_line_item_data.htm)
