---
title: "Product Price"
domain: chatterapi
topic: product-price
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.554Z
estimatedTokens: 384
keywords: [Product, Price, Pricing]
---

# Product Price

> Pricing information for a product.

# Product Price

Pricing information for a product.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| childEntries | Product Price[] | List of line item prices for the child products. | Small, 65.0 | 65.0 |
| currencyIsoCode | String | Three-letter ISO 4217 currency code associated with the product.Products are priced using the currency for the buyer account or guest buyer profile. If your store doesn’t support the currency for the buyer account or guest buyer profile, products are priced using the default currency for your store. | Small, 49.0 | 49.0 |
| listPrice | String | List price for the product. | Small, 49.0 | 49.0 |
| lowestUnitPrice | String | Lowest unit price for the product. | Small, 59.0 | 59.0 |
| priceAdjustment | Price Adjustment Schedule | Price adjustment schedule for the product. If a product selling model ID is specified in a request parameter, this property is empty. | Small, 49.0 | 49.0 |
| pricebookEntryId | String | ID of the price book entry. If a product selling model ID is specified in a request parameter, this property is empty. | Small, 49.0 | 49.0 |
| productId | String | ID of the product. | Small, 65.0 | 65.0 |
| productPrice​Entries | Product Price Entry[] | List of line item prices for the product. | Small, 56.0 | 56.0 |
| unitPrice | String | Unit price for the product. If a product selling model ID is specified in a request parameter, this property is empty. | Small, 49.0 | 49.0 |

## Code Examples

```
{
  "childEntries": [
    {
      "childEntries": [],
      "currencyIsoCode": "USD",
      "listPrice": "59.99",
      "lowestUnitPrice": null,
      "priceAdjustment": null,
      "pricebookEntryId": "01uxx00000090SSAAY",
      "productId": "01txx0000006kYyAAI",
      "productPriceEntries": [
        {
          "error": {},
          "listPrice": "59.99",
          "lowestUnitPrice": null,
          "priceAdjustment": null,
          "pricebookEntryId": "01uxx00000090SSAAY",
          "productSellingModelId": null,
          "success": true,
          "unitPrice": "55.5"
        }
      ],
      "productSellingModelId": null,
      "unitPrice": "55.5"
    }
  ],
  "currencyIsoCode": "USD",
  "listPrice": "150.0",
  "lowestUnitPrice": null,
  "priceAdjustment": null,
  "pricebookEntryId": "01uxx000000910EAAQ",
  "productId": "01txx0000006knQAAQ",
  "productPriceEntries": [
    {
      "error": {},
      "listPrice": "150.0",
      "lowestUnitPrice": null,
      "priceAdjustment": null,
      "pricebookEntryId": "01uxx000000910EAAQ",
      "productSellingModelId": null,
      "success": true,
      "unitPrice": "100.0"
    }
  ],
  "productSellingModelId": null,
  "unitPrice": "100.0"
}
```

## Related Topics

- Price Adjustment Schedule (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_price_adjustment_schedule.htm)
- Product Price Entry (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_price_entry.htm)
