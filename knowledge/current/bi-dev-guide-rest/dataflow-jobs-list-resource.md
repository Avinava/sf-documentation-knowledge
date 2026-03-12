---
title: "Dataflow Jobs List Resource"
domain: bi-dev-guide-rest
topic: dataflow-jobs-list-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.654Z
estimatedTokens: 1175
keywords: [Dataflow, Jobs, Resource, starts, new, job, Includes, standard, dataflows, recipes, Postman]
---

# Dataflow Jobs List Resource

> Returns a list of dataflow jobs and starts a new dataflow job.
      Includes standard dataflows and recipes.

# Dataflow Jobs List Resource

Returns a list of dataflow jobs and starts a new dataflow job. Includes standard dataflows and recipes.

Resource URL

```

```

Formats

JSON

Available Version

42.0

## Available in Postman

To view and test a working example of this resource, see [getDataflowJobCollection](https://www.postman.com/salesforce-developers/workspace/salesforce-developers/request/12721794-a6762dc7-b8f1-4c1c-8c0e-d51654c4989b?action=share&source=copy-link&creator=26106753 "HTML (New Window)") in Postman. For information about how to authenticate your org with Postman, see the [CRM Analytics Rest API Quick Start](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm "Connect to a Salesforce Trailhead org and authenticate. Then make a request to the CRM Analytics REST API in Postman, and look at the response.").

Available Components

-   LWC — [lightning/analyticsWaveApi getDataflowJobs()](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/reference_wire_adapters_get_dataflow_jobs)
-   LWC — [lightning/analyticsWaveApi createDataflowJob()](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/reference_analytics_create_dataflow_job)

HTTP Methods

GET POST

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| dataflow​Id | ID | Filters the collection to only contain dataflow jobs tied to this specific dataflow. ID must start with ‘02K’/wave/dataflowjobs?dataflowId=02K0000000xxxxx | Optional | 42.0 |
| job​Types | Connect​Job​Type​Enum[] | Filters the collection to only contain dataflow jobs for specified job types. Valid values are:Data​Cloud​RecipeData​SyncFile​UploadInternalOrchestratedRecipeRecipe_V3ReportRestoreUser/wave/dataflowJobs?jobTypes=Recipe,DataSync | Optional | 53.0 |
| license​Type | Connect​Analytics​License​Type​Enum | Filters the collection by the Analytics license type. Valid values are:Cdp (Data 360)Data​Pipeline​Query (Data Pipeline Query)Einstein​Analytics (CRM Analytics)Intelligent​Apps (Intelligent Apps)Sonic (Salesforce Data Pipeline) | Optional | 53.0 |
| page | String | A generated token that indicates the view of dataflow jobs to be returned. | Optional | 51.0 |
| page ​Size | Integer | The number of items to be returned in a single page. Minimum is 1, maximum is 200, and default is 25. | Optional | 51.0 |
| q | String | Search terms. Individual terms are separated by spaces. A wildcard is automatically appended to the last token in the query string. If the user’s search query contains quotation marks or wildcards, those symbols are automatically removed from the query string in the URI along with any other special characters. | Optional | 51.0 |
| started​After | String | Filters the collection to only contain dataflow jobs started at or after the specified date-time (in Epoch seconds in UTC)./wave/dataflowJobs?startedAfter=1622582667 | Optional | 53.0 |
| started​Before | String | Filters the collection to only contain dataflow jobs started at or before the specified date-time (in Epoch seconds in UTC)./wave/dataflowJobs?startedBefore=1622582667 | Optional | 53.0 |
| status | Connect​Wave​Dataflow​Job​Status​Enum | Filters the collection to only contain dataflow jobs with a specific runtime status. Valid values are:FailureQueuedRunningSuccessWarning/wave/dataflowJobs?status=Queued | Optional | 51.0 |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_rest)

#### Note

If a page or pageSize parameter isn’t provided, the response includes only the dataflow jobs run in the past 7 days. To see jobs older than 7 days, provide a page or pageSize parameter.

Response body for GET

[Dataflow Job Collection](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dataflow_job_collection.htm "A collection of Analytics dataflow jobs.")

Request body for POST

Use the POST API request to start a Dataflow. To stop a Dataflow, use the PATCH request on /wave/dataflowjobs/<dataflowjobId>. [Dataflow Job Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_dataflow_job_input.htm "An Analytics dataflow job.")

The following JSON shows how to start a dataflowJob.

```

```

Response body for POST

[Dataflow Job](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dataflow_job.htm "An Analytics dataflow job.")

Start or Stop a Dataflow Job

For examples about how to start and stop Dataflow Jobs, see [Start and Stop a Dataflow Job or Recipe](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_run_schedule_sync_data.htm#start_stop_dataflows)

## Code Examples

```
{
  "dataflowId": "02KS700000004G3eMAE",
  "command" : "start"
}
```

## Related Topics

- CRM Analytics Rest API Quick Start (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm)
- Dataflow Job
              Collection (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dataflow_job_collection.htm)
- Dataflow Job Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_dataflow_job_input.htm)
- Dataflow Job (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dataflow_job.htm)
- Start and Stop a Dataflow Job or Recipe (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_run_schedule_sync_data.htm)
