---
title: "ConnectApi.ProductOverview"
domain: apex-reference
topic: connectapiproductoverview
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:39.717Z
keywords: [ConnectApi.ProductOverview]
---

# ConnectApi.ProductOverview

# ConnectApi.ProductOverview

Overview of a product, with summary information about prices, selected fields, and the product’s default image.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| defaultImage | ConnectApi.​ProductMedia | Media representation of the product's default image. | 54.0 |
| error | ConnectApi.​ErrorResponse | Error code and error message. | 54.0 |
| fields | Map<String, String> | Map of fields belonging to the product. | 54.0 |
| id | String | ID of the product. | 54.0 |
| prices | ConnectApi.​PricingResult​LineItem | Price of the product.To get pricing information for products in version 58 and later, use the CommerceStorePricing Class. | 54.0–57.0 |
| sku | String | SKU of the product. | 54.0 |
| success | Boolean | Represents whether execution was successful and product overview information was retrieved without error. | 54.0 |