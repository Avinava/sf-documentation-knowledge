---
title: "Customer Asset Lifecycle Management"
domain: chatterapi
topic: customer-asset-lifecycle-management
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:21.725Z
estimatedTokens: 629
keywords: [Customer, Asset, Lifecycle, Management, resources, lifecycle-managed, data, sales, account, reps, view, Lightning, Experience, Permissions, Usage]
---

# Customer Asset Lifecycle Management

> Use Customer Asset Lifecycle Management resources to make lifecycle-managed asset data
  available for sales and account reps to view in Lightning Experience.

# Customer Asset Lifecycle Management

Use Customer Asset Lifecycle Management resources to make lifecycle-managed asset data available for sales and account reps to view in Lightning Experience.

## Permissions

To use Customer Asset Lifecycle Management APIs, you must have the **Access Customer Asset Lifecycle Management APIs** and **API Enabled** permissions and Read access to the Asset, Asset Action, Asset Action Source, and Asset State Period objects.

## Usage

-   Set the seconds in the start time of each asset state period to 00 (for example, 2020-01-17T12:30:00+00:00) and in the end time to 59 (for example, 2020-01-18T12:29:59+00:00).
-   The start date of the earliest asset state period that you create during a generate call can’t be changed after the call is completed.
-   When you change an asset, all subsequent asset state periods are deleted.
-   Customer Asset Lifecycle Management stores date and time data in Coordinated Universal Time (UTC).

## Assets and Lifecycle-Managed Assets

An asset is a lifecycle-managed asset when the HasLifecycleManagement field is set to True. Each lifecycle-managed asset must be related to an account and a product.

## Asset State Periods

An asset state period represents a product’s amount, quantity, and monthly recurring revenue for a defined period. Each asset state period must start one second after the previous period’s end date, and it must span 24-hour increments.

-   **[Generate a Lifecycle-Managed Asset](atlas.en-us.chatterapi.meta/chatterapi/features_asset_lifecycle_create_examples.htm)**
    Review examples of using Connect REST API to create an asset and start tracking its quantity, amount, and monthly recurring revenue over its lifecycle.
-   **[Change a Lifecycle-Managed Asset](atlas.en-us.chatterapi.meta/chatterapi/features_asset_lifecycle_change_examples.htm)**
    Review an example of using Connect REST API to amend an asset after a new lifecycle event.
-   **[Cancel a Lifecycle-Managed Asset](atlas.en-us.chatterapi.meta/chatterapi/features_asset_lifecycle_cancel_examples.htm)**
    Review an example of using Connect REST API to cancel an asset to reflect an early cancellation.

#### See Also

-   [*Salesforce Help*: Understand What Your Customers Have Bought by Using Customer Asset Lifecycle Management](https://help.salesforce.com/articleView?id=lifecycle_mgmt.htm&language=en_US "Salesforce Help: Understand What Your Customers Have Bought
    by Using Customer Asset Lifecycle Management - HTML (New Window)")

## Related Topics

- Generate a Lifecycle-Managed Asset (atlas.en-us.chatterapi.meta/chatterapi/features_asset_lifecycle_create_examples.htm)
- Change a Lifecycle-Managed Asset (atlas.en-us.chatterapi.meta/chatterapi/features_asset_lifecycle_change_examples.htm)
- Cancel a Lifecycle-Managed Asset (atlas.en-us.chatterapi.meta/chatterapi/features_asset_lifecycle_cancel_examples.htm)
