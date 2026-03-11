---
title: "AsyncSaveCallback Methods"
domain: apex-reference
topic: asyncsavecallback-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.462Z
keywords: [AsyncSaveCallback, Methods, Override, method, define, actions, Salesforce, executes, after, remote, Database.insertAsync, Database.updateAsync, operation, completed., example, based, results, update, custom, object]
---

# AsyncSaveCallback Methods

> Override this method to define actions that Salesforce executes
      after the remote Database.insertAsync or Database.updateAsync operation is completed. For example,
      based on the results of the remote operation, you can update custom object data or other data
      that's stored in the Salesforce org.

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