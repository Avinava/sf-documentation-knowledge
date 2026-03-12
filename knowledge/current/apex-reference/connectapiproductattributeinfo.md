---
title: "ConnectApi.ProductAttributeInfo"
domain: apex-reference
topic: connectapiproductattributeinfo
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:28.461Z
estimatedTokens: 468
keywords: [ConnectApi.ProductAttributeInfo, Product, attribute, information.]
---

# ConnectApi.ProductAttributeInfo

> Product attribute information.

# ConnectApi.ProductAttributeInfo

Product attribute information.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| allowableValues | List<String> | Active attribute picklist values that can be used to create variations. These values are determined by the order of the picklist values in Object Manager. | 50.0 |
| apiName | String | API name of the attribute. | 50.0 |
| availableValues | List<String> | Attribute picklist values that are available for the product in the store. These values are sorted by the order of values in the allowableValues property. | 50.0 |
| fieldEnumOrId | String | Field ID for custom fields or enumeration value for standard fields. | 50.0 |
| isGroupedBy | Boolean | Indicates if product variations are grouped by a specific attribute. | 64.0 |
| label | String | Label of the attribute. | 50.0 |
| objectName | String | Name of the object that contains the field. | 50.0 |
| options | List<ConnectApi.​ProductAttribute​ValueMetadata​Representation> | List of product attribute value metadata. | 63.0 |
| sequence | Integer | Sequence value determined by the order of the attributes under Commerce Setup for the attribute set. | 50.0 |
| viewType | ConnectApi.​ProductAttributeViewType | View type for product attributes. Values are:ColorSwatchDropdownPill | 63.0 |

#### See Also

-   [ConnectApi.ProductDetail](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_detail.htm "Details of a product.")

-   [ConnectApi.ProductAttributeSetInfo](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_attribute_set_info.htm "Attribute set metadata.")

-   [ConnectApi.ProductVariationInfo](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_variation_info.htm "Product variation attributes, metadata, and mappings of attribute combinations to variation product IDs.")

## Related Topics

- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- ConnectApi.​ProductAttribute​ValueMetadata​Representation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_summary.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- ConnectApi.​ProductAttributeViewType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.ProductDetail (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_detail.htm)
- ConnectApi.ProductAttributeSetInfo (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_attribute_set_info.htm)
- ConnectApi.ProductVariationInfo (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_variation_info.htm)
