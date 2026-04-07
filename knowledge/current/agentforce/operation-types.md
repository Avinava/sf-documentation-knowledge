---
title: "Operation Types"
domain: agentforce
topic: operation-types
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:02:09.837Z
estimatedTokens: 1038
keywords: [Operation, various, Agentforce, Service, Configuration, Management, Database, CMDB, GraphQL, API, operations]
---

# Operation Types

> Learn more about the various Agentforce IT Service Configuration Management Database
    (CMDB) GraphQL API operations.

# Operation Types

Learn more about the various Agentforce IT Service Configuration Management Database (CMDB) GraphQL API operations.

-   **[Query Configuration Item](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/query_cibyid.htm)**
    Query a configuration item by its unique identifier. This operation returns detailed information for a single configuration item.
-   **[Search Configuration Item](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/query_searchCI.htm)**
    Perform a paginated search across configuration items with filtering and sorting options. Returns a list of configuration items that match the search criteria.
-   **[Upsert Configuration Item](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/mutation_upsertCI.htm)**
    Submit a bulk operation to create or update one or more configuration items (CIs). This is an asynchronous operation that returns a job ID, which you can use with the [getStatus](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/query_getStatus.htm "Retrieve the status of a previously submitted asynchronous job. For example, upsertCI a bulk upsert operation. Use this query to check the progress and completion status of the asynchronous operations.") query to check the operation progress.
-   **[Update Configuration Item](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/mutation_updateCIById.htm)**
    Updates one or more attributes of an existing configuration item specified by its unique identifier. You can update a subset of attributes or all attributes in a single request.
-   **[Delete Configuration Item](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/mutation_deleteCI.htm)**
    Delete a configuration item from the Configuration Management Database using its unique identifier.
-   **[Get Configuration Item Relationship](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/query_getCIRelationship.htm)**
    Retrieves detailed information about all configuration item (CI) relationships by using the unique identifier of a CI record.
-   **[Upsert Configuration Item Relationship](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/mutation_upsertCIRelationship.htm)**
    Submit a bulk operation to create or update one or more relationships between configuration items. This is an asynchronous operation that returns a job ID, which you can use with the [getStatus](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/query_getStatus.htm "Retrieve the status of a previously submitted asynchronous job. For example, upsertCI a bulk upsert operation. Use this query to check the progress and completion status of the asynchronous operations.") query to check the operation progress.
-   **[Delete Configuration Item Relationship](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/mutation_deleteCIRelationship.htm)**
    Submit an operation to delete relationships between configuration items (CIs). This is a synchronous request.
-   **[Get Components for Configuration Item](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/query_getComponentsByCiId.htm)**
    Retrieve child components of a specific type for a configuration item by its unique identifier.
-   **[Get Configuration Item History](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/query_getCIhistory.htm)**
    Perform a paginated retrieval of the audit trail for a specific configuration item. Returns a list of changes, including field-level modifications, timestamps, and user information.
-   **[Get Status of Operation](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/query_getStatus.htm)**
    Retrieve the status of a previously submitted asynchronous job. For example, upsertCI a bulk upsert operation. Use this query to check the progress and completion status of the asynchronous operations.

## Related Topics

- Query Configuration Item (atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/query_cibyid.htm)
- Search Configuration Item (atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/query_searchCI.htm)
- Upsert Configuration Item (atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/mutation_upsertCI.htm)
- getStatus (atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/query_getStatus.htm)
- Update Configuration Item (atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/mutation_updateCIById.htm)
- Delete Configuration Item (atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/mutation_deleteCI.htm)
- Get Configuration Item Relationship (atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/query_getCIRelationship.htm)
- Upsert Configuration Item Relationship (atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/mutation_upsertCIRelationship.htm)
- Delete Configuration Item Relationship (atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/mutation_deleteCIRelationship.htm)
- Get Components for Configuration Item (atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/query_getComponentsByCiId.htm)
