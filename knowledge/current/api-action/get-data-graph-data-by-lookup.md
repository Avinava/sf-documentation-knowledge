---
title: "Get Data Graph Data By Lookup"
domain: api-action
topic: get-data-graph-data-by-lookup
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.087Z
estimatedTokens: 187
keywords: [Data, Graph, Lookup, Cloud, API, space, key, REST, HTTP]
---

# Get Data Graph Data By Lookup

> Get data of a data graph in Data Cloud by data graph API name, data space name, and
      lookup key.

# Get Data Graph Data By Lookup

Get data of a data graph in Data Cloud by data graph API name, data space name, and lookup key.

This resource is available in API version 63.0 and later.

## Supported REST HTTP Methods

URI

\[/services/data/v63.0/actions/standard/cdpGetDataGraphByLookup\]

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
| lookupKey | TypestringDescriptionThe lookup key used to query the data graph. |
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
      "dataGraphApiName": "DGTest”,
      "lookupKey": "ssot__ContactPointAddress__dlm.ssot__Id__c=003SB000001a3GtYAI"
    }
  ]
}
```

```
{
   [
  {
    "actionName": "cdpGetDataGraphByLookup",
    "errors": null,
    "invocationId": null,
    "isSuccess": true,
    "outcome": null,
    "outputValues": {
      "data": [
        "{"ssot__Id__c":"1008703904","ssot__BirthDate__c":"2021-12-20T07:53:46.832Z", ...}]}",
        "{"ssot__Id__c":"1008703907","ssot__BirthDate__c":"2021-12-20T07:53:46.832Z", ...}]}"
      ]
    },
    "sortOrder": -1,
    "version": 1
  }
]
```
