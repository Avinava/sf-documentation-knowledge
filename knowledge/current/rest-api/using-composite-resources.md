---
title: "Using Composite Resources"
domain: rest-api
topic: using-composite-resources
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:36.056Z
estimatedTokens: 1126
keywords: [Composite, Resources, examples, improve, application’s, performance, minimizing, number, round-trips, client, server]
---

# Using Composite Resources

> The examples in this section use composite resources to improve your application’s
  performance by minimizing the number of round-trips between the client and server.

# Using Composite Resources

The examples in this section use composite resources to improve your application’s performance by minimizing the number of round-trips between the client and server.

-   **[Execute Dependent Requests in a Single API Call](atlas.en-us.api_rest.meta/api_rest/dome_composite_record_manipulation.htm)**
    The following example uses the Composite resource to execute several dependent requests all in a single call. First, it creates an account and retrieves its information. Next it uses the account data and the Composite resource’s reference ID functionality to create a contact and populate its fields based on the account data. Then it retrieves specific information about the account’s owner by using query parameters in the request string. Finally, if the metadata has been modified since a certain date, it retrieves account metadata. The composite.json file contains the composite request and subrequest data.
-   **[Update an Account, Create a Contact, and Link Them with a Junction Object](atlas.en-us.api_rest.meta/api_rest/dome_composite_junction_object.htm)**
    The following example uses the Composite resource to update some fields on an account, create a contact, and link the two records with a junction object called AccountContactJunction. All these requests are executed in a single call. The composite.json file contains the composite request and subrequest data.
-   **[Update a Record and Get Its Field Values in a Single Request](atlas.en-us.api_rest.meta/api_rest/dome_composite_batch.htm)**
    Use the Composite Batch resource to execute multiple requests in a single API call.
-   **[Upsert an Account and Create a Contact](atlas.en-us.api_rest.meta/api_rest/dome_composite_upsert_example.htm)**
    The following example uses the Composite resource to upsert an account and create a contact that is linked to the account. All these requests are executed in a single call. The composite.json file contains the composite request and subrequest data.
-   **[Create Nested Records](atlas.en-us.api_rest.meta/api_rest/dome_composite_sobject_tree_create.htm)**
    Use the sObject Tree resource to create nested records that share a root record type. For example, in a single request, you can create an account along with its child contacts, and a second account along with its child accounts and contacts. Once the request is processed, the records are created and parents and children are automatically linked by ID. In the request data, you supply the record hierarchies, required and optional field values, each record’s type, and a reference ID for each record, and then use the POST method of the resource. The response body will contain the IDs of the created records if the request is successful. Otherwise, the response contains only the reference ID of the record that caused the error and the error information.
-   **[Create Multiple Records](atlas.en-us.api_rest.meta/api_rest/dome_composite_sobject_tree_flat.htm)**
    While the resource can be used to create nested records, you can also create multiple, unrelated records of the same type. In a single request, you can create up to two hundred records. In the request data, you supply the required and optional field values for each record, each record’s type, and a reference ID for each record, and then use the POST method of the resource. The response body will contain the IDs of the created records if the request is successful. Otherwise, the response contains only the reference ID of the record that caused the error and the error information.
-   **[Using Composite Graphs](atlas.en-us.api_rest.meta/api_rest/resources_composite_graph_introduction.htm)**
    Composite graphs provide an enhanced way to perform composite requests, which execute a series of REST API requests in a single call.
-   **[Using a Composite Graph](atlas.en-us.api_rest.meta/api_rest/using_resources_composite_graph.htm)**
    This example shows how to use a composite graph. It also demonstrates how one request can use more than one composite graph.
-   **[allOrNone Parameters in Composite and Collections Requests](atlas.en-us.api_rest.meta/api_rest/resources_composite_allornone.htm)**
    If a Composite request uses sObject Collections, there are two or more allOrNone parameters that can interact, one on the Composite request and one on each sObject Collections subrequest.

-   [← Previous](atlas.en-us.api_rest.meta/api_rest/using_resources_event_log_files.htm "Using Event Monitoring")

## Related Topics

- Execute Dependent Requests in a Single API Call (atlas.en-us.api_rest.meta/api_rest/dome_composite_record_manipulation.htm)
- Update an Account, Create a Contact, and Link Them with a Junction Object (atlas.en-us.api_rest.meta/api_rest/dome_composite_junction_object.htm)
- Update a Record and Get Its Field Values in a Single Request (atlas.en-us.api_rest.meta/api_rest/dome_composite_batch.htm)
- Upsert an Account and Create a Contact (atlas.en-us.api_rest.meta/api_rest/dome_composite_upsert_example.htm)
- Create Nested Records (atlas.en-us.api_rest.meta/api_rest/dome_composite_sobject_tree_create.htm)
- Create Multiple Records (atlas.en-us.api_rest.meta/api_rest/dome_composite_sobject_tree_flat.htm)
- Using Composite Graphs (atlas.en-us.api_rest.meta/api_rest/resources_composite_graph_introduction.htm)
- Using a Composite Graph (atlas.en-us.api_rest.meta/api_rest/using_resources_composite_graph.htm)
- allOrNone Parameters in Composite and Collections Requests (atlas.en-us.api_rest.meta/api_rest/resources_composite_allornone.htm)
- ← Previous (atlas.en-us.api_rest.meta/api_rest/using_resources_event_log_files.htm)
