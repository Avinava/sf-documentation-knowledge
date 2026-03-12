---
title: "Dataflow Job"
domain: bi-dev-guide-rest
topic: dataflow-job
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.222Z
estimatedTokens: 681
keywords: [Dataflow, Job, Analytics]
---

# Dataflow Job

> An Analytics dataflow job.

# Dataflow Job

An Analytics dataflow job.

## Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| dataflow | Asset​Reference | The dataflow run by this dataflow job. | Small, 42.0–45.0 | 42.0–45.0, Removed in 46.0 |
| duration | Integer | The run time, in seconds, of a dataflow job. | Small, 42.0 | 42.0 |
| end​Date | Date | The end time of a job’s execution. | Small, 55.0 | 55.0 |
| events | Job​Event​Collection | The events for this dataflow job. | Small, 60.0 | 60.0 |
| executed​Date | Date | The start date and time of a job’s execution. | Small, 46.0 | 46.0 |
| input​Nodes | Dataflow​Node​Collection | The input nodes for this dataflow job. | Small, 55.0 | 55.0 |
| job​Type | Connect​Job​Type​Enum | The type of job. Valid values are:Data​Cloud​RecipeData​SyncFile​UploadInternalOrchestratedRecipeRecipe_V3ReportRestoreUser | Small, 46.0 | 46.0 |
| license​Attributes | Licenses​Attributes | The Analytics license type and other properties. | Small, 51.0 | 51.0 |
| message | String | The error or informational message of a dataflow job. | Small, 42.0 | 42.0 |
| next​Run​Date | Date | The next time to run a job. | Small, 55.0 | 55.0 |
| nodes​Url | String | The URL to the collection of dataflow job nodes. | Small, 50.0 | 50.0 |
| output​Nodes | Dataflow​Node​Collection | The output nodes for this dataflow job. | Small, 55.0 | 55.0 |
| progress | Double | The progress of a job. | Small, 46.0 | 46.0 |
| retry​Count | Integer | The number of retries for a job. | Small, 55.0 | 55.0 |
| source | Asset​Reference | The source of a job. | Small, 46.0 | 46.0 |
| start​Date | Date | The start date of the dataflow job. | Small, 42.0 | 42.0 |
| status | Connect​Wave​Dataflow​Job​Status​Enum | The runtime status of a dataflow job. Valid values are:CancelledFailurePreprocessingQueuedRunningSuccessWarning | Small, 42.0 | 42.0 |
| sync​Dataflows | Dataflow​Collection | The dataflows to sync when the job is triggered. | Small, 50.0 | 50.0 |
| transform​Nodes | Dataflow​Node​Collection | The transform nodes for this dataflow job. | Small, 57.0 | 57.0 |
| wait​Time | Integer | The wait time in seconds before the start of a dataflow job execution. | Small, 53.0 | 53.0 |

#### See Also

-   [Dataflow Jobs List Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataflowjobs.htm "Returns a list of dataflow jobs and starts a new dataflow job. Includes standard dataflows and recipes.")

-   [Dataflow Job Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataflowjobs_id.htm "Returns a dataflow job and stops a current dataflow job. Includes standard dataflows and recipes.")

## Related Topics

- Asset​Reference (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_asset_reference.htm)
- Job​Event​Collection (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_job_event_collection.htm)
- Dataflow​Node​Collection (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dataflow_node_collection.htm)
- Licenses​Attributes (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_license_attributes.htm)
- Dataflow​Collection (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dataflow_collection.htm)
- Dataflow Jobs List Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataflowjobs.htm)
- Dataflow Job Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataflowjobs_id.htm)
