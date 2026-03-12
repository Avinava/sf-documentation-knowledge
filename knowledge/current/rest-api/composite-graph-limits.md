---
title: "Composite Graph Limits"
domain: rest-api
topic: composite-graph-limits
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:35.441Z
estimatedTokens: 430
keywords: [Composite, Graph, Limits, limits, specific, composite, graph, resources., Review, platform, API, allocations, comprehensive, list, applicable, General, Graphs, Nodes]
---

# Composite Graph Limits

> These limits are specific to composite graph resources. Review the platform API limits
		and allocations for a comprehensive list of all applicable limits to composite graph API
		resources.

# Composite Graph Limits

These limits are specific to composite graph resources. Review the platform API limits and allocations for a comprehensive list of all applicable limits to composite graph API resources.

## General Limits on Graphs

| Item | Limit |
| --- | --- |
| Maximum number of graphs in one payload. | 75 |
| Maximum depth of a graph. | 15 |
| Maximum number of nodes used in one graph. | 500 |
| Maximum number of different nodes in one payload.Nodes are considered different if they use resources from different API versions, a different HTTP method, or different types of objects.For example:/services/data/v50.0/sobjects/account and /services/data/v52.0/sobjects/account are considered different.GET /services/data/v52.0/sobjects/account and PATCH /services/data/v52.0/sobjects/account are considered different./services/data/vXX.X/sobjects/account and /services/data/vXX.X/sobjects/contact are considered different. | 15 |
| Maximum number of graph failures within one request.When processing a composite graph request, if the number of graph failures exceeds the maximum limit of 14, processing is halted for the remaining graphs in the request. The response includes errors for the failed graphs, and the status for the remaining graphs is shown as PROCESSING_HALTED. | 14 |

## Limits on Nodes

| Item | Limit |
| --- | --- |
| Maximum number of nodes supported in one payload. | 500(For example, there can be one graph with 500 nodes, or 50 graphs with 10 nodes each.) |

#### See Also

-   [API Request Limits and Allocations](https://developer.salesforce.com/docs/atlas.en-us.260.0.salesforce_app_limits_cheatsheet.meta/salesforce_app_limits_cheatsheet/salesforce_app_limits_platform_api.htm)

## Related Topics

- depth (atlas.en-us.api_rest.meta/api_rest/resources_composite_graph_introduction.htm)
- nodes (atlas.en-us.api_rest.meta/api_rest/resources_composite_graph_introduction.htm)
