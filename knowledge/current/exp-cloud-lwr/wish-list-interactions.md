---
title: "Wish-List Interactions"
domain: exp-cloud-lwr
topic: wish-list-interactions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.674Z
estimatedTokens: 228
keywords: [Wish-List, Interactions, interaction, occurs, customer, adds, removes, items, their, wish, Add, Event]
---

# Wish-List Interactions

> A wish-list interaction occurs when a customer adds or removes items
			from their wish list.

# Wish-List Interactions

A wish-list interaction occurs when a customer adds or removes items from their wish list.

| Interaction Name | Description |
| --- | --- |
| wish-list-add | Captures an event for the addition of an item to a wish list. |
| wish-list-remove | Captures an event for the removal of an item from a wish list. |
| wish-list-replace | Captures an event for the replacement of all items in a wish list at the same time. |
| wish-list-update | Captures events for updates to a wish list. |

## Fields

| Field | Details |
| --- | --- |
| attributes | TypeobjectDescriptionA dictionary of values that you supply. |
| id | TypestringDescriptionRequired. A unique ID representing the Wishlist object. |
| lineItems | TypeLine Item DataDescriptionRequired. A single Line Item Data value. |
| name | TypestringDescriptionRequired. The event name. |

## Add to Wish List Interaction Event

```

```

## Code Examples

```
event.target.dispatchEvent(
   new CustomEvent('experience_interaction', {
      bubbles: true,
      composed: true,
      detail: {
         name: 'wish-list-add',
         wishList: {
            id: 'wish-list-12345',
            lineItems: {
               catalogObject: {
                  id: 'catalog-id-12345678',
                  type: 'Product'
               },
               attributes: {
                  quantity: 12,
                  price: 2.5,
                  name: 'gray-jeans'
               },
            },
            attributes: {
               currency: '$',
               name: 'my-personal-wish-list,
            },
         },
      },
   })
);
```

## Related Topics

- Line Item
												Data (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/event_line_item_data.htm)
