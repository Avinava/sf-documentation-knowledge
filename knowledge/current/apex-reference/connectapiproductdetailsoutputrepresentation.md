---
title: "ConnectApi.ProductDetailsOutputRepresentation"
domain: apex-reference
topic: connectapiproductdetailsoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:28.584Z
estimatedTokens: 437
keywords: [product]
---

# ConnectApi.ProductDetailsOutputRepresentation

> Details about a product.

# ConnectApi.ProductDetailsOutputRepresentation

Details about a product.

Subclass of [ConnectApi.BaseOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_base_output.htm "Base Order Management output class.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| attributes | List<ConnectApi.ProductVariation​AttributeOutput​Representation> | List of variation attributes that define variations of the product. | 55.0 |
| currencyIsoCode | String | Currency ISO code. | 55.0 |
| childItems | List<ConnectApi.ProductBundleChild​AttributeOutput​Representation> | For bundle products only: an array of the individual products that are a part of the bundle. Only applicable for B2B or D2C stores. /> | 64.0 |
| description | String | Description of the product. | 55.0 |
| fields | Map<String, String> | List of the product’s fields. | 55.0 |
| imageGroups | List<ConnectApi.​ProductImage​GroupOutput​Representation> | List of the product’s image groups. | 55.0 |
| listPrice | Double | List price. | 55.0 |
| name | String | Name. | 55.0 |
| productClass | String | The product’s class. Possible values are: Bundle, Simple, Variation, Variation Parent, or Set. | 64.0 |
| productQuantityRule | Purchase Quantity Rule | If one exists, purchase quantity rule for the product. | 55.0 |
| productId | String | Product ID. | 55.0 |
| stockKeepingUnit | String | Stock keeping unit. | 55.0 |
| totalChildrenCount | Enum | For bundles only: the total number of child products in a bundle. Only applicable for B2B or D2C stores./> | 64.0 |
| unitPrice | Double | Unit price. | 55.0 |
| variants | List<ConnectApi.​ProductVariant​Output​Representation> | List of variations of the product. | 55.0 |

## Related Topics

- ConnectApi.BaseOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_base_output.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.ProductVariation​AttributeOutput​Representation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_variation_attribute_output.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.ProductBundleChild​AttributeOutput​Representation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_bundle_child_output.htm)
- Map (atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm)
- ConnectApi.​ProductImage​GroupOutput​Representation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_image_group_output.htm)
- Double (atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm)
- Purchase Quantity Rule (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_purchase_quantity_rule.htm)
- Enum (atlas.en-us.apexref.meta/apexref/apex_methods_system_enum.htm)
