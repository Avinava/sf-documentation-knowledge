---
title: "Transaction Management Standard Invocable Actions"
domain: revenue-cloud
topic: transaction-management-standard-invocable-actions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:10.494Z
estimatedTokens: 947
keywords: [Transaction, Management, Standard, Invocable, Actions]
---

# Transaction Management Standard Invocable Actions

> Learn more about the standard invocable actions available with Transaction
    Management.

# Transaction Management Standard Invocable Actions

Learn more about the standard invocable actions available with Transaction Management.

-   **[Create Contract Action](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/actions_obj_create_contract_from_quote.htm)**
    Create a contract from a specific quote record.
-   **[Create or Update Asset From Order Action](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/actions_obj_create_update_asset_from_order.htm)**
    Create an asset for each order item in the specified order. New assets are created for a new order. Modify existing assets for change order requests, such as a renewal or a cancellation.
-   **[Create or Update Asset From Order Item Action](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/actions_obj_create_update_asset_from_order_item.htm)**
    Create assets from individual order items within an order. Track assets after the individual line items of an order reach a certain stage in their lifecycle, such as submitted, fulfilled, or provisioned. If the order item is part of a renewal, an amendment, or a cancellation, existing assets are changed.
-   **[Create Order From Quote Action](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/actions_obj_create_order_from_quote.htm)**
    Create an order from a quote record.
-   **[Create Orders From Quote Action](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/actions_obj_create_orders_from_quote.htm)**
    Create multiple orders from a single quote instead of a single order, ensuring easier order management and fulfillment operations.
-   **[Get Renewable Assets Summary Action](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/actions_obj_get_renewable_assets_summary.htm)**
    Retrieve details about renewable assets in a given order. You can use this information to create renewal opportunities.
-   **[Initiate Amendment Action](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/actions_obj_amend_assets.htm)**
    Initiate and execute the amendment of an asset.
-   **[Initiate Cancellation Action](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/actions_obj_cancel_assets.htm)**
    Initiate and execute the cancellation of an asset.
-   **[Initiate Renewal Action](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/actions_obj_renew_assets.htm)**
    Initiate and execute the renewal of an asset.
-   **[Initiate Rollback on Last Action](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/actions_obj_initiate_rollback_last_action.htm)**
    Initiate the reversal of the last action on an asset to rectify any transactional errors or to meet changing business requirements.
-   **[Initiate Transfer Action](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/actions_obj_initiate_transfer.htm)**
    Transfer an asset or multiple assets from one account to another.

#### See Also

-   [*Actions Developer Guide*: Overview](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_action.meta/api_action/actions_intro_overview.htm "Actions Developer Guide: Overview - HTML (New Window)")

-   [*REST API Developer Guide*: Invocable Actions Standard](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_actions_invocable_standard.htm "REST API Developer Guide: Invocable Actions Standard - HTML (New Window)")

## Related Topics

- Create Contract Action (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/actions_obj_create_contract_from_quote.htm)
- Create or Update Asset From Order Action (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/actions_obj_create_update_asset_from_order.htm)
- Create or Update Asset From Order Item Action (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/actions_obj_create_update_asset_from_order_item.htm)
- Create Order From Quote Action (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/actions_obj_create_order_from_quote.htm)
- Create Orders From Quote Action (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/actions_obj_create_orders_from_quote.htm)
- Get Renewable Assets Summary Action (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/actions_obj_get_renewable_assets_summary.htm)
- Initiate Amendment Action (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/actions_obj_amend_assets.htm)
- Initiate Cancellation Action (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/actions_obj_cancel_assets.htm)
- Initiate Renewal Action (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/actions_obj_renew_assets.htm)
- Initiate Rollback on Last Action (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/actions_obj_initiate_rollback_last_action.htm)
