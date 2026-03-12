---
title: "AsyncSaveCallback Class"
domain: apex-reference
topic: asyncsavecallback-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:20.396Z
estimatedTokens: 554
namespace: DataSource
keywords: [AsyncSaveCallback, callback, Database.insertAsync, Database.updateAsync, references, Salesforce, calls, remote, operation, completed, compensating, transaction, completion, context, insert]
---

# AsyncSaveCallback Class

> A callback class that the Database.insertAsync or Database.updateAsync method references. Salesforce calls this class after
      the remote operation is completed. This class provides the compensating transaction in the
      completion context of the insert or update operation. Extend this class to define the actions
      to execute after the remote insert or update operation finishes execution.

**Namespace:** `DataSource`

# AsyncSaveCallback Class

A callback class that the Database.insertAsync or Database.updateAsync method references. Salesforce calls this class after the remote operation is completed. This class provides the compensating transaction in the completion context of the insert or update operation. Extend this class to define the actions to execute after the remote insert or update operation finishes execution.

## Namespace

[DataSource](atlas.en-us.apexref.meta/apexref/apex_namespace_DataSource.htm "The DataSource namespace provides the classes for the Apex Connector Framework. Use the Apex Connector Framework to develop a custom adapter for Salesforce Connect. Then connect your Salesforce organization to any data anywhere via the Salesforce Connect custom adapter.")

-   **[AsyncSaveCallback Methods](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_AsyncSaveCallback.htm#apex_DataSource_AsyncSaveCallback_methods)**


## AsyncSaveCallback Methods

The following are methods for AsyncSaveCallback.

-   **[processSave(saveResult)](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_AsyncSaveCallback.htm#apex_DataSource_AsyncSaveCallback_processSave)**
    Override this method to define actions that Salesforce executes after the remote Database.insertAsync or Database.updateAsync operation is completed. For example, based on the results of the remote operation, you can update custom object data or other data that's stored in the Salesforce org.

### processSave(saveResult)

Override this method to define actions that Salesforce executes after the remote Database.insertAsync or Database.updateAsync operation is completed. For example, based on the results of the remote operation, you can update custom object data or other data that's stored in the Salesforce org.

#### Signature

public void processSave(Database.SaveResult saveResult)

#### Parameters

saveResult

Type: [Database.SaveResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm#apex_methods_system_database_saveresult "The result of an insert or update DML operation returned by a Database method.")

The result of the asynchronous insert or update operation.

#### Return Value

Type: void

## Related Topics

- DataSource (atlas.en-us.apexref.meta/apexref/apex_namespace_DataSource.htm)
- AsyncSaveCallback Methods (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_AsyncSaveCallback.htm)
- processSave(saveResult) (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_AsyncSaveCallback.htm)
- Database.SaveResult (atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm)
