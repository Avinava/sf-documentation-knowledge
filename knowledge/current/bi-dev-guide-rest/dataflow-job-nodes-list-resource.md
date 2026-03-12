---
title: "Dataflow Job Nodes List Resource"
domain: bi-dev-guide-rest
topic: dataflow-job-nodes-list-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.660Z
estimatedTokens: 362
keywords: [Dataflow, Job, Nodes, Resource, collection, standard, recipe, works, jobs, ids, starting, 03C, 0eP, URL, Formats]
---

# Dataflow Job Nodes List Resource

> Returns a collection of dataflow job nodes for a standard dataflow or
   a recipe. This request only works for dataflow jobs with ids starting with 030, 03C, or 0eP.

# Dataflow Job Nodes List Resource

Returns a collection of dataflow job nodes for a standard dataflow or a recipe. This request only works for dataflow jobs with ids starting with 030, 03C, or 0eP. If the dataflow job id starts with 030, the result is an empty collection.

## Resource URL

```

```

## Formats

JSON

## Available Version

50.0

## Available in Postman

To view and test a working example of this resource, see [getDataflowJobNodeCollection](https://www.postman.com/salesforce-developers/workspace/salesforce-developers/request/12721794-53e1213e-2e24-403f-b1b0-1b4a09d6c7de?action=share&source=copy-link&creator=26106753 "HTML (New Window)") in Postman. For information about how to authenticate your org with Postman, see the [CRM Analytics Rest API Quick Start](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm "Connect to a Salesforce Trailhead org and authenticate. Then make a request to the CRM Analytics REST API in Postman, and look at the response.").

## Available Components

-   LWC — [lightning/analyticsWaveApi getDataflowJobNodes()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-dataflow-job-nodes.html)

## HTTP Methods

GET

## Response body for GET

[Dataflow Job Node Collection](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dataflow_job_node_collection.htm "The collection of nodes for an Analytics dataflow job.")

## Code Examples

```
/wave/dataflowjobs/<dataflowjobId>/nodes
```

## Related Topics

- CRM
     Analytics Rest API Quick Start (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm)
- Dataflow Job Node Collection (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dataflow_job_node_collection.htm)
