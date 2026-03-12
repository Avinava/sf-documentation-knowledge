---
title: "CdpConnection Class"
domain: apex-reference
topic: cdpconnection-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:15.747Z
estimatedTokens: 447
namespace: ConnectApi
keywords: [CdpConnection, Get, database, schemas, Data, 360, connection., getDatabaseSchemas, connectionId, getDatabaseSchemasInput, API, Version, Requires, Chatter]
---

# CdpConnection Class

> Get database schemas for a Data 360 connection.

**Namespace:** `ConnectApi`

# CdpConnection Class

Get database schemas for a Data 360 connection.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## CdpConnection Methods

These methods are for CdpConnection. All methods are static.

-   **[getDatabaseSchemas(connectionId, getDatabaseSchemasInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpConnection_static_methods.htm#apex_ConnectAPI_CdpConnection_getDatabaseSchemas_1)**
    Get a list of database schemas for a connection.

### getDatabaseSchemas(connectionId, getDatabaseSchemasInput)

Get a list of database schemas for a connection.

#### API Version

63.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ConnectionDbSchemaCollection getDatabaseSchemas(String connectionId, ConnectApi.ConnectionDbSchemaCollectionInputRepresentation getDatabaseSchemasInput)

#### Parameters

connectionId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for the connection.

getDatabaseSchemasInput

Type: [ConnectApi.ConnectionDbSchemaCollectionInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_connection_db_schema_collection.htm "Represents the input for a database schema collection.")

Input representation for a database schema collection.

#### Return Value

Type: [ConnectApi.ConnectionDbSchemaCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_connection_db_schema_collection.htm "Represents a collection of database schemas.")

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- getDatabaseSchemas(connectionId, getDatabaseSchemasInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpConnection_static_methods.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.ConnectionDbSchemaCollectionInputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_connection_db_schema_collection.htm)
- ConnectApi.ConnectionDbSchemaCollection (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_connection_db_schema_collection.htm)
