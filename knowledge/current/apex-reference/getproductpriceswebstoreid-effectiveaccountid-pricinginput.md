---
title: "getProductPrices(webstoreId, effectiveAccountId,
      pricingInput)"
domain: apex-reference
topic: getproductpriceswebstoreid-effectiveaccountid-pricinginput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.812Z
keywords: [getProductPrices, webstoreId, effectiveAccountId, pricingInput, Get, prices, multiple, products., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# getProductPrices(webstoreId, effectiveAccountId,
      pricingInput)

> Get the prices for multiple products.

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