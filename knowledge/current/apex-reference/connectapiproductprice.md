---
title: "ConnectApi.ProductPrice"
domain: apex-reference
topic: connectapiproductprice
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:39.722Z
keywords: [ConnectApi.ProductPrice]
---

# ConnectApi.ProductPrice

# ConnectApi.ProductPrice

Pricing information for a product.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| currencyIsoCode | String | Three-letter ISO 4217 currency code associated with the product.Products are priced using the currency for the buyer account or guest buyer profile. If your store doesn’t support the currency for the buyer account or guest buyer profile, products are priced using the default currency for your store. | 49.0 |
| listPrice | String | List price for the product. | 49.0 |
| lowestUnitPrice | String | Lowest unit price for the product. | 49.0 |
| priceAdjustment | ConnectApi.​PriceAdjustment​Schedule | Price adjustment schedule for the product. If a product selling model ID is specified in a request parameter, this property is empty. | 49.0 |
| pricebookEntryId | String | ID of the price book entry. If a product selling model ID is specified in a request parameter, this property is empty. | 49.0 |
| productPriceEntries | List<ConnectApi.ProductPriceEntry> | List of line item prices for the product. | 56.0 |
| unitPrice | String | Unit price for the product. If a product selling model ID is specified in a request parameter, this property is empty. | 49.0 |