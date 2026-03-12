---
title: "Dataflow Job Node"
domain: bi-dev-guide-rest
topic: dataflow-job-node
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.231Z
estimatedTokens: 452
keywords: [Dataflow, Job, Node]
---

# Dataflow Job Node

> A node in a dataflow job.

# Dataflow Job Node

A node in a dataflow job.

Properties

DataflowJobNode inherits properties from the abstract [BaseWaveAsset](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_base_wave_asset.htm "The base Analytics asset."). These base properties appear alongside DataflowJobNode specific properties in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| duration | Integer | The run time in seconds of a node. | Small, 50.0 | 50.0 |
| error​Log​Url | String | The URL to download the error log blob. | Small, 50.0 | 50.0 |
| input​Rows | Node​Row​Count | The count of input rows to a node. | Small, 50.0 | 50.0 |
| message | String | The error or informational message of a node | Small, 50.0 | 50.0 |
| nodeType | Connect​Wave​Elt​Node​Action​Enum | The node type. Valid values are:AppendAugmentBin​DigestCompute​ExpressionCompute​RelativeCsv​DigestDatasetDelete​RowsDeltaDigestDim2MeaExportFilterFlattenIndex​DimInternalPredictionRecipe​ExportRecipe​TransformsRegisterSfdc​FetchSlice​DatasetSobject​DigestUpdate | Small, 50.0 | 50.0 |
| output​Rows | Node​Row​Count | The count of output rows to a node. | Small, 50.0 | 50.0 |
| start​Date | Date | The start date of a node. | Small, 50.0 | 50.0 |
| status | Connect​Wave​Dataflow​Job​Node​Status​Enum | The run-time status of the node. Valid values are:AbortedErrorPendingRunningSuccessWarning | Small, 50.0 | 50.0 |

#### See Also

-   [Dataflow Jobs Node Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataflowjobs_nodes_id.htm "Returns a dataflow job node for a standard dataflow or a recipe. This request only works for dataflow jobs with ids starting with 030, 03C, or 0eP. The node id must start with 03L.")

## Related Topics

- BaseWaveAsset (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_base_wave_asset.htm)
- Node​Row​Count (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_node_row_count.htm)
- Dataflow Jobs Node Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataflowjobs_nodes_id.htm)
