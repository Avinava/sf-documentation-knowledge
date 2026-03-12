---
title: "Run, Schedule, and Sync CRM Analytics Data with REST APIs"
domain: bi-dev-guide-rest
topic: run-schedule-and-sync-crm-analytics-data-with-rest-apis
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:04.958Z
estimatedTokens: 1963
keywords: [Run, Schedule, Sync, CRM, Analytics, Data, REST, APIs, API, automate, features, running, scheduling, syncs, dataflows]
---

# Run, Schedule, and Sync CRM Analytics Data with REST APIs

> You can use the CRM Analytics REST API to automate features, like running and scheduling
    data syncs, dataflows and recipes.

# Run, Schedule, and Sync CRM Analytics Data with REST APIs

You can use the CRM Analytics REST API to automate features, like running and scheduling data syncs, dataflows and recipes.

## Start and Stop a Dataflow Job or Recipe

You can use REST APIs to automate the start of a dataflow job or recipe to load data into datasets. This API is the equivalent of the "Run Now" functionality in the Data Manager. You can also stop the job while it’s running. Dataflow jobs include dataflows defined in wave/dataflows and recipes defined in wave/recipes.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_rest)

#### Note

You can use the Lightning Web Component lightning/analyticsWaveApi module to access wire adapters and functions to bring this functionality into Salesforce, without proxying the REST APIs directly. For more information, see the reference section for [lightning/analyticsWaveApi Wire Adapters and Functions](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/reference_wire_adapters_get_datasets) .

-   Start a Dataflow Job or Recipe

    To start a dataflow or recipe, use the [/wave/dataflowjobs](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataflowjobs.htm "Returns a list of dataflow jobs and starts a new dataflow job. Includes standard dataflows and recipes.") endpoint with a POST request. In the POST request body, use the dataflowId parameter to specify the dataflow to start. For a recipe, use the targetDataflowId value for the dataflowId.

    ```

    ```

    The POST request returns a [Dataflow Job](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dataflow_job.htm "An Analytics dataflow job.").

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_rest)

    #### Note

    If the sync has not previously run or has been updated since the last run, when you run a dataflow or recipe using this method, the data sync of associated objects runs automatically.


-   Stop a Dataflow Job or Recipe

    To stop a specific dataflow job, use the [/wave/dataflowjobs/<dataflowjobId>](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataflowjobs_id.htm "Returns a dataflow job and stops a current dataflow job. Includes standard dataflows and recipes.") endpoint with a PATCH request. The PATCH request uses the dataflowjobId request parameter to specify the dataflow job to stop.

    ```

    ```


## Explore Dataflow Job Nodes

You can use REST APIs to describe and explore each node of a dataflow job, including nodes for standard dataflows and for recipes.

-   View All Dataflow Job Nodes

    To list the nodes for the dataflow job, use the [/wave/dataflowjobs/<dataflowJobId>/nodes](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataflowjobs_nodes.htm "Returns a collection of dataflow job nodes for a standard dataflow or a recipe. This request only works for dataflow jobs with ids starting with 030, 03C, or 0eP. If the dataflow job id starts with 030, the result is an empty collection.") endpoint with a GET request.

    The GET request returns a [Dataflow Job Node Collection](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dataflow_job_collection.htm "A collection of Analytics dataflow jobs.").

    Note: This request only works for dataflow jobs with ids starting with 030, 03C, or 0eP. If the dataflow job id starts with 030, the result is an empty collection.

-   View a Single Dataflow Job Node

    To view the details of a single dataflow job node, use the [/wave/dataflowjobs/<dataflowJobId>/nodes/<nodeId>](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataflowjobs_nodes_id.htm "Returns a dataflow job node for a standard dataflow or a recipe. This request only works for dataflow jobs with ids starting with 030, 03C, or 0eP. The node id must start with 03L.") endpoint with a GET request.

    The GET request returns a [Dataflow Job Node](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dataflow_job_node.htm "A node in a dataflow job.").


## Schedule Dataflows, Recipes, and Data Syncs

You can automate dataflows, recipes, and data syncs to run on a time-based schedule by hour, week, or month, on specific days of the week, or dates in the month via the CRM Analytics REST API. For example, schedule a dataflow to ensure that the data is available by a particular time or to run the job during non-business hours. Use the assetId request parameter to specify the data asset type to schedule.

