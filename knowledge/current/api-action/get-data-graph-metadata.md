---
title: "Get Data Graph Metadata"
domain: api-action
topic: get-data-graph-metadata
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:57.911Z
estimatedTokens: 180
keywords: [Data, Graph, Metadata, Cloud, API, space, isn't, provided, uses, REST, HTTP]
---

# Get Data Graph Metadata

> Get metadata of a data graph in Data Cloud by data graph API name and data space name.
      If the data space name isn't provided, the API uses the default value.

# Get Data Graph Metadata

Get metadata of a data graph in Data Cloud by data graph API name and data space name. If the data space name isn't provided, the API uses the default value.

This resource is available in API version 64.0 and later.

## Supported REST HTTP Methods

URI

\[/services/data/v64.0/actions/standard/cdpGetDataGraphMetadata\]

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Request Parameters

| Input | Details |
| --- | --- |
| dataGraphApiName | TypestringDescriptionAPI name of the data graph to query. |
| dataSpaceApiName | TypestringDescriptionAPI name of the data space. |

## Example

Example Request Body

```

```

Example Response Body

```

```

## Code Examples

```
{
   {
  "inputs": [
    {
      "dataspaceApiName": "default",
      "dataGraphApiName": "DGTest”
    }
  ]
}
```

```
[
  {
    "actionName": "cdpGetDataGraphMetadata",
    "errors": null,
    "invocationId": null,
    "isSuccess": true,
    "outcome": null,
    "outputValues": {
      "dataGraphMetadata": [
        "{"createdBy":"005SB000000wYK5YAM","createdDate":"Fri Apr 04 06:55:04 GMT 2025","dataspaceName":"AMER","description":null,"id":"0g7SB000000Ku2rYAC","label":"Data Graph Demo","modifiedBy":null,"modifiedDate":null,"name":"Data_Graph_Demo","cacheDurationInDays":null,"dayZeroMappingDevName":null,"dayZeroTransformDevName":null,...}"
      ]
    },
    "sortOrder": -1,
    "version": 1
  }
]
```
