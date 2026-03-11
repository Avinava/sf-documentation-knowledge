---
title: "Line Item Data"
domain: data-cloud
topic: line-item-data
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:42.384Z
keywords: [Line, Item, Data, Example, See]
---

# Line Item Data

# Line Item Data

Line items are intended to describe purchasable items and are used in cart and order interactions.

Line item fields:

| Field Name | Field Type | Description |
| --- | --- | --- |
| attributes | object | A user-supplied value. |
| catalogObjectId | string | Required. A unique identifier representing the catalog object referenced in the line item. |
| catalogObjectType | string | Required. A name representing the catalog object referenced in the line item. |
| currency | string | The currency of the price field. |
| price | number | The price of the catalog object referenced in the line item. |
| quantity | number | Required. The number of catalog objects in this line item. |

## Example

Here’s a basic structure of a line item used within an Interaction using the Sitemap.

```

```

#### See Also

-   [Translation of SDK Events to Web Connector Schemas](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_translating_sdk_events_to_web_connector_schemas.htm "Understanding how the Event Structure from the Salesforce Interactions SDK is converted into data that can be ingested into Data Cloud can be useful for troubleshooting instrumentation code. Knowing this can extend your schema to capture extra data not covered by the recommended schema.")
    
-   [Custom Events](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_custom_events.htm "Use the recommended Cart Interaction, Catalog Interaction, and Order Interaction data models provided by the Salesforce Interactions SDK to use the unified data model across Salesforce. You can create and capture custom events in addition to the recommended interaction data models.")