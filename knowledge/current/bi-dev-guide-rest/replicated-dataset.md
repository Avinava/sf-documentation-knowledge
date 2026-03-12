---
title: "Replicated Dataset"
domain: bi-dev-guide-rest
topic: replicated-dataset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.515Z
estimatedTokens: 951
keywords: [Replicated, Dataset, Analytics, know, connected]
---

# Replicated Dataset

> An Analytics replicated dataset, also know as a connected object.

# Replicated Dataset

An Analytics replicated dataset, also know as a connected object.

Properties

ReplicatedDataset inherits properties from the abstract [BaseWaveAsset](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_base_wave_asset.htm "The base Analytics asset."). These base properties appear alongside ReplicatedDataset specific properties in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| advanced​Properties | Advanced​​Property​​Value​ | The advanced properties associated with this connected object. | Small, v44.0 | 44.0 |
| connection​Mode | Connect​Wave​Connection​Mode​Enum | The connection mode for data sync. For faster extracts, use Incremental or PeriodicFull. Valid values are:FullIncrementalPeriodic​Full | Small, 46.0 | 46.0 |
| connector | Data​Connector | Analytics connector information associated with this connected object | Small, 37.0 | 37.0 |
| dataset​Id | String | The ID of the dataset for the connected object. | Small, 38.0 | 38.0 |
| dataset​Label | String | The label of the dataset for the connected object. | Small, 56.0 | 56.0 |
| field​Count | Integer | The number of columns in the connected object. | Small, 38.0 | 38.0 |
| fields​Url | String | URL to get the fields associated with the connected object. | Small, 37.0 | 37.0 |
| filter​Applied | Boolean | Indicates whether filters have been applied to this connected object (true) or not (false). | Small, 38.0 | 38.0 |
| folder​Id | String | The ID of the folder associated with the dataset for the connected object. | Small, 56.0 | 56.0 |
| incremental​On | Boolean | Indicates whether this connected object is incrementally synced true) or not (false). | Small, 38.0 | 38.0-45.0 |
| last​Refreshed​Date | Date | The date when this connected object was last synced. | Small, 38.0 | 38.0 |
| output​Source | Output​Source | The output source, either a recipe or a connection, configured for this connected object. | Small, 50.0 | 50.0 |
| parquet​Output​Enabled | Boolean | Indicates whether to provide output in parquet format (true) or not (false). | Small, 50.0 | 60.0 |
| pass​Through​Filter | String | The pass through filter string for this connected object. | Small, 38.0 | 38.0 |
| replication​Dataflow​Id | String | The data sync job ID used to populate this connected object. | Small, 41.0 | 41.0 |
| row​Level​Sharing | String | Inherit row level sharing rules for this connected object. | Small, 44.0 | 44.0 |
| source​Object​Name | String | The name of the source object to sync. | Small, 37.0 | 37.0 |
| status | Replicated​Dataflow​Status​Enum | The status of the connected object. Valid values are:CancelledCheckpointDequeuedEnqueuedFailureInitiatedNewServicedStaleSuccessWarnings | Small, 38.0 | 38.0 |
| supported​Connection​Modes | Connect​Wave​Connection​Mode​Enum[] | The connection mode for data sync. For faster extracts, use Incremental or PeriodicFull. Valid values are:FullIncrementalPeriodic​Full | Small, 46.0 | 46.0 |
| uuid | String | The unique identifier for this dataset. | Small, 54.0 | 54.0 |

#### See Also

-   [Replicated Datasets List Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_replicateddatasets.htm "Returns a list of replicated datasets, also know as connected objects.")

-   [Replicated Dataset Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_replicateddatasets_id.htm "Returns, updates, and deletes replicated datasets, also know as connected objects. A data sync loads source object data as a connected object in Analytics. Connected objects can’t be visualized directly, but are used like a cache to speed up other jobs that pull from the source object and load it into a dataset.")

## Related Topics

- BaseWaveAsset (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_base_wave_asset.htm)
- Advanced​​Property​​Value​ (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_advanced_property_value.htm)
- Data​Connector (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_data_connector.htm)
- Output​Source (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_output_source.htm)
- Replicated Datasets List Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_replicateddatasets.htm)
- Replicated Dataset Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_replicateddatasets_id.htm)
