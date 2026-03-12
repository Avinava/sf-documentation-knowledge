---
title: "Configuration Management Database GraphQL API (POST)"
domain: agentforce
topic: configuration-management-database-graphql-api-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:15.146Z
estimatedTokens: 2040
keywords: [Configuration, Management, Database, GraphQL, API, POST, Access, manage, configuration, items, Agentforce, Service, CMDB, Execute, operations, Create, Read, Update, assets., query]
---

# Configuration Management Database GraphQL API (POST)

> Access and manage configuration items (CI) in the Agentforce IT
      Service Configuration Management Database (CMDB). Execute operations Create, Read, and Update
      on IT assets. Use this API to query, search, and manage Configuration Items
    (CIs).

# Configuration Management Database GraphQL API (POST)

Access and manage configuration items (CI) in the Agentforce IT Service Configuration Management Database (CMDB). Execute operations Create, Read, and Update on IT assets. Use this API to query, search, and manage Configuration Items (CIs).

-   Fetch only the specific fields you need (for example, just the Operating System of a server), reducing payload size and improving response latency.
-   Perform queries, searches, and mutations (updates) through a unified interface, eliminating the need to manage multiple endpoints.
-   Programmatically discover the types, fields, and operations available in your specific CMDB instance, enabling dynamic query construction and better tooling support.

## Authorization

Authenticate to the CMDB GraphQL API using one of the following methods:

-   [Authorization: Integration User](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/graphql_api_authentication.htm "To access the Agentforce IT Service Configuration Management Database (CMDB) GraphQL API, you must authenticate using an Integration User via a standard OAuth 2.0 flow.") — Set up an Integration User and Connected App, then exchange your client credentials for a Bearer token.
-   [Authorization: User Sign-In](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/graphql_api_authentication_user_interactive_oauth.htm "To access the Agentforce IT Service Configuration Management Database (CMDB) GraphQL API, you must authenticate using an OAuth 2.0 Authorization Code flow with user sign-in, so that API calls run under the signed-in user's identity.") — Use the Authorization Code flow as a signed-in user to receive an authorization code, then exchange it for a Bearer token.

## GraphQL CMDB Endpoint

All requests to the Agentforce IT Service CMDB GraphQL API must be sent as POST requests to the following endpoint:

```

```

Example cURL request:

```

```

Available version

66.0

HTTP method

POST

## CI Types and Attributes

Learn more about the developer names of out-of-the-box (OOTB) Configuration Item (CI) types and attributes that are available in the Salesforce CMDB. To retrieve the developer names for both default and custom types and attributes programmatically, you can query the standard Salesforce objects:

-   Configuration Item Types: Query the [CnfgItemTypeDef](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/tooling_api_objects_cnfgitemtypedef.htm "Represents the definition of a configuration item type. A configuration item type represents a category that is used to classify configuration items. The components share common characteristics. For example, server, application, and network device. This object is available in API version 65.0 and later.") object to retrieve developer names for CI types.
-   Configuration Item Attributes: Query the [CnfgItemAttrDef](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/tooling_api_objects_cnfgitemattrdef.htm "Represents the definition of an attribute or a property for a configuration item. For example, CI name, CI owner, Status, and so on. This object is available in API version 65.0 and later.") object to retrieve developer names for CI attributes.
-   Configuration Item Relationship Types: Query the [CnfgMgmtRelationTypeDef](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/tooling_api_objects_cnfgmgmtrelationtypedef.htm "Represents the relationship between configuration item types or configuration items as defined in the CMDB. For example, Depends on or Connected to. This object is available in API version 65.0 and later.") object to retrieve developer names for CI relationship types.

## Operation types

Query, Mutation

Query: ciById

