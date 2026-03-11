---
title: "ConnectApi.ConnectionDbSchemaCollectionInput"
domain: apex-reference
topic: connectapiconnectiondbschemacollectioninput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:37.007Z
keywords: [ConnectApi.ConnectionDbSchemaCollectionInput, See]
---

# ConnectApi.ConnectionDbSchemaCollectionInput

# ConnectApi.ConnectionDbSchemaCollectionInput

Represents the input for a database schema collection.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| advancedAttributes | Map<String, String> | The database name and other connector-specific properties that are required to fetch a list of database schemas. | Required | 63.0 |

#### See Also

-   [getDatabaseSchemas(connectionId, getDatabaseSchemasInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpConnection_static_methods.htm#apex_ConnectAPI_CdpConnection_getDatabaseSchemas_1 "Get a list of database schemas for a connection.")