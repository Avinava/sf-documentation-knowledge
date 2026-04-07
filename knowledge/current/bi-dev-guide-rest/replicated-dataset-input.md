---
title: "Replicated Dataset Input"
domain: bi-dev-guide-rest
topic: replicated-dataset-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:36:54.869Z
estimatedTokens: 469
keywords: [Replicated, Dataset, Analytics, know, connected]
---

> An Analytics replicated dataset, also know as a connected object.

# Replicated Dataset Input

An Analytics replicated dataset, also know as a connected object.

## Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| advanced​Properties | Advanced​​Property​​Value​​Input | The user-specified advanced properties associated with this connected object. | Optional | 44.0 |
| connection​Mode | Connect​Wave​Connection​Mode​Enum | The connection mode for data sync. For faster extracts, use Incremental or PeriodicFull. Valid values are:FullIncrementalPeriodic​Full | Optional | 46.0 |
| connector​Id | String | The id of the Analytics connector used to sync this connected object. | Required | 39.0 |
| parquet​Output​Enabled | Boolean | Indicates whether to provide output in parquet format (true) or not (false). | Optional | 60.0 |
| full​Refresh | Boolean | Indicates whether to perform a one-time full refresh during the next run (true) as opposed to an incremental refresh (false). | Optional | 41.0 |
| pass​Through​Filter | String | The pass through filter for the connected object | Optional | 38.0 |
| source​Object​Name | String | The name of the source object to be synced. | Required | 37.0 |

#### See Also

-   [Replicated Datasets List Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_replicateddatasets.htm "Returns a list of replicated datasets, also know as connected objects.")

-   [Replicated Dataset Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_replicateddatasets_id.htm "Returns, updates, and deletes replicated datasets, also know as connected objects. A data sync loads source object data as a connected object in Analytics. Connected objects can’t be visualized directly, but are used like a cache to speed up other jobs that pull from the source object and load it into a dataset.")

## Related Topics

- Advanced​​Property​​Value​​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_advanced_property_value_input.htm)
- Replicated Datasets List Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_replicateddatasets.htm)
- Replicated Dataset Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_replicateddatasets_id.htm)
