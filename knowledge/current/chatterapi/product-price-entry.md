---
title: "Product Price Entry"
domain: chatterapi
topic: product-price-entry
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.558Z
estimatedTokens: 223
keywords: [Product, Price, Entry, Line, item]
---

# Product Price Entry

> Line item price for the product.

# Product Price Entry

Line item price for the product.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| error | Error Response Output | Error code and error message. | Big, 56.0 | 56.0 |
| listPrice | String | List price for the product entry. | Small, 56.0 | 56.0 |
| priceAdjustment | Price Adjustment Schedule | Price adjustment schedule. | Small, 56.0 | 56.0 |
| pricebookEntryId | String | ID of the pricebook entry. | Small, 56.0 | 56.0 |
| productSellingModelId | String | ID of the product selling model. If no product selling model ID is specified in a request parameter, this property is empty. | Small, 56.0 | 56.0 |
| success | Boolean | Specifies whether execution was successful (true) or not (false). | Small, 56.0 | 56.0 |
| unitPrice | String | Unit price for the product entry. | Small, 56.0 | 56.0 |

## Related Topics

- Error Response Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_response.htm)
- Price Adjustment Schedule (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_price_adjustment_schedule.htm)
