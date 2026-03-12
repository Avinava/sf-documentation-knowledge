---
title: "Account Data"
domain: data-cloud
topic: account-data
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:12.949Z
estimatedTokens: 369
keywords: [Account, Data, represent, user, level, allow, capture, customers]
---

# Account Data

> Account data represent user information at the account level. The account fields allow
        you to capture data for many customers in one account.

# Account Data

Account data represent user information at the account level. The account fields allow you to capture data for many customers in one account.

```

```

User object fields:

| Field Name | Field Type | Description |
| --- | --- | --- |
| account.attributes | object | A user-supplied value. |
| account.id | string | Required. An account identifier for the user. |

## Example

Here’s how account data is captured using the Web SDK without Interaction.

```

```

Here’s how account data is captured using the Web SDK with Interaction.

```

```

Here’s how account data is captured using the Sitemap.

```

```

#### See Also

-   [Translation of SDK Events to Web Connector Schemas](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_translating_sdk_events_to_web_connector_schemas.htm "Understanding how the Event Structure from the Salesforce Interactions SDK is converted into data that can be ingested into Data Cloud can be useful for troubleshooting instrumentation code. Knowing this can extend your schema to capture extra data not covered by the recommended schema.")

-   [Custom Events](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_custom_events.htm "Use the recommended Cart Interaction, Catalog Interaction, and Order Interaction data models provided by the Salesforce Interactions SDK to use the unified data model across Salesforce. You can create and capture custom events in addition to the recommended interaction data models.")

## Code Examples

```
{
    account: {
        id: '43296241300',
        attributes: {
            role: 'Subscriber'
        }
    }
}
```

```
SalesforceInteractions.sendEvent({
    account: {
        id: '43296241300',
        attributes: {
            role: 'Subscriber'
        }
    }
})
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
                color: 'Red'
            }
        }
    },
    account: {
        id: '43296241300',
        attributes: {
            role: 'Subscriber'
        }
    }
})
```

```apex
SalesforceInteractions.init().then(() => {
   const sitemapConfig = {
        global: {
            onActionEvent: (event) => {
                const accountId = window.accountId;
                if (accountId) {
                    event.account = event.user || {};
                    event.account.id = accountId;
                }
                return event;
            },
        },
        pageTypes: [{
            name: 'product_detail',
            isMatch: () => true,
            interaction: {
            name: SalesforceInteractions.InteractionName.ViewCatalogObject,
                catalogObject: {
                    type: 'Product',
                    id: 'product-xyz',
                    attributes: {
                        name: 'Product XYZ',
                        category: 'Clothing',
                        color: 'Red'
                    }
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
