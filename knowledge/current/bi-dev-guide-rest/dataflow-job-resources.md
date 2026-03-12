---
title: "Dataflow Job Resources"
domain: bi-dev-guide-rest
topic: dataflow-job-resources
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.668Z
estimatedTokens: 578
keywords: [Dataflow, Job, Resources, jobs, sync, data, prep, recipes, standard, dataflows]
---

# Dataflow Job Resources

> Dataflow jobs are used to sync data for data prep recipes and standard dataflows.

# Dataflow Job Resources

Dataflow jobs are used to sync data for data prep recipes and standard dataflows.

Available resources:

| Resource | Description | Supported HTTP Method | Resource URL |
| --- | --- | --- | --- |
| Dataflow Jobs List Resource | Returns a list of dataflow jobs and starts a new dataflow job. Includes standard dataflows and recipes. | GET POST | /wave/dataflowjobs |
| Dataflow Job Resource | Returns a dataflow job and stops a current dataflow job. Includes standard dataflows and recipes. | GET PATCH | /wave/dataflowjobs/<dataflowJobId> |
| Dataflow Job Nodes List Resource | Returns a collection of dataflow job nodes for a standard dataflow or a recipe. This request only works for dataflow jobs with ids starting with 030, 03C, or 0eP. If the dataflow job id starts with 030, the result is an empty collection. | GET | /wave/dataflowjobs/<dataflowJobId>​/nodes |
| Dataflow Job Nodes Resource | Returns a dataflow job node for a standard dataflow or a recipe. This request only works for dataflow jobs with ids starting with 030, 03C, or 0eP. The node id must start with 03L. | GET | /wave/dataflowjobs/<dataflowJobId>​/nodes<nodeId> |

-   **[Dataflow Jobs List Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataflowjobs.htm)**
    Returns a list of dataflow jobs and starts a new dataflow job. Includes standard dataflows and recipes.
-   **[Dataflow Job Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataflowjobs_id.htm)**
    Returns a dataflow job and stops a current dataflow job. Includes standard dataflows and recipes.
-   **[Dataflow Job Nodes List Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataflowjobs_nodes.htm)**
    Returns a collection of dataflow job nodes for a standard dataflow or a recipe. This request only works for dataflow jobs with ids starting with 030, 03C, or 0eP. If the dataflow job id starts with 030, the result is an empty collection.
-   **[Dataflow Job Nodes Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataflowjobs_nodes_id.htm)**
    Returns a dataflow job node for a standard dataflow or a recipe. This request only works for dataflow jobs with ids starting with 030, 03C, or 0eP. The node id must start with 03L.

## Related Topics

- Dataflow Jobs List Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataflowjobs.htm)
- Dataflow Job Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataflowjobs_id.htm)
- Dataflow Job Nodes List Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataflowjobs_nodes.htm)
- Dataflow Job Nodes Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataflowjobs_nodes_id.htm)
