---
title: "Using a Composite Graph"
domain: rest-api
topic: using-a-composite-graph
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:44:25.827Z
keywords: [Composite, Graph]
---

# Using a Composite Graph

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