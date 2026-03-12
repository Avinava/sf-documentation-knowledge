---
title: "ConnectApi.ProductDetail"
domain: apex-reference
topic: connectapiproductdetail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:28.577Z
estimatedTokens: 426
keywords: [ConnectApi.ProductDetail, product]
---

# ConnectApi.ProductDetail

> Details of a product.

# ConnectApi.ProductDetail

Details of a product.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| attributeSetInfo | Map<String, ConnectApi.​ProductAttribute​SetInfo> | Map of the attribute set developer name to its metadata. | 50.0 |
| defaultImage | ConnectApi.​ProductMedia | Default image of the product. | 49.0 |
| entitlement | ConnectApi.​ProductEntitlement | Entitlement details for the product.To get pricing information for products in version 57 and later, use the CommerceStorePricing Class. | 49.0–56.0 |
| fields | Map<String, String> | List of fields for the product. | 49.0 |
| id | String | ID of the product. | 49.0 |
| mediaGroups | List<ConnectApi.​ProductMediaGroup> | List of media groups of the product. | 49.0 |
| primaryProduct​CategoryPath | ConnectApi.​ProductCategoryPath | Primary category path of the product. | 49.0 |
| productClass | ConnectApi.​ProductClass | Class of product. Values are:BundleSetSimpleVariationVariationParent | 50.0 |
| productSelling​Models | List<ConnectApi.​ProductSelling​Model> | List of product selling models for the product. | 56.0 |
| purchaseQuantity​Rule | ConnectApi.​PurchaseQuantity​Rule | If one exists, purchase quantity rule for the product. | 52.0 |
| urlName | String | SEO-friendly URL name for the product. | 59.0 |
| variationAttribute​Set | ConnectApi.​ProductAttributeSet | Variation attribute set for the product. | 50.0 |
| variationInfo | ConnectApi.​ProductVariationInfo | Available and allowable values for variation attributes and a map to resolve variation product IDs from attribute value combinations. | 50.0 |
| variationParentId | String | ID of the variation parent. | 50.0 |

## Related Topics

- Map (atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​ProductAttribute​SetInfo (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_attribute_set_info.htm)
- ConnectApi.​ProductMedia (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_media.htm)
- ConnectApi.​ProductEntitlement (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_entitlement.htm)
- CommerceStorePricing Class (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceStorePricing_static_methods.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​ProductMediaGroup (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_media_group.htm)
- ConnectApi.​ProductCategoryPath (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_category_path.htm)
- ConnectApi.​ProductClass (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
