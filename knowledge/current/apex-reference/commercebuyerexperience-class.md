---
title: "CommerceBuyerExperience Class"
domain: apex-reference
topic: commercebuyerexperience-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:18.201Z
estimatedTokens: 34548
namespace: ConnectApi
keywords: [CommerceBuyerExperience, Add, order, cart, webstore, summary, addOrderToCart, webstoreId, orderSummaryId, orderToCartInput, API, Version, Requires, Chatter, effectiveAccountId]
---

# CommerceBuyerExperience Class

> Add an order to a cart using a webstore order
    summary.

**Namespace:** `ConnectApi`

# CommerceBuyerExperience Class

Create, delete, or get commerce addresses. Get order delivery group, order item, order shipments, shipment items, and order summaries. Get adjustments for order items and order summaries.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## CommerceBuyerExperience Methods

These methods are for CommerceBuyerExperience. All methods are static.

-   **[addOrderToCart(webstoreId, orderSummaryId, orderToCartInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm#apex_ConnectAPI_CommerceBuyerExperience_addOrderToCart_1)**
    Add an order to a cart using a webstore order summary.
-   **[addOrderToCart(webstoreId, orderSummaryId, orderToCartInput, effectiveAccountId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm#apex_ConnectAPI_CommerceBuyerExperience_addOrderToCart_2)**
    Add an order to a cart for a specific account using a webstore order summary.
-   **[calculateAdjustmentAggregates(webstoreId, orderSummaryIds)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm#apex_ConnectAPI_CommerceBuyerExperience_calculateAdjustmentAggregates_1)**
    Submit a job to calculate adjustment aggregates for a list of order summary IDs.
-   **[createCommerceAccountAddress(webstoreId, accountId, addressInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm#apex_ConnectAPI_CommerceBuyerExperience_createCommerceAccountAddress_1)**
    Create a Commerce account address for a webstore account.
-   **[deleteCommerceAccountAddress(webstoreId, accountId, addressId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm#apex_ConnectAPI_CommerceBuyerExperience_deleteCommerceAccountAddress_1)**
    Delete a Commerce account address for a webstore.
-   **[getCommerceAccountAddress(webstoreId, accountId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm#apex_ConnectAPI_CommerceBuyerExperience_getCommerceAccountAddress_1)**
    Get a Commerce account address for a webstore.
-   **[getCommerceAccountAddress(webstoreId, accountId, defaultOnly)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm#apex_ConnectAPI_CommerceBuyerExperience_getCommerceAccountAddress_2)**
    Get Commerce account addresses for a webstore and account.
-   **[getCommerceAccountAddress(webstoreId, accountId, defaultOnly, addressType, fields, pageToken, pageSize, sortOrder)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm#apex_ConnectAPI_CommerceBuyerExperience_getCommerceAccountAddress_3)**
    Get Commerce account addresses for a webstore and account.
-   **[getCommerceAccountAddress(webstoreId, accountId, addressType, excludeUnsupportedCountries)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm#apex_ConnectAPI_CommerceBuyerExperience_getCommerceAccountAddress_4)**
    Get Commerce account addresses for a webstore and account.
-   **[getCommerceAccountAddress(webstoreId, accountId, defaultOnly, addressType, excludeUnsupportedCountries)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm#apex_ConnectAPI_CommerceBuyerExperience_getCommerceAccountAddress_5)**
    Get Commerce account addresses for a webstore and account.
-   **[getCommerceAccountAddress(webstoreId, accountId, defaultOnly, addressType, excludeUnsupportedCountries, fields, pageToken, pageSize, sortOrder)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm#apex_ConnectAPI_CommerceBuyerExperience_getCommerceAccountAddress_6)**
    Get Commerce account addresses for a webstore and account.
-   **[getOrderDeliveryGroupSummaries(webstoreId, effectiveAccountId, orderSummaryId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm#apex_ConnectAPI_CommerceBuyerExperience_getOrderDeliveryGroupSummaries_1)**
    Get order delivery group summaries.
-   **[getOrderDeliveryGroupSummaries(webstoreId, effectiveAccountId, orderSummaryId, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm#apex_ConnectAPI_CommerceBuyerExperience_getOrderDeliveryGroupSummaries_2)**
    Get order delivery group summaries.
-   **[getOrderDeliveryGroupSummaries(webstoreId, effectiveAccountId, orderSummaryId, pageParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm#apex_ConnectAPI_CommerceBuyerExperience_getOrderDeliveryGroupSummaries_3)**
    Get a page of order delivery group summaries.
-   **[getOrderDeliveryGroupSummaries(webstoreId, effectiveAccountId, orderSummaryId, fields)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm#apex_ConnectAPI_CommerceBuyerExperience_getOrderDeliveryGroupSummaries_4)**
    Get order delivery group summaries with specific fields.
-   **[getOrderDeliveryGroupSummaries(webstoreId, effectiveAccountId, orderSummaryId, pageParam, fields)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm#apex_ConnectAPI_CommerceBuyerExperience_getOrderDeliveryGroupSummaries_5)**
    Get a page of order delivery group summaries with specific fields.
-   **[getOrderDeliveryGroupSummaries(webstoreId, effectiveAccountId, orderSummaryId, fields, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm#apex_ConnectAPI_CommerceBuyerExperience_getOrderDeliveryGroupSummaries_6)**
    Get order delivery group summaries with specific fields.
-   **[getOrderDeliveryGroupSummaries(webstoreId, effectiveAccountId, orderSummaryId, fields, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm#apex_ConnectAPI_CommerceBuyerExperience_getOrderDeliveryGroupSummaries_7)**
    Get a sorted list of order delivery group summaries with specific fields.
-   **[getOrderDeliveryGroupSummaries(webstoreId, effectiveAccountId, orderSummaryId, fields, pageSize, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm#apex_ConnectAPI_CommerceBuyerExperience_getOrderDeliveryGroupSummaries_8)**
    Get a sorted list of order delivery group summaries with specific fields.
-   **[getOrderItemSummaries(webstoreId, effectiveAccountId, orderSummaryId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm#apex_ConnectAPI_CommerceBuyerExperience_getOrderItemSummaries_1)**
    Get order item summaries.
-   **[getOrderItemSummaries(webstoreId, effectiveAccountId, orderSummaryId, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm#apex_ConnectAPI_CommerceBuyerExperience_getOrderItemSummaries_2)**
    Get order item summaries.
-   **[getOrderItemSummaries(webstoreId, effectiveAccountId, orderSummaryId, orderDeliveryGroupSummaryId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm#apex_ConnectAPI_CommerceBuyerExperience_getOrderItemSummaries_3)**
    Get order item summaries for a delivery group summary.
-   **[getOrderItemSummaries(webstoreId, effectiveAccountId, orderSummaryId, orderDeliveryGroupSummaryId, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm#apex_ConnectAPI_CommerceBuyerExperience_getOrderItemSummaries_4)**
    Get order item summaries for a delivery group summary.
-   **[getOrderItemSummaries(webstoreId, effectiveAccountId, orderSummaryId, orderDeliveryGroupSummaryId, pageParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm#apex_ConnectAPI_CommerceBuyerExperience_getOrderItemSummaries_5)**
    Get a page of order item summaries for a delivery group summary.
-   **[getOrderItemSummaries(webstoreId, effectiveAccountId, orderSummaryId, orderDeliveryGroupSummaryId, fields)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm#apex_ConnectAPI_CommerceBuyerExperience_getOrderItemSummaries_6)**
    Get order item summaries for a delivery group summary with specific fields.
-   **[getOrderItemSummaries(webstoreId, effectiveAccountId, orderSummaryId, orderDeliveryGroupSummaryId, fields, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm#apex_ConnectAPI_CommerceBuyerExperience_getOrderItemSummaries_7)**
    Get order item summaries for a delivery group summary with specific fields.
-   **[getOrderItemSummaries(webstoreId, effectiveAccountId, orderSummaryId, orderDeliveryGroupSummaryId, fields, pageParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm#apex_ConnectAPI_CommerceBuyerExperience_getOrderItemSummaries_8)**
    Get a page of order item summaries for a delivery group summary with specific fields.
-   **[getOrderItemSummaries(webstoreId, effectiveAccountId, orderSummaryId, orderDeliveryGroupSummaryId, fields, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm#apex_ConnectAPI_CommerceBuyerExperience_getOrderItemSummaries_9)**
    Get a sorted list of order item summaries for a delivery group summary with specific fields.
-   **[getOrderItemSummaries(webstoreId, effectiveAccountId, orderSummaryId, orderDeliveryGroupSummaryId, fields, pageSize, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm#apex_ConnectAPI_CommerceBuyerExperience_getOrderItemSummaries_10)**
    Get a sorted page of order item summaries for a delivery group summary with specific fields.
-   **[getOrderItemSummaries(webstoreId, effectiveAccountId, orderSummaryId, orderDeliveryGroupSummaryId, fields, pageParam, pageSize, sortParam, includeAdjustmentDetails)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm#apex_ConnectAPI_CommerceBuyerExperience_getOrderItemSummaries_11)**
    Get a sorted page of order item summaries for a delivery group summary with specific fields and include adjustment details.
-   **[getOrderItemSummaryAdjustments(webstoreId, orderSummaryId, orderItemSummaryAdjustmentCollectionInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm#apex_ConnectAPI_CommerceBuyerExperience_getOrderItemSummaryAdjustments_1)**
    Get adjustments for order items.
-   **[getOrderItemSummaryAdjustments(webstoreId, orderSummaryId, orderItemSummaryAdjustmentCollectionInput, effectiveAccountId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm#apex_ConnectAPI_CommerceBuyerExperience_getOrderItemSummaryAdjustments_2)**
    Get adjustments for order items.
-   **[getOrderShipmentItems(webstoreId, shipmentId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm#apex_ConnectAPI_CommerceBuyerExperience_getOrderShipmentItems_1)**
    Get order shipment items.
-   **[getOrderShipmentItems(webstoreId, shipmentId, effectiveAccountId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm#apex_ConnectAPI_CommerceBuyerExperience_getOrderShipmentItems_2)**
    Get order shipment items.
-   **[getOrderShipmentItems(webstoreId, shipmentId, effectiveAccountId, fields)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm#apex_ConnectAPI_CommerceBuyerExperience_getOrderShipmentItems_3)**
    Get order shipment items with specific fields.
-   **[getOrderShipmentItems(webstoreId, shipmentId, effectiveAccountId, fields, pageToken, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm#apex_ConnectAPI_CommerceBuyerExperience_getOrderShipmentItems_4)**
    Get a page of order shipment items with specific fields.
-   **[getOrderShipmentItems(webstoreId, shipmentId, effectiveAccountId, fields, pageToken, pageSize, sortOrder)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm#apex_ConnectAPI_CommerceBuyerExperience_getOrderShipmentItems_5)**
    Get a sorted page of order shipment items.
-   **[getOrderShipments(webstoreId, orderSummaryId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm#apex_ConnectAPI_CommerceBuyerExperience_getOrderShipments_1)**
    Get order shipments.
-   **[getOrderShipments(webstoreId, orderSummaryId, effectiveAccountId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm#apex_ConnectAPI_CommerceBuyerExperience_getOrderShipments_2)**
    Get order shipments.
-   **[getOrderShipments(webstoreId, orderSummaryId, effectiveAccountId, fields)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm#apex_ConnectAPI_CommerceBuyerExperience_getOrderShipments_3)**
    Get order shipments with specific fields.
-   **[getOrderShipments(webstoreId, orderSummaryId, effectiveAccountId, fields, pageSize, pageToken)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm#apex_ConnectAPI_CommerceBuyerExperience_getOrderShipments_4)**
    Get a page of order shipments with specific fields.
-   **[getOrderShipments(webstoreId, orderSummaryId, effectiveAccountId, fields, pageSize, pageToken, sortOrder)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm#apex_ConnectAPI_CommerceBuyerExperience_getOrderShipments_5)**
    Get a sorted page of order shipments with specific fields.
-   **[getOrderSummaries(webstoreId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm#apex_ConnectAPI_CommerceBuyerExperience_getOrderSummaries_1)**
    Get order summaries.
-   **[getOrderSummaries(webstoreId, effectiveAccountId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm#apex_ConnectAPI_CommerceBuyerExperience_getOrderSummaries_2)**
    Get order summaries.
-   **[getOrderSummaries(webstoreId, effectiveAccountId, fields)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm#apex_ConnectAPI_CommerceBuyerExperience_getOrderSummaries_3)**
    Get order summaries with specific fields.
-   **[getOrderSummaries(webstoreId, effectiveAccountId, fields, pageSize, pageToken)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm#apex_ConnectAPI_CommerceBuyerExperience_getOrderSummaries_4)**
    Get a page of order summaries with specific fields.
-   **[getOrderSummaries(webstoreId, effectiveAccountId, fields, pageSize, pageToken, sortOrder)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm#apex_ConnectAPI_CommerceBuyerExperience_getOrderSummaries_5)**
    Get a sorted page of order summaries with specific fields.
-   **[getOrderSummaries(webstoreId, effectiveAccountId, fields, pageSize, pageToken, sortOrder, earliestDate, latestDate)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm#apex_ConnectAPI_CommerceBuyerExperience_getOrderSummaries_6)**
    Get a sorted page of order summaries with specific fields within a specific date range.
-   **[getOrderSummaries(webstoreId, effectiveAccountId, fields, pageSize, pageToken, sortOrder, earliestDate, latestDate, ownerScoped)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm#apex_ConnectAPI_CommerceBuyerExperience_getOrderSummaries_7)**
    Get a sorted page of order summaries with specific fields within a specific date range and scoped to orders owned by the context user.
-   **[getOrderSummaries(webstoreId, effectiveAccountId, fields, pageSize, pageToken, sortOrder, earliestDate, latestDate, ownerScoped, includeAdjustmentDetails)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm#apex_ConnectAPI_CommerceBuyerExperience_getOrderSummaries_8)**
    Get a sorted page of order summaries with specific fields within a specific date range and scoped to orders owned by the context user.
-   **[getOrderSummary(webstoreId, orderSummaryId, effectiveAccountId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm#apex_ConnectAPI_CommerceBuyerExperience_getOrderSummary_1)**
    Get an order summary.
-   **[getOrderSummary(webstoreId, orderSummaryId, effectiveAccountId, fields)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm#apex_ConnectAPI_CommerceBuyerExperience_getOrderSummary_2)**
    Get an order summary with fields.
-   **[getOrderSummary(webstoreId, orderSummaryId, effectiveAccountId, fields, includeAdjustmentDetails)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm#apex_ConnectAPI_CommerceBuyerExperience_getOrderSummary_3)**
    Get an order summary with fields and include adjustment details.
-   **[getOrderSummaryAdjustments(webstoreId, orderSummaryId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm#apex_ConnectAPI_CommerceBuyerExperience_getOrderSummaryAdjustments_1)**
    Get adjustments for an order summary.
-   **[getOrderSummaryAdjustments(webstoreId, orderSummaryId, effectiveAccountId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm#apex_ConnectAPI_CommerceBuyerExperience_getOrderSummaryAdjustments_2)**
    Get adjustments for an order summary.
-   **[lookupOrderSummary(webstoreId, effectiveAccountId, fields, excludeLineItems, excludeDeliveryGroups, excludeAdjustmentAggregates, excludeAdjustments, deliveryGroupId, orderSummaryLookupInput) (Developer Preview)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm#apex_ConnectAPI_CommerceBuyerExperience_lookupOrderSummary_3)**
    Look up details about an order summary for a guest shopper or a registered buyer using the effective account ID, requested fields, line items, delivery groups, adjustments aggregates, and adjustments.
-   **[lookupOrderSummary(webstoreId, effectiveAccountId, fields, orderSummaryLookupInput) (Developer Preview)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm#apex_ConnectAPI_CommerceBuyerExperience_lookupOrderSummary_2)**
    Look up details about an order summary for a guest shopper or a registered buyer using the effective account ID and requested fields.
-   **[lookupOrderSummary(webstoreId, effectiveAccountId, orderSummaryLookupInput) (Developer Preview)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm#apex_ConnectAPI_CommerceBuyerExperience_lookupOrderSummary_1)**
    Look up details about an order summary for a guest shopper or a registered buyer using the effective account ID.
-   **[updateCommerceAccountAddress(webstoreId, accountId, addressId, addressInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm#apex_ConnectAPI_CommerceBuyerExperience_updateCommerceAccountAddress_2)**
    Update a Commerce account address for a webstore.

### addOrderToCart(webstoreId, orderSummaryId, orderToCartInput)

Add an order to a cart using a webstore order summary.

#### API Version

57.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderToCartResult addOrderToCart(String webstoreId, String orderSummaryId, ConnectApi.OrderToCartInput orderToCartInput)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

orderSummaryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the order summary.

orderToCartInput

Type: [ConnectApi.OrderToCartInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_order_to_cart.htm "Input for action adding an order to a cart.")

Input value indicating which cart the order should be added to.

#### Return Value

Type: [ConnectApi.OrderToCartResult](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_to_cart_result.htm "Result of action adding an order to a cart.")

### addOrderToCart(webstoreId, orderSummaryId, orderToCartInput, effectiveAccountId)

Add an order to a cart for a specific account using a webstore order summary.

#### API Version

57.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderToCartResult addOrderToCart(String webstoreId, String orderSummaryId, ConnectApi.OrderToCartInput orderToCartInput, String effectiveAccountId)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

orderSummaryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the order summary.

orderToCartInput

Type: [ConnectApi.OrderToCartInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_order_to_cart.htm "Input for action adding an order to a cart.")

Input value indicating which cart the order should be added to.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account for which the request is made. If null, defaults to the account ID for the context user.

#### Return Value

Type: [ConnectApi.OrderToCartResult](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_to_cart_result.htm "Result of action adding an order to a cart.")

### calculateAdjustmentAggregates(webstoreId, orderSummaryIds)

Submit a job to calculate adjustment aggregates for a list of order summary IDs.

#### API Version

55.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderSummaryAdjustmentAggregatesAsyncOutput calculateAdjustmentAggregates(String webstoreId, ConnectApi.OrderSummaryAdjustmentAggregatesAsyncInput orderSummaryIds)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

orderSummaryIds

Type: [ConnectApi.OrderSummaryAdjustmentAggregatesAsyncInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_order_summary_adjustment_aggregates_async.htm "Order summary IDs for calculating adjustment aggregates.")

A ConnectApi.OrderSummaryAdjustmentAggregatesAsyncInput class with a list of order summary IDs.

#### Return Value

Type: [ConnectApi.OrderSummaryAdjustmentAggregatesAsyncOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_summary_adjustment_aggregates_async_output.htm "Async adjustment aggregates output.")

### createCommerceAccountAddress(webstoreId, accountId, addressInput)

Create a Commerce account address for a webstore account.

#### API Version

54.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CommerceAddressOutput createCommerceAccountAddress(String webstoreId, String accountId, ConnectApi.commerceAddressInput addressInput)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

accountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account.

addressInput

Type: [ConnectApi.commerceAddressInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_commerce_address.htm "Commerce address input.")

Information about the address you want to create.

#### Return Value

Type: [ConnectApi.CommerceAddressOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_commerce_address_output.htm "Address for a Commerce account.")

### deleteCommerceAccountAddress(webstoreId, accountId, addressId)

Delete a Commerce account address for a webstore.

#### API Version

54.0

#### Requires Chatter

No

#### Signature

public static Void deleteCommerceAccountAddress(String webstoreId, String accountId, String addressId)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

accountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account.

addressId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the address.

#### Return Value

Type: Void

### getCommerceAccountAddress(webstoreId, accountId)

Get a Commerce account address for a webstore.

#### API Version

54.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CommerceAddressCollection getCommerceAccountAddress(String webstoreId, String accountId)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

accountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account.

#### Return Value

Type: [ConnectApi.CommerceAddressCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_commerce_address_collection.htm "A collection of Commerce addresses.")

### getCommerceAccountAddress(webstoreId, accountId, defaultOnly)

Get Commerce account addresses for a webstore and account.

#### API Version

You can get the default address by itself, or you can get all of the addresses for the account.

54.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CommerceAddressCollection getCommerceAccountAddress(String webstoreId, String accountId, Boolean defaultOnly)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

accountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account.

defaultOnly

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Indicate if you only want the default address (true) or all addresses for the account (false). The default value is false.

#### Return Value

Type: [ConnectApi.CommerceAddressCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_commerce_address_collection.htm "A collection of Commerce addresses.")

### getCommerceAccountAddress(webstoreId, accountId, defaultOnly, addressType, fields, pageToken, pageSize, sortOrder)

Get Commerce account addresses for a webstore and account.

#### API Version

54.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CommerceAddressCollection getCommerceAccountAddress(String webstoreId, String accountId, Boolean defaultOnly, List<String\> addressType, List<String\> fields, String pageToken, Integer pageSize, ConnectApi.CommerceAddressSort sortOrder)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

accountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account.

defaultOnly

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Indicate if you want only the default address (true) or all addresses for the account (false). The default value is false.

addressType

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

Type of address, for example, Billing or Shipping.

fields

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

A list of custom fields for the address.

pageToken

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as currentPageToken or nextPageToken. If you pass in null, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

sortOrder

Type: [ConnectApi.CommerceAddressSort](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#ConnectCommerceAddressSortOrderEnum)

Sort order for Commerce addresses.

-   CreatedDateAsc—Sort in ascending order of created date.
-   CreatedDateDesc—Sort in descending order of created date.
-   NameAsc—Sort in ascending order of name.
-   NameDesc—Sort in descending order of name.

#### Return Value

Type: [ConnectApi.CommerceAddressCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_commerce_address_collection.htm "A collection of Commerce addresses.")

### getCommerceAccountAddress(webstoreId, accountId, addressType, excludeUnsupportedCountries)

Get Commerce account addresses for a webstore and account.

#### API Version

57.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CommerceAddressCollection getCommerceAccountAddress(String webstoreId, String accountId, List<String\> addressType, Boolean excludeUnsupportedCountries)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

accountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account.

addressType

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

Type of address, for example, Billing or Shipping.

excludeUnsupportedCountries

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Indicate if you want to retrieve all addresses (false) or only addresses of type Shipping that are in countries included in the store’s shipToCountries list (true). The default value is false.

#### Return Value

Type: [ConnectApi.CommerceAddressCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_commerce_address_collection.htm "A collection of Commerce addresses.")

### getCommerceAccountAddress(webstoreId, accountId, defaultOnly, addressType, excludeUnsupportedCountries)

Get Commerce account addresses for a webstore and account.

#### API Version

57.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CommerceAddressCollection getCommerceAccountAddress(String webstoreId, String accountId, Boolean defaultOnly, List<String\> addressType, Boolean excludeUnsupportedCountries)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

accountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account.

defaultOnly

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Indicate if you want only the default address (true) or all addresses for the account (false). The default value is false.

addressType

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

Type of address, for example, Billing or Shipping.

excludeUnsupportedCountries

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Indicate if you want to retrieve all addresses (false) or only addresses of type Shipping that are in countries included in the store’s shipToCountries list (true). The default value is false.

#### Return Value

Type: [ConnectApi.CommerceAddressCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_commerce_address_collection.htm "A collection of Commerce addresses.")

### getCommerceAccountAddress(webstoreId, accountId, defaultOnly, addressType, excludeUnsupportedCountries, fields, pageToken, pageSize, sortOrder)

Get Commerce account addresses for a webstore and account.

#### API Version

57.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CommerceAddressCollection getCommerceAccountAddress(String webstoreId, String accountId, Boolean defaultOnly, List<String\> addressType, Boolean excludeUnsupportedCountries, List<String\> fields, String pageToken, Integer pageSize, ConnectApi.CommerceAddressSort sortOrder)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

accountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account.

defaultOnly

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Indicate if you want only the default address (true) or all addresses for the account (false). The default value is false.

addressType

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

Type of address, for example, Billing or Shipping.

excludeUnsupportedCountries

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Indicate if you want to retrieve all addresses (false) or only addresses of type Shipping that are in countries included in the store’s shipToCountries list (true). The default value is false.

fields

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

A list of custom fields for the address.

pageToken

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as currentPageToken or nextPageToken. If you pass in null, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

sortOrder

Type: [ConnectApi.CommerceAddressSort](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#ConnectCommerceAddressSortOrderEnum)

Sort order for Commerce addresses. Values are:

-   CreatedDateAsc—Sort in ascending order of created date.
-   CreatedDateDesc—Sort in descending order of created date.
-   NameAsc—Sort in ascending order of name.
-   NameDesc—Sort in descending order of name.

#### Return Value

Type: [ConnectApi.CommerceAddressCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_commerce_address_collection.htm "A collection of Commerce addresses.")

### getOrderDeliveryGroupSummaries(webstoreId, effectiveAccountId, orderSummaryId)

Get order delivery group summaries.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderDeliveryGroupSummaryCollection getOrderDeliveryGroupSummaries(String webstoreId, String effectiveAccountId, String orderSummaryId)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account for which the request is made. If null, defaults to the account ID for the context user.

orderSummaryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the order summary.

#### Return Value

Type: [ConnectApi.OrderDeliveryGroupSummaryCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_delivery_group_summary_collection.htm "Collection of order delivery group summaries.")

### getOrderDeliveryGroupSummaries(webstoreId, effectiveAccountId, orderSummaryId, pageSize)

Get order delivery group summaries.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderDeliveryGroupSummaryCollection getOrderDeliveryGroupSummaries(String webstoreId, String effectiveAccountId, String orderSummaryId, Integer pageSize)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account for which the request is made. If null, defaults to the account ID for the context user.

orderSummaryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the order summary.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

#### Return Value

Type: [ConnectApi.OrderDeliveryGroupSummaryCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_delivery_group_summary_collection.htm "Collection of order delivery group summaries.")

### getOrderDeliveryGroupSummaries(webstoreId, effectiveAccountId, orderSummaryId, pageParam)

Get a page of order delivery group summaries.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderDeliveryGroupSummaryCollection getOrderDeliveryGroupSummaries(String webstoreId, String effectiveAccountId, String orderSummaryId, String pageParam)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account for which the request is made. If null, defaults to the account ID for the context user.

orderSummaryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the order summary.

pageParam

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as currentPageToken or nextPageToken. If you pass in null, the first page is returned.

#### Return Value

Type: [ConnectApi.OrderDeliveryGroupSummaryCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_delivery_group_summary_collection.htm "Collection of order delivery group summaries.")

### getOrderDeliveryGroupSummaries(webstoreId, effectiveAccountId, orderSummaryId, fields)

Get order delivery group summaries with specific fields.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderDeliveryGroupSummaryCollection getOrderDeliveryGroupSummaries(String webstoreId, String effectiveAccountId, String orderSummaryId, List<String\> fields)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account for which the request is made. If null, defaults to the account ID for the context user.

orderSummaryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the order summary.

fields

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

List of up to 15 order delivery group summary or order delivery method fields to display in the UI in each item row. For example, fields=OrderDelivery​GroupSummary.DeliveryAddress, OrderDeliveryMethod.Name.

#### Return Value

Type: [ConnectApi.OrderDeliveryGroupSummaryCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_delivery_group_summary_collection.htm "Collection of order delivery group summaries.")

### getOrderDeliveryGroupSummaries(webstoreId, effectiveAccountId, orderSummaryId, pageParam, fields)

Get a page of order delivery group summaries with specific fields.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderDeliveryGroupSummaryCollection getOrderDeliveryGroupSummaries(String webstoreId, String effectiveAccountId, String orderSummaryId, String pageParam, List<String\> fields)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account for which the request is made. If null, defaults to the account ID for the context user.

orderSummaryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the order summary.

pageParam

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as currentPageToken or nextPageToken. If you pass in null, the first page is returned.

fields

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

List of up to 15 order delivery group summary or order delivery method fields to display in the UI in each item row. For example, fields=OrderDelivery​GroupSummary.DeliveryAddress, OrderDeliveryMethod.Name.

#### Return Value

Type: [ConnectApi.OrderDeliveryGroupSummaryCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_delivery_group_summary_collection.htm "Collection of order delivery group summaries.")

### getOrderDeliveryGroupSummaries(webstoreId, effectiveAccountId, orderSummaryId, fields, pageSize)

Get order delivery group summaries with specific fields.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderDeliveryGroupSummaryCollection getOrderDeliveryGroupSummaries(String webstoreId, String effectiveAccountId, String orderSummaryId, List<String\> fields, Integer pageSize)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account for which the request is made. If null, defaults to the account ID for the context user.

orderSummaryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the order summary.

fields

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

List of up to 15 order delivery group summary or order delivery method fields to display in the UI in each item row. For example, fields=OrderDelivery​GroupSummary.DeliveryAddress, OrderDeliveryMethod.Name.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

#### Return Value

Type: [ConnectApi.OrderDeliveryGroupSummaryCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_delivery_group_summary_collection.htm "Collection of order delivery group summaries.")

### getOrderDeliveryGroupSummaries(webstoreId, effectiveAccountId, orderSummaryId, fields, sortParam)

Get a sorted list of order delivery group summaries with specific fields.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderDeliveryGroupSummaryCollection getOrderDeliveryGroupSummaries(String webstoreId, String effectiveAccountId, String orderSummaryId, List<String\> fields, ConnectApi.OrderDeliveryGroupSummarySort sortParam)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account for which the request is made. If null, defaults to the account ID for the context user.

orderSummaryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the order summary.

fields

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

List of up to 15 order delivery group summary or order delivery method fields to display in the UI in each item row. For example, fields=OrderDelivery​GroupSummary.DeliveryAddress, OrderDeliveryMethod.Name.

sortParam

Type: [ConnectApi.OrderDeliveryGroupSummarySort](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#OrderDeliveryGroupSummarySortEnum)

Sort order for order delivery group summaries. Values are:

-   IdAsc—Sorts by ID in ascending alphanumeric order (A–Z, 0–9).
-   IdDesc—Sorts by ID in descending alphanumeric order (Z–A, 9–0).

If null, IdAsc is the default sort order.

#### Return Value

Type: [ConnectApi.OrderDeliveryGroupSummaryCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_delivery_group_summary_collection.htm "Collection of order delivery group summaries.")

### getOrderDeliveryGroupSummaries(webstoreId, effectiveAccountId, orderSummaryId, fields, pageSize, sortParam)

Get a sorted list of order delivery group summaries with specific fields.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderDeliveryGroupSummaryCollection getOrderDeliveryGroupSummaries(String webstoreId, String effectiveAccountId, String orderSummaryId, List<String\> fields, Integer pageSize, ConnectApi.OrderDeliveryGroupSummarySort sortParam)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account for which the request is made. If null, defaults to the account ID for the context user.

orderSummaryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the order summary.

fields

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

List of up to 15 order delivery group summary or order delivery method fields to display in the UI in each item row. For example, fields=OrderDelivery​GroupSummary.DeliveryAddress, OrderDeliveryMethod.Name.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

sortParam

Type: [ConnectApi.OrderDeliveryGroupSummarySort](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#OrderDeliveryGroupSummarySortEnum)

Sort order for order delivery group summaries. Values are:

-   IdAsc—Sorts by ID in ascending alphanumeric order (A–Z, 0–9).
-   IdDesc—Sorts by ID in descending alphanumeric order (Z–A, 9–0).

If null, IdAsc is the default sort order.

#### Return Value

Type: [ConnectApi.OrderDeliveryGroupSummaryCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_delivery_group_summary_collection.htm "Collection of order delivery group summaries.")

### getOrderItemSummaries(webstoreId, effectiveAccountId, orderSummaryId)

Get order item summaries.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderItemSummaryCollection getOrderItemSummaries(String webstoreId, String effectiveAccountId, String orderSummaryId)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account for which the request is made. If null, defaults to the account ID for the context user.

orderSummaryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the order summary.

#### Return Value

Type: [ConnectApi.OrderItemSummaryCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_item_summary_collection.htm "Collection of order item summaries.")

### getOrderItemSummaries(webstoreId, effectiveAccountId, orderSummaryId, pageSize)

Get order item summaries.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderItemSummaryCollection getOrderItemSummaries(String webstoreId, String effectiveAccountId, String orderSummaryId, Integer pageSize)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account for which the request is made. If null, defaults to the account ID for the context user.

orderSummaryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the order summary.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

#### Return Value

Type: [ConnectApi.OrderItemSummaryCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_item_summary_collection.htm "Collection of order item summaries.")

### getOrderItemSummaries(webstoreId, effectiveAccountId, orderSummaryId, orderDeliveryGroupSummaryId)

Get order item summaries for a delivery group summary.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderItemSummaryCollection getOrderItemSummaries(String webstoreId, String effectiveAccountId, String orderSummaryId, String orderDeliveryGroupSummaryId)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account for which the request is made. If null, defaults to the account ID for the context user.

orderSummaryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the order summary.

orderDeliveryGroupSummaryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the order delivery group summary.

#### Return Value

Type: [ConnectApi.OrderItemSummaryCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_item_summary_collection.htm "Collection of order item summaries.")

### getOrderItemSummaries(webstoreId, effectiveAccountId, orderSummaryId, orderDeliveryGroupSummaryId, pageSize)

Get order item summaries for a delivery group summary.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderItemSummaryCollection getOrderItemSummaries(String webstoreId, String effectiveAccountId, String orderSummaryId, String orderDeliveryGroupSummaryId, Integer pageSize)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account for which the request is made. If null, defaults to the account ID for the context user.

orderSummaryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the order summary.

orderDeliveryGroupSummaryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the order delivery group summary.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

#### Return Value

Type: [ConnectApi.OrderItemSummaryCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_item_summary_collection.htm "Collection of order item summaries.")

### getOrderItemSummaries(webstoreId, effectiveAccountId, orderSummaryId, orderDeliveryGroupSummaryId, pageParam)

Get a page of order item summaries for a delivery group summary.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderItemSummaryCollection getOrderItemSummaries(String webstoreId, String effectiveAccountId, String orderSummaryId, String orderDeliveryGroupSummaryId, String pageParam)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account for which the request is made. If null, defaults to the account ID for the context user.

orderSummaryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the order summary.

orderDeliveryGroupSummaryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the order delivery group summary.

pageParam

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as currentPageToken or nextPageToken. If you pass in null, the first page is returned.

#### Return Value

Type: [ConnectApi.OrderItemSummaryCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_item_summary_collection.htm "Collection of order item summaries.")

### getOrderItemSummaries(webstoreId, effectiveAccountId, orderSummaryId, orderDeliveryGroupSummaryId, fields)

Get order item summaries for a delivery group summary with specific fields.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderItemSummaryCollection getOrderItemSummaries(String webstoreId, String effectiveAccountId, String orderSummaryId, String orderDeliveryGroupSummaryId, List<String\> fields)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account for which the request is made. If null, defaults to the account ID for the context user.

orderSummaryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the order summary.

orderDeliveryGroupSummaryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the order delivery group summary.

fields

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

List of up to 15 order item summary or product fields to display in the UI in each item row.

#### Return Value

Type: [ConnectApi.OrderItemSummaryCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_item_summary_collection.htm "Collection of order item summaries.")

### getOrderItemSummaries(webstoreId, effectiveAccountId, orderSummaryId, orderDeliveryGroupSummaryId, fields, pageSize)

Get order item summaries for a delivery group summary with specific fields.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderItemSummaryCollection getOrderItemSummaries(String webstoreId, String effectiveAccountId, String orderSummaryId, String orderDeliveryGroupSummaryId, List<String\> fields, Integer pageSize)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account for which the request is made. If null, defaults to the account ID for the context user.

orderSummaryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the order summary.

orderDeliveryGroupSummaryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the order delivery group summary.

fields

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

List of up to 15 order item summary or product fields to display in the UI in each item row.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

#### Return Value

Type: [ConnectApi.OrderItemSummaryCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_item_summary_collection.htm "Collection of order item summaries.")

### getOrderItemSummaries(webstoreId, effectiveAccountId, orderSummaryId, orderDeliveryGroupSummaryId, fields, pageParam)

Get a page of order item summaries for a delivery group summary with specific fields.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderItemSummaryCollection getOrderItemSummaries(String webstoreId, String effectiveAccountId, String orderSummaryId, String orderDeliveryGroupSummaryId, List<String\> fields, String pageParam)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account for which the request is made. If null, defaults to the account ID for the context user.

orderSummaryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the order summary.

orderDeliveryGroupSummaryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the order delivery group summary.

fields

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

List of up to 15 order item summary or product fields to display in the UI in each item row.

pageParam

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as currentPageToken or nextPageToken. If you pass in null, the first page is returned.

#### Return Value

Type: [ConnectApi.OrderItemSummaryCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_item_summary_collection.htm "Collection of order item summaries.")

### getOrderItemSummaries(webstoreId, effectiveAccountId, orderSummaryId, orderDeliveryGroupSummaryId, fields, sortParam)

Get a sorted list of order item summaries for a delivery group summary with specific fields.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderItemSummaryCollection getOrderItemSummaries(String webstoreId, String effectiveAccountId, String orderSummaryId, String orderDeliveryGroupSummaryId, List<String\> fields, ConnectApi.OrderItemSummarySort sortParam)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account for which the request is made. If null, defaults to the account ID for the context user.

orderSummaryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the order summary.

orderDeliveryGroupSummaryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the order delivery group summary.

fields

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

List of up to 15 order item summary or product fields to display in the UI in each item row.

sortParam

Type: [ConnectApi.OrderItemSummarySort](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#OrderItemSummarySortEnum)

Sort order for order item summaries. Values are:

-   IdAsc—Sorts by ID in ascending alphanumeric order (A–Z, 0–9).
-   IdDesc—Sorts by ID in descending alphanumeric order (Z–A, 9–0).

If null, IdAsc is the default sort order.

#### Return Value

Type: [ConnectApi.OrderItemSummaryCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_item_summary_collection.htm "Collection of order item summaries.")

### getOrderItemSummaries(webstoreId, effectiveAccountId, orderSummaryId, orderDeliveryGroupSummaryId, fields, pageSize, sortParam)

Get a sorted page of order item summaries for a delivery group summary with specific fields.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderItemSummaryCollection getOrderItemSummaries(String webstoreId, String effectiveAccountId, String orderSummaryId, String orderDeliveryGroupSummaryId, List<String\> fields, Integer pageSize, ConnectApi.OrderItemSummarySort sortParam)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account for which the request is made. If null, defaults to the account ID for the context user.

orderSummaryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the order summary.

orderDeliveryGroupSummaryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the order delivery group summary.

fields

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

List of up to 15 order item summary or product fields to display in the UI in each item row.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

sortParam

Type: [ConnectApi.OrderItemSummarySort](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#OrderItemSummarySortEnum)

Sort order for order item summaries. Values are:

-   IdAsc—Sorts by ID in ascending alphanumeric order (A–Z, 0–9).
-   IdDesc—Sorts by ID in descending alphanumeric order (Z–A, 9–0).

If null, IdAsc is the default sort order.

#### Return Value

Type: [ConnectApi.OrderItemSummaryCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_item_summary_collection.htm "Collection of order item summaries.")

### getOrderItemSummaries(webstoreId, effectiveAccountId, orderSummaryId, orderDeliveryGroupSummaryId, fields, pageParam, pageSize, sortParam, includeAdjustmentDetails)

Get a sorted page of order item summaries for a delivery group summary with specific fields and include adjustment details.

#### API Version

56.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderItemSummaryCollection getOrderItemSummaries(String webstoreId, String effectiveAccountId, String orderSummaryId, String orderDeliveryGroupSummaryId, List<String\> fields, String pageParam, Integer pageSize, ConnectApi.OrderItemSummarySort sortParam, Boolean includeAdjustmentDetails)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account for which the request is made. If null, defaults to the account ID for the context user.

orderSummaryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the order summary.

orderDeliveryGroupSummaryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the order delivery group summary.

fields

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

List of up to 15 order item summary or product fields to display in the UI in each item row.

pageParam

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as currentPageToken or nextPageToken. If you pass in null, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

sortParam

Type: [ConnectApi.OrderItemSummarySort](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#OrderItemSummarySortEnum)

Sort order for order item summaries. Values are:

-   IdAsc—Sorts by ID in ascending alphanumeric order (A–Z, 0–9).
-   IdDesc—Sorts by ID in descending alphanumeric order (Z–A, 9–0).

If null, IdAsc is the default sort order.

includeAdjustmentDetails

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to return adjustment details (true) or not (false).

#### Return Value

Type: [ConnectApi.OrderItemSummaryCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_item_summary_collection.htm "Collection of order item summaries.")

### getOrderItemSummaryAdjustments(webstoreId, orderSummaryId, orderItemSummaryAdjustmentCollectionInput)

Get adjustments for order items.

#### API Version

53.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderItemSummaryAdjustmentCollection getOrderItemSummaryAdjustments(String webstoreId, String orderSummaryId, ConnectApi.OrderItemSummaryAdjustmentCollectionInput orderItemSummaryAdjustmentCollectionInput)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

orderSummaryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the order summary.

orderItemSummaryAdjustmentCollectionInput

Type: [ConnectApi.OrderItemSummaryAdjustmentCollectionInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_order_item_summary_adjustment_collection.htm "Collection of order item summaries.")

Collection of order item summaries to get adjustments for.

#### Return Value

Type: [ConnectApi.OrderItemSummaryAdjustmentCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_item_summary_adjustment_collection.htm "Collection of adjustments for order item summaries.")

### getOrderItemSummaryAdjustments(webstoreId, orderSummaryId, orderItemSummaryAdjustmentCollectionInput, effectiveAccountId)

Get adjustments for order items.

#### API Version

53.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderItemSummaryAdjustmentCollection getOrderItemSummaryAdjustments(String webstoreId, String orderSummaryId, ConnectApi.OrderItemSummaryAdjustmentCollectionInput orderItemSummaryAdjustmentCollectionInput, String effectiveAccountId)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

orderSummaryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the order summary.

orderItemSummaryAdjustmentCollectionInput

Type: [ConnectApi.OrderItemSummaryAdjustmentCollectionInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_order_item_summary_adjustment_collection.htm "Collection of order item summaries.")

Collection of order item summaries to get adjustments for.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account for which the request is made. If null, defaults to the account ID for the context user.

#### Return Value

Type: [ConnectApi.OrderItemSummaryAdjustmentCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_item_summary_adjustment_collection.htm "Collection of adjustments for order item summaries.")

### getOrderShipmentItems(webstoreId, shipmentId)

Get order shipment items.

#### API Version

52.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderShipmentItemCollection getOrderShipmentItems(String webstoreId, String shipmentId)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

shipmentId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the shipment.

#### Return Value

Type: [ConnectApi.OrderShipmentItemCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_shipment_item_collection.htm "Collection of order shipment items.")

### getOrderShipmentItems(webstoreId, shipmentId, effectiveAccountId)

Get order shipment items.

#### API Version

52.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderShipmentItemCollection getOrderShipmentItems(String webstoreId, String shipmentId, String effectiveAccountId)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

shipmentId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the shipment.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account for which the request is made. If null, defaults to the account ID for the context user.

#### Return Value

Type: [ConnectApi.OrderShipmentItemCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_shipment_item_collection.htm "Collection of order shipment items.")

### getOrderShipmentItems(webstoreId, shipmentId, effectiveAccountId, fields)

Get order shipment items with specific fields.

#### API Version

52.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderShipmentItemCollection getOrderShipmentItems(String webstoreId, String shipmentId, String effectiveAccountId, List<String\> fields)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

shipmentId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the shipment.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account for which the request is made. If null, defaults to the account ID for the context user.

fields

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

List of up to 15 additional shipment items, order item summary, and product fields to display in the UI in each item row.

#### Return Value

Type: [ConnectApi.OrderShipmentItemCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_shipment_item_collection.htm "Collection of order shipment items.")

### getOrderShipmentItems(webstoreId, shipmentId, effectiveAccountId, fields, pageToken, pageSize)

Get a page of order shipment items with specific fields.

#### API Version

52.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderShipmentItemCollection getOrderShipmentItems(String webstoreId, String shipmentId, String effectiveAccountId, List<String\> fields, String pageToken, Integer pageSize)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

shipmentId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the shipment.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account for which the request is made. If null, defaults to the account ID for the context user.

fields

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

List of up to 15 additional shipment items, order item summary, and product fields to display in the UI in each item row.

pageToken

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the base64 encoded page token. Page tokens are returned as part of the response. If unspecified, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

#### Return Value

Type: [ConnectApi.OrderShipmentItemCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_shipment_item_collection.htm "Collection of order shipment items.")

### getOrderShipmentItems(webstoreId, shipmentId, effectiveAccountId, fields, pageToken, pageSize, sortOrder)

Get a sorted page of order shipment items.

#### API Version

52.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderShipmentItemCollection getOrderShipmentItems(String webstoreId, String shipmentId, String effectiveAccountId, List<String\> fields, String pageToken, Integer pageSize, ConnectApi.OrderShipmentItemSort sortOrder)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

shipmentId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the shipment.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account for which the request is made. If null, defaults to the account ID for the context user.

fields

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

List of up to 15 additional shipment items, order item summary, and product fields to display in the UI in each item row.

pageToken

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the base64 encoded page token. Page tokens are returned as part of the response. If unspecified, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

sortOrder

Type: [ConnectApi.OrderShipmentItemSort](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#OrderShipmentItemSortEnum)

Sort order for order shipment items. Values are:

-   IdAsc—Sorts by ID in ascending alphanumeric order (A–Z, 0–9).
-   IdDesc—Sorts by ID in descending alphanumeric order (Z–A, 9–0).

If unspecified, defaults to IdAsc.

#### Return Value

Type: [ConnectApi.OrderShipmentItemCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_shipment_item_collection.htm "Collection of order shipment items.")

### getOrderShipments(webstoreId, orderSummaryId)

Get order shipments.

#### API Version

52.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderShipmentCollection getOrderShipments(String webstoreId, String orderSummaryId)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

orderSummaryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the order summary.

#### Return Value

Type: [ConnectApi.OrderShipmentCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_shipment_collection.htm "Collection of order shipments.")

### getOrderShipments(webstoreId, orderSummaryId, effectiveAccountId)

Get order shipments.

#### API Version

52.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderShipmentCollection getOrderShipments(String webstoreId, String orderSummaryId, String effectiveAccountId)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

orderSummaryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the order summary.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account for which the request is made. If null, defaults to the account ID for the context user.

#### Return Value

Type: [ConnectApi.OrderShipmentCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_shipment_collection.htm "Collection of order shipments.")

### getOrderShipments(webstoreId, orderSummaryId, effectiveAccountId, fields)

Get order shipments with specific fields.

#### API Version

52.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderShipmentCollection getOrderShipments(String webstoreId, String orderSummaryId, String effectiveAccountId, List<String\> fields)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

orderSummaryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the order summary.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account for which the request is made. If null, defaults to the account ID for the context user.

fields

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

List of up to 15 additional shipment and order delivery method fields to display in the UI in each item row.

#### Return Value

Type: [ConnectApi.OrderShipmentCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_shipment_collection.htm "Collection of order shipments.")

### getOrderShipments(webstoreId, orderSummaryId, effectiveAccountId, fields, pageSize, pageToken)

Get a page of order shipments with specific fields.

#### API Version

52.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderShipmentCollection getOrderShipments(String webstoreId, String orderSummaryId, String effectiveAccountId, List<String\> fields, Integer pageSize, String pageToken)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

orderSummaryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the order summary.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account for which the request is made. If null, defaults to the account ID for the context user.

fields

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

List of up to 15 additional shipment and order delivery method fields to display in the UI in each item row.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

pageToken

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the base64 encoded page token. Page tokens are returned as part of the response. If unspecified, the first page is returned.

#### Return Value

Type: [ConnectApi.OrderShipmentCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_shipment_collection.htm "Collection of order shipments.")

### getOrderShipments(webstoreId, orderSummaryId, effectiveAccountId, fields, pageSize, pageToken, sortOrder)

Get a sorted page of order shipments with specific fields.

#### API Version

52.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderShipmentCollection getOrderShipments(String webstoreId, String orderSummaryId, String effectiveAccountId, List<String\> fields, Integer pageSize, String pageToken, ConnectApi.OrderShipmentSort sortOrder)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

orderSummaryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the order summary.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account for which the request is made. If null, defaults to the account ID for the context user.

fields

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

List of up to 15 additional shipment and order delivery method fields to display in the UI in each item row.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

pageToken

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the base64 encoded page token. Page tokens are returned as part of the response. If unspecified, the first page is returned.

sortOrder

Type: [ConnectApi.OrderShipmentSort](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#OrderShipmentSortEnum)

Sort order for order shipments. Values are:

-   ExpectedDeliveryDateAsc—Sorts by the oldest expected delivery date.
-   ExpectedDeliveryDateDesc—Sorts by the most recent expected delivery date.
-   ShipmentNumberAsc—Sorts by shipment number in ascending order (0–9).
-   ShipmentNumberDesc—Sorts by shipment number in descending order (9–0).

If unspecified, defaults to ShipmentNumberAsc.

If you’re sorting by expected delivery date, make sure the expected delivery date is populated on your shipment records. A null value isn’t supported and results in an error.

#### Return Value

Type: [ConnectApi.OrderShipmentCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_shipment_collection.htm "Collection of order shipments.")

### getOrderSummaries(webstoreId)

Get order summaries.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderSummaryCollectionRepresentation getOrderSummaries(String webstoreId)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

#### Return Value

Type: [ConnectApi.OrderSummaryCollectionRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_summary_collection.htm "Collection of order summaries.")

### getOrderSummaries(webstoreId, effectiveAccountId)

Get order summaries.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderSummaryCollectionRepresentation getOrderSummaries(String webstoreId, String effectiveAccountId)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account for which the request is made. If null, defaults to the account ID for the context user.

#### Return Value

Type: [ConnectApi.OrderSummaryCollectionRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_summary_collection.htm "Collection of order summaries.")

### getOrderSummaries(webstoreId, effectiveAccountId, fields)

Get order summaries with specific fields.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderSummaryCollectionRepresentation getOrderSummaries(String webstoreId, String effectiveAccountId, List<String\> fields)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account for which the request is made. If null, defaults to the account ID for the context user.

fields

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

List of up to 35 additional order summary fields to display in the UI in each item row.

These order summary fields are returned regardless of fields specified.

-   createdDate
-   orderSummaryId
-   orderNumber
-   orderedDate
-   ownerId
-   status
-   totalAmount

#### Return Value

Type: [ConnectApi.OrderSummaryCollectionRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_summary_collection.htm "Collection of order summaries.")

### getOrderSummaries(webstoreId, effectiveAccountId, fields, pageSize, pageToken)

Get a page of order summaries with specific fields.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderSummaryCollectionRepresentation getOrderSummaries(String webstoreId, String effectiveAccountId, List<String\> fields, Integer pageSize, String pageToken)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account for which the request is made. If null, defaults to the account ID for the context user.

fields

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

List of up to 35 additional order summary fields to display in the UI in each item row.

These order summary fields are returned regardless of fields specified.

-   createdDate
-   orderSummaryId
-   orderNumber
-   orderedDate
-   ownerId
-   status
-   totalAmount

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

pageToken

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the base64 encoded page token. Page tokens are returned as part of the response. If unspecified, the first page is returned.

#### Return Value

Type: [ConnectApi.OrderSummaryCollectionRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_summary_collection.htm "Collection of order summaries.")

### getOrderSummaries(webstoreId, effectiveAccountId, fields, pageSize, pageToken, sortOrder)

Get a sorted page of order summaries with specific fields.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderSummaryCollectionRepresentation getOrderSummaries(String webstoreId, String effectiveAccountId, List<String\> fields, Integer pageSize, String pageToken, ConnectApi.OrderSummarySortOrder sortOrder)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account for which the request is made. If null, defaults to the account ID for the context user.

fields

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

List of up to 35 additional order summary fields to display in the UI in each item row.

These order summary fields are returned regardless of fields specified.

-   createdDate
-   orderSummaryId
-   orderNumber
-   orderedDate
-   ownerId
-   status
-   totalAmount

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

pageToken

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the base64 encoded page token. Page tokens are returned as part of the response. If unspecified, the first page is returned.

sortOrder

Type: [ConnectApi.OrderSummarySortOrder](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#OrderSummarySortEnum)

Sort order for order summaries. Values are:

-   CreatedDateAsc—Sorts by the oldest created date.
-   CreatedDateDesc—Sorts by the most recent created date.
-   OrderedDateAsc—Sorts by the oldest ordered date.
-   OrderedDateDesc—Sorts by the most recent ordered date.

If unspecified, defaults to OrderedDateDesc.

If you’re sorting by ordered date, make sure the ordered date is populated on your order summary records. A null value isn’t supported and results in an error.

#### Return Value

Type: [ConnectApi.OrderSummaryCollectionRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_summary_collection.htm "Collection of order summaries.")

### getOrderSummaries(webstoreId, effectiveAccountId, fields, pageSize, pageToken, sortOrder, earliestDate, latestDate)

Get a sorted page of order summaries with specific fields within a specific date range.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderSummaryCollectionRepresentation getOrderSummaries(String webstoreId, String effectiveAccountId, List<String\> fields, Integer pageSize, String pageToken, ConnectApi.OrderSummarySortOrder sortOrder, String earliestDate, String latestDate)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account for which the request is made. If null, defaults to the account ID for the context user.

fields

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

List of up to 35 additional order summary fields to display in the UI in each item row.

These order summary fields are returned regardless of fields specified.

-   createdDate
-   orderSummaryId
-   orderNumber
-   orderedDate
-   ownerId
-   status
-   totalAmount

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

pageToken

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the base64 encoded page token. Page tokens are returned as part of the response. If unspecified, the first page is returned.

sortOrder

Type: [ConnectApi.OrderSummarySortOrder](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#OrderSummarySortEnum)

Sort order for order summaries. Values are:

-   CreatedDateAsc—Sorts by the oldest created date.
-   CreatedDateDesc—Sorts by the most recent created date.
-   OrderedDateAsc—Sorts by the oldest ordered date.
-   OrderedDateDesc—Sorts by the most recent ordered date.

If unspecified, defaults to OrderedDateDesc.

If you’re sorting by ordered date, make sure the ordered date is populated on your order summary records. A null value isn’t supported and results in an error.

earliestDate

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Oldest created or ordered date, depending on the sortOrder value, for order summaries to return. Results include any orders on and after this date..

latestDate

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Most recent created or ordered date, depending on the sortOrder value, for order summaries to return. Results include any orders before this date.

#### Return Value

Type: [ConnectApi.OrderSummaryCollectionRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_summary_collection.htm "Collection of order summaries.")

### getOrderSummaries(webstoreId, effectiveAccountId, fields, pageSize, pageToken, sortOrder, earliestDate, latestDate, ownerScoped)

Get a sorted page of order summaries with specific fields within a specific date range and scoped to orders owned by the context user.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderSummaryCollectionRepresentation getOrderSummaries(String webstoreId, String effectiveAccountId, List<String\> fields, Integer pageSize, String pageToken, ConnectApi.OrderSummarySortOrder sortOrder, String earliestDate, String latestDate, Boolean ownerScoped)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account for which the request is made. If null, defaults to the account ID for the context user.

fields

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

List of up to 35 additional order summary fields to display in the UI in each item row.

These order summary fields are returned regardless of fields specified.

-   createdDate
-   orderSummaryId
-   orderNumber
-   orderedDate
-   ownerId
-   status
-   totalAmount

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

pageToken

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the base64 encoded page token. Page tokens are returned as part of the response. If unspecified, the first page is returned.

sortOrder

Type: [ConnectApi.OrderSummarySortOrder](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#OrderSummarySortEnum)

Sort order for order summaries. Values are:

-   CreatedDateAsc—Sorts by the oldest created date.
-   CreatedDateDesc—Sorts by the most recent created date.
-   OrderedDateAsc—Sorts by the oldest ordered date.
-   OrderedDateDesc—Sorts by the most recent ordered date.

If unspecified, defaults to OrderedDateDesc.

If you’re sorting by ordered date, make sure the ordered date is populated on your order summary records. A null value isn’t supported and results in an error.

earliestDate

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Oldest created or ordered date, depending on the sortOrder value, for order summaries to return. Results include any orders on and after this date..

latestDate

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Most recent created or ordered date, depending on the sortOrder value, for order summaries to return. Results include any orders before this date.

ownerScoped

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether the results are scoped to orders owned by the context user (true) or to orders owned by and shared with the context user (false). If unspecified, defaults to true.

#### Return Value

Type: [ConnectApi.OrderSummaryCollectionRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_summary_collection.htm "Collection of order summaries.")

### getOrderSummaries(webstoreId, effectiveAccountId, fields, pageSize, pageToken, sortOrder, earliestDate, latestDate, ownerScoped, includeAdjustmentDetails)

Get a sorted page of order summaries with specific fields within a specific date range and scoped to orders owned by the context user.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderSummaryCollectionRepresentation getOrderSummaries(String webstoreId, String effectiveAccountId, List<String\> fields, Integer pageSize, String pageToken, ConnectApi.OrderSummarySortOrder sortOrder, String earliestDate, String latestDate, Boolean ownerScoped, Boolean includeAdjustmentDetails)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account for which the request is made. If null, defaults to the account ID for the context user.

fields

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

List of up to 35 additional order summary fields to display in the UI in each item row.

These order summary fields are returned regardless of fields specified.

-   createdDate
-   orderSummaryId
-   orderNumber
-   orderedDate
-   ownerId
-   status
-   totalAmount

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

pageToken

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the base64 encoded page token. Page tokens are returned as part of the response. If unspecified, the first page is returned.

sortOrder

Type: [ConnectApi.OrderSummarySortOrder](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#OrderSummarySortEnum)

Sort order for order summaries. Values are:

-   CreatedDateAsc—Sorts by the oldest created date.
-   CreatedDateDesc—Sorts by the most recent created date.
-   OrderedDateAsc—Sorts by the oldest ordered date.
-   OrderedDateDesc—Sorts by the most recent ordered date.

If unspecified, defaults to OrderedDateDesc.

If you’re sorting by ordered date, make sure the ordered date is populated on your order summary records. A null value isn’t supported and results in an error.

earliestDate

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Oldest created or ordered date, depending on the sortOrder value, for order summaries to return. Results include any orders on and after this date..

latestDate

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Most recent created or ordered date, depending on the sortOrder value, for order summaries to return. Results include any orders before this date.

ownerScoped

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether the results are scoped to orders owned by the context user (true) or to orders owned by and shared with the context user (false). If unspecified, defaults to true.

#### Return Value

includeAdjustmentDetails

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to fetch price adjustment details based on their type (true). If unspecified, defaults to false.

Type: [ConnectApi.OrderSummaryCollectionRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_summary_collection.htm "Collection of order summaries.")

### getOrderSummary(webstoreId, orderSummaryId, effectiveAccountId)

Get an order summary.

#### API Version

55.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderSummaryRepresentation getOrderSummary(String webstoreId, String orderSummaryId, String effectiveAccountId)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

orderSummaryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the order summary.

effectiveAccount​Id

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account for which the request is made. If null, defaults to the account ID for the context user.

#### Return Value

Type: [ConnectApi.OrderSummaryRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_summary.htm "Order summary.")

### getOrderSummary(webstoreId, orderSummaryId, effectiveAccountId, fields)

Get an order summary with fields.

#### API Version

55.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderSummaryRepresentation getOrderSummary(String webstoreId, String orderSummaryId, String effectiveAccountId, List<String\> fields)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

orderSummaryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the order summary.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account for which the request is made. If null, defaults to the account ID for the context user.

fields

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

List of up to 35 additional order summary fields to display in the UI in each item row.

These order summary fields are returned regardless of fields specified.

-   createdDate
-   orderSummaryId
-   orderNumber
-   orderedDate
-   ownerId
-   status
-   totalAmount

#### Return Value

Type: [ConnectApi.OrderSummaryRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_summary.htm "Order summary.")

### getOrderSummary(webstoreId, orderSummaryId, effectiveAccountId, fields, includeAdjustmentDetails)

Get an order summary with fields and include adjustment details.

#### API Version

55.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderSummaryRepresentation getOrderSummary(String webstoreId, String orderSummaryId, String effectiveAccountId, List<String\> fields, Boolean includeAdjustmentDetails)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

orderSummaryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the order summary.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account for which the request is made. If null, defaults to the account ID for the context user.

fields

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

List of up to 35 additional order summary fields to display in the UI in each item row.

These order summary fields are returned regardless of fields specified.

-   createdDate
-   orderSummaryId
-   orderNumber
-   orderedDate
-   ownerId
-   status
-   totalAmount

includeAdjustmentDetails

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to return adjustment details (true) or not (false). If unspecified, the default value is false.

#### Return Value

Type: [ConnectApi.OrderSummaryRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_summary.htm "Order summary.")

### getOrderSummaryAdjustments(webstoreId, orderSummaryId)

Get adjustments for an order summary.

#### API Version

53.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderSummaryAdjustmentCollection getOrderSummaryAdjustments(String webstoreId, String orderSummaryId)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

orderSummaryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the order summary.

#### Return Value

Type: [ConnectApi.OrderSummaryAdjustmentCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_summary_adjustment_collection.htm "Collection of adjustments for an order summary.")

### getOrderSummaryAdjustments(webstoreId, orderSummaryId, effectiveAccountId)

Get adjustments for an order summary.

#### API Version

53.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderSummaryAdjustmentCollection getOrderSummaryAdjustments(String webstoreId, String orderSummaryId, String effectiveAccountId)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

orderSummaryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the order summary.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account for which the request is made. If null, defaults to the account ID for the context user.

#### Return Value

Type: [ConnectApi.OrderSummaryAdjustmentCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_summary_adjustment_collection.htm "Collection of adjustments for an order summary.")

### lookupOrderSummary(webstoreId, effectiveAccountId, fields, excludeLineItems, excludeDeliveryGroups, excludeAdjustmentAggregates, excludeAdjustments, deliveryGroupId, orderSummaryLookupInput) (Developer Preview)

Look up details about an order summary for a guest shopper or a registered buyer using the effective account ID, requested fields, line items, delivery groups, adjustments aggregates, and adjustments.

#### API Version

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

This API is available as a developer preview. It isn’t generally available unless or until Salesforce announces its general availability in documentation or in press releases or public statements. All commands, parameters, and other features are subject to change or deprecation at any time, with or without notice. Don't implement functionality developed with these commands or tools.

58.0

#### Available to Guest Users

58.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderSummaryLookupOutput lookupOrderSummary(String webstoreId, String effectiveAccountId, List<String\> fields, Boolean excludeLineItems, Boolean excludeDeliveryGroups, Boolean excludeAdjustmentAggregates, Boolean excludeAdjustments, String deliveryGroupId, ConnectApi.OrderSummaryLookupInput orderSummaryLookupInput)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account for which the request is made. If unspecified, defaults to the account ID for the context user or, for guest users, the guest buyer profile ID of the current store.

fields

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

List of specific fields, including custom fields, to return in the response along with default fields. For example, OrderSummary.TotalAmount, OrderItemSummary.Quantity, Product2.Description, OrderDeliveryGroupSummary.GrandTotalAmount, OrderDeliveryMethod.Carrier.

excludeLineItems

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to exclude line items from the response. If unspecified, the default value is false.

excludeDeliveryGroups

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to exclude delivery groups from the response. If unspecified, the default value is false.

excludeAdjustmentAggregates

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to exclude adjustment aggregates associated with an order summary. Adjustment aggregates include fields detailing promotional amounts by price, tax, and total. Aggregates are calculated asynchronously and results returned to the order summary. If unspecified, the default value is false.

excludeAdjustments

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to exclude adjustments associated with an order summary. Adjustments include promotional discounts. If unspecified, the default value is false.

deliveryGroupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the delivery group associated with the order summary.

orderSummaryLookupInput

Type: [ConnectApi.OrderSummaryLookupInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_order_summary_lookup.htm "Order summary lookup input.")

Order summary lookup input representation.

#### Return Value

Type: [ConnectApi.OrderSummaryLookupOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_summary_lookup_output.htm "Order summary lookup output.")

### lookupOrderSummary(webstoreId, effectiveAccountId, fields, orderSummaryLookupInput) (Developer Preview)

Look up details about an order summary for a guest shopper or a registered buyer using the effective account ID and requested fields.

#### API Version

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

This API is available as a developer preview. It isn’t generally available unless or until Salesforce announces its general availability in documentation or in press releases or public statements. All commands, parameters, and other features are subject to change or deprecation at any time, with or without notice. Don't implement functionality developed with these commands or tools.

58.0

#### Available to Guest Users

58.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderSummaryLookupOutput lookupOrderSummary(String webstoreId, String effectiveAccountId, List<String\> fields, ConnectApi.OrderSummaryLookupInput orderSummaryLookupInput)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account for which the request is made. If unspecified, defaults to the account ID for the context user or, for guest users, the guest buyer profile ID of the current store.

fields

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

List of specific fields, including custom fields, to return in the response along with default fields. For example, OrderSummary.TotalAmount, OrderItemSummary.Quantity, Product2.Description, OrderDeliveryGroupSummary.GrandTotalAmount, OrderDeliveryMethod.Carrier.

orderSummaryLookupInput

Type: [ConnectApi.OrderSummaryLookupInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_order_summary_lookup.htm "Order summary lookup input.")

Order summary lookup input representation.

#### Return Value

Type: [ConnectApi.OrderSummaryLookupOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_summary_lookup_output.htm "Order summary lookup output.")

### lookupOrderSummary(webstoreId, effectiveAccountId, orderSummaryLookupInput) (Developer Preview)

Look up details about an order summary for a guest shopper or a registered buyer using the effective account ID.

#### API Version

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

This API is available as a developer preview. It isn’t generally available unless or until Salesforce announces its general availability in documentation or in press releases or public statements. All commands, parameters, and other features are subject to change or deprecation at any time, with or without notice. Don't implement functionality developed with these commands or tools.

58.0

#### Available to Guest Users

58.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderSummaryLookupOutput lookupOrderSummary(String webstoreId, String effectiveAccountId, ConnectApi.OrderSummaryLookupInput orderSummaryLookupInput)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account for which the request is made. If unspecified, defaults to the account ID for the context user or, for guest users, the guest buyer profile ID of the current store.

orderSummaryLookupInput

Type: [ConnectApi.OrderSummaryLookupInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_order_summary_lookup.htm "Order summary lookup input.")

Order summary lookup input representation.

#### Return Value

Type: [ConnectApi.OrderSummaryLookupOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_summary_lookup_output.htm "Order summary lookup output.")

### updateCommerceAccountAddress(webstoreId, accountId, addressId, addressInput)

Update a Commerce account address for a webstore.

#### API Version

54.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CommerceAddressOutput updateCommerceAccountAddress(String webstoreId, String accountId, String addressId, ConnectApi.commerceAddressInput addressInput)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

accountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account.

addressId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the address.

addressInput

Type: [ConnectApi.commerceAddressInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_commerce_address.htm "Commerce address input.")

Information about the address fields you want to update.

#### Return Value

Type: [ConnectApi.CommerceAddressOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_commerce_address_output.htm "Address for a Commerce account.")

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- addOrderToCart(webstoreId, orderSummaryId, orderToCartInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm)
- addOrderToCart(webstoreId, orderSummaryId, orderToCartInput, effectiveAccountId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm)
- calculateAdjustmentAggregates(webstoreId, orderSummaryIds) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm)
- createCommerceAccountAddress(webstoreId, accountId, addressInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm)
- deleteCommerceAccountAddress(webstoreId, accountId, addressId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm)
- getCommerceAccountAddress(webstoreId, accountId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm)
- getCommerceAccountAddress(webstoreId, accountId, defaultOnly) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm)
- getCommerceAccountAddress(webstoreId, accountId, defaultOnly, addressType, fields, pageToken, pageSize, sortOrder) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm)
- getCommerceAccountAddress(webstoreId, accountId, addressType, excludeUnsupportedCountries) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceBuyerExperience_static_methods.htm)
