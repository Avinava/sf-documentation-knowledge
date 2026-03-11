---
title: "ConnectApi.ProductSummary"
domain: apex-reference
topic: connectapiproductsummary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:39.753Z
keywords: [ConnectApi.ProductSummary, See]
---

# ConnectApi.ProductSummary

# ConnectApi.ProductSummary

Product summary.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| defaultImage | ConnectApi.​ProductMedia | Default image of the product. | 52.0 |
| fields | Map<String, ConnectApi.​FieldValue> | Map of fields belonging to the product. | 52.0 |
| id | String | ID of the product. | 52.0 |
| name | String | Name of the product. | 52.0 |
| prices | ConnectApi.​PricingResult​LineItem | Prices of the product. | 52.0 |
| productClass | ConnectApi.​ProductClass | Class of product. Values are:BundleSetSimpleVariationVariationParent | 52.0 |
| productSelling​ModelInformation | ConnectApi.​CommerceProduct​SellingModel | Product selling model information. | 59.0 |
| purchaseQuantityRule | ConnectApi.​PurchaseQuantity​Rule | If one exists, purchase quantity rule for the product. | 52.0 |
| urlName | String | SEO-friendly URL name for the product. | 59.0 |
| variationAttributeSet | ConnectApi.​ProductAttribute​SetSummary | Variation attribute set that’s associated with the product. | 52.0 |

#### See Also

-   [ConnectApi.ProductSummaryPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_summary_collection.htm "Page of product summaries.")