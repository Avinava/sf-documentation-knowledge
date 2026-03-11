---
title: "Connection Class"
domain: apex-reference
topic: connection-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.555Z
keywords: [Connection, Class, Invoked, external, object, records, created, updated, via, Salesforce, user, interface, APIs, Apex., upsertRows, upsertContext, Signature, Parameters, Return, Value]
---

# Connection Class

> Invoked when external object records are created or updated via
            the Salesforce user
            interface, APIs, or Apex.

### upsertRows(upsertContext)

Invoked when external object records are created or updated via the Salesforce user interface, APIs, or Apex.

#### Signature

public List<DataSource.UpsertResult> upsertRows(DataSource.UpsertContext upsertContext)

#### Parameters

upsertContext

Type: [DataSource.UpsertContext](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_UpsertContext.htm#apex_class_DataSource_UpsertContext "An instance of UpsertContext is passed to the upsertRows() method on your Datasource.Connection class. This class provides context information about the upsert request to the implementor of upsertRows().")

Contains context information about the upsert request.

#### Return Value

Type: List<[DataSource.UpsertResult](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_UpsertResult.htm#apex_class_DataSource_UpsertResult "Represents the result of an upsert operation on an external object record. The result is returned by the upsertRows method of the DataSource.Connection class.")\>

The results of the upsert operation.