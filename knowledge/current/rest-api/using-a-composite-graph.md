---
title: "Using a Composite Graph"
domain: rest-api
topic: using-a-composite-graph
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:36.060Z
estimatedTokens: 448
keywords: [Composite, Graph, how, demonstrates]
---

# Using a Composite Graph

> This example shows how to use a composite graph. It also demonstrates how one request can use more than one composite graph.

# Using a Composite Graph

This example shows how to use a composite graph. It also demonstrates how one request can use more than one composite graph.

-   Regular [composite requests](atlas.en-us.api_rest.meta/api_rest/resources_composite_composite.htm "Executes a series of REST API requests in a single POST request, or retrieves a list of other composite resources with a GET request.") allow you to execute a series of REST API requests in a single call. And you can use the output of one request as the input to a subsequent request.

-   Composite graphs extend regular composite requests by allowing you to assemble a more complicated and complete series of related objects and records.

-   Composite graphs also enable you to ensure that the steps in a given set of requests are either all completed or all not completed. If you use this option, you don’t have to check which requests were successful.

-   Regular composite requests have a limit of 25 subrequests. Composite graphs increase this limit to 500.


Create a request:

```

```

where the file data.json contains the definition of the graphs. The general format for the request body is:

```

```

where compositeSubrequest is a [composite subrequest result](atlas.en-us.api_rest.meta/api_rest/resources_composite_subrequest_result.htm "The composite subrequest result describes the result for a subrequest.").

For example, two composite graph requests each create an Account and then create related records:

```

```

The response is:

```

```

For more information, see [Using Composite Graphs](atlas.en-us.api_rest.meta/api_rest/resources_composite_graph_introduction.htm "Composite graphs provide an enhanced way to perform composite requests, which execute a series of REST API requests in a single call.").

## Code Examples

```
curl -X POST curl https://MyDomainName.my.salesforce.com/services/data/v66.0/composite/graph -H "Authorization: Bearer token" -H "Content-Type: application/json" --data @data.json
```

```
{
  "graphs": [
    {
      "graphId": "graphId",
      "compositeRequest": [
        compositeSubrequest,
        compositeSubrequest,
        ...
      ]
    },
    {
      "graphId": "graphId",
      "compositeRequest": [
        compositeSubrequest,
        compositeSubrequest,
        ...
      ]
    },
    ...
  ]
}
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

- composite requests (atlas.en-us.api_rest.meta/api_rest/resources_composite_composite.htm)
- composite subrequest
                result (atlas.en-us.api_rest.meta/api_rest/resources_composite_subrequest_result.htm)
- Using Composite Graphs (atlas.en-us.api_rest.meta/api_rest/resources_composite_graph_introduction.htm)
