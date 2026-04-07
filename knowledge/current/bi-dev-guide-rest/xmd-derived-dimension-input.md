---
title: "Xmd Derived Dimension Input"
domain: bi-dev-guide-rest
topic: xmd-derived-dimension-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:36:55.236Z
estimatedTokens: 395
keywords: [Xmd, Derived, Dimension, extended, metadata, Analytics, dataset]
---

> The extended metadata (Xmd) for a derived dimension in an Analytics dataset.

# Xmd Derived Dimension Input

The extended metadata (Xmd) for a derived dimension in an Analytics dataset.

Properties

XmdDerivedDimensionInput inherits properties from the abstract [XmdBaseDimensionInput](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_xmd_base_dimension_input.htm "The base Xmd dimension for dimensions and derived dimensions."). These base properties appear in XmdDerivedDimensionInput alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| custom​Actions | Xmd​Derived​Dimension​Custom​Action​Input[] | A list of custom actions for the derived dimension. | Optional | 36.0 |
| is​Multi​Value | Boolean | Indicates whether the derived dimension is multi-value (true) or not (false). | Optional | 36.0 |
| members | Xmd​Derived​Dimension​Member​Input[] | Any customizations for specific values of the dataset fields. For example, change the color for this value in a chart to blue.NoteWhen you change the label, the new label only appears in the user interface. You can’t use the label in queries, like a query filter. For this, the best practice is to modify the field values when you create the dataset. | Optional | 36.0 |
| salesforce​Actions | Xmd​Derived​Dimension​Salesforce​Action​Input[] | The actions that appear in the action menu. You can only add actions that are defined in the page layouts for the corresponding Salesforce object. If left blank, Analytics shows all actions. | Optional | 36.0 |

## Related Topics

- XmdBaseDimensionInput (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_xmd_base_dimension_input.htm)
- Xmd​Derived​Dimension​Custom​Action​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_xmd_derived_dimension_custom_action_input.htm)
- Xmd​Derived​Dimension​Member​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_xmd_derived_dimension_member_input.htm)
- Xmd​Derived​Dimension​Salesforce​Action​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_xmd_derived_dimension_salesforce_action_input.htm)
