---
title: "GET /api/v1/dataGraph/{dataGraphName}/{dataGraphRecordId}"
domain: data-cloud
topic: get-apiv1datagraphdatagraphnamedatagraphrecordid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:17:42.540Z
keywords: [GET, api, dataGraph, dataGraphName, dataGraphRecordId, Syntax, Request, Parameters, Example]
---

# GET /api/v1/dataGraph/{dataGraphName}/{dataGraphRecordId}

# GET /api/v1/dataGraph/{dataGraphName}/{dataGraphRecordId}

Request data from a specified data graph.

## Syntax

HTTP method

GET

Availability

Data Cloud v1.0, Salesforce v51.0

Formats

REST

URI

/api/v1/dataGraph/{dataGraphName}/{dataGraphRecordId}

## Request Parameters

| Field Name | Field Type | Description |
| --- | --- | --- |
| dataGraphName | string | The data graph's API name. |
| dataGraphRecordId | int | The value of the primary key on the data graph record. The value of this field is the same as the value of the primary key for the data graph’s primary data model object. |

## Example

This example shows a request for the data graph individual\_eng\_dg, with record ID 100005. The response includes specific data values for the primary DMO and related fields specified in the data graph.

Request

```

```

Response

```

```