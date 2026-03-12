---
title: "Schedule Resource"
domain: bi-dev-guide-rest
topic: schedule-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.812Z
estimatedTokens: 734
keywords: [Schedule, Resource, Retrieve, dataflow, recipe, connection, sync, URL, Formats, Version, Postman, Components, HTTP, PUT, Examples]
---

# Schedule Resource

> Retrieve, create or delete a schedule for a dataflow, recipe, or
   connection sync.

# Schedule Resource

Retrieve, create or delete a schedule for a dataflow, recipe, or connection sync.

## Resource URL

```

```

## Formats

JSON

## Available Version

GET (52.0), PUT (40.0), DELETE (43.0)

## Available in Postman

To view and test a working example of this resource, see [getSchedule](https://www.postman.com/salesforce-developers/workspace/salesforce-developers/request/12721794-0eb40a43-21af-47c0-8be5-1e93a6a38772?action=share&source=copy-link&creator=26106753 "HTML (New Window)") in Postman. For information about how to authenticate your org with Postman, see the [CRM Analytics Rest API Quick Start](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm "Connect to a Salesforce Trailhead org and authenticate. Then make a request to the CRM Analytics REST API in Postman, and look at the response.").

## Available Components

-   LWC — [lightning/analyticsWaveApi getSchedule()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-schedule.html)
-   LWC — [lightning/analyticsWaveApi updateSchedule()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-analytics-update-schedule.html)

## HTTP Methods

GET PUT DELETE

## Response body for GET and PUT

[Schedule](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_schedule.htm "A schedule on which to execute some type of Analytics asset job.")

## Request body for PUT

The request body can be one of the following schedule types: [Schedule Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_schedule_input.htm "A schedule on which to execute some type of Analytics asset."), [Hourly​Schedule​Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_hourly_schedule_input.htm "Specify a sub-daily schedule for an Analytics asset."), [Weekly​Schedule​Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_weekly_schedule_input.htm "Specify a weekly schedule for an Analytics asset."), [Monthly​Relative​Schedule​Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_monthly_relative_schedule_input.htm "Specify a monthly schedule for an Analytics asset where the day are relative to their location in the week."), [Monthly​Specific​Schedule​Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_monthly_specific_schedule_input.htm "Specify a monthly schedule for an Analytics asset where the days are fixed by numerical date."), or[Event​Based​Schedule​Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_event_based_schedule_input.htm "Specify an event-driven schedule for an Analytics asset.")

## Examples

For more examples on about how to schedule dataflows, recipes, and connection syncs, see [Schedule Dataflows, Recipes, and Data Syncs](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_run_schedule_sync_data.htm#schedule_data_assets)

## Code Examples

```
/wave/asset/<assetId>/schedule
```

## Related Topics

- CRM Analytics Rest API Quick Start (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm)
- Schedule (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_schedule.htm)
- Schedule Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_schedule_input.htm)
- Hourly​Schedule​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_hourly_schedule_input.htm)
- Weekly​Schedule​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_weekly_schedule_input.htm)
- Monthly​Relative​Schedule​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_monthly_relative_schedule_input.htm)
- Monthly​Specific​Schedule​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_monthly_specific_schedule_input.htm)
- Event​Based​Schedule​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_event_based_schedule_input.htm)
- Schedule Dataflows, Recipes, and Data Syncs (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_run_schedule_sync_data.htm)
