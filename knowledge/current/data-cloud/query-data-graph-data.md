---
title: "Query
  Data Graph Data"
domain: data-cloud
topic: query-data-graph-data
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:12.091Z
estimatedTokens: 807
keywords: [Query, Data, Graph, query, metadata, data, graphs, Graphs, APIs., Important, Tip]
---

# Query
  Data Graph Data

> To query
  metadata
  and data from data graphs, use the Data Graphs
  APIs.

# Query Data Graph Data

To query metadata and data from data graphs, use the Data Graphs APIs.

![Important](/docs/resources/img/en-us/252.0?doc_id=images%2Ficon_note_important.png&folder=c360a_api)

#### Important

-   Your orgs must be provisioned with Data Cloud licenses.
-   To have full access to objects in Data Cloud, users must be assigned to appropriate roles. See [User Roles and Permission Sets in Data Cloud](https://help.salesforce.com/s/articleView?id=sf.c360_a_userpermissions.htm&type=5&language=en_US).
-   To authenticate, you must acquire and exchange an access token. For details, see[Getting Started](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_getting_started_with_cdp.htm "Use this section to understand the prerequisites required to get started with Data Cloud API libraries and SDKs.").

![Tip](/docs/resources/img/en-us/252.0?doc_id=images%2Ficon_note_tip.png&folder=c360a_api)

#### Tip

In example URLs, TSE refers to a tenant-specific endpoint, a unique, system-generated endpoint to each of your orgs.

-   **[GET /api/v1/dataGraph/metadata](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_v1_data_graphs_metadata.htm)**
    Request a list of all data graphs and their primary data model object, related objects, and fields.
-   **[GET /api/v1/dataGraph/metadata?entityName={dataGraphName}](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_v1_data_graphs_metadata_name.htm)**
    Request the metadata for a single data graph object. Returned data includes the object's primary data model object, related objects, and fields.
-   **[GET /api/v1/dataGraph/{dataGraphName}/{dataGraphRecordId}](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_v1_data_graphs_name_id.htm)**
    Request data from a specified data graph.
-   **[GET /api/v1/dataGraph/{dataGraphName}?lookupKeys=\[\]](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_v1_data_graphs_lookup.htm)**
    Use secondary lookup keys to request data from a data graph. The lookup keys can be used for one-to-one lookups

#### See Also

-   [Retrieve Metadata](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_metadata_api.htm "Data Cloud Metadata API response includes metadata about all entities, including Calculated Insights, Engagement, Profile, and other entities, and their relationships to other objects. For Data Lake Objects (DLOs) and Data Model Objects (DMOs), the API response also includes information about key qualifier fields. For each DLO field and DMO field, the API response includes the name of the associated key qualifier field.")

-   [Query Data using Query API V1](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_query_call_overview.htm "The Query API V1 supports SQL query in ANSI standard. The SQL can be a free form SQL with objects that include data streams, profile or engagement data model objects, and unified data model objects. The Query API V1 supports only synchronous calls. You can use the API to support a variety of use cases that include data extraction, external application integration or interactive querying on the data lake. If you don't want to fetch the entire data like in case of browser-based clients then you can make a call to the API with limit and offset.")

## Related Topics

- Getting Started (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_getting_started_with_cdp.htm)
- GET /api/v1/dataGraph/metadata (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_v1_data_graphs_metadata.htm)
- GET /api/v1/dataGraph/metadata?entityName={dataGraphName} (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_v1_data_graphs_metadata_name.htm)
- GET /api/v1/dataGraph/{dataGraphName}/{dataGraphRecordId} (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_v1_data_graphs_name_id.htm)
- GET /api/v1/dataGraph/{dataGraphName}?lookupKeys=[] (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_v1_data_graphs_lookup.htm)
- Retrieve Metadata (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_metadata_api.htm)
- Query Data using Query API V1 (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_query_call_overview.htm)
