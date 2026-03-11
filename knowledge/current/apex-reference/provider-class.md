---
title: "Provider Class"
domain: apex-reference
topic: provider-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.595Z
keywords: [Provider, Class, Returns, connection, points, instance, external, data, source., getConnection, connectionParams, Signature, Parameters, Return, Value]
---

# Provider Class

> Returns a connection that points to an instance of the external data
      source.

### getConnection(connectionParams)

Returns a connection that points to an instance of the external data source.

#### Signature

public DataSource.Connection getConnection(DataSource.ConnectionParams connectionParams)

#### Parameters

connectionParams

Type: [DataSource.ConnectionParams](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_ConnectionParams.htm#apex_class_DataSource_ConnectionParams "Contains the credentials for authenticating to the external system.")

Credentials for authenticating to the external system.

#### Return Value

Type: [DataSource.Connection](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Connection.htm#apex_class_DataSource_Connection "Extend this class to enable your Salesforce org to sync the external system’s schema and to handle queries, searches, and write operations (upsert and delete) of the external data. This class extends the DataSourceUtil class and inherits its methods.")