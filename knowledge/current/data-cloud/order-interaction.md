---
title: "Order Interaction"
domain: data-cloud
topic: order-interaction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:42.396Z
keywords: [Order, Interaction, Example, See]
---

# Order Interaction

# Order Interaction

An order interaction is an ecommerce event that captures actions performed by a user to manage new, in progress, or completed orders.

The interaction names are treated as an order interaction:

| Name | Value |
| --- | --- |
| SalesforceInteractions.OrderInteractionName.Cancel | Cancel |
| SalesforceInteractions.OrderInteractionName.Deliver | Deliver |
| SalesforceInteractions.OrderInteractionName.Exchange | Exchange |
| SalesforceInteractions.OrderInteractionName.Preorder | Preorder |
| SalesforceInteractions.OrderInteractionName.Purchase | Purchase |
| SalesforceInteractions.OrderInteractionName.Ship | Ship |
| SalesforceInteractions.OrderInteractionName.Return | Return |

```

```

Order interaction fields:

| Field Name | Field Type | Description |
| --- | --- | --- |
| name | string | Required. The event names. |
| order.attributes | object | A user-supplied value. |
| order.currency | string | The currency of the order. |
| order.lineItems | Line Item Data | An array of Line Item Data values. |
| order.id | string | Required. A unique identifier representing the order. |
| order.totalValue | number | Required. The total value of the order. |

## Example

Here’s how an order interaction is captured using the Web SDK.

```

```

Here’s how an order interaction is captured using the Sitemap.

```

```

#### See Also

-   [Translation of SDK Events to Web Connector Schemas](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_translating_sdk_events_to_web_connector_schemas.htm "Understanding how the Event Structure from the Salesforce Interactions SDK is converted into data that can be ingested into Data Cloud can be useful for troubleshooting instrumentation code. Knowing this can extend your schema to capture extra data not covered by the recommended schema.")
    
-   [Custom Events](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_custom_events.htm "Use the recommended Cart Interaction, Catalog Interaction, and Order Interaction data models provided by the Salesforce Interactions SDK to use the unified data model across Salesforce. You can create and capture custom events in addition to the recommended interaction data models.")