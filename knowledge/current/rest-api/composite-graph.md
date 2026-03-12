---
title: "Composite Graph"
domain: rest-api
topic: composite-graph
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:35.417Z
estimatedTokens: 346
keywords: [Composite, Graph, composite, graph, resource, lets, submit, operations., REST, API, version, 50.0, later., Note, Syntax, Request, Body, Response, Example]
---

# Composite Graph

> The composite graph resource lets you submit composite graph operations. This
        resource is available in REST API version 50.0 and later.

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

## Code Examples

```
{
    "graphs" : [
        {
            "graphId" : "graphId",
            "compositeRequest" : [
                compositeSubrequest,
                compositeSubrequest,
        ...
                ]
        }
    ]
}
```

```
{
    "graphs" : [
        {
            "graphId" : "graphId",
            "graphResponse" : {
                "compositeResponse" : [
                    compositeSubrequestResult,
                    compositeSubrequestResult,
                    compositeSubrequestResult,
                    ...
                ]
            },
            "isSuccessful" : flag
        },
        ...
    ]
}
```

```
curl -X POST https://MyDomainName.my.salesforce.com/services/data/v66.0/composite/graph -H "Authorization: Bearer token" -H "Content-Type: application/json" -d "@graphRequestBody.json"
```

```
{
    "graphs" : [
        {
            "graphId" : "1",
            "compositeRequest" : [
                {
                    "url" : "/services/data/v66.0/sobjects/Account/",
                    "body" : {
                        "name" : "Cloudy Consulting"
                    },
                    "method" : "POST",
                    "referenceId" : "reference_id_account_1"
                },
                {
                    "url" : "/services/data/v66.0/sobjects/Contact/",
                    "body" : {
                        "FirstName" : "Nellie",
                        "LastName" : "Cashman",
                        "AccountId" : "@{reference_id_account_1.id}"
                    },
                    "method" : "POST",
                    "referenceId" : "reference_id_contact_1"
                },
                {
                    "url" : "/services/data/v66.0/sobjects/Opportunity/",
                    "body" : {
                        "CloseDate" : "2024-05-22",
                        "StageName" : "Prospecting",
                        "Name" : "Opportunity 1",
                        "AccountId" : "@{reference_id_account_1.id}"
                    },
                    "method" : "POST",
                    "referenceId" : "reference_id_opportunity_1"
                }
            ]
        },
        {
            "graphId" : "2",
            "compositeRequest" : [
                {
                    "url" : "/services/data/v66.0/sobjects/Account/",
                    "body" : {
                        "name" : "Easy Spaces"
                    },
                    "method" : "POST",
                    "referenceId" : "reference_id_account_2"
                },
                {
                    "url" : "/services/data/v66.0/sobjects/Contact/",
                    "body" : {
                        "FirstName" : "Charlie",
                        "LastName" : "Dawson",
                        "AccountId" : "@{reference_id_account_2.id}"
                    },
                    "method" : "POST",
                    "referenceId" : "reference_id_contact_2"
                }
            ]
        }
    ]
}
```

```
{
   "graphs" : [
      {
         "graphId" : "1",
         "graphResponse" : {
            "compositeResponse" : [
               {
                  "body" : {
                     "id" : "001R00000064wc7IAA",
                     "success" : true,
                     "errors" : [ ]
                  },
                  "httpHeaders" : {
                     "Location" : "/services/data/v66.0/sobjects/Account/001R00000064wc7IAA"
                  },
                  "httpStatusCode" : 201,
                  "referenceId" : "reference_id_account_1"
               },
               {
                  "body" : {
                     "id" : "003R000000DDMlTIAX",
                     "success" : true,
                     "errors" : [ ]
                  },
                  "httpHeaders" : {
                     "Location" : "/services/data/v66.0/sobjects/Contact/003R000000DDMlTIAX"
                  },
                  "httpStatusCode" : 201,
                  "referenceId" : "reference_id_contact_1"
               },
               {
                  "body" : {
                     "id" : "006R0000003FPYxIAO",
                     "success" : true,
                     "errors" : [ ]
                  },
                  "httpHeaders" : {
                     "Location" : "/services/data/v66.0/sobjects/Opportunity/006R0000003FPYxIAO"
                  },
                  "httpStatusCode" : 201,
                  "referenceId" : "reference_id_opportunity_1"
               }
            ]
         },
         "isSuccessful" : true
      },
      {
         "graphId" : "2",
         "graphResponse" : {
            "compositeResponse" : [
               {
                  "body" : {
                     "id" : "001R00000064wc8IAA",
                     "success" : true,
                     "errors" : [ ]
                  },
                  "httpHeaders" : {
                     "Location" : "/services/data/v66.0/sobjects/Account/001R00000064wc8IAA"
                  },
                  "httpStatusCode" : 201,
                  "referenceId" : "reference_id_account_2"
               },
               {
                  "body" : {
                     "id" : "003R000000DDMlUIAX",
                     "success" : true,
                     "errors" : [ ]
                  },
                  "httpHeaders" : {
                     "Location" : "/services/data/v66.0/sobjects/Contact/003R000000DDMlUIAX"
                  },
                  "httpStatusCode" : 201,
                  "referenceId" : "reference_id_contact_2"
               }
            ]
         },
         "isSuccessful" : true
      }
   ]
}
```

## Related Topics

- composite subrequest (atlas.en-us.api_rest.meta/api_rest/resources_composite_graph_composite_subrequest.htm)
- composite subrequest results (atlas.en-us.api_rest.meta/api_rest/resources_composite_subrequest_result.htm)
