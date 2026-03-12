---
title: "User Data"
domain: data-cloud
topic: user-data
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:12.636Z
estimatedTokens: 398
keywords: [User, Data, Track, profile, data, user, without, associated, interaction, Salesforce, Interactions, Web, SDK., Example]
---

# User Data

> Track profile data for a user with or without an associated interaction using Salesforce
        Interactions Web SDK.

# User Data

Track profile data for a user with or without an associated interaction using Salesforce Interactions Web SDK.

```

```

User object fields:

| Field Name | Field Type | Description |
| --- | --- | --- |
| anonymousId | string | This field is managed by the SDK and is automatically attached to every event. |
| user.attributes | object | A user-supplied value. |
| user.identities | object | A user-supplied value to link the anonymous user with a known user. |

## Example

Here’s how a user profile data is captured using the Web SDK without Interaction.

```

```

Here’s how a user profile data is captured using the Web SDK with Interaction.

```

```

Here’s how a user profile data is captured using a Sitemap.

```

```

#### See Also

-   [Translation of SDK Events to Web Connector Schemas](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_translating_sdk_events_to_web_connector_schemas.htm "Understanding how the Event Structure from the Salesforce Interactions SDK is converted into data that can be ingested into Data Cloud can be useful for troubleshooting instrumentation code. Knowing this can extend your schema to capture extra data not covered by the recommended schema.")

-   [Custom Events](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_custom_events.htm "Use the recommended Cart Interaction, Catalog Interaction, and Order Interaction data models provided by the Salesforce Interactions SDK to use the unified data model across Salesforce. You can create and capture custom events in addition to the recommended interaction data models.")

## Code Examples

```
{
   user: {
        anonymousId: '<Set by SDK>',
        identities: {
            loyaltyId: "885627312393"
        },
        attributes: {
            firstName: 'Joe',
            lastName: 'Smith',
            email: 'joe.smith@domain.com'
        }
   }
}
```

```
SalesforceInteractions.sendEvent({
    user: {
        identities: {
            loyaltyId: "885627312393"
        },
        attributes: {
            firstName: 'Joe',
            lastName: 'Smith',
            email: 'joe.smith@domain.com'
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
    user: {
        identities: {
            loyaltyId: "885627312393"
        },
        attributes: {
            firstName: 'Joe',
            lastName: 'Smith',
            email: 'joe.smith@domain.com'
        }
    }
})
```

```apex
SalesforceInteractions.init().then(() => {
   const sitemapConfig = {
        global: {
            onActionEvent: (event) => {
                const email = window.user_info && window.user_info.email;
                if (email) {
                    event.user = event.user || {};
                    event.user.attributes = event.user.attributes || {};
                    event.user.attributes.emailAddress = email;
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
