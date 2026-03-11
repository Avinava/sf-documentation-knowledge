---
title: "Composite Graph"
domain: rest-api
topic: composite-graph
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:44:25.269Z
keywords: [Composite, Graph, Note, Syntax, Request, Body, Response, Example]
---

# Composite Graph

# Composite Graph

The composite graph resource lets you submit composite graph operations. This resource is available in REST API version 50.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

#### Note

The response bodies and HTTP statuses of the requests are returned in a single response body. The entire request counts as a single call toward your API limits.

## Syntax

URI

/services/data/vXX.X/composite/graph

Formats

JSON

HTTP methods

POST

Authentication

Authorization: Bearer *token*

Request parameters

None

## Request Body

```

```

where each compositeSubrequest is a [composite subrequest](atlas.en-us.api_rest.meta/api_rest/resources_composite_graph_composite_subrequest.htm "The composite subrequest describes a subrequest to execute with the Composite Graph resource.").

## Response Body

```

```

| Name | Type | Description |
| --- | --- | --- |
| graphs | Array of graph responses. |  |
| graphId | String | The identifier of the graph. |
| graphResponse | Object | The response of the request. |
| compositeResponse | Array of composite subrequest results. | Results for each node in the graph. |
| isSuccessful | Boolean | Whether this graph was processed successfully (true) or not (false). |

## Example

Example Request

```

```

Example Request Body

```

```

Example Response Body

```

```