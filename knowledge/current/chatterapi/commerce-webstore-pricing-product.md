---
title: "Commerce Webstore Pricing Product"
domain: chatterapi
topic: commerce-webstore-pricing-product
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.491Z
estimatedTokens: 433
keywords: [Commerce, Webstore, Pricing, Product, buyer, price]
---

# Commerce Webstore Pricing Product

> Get the list and buyer price for a product.

# Commerce Webstore Pricing Product

Get the list and buyer price for a product.

Getting prices for products respects buyer entitlements and only users entitled to view product and price data can access it.

To get price information, the context store and account must have 25 or fewer price books associated with them. To reduce the number of active price books for the account within the store, you can change the active status, modify valid dates, or remove assignments of price books.

If a store is segmented into markets, this API looks at the language parameter appended to the URL to determine the shopper’s locale and returns the appropriate values.

Resource

```

```

Resource example

```

```

Available version

49.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| currency​IsoCode | String | Three-letter ISO 4217 currency code associated with the cart. | Optional | 57.0 |
| effective​AccountId | String | ID of the account for which the request is made. If unspecified, defaults to the account ID for the context user. | Optional | 49.0 |
| includeChild​ProductPrices | Boolean | Indicates whether to include child product prices in the response (true) or not (false). Default value is false. | Optional | 65.0 |
| productSelling​ModelIds | String[] | List of product selling model IDs for the product. | Optional | 56.0 |
| allProduct​SellingModel​Prices | String[] | List of product selling model prices for the product. | Optional | 60.0 |

Response body for GET

[Product Price](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_price.htm "Pricing information for a product.")

## Code Examples

```
/commerce/webstores/webstoreId/pricing/products/productId
```

```
https://yourInstance.salesforce.com/services/data/66.0/commerce/webstores​/0ZExx000000005rGAA/pricing/products/01txx0000006knQAAQ
```

## Related Topics

- Product Price (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_price.htm)
