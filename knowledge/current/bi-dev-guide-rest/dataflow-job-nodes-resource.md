---
title: "Dataflow Job Nodes Resource"
domain: bi-dev-guide-rest
topic: dataflow-job-nodes-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.663Z
estimatedTokens: 331
keywords: [Dataflow, Job, Nodes, Resource, node, standard, recipe, works, jobs, ids, starting, 03C, 0eP, start, 03L]
---

# Dataflow Job Nodes Resource

> Returns a dataflow job node for a standard dataflow or a recipe. This
   request only works for dataflow jobs with ids starting with 030, 03C, or 0eP. The node id must start with 03L.

# Dataflow Job Nodes Resource

Returns a dataflow job node for a standard dataflow or a recipe. This request only works for dataflow jobs with ids starting with 030, 03C, or 0eP. The node id must start with 03L.

## Resource URL

```

```

## Formats

JSON

## Available Version

50.0

## Available in Postman

To view and test a working example of this resource, see [getDataflowJobNode](https://www.postman.com/salesforce-developers/workspace/salesforce-developers/request/12721794-b17759f0-5e57-49f5-b6ae-0e8126d85374?action=share&source=copy-link&creator=26106753 "HTML (New Window)") in Postman. For information about how to authenticate your org with Postman, see the [CRM Analytics Rest API Quick Start](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm "Connect to a Salesforce Trailhead org and authenticate. Then make a request to the CRM Analytics REST API in Postman, and look at the response.").

## Available Components

-   LWC — [lightning/analyticsWaveApi getDataflowJobNode()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-dataflow-job-node.html)

## HTTP Methods

GET

## Response body for GET

[Dataflow Job Node](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dataflow_job_node.htm "A node in a dataflow job.")

## Code Examples

```
/wave/dataflowjobs/<dataflowjobId>/nodes/<nodeId>
```

## Related Topics

- CRM
     Analytics Rest API Quick Start (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm)
- Dataflow Job Node (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dataflow_job_node.htm)
