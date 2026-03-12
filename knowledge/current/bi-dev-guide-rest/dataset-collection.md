---
title: "Dataset Collection"
domain: bi-dev-guide-rest
topic: dataset-collection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.258Z
estimatedTokens: 196
keywords: [Dataset, Collection, datasets]
---

# Dataset Collection

> A collection of datasets.

# Dataset Collection

A collection of datasets.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| datasets | Dataset[] | The list of datasets available to the current user. | Small, 36.0 | 36.0 |
| next​Page​Url | String | The URL to retrieve the next page of contents in the collection. | Small, 36.0 | 36.0 |
| total​Size | Integer | The total count of the elements in the collection, including all pages. | Medium, 36.0 | 36.0 |
| url | String | The URL to retrieve the collection. | Small, 36.0 | 36.0 |

#### See Also

-   [Datasets List Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_datasets.htm "Returns a collection of Analytics dataset and creates a dataset.")

## Related Topics

- Dataset (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dataset.htm)
- Datasets List Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_datasets.htm)
