---
title: "getProductPrices(webstoreId, effectiveAccountId, productIds,
      currencyIsoCode)"
domain: apex-reference
topic: getproductpriceswebstoreid-effectiveaccountid-productids-currencyisocode
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.812Z
keywords: [getProductPrices, webstoreId, effectiveAccountId, productIds, currencyIsoCode, Get, prices, multiple, products, product, IDs, currency, ISO, code., API, Version, Available, Guest, Users, Requires]
---

# getProductPrices(webstoreId, effectiveAccountId, productIds,
      currencyIsoCode)

> Get the prices for multiple products using multiple product IDs and
      a currency ISO code.

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