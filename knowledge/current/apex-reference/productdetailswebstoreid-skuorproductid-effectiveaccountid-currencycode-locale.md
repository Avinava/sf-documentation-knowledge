---
title: "productDetails(webstoreId, skuOrProductId, effectiveAccountId, currencyCode, locale)"
domain: apex-reference
topic: productdetailswebstoreid-skuorproductid-effectiveaccountid-currencycode-locale
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.729Z
keywords: [productDetails, webstoreId, skuOrProductId, effectiveAccountId, currencyCode, locale, Get, details, product, web, store., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# productDetails(webstoreId, skuOrProductId, effectiveAccountId, currencyCode, locale)

> Get details of a product in a web store.

### productDetails(webstoreId, skuOrProductId, effectiveAccountId, currencyCode, locale)

Get details of a product in a web store.

#### API Version

55.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ProductDetailsOutputRepresentation productDetails(String webstoreId, String skuOrProductId, String effectiveAccountId, String currencyCode, String locale)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the WebStore.

skuOrProductId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

SKU or ID of the Product.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Effective Account ID. Required for B2B stores. For other stores, pass null.

currencyCode

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ISO currency code. If you pass null, the default store value is used.

locale

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Locale. If you pass null, the default store value is used.

excludeAttributeSetInfo

Type: [Bolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether the attribute set information for the product is returned.

excludeBundleChildrenInfo

Type: [Bolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether the child product information for the product bundle is returned.

excludeMedia

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether the media groups and default images of the product are returned.

excludeQuantityRule

Type: [Bolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether the quantity rule information for the product is returned.

excludeVariationInfo

Type: [Bolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether the variation information for the product is returned.

excludePrices

Type: [Bolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether the prices for the product is returned.

#### Return Value

Type: [ConnectApi.ProductDetailsOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_details_output.htm "Details about a product.")