Fetches detailed information for a single configuration item using its unique identifier. See [Query Configuration Item](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/query_cibyid.htm#query_cibyid "Query a configuration item by its unique identifier. This operation returns detailed information for a single configuration item.") for request and response details.

Query: searchCI

Performs a paginated search across configuration items with filtering and sorting options. See [Search Configuration Item](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/query_searchCI.htm#query_searchCI "Perform a paginated search across configuration items with filtering and sorting options. Returns a list of configuration items that match the search criteria.") for request and response details.

Mutation: upsertCI

Submits a bulk operation to create or update one or more configuration items as an asynchronous job. See [Upsert Configuration Item](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/mutation_upsertCI.htm#mutation_upsertCI "Submit a bulk operation to create or update one or more configuration items. This is an asynchronous operation that returns a job ID, which you can use with the getStatus query to check the operation progress.") for request and response details.

Mutation: upsertCIRelationship

Submits a bulk operation to create or update one or more relationships between configuration items as an asynchronous job. See [Upsert Configuration Item Relationship](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/mutation_upsertCIRelationship.htm#mutation_upsertCIRelationship "Submit a bulk operation to create or update one or more relationships between configuration items. This is an asynchronous operation that returns a job ID, which you can use with the getStatus query to check the operation progress.") for request and response details.

Query: getStatus

Retrieves the status of a previously submitted asynchronous job. See [Get Status of Operation](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/query_getStatus.htm#query_getStatus "Retrieve the status of a previously submitted asynchronous job. For example, upsertCI a bulk upsert operation. Use this query to check the progress and completion status of the asynchronous operations.") for request and response details.

Query: getComponentsByCiId

Retrieves a paginated list of child components of a specific type for a configuration item by its unique identifier. See [Get Components](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/query_getComponentsByCiId.htm#query_getComponentsByCiId "Retrieve child components of a specific type for a configuration item by its unique identifier.") for request and response details.

Mutation: deleteCI

Deletes a configuration item by its unique identifier. See [Delete Configuration Item](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/mutation_deleteCI.htm#mutation_deleteCI "Delete a configuration item from the Configuration Management Database using its unique identifier.") for request and response details.

Mutation: updateCIById

Updates either partial or all attributes of an existing configuration item specified by its unique identifier. See [Update Configuration Item](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/mutation_updateCIById.htm#mutation_updateCIById "Updates one or more attributes of an existing configuration item specified by its unique identifier. You can update a subset of attributes or all attributes in a single request.") for request and response details.

#### See Also

-   [GraphQL API Developer Guide](https://developer.salesforce.com/docs/platform/graphql/references/graphql?meta=Summary "GraphQL API Developer Guide - HTML (New Window)")

-   [Get Started with GraphQL API](https://developer.salesforce.com/docs/platform/graphql/guide/graphql-about.html "Get Started with GraphQL API - HTML (New Window)")

-   [Agentforce IT Service Help](https://help.salesforce.com/s/articleView?id=service.it_srvcs_parent.htm&language=en_US "Agentforce IT Service Help - HTML (New Window)")

## Code Examples

```
https://api.salesforce.com/service/itsm/v1/cmdb/graphql
```

```
curl --location 'https://api.salesforce.com/service/itsm/v1/cmdb/graphql' \
  --header 'Content-Type: application/json' \
  --header 'Authorization: Bearer <Bearer_Token>' \
  --data '{
    "query": "query CiById { ciById(id: "100") { SD_Ac SD_IpAd SD_OpSy SD_SeNu SD_St createdOn id lastModifiedOn } }"
    }'
```

## Related Topics

- Authorization: Integration User (atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/graphql_api_authentication.htm)
- Authorization: User Sign-In (atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/graphql_api_authentication_user_interactive_oauth.htm)
- CnfgItemTypeDef (atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/tooling_api_objects_cnfgitemtypedef.htm)
- CnfgItemAttrDef (atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/tooling_api_objects_cnfgitemattrdef.htm)
- CnfgMgmtRelationTypeDef (atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/tooling_api_objects_cnfgmgmtrelationtypedef.htm)
- Query Configuration Item (atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/query_cibyid.htm)
- Search Configuration Item (atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/query_searchCI.htm)
- Upsert Configuration Item (atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/mutation_upsertCI.htm)
- Upsert Configuration Item Relationship (atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/mutation_upsertCIRelationship.htm)
- Get Status of Operation (atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/query_getStatus.htm)
