---
title: "Database Class"
domain: apex-reference
topic: database-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.171Z
keywords: [Database, Class, Initiates, request, update, external, object, data, relevant, system., executed, synchronously, sent, system, that's, defined, object's, associated, source., Apex]
---

# Database Class

> Initiates a request to update external object data on the relevant
      external system. The request is executed synchronously and is sent to the external system
      that's defined by the external object's associated external data source. If the Apex
      transaction contains pending changes, the synchronous operation can't be completed and throws
      an exception.

### updateImmediate(sobject)

Initiates a request to update external object data on the relevant external system. The request is executed synchronously and is sent to the external system that's defined by the external object's associated external data source. If the Apex transaction contains pending changes, the synchronous operation can't be completed and throws an exception.

#### Signature

public static Database.SaveResult updateImmediate(SObject sobject)

#### Parameters

sobject

Type: [SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

External object record to modify.

#### Return Value

Type: [Database.SaveResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm#apex_methods_system_database_saveresult "The result of an insert or update DML operation returned by a Database method.")

Status result for the update operation.

#### Usage

If a record update fails, the method doesn’t throw an exception. The returned SaveResult object indicates whether the operation was successful. If it wasn’t successful, the object returns the error code and description.