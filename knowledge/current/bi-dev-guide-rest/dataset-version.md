---
title: "Dataset Version"
domain: bi-dev-guide-rest
topic: dataset-version
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.276Z
estimatedTokens: 523
keywords: [Dataset, Version, specific, Analytics]
---

# Dataset Version

> A specific version of an Analytics dataset.

# Dataset Version

A specific version of an Analytics dataset.

Properties

DatasetVersion inherits properties from the abstract [BaseWaveAsset](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_base_wave_asset.htm "The base Analytics asset."). These base properties appear in DatasetVersion alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| dataset | Asset​Reference | A reference to the dataset. | Small, 36.0 | 36.0 |
| files | Wave​File​Metadata[] | The list of information about the data files that make up the dataset version. | Medium, 36.0 | 36.0 |
| files​Url | String | The URL of the files resource for this dataset version. | Small, 36.0 | 36.0 |
| predicate | String | The row-level security predicate. Only returned if the predicate is set in the input request. | Small, 36.0 | 36.0 |
| predicate​Version | Double | The version of the row-level security predicate. Only returned if the predicate is set in the input request. | Small, 36.0 | 36.0 |
| security​Coverage​Url | String | The dataset sharing inheritance coverage information resource. | Small, 41.0 | 41.0 |
| sharing​Source | Asset​Reference | The entity from which sharing rules will be inherited for the dataset version. | Small, 40.0 | 40.0 |
| source | Asset​Reference | The parent dataflow or file for the dataset version.. | Small, 44.0 | 44.0 |
| total​Rows | Integer | The total number of rows for the dataset version. | Small, 40.0 | 40.0-52.0 |
| total​Row​Count | Integer | The total number of rows for the dataset version. | Small, 53.0 | 53.0 |
| xmd​Main | Xmd | The Xmd for this dataset version. | Medium, 36.0 | 36.0 |
| xmds​Url | String | The URL of the Xmd collection resource for this dataset version. | Small, 36.0 | 36.0 |

#### See Also

-   [Dataset Version Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_datasets_id_versions_id.htm "Returns an Analytics dataset version or updates the version predicate.")

## Related Topics

- BaseWaveAsset (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_base_wave_asset.htm)
- Asset​Reference (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_asset_reference.htm)
- Wave​File​Metadata (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_wave_file_metadata.htm)
- Xmd (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_xmd.htm)
- Dataset Version Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_datasets_id_versions_id.htm)
