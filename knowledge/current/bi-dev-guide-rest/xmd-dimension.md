---
title: "Xmd Dimension"
domain: bi-dev-guide-rest
topic: xmd-dimension
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:04.866Z
estimatedTokens: 982
keywords: [Xmd, Dimension, extended, metadata, Analytics, dataset]
---

# Xmd Dimension

> The extended metadata (Xmd) for a dimension in an Analytics dataset.

# Xmd Dimension

The extended metadata (Xmd) for a dimension in an Analytics dataset.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| conditional​Formatting | Conditional​Formatting​Property | The conditional formatting for a dimension. | Small, 42.0 | 42.0 |
| custom​Actions | Xmd​Dimension​Custom​Action | The custom actions linked to this dimension. | Small, 36.0 | 36.0 |  |
| custom​Actions​Enabled | Boolean | Indicates whether the dimension has custom actions enabled (true) or not (false). | Small, 36.0 | 36.0 |  |
| default​Action | String | The default action for the dimension. | Small, 50.0 | 50 |
| field | String | The field name of the dimension (used in queries). | Small, 36.0 | 36.0 |
| label | String | The display name for the dataset field. Can be up to 40 characters. | Small, 36.0 | 36.0 |
| link​Template | String | The URL to open when the user clicks the link in the actions menu. Overrides the default URL link, which is /{{row.recordIdField}}. The default finds the Salesforce record with the record ID specified in the recordIdField Xmd parameter. Must be 255 characters or less. To open a Salesforce record from a multi-org environment, enter {{instanceUrl}} to populate the org URL specified in the organizations section of the Xmd. Example: /{{row.dimensionNameId}}. | Small, 36.0 | 36.0 |
| link​Template​Enabled | Boolean | Indicates whether to display the link to open a Salesforce record or URL (true) or not (false). If set to false or not set, the menu doesn't display the Open Record link option. | Small, 36.0 | 36.0 |
| link​Tooltip | String | The tooltip that a dashboard viewer sees when they hover over the link in a Analytics lens or dashboard. | Small, 36.0 | 36.0 |
| members | Xmd​Dimension​Member[] | Any customizations for specific values of the dataset fields. For example, for the "Country" field, change the label of the "USA" to "United States." And change the color for this value in a chart to blue.NoteWhen you change the label, the new label only appears in the user interface. You can’t use the label in queries, like a query filter. For this, the best practice is to modify the field values when you create the dataset. | Small, 36.0 | 36.0 |
| record​Display​Fields | String[] | An ordered list of dimensions and measures. These dataset fields are used to help a dashboard viewer identify a Salesforce record when multiple records match the action. For each field, specify its API name. In some instances, a dimension value is associated with multiple IDs and isn’t unique. For example, an opportunity with the name “acme” has multiple opportunity IDs (and records). But the action or link can only be directed to one record. | Small, 36.0 | 36.0 |
| record​Id​Field | String | The dataset field that contains the record ID of the Salesforce object that you want to perform the action on. | Small, 36.0 | 36.0 |
| record​Organization​Id​Field | String | The record organization ID for this dimension. | Small, 36.0 | 36.0 |
| salesforce​Actions | Xmd​Dimension​Salesforce​Action" [] | The actions that appear in the action menu. You can only add actions that are defined in the page layouts for the corresponding Salesforce object. If left blank, Analytics shows all actions. | Small, 36.0 | 36.0 |
| salesforce​Actions​Enabled | Boolean | Indicates if the Salesforce actions menu is enabled to appear on the field (true) or not (false). If set to false or not set, the menu doesn't display any actions. | Small, 36.0 | 36.0 |
| show​In​Explorer | Boolean | Indicates whether the dataset field can be selected from the dashboard designer or explorer when creating dashboards and lenses (true) or not (false). Even if showInExplorer is false, the field can still be used for SAQL queries, manually added in JSON, and accessed using the Analytics REST API. | Small, 36.0 | 36.0 |

## Related Topics

- Conditional​Formatting​Property (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_conditional_formatting_property.htm)
- Xmd​Dimension​Custom​Action (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_xmd_dimension_custom_action.htm)
- Xmd​Dimension​Member (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_xmd_dimension_member.htm)
- Xmd​Dimension​Salesforce​Action" (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_xmd_dimension_salesforce_action.htm)
