---
title: "Importing Order Data"
domain: order-management-developer-guide-html
topic: importing-order-data
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:20.124Z
estimatedTokens: 614
keywords: [Importing, Order, Data, Salesforce, Management, handles, imported, storefront, bulk, load, historical, legacy, system, new, org]
---

# Importing Order Data

> Salesforce Order Management handles order data imported from your
      storefront. You can bulk load historical order data from a legacy system into a new Order
      Management org or implement a custom import process for new orders from your
    storefront.

# Importing Order Data

Salesforce Order Management handles order data imported from your storefront. You can bulk load historical order data from a legacy system into a new Order Management org or implement a custom import process for new orders from your storefront.

-   **[Importing Data into Order Management](atlas.en-us.order_management_developer_guide_html.meta/order_management_developer_guide_html/order_management_importing_data_into_data_mgmt.htm)**
    In Order Management, each order is represented by an OrderSummary record and a set of supporting records, such as OrderItemSummaries and OrderDeliveryGroupSummaries. When you import order data, you create the Order record and supporting records, including OrderItems and OrderDeliveryGroups. Then process the order with the Create Order Summary flow core action or API to create the OrderSummary and its supporting records.
-   **[Creating Order Summaries for Imported Orders](atlas.en-us.order_management_developer_guide_html.meta/order_management_developer_guide_html/order_management_creating_order_summaries_imported_orders.htm)**
    You can create order summaries for imported orders in a few ways.
-   **[Importing Custom Order Data](atlas.en-us.order_management_developer_guide_html.meta/order_management_developer_guide_html/order_management_importing_custom_order_data.htm)**
    To import custom order data, add a custom field to Order, OrderItem, or OrderDeliveryGroup and a matching custom field to the corresponding summary object. When you set the custom value on the base record, the Create Order Summary action or API copies it to the matching field on the corresponding summary record.
-   **[Importing Data When Using Salesforce B2C Commerce](atlas.en-us.order_management_developer_guide_html.meta/order_management_developer_guide_html/order_management_importing_data_using_b2c_commerce.htm)**
    If you import data that’s used by the B2C Commerce integration, such as product or shopper data, keep it synchronized with your B2C Commerce data. Otherwise, the integration can’t recognize it.
-   **[High-Scale Orders and Deduplication](atlas.en-us.order_management_developer_guide_html.meta/order_management_developer_guide_html/order_management_high_scale_deduplication.htm)**
    High-Scale Orders uses the Pending Order Summaries REST API to create summaries from order summary graphs. Entities included in the request parameter aren't subject to deduplication rules.

## Related Topics

- Importing Data into Order Management (atlas.en-us.order_management_developer_guide_html.meta/order_management_developer_guide_html/order_management_importing_data_into_data_mgmt.htm)
- Creating Order Summaries for Imported Orders (atlas.en-us.order_management_developer_guide_html.meta/order_management_developer_guide_html/order_management_creating_order_summaries_imported_orders.htm)
- Importing Custom Order Data (atlas.en-us.order_management_developer_guide_html.meta/order_management_developer_guide_html/order_management_importing_custom_order_data.htm)
- Importing Data When Using Salesforce B2C Commerce (atlas.en-us.order_management_developer_guide_html.meta/order_management_developer_guide_html/order_management_importing_data_using_b2c_commerce.htm)
- High-Scale Orders and Deduplication (atlas.en-us.order_management_developer_guide_html.meta/order_management_developer_guide_html/order_management_high_scale_deduplication.htm)
