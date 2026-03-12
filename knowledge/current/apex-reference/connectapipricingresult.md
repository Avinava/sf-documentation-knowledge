---
title: "ConnectApi.PricingResult"
domain: apex-reference
topic: connectapipricingresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:28.448Z
estimatedTokens: 130
keywords: [ConnectApi.PricingResult, Product, pricing, result.]
---

# ConnectApi.PricingResult

> Product pricing result.

# ConnectApi.PricingResult

Product pricing result.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| currencyIsoCode | String | Three-letter ISO 4217 currency code associated with the product. | 49.0 |
| error | ConnectApi.​ErrorResponse | Error code and message. | 49.0 |
| pricingLine​ItemResults | List<ConnectApi.​PricingResultLineItem> | Pricing result line Items. | 49.0 |
| success | Boolean | Specifies whether the execution was successful (true) or not (false). | 49.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​ErrorResponse (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_error_response.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​PricingResultLineItem (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_pricing_result_line_item.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
