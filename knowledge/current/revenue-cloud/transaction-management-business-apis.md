---
title: "Transaction Management Business APIs"
domain: revenue-cloud
topic: transaction-management-business-apis
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:10.483Z
estimatedTokens: 1111
keywords: [Transaction, Management, Business, APIs, fetch, instant, pricing, data, quote, order]
---

# Transaction Management Business APIs

> Use the Transaction Management Business APIs to fetch instant pricing data on a quote
    or an order, to create a quote, or to create an order.

# Transaction Management Business APIs

Use the Transaction Management Business APIs to fetch instant pricing data on a quote or an order, to create a quote, or to create an order.

This table lists the available Transaction Management resources.

| Resource | Description |
| --- | --- |
| /connect/revenue-management/assets/actions/amend (POST) | Initiate and execute the amendment of a quote or an order. |
| /connect/revenue-management/assets/actions/cancel (POST) | Initiate and execute the cancellation of an asset. |
| /connect/revenue-management/assets/actions/renew (POST) | Initiate and execute the renewal of an asset. |
| /industries/cpq/quotes/actions/get-instant-price (POST) | Fetch instant pricing data on the quote or order line data grid and associated summary component. It offers capabilities to either create a context or update the existing one based on the provided context ID. |
| /commerce/sales-orders/actions/place (POST) | Place orders with integrated pricing, configuration, and validation, and manage them throughout their entire lifecycle. Additionally, update an order or insert order items. |
| /commerce/quotes/actions/place (POST) | Create a quote to discover and price products and services. Additionally, insert, update, or delete a quote line item. |
| /connect/revenue-management/sales-transaction-contexts/resourceId/actions/ramp-deal-create (POST) | Create a ramp deal for a customer on a product. Sales reps can use ramp deals to provide yearly deals to a customer, resulting in long-term revenue and customer relationship. A customer can create, update, or view multiple segments of periods for their subscription term with different attributes for each segment. |
| /connect/revenue-management/sales-transaction-contexts/resourceId/actions/ramp-deal-update (POST) | Modify a ramp deal in scenarios where a segment has updates such as quantity, discount, or date change. |
| /connect/revenue-management/sales-transaction-contexts/resourceId/actions/ramp-deal-view (GET) | View a ramp deal related to a quote line item or an order item. |
| /connect/revenue-management/sales-transaction-contexts/resourceId/actions/ramp-deal-delete (POST) | Delete a ramp deal to convert a ramped product to include a single quote line item or order item. |
| /connect/rev/sales-transaction/actions/place (POST) | Create a sales transaction, such as an order or a quote, with integrated pricing and configuration. Additionally, update an order or a quote, and insert and delete order or quote line items to calculate the estimated tax. |
| /connect/rev/sales-transaction/actions/clone (POST) | Create a clone of a sales transaction, such as a quote or an order. You can also clone a quote line item or an order item record with its related records and configurations. |
| /connect/rev/sales-transaction/actions/place-supplemental-transaction (POST) | Create a supplemental order or change orders after they are submitted for processing, such as during the fulfillment process. |
| /connect/revenue/transaction-management/sales-transactions/actions/read (POST) | Retrieve sales transaction data efficiently from an initialized or a hydrated context. |
| /connect/advanced-approvals/approval-submission/preview (POST) | Preview the approval levels of a record and associated level details, approval chains, approvers, and conditions before you submit the record for an approval. |
| /revenue/transaction-management/sales-transactions/actions/get-eligible-promotions (POST) | Get eligible promotions for line items within a quote or an order. |

-   **[Resources](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/qoc_business_apis_rest_references.htm)**
    Learn more about the available Quote and Order Capture resources.
-   **[Request Bodies](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/qoc_api_requests.htm)**
    Learn more about the available API request bodies.
-   **[Response Bodies](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/qoc_api_responses.htm)**
    Learn more about the available response bodies.

#### See Also

-   [*Connect REST API Developer Guide*: Introduction](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/intro_what_is_chatter_connect.htm "Connect REST API Developer Guide: Introduction - HTML (New Window)")

## Related Topics

- /connect/revenue-management/assets/actions/amend (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_assets_amend.htm)
- /connect/revenue-management/assets/actions/cancel (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_assets_cancel.htm)
- /connect/revenue-management/assets/actions/renew (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_assets_renew.htm)
- /industries/cpq/quotes/actions/get-instant-price (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_cpq_instant_pricing.htm)
- /commerce/sales-orders/actions/place (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_place_order.htm)
- /commerce/quotes/actions/place (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_place_quote.htm)
- /connect/revenue-management/sales-transaction-contexts/resourceId/actions/ramp-deal-create (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_create_ramp_deal.htm)
- /connect/revenue-management/sales-transaction-contexts/resourceId/actions/ramp-deal-update (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_update_ramp_deal.htm)
- /connect/revenue-management/sales-transaction-contexts/resourceId/actions/ramp-deal-view (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_view_ramp_deal.htm)
- /connect/revenue-management/sales-transaction-contexts/resourceId/actions/ramp-deal-delete (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_delete_ramp_deal.htm)
