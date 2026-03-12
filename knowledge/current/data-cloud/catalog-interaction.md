---
title: "Catalog Interaction"
domain: data-cloud
topic: catalog-interaction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:12.970Z
estimatedTokens: 637
keywords: [Catalog, Interaction, capture, customer, interacts, various, tracking, items, product, blog, post]
---

# Catalog Interaction

> Use a catalog interaction to capture when a customer interacts with various tracking
        items. For example, a product or a blog post.

# Catalog Interaction

Use a catalog interaction to capture when a customer interacts with various tracking items. For example, a product or a blog post.

The interaction names are treated as a catalog interaction.

| Interaction Name | Value |
| --- | --- |
| SalesforceInteractions.CatalogObjectInteractionName.CommentCatalogObject | Comment Catalog Object |
| SalesforceInteractions.CatalogObjectInteractionName.FavoriteCatalogObject | Favorite Catalog Object |
| SalesforceInteractions.CatalogObjectInteractionName.QuickViewCatalogObject | Quick View Catalog Object |
| SalesforceInteractions.CatalogObjectInteractionName.ReviewCatalogObject | Review Catalog Object |
| SalesforceInteractions.CatalogObjectInteractionName.ShareCatalogObject | Share Catalog Object |
| SalesforceInteractions.CatalogObjectInteractionName.ViewCatalogObject | View Catalog Object |
| SalesforceInteractions.CatalogObjectInteractionName.ViewCatalogObjectDetail | View Catalog Object Detail |

```

```

Catalog interaction fields:

| Field Name | Description |
| --- | --- |
| catalogObject.attributes | Field TypeobjectDescriptionA dictionary of user-supplied values. |
| catalogObject.id | Field TypestringDescriptionRequired.A unique id representing the catalog object. |
| catalogObject.relatedCatalogObjects | Field TypeobjectDescriptionA dictionary of related catalog objects. |
| catalogObject.type | Field TypestringDescriptionRequired.A type name representing the catalog object. |
| name | Field TypestringDescriptionRequired.The event names. |

## Example

Here’s how a catalog interaction is captured using the Web SDK.

```

```

Here’s how a catalog interaction is captured using the sitemap.

```

```

#### See Also

-   [Translation of SDK Events to Web Connector Schemas](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_translating_sdk_events_to_web_connector_schemas.htm "Understanding how the Event Structure from the Salesforce Interactions SDK is converted into data that can be ingested into Data Cloud can be useful for troubleshooting instrumentation code. Knowing this can extend your schema to capture extra data not covered by the recommended schema.")

-   [Custom Events](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_custom_events.htm "Use the recommended Cart Interaction, Catalog Interaction, and Order Interaction data models provided by the Salesforce Interactions SDK to use the unified data model across Salesforce. You can create and capture custom events in addition to the recommended interaction data models.")

## Code Examples

```
{
   interaction: {
        name: 'View Catalog Object',
        catalogObject: {
            type: 'Product',
            id: 'product-xyz',
            attributes: {
                name: 'Product XYZ',
                category: 'Clothing',
                color: 'Red',
                sku: 'product-xyz-sku'
            },
            relatedCatalogObjects: [{
                Sizes: ["S", "M", "L"]
            }]
        }
    }
}
```

```
SalesforceInteractions.sendEvent({
   interaction: {
        name: 'View Catalog Object',
        catalogObject: {
            type: 'Product',
            id: 'product-xyz',
            attributes: {
                name: 'Product XYZ',
                category: 'Clothing',
                color: 'Red',
                sku: 'product-xyz-sku'
            },
            relatedCatalogObjects: [{
                Sizes: ["S", "M", "L"]
            }]
        }
    }
})
```

```apex
SalesforceInteractions.init().then(() => {
   const sitemapConfig = {
        global: {},
        pageTypes: [{
            name: 'product_detail',
            isMatch: () => true,
            interaction: {
            name: SalesforceInteractions.CatalogObjectInteractionName.ViewCatalogObject,
                catalogObject: {
                    type: 'Product',
                    id: 'product-xyz',
                    attributes: {
                        name: 'Product XYZ',
                        category: 'Clothing',
                        color: 'Red',
                        sku: 'product-xyz-sku'
                    },
                    relatedCatalogObjects: [{
                        Sizes: ["S", "M", "L"]
                    }]
                }
            }
        }]
    }
    SalesforceInteractions.initSitemap(sitemapConfig)
})
```

## Related Topics

- Translation of SDK Events to Web Connector Schemas (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_translating_sdk_events_to_web_connector_schemas.htm)
- Custom Events (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_custom_events.htm)
