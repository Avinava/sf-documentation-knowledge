---
title: "Dataset Version Input"
domain: bi-dev-guide-rest
topic: dataset-version-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.736Z
estimatedTokens: 215
keywords: [Dataset, Version, Input, specific, Analytics]
---

# Dataset Version Input

> A specific version of an Analytics dataset.

# Dataset Version Input

A specific version of an Analytics dataset.

Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| is​Complete | Boolean | Indicates whether the Dataset Version is complete or not. | Optional | 36.0 |
| predicate | String | The row level security predicate to be applied to this Dataset Version. | Optional | 36.0 |
| sharing​Source | Asset​Reference​Input | Entity from which sharing rules should be inherited. | Optional | 40.0 |
| total​Rows | Integer | The total number of rows that make up the dataset version. | Optional | 36.0 |

#### See Also

-   [Dataset Version Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_datasets_id_versions.htm "Returns a list of dataset versions for a particular dataset or creates a version.")

## Related Topics

- Asset​Reference​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_asset_reference_input.htm)
- Dataset Version Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_datasets_id_versions.htm)
