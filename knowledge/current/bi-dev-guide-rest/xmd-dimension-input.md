---
title: "Xmd Dimension Input"
domain: bi-dev-guide-rest
topic: xmd-dimension-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:03.017Z
estimatedTokens: 368
keywords: [Xmd, Dimension, Input, extended, metadata, Analytics, dataset]
---

# Xmd Dimension Input

> The extended metadata (Xmd) for a dimension in an Analytics dataset.

# Xmd Dimension Input

The extended metadata (Xmd) for a dimension in an Analytics dataset.

Properties

XmdDimensionInput inherits properties from the abstract [XmdBaseDimensionInput](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_xmd_base_dimension_input.htm "The base Xmd dimension for dimensions and derived dimensions."). These base properties appear in XmdDimensionInput alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| custom​Actions | Xmd​Dimension​Custom​Action​Input[] | A list of custom actions for the dimension. | Optional | 36.0 |
| members | Xmd​Dimension​Member​Input[] | Any member overrides for specific values of the dataset fields. For example, for the "Country" field, change the label of the "USA" to "United States." And change the color for this value in a chart to blue.NoteWhen you change the label, the new label only appears in the user interface. You can’t use the label in queries, like a query filter. For this, the best practice is to modify the field values when you create the dataset. | Optional | 36.0 |
| salesforce​Actions | Xmd​Dimension​Salesforce​Action​Input[] | The actions that appear in the action menu. You can only add actions that are defined in the page layouts for the corresponding Salesforce object. If left blank, Analytics shows all actions. | Optional | 36.0 |

## Related Topics

- XmdBaseDimensionInput (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_xmd_base_dimension_input.htm)
- Xmd​Dimension​Custom​Action​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_xmd_dimension_custom_action_input.htm)
- Xmd​Dimension​Member​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_xmd_dimension_member_input.htm)
- Xmd​Dimension​Salesforce​Action​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_xmd_dimension_salesforce_action_input.htm)
