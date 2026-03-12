---
title: "Dataset Resources"
domain: bi-dev-guide-rest
topic: dataset-resources
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.707Z
estimatedTokens: 498
keywords: [Dataset, Resources, Manage, Analytics, versions]
---

# Dataset Resources

> Manage Analytics dataset and dataset versions.

# Dataset Resources

Manage Analytics dataset and dataset versions.

Available resources:

| Resource | Description | Supported HTTP Method | Resource URL |
| --- | --- | --- | --- |
| Datasets List Resource | Returns a collection of Analytics datasets and creates a dataset. | GET POST | /wave/datasets |
| Dataset Resource | Returns the Analytics dataset with the specified ID, deletes a dataset, or updates a dataset. | GET, DELETE, PATCH | /wave/datasets/<datasetIdOrApiName> |
| Dataset Versions List Resource | Returns a collection of dataset versions for a particular dataset. | GET | /wave/datasets/<datasetIdOrApiName>​/versions |
| Dataset Version Resource | Returns an Analytics dataset version or updates the predicate. | GET, PATCH | /wave/datasets/<datasetIdOrApiName>​/versions/<versionId> |
| Dataset Version File Resource | Provides access to the binary content of the dataset file. | GET | /wave/datasets/<datasetIdOrApiName>​/versions/<versionId>​/files/<fileId> |

-   **[Datasets List Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_datasets.htm)**
    Returns a collection of Analytics dataset and creates a dataset.
-   **[Dataset Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataset_id.htm)**
    Returns, deletes, or updates a dataset with the specified ID or API name.
-   **[Dataset Versions List Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_datasets_id_versions.htm)**
    Returns a list of dataset versions for a particular dataset or creates a version.
-   **[Dataset Version Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_datasets_id_versions_id.htm)**
    Returns an Analytics dataset version or updates the version predicate.
-   **[Dataset Version File Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_datasets_id_versions_id_files_id.htm)**
    Provides access to the binary content of the dataset version file.

## Related Topics

- Datasets List
           Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_datasets.htm)
- Dataset Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataset_id.htm)
- Dataset Versions List
           Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_datasets_id_versions.htm)
- Dataset Version
           Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_datasets_id_versions_id.htm)
- Dataset Version File Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_datasets_id_versions_id_files_id.htm)
- Datasets List Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_datasets.htm)
- Dataset Versions List Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_datasets_id_versions.htm)
- Dataset Version Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_datasets_id_versions_id.htm)
