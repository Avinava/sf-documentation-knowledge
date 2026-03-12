---
title: "ConnectApi.ProductPriceEntry"
domain: apex-reference
topic: connectapiproductpriceentry
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:28.623Z
estimatedTokens: 197
keywords: [ConnectApi.ProductPriceEntry, Line, item, price, product]
---

# ConnectApi.ProductPriceEntry

> Line item price for the product.

# ConnectApi.ProductPriceEntry

Line item price for the product.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| error | ConnectApi.​ErrorResponse | Error code and error message. | 56.0 |
| listPrice | String | List price for the product entry. | 56.0 |
| priceAdjustment | ConnectApi.​PriceAdjustment​Schedule | Price adjustment schedule. | 56.0 |
| pricebookEntryId | String | ID of the pricebook entry. | 56.0 |
| productSelling​ModelId | String | ID of the product selling model. If no product selling model ID is specified in a request parameter, this property is empty. | 56.0 |
| success | Boolean | Specifies whether execution was successful (true) or not (false). | 56.0 |
| unitPrice | String | Unit price for the product entry. | 56.0 |

## Related Topics

- ConnectApi.​ErrorResponse (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_error_response.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​PriceAdjustment​Schedule (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_price_adjustment_schedule.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
