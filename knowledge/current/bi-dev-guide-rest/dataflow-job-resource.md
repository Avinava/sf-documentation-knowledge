---
title: "Dataflow Job Resource"
domain: bi-dev-guide-rest
topic: dataflow-job-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.658Z
estimatedTokens: 525
keywords: [Dataflow, Job, Resource, stops, current, Includes, standard, dataflows, recipes, URL, Formats, Version, Postman, Components, HTTP]
---

# Dataflow Job Resource

> Returns a dataflow job and stops a current dataflow job. Includes
      standard dataflows and recipes.

# Dataflow Job Resource

Returns a dataflow job and stops a current dataflow job. Includes standard dataflows and recipes.

## Resource URL

```

```

## Formats

JSON

## Available Version

42.0

## Available in Postman

To view and test a working example of this resource, see [getDataflowJob](https://www.postman.com/salesforce-developers/workspace/salesforce-developers/request/12721794-9c834bc7-2b8a-4ac4-befe-7c52eb26d9b2?action=share&source=copy-link&creator=26106753 "HTML (New Window)") in Postman. For information about how to authenticate your org with Postman, see the [CRM Analytics Rest API Quick Start](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm "Connect to a Salesforce Trailhead org and authenticate. Then make a request to the CRM Analytics REST API in Postman, and look at the response.").

## Available Components

-   LWC — [lightning/analyticsWaveApi getDataflowJob()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-dataflow-job.html)
-   LWC — [lightning/analyticsWaveApi updateDataflowJob()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-analytics-update-dataflow-job.html)

## HTTP Methods

GET PATCH

## Response body for GET and PATCH

[Dataflow Job](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dataflow_job.htm "An Analytics dataflow job.")

## Request body for PATCH

[Dataflow Job Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_dataflow_job_input.htm "An Analytics dataflow job.")

Use the PATCH API request to stop a Dataflow. To start a Dataflow, use the POST request on /wave/dataflowjobs.

The following JSON shows how to stop a dataflowJob. If the dataflowJob ID is 03CS70000004LcDMAU, the resource endpoint is /services/data/v60.0/wave/dataflowJobs/03CS70000004LcDMAU.

```

```

## Start or Stop a Dataflow Job

For examples of how to start and stop Dataflow Jobs, see [Start and Stop a Dataflow Job or Recipe](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_run_schedule_sync_data.htm#start_stop_dataflows)

## Code Examples

```
/wave/dataflowjobs/<dataflowjobId>
```

```
{
  "command" : "stop"
}
```

## Related Topics

- CRM Analytics Rest API Quick Start (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm)
- Dataflow Job (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dataflow_job.htm)
- Dataflow
              Job Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_dataflow_job_input.htm)
- Start and Stop a Dataflow Job or Recipe (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_run_schedule_sync_data.htm)
