---
title: "Dataset Input"
domain: bi-dev-guide-rest
topic: dataset-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.733Z
estimatedTokens: 411
keywords: [Dataset, Input, Analytics]
---

# Dataset Input

> An Analytics dataset.

# Dataset Input

An Analytics dataset.

Properties

DatasetInput inherits properties from the abstract [BaseAssetInput](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_base_asset_input.htm "The base Analytics asset input."). These base properties appear in DatasetInput alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| current​Version​Id | ID | DEPRECATED The 18-character ID of the current version of this dataset. | Optional | 36.0–40.0 |
| dataset​Type | Connect​Wave​Dataset​Type​Enum | The type of the dataset. Valid values are:DefaultLiveStaged​DataTrended | Required | 50.0 |
| folder | ID | The 18-character ID of the folder that contains the dataset. | Optional | 36.0 |
| live​Connection | Live​Connection​Input | The live connection details for the dataset. | Optional | 50.0 |
| user​Xmd | Xmd​Input | The user XMD associated with this dataset. | Optional | 39.0 |
| visibility | Connect​Wave​Asset​Visibility​Type | Indicates whether the dataset is hidden from users with view access or not. Valid values are:All (Show all assets)Limited (Hide assets from viewers with view access) | Optional | 51.0 |

#### See Also

-   [Datasets List Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_datasets.htm "Returns a collection of Analytics dataset and creates a dataset.")

-   [Dataset Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataset_id.htm "Returns, deletes, or updates a dataset with the specified ID or API name.")

## Related Topics

- BaseAssetInput (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_base_asset_input.htm)
- Live​Connection​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_live_connection_input.htm)
- Xmd​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_xmd_input.htm)
- Datasets List Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_datasets.htm)
- Dataset Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataset_id.htm)
