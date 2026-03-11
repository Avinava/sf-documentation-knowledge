---
title: "AsyncSaveCallback Class"
domain: apex-reference
topic: asyncsavecallback-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.462Z
keywords: [AsyncSaveCallback, Class, Override, method, define, actions, Salesforce, executes, after, remote, Database.insertAsync, Database.updateAsync, operation, completed., example, based, results, update, custom, object]
---

# AsyncSaveCallback Class

> Override this method to define actions that Salesforce executes
      after the remote Database.insertAsync or Database.updateAsync operation is completed. For example,
      based on the results of the remote operation, you can update custom object data or other data
      that's stored in the Salesforce org.

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