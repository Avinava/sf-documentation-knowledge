---
title: "AsyncDeleteCallback Class"
domain: apex-reference
topic: asyncdeletecallback-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.457Z
keywords: [AsyncDeleteCallback, Class, Override, method, define, actions, Salesforce, executes, after, remote, Database.deleteAsync, operation, completed., example, based, results, update, custom, object, data]
---

# AsyncDeleteCallback Class

> Override this method to define actions that Salesforce executes
      after a remote Database.deleteAsync operation is
      completed. For example, based on the results of the remote operation, you can update custom
      object data or other data that's stored in the Salesforce org..

### processDelete(deleteResult)

Override this method to define actions that Salesforce executes after a remote Database.deleteAsync operation is completed. For example, based on the results of the remote operation, you can update custom object data or other data that's stored in the Salesforce org..

#### Signature

public void processDelete(Database.DeleteResult deleteResult)

#### Parameters

deleteResult

Type: [Database.DeleteResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_deleteresult.htm#apex_methods_system_database_deleteresult "Represents the result of a delete DML operation returned by the Database.delete method.")

The result of the asynchronous delete operation.

#### Return Value

Type: void