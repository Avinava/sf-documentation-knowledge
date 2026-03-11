---
title: "Using Composite Graphs"
domain: rest-api
topic: using-composite-graphs
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:44:25.282Z
keywords: [Composite, Graphs, Defining, JSON, Example, Create, Accounts, Contacts, Campaigns, Opportunities, Leads, CampaignMembers, Graph, Request, GET, Details, Resource, Then, Depth, AllOrNone]
---

# Using Composite Graphs

# Using Composite Graphs

Composite graphs provide an enhanced way to perform composite requests, which execute a series of REST API requests in a single call.

-   Regular [composite requests](atlas.en-us.api_rest.meta/api_rest/resources_composite_composite.htm "Executes a series of REST API requests in a single POST request, or retrieves a list of other composite resources with a GET request.") allow you to execute a series of REST API requests in a single call. And you can use the output of one request as the input to a subsequent request.
    
-   Composite graphs extend regular composite requests by allowing you to assemble a more complicated and complete series of related objects and records.
    
-   Composite graphs also enable you to ensure that the steps in a given set of requests are either all completed or all not completed. If you use this option, you don’t have to check which requests were successful.
    
-   Regular composite requests have a limit of 25 subrequests. Composite graphs increase this limit to 500.
    

## Defining Composite Graphs

In general, a graph is a collection of connected nodes.

![an example of connected nodes](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapi_rest%2Fimages%2Fcomposite_graph_connected_nodes.png&folder=api_rest)

In the context of composite graph operations, the nodes are composite subrequests. For example, a node can be a composite subrequest like this:

```

```

Each node features an endpoint representing a record.

Composite graph requests support only these URLs.

| URL | Supported HTTP Methods |
| --- | --- |
| /services/data/vXX.X/sobjects/sObject | POSTSee sObject Basic Information. |
| /services/data/vXX.X/sobjects/sObject/id | DELETE, GET, PATCHSee sObject Rows. |
| /services/data/vXX.X/sobjects/sObject/customFieldName/externalId | DELETE, GET, PATCH, POSTSee sObject Rows by External ID. |

A composite graph can be *directed* meaning that some nodes use information from other nodes. For example, a node that creates a Contact can use the ID of an Account node to link the Contact with the Account.

![an example of directed nodes](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapi_rest%2Fimages%2Fcomposite_graph_directed_nodes.png&folder=api_rest)

For example:

```

```

## Defining Composite Graphs in JSON

A composite graph is defined in JSON like this:

```

```

In other words, like this, where each compositeSubrequest is a [composite subrequest](atlas.en-us.api_rest.meta/api_rest/resources_composite_graph_composite_subrequest.htm "The composite subrequest describes a subrequest to execute with the Composite Graph resource."):

```

```

The graphId parameters enable you to identify the graphs when viewing the response. They need not be numeric, but they must follow these restrictions:

-   They must be unique within each composite graph operation.
-   They must begin with an alphanumeric character.
-   They must be less that 40 characters long.
-   They can’t contain a period (’.’).

A single composite graph request can use one or more composite graphs. See [Using a Composite Graph](atlas.en-us.api_rest.meta/api_rest/using_resources_composite_graph.htm "This example shows how to use a composite graph. It also demonstrates how one request can use more than one composite graph.").

## Example: Create Accounts, Contacts, Campaigns, Opportunities, Leads, and CampaignMembers with a Composite Graph Request

This example shows a composite graph that performs the following actions:

1.  Create Account 1.
2.  Create Account 2 as a child of Account 1.
3.  Create:
    1.  Contact 1, linked to Account 2.
    2.  Contact 2, who reports to Contact 1.
    3.  Contact 3 who reports to Contact 2.
4.  Create a Campaign.
5.  Create an Opportunity linked to Account 2 and the Campaign.
6.  Create a Lead.
7.  Create a CampaignMember linked to the Lead and the Campaign.

![example of a nested graph](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapi_rest%2Fimages%2Fcomposite_graph_nested_sample.png&folder=api_rest)

The JSON for this graph is:

```

```

## Example: GET Details About a Resource and Then Use Them in a Composite Graph Request

This example shows how you can use GET on a resource, and then use properties of that resource in subsequent requests.

```

```

## Graph Depth

-   Nodes with no parents are considered to be at depth 1.
    
-   The depth of another node is the maximum number of edges in the graph from depth 1 to that node. An edge between two nodes occurs when the one node uses a property (such as @{reference\_account.id} ) from another node.
    

![a sample composite graph showing nodes nested at different depths](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapi_rest%2Fimages%2Fcomposite_graph_nested_depths.png&folder=api_rest)

## The AllOrNone Parameter

In standard [composite operations](atlas.en-us.api_rest.meta/api_rest/resources_composite_composite.htm "Executes a series of REST API requests in a single POST request, or retrieves a list of other composite resources with a GET request."), the only control over what happens if an error occurs is the allOrNone parameter. If the value is true, the entire composite request is rolled back. If the value is false, the remaining subrequests that don’t depend on the failed subrequest are executed. Dependent subrequests aren’t executed, which can lead to a mix of processed and unprocessed records.

Composite graphs have the advantage that each graph is guaranteed to either complete all its subrequests successfully or to be rolled back completely. In other words, the allOrNone parameter is implicitly considered to be true for each graph. A composite graph request never results in a mix of processed and unprocessed records.

To ensure that graphs are independent, the following rules apply.

1.  Subrequests in one graph can’t reference subrequests from another graph.
2.  Each graph in one composite graph operation must be independent. If one graph can’t be processed successfully, that must not prevent other graphs in the same operation from being processed.

## Best Practices

As a general practice, keep your graphs as small as possible. For example, it’s more efficient to have 50 graphs with 10 nodes rather than 1 graph with 500 nodes. Keeping graphs small has two advantages:

-   If one item in a graph fails, only the items in that graph are rolled back. It’s easier to identify and handle errors in smaller graphs.
-   The server can process multiple, smaller graphs faster and more efficiently.

## Example: Submitting a Composite Graph Job

For an example showing how to submit a composite graph job, see [Using a Composite Graph](atlas.en-us.api_rest.meta/api_rest/using_resources_composite_graph.htm "This example shows how to use a composite graph. It also demonstrates how one request can use more than one composite graph.").