---
title: "Usage Management Business APIs"
domain: revenue-cloud
topic: usage-management-business-apis
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:11.959Z
estimatedTokens: 589
keywords: [Usage, Management, Business, APIs, get, details, usage-based, product, that’s, associated, asset, order, item, quote, line, item.]
---

# Usage Management Business APIs

> Use the Usage Management Business APIs to get details of a usage-based product that’s
    associated with an asset, an order item, or a quote line item.

# Usage Management Business APIs

Use the Usage Management Business APIs to get details of a usage-based product that’s associated with an asset, an order item, or a quote line item.

This table lists the available Usage Management resources.

| Resource | Description |
| --- | --- |
| /asset-management/assets/assetId/usage-details (GET) | Get details of a usage-based product associated with an asset. This covers details of grants, resources, and configured rates for the product, including negotiated rates in case of a rate override. |
| /commerce/sales-orders/line-items/orderItemId/usage-details (GET) | Get details of a usage-based product associated with an order item. |
| /commerce/quotes/line-items/quoteLineItemId/usage-details (GET) | Get details of a usage-based product associated with a quote line item. |
| /revenue/usage-management/binding-objects/bindingObjectId/actions/usage-details (GET) | Get details of grants, resources, rates, and any configured policies for a specified binding object. |
| /revenue/usage-management/consumption/actions/trace (POST) | Get a comprehensive breakdown of overage charges and resource drawdown, enabling you to view information that's applicable to specific invoice lines. |
| /revenue/usage-management/usage-products/actions/validate (POST) | Validate cross-object relationships and business rules for usage-based products. |

-   **[Resources](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/usage_management_business_apis_resources.htm)**
    Learn more about the available Usage Management API resources.
-   **[Request Bodies](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/usage_management_business_apis_requests.htm)**
    Learn more about the available request bodies of Usage Management APIs.
-   **[Response Bodies](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/usage_management_business_apis_responses.htm)**
    Learn more about the available response bodies of Usage Management APIs.

#### See Also

-   [*Connect REST API Developer Guide*: Introduction](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/intro_what_is_chatter_connect.htm "Connect REST API Developer Guide: Introduction - HTML (New Window)")

## Related Topics

- /asset-management/assets/assetId/usage-details (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_asset_usage_details.htm)
- /commerce/sales-orders/line-items/orderItemId/usage-details (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_order_usage_details.htm)
- /commerce/quotes/line-items/quoteLineItemId/usage-details (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_quote_usage_details.htm)
- /revenue/usage-management/binding-objects/bindingObjectId/actions/usage-details (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_retrieve_binding_object_details.htm)
- /revenue/usage-management/consumption/actions/trace (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_consumption_traceabilities.htm)
- /revenue/usage-management/usage-products/actions/validate (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_usage_product_validation.htm)
- Resources (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/usage_management_business_apis_resources.htm)
- Request Bodies (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/usage_management_business_apis_requests.htm)
- Response Bodies (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/usage_management_business_apis_responses.htm)
