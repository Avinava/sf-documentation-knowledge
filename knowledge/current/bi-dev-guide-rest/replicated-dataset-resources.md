---
title: "Replicated Dataset Resources"
domain: bi-dev-guide-rest
topic: replicated-dataset-resources
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.809Z
estimatedTokens: 452
keywords: [Replicated, Dataset, Resources, Manage, Analytics, datasets, know, connected, objects, data, sync, loads, source, can’t, visualized]
---

# Replicated Dataset Resources

> Manage Analytics replicated datasets, also know as connected objects. A data sync
  loads source object data as a connected object in Analytics. Connected objects can’t be
  visualized directly, but are used like a cache to speed up other jobs that pull from the source
  object and load it into a dataset.

# Replicated Dataset Resources

Manage Analytics replicated datasets, also know as connected objects. A data sync loads source object data as a connected object in Analytics. Connected objects can’t be visualized directly, but are used like a cache to speed up other jobs that pull from the source object and load it into a dataset.

Available resources:

| Resource | Description | Supported HTTP Method | Resource URL |
| --- | --- | --- | --- |
| Replicated Datasets List Resource | Returns a collection of replicated datasets, also know as connected objects. | GET, POST | wave/replicatedDatasets |
| Replicated Dataset Resource | Returns, updates, and deletes replicated datasets. | GET PATCH DELETE | /wave/replicatedDatasets/​<replicatedDatasetId> |
| Replicated Dataset Fields Resource | Returns a collection of fields for the specified connected object. | GET PATCH | /wave/replicatedDatasets/​<replicatedDatasetId>​/fields |

-   **[Replicated Datasets List Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_replicateddatasets.htm)**
    Returns a list of replicated datasets, also know as connected objects.
-   **[Replicated Dataset Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_replicateddatasets_id.htm)**
    Returns, updates, and deletes replicated datasets, also know as connected objects. A data sync loads source object data as a connected object in Analytics. Connected objects can’t be visualized directly, but are used like a cache to speed up other jobs that pull from the source object and load it into a dataset.
-   **[Replicated Dataset Fields Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_replicateddatasets_id_fields.htm)**
    Retrieves a list of fields for the specified connected object.

## Related Topics

- Replicated Datasets List
           Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_replicateddatasets.htm)
- Replicated Dataset
           Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_replicateddatasets_id.htm)
- Replicated Dataset Fields
           Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_replicateddatasets_id_fields.htm)
- Replicated Datasets List Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_replicateddatasets.htm)
- Replicated Dataset Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_replicateddatasets_id.htm)
- Replicated Dataset Fields Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_replicateddatasets_id_fields.htm)
