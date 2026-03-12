---
title: "AsyncDeleteCallback Class"
domain: apex-reference
topic: asyncdeletecallback-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:20.392Z
estimatedTokens: 543
namespace: DataSource
keywords: [AsyncDeleteCallback, callback, Database.deleteAsync, references, Salesforce, calls, remote, deleteAsync, operation, completed, compensating, transaction, completion, context, Extend]
---

# AsyncDeleteCallback Class

> A callback class that the Database.deleteAsync method references. Salesforce calls this class after
      the remote deleteAsync operation is completed. This
      class provides the compensating transaction in the completion context of the delete operation.
      Extend this class to define the actions to execute after the remote delete operation finishes
      execution.

**Namespace:** `DataSource`

# AsyncDeleteCallback Class

A callback class that the Database.deleteAsync method references. Salesforce calls this class after the remote deleteAsync operation is completed. This class provides the compensating transaction in the completion context of the delete operation. Extend this class to define the actions to execute after the remote delete operation finishes execution.

## Namespace

[DataSource](atlas.en-us.apexref.meta/apexref/apex_namespace_DataSource.htm "The DataSource namespace provides the classes for the Apex Connector Framework. Use the Apex Connector Framework to develop a custom adapter for Salesforce Connect. Then connect your Salesforce organization to any data anywhere via the Salesforce Connect custom adapter.")

-   **[AsyncDeleteCallback Methods](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_AsyncDeleteCallback.htm#apex_DataSource_AsyncDeleteCallback_methods)**


## AsyncDeleteCallback Methods

The following are methods for AsyncDeleteCallback.

-   **[processDelete(deleteResult)](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_AsyncDeleteCallback.htm#apex_DataSource_AsyncDeleteCallback_processDelete)**
    Override this method to define actions that Salesforce executes after a remote Database.deleteAsync operation is completed. For example, based on the results of the remote operation, you can update custom object data or other data that's stored in the Salesforce org..

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

## Related Topics

- DataSource (atlas.en-us.apexref.meta/apexref/apex_namespace_DataSource.htm)
- AsyncDeleteCallback Methods (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_AsyncDeleteCallback.htm)
- processDelete(deleteResult) (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_AsyncDeleteCallback.htm)
- Database.DeleteResult (atlas.en-us.apexref.meta/apexref/apex_methods_system_database_deleteresult.htm)
