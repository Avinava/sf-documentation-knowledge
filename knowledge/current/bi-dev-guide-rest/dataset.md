---
title: "Dataset"
domain: bi-dev-guide-rest
topic: dataset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.253Z
estimatedTokens: 986
keywords: [Dataset, Analytics]
---

# Dataset

> An Analytics dataset.

# Dataset

An Analytics dataset.

## Properties

Dataset inherits properties from the abstract [BaseWaveAsset](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_base_wave_asset.htm "The base Analytics asset."). These base properties appear in Dataset alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| client​Shards​Url | String | The URL for the dataset shards. | Small, 36.0 | 36.0 |
| current​Version​Created​By | Wave​User | The creator of the current version of the dataset. Only returned if the filterGroup input parameter is set to Supplemental. | Supplemental, 36.0 | 36.0 |
| current​Version​Created​Date | Date | The time at which the current version of the dataset was created, in ISO8601 date format. Only returned if the filterGroup input parameter is set to Supplemental. | Supplemental, 36.0 | 36.0 |
| current​Version​Id | ID | The 18-character ID of the current dataset version. | Small, 36.0 | 36.0 |
| current​Version​Last​Modified​By | Wave​User | The user who last updated the current version of the dataset. Only returned if the filterGroup input parameter is set to Supplemental. | Supplemental, 36.0 | 36.0 |
| current​Version​Last​Modified​Date | Date | The last time the current version of the dataset was modified, in ISO8601 date format. Only returned if the filterGroup input parameter is set to Supplemental. | Supplemental, 36.0 | 36.0 |
| current​Version​Predicate | Security​Predicate | The security predicate information for the current version of the dataset. | Small, 59.0 | 59.0 |
| current​Version​Sharing​Inheritance | Sharing​Inheritance | The sharing inheritance information for the current version of the dataset. | Small, 59.0 | 59.0 |
| current​Version​Supports​New​Dates | Boolean | Indicates whether the current dataset version supports new date formats (true) or not (false). | Supplemental, 52.0 | 52.0 |
| current​Version​Total​Rows | Integer | The total number of rows in the dataset. | Supplemental, 42.0 | 42.0-52.0 |
| current​Version​Total​Row​Count | Integer | The total number of rows in the dataset. | Small, 53.0 | 53.0 |
| current​Version​Url | String | The URL for the current dataset version. | Small, 36.0 | 36.0 |
| data​Refresh​Date | Date | The last time this dataset was updated. | Small, 40.0 | 40.0 |
| dataset​Type | Connect​Wave​Dataset​Type​Enum | The type of the dataset. Valid values are:DefaultLiveStaged​DataTrended | Small, 41.0 | 41.0 |
| folder | Asset​Reference | The reference to the folder in which this dataset is stored. | Small, 36.0 | 36.0 |
| last​Metadata​Changed​Date | Date | The last time the metadata (folder, label, current, sharing, or security predicate) of this dataset was changed. | Small, 51.0 | 51.0 |
| last​Queried​Date | Date | The last time this dataset was queried. | Small, 39.0 | 39.0 |
| license​Attributes | License​Attributes | The Analytics license attributes associated with this dataset. | Small, 52.0 | 52.0 |
| live​Connection | Live​Connection | The live connection details for the dataset. | Small, 50.0 | 50.0 |
| user​Xmd | Xmd | The associated user XMD. | Medium, 36.0 | 36.0 |
| versions​Url | String | The URL for dataset versions. | Small, 36.0 | 36.0 |
| visibility | Connect​Wave​Asset​Visibility​Type | Indicates whether the dataset is hidden from users with view access or not. Valid values are:All (Show all assets)Limited (Hide assets from viewers with view access) | Small, 51.0 | 51.0 |

#### See Also

-   [Datasets List Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_datasets.htm "Returns a collection of Analytics dataset and creates a dataset.")

-   [Dataset Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataset_id.htm "Returns, deletes, or updates a dataset with the specified ID or API name.")

## Related Topics

- BaseWaveAsset (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_base_wave_asset.htm)
- Wave​User (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_wave_user.htm)
- Security​Predicate (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_security_predicate.htm)
- Sharing​Inheritance (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_sharing_inheritance.htm)
- Asset​Reference (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_asset_reference.htm)
- License​Attributes (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_license_attributes.htm)
- Live​Connection (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_live_connection.htm)
- Xmd (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_xmd.htm)
- Datasets List Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_datasets.htm)
- Dataset Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataset_id.htm)
