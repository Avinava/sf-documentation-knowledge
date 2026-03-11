---
title: "ConnectApi.ProductAttributeInfo"
domain: apex-reference
topic: connectapiproductattributeinfo
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:42:39.637Z
keywords: [ConnectApi.ProductAttributeInfo, See]
---

# ConnectApi.ProductAttributeInfo

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