You can also set an event-based schedule to run a dataflow or recipe after the Salesforce Local connection syncs. Set an event-based schedule if the dataflow or recipe extracts data from Salesforce objects that have to sync before the dataflow or recipe runs. The event-based schedule applies to dataflows and recipes only and isn’t currently available for data syncs.

-   Schedule a Data Asset

    To schedule a data asset, use the [/wave/asset/<assetId>/schedule](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_schedule.htm "Retrieve, create or delete a schedule for a dataflow, recipe, or connection sync.") endpoint with a PUT request. The following are examples for the different types of schedules that can be set in the request body.

    Set Hourly Schedule - request body example

    This request body sets a time-based schedule that runs hourly every day from 2:30am America/Los Angeles, every 3 hours, and stops queuing at 8:00pm.

    ```

    ```

    Set Weekly Schedule - request body example

    This request body sets a time-based schedule that runs weekly on Mondays and Thursdays at 12:45am America/Los Angeles.

    ```

    ```

    Set Monthly Specific Schedule - request body example

    This request body sets a time-based schedule that runs monthly on the 1st, 15th, and 31st at 12:00am America/Los Angeles.

    ```

    ```

    Set Monthly Relative Schedule - request body example

    This request body sets a time-based schedule that runs every month on the last Sunday at 12:00am America/Los Angeles.

    ```

    ```

    Set Event-Based Schedule - request body example

    This request body sets an event-based schedule that runs a dataflow after the Salesforce Local connection syncs. Event-based schedules aren’t supported for Data Connections.

    ```

    ```

    The PUT request uses the assetId request parameter to specify the dataflow, recipe, or data sync to schedule.

    ```

    ```

    The PUT response is empty unless there’s an API error.

    The DELETE request uses the assetId request parameter to specify the dataflow, recipe, or data sync schedule to delete.


## Sync Data Connections

Use the CRM Analytics REST API to automate syncing connected data from your local Salesforce org or external data sources. Synced data is stored as objects that can be used in dataflows and recipes. This API is the equivalent of the "Run Now" functionality in the Data Manager.

-   Data Sync Run Now

    To start a data sync, use the[/wave/dataConnectors/<connectorId>/ingest](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataconnectors_connectorid_ingest.htm "Triggers the Analytics connector to run a data sync. This API is the equivalent of the “Run Now” UI feature.") endpoint with a POST request. Execute the POST to the URL with an empty request body.

    ```

    ```

    The POST request uses the connectorId request parameter to specify the data sync to run.

    ```

    ```

    The POST request returns a [Restore Dataset Version](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_restore_dataset_version.htm "The message returned for an Analytics data connector ingest request or an Analytics dataset version update request.").

## Code Examples

```
{
  "dataflowId": "02KS700000004G3eMAE",
  "command" : "start"
}
```

```
{
  "command" : "stop"
}
```

```
{
    "daysOfWeek" : [
       "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ],
    "lastHour" : 20,
    "hourlyInterval" : 3,
    "time" : {
       "hour" : 2,
       "minute" : 30,
       "timeZone" : "America/Los_Angeles"
    },
    "frequency" : "hourly"
}
```

```
{
  "daysOfWeek" : [
    "Monday", "Thursday"
  ],
  "time" : {
    "hour" : 0,
    "minute" : 45,
    "timeZone" : "America/Los_Angeles"
  },
  "frequency" : "weekly"
}
```

```
{
  "daysOfMonth" : [
    1, 31, 15
  ],
  "time" : {
    "hour" : 0,
    "minute" : 0,
    "timeZone" : "America/Los_Angeles"
  },
  "frequency" : "monthly"
}
```

## Related Topics

- /wave/dataflowjobs (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataflowjobs.htm)
- Dataflow Job (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dataflow_job.htm)
- /wave/dataflowjobs/<dataflowjobId> (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataflowjobs_id.htm)
- /wave/dataflowjobs/<dataflowJobId>/nodes (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataflowjobs_nodes.htm)
- Dataflow Job Node Collection (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dataflow_job_collection.htm)
- /wave/dataflowjobs/<dataflowJobId>/nodes/<nodeId> (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataflowjobs_nodes_id.htm)
- Dataflow Job Node (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dataflow_job_node.htm)
- /wave/asset/<assetId>/schedule (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_schedule.htm)
- /wave/dataConnectors/<connectorId>/ingest (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataconnectors_connectorid_ingest.htm)
- Restore Dataset Version (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_restore_dataset_version.htm)
