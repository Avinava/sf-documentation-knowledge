---
title: "Base Xmd Dimension Input"
domain: bi-dev-guide-rest
topic: base-xmd-dimension-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.974Z
estimatedTokens: 620
keywords: [Base, Xmd, Dimension, Input, dimensions, derived]
---

# Base Xmd Dimension Input

> The base Xmd dimension for dimensions and derived dimensions.

# Base Xmd Dimension Input

The base Xmd dimension for dimensions and derived dimensions.

Inherited by [XmdDimensionInput](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_xmd_dimension_input.htm "The extended metadata (Xmd) for a dimension in an Analytics dataset.") and [XmdDerivedDimensionInput](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_xmd_derived_dimension_input.htm "The extended metadata (Xmd) for a derived dimension in an Analytics dataset.").

Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| conditional​Formatting | Map<String, Conditional​Formatting​Property​Input | The conditional formatting for a dimension | Optional | 42.0 |
| custom​Actions​Enabled | Boolean | Indicates whether custom actions are enabled for the dimension (true) or not (false). | Optional | 36.0 |
| date​Format | String | The date format to use when the dimension is a date. | Required for date dimensions | 36.0 |
| default​Action | String | The default action for the dimension. | Required | 50.0 |
| description | String | The description for the dimension. | Optional | 36.0 |
| field | String | The field name for the dimension. This is used in queries. | Required | 36.0 |
| fully​Qualified​Name | String | The fully qualified name for the dimension. | Required | 36.0 |
| image​Template | String | The image template for the dimension. | Optional | 36.0 |
| label | String | The label for the dimension. | Required | 36.0 |
| link​Template | String | The link template for the dimension. | Optional | 36.0 |
| link​Template​Enabled | String | Indicates whether link templates are enabled for the dimension (true) or not (false). | Optional | 36.0 |
| link​Tooltip | String | The tooltip to display for links. | Optional | 36.0 |
| record​Display​Fields | String[] | An ordered list of dimensions and measures. This is the default order to display the fields in the UI. | Required | 36.0 |
| record​Id​Field | String | The record ID for the dimension. | Required | 36.0 |
| record​Organization​Id​Field | String | The record organization ID for the dimension. | Required | 36.0 |
| salesforce​Actions​Enabled | String | Indicates whether Salesforce actions are enabled for the dimension (true) or not (false). | Required | 36.0 |
| show​In​Explorer | String | Indicates whether this dimension is visible in the Explorer (true) or not (false). | Required | 36.0 |

## Related Topics

- XmdDimensionInput (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_xmd_dimension_input.htm)
- XmdDerivedDimensionInput (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_xmd_derived_dimension_input.htm)
- Conditional​Formatting​Property​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_conditional_formatting_property_input.htm)
