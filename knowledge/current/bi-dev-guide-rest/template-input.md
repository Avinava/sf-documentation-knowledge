---
title: "Template Input"
domain: bi-dev-guide-rest
topic: template-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.886Z
estimatedTokens: 387
keywords: [Template, Input, Analytics]
---

# Template Input

> An Analytics template.

# Template Input

An Analytics template.

Properties

TemplateInput inherits properties from the abstract [BaseAssetInput](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_base_asset_input.htm "The base Analytics asset input."). These base properties appear in TemplateInput alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| asset​Version | Double | The asset version to set for this template. Only used on template update. | Optional | 54.0 |
| data​Transform​Ids | String[] | A list of data transform IDs to include in the template. Data transforms bring data from Data 360 into Analytics. | Optional | 59.0 |
| dataflow | Asset​Reference​Input | The dataflow associated with this app. | Optional | 39.0 |
| folder​Source | Asset​Reference​Input | The folder that this template is created from. | Required | 39.0 |
| recipe​Ids | String[] | A list of recipe IDs to include in the template. Recipes with datasets are automatically included using the dataset to folder connection. This list is for recipes without datasets. | Optional | 55.0 |

#### See Also

-   [Templates List Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_templates.htm "Returns a list of Analytics templates, or creates a template.")

-   [Template Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_templates_id.htm "Returns, deletes, or updates an Analytics template.")

## Related Topics

- BaseAssetInput (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_base_asset_input.htm)
- Asset​Reference​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_asset_reference_input.htm)
- Templates List Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_templates.htm)
- Template Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_templates_id.htm)
