---
title: "ConnectApi.CommerceProductSummary"
domain: apex-reference
topic: connectapicommerceproductsummary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:26.688Z
estimatedTokens: 336
keywords: [ConnectApi.CommerceProductSummary, Summary, product, search, results.]
---

# ConnectApi.CommerceProductSummary

> Summary of a product in product search results.

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

## Related Topics

- ConnectApi.​ProductMedia (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_media.htm)
- Map (atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​FieldValue (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_field_value.htm)
- ConnectApi.​PricingResult​LineItem (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_pricing_result_line_item.htm)
- ConnectApi.​ProductClass (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.​CommerceProduct​SellingModel (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_commerce_product_selling_model.htm)
- ConnectApi.ProductVariationInfo (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_variation_info.htm)
- ConnectApi.​PurchaseQuantity​Rule (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_purchase_quantity_rule.htm)
- ConnectApi.​ProductAttribute​SetSummary (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_attribute_set_summary.htm)
