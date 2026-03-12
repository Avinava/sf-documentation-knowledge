---
title: "Cart Interaction"
domain: data-cloud
topic: cart-interaction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:12.048Z
estimatedTokens: 589
keywords: [Cart, Interaction, cart, interaction, where, customer, modifies, contents, their, online, shopping, cart., Single, Line, Item, Multiple, Items, Example]
---

# Cart Interaction

> A cart interaction is where a customer modifies the contents of their online shopping
        cart.

# Cart Interaction

A cart interaction is where a customer modifies the contents of their online shopping cart.

Cart interactions come in two forms:

-   Single Line Item: For modifying individual line items in the customer’s cart.
-   Multiple Line Items: For bulk operations against the customer’s cart.

## Single Line Item

The interaction names are used for cart interactions that affect individual line items.

| Interaction Name | Value |
| --- | --- |
| SalesforceInteractions.CartInteractionName.AddToCart | Add To Cart |
| SalesforceInteractions.CartInteractionName.RemoveFromCart | Remove From Cart |

```

```

The fields for a single line cart interaction.

| Field Name | Field Type | Description |
| --- | --- | --- |
| lineItem | Line Item Data | Required. A single Line Item Data value. |
| name | string | Required. The event names. |

## Multiple Line Items

The interaction names used for cart interactions that affect all the line items in a cart.

| Interaction Name | Value |
| --- | --- |
| SalesforceInteractions.CartInteractionName.ReplaceCart | Replace Cart |

```

```

The fields for multi-line cart interaction.

| Field Names | Field Type | Description |
| --- | --- | --- |
| lineItems | array | Required. An array of zero to many Line Item Data values |
| name | string | Required. The event names. |

## Example

Here’s an example of capturing a cart interaction using the Web SDK.

```

```

Here’s an example of capturing a cart interaction using the Sitemap.

```

```

#### See Also

-   [Translation of SDK Events to Web Connector Schemas](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_translating_sdk_events_to_web_connector_schemas.htm "Understanding how the Event Structure from the Salesforce Interactions SDK is converted into data that can be ingested into Data Cloud can be useful for troubleshooting instrumentation code. Knowing this can extend your schema to capture extra data not covered by the recommended schema.")

-   [Custom Events](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_custom_events.htm "Use the recommended Cart Interaction, Catalog Interaction, and Order Interaction data models provided by the Salesforce Interactions SDK to use the unified data model across Salesforce. You can create and capture custom events in addition to the recommended interaction data models.")

## Code Examples

```
{
   interaction: {
        name: "Add To Cart",
        lineItem: {
            catalogObjectType: "Product",
            catalogObjectId: "product-1",
            quantity: 1,
            price: 9.99,
            currency: "USD",
            attributes: {
                giftWrapping: 1
            }
        }
   }
}
```

```
{
   interaction: {
        name: "Replace Cart",
        lineItems: [{
            catalogObjectType: "Product",
            catalogObjectId: "product-1",
            quantity: 1,
            price: 9.99,
            currency: "USD",
            attributes: {
                giftWrapping: 1
            }
        }, {
            catalogObjectType: "Product",
            catalogObjectId: "product-2",
            quantity: 3,
            price: 20,
            currency: "USD",
            attributes: {
                giftWrapping: 0
            }
        }]
   }
}
```

```
SalesforceInteractions.sendEvent({
   interaction: {
        name: "Add To Cart",
        lineItem: {
            catalogObjectType: "Product",
            catalogObjectId: "product-1",
            quantity: 1,
            price: 9.99,
            currency: "USD",
            attributes: {
                giftWrapping: 1
            }
        }
   }
})
```

```apex
SalesforceInteractions.init().then(() => {
   const sitemapConfig = {
        global: {},
        pageTypes: [{
            name: 'product_detail_page',
            isMatch: () => true,
            listeners: [
                SalesforceInteractions.listener("click", ".add-to-cart-button", () => {
                    SalesforceInteractions.sendEvent({
                        interaction: {
                            name: SalesforceInteractions.CartInteractionName.AddToCart,
                            lineItem: {
                                catalogObjectType: "Product",
                                catalogObjectId: "product-1",
                                quantity: 1,
                                price: 9.99,
                                currency: "USD",
                                attributes: {
                                    giftWrapping: 1
                                }
                            }
                        }
                    })
                }
            ]
        }]
    }
    SalesforceInteractions.initSitemap(sitemapConfig)
})
```

## Related Topics

- Line Item Data (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_line_item_data.htm)
- Translation of SDK Events to Web Connector Schemas (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_translating_sdk_events_to_web_connector_schemas.htm)
- Custom Events (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_custom_events.htm)
