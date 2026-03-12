---
title: "ConnectApi.CompositeCommerceProductInputRepresentation"
domain: apex-reference
topic: connectapicompositecommerceproductinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:24.657Z
estimatedTokens: 163
keywords: [ConnectApi.CompositeCommerceProductInputRepresentation, Composite, product, input.]
---

# ConnectApi.CompositeCommerceProductInputRepresentation

> Composite product input.

# ConnectApi.CompositeCommerceProductInputRepresentation

Composite product input.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| attributeSetInfo | ConnectApi.​ProductAttributeSetInputRepresentation | Attribute set information for a variation parent product. | Optional | 62.0 |
| categoryIds | List<String> | List of category IDs associated with the product. | Optional | 61.0 |
| productFields | Map<String, String> | A map of product field names and their values. | Required | 61.0 |
| productMedia | ConnectApi.​ProductMedia | Media associated with the product. | Optional | 61.0 |

## Related Topics

- ConnectApi.​ProductAttributeSetInputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_product_attribute_set.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​ProductMedia (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_media.htm)
