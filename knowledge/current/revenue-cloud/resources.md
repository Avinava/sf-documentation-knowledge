---
title: "Resources"
domain: revenue-cloud
topic: resources
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-05-10T00:39:07.420Z
estimatedTokens: 1416
keywords: [Resources, Salesforce, Pricing, Product, Catalog, Management, API, Configurator, Discovery, Quote, Order, Capture, Rate]
---

> Learn more about the available Quote and Order Capture resources.

# Resources

Learn more about the available Quote and Order Capture resources.

-   **[Asset Amendment (POST)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_assets_amend.htm)**
    Initiate and execute the amendment of a quote or an order.
-   **[Asset Cancellation (POST)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_assets_cancel.htm)**
    Initiate and execute the cancellation of an asset.
-   **[Asset Renewal (POST)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_assets_renew.htm)**
    Initiate and execute the renewal of an asset.
-   **[Clone Sales Transaction (POST)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_clone_sales_transaction.htm)**
    Create a clone of a sales transaction, such as a quote or an order. You can also clone a quote line item or an order item record with its related records and configurations.
-   **[Create Promotions (GET, POST, PUT)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_create_promotions.htm)**
    Get rewards based on a product selling model template.
-   **[Get Eligible Promotions (POST)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_get_eligible_promotions.htm)**
    Get eligible promotions for line items within a quote or an order.
-   **[Initiate Downgrade (POST)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_initiate_downgrade.htm)**
    Move to a lower-tier or lower-value product. The change is tracked as a downgrade request with linked asset actions and quote or order line linkage for reporting and auditing. This API creates an amendment quote and order with downgrade-specific order actions and quote action subtypes.
-   **[Initiate Swap (POST)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_initiate_swap.htm)**
    Exchange one product for another of equivalent or different value. The change is tracked as a swap request with linked asset actions and a net-zero order total where applicable. The API creates an amendment quote and order with order actions and quote action subtypes.
-   **[Initiate Upgrade (POST)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_initiate_upgrade.htm)**
    Move a lower-tier product to a higher-tier product. The change is tracked as an upgrade request with linked asset actions and quote or order line linkage for reporting and auditing. This API creates an amendment quote and order with order actions and quote action subtypes.
-   **[Instant Pricing (POST)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_cpq_instant_pricing.htm)**
    Fetch instant pricing data on the quote or order line data grid and associated summary component. This API offers capabilities to either create a context or update the existing one based on the provided context ID.
-   **[Place Order (POST)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_place_order.htm)**
    Place orders with integrated pricing, configuration, and validation, and manage them throughout their entire lifecycle. Additionally, update an order or insert order items.
-   **[Place Quote (POST)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_place_quote.htm)**
    Create a quote to discover and price products and services. Additionally, insert, update, or delete a quote line item.
-   **[Place Sales Transaction (POST)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_place_sales_transaction.htm)**
    Create a sales transaction, such as an order or a quote, with integrated pricing and configuration. Also, update an order or a quote, and insert and delete order or quote line items to calculate the estimated tax.
-   **[Place Supplemental Transaction (POST)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_place_supplemental_transaction.htm)**
    Create a supplemental order or change orders after they are submitted for processing, such as during the fulfillment process.
-   **[Preview Approval (POST)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_preview_approvals.htm)**
    Preview the approval levels of a record and associated level details, approval chains, approvers, and conditions before you submit the record for an approval.
-   **[Read Sales Transaction (POST)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_read_sales_transaction.htm)**
    Retrieve sales transaction data efficiently from an initialized or a hydrated context.
-   **[Retrieve Sales Transaction API Errors (GET)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_retrieve_place_sales_transaction_error.htm)**
    Retrieve any asynchronous error details associated with a sales transaction request.
-   **[Create Ramp Deal (POST)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_create_ramp_deal.htm)**
    Create a ramp deal for a customer on a product. Sales reps can use ramp deals to provide yearly deals to a customer, resulting in long-term revenue and customer relationship. A customer can create, update, or view multiple segments of periods for their subscription term with different attributes for each segment.
-   **[Delete Ramp Deal (POST)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_delete_ramp_deal.htm)**
    Delete a ramp deal to convert a ramped product to include a single quote line item or order item.
-   **[Update Ramp Deal (POST)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_update_ramp_deal.htm)**
    Modify a ramp deal in scenarios where a segment has updates such as quantity, discount, or date change.
-   **[View Ramp Deal (GET)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_view_ramp_deal.htm)**
    View a ramp deal related to a quote line item or an order item.

## Related Topics

- PBE Derived Pricing (POST) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_pbe_source_pricing_derived_product.htm)
- Price Context (POST) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_price_context.htm)
- Pricing (POST) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_headless.htm)
- API Execution Logs (GET) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_execution_logs.htm)
- Pricing Process Execution (GET) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_pricing_process_execution.htm)
- Pricing Process Execution for Line Items (GET) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_process_execution_line_item_details.htm)
- Pricing Data Sync (GET) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_pricing_data_sync.htm)
- Pricing Recipe (GET) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_pricing_recipe.htm)
- Pricing Recipe Mapping (POST) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_price_recipe_mapping.htm)
- Pricing Versioned Revision Details (POST) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_versioned_revise_details.htm)
