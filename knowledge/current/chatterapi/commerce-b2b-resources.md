---
title: "Commerce B2B Resources"
domain: chatterapi
topic: commerce-b2b-resources
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.952Z
estimatedTokens: 4929
keywords: [Commerce, B2B, Resources, Look, order, summary, including, line, items, relevant, amount, Address, Management, Cart, Checkout]
---

# Commerce B2B Resources

> Look up details about an order summary, including its line items and
      relevant order amount fields.

# Commerce B2B Resources

Get, create, update, and delete your commerce data. Work with address management, carts, checkouts, orders, products, promotions, taxes, wishlists, and search settings.

Available resources are:

## Address Management

For a detailed overview of Commerce Address Management resources and a sample use case, refer to the [Salesforce Commerce Address Management APIs](https://developer.salesforce.com/docs/commerce/salesforce-commerce/guide/b2b-d2c-comm-address-mgmt-apis.html "HTML (New Window)").

| Resource | Description |
| --- | --- |
| /commerce/webstores/webstoreId/accounts​/accountId/addresses | Create a Commerce account address for a webstore, or retrieve a collection of addresses for a webstore account. |
| /commerce/webstores/webstoreId/accounts​/accountId/addresses/addressId | Update or delete an address for a Commerce account associated with a webstore. |

## Cart

For a detailed overview of Commerce Cart resources and a sample use case, refer to the [Salesforce Commerce Cart APIs](https://developer.salesforce.com/docs/commerce/salesforce-commerce/guide/b2b-d2c-comm-cart-apis.html "HTML (New Window)").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

The Salesforce Commerce Cart APIs aren’t supported in preview mode.

| Resource | Description |
| --- | --- |
| /commerce/webstores/webstoreId/carts | Create a cart. |
| /commerce/webstores/webstoreId/carts/compact-summary | Get a compact cart summary for an existing cart. The compact cart summary includes a subset of fields from the cart summary, including the total and unique product counts. |
| /commerce/webstores/webstoreId/carts/activeCartOrId/actions/calculate | Perform a complete cart calculation based on the cart status. Possible calculations include computing prices, evaluating promotions, checking the inventory, computing shipping costs, evaluating shipping promotions, applying post shipping adjustments, and computing taxes. |
| /commerce/webstores/webstoreId/carts/activeCartOrId/actions/evaluate-shipping | Evaluate the shipping costs for a cart. |
| /commerce/webstores/webstoreId/carts/activeCartOrId/actions/evaluate-taxes | Evaluate taxes for a cart. |
| /commerce/webstores/webstoreId/carts​/cartStateOrId | Get a cart. Delete a cart. Create an active cart, if one doesn’t exist. |
| /commerce/webstores/webstoreId/carts​/cartStateOrId/actions/add-cart-to-wishlist | Copy the products from a cart to a wishlist. |
| /commerce/webstores/webstoreId/carts/cartStateorId/actions/clone | Clones an existing cart to create a secondary, read-only cart to support Pay Now functionality. Sets the guest cart status to PendingDelete in a B2B store. |
| /commerce/webstores/webstoreId/carts​/cartStateOrId/actions/make-primary | Make a secondary cart a primary cart. |
| /commerce/webstores/webstoreId/carts​/cartStateOrId/actions/preserve | Preserve cart contents when a guest logs in as an authenticated customer. |
| /commerce/webstores/webstoreId/carts​/cartStateOrId/cart-coupons | Get coupons associated with a cart, and apply a coupon code to a cart. |
| /commerce/webstores/webstoreId/carts​/cartStateOrId/cart-coupons/cartCouponId | Delete a coupon from a cart. |
| /commerce/webstores/webstoreId/carts​/cartStateOrId/messages/actions/set-visibility | Set the visibility for cart messages. |
| /commerce/webstores/webstoreId/carts​/cartStateOrId/products | Get the items in a cart, sorted by product ID. |
| /commerce/webstores/webstoreId/carts​/cartStateOrId/products/productId | Get cart items of a specific product. |
| /commerce/webstores/webstoreId/carts​/cartStateOrId/promotions | Get promotions associated with a cart. |
| /commerce/webstores/webstoreId/carts​/cartStateOrId/cart-items | Get the items in a cart. Add an item to a cart. |
| /commerce/webstores/webstoreId/carts​/cartStateOrId/cart-items/batch | Add a batch of up to 100 items to a cart. |
| /commerce/webstores/webstoreId/carts​/cartStateOrId/cart-items/cartItemId | Update or delete an item in a cart. |
| /commerce/webstores/webstoreId/carts​/cartStateOrId/cart-items/promotions | Get promotions associated with items in a cart. |
| /commerce/webstores/webstoreId/carts​/cartStateOrId/delivery-groups/actions/arrange-items | Arrange cart items into delivery groups. |
| /commerce/webstores/webstoreId/carts​/cartStateOrId/delivery-groups | Get or create a collection of delivery groups in a cart. |
| /commerce/webstores/webstoreId/carts​/cartStateOrId/delivery-groups/deliveryGroupId | Get, delete, or update a delivery group in the cart. |
| /commerce/webstores/webstoreId/carts​/cartStateOrId/cart-items/actions/apply-configuration | Applies a saved configuration context to a cart item. |

## Checkout

For a detailed overview of Commerce Cart resources and a sample use case, refer to the [Salesforce Commerce Checkout APIs](https://developer.salesforce.com/docs/commerce/salesforce-commerce/guide/b2b-d2c-comm-checkout-apis.html "HTML (New Window)").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

You can opt in to use synchronous checkout. However, if your implementation includes any customizations, such as custom calculators, thoroughly test the transition to synchronous checkout in a sandbox environment before deploying to production. To opt in for synchronous checkout, contact Salesforce Customer Support.

The Salesforce Commerce Checkout APIs aren’t supported in preview mode.

| Resource | Description |
| --- | --- |
| /commerce/webstores/webstoreId​/​​checkouts/activeOrCheckoutId | Get, delete, or update a Commerce store checkout. |
| /commerce/webstores/webstoreId/​checkouts/activeOrCheckoutId/payments | Payment for a Commerce store checkout. |
| /commerce/webstores/webstoreId/checkouts​/activeOrCheckoutId/orders | Place an order for a Commerce store checkout. |
| /commerce/webstores/webstoreId/​checkouts | Start a Commerce store checkout. |
| /commerce/webstores/webstoreId/​payments/token | Tokenize a payment for a Commerce store checkout. |
| /commerce/webstores/webstoreId/​checkouts/activeOrCheckoutId/coupons | Apply a coupon code to a checkout. |
| /commerce/webstores/webstoreId/​checkouts/activeOrCheckoutId/coupons/cartCouponId | Delete a coupon from a checkout. |
| /commerce/webstores/webstoreId/buyers/registrations | Allows a guest user to register an account at a store during checkout. |

## Context

| Resource | Description |
| --- | --- |
| /commerce/webstores/webstoreId/​application-context | Get application context information for a Commerce store. |
| /commerce/webstores/webstoreId/​session-context | Get session context information for a Commerce store. |

## Commerce Analytics

Commerce Analytics resources enable you to gain actionable insights into revenue, product performance, and customer behavior through comprehensive dashboards. See [Set Up the Commerce Analytics Dashboards](https://help.salesforce.com/s/articleView?id=commerce.comm_analytics.htm&type=5&language=en_US "HTML (New Window)").

| Resource | Description |
| --- | --- |
| /commerce/intelligence/​kpis | Retrieve a list of key performance indicators (KPIs) along with the insights each KPI supports. |
| /commerce/intelligence/​kpis/kpiName | Retrieve information about a specified key performance indicator. |

## Commerce Subscriptions

| Resource | Description |
| --- | --- |
| /commerce/webstores/webstoreId/subscriptions | Retrieve a collection of Commerce subscriptions. |
| /commerce/webstores/webstoreId/​subscriptions/actions/initiate-cancellation | Cancel an active Commerce subscription. |
| /commerce/webstores/webstoreId/​subscriptions/actions/initiate-amendment | Amend an active Commerce subscription. |
| /commerce/webstores/webstoreId/​subscriptions/actions/initiate-renewal | Renew an active Commerce subscription. |
| /commerce/webstores/webstoreId/​subscriptions/subscriptionId/saved-payment-methods | Update the saved payment method associated with a specific Commerce subscription. |
| /commerce/webstores/webstoreId/​subscriptions/subscriptionId/action-history | Retrieve the complete subscription action history for the specified subscription. |

## Externally Managed Accounts

| Resource | Description |
| --- | --- |
| /commerce/webstores/webstoreId/​external-managed-accounts | Get a collection of externally managed accounts. |

## Extensions

| Resource | Description |
| --- | --- |
| /commerce/extension/extensions | Get a collection of Commerce extensions available for your org. |
| /commerce/extension/providers | Get Commerce extension providers or register a Commerce extension provider. |
| /commerce/extension/providers/providerId | Get, delete, or modify a Commerce extension provider. |
| /commerce/extension/mappings | Get and set extension provider mappings, which associate an extension provider with a webstore. |
| /commerce/extension/mappings/mappingId | Delete, get, or modify a Commerce extension mapping. |

## Goals and Actions

| Resource | Description |
| --- | --- |
| /connect/business-objectives | Get business objective (goal) information |
| /connect/business-objectives/​recommendations | Get, create, and update recommended actions for business objectives (goals). |

## Import

| Resource | Description |
| --- | --- |
| /commerce/management/import/​category/jobs | Create a job to asynchronously import category data using a .csv file. |
| /commerce/management/import/​category/jobs/jobId | Cancel or get the status of a job to asynchronously import category data using a .csv file. |
| /commerce/management/import/product/jobs | Create a job to asynchronously import product data using a .csv file. |
| /commerce/management/import/product/jobs​/jobId | Cancel or get the status of a job to asynchronously import global product data using a .csv file. |

## My Profile

For a detailed overview of Commerce My Profile resources and a sample use case, refer to the [Salesforce Commerce My Profile API](https://developer.salesforce.com/docs/commerce/salesforce-commerce/guide/b2b-d2c-comm-myprofile-apis.html "HTML (New Window)").

| Resource | Description |
| --- | --- |
| /commerce/webstores/${webstoreId}/myprofile | Retrieve the buyer's account details. Update buyer account details. |
| /commerce/webstores/webstoreId/myprofile/actions/initOTP | Initiate the one-time password (OTP) via the specified method, such as SMS or Email. |
| /commerce/webstores/webstoreId/myprofile/actions/verify | Validate the one-time-password (OTP) provided by the buyer. |

## Order Summary

For a detailed overview of Commerce Order Summary resources and a sample use case, refer to the [Salesforce Commerce Order Summary APIs](https://developer.salesforce.com/docs/commerce/salesforce-commerce/guide/b2b-d2c-comm-order-summaries-apis.html "HTML (New Window)").

| Resource | Description |
| --- | --- |
| /commerce/webstores/webstoreId/order-summaries | Get order summaries. |
| /commerce/webstores/webstoreId/order-summaries/actions/add-order-to-cart | Add an order summary to an active or a current cart. This API is available to both registered and guest users. |
| /commerce/webstores/webstoreId/order-summaries/orderSummaryId | Get an order summary. |
| /commerce/webstores/webstoreId/order-summaries​/orderSummaryId/delivery-groups | Get order delivery groups. |
| /commerce/webstores/webstoreId/order-summaries​/orderSummaryId/items | Get order items. |
| /commerce/webstores/webstoreId/order-summaries​/orderSummaryId/shipments | Get order shipments. |
| /commerce/webstores/webstoreId/order-summaries​/async-actions/adjustment-aggregates | Submit a job to calculate adjustment aggregates for a list of order summary IDs. |
| /commerce/webstores/webstoreId/order-summaries​/actions/lookup | Look up details about an order summary, including its line items and relevant order amount fields. |
| /commerce/webstores/webstoreId/order-summaries​/actions/authorize | Authorize guest users by verifying their personally identifiable information to access the requested order summary. This API is specifically for guest users. |
| /commerce/webstores/webstoreId/shipments​/shipmentId/items | Get shipment items. |

## Composite Products, Products, Product Categories, Product Searches

| Resource | Description |
| --- | --- |
| /commerce/management/webstore/${webstoreId}/composite-products | Add a product to your store and associate it with the specified category and media records. |
| /commerce/management/webstore/${webstoreId}/composite-products/${productId} | Update an existing product record with the specified category and media records. |
| /commerce/management/webstore/${webstoreId}/composite-variations | Create variation products with media and pricing details for a given parent product. |
| /commerce/webstores/webstoreId/category-menu-items | Retrieve product category menu items for the given parent item and store. |
| /commerce/webstores/webstoreId/products | Get fields and default images for a list of products. |
| /commerce/webstores/webstoreId/products/​productId | Get a product. |
| /commerce/webstores/webstoreId/products/​productId/featured-products | Retrieve a collection of feature products for a specific product. |
| /commerce/webstores/webstoreId/products/​productId/children | Get a collection of child products related to a parent product. |
| /commerce/webstores/webstoreId/​product-categories/children | Get product categories for a specific parent product category or get all the top-level product categories for the store. |
| /commerce/webstores/webstoreId/​product-categories/productCategoryId | Get a product category. |
| /commerce/webstores/webstoreId/​product-category-path/product-categories/​productCategoryId | Get the product category path from the root category to the current category. |
| /commerce/webstores/webstoreId/search/​products | Search products by search term or category in a webstore. |
| /commerce/webstores/webstoreId/search/​product-search | Search products. |
| /commerce/webstores/webstoreId/search/​sort-rules | Get sort rules for the live index. |
| /commerce/webstores/webstoreId/search/​suggestions | Get suggestions for product searches. |

## Product Prices, Promotions

For a detailed overview of Commerce Pricing and Promotions resources and a sample use case, refer to the [Salesforce Commerce Pricing and Promotions APIs](https://developer.salesforce.com/docs/commerce/salesforce-commerce/guide/b2b-d2c-comm-pricing-promotions-apis.html "HTML (New Window)").

| Resource | Description |
| --- | --- |
| /commerce/webstores/webstoreId/pricing/​products/productId | Get the list and buyer price for a product. |
| /commerce/webstores/webstoreId/pricing/​products | Get the prices for multiple products. |
| /commerce/promotions/composite-promotions | Create a new promotion and all of the associated objects, including segments, qualifiers, targets, and translations. The API returns the ID of the created promotion. Retrieve the details of a specified promotion. |
| /commerce/promotions/actions/evaluate | Determine which promotions the customer is eligible for based on the store and buyer group, and compute the applicable price adjustments based on the coupons and the items in the cart. This API evaluates only the first 50 active manual promotions and first 50 active automatic promotions, based on priority. This API computes and returns applicable price adjustments, but it does not apply those adjustments to the webcart record. If you want to enable promotions based on shipping, contact Salesforce Customer Support. |
| /commerce/promotions/actions/evaluate-products | Determine which promotions apply to a product or set of products, and compute the applicable price adjustments. This API evaluates discrete products, including product variants and independent products but not parent products. Domain dependent and independent use cases are both supported. For example, a domain dependent call uses webstoreId and effectiveAccountId to evaluate products in a cart based on internal products or product categories. A domain independent call uses an external dataset based on SKUs or product categories. |
| /commerce/promotions/actions/decrease-use​/coupon-codes | Get coupon code redemption usage to revert a previously redeemed coupon code. |
| /commerce/promotions/actions/increase-use​/coupon-codes | Get coupon code redemption addition (increase) usage. |

## Taxes

For a detailed overview of Commerce Taxes resources and a sample use case, refer to the [Salesforce Commerce Tax APIs](https://developer.salesforce.com/docs/commerce/salesforce-commerce/guide/b2b-d2c-comm-tax-apis.html "HTML (New Window)").

| Resource | Description |
| --- | --- |
| /commerce/webstores/webstoreId​/taxes/actions/calculate-taxes | Calculate taxes for a Commerce webstore. |
| /commerce/webstores/webstoreId​/taxes/products/productId | Get taxes for a product based on the store, state, country, and buyer account or guest profile ID. |

## Wishlists

For a detailed overview of Commerce Wishlists resources and a sample use case, refer to the [Salesforce Commerce Wishlists APIs](https://developer.salesforce.com/docs/commerce/salesforce-commerce/guide/b2b-d2c-comm-wishlists-apis.html "HTML (New Window)").

| Resource | Description |
| --- | --- |
| /commerce/webstores/webstoreId/wishlists | Get wishlists and create a wishlist. |
| /commerce/webstores/webstoreId/wishlists/​wishlistId | Get, update the name of, and delete a wishlist. |
| /commerce/webstores/webstoreId/wishlists/​wishlistId/actions/add-wishlist-to-cart | Add a wishlist to a cart. |
| /commerce/webstores/webstoreId/wishlists/​wishlistId/wishlist-items | Get wishlist items or add items to the wishlist. |
| /commerce/webstores/webstoreId/wishlists/​wishlistId/wishlist-items/wishlistItemId | Delete a wishlist item. |

## Search Settings

For a detailed overview of Commerce Search Settings resources and a sample use case, refer to the [Salesforce Commerce Search Settings APIs](https://developer.salesforce.com/docs/commerce/salesforce-commerce/guide/b2b-d2c-comm-search-settings-apis.html "HTML (New Window)").

| Resource | Description |
| --- | --- |
| /commerce/management/webstores/​webstoreId/search/attribute-settings/​facetable-fields | Get and update facetable attributes. |
| /commerce/management/webstores/​webstoreId/search/attribute-settings/​searchable-fields | Get and update searchable attributes. |
| /commerce/management/webstores/webstoreId/search/​boost-bury-rules | Get all boost and bury rules for a webstore. Create a boost and bury rule. You can create up to 25 boost and bury rules for a webstore, and each boost and bury rule supports a limit of 100 products. You can use up to 500 unique products across all boost and bury rules. |
| /commerce/management/webstores/webstoreId/search/​boost-bury-rules​/ruleId | Get a boost and bury rule. Delete a boost and bury rule. |
| /commerce/management/webstores/​webstoreId/search/indexes | Get indexes and create an index of a product catalog. |
| /commerce/management/webstores/​webstoreId/search/indexes/indexId | Get a search index. |
| /commerce/management/webstores/​webstoreId/search/index-logs | Get search index logs for a webstore. |
| /commerce/management/webstores/​webstoreId/search/product-settings | Get and update product search settings. |
| /commerce/management/webstores/webstoreId/search/​results-rules | Create or retrieve search include rules for a webstore. You can create up to 25 rules for a webstore. Search include rules are not configurable in the UI. |
| /commerce/management/webstores/​webstoreId/search/sort-rules | Create or retrieve sort rules for a webstore. |

## Related Topics

- /commerce/webstores/webstoreId/accounts​/accountId/addresses (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_accounts_addresses.htm)
- /commerce/webstores/webstoreId/accounts​/accountId/addresses/addressId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_accounts_addresses_address.htm)
- /commerce/webstores/webstoreId/carts/activeCartOrId/actions/calculate (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_cart_calculate.htm)
- /commerce/webstores/webstoreId/carts/activeCartOrId/actions/evaluate-shipping (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_cart_evaluate_shipping.htm)
- /commerce/webstores/webstoreId/carts/activeCartOrId/actions/evaluate-taxes (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_cart_evaluate_taxes.htm)
- /commerce/webstores/webstoreId/carts​/cartStateOrId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_cart.htm)
- /commerce/webstores/webstoreId/carts​/cartStateOrId/actions/add-cart-to-wishlist (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_cart_add_to_wishlist.htm)
- /commerce/webstores/webstoreId/carts/cartStateorId/actions/clone (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_cart_add_to_wishlist.htm)
- /commerce/webstores/webstoreId/carts​/cartStateOrId/actions/make-primary (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_cart_make_primary.htm)
- /commerce/webstores/webstoreId/carts​/cartStateOrId/actions/preserve (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_cart_preserve.htm)
