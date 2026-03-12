---
title: "Pricing Result"
domain: chatterapi
topic: pricing-result
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.389Z
estimatedTokens: 145
keywords: [Pricing, Result, Product]
---

# Pricing Result

> Product pricing result.

# Pricing Result

Product pricing result.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| currencyIsoCode | String | Three-letter ISO 4217 currency code associated with the product. | Small, 49.0 | 49.0 |
| error | Error Response Output | Error code and message. | Big, 49.0 | 49.0 |
| pricingLine​ItemResults | Pricing Result Line Item[] | Pricing result line Items. | Small, 49.0 | 49.0 |
| success | Boolean | Specifies whether the execution was successful (true) or not (false). | Small, 49.0 | 49.0 |

## Related Topics

- Error Response Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_response.htm)
- Pricing Result Line Item (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_pricing_result_line_item.htm)
