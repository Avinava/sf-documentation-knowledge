---
title: "CommerceStorePricing Class"
domain: apex-reference
topic: commercestorepricing-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:18.520Z
estimatedTokens: 3049
namespace: ConnectApi
keywords: [CommerceStorePricing, buyer, price, product, getProductPrice, webstoreId, productId, effectiveAccountId, API, Version, Guest, Users, Requires, Chatter, Usage]
---

# CommerceStorePricing Class

> Get the list and buyer price for a product.

**Namespace:** `ConnectApi`

# CommerceStorePricing Class

Get product prices.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## CommerceStorePricing Methods

These methods are for CommerceStorePricing. All methods are static.

-   **[getProductPrice(webstoreId, productId, effectiveAccountId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceStorePricing_static_methods.htm#apex_ConnectAPI_CommerceStorePricing_getProductPrice_1)**
    Get the list and buyer price for a product.
-   **[getProductPrice(webstoreId, productId, effectiveAccountId, productSellingModelIds)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceStorePricing_static_methods.htm#apex_ConnectAPI_CommerceStorePricing_getProductPrice_2)**
    Get a product’s list and buyer price for specified product selling models.
-   **[getProductPrices(webstoreId, effectiveAccountId, productIds)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceStorePricing_static_methods.htm#apex_ConnectAPI_CommerceStorePricing_getProductPrices_1)**
    Get the prices for multiple products using multiple product IDs.
-   **[getProductPrices(webstoreId, effectiveAccountId, productIds, currencyIsoCode)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceStorePricing_static_methods.htm#apex_ConnectAPI_CommerceStorePricing_getProductPrices_2)**
    Get the prices for multiple products using multiple product IDs and a currency ISO code.
-   **[getProductPrices(webstoreId, effectiveAccountId, pricingInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceStorePricing_static_methods.htm#apex_ConnectAPI_CommerceStorePricing_getProductPrices_3)**
    Get the prices for multiple products.
-   **[getProductPrices(webstoreId, effectiveAccountId, pricingInput, currencyIsoCode)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceStorePricing_static_methods.htm#apex_ConnectAPI_CommerceStorePricing_getProductPrices_4)**
    Get the prices for multiple products using a currency ISO code.

### getProductPrice(webstoreId, productId, effectiveAccountId)

Get the list and buyer price for a product.

#### API Version

49.0

#### Available to Guest Users

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ProductPrice getProductPrice(String webstoreId, String productId, String effectiveAccountId)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

productId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the product.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the buyer account or guest buyer profile for which the request is made.

#### Return Value

Type: [ConnectApi.ProductPrice](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_price.htm "Pricing information for a product.")

#### Usage

This method respects buyer entitlements and only users entitled to view product and price data can access it.

If a store is segmented into markets, this API looks at the language parameter appended to the URL to determine the shopper’s locale and returns the appropriate values.

### getProductPrice(webstoreId, productId, effectiveAccountId, productSellingModelIds)

Get a product’s list and buyer price for specified product selling models.

#### API Version

56.0

#### Available to Guest Users

56.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ProductPrice getProductPrice(String webstoreId, String productId, String effectiveAccountId, List<String\> productSellingModelIds)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

productId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the product.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the buyer account or guest buyer profile for which the request is made.

productSellingModelIds

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

List of product selling model IDs for the product.

#### Return Value

Type: [ConnectApi.ProductPrice](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_price.htm "Pricing information for a product.")

### getProductPrices(webstoreId, effectiveAccountId, productIds)

Get the prices for multiple products using multiple product IDs.

#### API Version

54.0

#### Available to Guest Users

54.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.PricingResult getProductPrices(String webstoreId, String effectiveAccountId, List<String\> productIds)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the buyer account or guest buyer profile for which the request is made. If null, the default value is determined from context.

productIds

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

List of product IDs for which you want to get prices.

#### Return Value

Type: [ConnectApi.PricingResult](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_pricing_result.htm "Product pricing result.")

#### Usage

This method respects buyer entitlements and only users entitled to view product and price data can access it.

If a store is segmented into markets, this API looks at the language parameter appended to the URL to determine the shopper’s locale and returns the appropriate values.

### getProductPrices(webstoreId, effectiveAccountId, productIds, currencyIsoCode)

Get the prices for multiple products using multiple product IDs and a currency ISO code.

#### API Version

57.0

#### Available to Guest Users

57.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.PricingResult getProductPrices(String webstoreId, String effectiveAccountId, List<String\> productIds, String currencyIsoCode)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the buyer account or guest buyer profile for which the request is made. If null, the default value is determined from context.

productIds

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

List of product IDs for which you want to get prices.

currencyIsoCode

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The currency ISO code of the products.

#### Return Value

Type: ConnectApi.PricingResult

#### Usage

This method respects buyer entitlements and only users entitled to view product and price data can access it.

If a store is segmented into markets, this API looks at the language parameter appended to the URL to determine the shopper’s locale and returns the appropriate values.

### getProductPrices(webstoreId, effectiveAccountId, pricingInput)

Get the prices for multiple products.

#### API Version

49.0

#### Available to Guest Users

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.PricingResult getProductPrices(String webstoreId, String effectiveAccountId, ConnectApi.PricingInput pricingInput)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the buyer account or guest buyer profile for which the request is made. If null, the default value is determined from context.

pricingInput

Type: [ConnectApi.PricingInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_pricing.htm "Pricing for multiple products.")

A ConnectApi.PricingInput body with the list of line items to price.

#### Return Value

Type: [ConnectApi.PricingResult](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_pricing_result.htm "Product pricing result.")

#### Usage

This method respects buyer entitlements and only users entitled to view product and price data can access it.

If a store is segmented into markets, this API looks at the language parameter appended to the URL to determine the shopper’s locale and returns the appropriate values.

### getProductPrices(webstoreId, effectiveAccountId, pricingInput, currencyIsoCode)

Get the prices for multiple products using a currency ISO code.

#### API Version

57.0

#### Available to Guest Users

57.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.PricingResult getProductPrices(String webstoreId, String effectiveAccountId, ConnectApi.PricingInput pricingInput, String currencyIsoCode)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the buyer account or guest buyer profile for which the request is made. If null, the default value is determined from context.

pricingInput

Type: [ConnectApi.PricingInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_pricing.htm "Pricing for multiple products.")

A ConnectApi.PricingInput body with the list of line items to price.

currencyIsoCode

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The currency ISO code of the products.

#### Return Value

Type: ConnectApi.PricingResult

#### Usage

This method respects buyer entitlements and only users entitled to view product and price data can access it.

If a store is segmented into markets, this API looks at the language parameter appended to the URL to determine the shopper’s locale and returns the appropriate values.

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- getProductPrice(webstoreId, productId, effectiveAccountId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceStorePricing_static_methods.htm)
- getProductPrice(webstoreId, productId, effectiveAccountId, productSellingModelIds) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceStorePricing_static_methods.htm)
- getProductPrices(webstoreId, effectiveAccountId, productIds) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceStorePricing_static_methods.htm)
- getProductPrices(webstoreId, effectiveAccountId, productIds, currencyIsoCode) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceStorePricing_static_methods.htm)
- getProductPrices(webstoreId, effectiveAccountId, pricingInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceStorePricing_static_methods.htm)
- getProductPrices(webstoreId, effectiveAccountId, pricingInput, currencyIsoCode) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceStorePricing_static_methods.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.ProductPrice (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_price.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
