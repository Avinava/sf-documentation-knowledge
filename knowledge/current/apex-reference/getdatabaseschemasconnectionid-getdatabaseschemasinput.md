---
title: "getDatabaseSchemas(connectionId,
      getDatabaseSchemasInput)"
domain: apex-reference
topic: getdatabaseschemasconnectionid-getdatabaseschemasinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:30.032Z
keywords: [getDatabaseSchemas, connectionId, getDatabaseSchemasInput, Get, list, database, schemas, connection., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getDatabaseSchemas(connectionId,
      getDatabaseSchemasInput)

> Get a list of database schemas for a connection.

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