---
title: "GET /api/v1/dataGraph/metadata?entityName={dataGraphName}"
domain: data-cloud
topic: get-apiv1datagraphmetadataentitynamedatagraphname
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:17:42.536Z
keywords: [GET, api, dataGraph, metadata?entityName=, dataGraphName, Syntax, Request, Parameters, Examples]
---

# GET /api/v1/dataGraph/metadata?entityName={dataGraphName}

# GET /api/v1/dataGraph/metadata?entityName={dataGraphName}

Request the metadata for a single data graph object. Returned data includes the object's primary data model object, related objects, and fields.

## Syntax

HTTP method

GET

Availability

Data Cloud v1.0, Salesforce v51.0

Formats

REST

URI

/api/v1/dataGraph/metadata?entityName={dataGraphName}

## Request Parameters

| Field Name | Field Type | Description |
| --- | --- | --- |
| entityName | string | API name of the data graph for which metadata is being requested. When a data graph is created, the API name is the value set in the DataGraphApiName field. |

## Examples

In this example, metadata for the data graph UnifiedIndividual\_DG is requested. The response returns metadata values for the primary data model object, related objects, and each field included in the data graph.

Request

```

```

Response

```

```