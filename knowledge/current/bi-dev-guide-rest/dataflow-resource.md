---
title: "Dataflow Resource"
domain: bi-dev-guide-rest
topic: dataflow-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.676Z
estimatedTokens: 664
keywords: [Dataflow, Resource, Reverts, previous, version, Postman]
---

# Dataflow Resource

> Returns a dataflow. Reverts a dataflow to a previous
    version.

# Dataflow Resource

Returns a dataflow. Reverts a dataflow to a previous version.

Resource URL

```

```

Formats

JSON

Available Version

37.0

## Available in Postman

To view and test a working example of this resource, see [getDataflow](https://www.postman.com/salesforce-developers/workspace/salesforce-developers/request/12721794-429f4832-5584-479c-a67d-f932a801e14b?action=share&source=copy-link&creator=26106753 "HTML (New Window)") in Postman. For information about how to authenticate your org with Postman, see the [CRM Analytics Rest API Quick Start](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm "Connect to a Salesforce Trailhead org and authenticate. Then make a request to the CRM Analytics REST API in Postman, and look at the response.").

HTTP Methods

GET PATCH (50.0) PUT

Run a Dataflow

To schedule a dataflow, use the [Dataflow Jobs Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataflowjobs.htm "Returns a list of dataflow jobs and starts a new dataflow job. Includes standard dataflows and recipes.") API. For examples of how to start and stop dataflows, see [Start and Stop a Dataflow Job or Recipe](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_run_schedule_sync_data.htm#start_stop_dataflows).

Schedule a Dataflow

To schedule a dataflow, use the [Schedule Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_schedule.htm "Retrieve, create or delete a schedule for a dataflow, recipe, or connection sync.") API. For examples of how to schedule dataflows, see [Schedule Dataflows, Recipes, and Data Syncs](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_run_schedule_sync_data.htm#schedule_data_assets).

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| historyId | String | Use the history ID to request a specific dataflow version. | Optional | 42.0 |

Response body for GET, PATCH, and PUT

[Dataflow](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dataflow.htm "An Analytics dataflow.")

Request body for PATCH

[Dataflow Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_dataflow_input.htm "An Analytics dataflow.")

Request body for PUT

Use the PUT API request to revert to a previous historical version. [Asset Revert History Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_asset_revert_history_input.htm "The Analytics asset history to use for a revert request.")

The following JSON shows the revert request for a dataflow version.

```

```

## Code Examples

```
/wave/dataflows/<dataflowId>
```

```
{
  "historyId" : "0RmS7000000xxxxxxx"
}
```

## Related Topics

- CRM Analytics Rest API Quick Start (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm)
- Dataflow Jobs Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataflowjobs.htm)
- Start and Stop a Dataflow Job or Recipe (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_run_schedule_sync_data.htm)
- Schedule Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_schedule.htm)
- Schedule Dataflows, Recipes, and Data Syncs (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_run_schedule_sync_data.htm)
- Dataflow (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dataflow.htm)
- Dataflow Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_dataflow_input.htm)
- Asset Revert History Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_asset_revert_history_input.htm)
