---
title: "ConnectApi.ProductOverview"
domain: apex-reference
topic: connectapiproductoverview
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T05:14:28.577Z
estimatedTokens: 226
keywords: [ConnectApi.ProductOverview, Overview, product, summary, information, prices, selected, fields, product’s, default, image.]
---

# ConnectApi.ProductOverview

> Overview of a product, with summary information about prices, selected
      fields, and the product’s default image.

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

## Related Topics

- ConnectApi.​ProductMedia (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_media.htm)
- ConnectApi.​ErrorResponse (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_error_response.htm)
- Map (atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​PricingResult​LineItem (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_pricing_result_line_item.htm)
- CommerceStorePricing Class (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceStorePricing_static_methods.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
