---
title: "Operation Types"
domain: agentforce
topic: operation-types
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:08:17.674Z
keywords: [Operation, Types]
---

# Operation Types

# Operation Types

Learn more about the various Agentforce IT Service Configuration Management Database (CMDB) GraphQL API operations.

-   **[Query Configuration Item](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/query_cibyid.htm)**  
    Query a configuration item by its unique identifier. This operation returns detailed information for a single configuration item.
-   **[Search Configuration Item](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/query_searchCI.htm)**  
    Perform a paginated search across configuration items with filtering and sorting options. Returns a list of configuration items that match the search criteria.
-   **[Upsert Configuration Item](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/mutation_upsertCI.htm)**  
    Submit a bulk operation to create or update one or more configuration items. This is an asynchronous operation that returns a job ID, which you can use with the [getStatus](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/query_getStatus.htm "Retrieve the status of a previously submitted asynchronous job. For example, upsertCI a bulk upsert operation. Use this query to check the progress and completion status of the asynchronous operations.") query to check the operation progress.
-   **[Get Status of Operation](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/query_getStatus.htm)**  
    Retrieve the status of a previously submitted asynchronous job. For example, upsertCI a bulk upsert operation. Use this query to check the progress and completion status of the asynchronous operations.
-   **[Update Configuration Item](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/mutation_updateCIById.htm)**  
    Updates one or more attributes of an existing configuration item specified by its unique identifier. You can update a subset of attributes or all attributes in a single request.
-   **[Delete Configuration Item](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/mutation_deleteCI.htm)**  
    Delete a configuration item from the Configuration Management Database using its unique identifier.
-   **[Get Components](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/query_getComponentsByCiId.htm)**  
    Retrieve child components of a specific type for a configuration item by its unique identifier.
-   **[Upsert Configuration Item Relationship](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/mutation_upsertCIRelationship.htm)**  
    Submit a bulk operation to create or update one or more relationships between configuration items. This is an asynchronous operation that returns a job ID, which you can use with the [getStatus](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/query_getStatus.htm "Retrieve the status of a previously submitted asynchronous job. For example, upsertCI a bulk upsert operation. Use this query to check the progress and completion status of the asynchronous operations.") query to check the operation progress.