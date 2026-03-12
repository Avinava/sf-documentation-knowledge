---
title: "Dataflow Resources"
domain: bi-dev-guide-rest
topic: dataflow-resources
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.679Z
estimatedTokens: 204
keywords: [Dataflow, Resources, Dataflows, prepare, data, Analytics, creating, datasets, transformations, manipulate]
---

# Dataflow Resources

> Dataflows are used to prepare data for Analytics, creating one or more datasets using transformations to manipulate the data.

# Dataflow Resources

Dataflows are used to prepare data for Analytics, creating one or more datasets using transformations to manipulate the data.

Available resources:

| Resource | Description | Supported HTTP Method | Resource URL |
| --- | --- | --- | --- |
| Dataflow List Resource | Returns a collection of dataflows | GET | /wave/dataflows |
| Dataflow Resource | Returns a dataflow. Reverts a dataflow to a previous version. | GET PATCH PUT | /wave/dataflows/<dataflowId> |

-   **[Dataflows List Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataflows.htm)**
    Returns a collection of dataflows.
-   **[Dataflow Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataflows_id.htm)**
    Returns a dataflow. Reverts a dataflow to a previous version.

## Related Topics

- Dataflow List Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataflows.htm)
- Dataflow Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataflows_id.htm)
- Dataflows List Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataflows.htm)
