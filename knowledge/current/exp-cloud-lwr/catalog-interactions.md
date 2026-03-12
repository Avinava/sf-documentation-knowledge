---
title: "Catalog Interactions"
domain: exp-cloud-lwr
topic: catalog-interactions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.646Z
estimatedTokens: 372
keywords: [Catalog, Interactions, interaction, occurs, customer, interacts, various, tracking, items, include, product, blog, post, View, Start]
---

# Catalog Interactions

> A catalog interaction occurs when a customer interacts with various
			tracking items. For example, catalog items could include a product or a blog
		post.

# Catalog Interactions

A catalog interaction occurs when a customer interacts with various tracking items. For example, catalog items could include a product or a blog post.

| Interaction Name | Description |
| --- | --- |
| catalog-object-click | Captures the event of a user clicking a catalog object. |
| catalog-object-impression | Captures the event of a user viewing search results or category products. Available in package version 1.3 and later. |
| catalog-object-view-start | Captures the start point of a user viewing a catalog object. |
| catalog-object-view-stop | Captures the stop point of a user viewing a catalog object. |
| form-submit | Captures the event of a user submitting a form. |

## Fields

| Field | Details |
| --- | --- |
| attributes | TypeobjectDescriptionA dictionary of values that you supply. |
| id | TypestringDescriptionRequired. A unique ID representing the Catalog object. |
| lineItems | TypeLine Item DataDescriptionRequired. A single-Line Item Data value. |
| name | TypestringDescriptionRequired. The event name. |
| type | TypestringDescriptionRequired. A type name representing the catalog object. If type is set to product, the interaction is sent to the Product Browse Engagement DMO. If type is set to anything else, the interaction is sent to the Website Engagement DMO. |

## View Catalog Object Start Interaction Event

```

```

## View Catalog Object Stop Interaction Event

```

```

## Click Catalog Interaction Event

```

```

## Code Examples

```
event.target.dispatchEvent(
    new CustomEvent('experience_interaction', {
        bubbles: true,
        composed: true,
        detail: {
            name: 'catalog-object-view-start',
            catalogObject: {
                id: 'product-12345678',
                lineItems: {
                    id: 'line-item-12345',
                    catalogObject: {
           .            id: 'catalog-id-12345678',
                        type: 'Product'
                    },
                    attributes: {
                        quantity: 12,
                        price: 2.5,
                        name: 'blue-shirt'
                    },
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
            name: 'catalog-object-view-stop,
            catalogObject: {
                id: 'product-12345678',
                lineItems: {
                    id: 'line-item-12345',
                    catalogObject: {
           .            id: 'catalog-id-12345678',
                        type: 'Product'
                    },
                    attributes: {
                        quantity: 12,
                        price: 2.5,
                        name: 'blue-shirt'
                    },
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
            name: 'catalog-object-click',
             catalogObject: {
                id: 'product-12345678',
                lineItems: {
                    id: 'line-item-12345',
                    catalogObject: {
           .            id: 'catalog-id-12345678',
                        type: 'Product'
                    },
                    attributes: {
                        quantity: 12,
                        price: 2.5,
                        name: 'blue-shirt'
                    },
                },
            },
        },
    })
);
```

## Related Topics

- Line Item
												Data (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/event_line_item_data.htm)
