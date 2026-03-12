---
title: "Salesforce Order Management Developer Guide"
domain: order-management-developer-guide-html
topic: salesforce-order-management-developer-guide
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:20.089Z
estimatedTokens: 1325
keywords: [Salesforce, Order, Management, Developer, Customize, integrate, storefront, inventory, fulfillment, systems]
---

# Salesforce Order Management Developer Guide

> Customize Salesforce Order Management and integrate it with your storefront, inventory,
  and fulfillment systems.

# Salesforce Order Management Developer Guide

Customize Salesforce Order Management and integrate it with your storefront, inventory, and fulfillment systems.

-   **[Order Management Developer Resources](atlas.en-us.order_management_developer_guide_html.meta/order_management_developer_guide_html/order_management_developer_resources.htm)**
    In addition to the *Order Management Developer Guide*, these documentation resources can help you customize Salesforce and the Order Management app.
-   **[Order Summary Entity Relationships](atlas.en-us.order_management_developer_guide_html.meta/order_management_developer_guide_html/order_management_order_summary_erd.htm)**
    In Salesforce Order Management, each order is represented by an order summary and a number of other records linked to the order summary. This diagram illustrates some of the relationships between the OrderSummary object and other objects used in Salesforce Order Management.
-   **[Salesforce B2C Commerce Storefront Order Data Map](atlas.en-us.order_management_developer_guide_html.meta/order_management_developer_guide_html/order_management_b2c_commerce_data_map.htm)**
    These tables illustrate how data in a Salesforce B2C Commerce order packet maps to records in Salesforce Order Management. If you’re implementing your own storefront integration, this map can help you understand the order data requirements.
-   **[Importing Order Data](atlas.en-us.order_management_developer_guide_html.meta/order_management_developer_guide_html/order_management_import_data.htm)**
    Salesforce Order Management handles order data imported from your storefront. You can bulk load historical order data from a legacy system into a new Order Management org or implement a custom import process for new orders from your storefront.
-   **[Fulfillment Orders](atlas.en-us.order_management_developer_guide_html.meta/order_management_developer_guide_html/order_management_fulfillment_orders.htm)**
    A FulfillmentOrder record has a set of supporting records, including FulfillmentOrderLineItems, FulfillmentOrderItemAdjustments, and FulfillmentOrderItemTaxes. When you call an Order Management API or the flow core action to create a fulfillment order, it also creates the supporting records.
-   **[Taxation in Order Management](atlas.en-us.order_management_developer_guide_html.meta/order_management_developer_guide_html/order_management_taxation.htm)**
    Tax calculations can be complex, especially when supporting multiple currencies. Orders can have different tax types, and taxes can be affected by price adjustments.
-   **[API Framework for Exchanges with RMA Returns](atlas.en-us.order_management_developer_guide_html.meta/order_management_developer_guide_html/order_management_exchanges_playbook.htm)**
    Expand your exchange capability by increasing the ways that a customer service representative (CSR) can help your customers exchange products. With these exchange capabilities, a CSR can exchange uneven products and can exchange products in an already-fulfilled order. To configure an exchange workflow in your org, you need the SalesforceOrderManagementGrowth license.
-   **[Payment Sequencing](atlas.en-us.order_management_developer_guide_html.meta/order_management_developer_guide_html/order_management_payment_sequencing.htm)**
    When ensuring funds or refunds for orders that include multiple payment methods, you can control the sequence in which to apply the amounts to payment methods. For example, if an order is partially paid with a gift card, you can refund the gift card first, regardless of how the payment amounts were originally distributed. Or, if the order is modified between when different fulfillment groups are fulfilled, you can capture the partial payment amount from the gift card first if a future order fulfillment is canceled and preserve the full gift card amount. The default logic is based on matching amounts to OrderPaymentSummary amounts.
-   **[Salesforce Order Management Lightning Components](atlas.en-us.order_management_developer_guide_html.meta/order_management_developer_guide_html/order_management_lightning_components.htm)**
    Salesforce Order Management includes standard Lightning components.
-   **[Order on Behalf Of for External Payments](atlas.en-us.order_management_developer_guide_html.meta/order_management_developer_guide_html/order_management_oobo_external_payments.htm)**
    To support payment flows with non-tokenized payments, configure the External Payment Mode flow. This flow bypasses the tokenized payment flow and calls Payment Authorize directly.
-   **[Expand Data Sources for Return Insights](atlas.en-us.order_management_developer_guide_html.meta/order_management_developer_guide_html/order_management_product_expand_extension_return_insights.htm)**
    Extensions are a mechanism for using Apex to customize the functionality that powers B2B and B2C Commerce storefronts. The custom Apex class that implements an extension is called an extension provider. To extend or override the Product Expand API functionality, use the Commerce Order Management Product Expand Extension.
-   **[API End-of-Life Policy](atlas.en-us.order_management_developer_guide_html.meta/order_management_developer_guide_html/order_management_api_rest_eol.htm)**

## Related Topics

- Order Management Developer Resources (atlas.en-us.order_management_developer_guide_html.meta/order_management_developer_guide_html/order_management_developer_resources.htm)
- Order Summary Entity Relationships (atlas.en-us.order_management_developer_guide_html.meta/order_management_developer_guide_html/order_management_order_summary_erd.htm)
- Salesforce B2C Commerce Storefront Order Data Map (atlas.en-us.order_management_developer_guide_html.meta/order_management_developer_guide_html/order_management_b2c_commerce_data_map.htm)
- Importing Order Data (atlas.en-us.order_management_developer_guide_html.meta/order_management_developer_guide_html/order_management_import_data.htm)
- Fulfillment Orders (atlas.en-us.order_management_developer_guide_html.meta/order_management_developer_guide_html/order_management_fulfillment_orders.htm)
- Taxation in Order Management (atlas.en-us.order_management_developer_guide_html.meta/order_management_developer_guide_html/order_management_taxation.htm)
- API Framework for Exchanges with RMA Returns (atlas.en-us.order_management_developer_guide_html.meta/order_management_developer_guide_html/order_management_exchanges_playbook.htm)
- Payment Sequencing (atlas.en-us.order_management_developer_guide_html.meta/order_management_developer_guide_html/order_management_payment_sequencing.htm)
- Salesforce Order Management Lightning Components (atlas.en-us.order_management_developer_guide_html.meta/order_management_developer_guide_html/order_management_lightning_components.htm)
- Order on Behalf Of for External Payments (atlas.en-us.order_management_developer_guide_html.meta/order_management_developer_guide_html/order_management_oobo_external_payments.htm)
