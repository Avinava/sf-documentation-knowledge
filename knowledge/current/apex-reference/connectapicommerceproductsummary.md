---
title: "ConnectApi.CommerceProductSummary"
domain: apex-reference
topic: connectapicommerceproductsummary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:38.368Z
keywords: [ConnectApi.CommerceProductSummary]
---

# ConnectApi.CommerceProductSummary

# ConnectApi.CommerceProductSummary

Summary of a product in product search results.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| defaultImage | ConnectApi.​ProductMedia | Default image of the product. | 55.0 |
| fields | Map<String, ConnectApi.​FieldValue> | Map of fields belonging to the product. | 55.0 |
| id | String | ID of the product. | 55.0 |
| name | String | Name of the product. | 55.0 |
| prices | ConnectApi.​PricingResult​LineItem | Prices of the product. | 55.0 |
| productClass | ConnectApi.​ProductClass | Class of product. Values are:BundleSetSimpleVariationVariationParent | 55.0 |
| productSelling​ModelInformation | ConnectApi.​CommerceProduct​SellingModel | Product selling model information. | 59.0 |
| productVariation​Info | ConnectApi.ProductVariationInfo | Product variation attributes, metadata, and mappings of attribute combinations to variation product IDs. This field isn't available in stores with displayable fields enabled. | 63.0 |
| purchaseQuantityRule | ConnectApi.​PurchaseQuantity​Rule | If one exists, purchase quantity rule for the product. | 58.0 |
| urlName | String | SEO-friendly URL name for the product. | 59.0 |
| variationAttributeSet | ConnectApi.​ProductAttribute​SetSummary | Variation attribute set that’s associated with the product. | 55.0 |