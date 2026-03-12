---
title: "Base Asset Input"
domain: bi-dev-guide-rest
topic: base-asset-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.645Z
estimatedTokens: 259
keywords: [Base, Asset, Input, Analytics]
---

# Base Asset Input

> The base Analytics asset input.

# Base Asset Input

The base Analytics asset input.

Inherited by BaseDashboardInput, BaseLensInput, [DataConnectorInput](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_data_connector_input.htm "An Analytics data connector."), [DataflowInput](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_dataflow_input.htm "An Analytics dataflow."), [DatasetInput](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_dataset_input.htm "An Analytics dataset."), and [TemplateInput](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_template_input.htm "An Analytics template.").

Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| description | String | Short description of the asset | Required for POST; Optional in PATCH | 36.0 |
| name | String | The asset developer name. | Required for POST; Not allowed to edit in PATCH | 36.0 |
| label | String | The asset label. | Optional in POST and PATCH | 37.0 |

## Related Topics

- DataConnectorInput (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_data_connector_input.htm)
- DataflowInput (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_dataflow_input.htm)
- DatasetInput (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_dataset_input.htm)
- TemplateInput (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_template_input.htm)
