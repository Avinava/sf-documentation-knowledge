---
title: "Database Class"
domain: apex-reference
topic: database-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:30.549Z
estimatedTokens: 75645
namespace: System
keywords: [Database, Initiates, requests, external, data, corresponds, records, executed, asynchronously, background, operation, sent, system, that's, defined]
---

# Database Class

> Initiates requests to delete the external data that corresponds to
            the specified external object records. The request is executed asynchronously, as a
            background operation, and is sent to the external system that's defined by the external
            object's associated external data source. Allows referencing a callback class whose
                processDelete method is called for each
            record after deletion.

**Namespace:** `System`

# Database Class

Contains methods for creating and manipulating data.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Usage

Some Database methods also exist as DML statements.

Avoid specifying an accessLevel parameter in the same query as a WITH SECURITY\_ENFORCED clause. Salesforce recommends that you specify either system mode or user mode, and remove any redundant WITH SECURITY\_ENFORCED clauses.

#### See Also

-   [Apex DML Operations](atlas.en-us.apexref.meta/apexref/apex_dml_section.htm#apex_dml_section "You can perform DML operations using the Apex DML statements or the methods of the Database class. For lead conversion, use the convertLead method of the Database class. There is no DML counterpart for it.")


## Database Methods

The following are methods for Database. All methods are static.

-   **[convertLead(leadToConvert, allOrNone)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_convertLead)**
    Converts a lead into an account and contact, as well as (optionally) an opportunity.
-   **[convertLead(leadsToConvert, allOrNone)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_convertLead_2)**
    Converts a list of LeadConvert objects into accounts and contacts, as well as (optionally) opportunities.
-   **[convertLead(leadToConvert, dmlOptions)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_convertLead_7)**
    Converts a lead into an account and contact, as well as (optionally) an opportunity.
-   **[convertLead(leadsToConvert, dmlOptions)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_convertLead_8)**
    Converts a list of LeadConvert objects into accounts and contacts, as well as (optionally) opportunities.
-   **[convertLead(leadToConvert, allOrNone, accessLevel)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_convertLead_3)**
    Converts a lead into an account and contact, as well as (optionally) an opportunity.
-   **[convertLead(leadsToConvert, allOrNone, accessLevel)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_convertLead_4)**
    Converts a list of LeadConvert objects into accounts and contacts, as well as (optionally) opportunities.
-   **[convertLead(leadToConvert, dmlOptions, accessLevel)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_convertLead_5)**
    Converts a lead into an account and contact, as well as (optionally) an opportunity.
-   **[convertLead(leadsToConvert, dmlOptions, accessLevel)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_convertLead_6)**
    Converts a list of LeadConvert objects into accounts and contacts, as well as (optionally) opportunities.
-   **[countQuery(query)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_countQuery)**
    Returns the number of records that a dynamic SOQL query would return when executed.
-   **[countQuery(query, accessLevel)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_countQuery_2)**
    Returns the number of records that a dynamic SOQL query would return when executed.
-   **[countQueryWithBinds(query, bindMap, accessLevel)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_countQueryWithBinds)**
    Returns the number of records that a dynamic SOQL query would return when executed. Bind variables in the query are resolved from the bindMap Map parameter directly with the key, rather than from Apex code variables.
-   **[delete(recordToDelete, allOrNone)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_delete)**
    Deletes an existing sObject record, such as an individual account or contact, from your organization's data.
-   **[delete(recordsToDelete, allOrNone)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_delete_2)**
    Deletes a list of existing sObject records, such as individual accounts or contacts, from your organization’s data.
-   **[delete(recordID, allOrNone)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_delete_3)**
    Deletes existing sObject records, such as individual accounts or contacts, from your organization’s data.
-   **[delete(recordIDs, allOrNone)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_delete_4)**
    Deletes a list of existing sObject records, such as individual accounts or contacts, from your organization’s data.
-   **[delete(recordToDelete, allOrNone, accessLevel)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_delete_5)**
    Deletes an existing sObject record, such as an individual account or contact, from your organization's data.
-   **[delete(recordsToDelete, allOrNone, accessLevel)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_delete_6)**
    Deletes a list of existing sObject records, such as individual accounts or contacts, from your organization’s data.
-   **[delete(recordID, allOrNone, accessLevel)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_delete_7)**
    Deletes existing sObject records, such as individual accounts or contacts, from your organization’s data.
-   **[delete(recordIDs, allOrNone, accessLevel)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_delete_8)**
    Deletes a list of existing sObject records, such as individual accounts or contacts, from your organization’s data.
-   **[deleteAsync(sobjects, callback)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_database_deleteAsync)**
    Initiates requests to delete the external data that corresponds to the specified external object records. The request is executed asynchronously, as a background operation, and is sent to the external system that's defined by the external object's associated external data source. Allows referencing a callback class whose processDelete method is called for each record after deletion.
-   **[deleteAsync(sobject, callback)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_database_deleteAsync_2)**
    Initiates a request to delete the external data that corresponds to the specified external object record. The request is executed asynchronously, as a background operation, and is sent to the external system that's defined by the external object's associated external data source. Allows referencing a callback class whose processDelete method is called after deletion.
-   **[deleteAsync(sobjects)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_database_deleteAsync_3)**
    Initiates requests to delete the external data that corresponds to the specified external object records. The requests are executed asynchronously, as background operations, and are sent to the external systems that are defined by the external objects' associated external data sources.
-   **[deleteAsync(sobject)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_database_deleteAsync_4)**
    Initiates a request to delete the external data that corresponds to the specified external object record. The request is executed asynchronously, as a background operation, and is sent to the external system that's defined by the external object's associated external data source.
-   **[deleteAsync(sobjects, callback, accessLevel)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_database_deleteAsync_5)**
    Initiates requests to delete the external data that corresponds to the specified external object records. The request is executed asynchronously, as a background operation, and is sent to the external system that's defined by the external object's associated external data source. Allows referencing a callback class whose processDelete method is called for each record after deletion.
-   **[deleteAsync(sobject, callback, accessLevel)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_database_deleteAsync_6)**
    Initiates a request to delete the external data that corresponds to the specified external object record. The request is executed asynchronously, as a background operation, and is sent to the external system that's defined by the external object's associated external data source. Allows referencing a callback class whose processDelete method is called after deletion.
-   **[deleteAsync(sobjects, accessLevel)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_database_deleteAsync_7)**
    Initiates requests to delete the external data that corresponds to the specified external object records. The requests are executed asynchronously, as background operations, and are sent to the external systems that are defined by the external objects' associated external data sources.
-   **[deleteAsync(sobject, accessLevel)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_database_deleteAsync_8)**
    Initiates a request to delete the external data that corresponds to the specified external object record. The request is executed asynchronously, as a background operation, and is sent to the external system that's defined by the external object's associated external data source.
-   **[deleteImmediate(sobjects)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_database_deleteImmediate)**
    Initiates requests to delete the external data that corresponds to the specified external object records. The requests are executed synchronously and are sent to the external systems that are defined by the external objects' associated external data sources. If the Apex transaction contains pending changes, the synchronous operations can't be completed and throw exceptions.
-   **[deleteImmediate(sobject)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_database_deleteImmediate_2)**
    Initiates a request to delete the external data that corresponds to the specified external object record. The request is executed synchronously and is sent to the external system that's defined by the external object's associated external data source. If the Apex transaction contains pending changes, the synchronous operation can't be completed and throws an exception.
-   **[deleteImmediate(sobjects, accessLevel)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_database_deleteImmediate_3)**
    Initiates requests to delete the external data that corresponds to the specified external object records. The requests are executed synchronously and are sent to the external systems that are defined by the external objects' associated external data sources. If the Apex transaction contains pending changes, the synchronous operations can't be completed and throw exceptions.
-   **[deleteImmediate(sobject, accessLevel)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_database_deleteImmediate_4)**
    Initiates a request to delete the external data that corresponds to the specified external object record. The request is executed synchronously and is sent to the external system that's defined by the external object's associated external data source. If the Apex transaction contains pending changes, the synchronous operation can't be completed and throws an exception.
-   **[emptyRecycleBin(recordIds)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_emptyRecycleBin)**
    Permanently deletes the specified records from the Recycle Bin.
-   **[emptyRecycleBin(obj)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_emptyRecycleBin_2)**
    Permanently deletes the specified sObject from the Recycle Bin.
-   **[emptyRecycleBin(listOfSObjects)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_emptyRecycleBin_3)**
    Permanently deletes the specified sObjects from the Recycle Bin.
-   **[executeBatch(batchClassObject)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_executeBatch)**
    Submits a batch Apex job for execution corresponding to the specified class.
-   **[executeBatch(batchClassObject, scope)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_executeBatch_2)**
    Submits a batch Apex job for execution using the specified class and scope.
-   **[getAsyncDeleteResult(deleteResult)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_database_getAsyncDeleteResult)**
    Retrieves the status of an asynchronous delete operation that’s identified by a Database.DeleteResult object.
-   **[getAsyncDeleteResult(asyncLocator)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_database_getAsyncDeleteResult_2)**
    Retrieves the result of an asynchronous delete operation based on the result’s unique identifier.
-   **[getAsyncLocator(result)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_database_getAsyncLocator)**
    Returns the asyncLocator associated with the result of a specified asynchronous insert, update, or delete operation.
-   **[getAsyncSaveResult(saveResult)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_database_getAsyncSaveResult)**
    Returns the status of an asynchronous insert or update operation that’s identified by a Database.SaveResult object.
-   **[getAsyncSaveResult(asyncLocator)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_database_getAsyncSaveResult_2)**
    Returns the status of an asynchronous insert or update operation based on the unique identifier associated with each modification.
-   **[getCursor(query)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_getCursor)**
    Creates a cursor when the specified SOQL query is executed.
-   **[getCursor(query, accessLevel)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_getCursor_2)**
    Creates a cursor when the specified SOQL query is executed.
-   **[getCursorWithBinds(query, bindMap, accessLevel)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_getCursorWithBinds)**
    Creates a cursor when the specified SOQL query is executed.
-   **[getDeleted(sObjectType, startDate, endDate)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_getDeleted)**
    Returns the list of individual records that have been deleted for an sObject type within the specified start and end dates and times and that are still in the Recycle Bin.
-   **[getPaginationCursor(query)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_database_getPaginationCursor_2)**
    Creates a pagination cursor when the specified SOQL query is executed.
-   **[getPaginationCursor(query, accessLevel)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_database_getPaginationCursor)**
    Creates a pagination cursor when the specified SOQL query is executed.
-   **[getPaginationCursorWithBinds(query, bindMap, accessLevel)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_database_getPaginationCursorWithBinds)**
    Creates a pagination cursor when the specified SOQL query is executed.
-   **[getQueryLocator(staticSoqlQueryResult)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_getQueryLocator)**
    Creates a QueryLocator object used in batch Apex or Visualforce.
-   **[getQueryLocator(query)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_getQueryLocator_2)**
    Creates a QueryLocator object used in batch Apex or Visualforce.
-   **[getQueryLocator(staticSoqlQueryResult, accessLevel)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_getQueryLocator_3)**
    Creates a QueryLocator object used in batch Apex or Visualforce.
-   **[getQueryLocator(query, accessLevel)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_getQueryLocator_4)**
    Creates a QueryLocator object used in batch Apex or Visualforce.
-   **[getQueryLocatorWithBinds(query, bindMap, accessLevel)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_getQueryLocatorWithBinds)**
    Creates a QueryLocator object used in batch Apex or Visualforce. Bind variables in the query are resolved from the bindMap Map parameter directly with the key, rather than from Apex code variables.
-   **[getUpdated(sobjectType, startDate, endDate)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_getUpdated)**
    Returns the list of individual records that have been updated for an sObject type within the specified start and end dates and times.
-   **[insert(recordToInsert, allOrNone)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_insert)**
    Adds an sObject, such as an individual account or contact, to your organization's data.
-   **[insert(recordsToInsert, allOrNone)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_insert_2)**
    Adds one or more sObjects, such as individual accounts or contacts, to your organization’s data.
-   **[insert(recordToInsert, dmlOptions)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_insert_3)**
    Adds an sObject, such as an individual account or contact, to your organization's data.
-   **[insert(recordsToInsert, dmlOptions)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_insert_4)**
    Adds one or more sObjects, such as individual accounts or contacts, to your organization's data.
-   **[insert(recordToInsert, allOrNone, accessLevel)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_insert_5)**
    Adds an sObject, such as an individual account or contact, to your organization's data.
-   **[insert(recordsToInsert, allOrNone, accessLevel)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_insert_6)**
    Adds one or more sObjects, such as individual accounts or contacts, to your organization’s data.
-   **[insert(recordToInsert, dmlOptions, accessLevel)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_insert_7)**
    Adds an sObject, such as an individual account or contact, to your organization's data.
-   **[insert(recordsToInsert, dmlOptions, accessLevel)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_insert_8)**
    Adds one or more sObjects, such as individual accounts or contacts, to your organization's data.
-   **[insertAsync(sobjects, callback)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_database_insertAsync)**
    Initiates requests to add external object data to the relevant external systems. The requests are executed asynchronously, as background operations, and are sent to the external systems that are defined by the external objects' associated external data sources. Allows referencing a callback class whose processSave method is called for each record after the remote operations are completed.
-   **[insertAsync(sobject, callback)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_database_insertAsync_2)**
    Initiates a request to add external object data to the relevant external system. The request is executed asynchronously, as a background operation, and is sent to the external system that's defined by the external object's associated external data source. Allows referencing a callback class whose processSave method is called after the remote operation is completed.
-   **[insertAsync(sobjects)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_database_insertAsync_3)**
    Initiates requests to add external object data to the relevant external systems. The requests are executed asynchronously, as background operations, and are sent to the external systems that are defined by the external objects' associated external data sources.
-   **[insertAsync(sobject)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_database_insertAsync_4)**
    Initiates a request to add external object data to the relevant external system. The request is executed asynchronously, as a background operation, and is sent to the external system that's defined by the external object's associated external data source.
-   **[insertAsync(sobjects, callback, accessLevel)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_database_insertAsync_5)**
    Initiates requests to add external object data to the relevant external systems. The requests are executed asynchronously, as background operations, and are sent to the external systems that are defined by the external objects' associated external data sources. Allows referencing a callback class whose processSave method is called for each record after the remote operations are completed.
-   **[insertAsync(sobject, callback, accessLevel)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_database_insertAsync_6)**
    Initiates a request to add external object data to the relevant external system. The request is executed asynchronously, as a background operation, and is sent to the external system that's defined by the external object's associated external data source. Allows referencing a callback class whose processSave method is called after the remote operation is completed.
-   **[insertAsync(sobjects, accessLevel)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_database_insertAsync_7)**
    Initiates requests to add external object data to the relevant external systems. The requests are executed asynchronously, as background operations, and are sent to the external systems that are defined by the external objects' associated external data sources.
-   **[insertAsync(sobject, accessLevel)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_database_insertAsync_8)**
    Initiates a request to add external object data to the relevant external system. The request is executed asynchronously, as a background operation, and is sent to the external system that's defined by the external object's associated external data source.
-   **[insertImmediate(sobjects)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_database_insertImmediate)**
    Initiates requests to add external object data to the relevant external systems. The requests are executed synchronously and are sent to the external systems that are defined by the external objects' associated external data sources. If the Apex transaction contains pending changes, the synchronous operations can't be completed and throw exceptions.
-   **[insertImmediate(sobject)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_insertImmediate_2)**
    Initiates a request to add external object data to the relevant external system. The request is executed synchronously and is sent to the external system that's defined by the external object's associated external data source. If the Apex transaction contains pending changes, the synchronous operation can't be completed and throws an exception.
-   **[insertImmediate(sobjects, accessLevel)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_database_insertImmediate_3)**
    Initiates requests to add external object data to the relevant external systems. The requests are executed synchronously and are sent to the external systems that are defined by the external objects' associated external data sources. If the Apex transaction contains pending changes, the synchronous operations can't be completed and throw exceptions.
-   **[insertImmediate(sobject, accessLevel)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_database_insertImmediate_4)**
    Initiates a request to add external object data to the relevant external system. The request is executed synchronously and is sent to the external system that's defined by the external object's associated external data source. If the Apex transaction contains pending changes, the synchronous operation can't be completed and throws an exception.
-   **[merge(mergeToRecord, duplicateId)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_merge)**
    Merges the duplicate record into the mergeToRecord sObject record of the same type, deleting the duplicate, and reparenting any related records. Merges only accounts, contacts, or leads.
-   **[merge(mergeToRecord, duplicateRecord)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_merge_2)**
    Merges the duplicate sObject record into the mergeToRecord sObject record of the same type, deleting the duplicate, and reparenting any related records.
-   **[merge(mergeToRecord, duplicateIds)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_merge_3)**
    Merges up to two records of the same sObject type into the mergeToRecord sObject record, deleting the others, and reparenting any related records.
-   **[merge(mergeToRecord, duplicateRecords)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_merge_4)**
    Merges up to two records of the same object type into the mergeToRecord sObject record, deleting the others, and reparenting any related records.
-   **[merge(mergeToRecord, duplicateId, allOrNone)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_merge_5)**
    Merges the duplicate record into the mergeToRecord sObject record of the same type, optionally returning any errors, deleting the duplicate, and reparenting any related records. Merges only accounts, contacts, or leads.
-   **[merge(mergeToRecord, duplicateRecord, allOrNone)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_system_database_merge_6)**
    Merges the duplicate sObject record into the mergeToRecord sObject of the same type, optionally returning any errors, deleting the duplicate, and reparenting any related records.
-   **[merge(mergeToRecord, duplicateIds, allOrNone)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_merge_7)**
    Merges up to two records of the same sObject type into the mergeToRecord sObject record, optionally returning any errors, deleting the duplicates, and reparenting any related records.
-   **[merge(mergeToRecord, duplicateRecords, allOrNone)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_merge_8)**
    Merges up to two records of the same object type into the mergeToRecord sObject record, optionally returning any errors, deleting the duplicates, and reparenting any related records.
-   **[merge(mergeToRecord, duplicateId, accessLevel)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_merge_9)**
    Merges the duplicate record into the mergeToRecord sObject record of the same type, deleting the duplicate, and reparenting any related records. Merges only accounts, contacts, or leads.
-   **[merge(mergeToRecord, duplicateRecord, accessLevel)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_merge_10)**
    Merges the specified duplicate sObject record into the mergeToRecord sObject of the same type, deleting the duplicate, and reparenting any related records.
-   **[merge(mergeToRecord, duplicateIds, accessLevel)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_merge_11)**
    Merges up to two records of the same sObject type into the mergeToRecord sObject record, deleting the others, and reparenting any related records.
-   **[merge(mergeToRecord, duplicateRecords, accessLevel)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_merge_12)**
    Merges up to two records of the same object type into the mergeToRecord sObject record, deleting the others, and reparenting any related records.
-   **[merge(mergeToRecord, duplicateId, allOrNone, accessLevel)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_merge_13)**
    Merges the duplicate record into the mergeToRecord sObject record of the same type, optionally returning any errors, deleting the duplicate, and reparenting any related records. Merges only accounts, contacts, or leads.
-   **[merge(mergeToRecord, duplicateRecord, allOrNone, accessLevel)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_merge_14)**
    Merges the duplicate sObject record into the mergeToRecord sObject record of the same type, optionally returning any errors, deleting the duplicate, and reparenting any related records.
-   **[merge(mergeToRecord, duplicateIds, allOrNone, accessLevel)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_merge_15)**
    Merges up to two records of the same sObject type into the mergeToRecord sObject record, optionally returning any errors, deleting the duplicates, and reparenting any related records.
-   **[merge(mergeToRecord, duplicateRecords, allOrNone, accessLevel)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_merge_16)**
    Merges up to two records of the same object type into the mergeToRecord sObject record, optionally returning any errors, deleting the duplicates, and reparenting any related records.
-   **[query(queryString)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_query)**
    Creates a dynamic SOQL query at runtime.
-   **[query(queryString, accessLevel)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_query_2)**
    Creates a dynamic SOQL query at runtime.
-   **[queryWithBinds(queryString, bindMap, accessLevel)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_queryWithBinds)**
    Creates a dynamic SOQL query at runtime. Bind variables in the query are resolved from the bindMap Map parameter directly with the key, rather than from Apex code variables.
-   **[releaseSavepoint(databaseSavepoint)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_database_releaseSavepoint)**
    Releases a given savepoint. All savepoints that are subsequent to the given one are also released.
-   **[rollback(databaseSavepoint)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_rollback)**
    Restores the database to the state specified by the savepoint variable. Any emails submitted since the last savepoint are also rolled back and not sent.
-   **[setSavepoint()](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_setSavepoint)**
    Returns a savepoint variable that can be stored as a local variable, then used with the rollback method to restore the database to that point.
-   **[undelete(recordToUndelete, allOrNone)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_undelete)**
    Restores an existing sObject record, such as an individual account or contact, from your organization's Recycle Bin.
-   **[undelete(recordsToUndelete, allOrNone)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_undelete_2)**
    Restores one or more existing sObject records, such as individual accounts or contacts, from your organization’s Recycle Bin.
-   **[undelete(recordID, allOrNone)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_undelete_3)**
    Restores an existing sObject record, such as an individual account or contact, from your organization's Recycle Bin.
-   **[undelete(recordIDs, allOrNone)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_undelete_4)**
    Restores one or more existing sObject records, such as individual accounts or contacts, from your organization’s Recycle Bin.
-   **[undelete(recordToUndelete, allOrNone, accessLevel)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_undelete_5)**
    Restores an existing sObject record, such as an individual account or contact, from your organization's Recycle Bin.
-   **[undelete(recordsToUndelete, allOrNone, accessLevel)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_undelete_6)**
    Restores one or more existing sObject records, such as individual accounts or contacts, from your organization’s Recycle Bin.
-   **[undelete(recordID, allOrNone, accessLevel)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_undelete_7)**
    Restores an existing sObject record, such as an individual account or contact, from your organization's Recycle Bin.
-   **[undelete(recordIDs, allOrNone, accessLevel)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_undelete_8)**
    Restores one or more existing sObject records, such as individual accounts or contacts, from your organization’s Recycle Bin.
-   **[update(recordToUpdate, allOrNone)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_update)**
    Modifies an existing sObject record, such as an individual account or contact, in your organization's data.
-   **[update(recordsToUpdate, allOrNone)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_update_2)**
    Modifies one or more existing sObject records, such as individual accounts or contacts, in your organization’s data.
-   **[update(recordToUpdate, dmlOptions)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_update_3)**
    Modifies an existing sObject record, such as an individual account or contact, in your organization's data.
-   **[update(recordsToUpdate, dmlOptions)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_update_4)**
    Modifies one or more existing sObject records, such as individual accounts or contacts, in your organization’s data.
-   **[update(recordToUpdate, allOrNone, accessLevel)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_update_5)**
    Modifies an existing sObject record, such as an individual account or contact, in your organization's data.
-   **[update(recordsToUpdate, allOrNone, accessLevel)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_update_6)**
    Modifies one or more existing sObject records, such as individual accounts or contacts, in your organization’s data.
-   **[update(recordToUpdate, dmlOptions, accessLevel)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_update_7)**
    Modifies an existing sObject record, such as an individual account or contact, in your organization's data.
-   **[update(recordsToUpdate, dmlOptions, accessLevel)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_update_8)**
    Modifies one or more existing sObject records, such as individual accounts or contacts, in your organization’s data.
-   **[upsert(recordToUpsert, externalIdField, allOrNone)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_upsert)**
    Creates a new sObject record or updates an existing sObject record within a single statement, using a specified field to determine the presence of existing objects, or the ID field if no field is specified.
-   **[upsert(recordsToUpsert, externalIdField, allOrNone)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_upsert_2)**
    Creates new sObject records or updates existing sObject records within a single statement, using a specified field to determine the presence of existing objects, or the ID field if no field is specified.
-   **[upsert(recordToUpsert, externalIdField, allOrNone, accessLevel)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_upsert_3)**
    Creates a new sObject record or updates an existing sObject record within a single statement, using a specified field to determine the presence of existing objects, or the ID field if no field is specified.
-   **[upsert(recordsToUpsert, externalIdField, allOrNone, accessLevel)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_upsert_4)**
    Creates new sObject records or updates existing sObject records within a single statement, using a specified field to determine the presence of existing objects, or the ID field if no field is specified.
-   **[updateAsync(sobjects, callback)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_database_updateAsync)**
    Initiates requests to update external object data on the relevant external systems. The requests are executed asynchronously, as background operations, and are sent to the external systems that are defined by the external objects' associated external data sources. Allows referencing a callback class whose processSave method is called for each record after the remote operations are completed.
-   **[updateAsync(sobject, callback)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_database_updateAsync_2)**
    Initiates a request to update external object data on the relevant external system. The request is executed asynchronously, as a background operation, and is sent to the external system that's defined by the external object's associated external data source. Allows referencing a callback class whose processSave method is called after the remote operation is completed.
-   **[updateAsync(sobjects)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_database_updateAsync_3)**
    Initiates requests to update external object data on the relevant external systems. The requests are executed asynchronously, as background operations, and are sent to the external systems that are defined by the external objects' associated external data sources.
-   **[updateAsync(sobject)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_database_updateAsync_4)**
    Initiates a request to update external object data on the relevant external system. The request is executed asynchronously, as a background operation, and is sent to the external system that's defined by the external object's associated external data source.
-   **[updateAsync(sobjects, callback, accessLevel)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_database_updateAsync_5)**
    Initiates requests to update external object data on the relevant external systems. The requests are executed asynchronously, as background operations, and are sent to the external systems that are defined by the external objects' associated external data sources. Allows referencing a callback class whose processSave method is called for each record after the remote operations are completed.
-   **[updateAsync(sobject, callback, accessLevel)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_database_updateAsync_6)**
    Initiates a request to update external object data on the relevant external system. The request is executed asynchronously, as a background operation, and is sent to the external system that's defined by the external object's associated external data source. Allows referencing a callback class whose processSave method is called after the remote operation is completed.
-   **[updateAsync(sobjects, accessLevel)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_database_updateAsync_7)**
    Initiates requests to update external object data on the relevant external systems. The requests are executed asynchronously, as background operations, and are sent to the external systems that are defined by the external objects' associated external data sources.
-   **[updateAsync(sobject, accessLevel)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_database_updateAsync_8)**
    Initiates a request to update external object data on the relevant external system. The request is executed asynchronously, as a background operation, and is sent to the external system that's defined by the external object's associated external data source.
-   **[updateImmediate(sobjects)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_updateImmediate)**
    Initiates requests to update external object data on the relevant external systems. The requests are executed synchronously and are sent to the external systems that are defined by the external objects' associated external data sources. If the Apex transaction contains pending changes, the synchronous operations can't be completed and throw exceptions.
-   **[updateImmediate(sobject)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_updateImmediate_2)**
    Initiates a request to update external object data on the relevant external system. The request is executed synchronously and is sent to the external system that's defined by the external object's associated external data source. If the Apex transaction contains pending changes, the synchronous operation can't be completed and throws an exception.
-   **[updateImmediate(sobjects, accessLevel)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_database_updateImmediate_3)**
    Initiates requests to update external object data on the relevant external systems. The requests are executed synchronously and are sent to the external systems that are defined by the external objects' associated external data sources. If the Apex transaction contains pending changes, the synchronous operations can't be completed and throw exceptions.
-   **[updateImmediate(sobject, accessLevel)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_database_updateImmediate_4)**
    Initiates a request to update external object data on the relevant external system. The request is executed synchronously and is sent to the external system that's defined by the external object's associated external data source. If the Apex transaction contains pending changes, the synchronous operation can't be completed and throws an exception.

### convertLead(leadToConvert, allOrNone)

Converts a lead into an account and contact, as well as (optionally) an opportunity.

#### Signature

public static Database.LeadConvertResult convertLead(Database.LeadConvert leadToConvert, Boolean allOrNone)

#### Parameters

leadToConvert

Type: [Database.LeadConvert](atlas.en-us.apexref.meta/apexref/apex_dml_convertLead.htm#apex_dml_convertLead "Contains information used for lead conversion.")

allOrNone

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

(Optional) The allOrNone parameter specifies whether the operation allows partial success. If allOrNone is set to false and a record fails, the remainder of the DML operation can still succeed. You must iterate through the returned results to identify which records succeeded or failed. If allOrNone is set to true and the method isn’t successful, an exception is thrown. The default for the parameter is true.

#### Return Value

Type: [Database.LeadConvertResult](atlas.en-us.apexref.meta/apexref/apex_class_database_leadconvertresult.htm#apex_class_database_leadconvertresult "The result of a lead conversion.")

#### Usage

We recommend passing a maximum of 100 LeadConvert objects to the convertLead method. Including more than 100 objects per call can result in Apex governor limit errors.

Each executed convertLead method counts against the governor limit for DML statements.

### convertLead(leadsToConvert, allOrNone)

Converts a list of LeadConvert objects into accounts and contacts, as well as (optionally) opportunities.

#### Signature

public static Database.LeadConvertResult\[\] convertLead(Database.LeadConvert\[\] leadsToConvert, Boolean allOrNone)

#### Parameters

leadsToConvert

Type: [Database.LeadConvert](atlas.en-us.apexref.meta/apexref/apex_dml_convertLead.htm#apex_dml_convertLead "Contains information used for lead conversion.")\[\]

allOrNone

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

(Optional) The allOrNone parameter specifies whether the operation allows partial success. If allOrNone is set to false and a record fails, the remainder of the DML operation can still succeed. You must iterate through the returned results to identify which records succeeded or failed. If allOrNone is set to true and the method isn’t successful, an exception is thrown. The default for the parameter is true.

#### Return Value

Type: [Database.LeadConvertResult](atlas.en-us.apexref.meta/apexref/apex_class_database_leadconvertresult.htm#apex_class_database_leadconvertresult "The result of a lead conversion.")\[\]

#### Usage

We recommend passing a maximum of 100 LeadConvert objects to the convertLead method. Including more than 100 objects per call can result in Apex governor limit errors.

Each executed convertLead method counts against the governor limit for DML statements.

### convertLead(leadToConvert, dmlOptions)

Converts a lead into an account and contact, as well as (optionally) an opportunity.

#### Signature

public static Database.LeadConvertResult convertLead(Database.LeadConvert leadToConvert, Database.DMLOptions dmlOptions)

#### Parameters

leadToConvert

Type: [Database.LeadConvert](atlas.en-us.apexref.meta/apexref/apex_dml_convertLead.htm#apex_dml_convertLead "Contains information used for lead conversion.")

dmlOptions

Type: [Database.DMLOptions](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_dmloptions.htm#apex_methods_system_database_dmloptions "Enables you to set options related to DML operations.")

The optional dmlOptions parameter specifies additional data for the transaction, such as assignment rule information or rollback behavior when errors occur during record insertions.

#### Return Value

Type: [Database.LeadConvertResult](atlas.en-us.apexref.meta/apexref/apex_class_database_leadconvertresult.htm#apex_class_database_leadconvertresult "The result of a lead conversion.")

#### Usage

We recommend passing a maximum of 100 LeadConvert objects to the convertLead method. Including more than 100 objects per call can result in Apex governor limit errors.

Each executed convertLead method counts against the governor limit for DML statements.

### convertLead(leadsToConvert, dmlOptions)

Converts a list of LeadConvert objects into accounts and contacts, as well as (optionally) opportunities.

#### Signature

public static List<Database.LeadConvertResult> convertLead(List<Database.LeadConvert> leadsToConvert, Database.DMLOptions dmlOptions)

#### Parameters

leadsToConvert

Type: List<[Database.LeadConvert](atlas.en-us.apexref.meta/apexref/apex_dml_convertLead.htm#apex_dml_convertLead "Contains information used for lead conversion.")\>

dmlOptions

Type: [Database.DMLOptions](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_dmloptions.htm#apex_methods_system_database_dmloptions "Enables you to set options related to DML operations.")

The optional dmlOptions parameter specifies additional data for the transaction, such as assignment rule information or rollback behavior when errors occur during record insertions.

#### Return Value

Type: List<[Database.LeadConvertResult](atlas.en-us.apexref.meta/apexref/apex_class_database_leadconvertresult.htm#apex_class_database_leadconvertresult "The result of a lead conversion.")\>

#### Usage

We recommend passing a maximum of 100 LeadConvert objects to the convertLead method. Including more than 100 objects per call can result in Apex governor limit errors.

Each executed convertLead method counts against the governor limit for DML statements.

### convertLead(leadToConvert, allOrNone, accessLevel)

Converts a lead into an account and contact, as well as (optionally) an opportunity.

#### Signature

public static Database.LeadConvertResult convertLead(Database.LeadConvert leadToConvert, Boolean allOrNone, System.AccessLevel accessLevel)

#### Parameters

leadToConvert

Type: [Database.LeadConvert](atlas.en-us.apexref.meta/apexref/apex_dml_convertLead.htm#apex_dml_convertLead "Contains information used for lead conversion.")

allOrNone

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

(Optional) The allOrNone parameter specifies whether the operation allows partial success. If allOrNone is set to false and a record fails, the remainder of the DML operation can still succeed. You must iterate through the returned results to identify which records succeeded or failed. If allOrNone is set to true and the method isn’t successful, an exception is thrown. The default for the parameter is true.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: [Database.LeadConvertResult](atlas.en-us.apexref.meta/apexref/apex_class_database_leadconvertresult.htm#apex_class_database_leadconvertresult "The result of a lead conversion.")

#### Usage

We recommend passing a maximum of 100 LeadConvert objects to the convertLead method. Including more than 100 objects per call can result in Apex governor limit errors.

Each executed convertLead method counts against the governor limit for DML statements.

### convertLead(leadsToConvert, allOrNone, accessLevel)

Converts a list of LeadConvert objects into accounts and contacts, as well as (optionally) opportunities.

#### Signature

public static List<Database.LeadConvertResult> convertLead(List<Database.LeadConvert> leadsToConvert, Boolean allOrNone, System.AccessLevel accessLevel)

#### Parameters

leadsToConvert

Type: List<[Database.LeadConvert](atlas.en-us.apexref.meta/apexref/apex_dml_convertLead.htm#apex_dml_convertLead "Contains information used for lead conversion.")\>

allOrNone

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

(Optional) The allOrNone parameter specifies whether the operation allows partial success. If allOrNone is set to false and a record fails, the remainder of the DML operation can still succeed. You must iterate through the returned results to identify which records succeeded or failed. If allOrNone is set to true and the method isn’t successful, an exception is thrown. The default for the parameter is true.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: List<[Database.LeadConvertResult](atlas.en-us.apexref.meta/apexref/apex_class_database_leadconvertresult.htm#apex_class_database_leadconvertresult "The result of a lead conversion.")\>

#### Usage

We recommend passing a maximum of 100 LeadConvert objects to the convertLead method. Including more than 100 objects per call can result in Apex governor limit errors.

Each executed convertLead method counts against the governor limit for DML statements.

### convertLead(leadToConvert, dmlOptions, accessLevel)

Converts a lead into an account and contact, as well as (optionally) an opportunity.

#### Signature

public static Database.LeadConvertResult convertLead(Database.LeadConvert leadToConvert, Database.DMLOptions dmlOptions, System.AccessLevel accessLevel)

#### Parameters

leadToConvert

Type: [Database.LeadConvert](atlas.en-us.apexref.meta/apexref/apex_dml_convertLead.htm#apex_dml_convertLead "Contains information used for lead conversion.")

dmlOptions

Type: [Database.DMLOptions](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_dmloptions.htm#apex_methods_system_database_dmloptions "Enables you to set options related to DML operations.")

The optional dmlOptions parameter specifies additional data for the transaction, such as assignment rule information or rollback behavior when errors occur during record insertions.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: [Database.LeadConvertResult](atlas.en-us.apexref.meta/apexref/apex_class_database_leadconvertresult.htm#apex_class_database_leadconvertresult "The result of a lead conversion.")

#### Usage

We recommend passing a maximum of 100 LeadConvert objects to the convertLead method. Including more than 100 objects per call can result in Apex governor limit errors.

Each executed convertLead method counts against the governor limit for DML statements.

### convertLead(leadsToConvert, dmlOptions, accessLevel)

Converts a list of LeadConvert objects into accounts and contacts, as well as (optionally) opportunities.

#### Signature

public static List<Database.LeadConvertResult> convertLead(List<Database.LeadConvert> leadsToConvert, Database.DMLOptions dmlOptions, System.AccessLevel accessLevel)

#### Parameters

leadsToConvert

Type: List<[Database.LeadConvert](atlas.en-us.apexref.meta/apexref/apex_dml_convertLead.htm#apex_dml_convertLead "Contains information used for lead conversion.")\>

dmlOptions

Type: [Database.DMLOptions](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_dmloptions.htm#apex_methods_system_database_dmloptions "Enables you to set options related to DML operations.")

The optional dmlOptions parameter specifies additional data for the transaction, such as assignment rule information or rollback behavior when errors occur during record insertions.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: List<[Database.LeadConvertResult](atlas.en-us.apexref.meta/apexref/apex_class_database_leadconvertresult.htm#apex_class_database_leadconvertresult "The result of a lead conversion.")\>

#### Usage

We recommend passing a maximum of 100 LeadConvert objects to the convertLead method. Including more than 100 objects per call can result in Apex governor limit errors.

Each executed convertLead method counts against the governor limit for DML statements.

### countQuery(query)

Returns the number of records that a dynamic SOQL query would return when executed.

#### Signature

public static Integer countQuery(String query)

#### Parameters

query

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Usage

For more information, see [Dynamic SOQL](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dynamic_soql.htm).

Each executed countQuery method counts against the governor limit for SOQL queries.

#### Example

```

```

### countQuery(query, accessLevel)

Returns the number of records that a dynamic SOQL query would return when executed.

#### Signature

public static Integer countQuery(String query, System.AccessLevel accessLevel)

#### Parameters

query

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Usage

For more information, see [Dynamic SOQL](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dynamic_soql.htm).

Each executed countQuery method counts against the governor limit for SOQL queries.

### countQueryWithBinds(query, bindMap, accessLevel)

Returns the number of records that a dynamic SOQL query would return when executed. Bind variables in the query are resolved from the bindMap Map parameter directly with the key, rather than from Apex code variables.

#### Signature

public static Integer countQueryWithBinds(String query, Map<String, Object> bindMap, System.AccessLevel accessLevel)

#### Parameters

query

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

SOQL query that includes Apex bind variables preceded by a colon. All bind variables must have a key in the bindMap Map.

bindMap

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."), Object>

A map that contains keys for each bind variable specified in the SOQL queryString and its value. The keys can’t be null or duplicates, and the values can’t be null or empty strings.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced.

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Usage

For more information, see [Dynamic SOQL](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dynamic_soql.htm).

Each executed countQueryWithBinds method counts against the governor limit for SOQL queries.

#### Example

In this example, the SOQL query uses a bind variable for an Account name. Its value (Acme Inc.) is passed in to the method using the nameBind Map. The accountName variable isn't (and doesn’t have to be) in scope when the query is executed within the method.

```

```

### delete(recordToDelete, allOrNone)

Deletes an existing sObject record, such as an individual account or contact, from your organization's data.

#### Signature

public static Database.DeleteResult delete(SObject recordToDelete, Boolean allOrNone)

#### Parameters

recordToDelete

Type: [sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

allOrNone

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

(Optional) The allOrNone parameter specifies whether the operation allows partial success. If allOrNone is set to false and a record fails, the remainder of the DML operation can still succeed. You must iterate through the returned results to identify which records succeeded or failed. If allOrNone is set to true and the method isn’t successful, an exception is thrown. The default for the parameter is true.

#### Return Value

Type: [Database.DeleteResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_deleteresult.htm#apex_methods_system_database_deleteresult "Represents the result of a delete DML operation returned by the Database.delete method.")

#### Usage

delete is analogous to the delete() statement in the SOAP API.

Each executed delete method counts against the governor limit for DML statements.

### delete(recordsToDelete, allOrNone)

Deletes a list of existing sObject records, such as individual accounts or contacts, from your organization’s data.

#### Signature

public static Database.DeleteResult\[\] delete(SObject\[\] recordsToDelete, Boolean allOrNone)

#### Parameters

recordsToDelete

Type: [sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")\[\]

allOrNone

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

(Optional) The allOrNone parameter specifies whether the operation allows partial success. If allOrNone is set to false and a record fails, the remainder of the DML operation can still succeed. You must iterate through the returned results to identify which records succeeded or failed. If allOrNone is set to true and the method isn’t successful, an exception is thrown. The default for the parameter is true.

#### Return Value

Type: [Database.DeleteResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_deleteresult.htm#apex_methods_system_database_deleteresult "Represents the result of a delete DML operation returned by the Database.delete method.")\[\]

#### Usage

delete is analogous to the delete() statement in the SOAP API.

Each executed delete method counts against the governor limit for DML statements.

#### Example

The following example deletes an account named 'DotCom':

```

```

### delete(recordID, allOrNone)

Deletes existing sObject records, such as individual accounts or contacts, from your organization’s data.

#### Signature

public static Database.DeleteResult delete(ID recordID, Boolean allOrNone)

#### Parameters

recordID

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

allOrNone

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

(Optional) The allOrNone parameter specifies whether the operation allows partial success. If allOrNone is set to false and a record fails, the remainder of the DML operation can still succeed. You must iterate through the returned results to identify which records succeeded or failed. If allOrNone is set to true and the method isn’t successful, an exception is thrown. The default for the parameter is true.

#### Return Value

Type: [Database.DeleteResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_deleteresult.htm#apex_methods_system_database_deleteresult "Represents the result of a delete DML operation returned by the Database.delete method.")

#### Usage

delete is analogous to the delete() statement in the SOAP API.

Each executed delete method counts against the governor limit for DML statements.

To delete a share object record for a custom object, you must pass an sObject instead of a recordID. The recordID parameter isn't supported for share objects for custom objects.

### delete(recordIDs, allOrNone)

Deletes a list of existing sObject records, such as individual accounts or contacts, from your organization’s data.

#### Signature

public static Database.DeleteResult\[\] delete(ID\[\] recordIDs, Boolean allOrNone)

#### Parameters

recordIDs

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")\[\]

allOrNone

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

(Optional) The allOrNone parameter specifies whether the operation allows partial success. If allOrNone is set to false and a record fails, the remainder of the DML operation can still succeed. You must iterate through the returned results to identify which records succeeded or failed. If allOrNone is set to true and the method isn’t successful, an exception is thrown. The default for the parameter is true.

#### Return Value

Type: [Database.DeleteResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_deleteresult.htm#apex_methods_system_database_deleteresult "Represents the result of a delete DML operation returned by the Database.delete method.")\[\]

#### Usage

delete is analogous to the delete() statement in the SOAP API.

Each executed delete method counts against the governor limit for DML statements.

To delete a share object record for a custom object, you must pass an sObject instead of a recordID. The recordID parameter isn't supported for share objects for custom objects.

### delete(recordToDelete, allOrNone, accessLevel)

Deletes an existing sObject record, such as an individual account or contact, from your organization's data.

#### Signature

public static Database.DeleteResult delete(SObject recordToDelete, Boolean allOrNone, System.AccessLevel accessLevel)

#### Parameters

recordToDelete

Type: [sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

allOrNone

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

(Optional) The allOrNone parameter specifies whether the operation allows partial success. If allOrNone is set to false and a record fails, the remainder of the DML operation can still succeed. You must iterate through the returned results to identify which records succeeded or failed. If allOrNone is set to true and the method isn’t successful, an exception is thrown. The default for the parameter is true.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: [Database.DeleteResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_deleteresult.htm#apex_methods_system_database_deleteresult "Represents the result of a delete DML operation returned by the Database.delete method.")

#### Usage

delete is analogous to the delete() statement in the SOAP API.

Each executed delete method counts against the governor limit for DML statements.

### delete(recordsToDelete, allOrNone, accessLevel)

Deletes a list of existing sObject records, such as individual accounts or contacts, from your organization’s data.

#### Signature

public static List<Database.DeleteResult> delete(List<SObject> recordsToDelete, Boolean allOrNone, System.AccessLevel accessLevel)

#### Parameters

recordsToDelete

Type: List<[sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")\>

allOrNone

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

(Optional) The allOrNone parameter specifies whether the operation allows partial success. If allOrNone is set to false and a record fails, the remainder of the DML operation can still succeed. You must iterate through the returned results to identify which records succeeded or failed. If allOrNone is set to true and the method isn’t successful, an exception is thrown. The default for the parameter is true.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: List<[Database.DeleteResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_deleteresult.htm#apex_methods_system_database_deleteresult "Represents the result of a delete DML operation returned by the Database.delete method.")\>

#### Usage

delete is analogous to the delete() statement in the SOAP API.

Each executed delete method counts against the governor limit for DML statements.

### delete(recordID, allOrNone, accessLevel)

Deletes existing sObject records, such as individual accounts or contacts, from your organization’s data.

#### Signature

public static Database.DeleteResult delete(Id recordID, Boolean allOrNone, System.AccessLevel accessLevel)

#### Parameters

recordID

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

allOrNone

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

(Optional) The allOrNone parameter specifies whether the operation allows partial success. If allOrNone is set to false and a record fails, the remainder of the DML operation can still succeed. You must iterate through the returned results to identify which records succeeded or failed. If allOrNone is set to true and the method isn’t successful, an exception is thrown. The default for the parameter is true.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: [Database.DeleteResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_deleteresult.htm#apex_methods_system_database_deleteresult "Represents the result of a delete DML operation returned by the Database.delete method.")

#### Usage

delete is analogous to the delete() statement in the SOAP API.

Each executed delete method counts against the governor limit for DML statements.

To delete a share object record for a custom object, you must pass an sObject instead of a recordID. The recordID parameter isn't supported for share objects for custom objects.

### delete(recordIDs, allOrNone, accessLevel)

Deletes a list of existing sObject records, such as individual accounts or contacts, from your organization’s data.

#### Signature

public static List<Database.DeleteResult> delete(List<Id> recordIDs, Boolean allOrNone, System.AccessLevel accessLevel)

#### Parameters

recordIDs

Type: List<[ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")\>

allOrNone

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

(Optional) The allOrNone parameter specifies whether the operation allows partial success. If allOrNone is set to false and a record fails, the remainder of the DML operation can still succeed. You must iterate through the returned results to identify which records succeeded or failed. If allOrNone is set to true and the method isn’t successful, an exception is thrown. The default for the parameter is true.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: List<[Database.DeleteResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_deleteresult.htm#apex_methods_system_database_deleteresult "Represents the result of a delete DML operation returned by the Database.delete method.")\>

#### Usage

delete is analogous to the delete() statement in the SOAP API.

Each executed delete method counts against the governor limit for DML statements.

To delete a share object record for a custom object, you must pass an sObject instead of a recordID. The recordID parameter isn't supported for share objects for custom objects.

### deleteAsync(sobjects, callback)

Initiates requests to delete the external data that corresponds to the specified external object records. The request is executed asynchronously, as a background operation, and is sent to the external system that's defined by the external object's associated external data source. Allows referencing a callback class whose processDelete method is called for each record after deletion.

#### Signature

public static List<Database.DeleteResult> deleteAsync(List<SObject> sobjects, DataSource.AsyncDeleteCallback callback)

#### Parameters

sobjects

Type: List<SObject>

List of external object records to delete.

callback

Type: [DataSource.AsyncDeleteCallback](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_AsyncDeleteCallback.htm#apex_class_DataSource_AsyncDeleteCallback "A callback class that the Database.deleteAsync method references. Salesforce calls this class after the remote deleteAsync operation is completed. This class provides the compensating transaction in the completion context of the delete operation. Extend this class to define the actions to execute after the remote delete operation finishes execution.")

The callback that contains the state in the originating context and an action (the processDelete method) that is executed after the insert operation is completed. Use the action callback to update org data according to the operation’s results. The callback object must extend DataSource.AsyncDeleteCallback.

#### Return Value

Type: List<[Database.DeleteResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_deleteresult.htm#apex_methods_system_database_deleteresult "Represents the result of a delete DML operation returned by the Database.delete method.")\>

Status results for the delete operation. Each result corresponds to a record processed by this asynchronous operation and is associated with a unique identifier (asyncLocator). The asyncLocator value is included in the errors array of the result. You can retrieve this identifier with Database.getAsyncLocator(). Retrieve the final result with Database.getAsyncDeleteResult().

### deleteAsync(sobject, callback)

Initiates a request to delete the external data that corresponds to the specified external object record. The request is executed asynchronously, as a background operation, and is sent to the external system that's defined by the external object's associated external data source. Allows referencing a callback class whose processDelete method is called after deletion.

#### Signature

public static Database.DeleteResult deleteAsync(SObject sobject, DataSource.AsyncDeleteCallback callback)

#### Parameters

sobject

Type: [SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

The external object record to delete.

callback

Type: [DataSource.AsyncDeleteCallback](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_AsyncDeleteCallback.htm#apex_class_DataSource_AsyncDeleteCallback "A callback class that the Database.deleteAsync method references. Salesforce calls this class after the remote deleteAsync operation is completed. This class provides the compensating transaction in the completion context of the delete operation. Extend this class to define the actions to execute after the remote delete operation finishes execution.")

The callback that contains the state in the originating context and an action (the processDelete method) that is executed after the insert operation is completed. Use the action callback to update org data according to the operation’s results. The callback object must extend DataSource.AsyncDeleteCallback.

#### Return Value

Type: [Database.DeleteResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_deleteresult.htm#apex_methods_system_database_deleteresult "Represents the result of a delete DML operation returned by the Database.delete method.")

Status result for the delete operation. The result corresponds to the record processed by this asynchronous operation and is associated with a unique identifier (asyncLocator). The asyncLocator value is included in the errors array of the result. You can retrieve this identifier with Database.getAsyncLocator(). Retrieve the final result with Database.getAsyncDeleteResult().

### deleteAsync(sobjects)

Initiates requests to delete the external data that corresponds to the specified external object records. The requests are executed asynchronously, as background operations, and are sent to the external systems that are defined by the external objects' associated external data sources.

#### Signature

public static List<Database.DeleteResult> deleteAsync(List<SObject> sobjects)

#### Parameters

sobjects

Type: List<SObject>

List of external object records to delete.

#### Return Value

Type: List<[Database.DeleteResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_deleteresult.htm#apex_methods_system_database_deleteresult "Represents the result of a delete DML operation returned by the Database.delete method.")\>

Status results for the delete operation. Each result corresponds to a record processed by this asynchronous operation and is associated with a unique identifier (asyncLocator). The asyncLocator value is included in the errors array of the result. You can retrieve this identifier with Database.getAsyncLocator(). Retrieve the final result with Database.getAsyncDeleteResult().

### deleteAsync(sobject)

Initiates a request to delete the external data that corresponds to the specified external object record. The request is executed asynchronously, as a background operation, and is sent to the external system that's defined by the external object's associated external data source.

#### Signature

public static Database.DeleteResult deleteAsync(SObject sobject)

#### Parameters

sobject

Type: [SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

The external object record to delete.

#### Return Value

Type: [Database.DeleteResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_deleteresult.htm#apex_methods_system_database_deleteresult "Represents the result of a delete DML operation returned by the Database.delete method.")

Status result for the delete operation. The result corresponds to the record processed by this asynchronous operation and is associated with a unique identifier (asyncLocator). The asyncLocator value is included in the errors array of the result. You can retrieve this identifier with Database.getAsyncLocator(). Retrieve the final result with Database.getAsyncDeleteResult().

### deleteAsync(sobjects, callback, accessLevel)

Initiates requests to delete the external data that corresponds to the specified external object records. The request is executed asynchronously, as a background operation, and is sent to the external system that's defined by the external object's associated external data source. Allows referencing a callback class whose processDelete method is called for each record after deletion.

#### Signature

public static List<Database.DeleteResult> deleteAsync(List<SObject> sobjects, DataSource.AsyncDeleteCallback callback, System.AccessLevel accessLevel)

#### Parameters

sobjects

Type: List<SObject>

List of external object records to delete.

callback

Type: [DataSource.AsyncDeleteCallback](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_AsyncDeleteCallback.htm#apex_class_DataSource_AsyncDeleteCallback "A callback class that the Database.deleteAsync method references. Salesforce calls this class after the remote deleteAsync operation is completed. This class provides the compensating transaction in the completion context of the delete operation. Extend this class to define the actions to execute after the remote delete operation finishes execution.")

The callback that contains the state in the originating context and an action (the processDelete method) that is executed after the insert operation is completed. The execution is in system mode regardless of the accessLevel parameter. Use the action callback to update org data according to the operation’s results. The callback object must extend DataSource.AsyncDeleteCallback.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: List<[Database.DeleteResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_deleteresult.htm#apex_methods_system_database_deleteresult "Represents the result of a delete DML operation returned by the Database.delete method.")\>

Status results for the delete operation. Each result corresponds to a record processed by this asynchronous operation and is associated with a unique identifier (asyncLocator). The asyncLocator value is included in the errors array of the result. You can retrieve this identifier with Database.getAsyncLocator(). Retrieve the final result with Database.getAsyncDeleteResult().

### deleteAsync(sobject, callback, accessLevel)

Initiates a request to delete the external data that corresponds to the specified external object record. The request is executed asynchronously, as a background operation, and is sent to the external system that's defined by the external object's associated external data source. Allows referencing a callback class whose processDelete method is called after deletion.

#### Signature

public static Database.DeleteResult deleteAsync(SObject sobject, DataSource.AsyncDeleteCallback callback, System.AccessLevel accessLevel)

#### Parameters

sobject

Type: [SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

The external object record to delete.

callback

Type: [DataSource.AsyncDeleteCallback](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_AsyncDeleteCallback.htm#apex_class_DataSource_AsyncDeleteCallback "A callback class that the Database.deleteAsync method references. Salesforce calls this class after the remote deleteAsync operation is completed. This class provides the compensating transaction in the completion context of the delete operation. Extend this class to define the actions to execute after the remote delete operation finishes execution.")

The callback that contains the state in the originating context and an action (the processDelete method) that is executed after the insert operation is completed. The execution is in system mode regardless of the accessLevel parameter. Use the action callback to update org data according to the operation’s results. The callback object must extend DataSource.AsyncDeleteCallback.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: [Database.DeleteResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_deleteresult.htm#apex_methods_system_database_deleteresult "Represents the result of a delete DML operation returned by the Database.delete method.")

Status result for the delete operation. The result corresponds to the record processed by this asynchronous operation and is associated with a unique identifier (asyncLocator). The asyncLocator value is included in the errors array of the result. You can retrieve this identifier with Database.getAsyncLocator(). Retrieve the final result with Database.getAsyncDeleteResult().

### deleteAsync(sobjects, accessLevel)

Initiates requests to delete the external data that corresponds to the specified external object records. The requests are executed asynchronously, as background operations, and are sent to the external systems that are defined by the external objects' associated external data sources.

#### Signature

public static List<Database.DeleteResult> deleteAsync(List<SObject> sobjects, System.AccessLevel accessLevel)

#### Parameters

sobjects

Type: List<SObject>

List of external object records to delete.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: List<[Database.DeleteResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_deleteresult.htm#apex_methods_system_database_deleteresult "Represents the result of a delete DML operation returned by the Database.delete method.")\>

Status results for the delete operation. Each result corresponds to a record processed by this asynchronous operation and is associated with a unique identifier (asyncLocator). The asyncLocator value is included in the errors array of the result. You can retrieve this identifier with Database.getAsyncLocator(). Retrieve the final result with Database.getAsyncDeleteResult().

### deleteAsync(sobject, accessLevel)

Initiates a request to delete the external data that corresponds to the specified external object record. The request is executed asynchronously, as a background operation, and is sent to the external system that's defined by the external object's associated external data source.

#### Signature

public static Database.DeleteResult deleteAsync(SObject sobject, System.AccessLevel accessLevel)

#### Parameters

sobject

Type: [SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

The external object record to delete.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: [Database.DeleteResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_deleteresult.htm#apex_methods_system_database_deleteresult "Represents the result of a delete DML operation returned by the Database.delete method.")

Status result for the delete operation. The result corresponds to the record processed by this asynchronous operation and is associated with a unique identifier (asyncLocator). The asyncLocator value is included in the errors array of the result. You can retrieve this identifier with Database.getAsyncLocator(). Retrieve the final result with Database.getAsyncDeleteResult().

### deleteImmediate(sobjects)

Initiates requests to delete the external data that corresponds to the specified external object records. The requests are executed synchronously and are sent to the external systems that are defined by the external objects' associated external data sources. If the Apex transaction contains pending changes, the synchronous operations can't be completed and throw exceptions.

#### Signature

public static List<Database.DeleteResult> deleteImmediate(List<SObject> sobjects)

#### Parameters

sobjects

Type: List<SObject>

List of external object records to delete.

#### Return Value

Type: List<[Database.DeleteResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_deleteresult.htm#apex_methods_system_database_deleteresult "Represents the result of a delete DML operation returned by the Database.delete method.")\>

Status results for the delete operation.

#### Usage

The batch limit for big objects using deleteImmediate() is 50,000 records at once.

### deleteImmediate(sobject)

Initiates a request to delete the external data that corresponds to the specified external object record. The request is executed synchronously and is sent to the external system that's defined by the external object's associated external data source. If the Apex transaction contains pending changes, the synchronous operation can't be completed and throws an exception.

#### Signature

public static Database.DeleteResult deleteImmediate(SObject sobject)

#### Parameters

sobject

Type: [SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

The external object record to delete.

#### Return Value

Type: [Database.DeleteResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_deleteresult.htm#apex_methods_system_database_deleteresult "Represents the result of a delete DML operation returned by the Database.delete method.")

Status result for the delete operation.

### deleteImmediate(sobjects, accessLevel)

Initiates requests to delete the external data that corresponds to the specified external object records. The requests are executed synchronously and are sent to the external systems that are defined by the external objects' associated external data sources. If the Apex transaction contains pending changes, the synchronous operations can't be completed and throw exceptions.

#### Signature

public static List<Database.DeleteResult> deleteImmediate(List<SObject> sobjects, System.AccessLevel accessLevel)

#### Parameters

sobjects

Type: List<SObject>

List of external object records to delete.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: List<[Database.DeleteResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_deleteresult.htm#apex_methods_system_database_deleteresult "Represents the result of a delete DML operation returned by the Database.delete method.")\>

Status results for the delete operation.

#### Usage

The batch limit for big objects using deleteImmediate() is 50,000 records at once.

### deleteImmediate(sobject, accessLevel)

Initiates a request to delete the external data that corresponds to the specified external object record. The request is executed synchronously and is sent to the external system that's defined by the external object's associated external data source. If the Apex transaction contains pending changes, the synchronous operation can't be completed and throws an exception.

#### Signature

public static Database.DeleteResult deleteImmediate(SObject sobject, System.AccessLevel accessLevel)

#### Parameters

sobject

Type: [SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

The external object record to delete.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: [Database.DeleteResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_deleteresult.htm#apex_methods_system_database_deleteresult "Represents the result of a delete DML operation returned by the Database.delete method.")

Status result for the delete operation.

### emptyRecycleBin(recordIds)

Permanently deletes the specified records from the Recycle Bin.

#### Signature

public static Database.EmptyRecycleBinResult\[\] emptyRecycleBin(ID \[\] recordIds)

#### Parameters

recordIds

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")\[\]

#### Return Value

Type: [Database.EmptyRecycleBinResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_EmptyRecycleBinResult.htm#apex_methods_system_database_EmptyRecycleBinResult "The result of the emptyRecycleBin DML operation returned by the Database.emptyRecycleBin method.")\[\]

#### Usage

Note the following:

-   After records are deleted using this method, they cannot be undeleted.
-   Only 10,000 records can be specified for deletion.
-   Logged in users can delete any record that they can query in their Recycle Bin, or the recycle bins of any subordinates. If logged in users have “Modify All Data” permission, they can query and delete records from any Recycle Bin in the organization.
-   Cascade delete record IDs should not be included in the list of IDs; otherwise an error occurs. For example, if an account record is deleted, all related contacts, opportunities, contracts, and so on are also deleted. Only include the Id of the top-level account. All related records are automatically removed.
-   Deleted items are added to the number of items processed by a DML statement, and the method call is added to the total number of DML statements issued. Each executed emptyRecycleBin method counts against the governor limit for DML statements.

### emptyRecycleBin(obj)

Permanently deletes the specified sObject from the Recycle Bin.

#### Signature

public static Database.EmptyRecycleBinResult emptyRecycleBin(sObject obj)

#### Parameters

obj

Type: [sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

#### Return Value

Type: [Database.EmptyRecycleBinResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_EmptyRecycleBinResult.htm#apex_methods_system_database_EmptyRecycleBinResult "The result of the emptyRecycleBin DML operation returned by the Database.emptyRecycleBin method.")

#### Usage

Note the following:

-   After an sObject is deleted using this method, it cannot be undeleted.
-   Only 10,000 sObjects can be specified for deletion.
-   The logged-in user can delete any sObject (that can be queried) in their Recycle Bin, or the recycle bins of any subordinates. If the logged-in user has “Modify All Data” permission, they can query and delete sObjects from any Recycle Bin in the organization.
-   Do not include an sObject that was deleted due to a cascade delete; otherwise an error occurs. For example, if an account is deleted, all related contacts, opportunities, contracts, and so on are also deleted. Only include sObjects of the top-level account. All related sObjects are automatically removed.

### emptyRecycleBin(listOfSObjects)

Permanently deletes the specified sObjects from the Recycle Bin.

#### Signature

public static Database.EmptyRecycleBinResult\[\] emptyRecycleBin(sObject\[\] listOfSObjects)

#### Parameters

listOfSObjects

Type: [sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")\[\]

#### Return Value

Type: [Database.EmptyRecycleBinResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_EmptyRecycleBinResult.htm#apex_methods_system_database_EmptyRecycleBinResult "The result of the emptyRecycleBin DML operation returned by the Database.emptyRecycleBin method.")\[\]

#### Usage

Note the following:

-   After an sObject is deleted using this method, it cannot be undeleted.
-   Only 10,000 sObjects can be specified for deletion.
-   The logged-in user can delete any sObject (that can be queried) in their Recycle Bin, or the recycle bins of any subordinates. If the logged-in user has “Modify All Data” permission, they can query and delete sObjects from any Recycle Bin in the organization.
-   Do not include an sObject that was deleted due to a cascade delete; otherwise an error occurs. For example, if an account is deleted, all related contacts, opportunities, contracts, and so on are also deleted. Only include sObjects of the top-level account. All related sObjects are automatically removed.

### executeBatch(batchClassObject)

Submits a batch Apex job for execution corresponding to the specified class.

#### Signature

public static ID executeBatch(Object batchClassObject)

#### Parameters

batchClassObject

Type: Object

An instance of a class that implements the [Database.Batchable interface](atlas.en-us.apexref.meta/apexref/apex_interface_database_batchable.htm#apex_interface_database_batchable "The class that implements this interface can be executed as a batch Apex job.").

#### Return Value

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

The ID of the new batch job (AsyncApexJob).

#### Usage

When calling this method, Salesforce chunks the records returned by the start method of the batch class into batches of 200, and then passes each batch to the execute method. Apex governor limits are reset for each execution of execute.

For more information, see [Using Batch Apex](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_batch_interface.htm).

#### Versioned Behavior Changes

If the executeBatch call fails to acquire an Apex flex queue lock:

-   In API version 52.0 and later, the call throws a [System.AsyncException.](atlas.en-us.apexref.meta/apexref/apex_classes_exception_methods.htm "An exception denotes an error that disrupts the normal flow of code execution. You can use Apex built-in exceptions or create custom exceptions. All exceptions have common methods.")
-   In API version 51.0 and earlier, the call returns an empty ID, "000000000000000", instead of throwing an exception.

### executeBatch(batchClassObject, scope)

Submits a batch Apex job for execution using the specified class and scope.

#### Signature

public static ID executeBatch(Object batchClassObject, Integer scope)

#### Parameters

batchClassObject

Type: Object

An instance of a class that implements the [Database.Batchable interface](atlas.en-us.apexref.meta/apexref/apex_interface_database_batchable.htm#apex_interface_database_batchable "The class that implements this interface can be executed as a batch Apex job.").

scope

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of records to be passed into the execute method for batch processing.

#### Return Value

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

The ID of the new batch job (AsyncApexJob).

#### Usage

The value for scope must be greater than 0.

If the start method of the batch class returns a Database.QueryLocator, the scope parameter of Database.executeBatch can have a maximum value of 2,000. If set to a higher value, Salesforce chunks the records returned by the QueryLocator into smaller batches of up to 200 records. If the start method of the batch class returns an iterable, the scope parameter value has no upper limit; however, if you use a very high number, you could run into other limits.

Apex governor limits are reset for each execution of execute.

For more information, see [Using Batch Apex](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_batch_interface.htm).

#### Versioned Behavior Changes

If the executeBatch call fails to acquire an Apex flex queue lock:

-   In API version 52.0 and later, the call throws a [System.AsyncException.](atlas.en-us.apexref.meta/apexref/apex_classes_exception_methods.htm "An exception denotes an error that disrupts the normal flow of code execution. You can use Apex built-in exceptions or create custom exceptions. All exceptions have common methods.")
-   In API version 51.0 and earlier, the call returns an empty ID, "000000000000000", instead of throwing an exception.

### getAsyncDeleteResult(deleteResult)

Retrieves the status of an asynchronous delete operation that’s identified by a Database.DeleteResult object.

#### Signature

public static Database.DeleteResult getAsyncDeleteResult(Database.DeleteResult deleteResult)

#### Parameters

deleteResult

Type: [Database.DeleteResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_deleteresult.htm#apex_methods_system_database_deleteresult "Represents the result of a delete DML operation returned by the Database.delete method.")

The result record for the delete operation being retrieved.

#### Return Value

Type: [Database.DeleteResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_deleteresult.htm#apex_methods_system_database_deleteresult "Represents the result of a delete DML operation returned by the Database.delete method.")

The result of a completed asynchronous delete of a record or records.

### getAsyncDeleteResult(asyncLocator)

Retrieves the result of an asynchronous delete operation based on the result’s unique identifier.

#### Signature

public static Database.DeleteResult getAsyncDeleteResult(String asyncLocator)

#### Parameters

asyncLocator

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The unique identifier associated with the result of an asynchronous operation.

#### Return Value

Type: [Database.DeleteResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_deleteresult.htm#apex_methods_system_database_deleteresult "Represents the result of a delete DML operation returned by the Database.delete method.")

The result of a completed asynchronous delete of a record or records.

### getAsyncLocator(result)

Returns the asyncLocator associated with the result of a specified asynchronous insert, update, or delete operation.

#### Signature

public static String getAsyncLocator(Object result)

#### Parameters

result

Type: Object

The saved result of an asynchronous insert, update, or delete operation. The result object can be of type Database.SaveResult or Database.DeleteResult.

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The unique identifier associated with the result of the specified operation.

### getAsyncSaveResult(saveResult)

Returns the status of an asynchronous insert or update operation that’s identified by a Database.SaveResult object.

#### Signature

public static Database.SaveResult getAsyncSaveResult(Database.SaveResult saveResult)

#### Parameters

saveResult

Type: [Database.SaveResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm#apex_methods_system_database_saveresult "The result of an insert or update DML operation returned by a Database method.")

The result record for the insert or update operation being retrieved.

#### Return Value

[Database.SaveResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm#apex_methods_system_database_saveresult "The result of an insert or update DML operation returned by a Database method.")

The result of a completed asynchronous operation on a record or records.

### getAsyncSaveResult(asyncLocator)

Returns the status of an asynchronous insert or update operation based on the unique identifier associated with each modification.

#### Signature

public static Database.SaveResult getAsyncSaveResult(String asyncLocator)

#### Parameters

asyncLocator

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The unique identifier associated with the result of an asynchronous operation.

#### Return Value

[Database.SaveResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm#apex_methods_system_database_saveresult "The result of an insert or update DML operation returned by a Database method.")

The result of a completed asynchronous operation on a record or records.

### getCursor(query)

Creates a cursor when the specified SOQL query is executed.

#### Signature

public static Database.Cursor getCursor(String query)

#### Parameters

query

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The SOQL query to be run.

#### Return Value

Type: [Database.Cursor](atlas.en-us.apexref.meta/apexref/apex_class_Database_Cursor.htm#apex_class_Database_Cursor "Contains methods to fetch records and to get the number of cursor rows returned from a SOQL query.")

### getCursor(query, accessLevel)

Creates a cursor when the specified SOQL query is executed.

#### Signature

public static Database.Cursor getCursor(String query, Object accessLevel)

#### Parameters

query

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The SOQL query to be run.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: [Database.Cursor](atlas.en-us.apexref.meta/apexref/apex_class_Database_Cursor.htm#apex_class_Database_Cursor "Contains methods to fetch records and to get the number of cursor rows returned from a SOQL query.")

### getCursorWithBinds(query, bindMap, accessLevel)

Creates a cursor when the specified SOQL query is executed.

#### Signature

public static Database.Cursor getCursorWithBinds(String query, Map bindMap, Object accessLevel)

#### Parameters

query

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The SOQL query to be run.

bindMap

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")

A map that contains placeholder keys for each bind variable specified in the SOQL query string and its value.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: [Database.Cursor](atlas.en-us.apexref.meta/apexref/apex_class_Database_Cursor.htm#apex_class_Database_Cursor "Contains methods to fetch records and to get the number of cursor rows returned from a SOQL query.")

### getDeleted(sObjectType, startDate, endDate)

Returns the list of individual records that have been deleted for an sObject type within the specified start and end dates and times and that are still in the Recycle Bin.

#### Signature

public static Database.GetDeletedResult getDeleted(String sObjectType, Datetime startDate, Datetime endDate)

#### Parameters

sObjectType

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The sObjectType argument is the sObject type name for which to get the deleted records, such as account or merchandise\_\_c.

startDate

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

Start date and time of the deleted records time window.

endDate

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

End date and time of the deleted records time window.

#### Return Value

Type: [Database.GetDeletedResult](atlas.en-us.apexref.meta/apexref/apex_class_database_getdeletedresult.htm#apex_class_database_getdeletedresult "Contains the deleted records retrieved for a specific sObject type and time window.")

#### Usage

Because the Recycle Bin holds records up to 15 days, results are returned for no more than 15 days previous to the day the call is executed (or earlier if an administrator has purged the Recycle Bin).

#### Example

```

```

### getPaginationCursor(query)

Creates a pagination cursor when the specified SOQL query is executed.

#### Signature

public static Database.PaginationCursor getPaginationCursor(String query)

#### Parameters

query

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The SOQL query to be run.

#### Return Value

Type: [Database.PaginationCursor](atlas.en-us.apexref.meta/apexref/apex_class_Database_PaginationCursor.htm#apex_class_Database_PaginationCursor "This class represents a pagination cursor that can traverse a SOQL query result set. It contains methods that fetch rows by page. It also contains a method that returns the total number of rows in the result set.")

### getPaginationCursor(query, accessLevel)

Creates a pagination cursor when the specified SOQL query is executed.

#### Signature

public static Database.PaginationCursor getPaginationCursor(String query, Object accessLevel)

#### Parameters

query

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The SOQL query to be run.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: [Database.PaginationCursor](atlas.en-us.apexref.meta/apexref/apex_class_Database_PaginationCursor.htm#apex_class_Database_PaginationCursor "This class represents a pagination cursor that can traverse a SOQL query result set. It contains methods that fetch rows by page. It also contains a method that returns the total number of rows in the result set.")

### getPaginationCursorWithBinds(query, bindMap, accessLevel)

Creates a pagination cursor when the specified SOQL query is executed.

#### Signature

public static Database.PaginationCursor getPaginationCursorWithBinds(String query, Map bindMap, Object accessLevel)

#### Parameters

query

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The SOQL query to be run.

bindMap

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")

A map that contains placeholder keys for each bind variable specified in the SOQL query string and its value.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: [Database.PaginationCursor](atlas.en-us.apexref.meta/apexref/apex_class_Database_PaginationCursor.htm#apex_class_Database_PaginationCursor "This class represents a pagination cursor that can traverse a SOQL query result set. It contains methods that fetch rows by page. It also contains a method that returns the total number of rows in the result set.")

### getQueryLocator(staticSoqlQueryResult)

Creates a QueryLocator object used in batch Apex or Visualforce.

#### Signature

public static Database. QueryLocator getQueryLocator(sObject \[\] staticSoqlQueryResult)

#### Parameters

staticSoqlQueryResult

Type: [sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.") \[\]

The staticSoqlQueryResult parameter must be a static, inline SOQL query.

#### Return Value

Type: [Database.QueryLocator](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_batch.htm#apex_methods_system_database_batch "Represents the record set returned by Database.getQueryLocator and used with Batch Apex.")

#### Usage

You can't use getQueryLocator with any query that contains an [aggregate function](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/langCon_apex_SOQL_agg_fns.htm).

Each executed getQueryLocator method counts against the governor limit of 10,000 total records retrieved and the total number of SOQL queries issued.

For more information, see [Understanding Apex Managed Sharing](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_bulk_sharing.htm), and [IdeaStandardSetController Class](atlas.en-us.apexref.meta/apexref/apex_pages_ideastandardsetcontroller.htm#apex_pages_ideastandardsetcontroller "IdeaStandardSetController objects offer Ideas-specific functionality in addition to what is provided by the StandardSetController.").

### getQueryLocator(query)

Creates a QueryLocator object used in batch Apex or Visualforce.

#### Signature

public static Database.QueryLocator getQueryLocator(String query)

#### Parameters

query

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [Database.QueryLocator](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_batch.htm#apex_methods_system_database_batch "Represents the record set returned by Database.getQueryLocator and used with Batch Apex.")

#### Usage

You can't use getQueryLocator with any query that contains an [aggregate function](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/langCon_apex_SOQL_agg_fns.htm).

Each executed getQueryLocator method counts against the governor limit of 10,000 total records retrieved and the total number of SOQL queries issued.

For more information, see [Understanding Apex Managed Sharing](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_bulk_sharing.htm), and [StandardSetController Class](atlas.en-us.apexref.meta/apexref/apex_pages_standardsetcontroller.htm#apex_pages_standardsetcontroller "StandardSetController objects allow you to create list controllers similar to, or as extensions of, the pre-built Visualforce list controllers provided by Salesforce.").

### getQueryLocator(staticSoqlQueryResult, accessLevel)

Creates a QueryLocator object used in batch Apex or Visualforce.

#### Signature

public static Database.QueryLocator getQueryLocator(sObject \[\] staticSoqlQueryResult, System.AccessLevel accessLevel)

#### Parameters

staticSoqlQueryResult

Type: [sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.") \[\]

The staticSoqlQueryResult parameter must be a static, inline SOQL query.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: [Database.QueryLocator](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_batch.htm#apex_methods_system_database_batch "Represents the record set returned by Database.getQueryLocator and used with Batch Apex.")

#### Usage

The access level is evaluated only when the QueryLocator is created. A QueryLocator can be long lived, such as when used in a batch. We don’t reevaluate the object and field-level security with each iteration of the QueryLocator. As a result, if you specify user mode, and then change the security settings after the QueryLocator is created, the new settings aren’t enforced.

You can't use getQueryLocator with any query that contains an [aggregate function](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/langCon_apex_SOQL_agg_fns.htm).

Each executed getQueryLocator method counts against the governor limit of 10,000 total records retrieved and the total number of SOQL queries issued.

For more information, see [Understanding Apex Managed Sharing](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_bulk_sharing.htm), and [IdeaStandardSetController Class](atlas.en-us.apexref.meta/apexref/apex_pages_ideastandardsetcontroller.htm#apex_pages_ideastandardsetcontroller "IdeaStandardSetController objects offer Ideas-specific functionality in addition to what is provided by the StandardSetController.").

### getQueryLocator(query, accessLevel)

Creates a QueryLocator object used in batch Apex or Visualforce.

#### Signature

public static Database.QueryLocator getQueryLocator(String query, System.AccessLevel accessLevel)

#### Parameters

query

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: [Database.QueryLocator](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_batch.htm#apex_methods_system_database_batch "Represents the record set returned by Database.getQueryLocator and used with Batch Apex.")

#### Usage

The access level is evaluated only when the QueryLocator is created. A QueryLocator can be long lived, such as when used in a batch. We don’t reevaluate the object and field-level security with each iteration of the QueryLocator. As a result, if you specify user mode, and then change the security settings after the QueryLocator is created, the new settings aren’t enforced.

You can't use getQueryLocator with any query that contains an [aggregate function](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/langCon_apex_SOQL_agg_fns.htm).

Each executed getQueryLocator method counts against the governor limit of 10,000 total records retrieved and the total number of SOQL queries issued.

For more information, see [Understanding Apex Managed Sharing](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_bulk_sharing.htm), and [StandardSetController Class](atlas.en-us.apexref.meta/apexref/apex_pages_standardsetcontroller.htm#apex_pages_standardsetcontroller "StandardSetController objects allow you to create list controllers similar to, or as extensions of, the pre-built Visualforce list controllers provided by Salesforce.").

### getQueryLocatorWithBinds(query, bindMap, accessLevel)

Creates a QueryLocator object used in batch Apex or Visualforce. Bind variables in the query are resolved from the bindMap Map parameter directly with the key, rather than from Apex code variables.

#### Signature

public static Database.QueryLocator getQueryLocatorWithBinds(String query, Map<String, Object> bindMap, System.AccessLevel accessLevel)

#### Parameters

query

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

SOQL query that includes Apex bind variables preceded by a colon. All bind variables must have a key in the bindMap Map.

bindMap

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."), Object>

A map that contains keys for each bind variable specified in the SOQL queryString and its value. The keys can’t be null or duplicates, and the values can’t be null or empty strings.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced.

#### Return Value

Type: [Database.QueryLocator](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_batch.htm#apex_methods_system_database_batch "Represents the record set returned by Database.getQueryLocator and used with Batch Apex.")

#### Usage

The access level is evaluated only when the QueryLocator is created. A QueryLocator can be long lived, such as when used in a batch. We don’t reevaluate the object and field-level security with each iteration of the QueryLocator. As a result, if you specify user mode, and then change the security settings after the QueryLocator is created, the new settings aren’t enforced.

You can't use getQueryLocatorWithBinds with any query that contains an [aggregate function](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/langCon_apex_SOQL_agg_fns.htm).

Each executed getQueryLocatorWithBinds method counts against the governor limit for the total number of records retrieved by Database.getQueryLocator(10,000) and the total number of SOQL queries issued. See Per Transaction Apex Limits.

For more information, see [Understanding Apex Managed Sharing](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_bulk_sharing.htm), and [StandardSetController Class](atlas.en-us.apexref.meta/apexref/apex_pages_standardsetcontroller.htm#apex_pages_standardsetcontroller "StandardSetController objects allow you to create list controllers similar to, or as extensions of, the pre-built Visualforce list controllers provided by Salesforce.").

#### Example

In this example, the SOQL query uses a bind variable for an Account name. Its value (Acme Corporation) is passed in using the acctBinds Map.

```

```

### getUpdated(sobjectType, startDate, endDate)

Returns the list of individual records that have been updated for an sObject type within the specified start and end dates and times.

#### Signature

public static Database.GetUpdatedResult getUpdated(String sobjectType, Datetime startDate, Datetime endDate)

#### Parameters

sobjectType

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The sObjectType argument is the sObject type name for which to get the updated records, such as account or merchandise\_\_c.

startDate

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

The startDate argument is the start date and time of the updated records time window.

endDate

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

The endDate argument is the end date and time of the updated records time window.

#### Return Value

Type: [Database.GetUpdatedResult](atlas.en-us.apexref.meta/apexref/apex_class_database_getupdatedresult.htm#apex_class_database_getupdatedresult "Contains the result for the Database.getUpdated method call.")

#### Usage

The date range for the returned results is no more than 30 days previous to the day the call is executed.

#### Example

```

```

### insert(recordToInsert, allOrNone)

Adds an sObject, such as an individual account or contact, to your organization's data.

#### Signature

public static Database.SaveResult insert(sObject recordToInsert, Boolean allOrNone)

#### Parameters

recordToInsert

Type: [sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

allOrNone

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

(Optional) The allOrNone parameter specifies whether the operation allows partial success. If allOrNone is set to false and a record fails, the remainder of the DML operation can still succeed. You must iterate through the returned results to identify which records succeeded or failed. If allOrNone is set to true and the method isn’t successful, an exception is thrown. The default for the parameter is true.

#### Return Value

Type: [Database.SaveResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm#apex_methods_system_database_saveresult "The result of an insert or update DML operation returned by a Database method.")

#### Usage

insert is analogous to the INSERT statement in SQL.

Apex classes and triggers saved (compiled) using API version 15.0 and higher produce a runtime error if you assign a String value that is too long for the field.

Each executed insert method counts against the governor limit for DML statements.

### insert(recordsToInsert, allOrNone)

Adds one or more sObjects, such as individual accounts or contacts, to your organization’s data.

#### Signature

public static Database.SaveResult\[\] insert(sObject\[\] recordsToInsert, Boolean allOrNone)

#### Parameters

recordsToInsert

Type: [sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.") \[\]

allOrNone

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

(Optional) The allOrNone parameter specifies whether the operation allows partial success. If allOrNone is set to false and a record fails, the remainder of the DML operation can still succeed. You must iterate through the returned results to identify which records succeeded or failed. If allOrNone is set to true and the method isn’t successful, an exception is thrown. The default for the parameter is true.

If allOrNone is set to false and a before-trigger assigns an invalid value to a field, the partial set of valid records isn’t inserted.

#### Return Value

Type: [Database.SaveResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm#apex_methods_system_database_saveresult "The result of an insert or update DML operation returned by a Database method.")\[\]

#### Usage

insert is analogous to the INSERT statement in SQL.

Apex classes and triggers saved (compiled) using API version 15.0 and higher produce a runtime error if you assign a String value that is too long for the field.

Each executed insert method counts against the governor limit for DML statements.

#### Example

Example:

The following example inserts two accounts:

```

```

### insert(recordToInsert, dmlOptions)

Adds an sObject, such as an individual account or contact, to your organization's data.

#### Signature

public static Database.SaveResult insert(sObject recordToInsert, Database.DMLOptions dmlOptions)

#### Parameters

recordToInsert

Type: [sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

dmlOptions

Type: [Database.DMLOptions](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_dmloptions.htm#apex_methods_system_database_dmloptions "Enables you to set options related to DML operations.")

The optional dmlOptions parameter specifies additional data for the transaction, such as assignment rule information or rollback behavior when errors occur during record insertions.

#### Return Value

Type: [Database.SaveResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm#apex_methods_system_database_saveresult "The result of an insert or update DML operation returned by a Database method.")

#### Usage

insert is analogous to the INSERT statement in SQL.

Apex classes and triggers saved (compiled) using API version 15.0 and higher produce a runtime error if you assign a String value that is too long for the field.

Each executed insert method counts against the governor limit for DML statements.

### insert(recordsToInsert, dmlOptions)

Adds one or more sObjects, such as individual accounts or contacts, to your organization's data.

#### Signature

public static Database.SaveResult insert(sObject\[\] recordsToInsert, Database.DMLOptions dmlOptions)

#### Parameters

recordsToInsert

Type: [sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")\[\]

dmlOptions

Type: [Database.DMLOptions](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_dmloptions.htm#apex_methods_system_database_dmloptions "Enables you to set options related to DML operations.")

The optional dmlOptions parameter specifies additional data for the transaction, such as assignment rule information or rollback behavior when errors occur during record insertions.

#### Return Value

Type: [Database.SaveResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm#apex_methods_system_database_saveresult "The result of an insert or update DML operation returned by a Database method.")\[\]

#### Usage

insert is analogous to the INSERT statement in SQL.

Apex classes and triggers saved (compiled) using API version 15.0 and higher produce a runtime error if you assign a String value that is too long for the field.

Each executed insert method counts against the governor limit for DML statements.

### insert(recordToInsert, allOrNone, accessLevel)

Adds an sObject, such as an individual account or contact, to your organization's data.

#### Signature

public static Database.SaveResult insert(SObject recordToInsert, Boolean allOrNone, System.AccessLevel accessLevel)

#### Parameters

recordToInsert

Type: [sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

allOrNone

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

(Optional) The allOrNone parameter specifies whether the operation allows partial success. If allOrNone is set to false and a record fails, the remainder of the DML operation can still succeed. You must iterate through the returned results to identify which records succeeded or failed. If allOrNone is set to true and the method isn’t successful, an exception is thrown. The default for the parameter is true.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: [Database.SaveResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm#apex_methods_system_database_saveresult "The result of an insert or update DML operation returned by a Database method.")

#### Usage

If you use the accessLevel parameter to specify that the method runs in user mode, we report all encountered inaccessible fields. The way to retrieve the names of these inaccessible fields depends on the value of this method's allOrNone parameter, or the equivalent [DmlOptions.optAllOrNone](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_database_dmloptions.htm#apex_Database_DmlOptions_optAllOrNone) property. If you specify that:

-   allOrNone=true or DmlOptions.optAllOrNone=true: Catch the DMLException and use the DMLException.getDMLFieldNames() method to retrieve the list of inaccessible fields. See [Exception Class and Built-In Exceptions](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_classes_exception_methods.htm) for more information.
-   allOrNone=false or DmlOptions.optAllOrNone=false: For each failing record, we update the Database.Error object that results from the DML operation. Use the Error.getFields() method to retrieve the list of inaccessible fields. See the [Error Class methods](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_database_error.htm#apex_Database_Error_methods) for more information.

insert is analogous to the INSERT statement in SQL.

Apex classes and triggers saved (compiled) using API version 15.0 and higher produce a runtime error if you assign a String value that is too long for the field.

Each executed insert method counts against the governor limit for DML statements.

### insert(recordsToInsert, allOrNone, accessLevel)

Adds one or more sObjects, such as individual accounts or contacts, to your organization’s data.

#### Signature

public static List<Database.SaveResult> insert(List<SObject> recordsToInsert, Boolean allOrNone, System.AccessLevel accessLevel)

#### Parameters

recordsToInsert

Type: List<[sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")\>

allOrNone

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

(Optional) The allOrNone parameter specifies whether the operation allows partial success. If allOrNone is set to false and a record fails, the remainder of the DML operation can still succeed. You must iterate through the returned results to identify which records succeeded or failed. If allOrNone is set to true and the method isn’t successful, an exception is thrown. The default for the parameter is true.

If allOrNone is set to false and a before-trigger assigns an invalid value to a field, the partial set of valid records isn’t inserted.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: List<[Database.SaveResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm#apex_methods_system_database_saveresult "The result of an insert or update DML operation returned by a Database method.")\>

#### Usage

If you use the accessLevel parameter to specify that the method runs in user mode, we report all encountered inaccessible fields. The way to retrieve the names of these inaccessible fields depends on the value of this method's allOrNone parameter, or the equivalent [DmlOptions.optAllOrNone](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_database_dmloptions.htm#apex_Database_DmlOptions_optAllOrNone) property. If you specify that:

-   allOrNone=true or DmlOptions.optAllOrNone=true: Catch the DMLException and use the DMLException.getDMLFieldNames() method to retrieve the list of inaccessible fields. See [Exception Class and Built-In Exceptions](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_classes_exception_methods.htm) for more information.
-   allOrNone=false or DmlOptions.optAllOrNone=false: For each failing record, we update the Database.Error object that results from the DML operation. Use the Error.getFields() method to retrieve the list of inaccessible fields. See the [Error Class methods](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_database_error.htm#apex_Database_Error_methods) for more information.

insert is analogous to the INSERT statement in SQL.

Apex classes and triggers saved (compiled) using API version 15.0 and higher produce a runtime error if you assign a String value that is too long for the field.

Each executed insert method counts against the governor limit for DML statements.

### insert(recordToInsert, dmlOptions, accessLevel)

Adds an sObject, such as an individual account or contact, to your organization's data.

#### Signature

public static Database.SaveResult insert(SObject recordToInsert, Database.DMLOptions dmlOptions, System.AccessLevel accessLevel)

#### Parameters

recordToInsert

Type: [sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

dmlOptions

Type: [Database.DMLOptions](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_dmloptions.htm#apex_methods_system_database_dmloptions "Enables you to set options related to DML operations.")

The optional dmlOptions parameter specifies additional data for the transaction, such as assignment rule information or rollback behavior when errors occur during record insertions.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: [Database.SaveResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm#apex_methods_system_database_saveresult "The result of an insert or update DML operation returned by a Database method.")

#### Usage

insert is analogous to the INSERT statement in SQL.

Apex classes and triggers saved (compiled) using API version 15.0 and higher produce a runtime error if you assign a String value that is too long for the field.

Each executed insert method counts against the governor limit for DML statements.

### insert(recordsToInsert, dmlOptions, accessLevel)

Adds one or more sObjects, such as individual accounts or contacts, to your organization's data.

#### Signature

public static List<Database.SaveResult> insert(List<SObject> recordsToInsert, Database.DMLOptions dmlOptions, System.AccessLevel accessLevel)

#### Parameters

recordsToInsert

Type: List<[sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")\>

dmlOptions

Type: [Database.DMLOptions](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_dmloptions.htm#apex_methods_system_database_dmloptions "Enables you to set options related to DML operations.")

The optional dmlOptions parameter specifies additional data for the transaction, such as assignment rule information or rollback behavior when errors occur during record insertions.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: List<[Database.SaveResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm#apex_methods_system_database_saveresult "The result of an insert or update DML operation returned by a Database method.")\>

#### Usage

insert is analogous to the INSERT statement in SQL.

Apex classes and triggers saved (compiled) using API version 15.0 and higher produce a runtime error if you assign a String value that is too long for the field.

Each executed insert method counts against the governor limit for DML statements.

### insertAsync(sobjects, callback)

Initiates requests to add external object data to the relevant external systems. The requests are executed asynchronously, as background operations, and are sent to the external systems that are defined by the external objects' associated external data sources. Allows referencing a callback class whose processSave method is called for each record after the remote operations are completed.

#### Signature

public static List<Database.SaveResult> insertAsync(List<SObject> sobjects, DataSource.AsyncSaveCallback callback)

#### Parameters

sobjects

Type: List<SObject>

List of external object records to insert.

callback

Type: [DataSource.AsyncSaveCallback](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_AsyncSaveCallback.htm#apex_class_DataSource_AsyncSaveCallback "A callback class that the Database.insertAsync or Database.updateAsync method references. Salesforce calls this class after the remote operation is completed. This class provides the compensating transaction in the completion context of the insert or update operation. Extend this class to define the actions to execute after the remote insert or update operation finishes execution.")

The callback object that contains the state in the originating context and an action (the processSave method) that executes after the insert operation is completed. Use the action callback to update org data according to the operation’s results. The callback object must extend DataSource.AsyncSaveCallback.

#### Return Value

Type: List<[Database.SaveResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm#apex_methods_system_database_saveresult "The result of an insert or update DML operation returned by a Database method.")\>

Status results for the insert operation. Each result corresponds to a record processed by this asynchronous operation and is associated with a unique identifier (asyncLocator). The asyncLocator value is included in the errors array of the result. You can retrieve this identifier with Database.getAsyncLocator(). Retrieve the final result with Database.getAsyncSaveResult().

#### Usage

Database.insertAsync() methods can’t be executed in the context of a portal user, even when the portal user is a community member. To add external object records via Apex, use Database.insertImmediate() methods.

### insertAsync(sobject, callback)

Initiates a request to add external object data to the relevant external system. The request is executed asynchronously, as a background operation, and is sent to the external system that's defined by the external object's associated external data source. Allows referencing a callback class whose processSave method is called after the remote operation is completed.

#### Signature

public static Database.SaveResult insertAsync(SObject sobject, DataSource.AsyncSaveCallback callback)

#### Parameters

sobject

Type: [SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

The external object record to insert.

callback

Type: [DataSource.AsyncSaveCallback](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_AsyncSaveCallback.htm#apex_class_DataSource_AsyncSaveCallback "A callback class that the Database.insertAsync or Database.updateAsync method references. Salesforce calls this class after the remote operation is completed. This class provides the compensating transaction in the completion context of the insert or update operation. Extend this class to define the actions to execute after the remote insert or update operation finishes execution.")

The callback object that contains the state in the originating context and an action (the processSave method) that executes after the insert operation is completed. Use the action callback to update org data according to the operation’s results. The callback object must extend DataSource.AsyncSaveCallback.

#### Return Value

Type: [Database.SaveResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm#apex_methods_system_database_saveresult "The result of an insert or update DML operation returned by a Database method.")

Status result for the insert operation. The result corresponds to the record processed by this asynchronous operation and is associated with a unique identifier (asyncLocator). The asyncLocator value is included in the errors array of the result. You can retrieve this identifier with Database.getAsyncLocator(). Retrieve the final result with Database.getAsyncSaveResult().

#### Usage

Database.insertAsync() methods can’t be executed in the context of a portal user, even when the portal user is a community member. To add external object records via Apex, use Database.insertImmediate() methods.

### insertAsync(sobjects)

Initiates requests to add external object data to the relevant external systems. The requests are executed asynchronously, as background operations, and are sent to the external systems that are defined by the external objects' associated external data sources.

#### Signature

public static List<Database.SaveResult> insertAsync(List<SObject> sobjects)

#### Parameters

sobjects

Type: List<SObject>

List of external object records to insert.

#### Return Value

Type: List<[Database.SaveResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm#apex_methods_system_database_saveresult "The result of an insert or update DML operation returned by a Database method.")\>

Status results for the insert operation. Each result corresponds to a record processed by this asynchronous operation and is associated with a unique identifier (asyncLocator). The asyncLocator value is included in the errors array of the result. You can retrieve this identifier with Database.getAsyncLocator(). Retrieve the final result with Database.getAsyncSaveResult().

#### Usage

Database.insertAsync() methods can’t be executed in the context of a portal user, even when the portal user is a community member. To add external object records via Apex, use Database.insertImmediate() methods.

### insertAsync(sobject)

Initiates a request to add external object data to the relevant external system. The request is executed asynchronously, as a background operation, and is sent to the external system that's defined by the external object's associated external data source.

#### Signature

public static Database.SaveResult insertAsync(SObject sobject)

#### Parameters

sobject

Type: [SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

The external object record to insert.

#### Return Value

Type: [Database.SaveResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm#apex_methods_system_database_saveresult "The result of an insert or update DML operation returned by a Database method.")

Status result for the insert operation. The result corresponds to the record processed by this asynchronous operation and is associated with a unique identifier (asyncLocator). The asyncLocator value is included in the errors array of the result. You can retrieve this identifier with Database.getAsyncLocator(). Retrieve the final result with Database.getAsyncSaveResult().

#### Usage

Database.insertAsync() methods can’t be executed in the context of a portal user, even when the portal user is a community member. To add external object records via Apex, use Database.insertImmediate() methods.

### insertAsync(sobjects, callback, accessLevel)

Initiates requests to add external object data to the relevant external systems. The requests are executed asynchronously, as background operations, and are sent to the external systems that are defined by the external objects' associated external data sources. Allows referencing a callback class whose processSave method is called for each record after the remote operations are completed.

#### Signature>

public static List<Database.SaveResult> insertAsync(List<SObject> sobjects, DataSource.AsyncSaveCallback callback, System.AccessLevel accessLevel)

#### Parameters>

sobjects

Type: List<SObject>

List of external object records to insert.

callback

Type: [DataSource.AsyncSaveCallback](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_AsyncSaveCallback.htm#apex_class_DataSource_AsyncSaveCallback "A callback class that the Database.insertAsync or Database.updateAsync method references. Salesforce calls this class after the remote operation is completed. This class provides the compensating transaction in the completion context of the insert or update operation. Extend this class to define the actions to execute after the remote insert or update operation finishes execution.")

The callback object that contains the state in the originating context and an action (the processSave method) that executes after the insert operation is completed. The execution is in system mode regardless of the accessLevel parameter. Use the action callback to update org data according to the operation’s results. The callback object must extend DataSource.AsyncSaveCallback.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value>

Type: List<[Database.SaveResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm#apex_methods_system_database_saveresult "The result of an insert or update DML operation returned by a Database method.")\>

Status results for the insert operation. Each result corresponds to a record processed by this asynchronous operation and is associated with a unique identifier (asyncLocator). The asyncLocator value is included in the errors array of the result. You can retrieve this identifier with Database.getAsyncLocator(). Retrieve the final result with Database.getAsyncSaveResult().

#### Usage>

Database.insertAsync() methods can’t be executed in the context of a portal user, even when the portal user is a community member. To add external object records via Apex, use Database.insertImmediate() methods.

### insertAsync(sobject, callback, accessLevel)

Initiates a request to add external object data to the relevant external system. The request is executed asynchronously, as a background operation, and is sent to the external system that's defined by the external object's associated external data source. Allows referencing a callback class whose processSave method is called after the remote operation is completed.

#### Signature

public static Database.SaveResult insertAsync(SObject sobject, DataSource.AsyncSaveCallback callback, System.AccessLevel accessLevel)

#### Parameters

sobject

Type: [SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

The external object record to insert.

callback

Type: [DataSource.AsyncSaveCallback](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_AsyncSaveCallback.htm#apex_class_DataSource_AsyncSaveCallback "A callback class that the Database.insertAsync or Database.updateAsync method references. Salesforce calls this class after the remote operation is completed. This class provides the compensating transaction in the completion context of the insert or update operation. Extend this class to define the actions to execute after the remote insert or update operation finishes execution.")

The callback object that contains the state in the originating context and an action (the processSave method) that executes after the insert operation is completed. The execution is in system mode regardless of the accessLevel parameter. Use the action callback to update org data according to the operation’s results. The callback object must extend DataSource.AsyncSaveCallback.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: [Database.SaveResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm#apex_methods_system_database_saveresult "The result of an insert or update DML operation returned by a Database method.")

Status result for the insert operation. The result corresponds to the record processed by this asynchronous operation and is associated with a unique identifier (asyncLocator). The asyncLocator value is included in the errors array of the result. You can retrieve this identifier with Database.getAsyncLocator(). Retrieve the final result with Database.getAsyncSaveResult().

#### Usage

Database.insertAsync() methods can’t be executed in the context of a portal user, even when the portal user is a community member. To add external object records via Apex, use Database.insertImmediate() methods.

### insertAsync(sobjects, accessLevel)

Initiates requests to add external object data to the relevant external systems. The requests are executed asynchronously, as background operations, and are sent to the external systems that are defined by the external objects' associated external data sources.

#### Signature

public static List<Database.SaveResult> insertAsync(List<SObject> sobjects, System.AccessLevel accessLevel)

#### Parameters

sobjects

Type: List<SObject>

List of external object records to insert.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: List<[Database.SaveResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm#apex_methods_system_database_saveresult "The result of an insert or update DML operation returned by a Database method.")\>

Status results for the insert operation. Each result corresponds to a record processed by this asynchronous operation and is associated with a unique identifier (asyncLocator). The asyncLocator value is included in the errors array of the result. You can retrieve this identifier with Database.getAsyncLocator(). Retrieve the final result with Database.getAsyncSaveResult().

#### Usage

Database.insertAsync() methods can’t be executed in the context of a portal user, even when the portal user is a community member. To add external object records via Apex, use Database.insertImmediate() methods.

### insertAsync(sobject, accessLevel)

Initiates a request to add external object data to the relevant external system. The request is executed asynchronously, as a background operation, and is sent to the external system that's defined by the external object's associated external data source.

#### Signature

public static Database.SaveResult insertAsync(SObject sobject, System.AccessLevel accessLevel)

#### Parameters

sobject

Type: [SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

The external object record to insert.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: [Database.SaveResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm#apex_methods_system_database_saveresult "The result of an insert or update DML operation returned by a Database method.")

Status result for the insert operation. The result corresponds to the record processed by this asynchronous operation and is associated with a unique identifier (asyncLocator). The asyncLocator value is included in the errors array of the result. You can retrieve this identifier with Database.getAsyncLocator(). Retrieve the final result with Database.getAsyncSaveResult().

#### Usage

Database.insertAsync() methods can’t be executed in the context of a portal user, even when the portal user is a community member. To add external object records via Apex, use Database.insertImmediate() methods.

### insertImmediate(sobjects)

Initiates requests to add external object data to the relevant external systems. The requests are executed synchronously and are sent to the external systems that are defined by the external objects' associated external data sources. If the Apex transaction contains pending changes, the synchronous operations can't be completed and throw exceptions.

#### Signature

public static List<Database.SaveResult> insertImmediate(List<SObject> sobjects)

#### Parameters

sobjects

Type: List<SObject>

List of external object records to insert.

#### Return Value

Type: List<[Database.SaveResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm#apex_methods_system_database_saveresult "The result of an insert or update DML operation returned by a Database method.")\>

Status results for the insert operation.

#### Usage

The operation allows partial success. If one or more record inserts fail, the method doesn’t throw an exception and the remainder of the DML operation can still succeed. The returned SaveResult objects indicate whether the operation was successful. If it wasn’t successful, the objects also return the error code and description.

### insertImmediate(sobject)

Initiates a request to add external object data to the relevant external system. The request is executed synchronously and is sent to the external system that's defined by the external object's associated external data source. If the Apex transaction contains pending changes, the synchronous operation can't be completed and throws an exception.

#### Signature

public static Database.SaveResult insertImmediate(SObject sobject)

#### Parameters

sobject

Type: [SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

The external object record to insert.

#### Return Value

Type: [Database.SaveResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm#apex_methods_system_database_saveresult "The result of an insert or update DML operation returned by a Database method.")

Status result for the insert operation.

#### Usage

If a record insert fails, the method doesn’t throw an exception. The returned SaveResult object indicates whether the operation was successful. If it wasn’t successful, the object returns the error code and description.

### insertImmediate(sobjects, accessLevel)

Initiates requests to add external object data to the relevant external systems. The requests are executed synchronously and are sent to the external systems that are defined by the external objects' associated external data sources. If the Apex transaction contains pending changes, the synchronous operations can't be completed and throw exceptions.

#### Signature

public static List<Database.SaveResult> insertImmediate(List<SObject> sobjects, System.AccessLevel accessLevel)

#### Parameters

sobjects

Type: List<SObject>

List of external object records to insert.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: List<[Database.SaveResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm#apex_methods_system_database_saveresult "The result of an insert or update DML operation returned by a Database method.")\>

Status results for the insert operation.

#### Usage

The operation allows partial success. If one or more record inserts fail, the method doesn’t throw an exception and the remainder of the DML operation can still succeed. The returned SaveResult objects indicate whether the operation was successful. If it wasn’t successful, the objects also return the error code and description.

### insertImmediate(sobject, accessLevel)

Initiates a request to add external object data to the relevant external system. The request is executed synchronously and is sent to the external system that's defined by the external object's associated external data source. If the Apex transaction contains pending changes, the synchronous operation can't be completed and throws an exception.

#### Signature

public static Database.SaveResult insertImmediate(SObject sobject, System.AccessLevel accessLevel)

#### Parameters

sobject

Type: [SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

The external object record to insert.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: [Database.SaveResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm#apex_methods_system_database_saveresult "The result of an insert or update DML operation returned by a Database method.")

Status result for the insert operation.

#### Usage

If a record update fails, the method doesn’t throw an exception. The returned SaveResult object indicates whether the operation was successful. If it failed, the object returns the error code and description.

### merge(mergeToRecord, duplicateId)

Merges the duplicate record into the mergeToRecord sObject record of the same type, deleting the duplicate, and reparenting any related records. Merges only accounts, contacts, or leads.

#### Signature

public static Database.MergeResult merge(sObject mergeToRecord, Id duplicateId)

#### Parameters

mergeToRecord

Type: [sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

The sObject record that the duplicate record is merged into.

duplicateId

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

The ID of the record to merge with the mergeToRecord. This record must be of the same sObject type as the mergeToRecord.

#### Return Value

Type: [Database.MergeResult](atlas.en-us.apexref.meta/apexref/apex_class_database_mergeresult.htm#apex_class_database_mergeresult "Contains the result of a merge Database method operation.")

#### Usage

Each executed merge method counts against the governor limit for DML statements.

### merge(mergeToRecord, duplicateRecord)

Merges the duplicate sObject record into the mergeToRecord sObject record of the same type, deleting the duplicate, and reparenting any related records.

#### Signature

public static Database.MergeResult merge(sObject mergeToRecord, sObject duplicateRecord)

#### Parameters

mergeToRecord

Type: [sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

The sObject record that the duplicate record is merged into.

duplicateRecord

Type: [sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

The sObject record to merge with the mergeToRecord. This sObject must be of the same type as the mergeToRecord.

#### Return Value

Type: [Database.MergeResult](atlas.en-us.apexref.meta/apexref/apex_class_database_mergeresult.htm#apex_class_database_mergeresult "Contains the result of a merge Database method operation.")

#### Usage

Each executed merge method counts against the governor limit for DML statements.

### merge(mergeToRecord, duplicateIds)

Merges up to two records of the same sObject type into the mergeToRecord sObject record, deleting the others, and reparenting any related records.

#### Signature

public static List<Database.MergeResult> merge(sObject mergeToRecord, List<Id> duplicateIds)

#### Parameters

mergeToRecord

Type: [SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

The sObject record that the other records are merged into.

duplicateIds

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")\>

A list of IDs of up to two records to merge with the mergeToRecord. These records must be of the same sObject type as the mergeToRecord.

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Database.MergeResult](atlas.en-us.apexref.meta/apexref/apex_class_database_mergeresult.htm#apex_class_database_mergeresult "Contains the result of a merge Database method operation.")\>

#### Usage

Each executed merge method counts against the governor limit for DML statements.

### merge(mergeToRecord, duplicateRecords)

Merges up to two records of the same object type into the mergeToRecord sObject record, deleting the others, and reparenting any related records.

#### Signature

public static List<Database.MergeResult> merge(sObject mergeToRecord, List<SObject> duplicateRecords)

#### Parameters

mergeToRecord

Type: [SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

The sObject record that the other sObjects are merged into.

duplicateRecords

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")\>

A list of up to two sObject records to merge with the mergeToRecord. These sObjects must be of the same type as the mergeToRecord.

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Database.MergeResult](atlas.en-us.apexref.meta/apexref/apex_class_database_mergeresult.htm#apex_class_database_mergeresult "Contains the result of a merge Database method operation.")\>

#### Usage

Each executed merge method counts against the governor limit for DML statements.

### merge(mergeToRecord, duplicateId, allOrNone)

Merges the duplicate record into the mergeToRecord sObject record of the same type, optionally returning any errors, deleting the duplicate, and reparenting any related records. Merges only accounts, contacts, or leads.

#### Signature

public static Database.MergeResult merge(sObject mergeToRecord, Id duplicateId, Boolean allOrNone)

#### Parameters

mergeToRecord

Type: [sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

The sObject record that the duplicate record is merged into.

duplicate

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

The ID of the record to merge with the mergeToRecord. This record must be of the same sObject type as the mergeToRecord.

allOrNone

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

(Optional) The allOrNone parameter specifies whether the operation allows partial success. If allOrNone is set to false and a record fails, the remainder of the DML operation can still succeed. You must iterate through the returned results to identify which records succeeded or failed. If allOrNone is set to true and the method isn’t successful, an exception is thrown. The default for the parameter is true.

#### Return Value

Type: [Database.MergeResult](atlas.en-us.apexref.meta/apexref/apex_class_database_mergeresult.htm#apex_class_database_mergeresult "Contains the result of a merge Database method operation.")

#### Usage

Each executed merge method counts against the governor limit for DML statements.

### merge(mergeToRecord, duplicateRecord, allOrNone)

Merges the duplicate sObject record into the mergeToRecord sObject of the same type, optionally returning any errors, deleting the duplicate, and reparenting any related records.

#### Signature

public static Database.MergeResult merge(sObject mergeToRecord, sObject duplicateRecord, Boolean allOrNone)

#### Parameters

mergeToRecord

Type: [sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

The sObject record that the duplicate record is merged into.

duplicateRecord

Type: [sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

The sObject record to merge with the mergeToRecord. This sObject must be of the same type as the mergeToRecord.

allOrNone

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

(Optional) The allOrNone parameter specifies whether the operation allows partial success. If allOrNone is set to false and a record fails, the remainder of the DML operation can still succeed. You must iterate through the returned results to identify which records succeeded or failed. If allOrNone is set to true and the method isn’t successful, an exception is thrown. The default for the parameter is true.

#### Return Value

Type: [Database.MergeResult](atlas.en-us.apexref.meta/apexref/apex_class_database_mergeresult.htm#apex_class_database_mergeresult "Contains the result of a merge Database method operation.")

#### Usage

Each executed merge method counts against the governor limit for DML statements.

### merge(mergeToRecord, duplicateIds, allOrNone)

Merges up to two records of the same sObject type into the mergeToRecord sObject record, optionally returning any errors, deleting the duplicates, and reparenting any related records.

#### Signature

public static List<Database.MergeResult> merge(sObject mergeToRecord, List<Id> duplicateIds, Boolean allOrNone)

#### Parameters

mergeToRecord

Type: [SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

The sObject record that the other records are merged into.

duplicateIds

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")\>

A list of IDs of up to two records to merge with the mergeToRecord. These records must be of the same sObject type as the mergeToRecord.

allOrNone

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

(Optional) The allOrNone parameter specifies whether the operation allows partial success. If allOrNone is set to false and a record fails, the remainder of the DML operation can still succeed. You must iterate through the returned results to identify which records succeeded or failed. If allOrNone is set to true and the method isn’t successful, an exception is thrown. The default for the parameter is true.

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Database.MergeResult](atlas.en-us.apexref.meta/apexref/apex_class_database_mergeresult.htm#apex_class_database_mergeresult "Contains the result of a merge Database method operation.")\>

#### Usage

Each executed merge method counts against the governor limit for DML statements.

### merge(mergeToRecord, duplicateRecords, allOrNone)

Merges up to two records of the same object type into the mergeToRecord sObject record, optionally returning any errors, deleting the duplicates, and reparenting any related records.

#### Signature

public static List<Database.MergeResult> merge(sObject mergeToRecord, List<SObject> duplicateRecords, Boolean allOrNone)

#### Parameters

mergeToRecord

Type: [sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

The sObject record that the other sObjects are merged into.

duplicateRecords

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")\>

A list of up to two sObject records to merge with the mergeToRecord. These sObjects must be of the same type as the mergeToRecord.

allOrNone

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

(Optional) The allOrNone parameter specifies whether the operation allows partial success. If allOrNone is set to false and a record fails, the remainder of the DML operation can still succeed. You must iterate through the returned results to identify which records succeeded or failed. If allOrNone is set to true and the method isn’t successful, an exception is thrown. The default for the parameter is true.

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Database.MergeResult](atlas.en-us.apexref.meta/apexref/apex_class_database_mergeresult.htm#apex_class_database_mergeresult "Contains the result of a merge Database method operation.")\>

#### Usage

Each executed merge method counts against the governor limit for DML statements.

### merge(mergeToRecord, duplicateId, accessLevel)

Merges the duplicate record into the mergeToRecord sObject record of the same type, deleting the duplicate, and reparenting any related records. Merges only accounts, contacts, or leads.

#### Signature

public static Database.MergeResult merge(SObject mergeToRecord, Id duplicateId, System.AccessLevel accessLevel)

#### Parameters

mergeToRecord

Type: [sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

The sObject record that the duplicate record is merged into.

duplicateId

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

The ID of the record to merge with the mergeToRecord. This record must be of the same sObject type as the mergeToRecord.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: [Database.MergeResult](atlas.en-us.apexref.meta/apexref/apex_class_database_mergeresult.htm#apex_class_database_mergeresult "Contains the result of a merge Database method operation.")

#### Usage

Each executed merge method counts against the governor limit for DML statements.

### merge(mergeToRecord, duplicateRecord, accessLevel)

Merges the specified duplicate sObject record into the mergeToRecord sObject of the same type, deleting the duplicate, and reparenting any related records.

#### Signature

public static Database.MergeResult merge(SObject mergeToRecord, SObject duplicateRecord, System.AccessLevel accessLevel)

#### Parameters

mergeToRecord

Type: [sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

The sObject record that the duplicate record is merged into.

duplicateRecord

Type: [sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

The sObject record to merge with the mergeToRecord. This sObject must be of the same type as the mergeToRecord.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: [Database.MergeResult](atlas.en-us.apexref.meta/apexref/apex_class_database_mergeresult.htm#apex_class_database_mergeresult "Contains the result of a merge Database method operation.")

#### Usage

Each executed merge method counts against the governor limit for DML statements.

### merge(mergeToRecord, duplicateIds, accessLevel)

Merges up to two records of the same sObject type into the mergeToRecord sObject record, deleting the others, and reparenting any related records.

#### Signature

public static List<Database.MergeResult> merge(SObject mergeToRecord, List<Id> duplicateIds, System.AccessLevel accessLevel)

#### Parameters

mergeToRecord

Type: [SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

The sObject record that the other records are merged into.

duplicateIds

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")\>

A list of IDs of up to two records to merge with the mergeToRecord. These records must be of the same sObject type as the mergeToRecord.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Database.MergeResult](atlas.en-us.apexref.meta/apexref/apex_class_database_mergeresult.htm#apex_class_database_mergeresult "Contains the result of a merge Database method operation.")\>

#### Usage

Each executed merge method counts against the governor limit for DML statements.

### merge(mergeToRecord, duplicateRecords, accessLevel)

Merges up to two records of the same object type into the mergeToRecord sObject record, deleting the others, and reparenting any related records.

#### Signature

public static List<Database.MergeResult> merge(SObject mergeToRecord, List<SObject> duplicateRecords, System.AccessLevel accessLevel)

#### Parameters

mergeToRecord

Type: [SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

The sObject that the other sObject records are merged into.

duplicateRecords

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")\>

A list of up to two sObject records to merge with the mergeToRecord. These sObjects must be of the same type as the mergeToRecord.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Database.MergeResult](atlas.en-us.apexref.meta/apexref/apex_class_database_mergeresult.htm#apex_class_database_mergeresult "Contains the result of a merge Database method operation.")\>

#### Usage

Each executed merge method counts against the governor limit for DML statements.

### merge(mergeToRecord, duplicateId, allOrNone, accessLevel)

Merges the duplicate record into the mergeToRecord sObject record of the same type, optionally returning any errors, deleting the duplicate, and reparenting any related records. Merges only accounts, contacts, or leads.

#### Signature

public static Database.MergeResult merge(SObject mergeToRecord, Id duplicateId, Boolean allOrNone, System.AccessLevel accessLevel)

#### Parameters

mergeToRecord

Type: [sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

The sObject record that the duplicate record is merged into.

duplicateId

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

The ID of the record to merge with the mergeToRecord. This record must be of the same sObject type as the mergeToRecord.

allOrNone

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

(Optional) The allOrNone parameter specifies whether the operation allows partial success. If allOrNone is set to false and a record fails, the remainder of the DML operation can still succeed. You must iterate through the returned results to identify which records succeeded or failed. If allOrNone is set to true and the method isn’t successful, an exception is thrown. The default for the parameter is true.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: [Database.MergeResult](atlas.en-us.apexref.meta/apexref/apex_class_database_mergeresult.htm#apex_class_database_mergeresult "Contains the result of a merge Database method operation.")

#### Usage

If you use the accessLevel parameter to specify that the method runs in user mode, we report all encountered inaccessible fields. The way to retrieve the names of these inaccessible fields depends on the value of this method's allOrNone parameter, or the equivalent [DmlOptions.optAllOrNone](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_database_dmloptions.htm#apex_Database_DmlOptions_optAllOrNone) property. If you specify that:

-   allOrNone=true or DmlOptions.optAllOrNone=true: Catch the DMLException and use the DMLException.getDMLFieldNames() method to retrieve the list of inaccessible fields. See [Exception Class and Built-In Exceptions](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_classes_exception_methods.htm) for more information.
-   allOrNone=false or DmlOptions.optAllOrNone=false: For each failing record, we update the Database.Error object that results from the DML operation. Use the Error.getFields() method to retrieve the list of inaccessible fields. See the [Error Class methods](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_database_error.htm#apex_Database_Error_methods) for more information.

Each executed merge method counts against the governor limit for DML statements.

### merge(mergeToRecord, duplicateRecord, allOrNone, accessLevel)

Merges the duplicate sObject record into the mergeToRecord sObject record of the same type, optionally returning any errors, deleting the duplicate, and reparenting any related records.

#### Signature

public static Database.MergeResult merge(SObject mergeToRecord, SObject duplicateRecord, Boolean allOrNone, System.AccessLevel accessLevel)

#### Parameters

mergeToRecord

Type: [sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

The sObject record that the duplicate record is merged into.

duplicateRecord

Type: [sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

The sObject record to merge with the mergeToRecord. This sObject must be of the same type as the mergeToRecord.

allOrNone

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

(Optional) The allOrNone parameter specifies whether the operation allows partial success. If allOrNone is set to false and a record fails, the remainder of the DML operation can still succeed. You must iterate through the returned results to identify which records succeeded or failed. If allOrNone is set to true and the method isn’t successful, an exception is thrown. The default for the parameter is true.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: [Database.MergeResult](atlas.en-us.apexref.meta/apexref/apex_class_database_mergeresult.htm#apex_class_database_mergeresult "Contains the result of a merge Database method operation.")

#### Usage

If you use the accessLevel parameter to specify that the method runs in user mode, we report all encountered inaccessible fields. The way to retrieve the names of these inaccessible fields depends on the value of this method's allOrNone parameter, or the equivalent [DmlOptions.optAllOrNone](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_database_dmloptions.htm#apex_Database_DmlOptions_optAllOrNone) property. If you specify that:

-   allOrNone=true or DmlOptions.optAllOrNone=true: Catch the DMLException and use the DMLException.getDMLFieldNames() method to retrieve the list of inaccessible fields. See [Exception Class and Built-In Exceptions](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_classes_exception_methods.htm) for more information.
-   allOrNone=false or DmlOptions.optAllOrNone=false: For each failing record, we update the Database.Error object that results from the DML operation. Use the Error.getFields() method to retrieve the list of inaccessible fields. See the [Error Class methods](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_database_error.htm#apex_Database_Error_methods) for more information.

Each executed merge method counts against the governor limit for DML statements.

### merge(mergeToRecord, duplicateIds, allOrNone, accessLevel)

Merges up to two records of the same sObject type into the mergeToRecord sObject record, optionally returning any errors, deleting the duplicates, and reparenting any related records.

#### Signature

public static List<Database.MergeResult> merge(SObject mergeToRecord, List<Id> duplicateIds, Boolean allOrNone, System.AccessLevel accessLevel)

#### Parameters

mergeToRecord

Type: [SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

The sObject record that the other records are merged into.

duplicateIds

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")\>

A list of IDs of up to two records to merge with the mergeToRecord. These records must be of the same sObject type as the mergeToRecord.

allOrNone

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

(Optional) The allOrNone parameter specifies whether the operation allows partial success. If allOrNone is set to false and a record fails, the remainder of the DML operation can still succeed. You must iterate through the returned results to identify which records succeeded or failed. If allOrNone is set to true and the method isn’t successful, an exception is thrown. The default for the parameter is true.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Database.MergeResult](atlas.en-us.apexref.meta/apexref/apex_class_database_mergeresult.htm#apex_class_database_mergeresult "Contains the result of a merge Database method operation.")\>

#### Usage

If you use the accessLevel parameter to specify that the method runs in user mode, we report all encountered inaccessible fields. The way to retrieve the names of these inaccessible fields depends on the value of this method's allOrNone parameter, or the equivalent [DmlOptions.optAllOrNone](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_database_dmloptions.htm#apex_Database_DmlOptions_optAllOrNone) property. If you specify that:

-   allOrNone=true or DmlOptions.optAllOrNone=true: Catch the DMLException and use the DMLException.getDMLFieldNames() method to retrieve the list of inaccessible fields. See [Exception Class and Built-In Exceptions](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_classes_exception_methods.htm) for more information.
-   allOrNone=false or DmlOptions.optAllOrNone=false: For each failing record, we update the Database.Error object that results from the DML operation. Use the Error.getFields() method to retrieve the list of inaccessible fields. See the [Error Class methods](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_database_error.htm#apex_Database_Error_methods) for more information.

Each executed merge method counts against the governor limit for DML statements.

### merge(mergeToRecord, duplicateRecords, allOrNone, accessLevel)

Merges up to two records of the same object type into the mergeToRecord sObject record, optionally returning any errors, deleting the duplicates, and reparenting any related records.

#### Signature

public static List<Database.MergeResult> merge(SObject mergeToRecord, List<SObject> duplicateRecords, Boolean allOrNone, System.AccessLevel accessLevel)

#### Parameters

mergeToRecord

Type: [sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

The sObject record that the other sObjects are merged into.

duplicateRecords

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")\>

A list of up to two sObject records to merge with the mergeToRecord. These sObjects must be of the same type as the mergeToRecord.

allOrNone

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

(Optional) The allOrNone parameter specifies whether the operation allows partial success. If allOrNone is set to false and a record fails, the remainder of the DML operation can still succeed. You must iterate through the returned results to identify which records succeeded or failed. If allOrNone is set to true and the method isn’t successful, an exception is thrown. The default for the parameter is true.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Database.MergeResult](atlas.en-us.apexref.meta/apexref/apex_class_database_mergeresult.htm#apex_class_database_mergeresult "Contains the result of a merge Database method operation.")\>

#### Usage

If you use the accessLevel parameter to specify that the method runs in user mode, we report all encountered inaccessible fields. The way to retrieve the names of these inaccessible fields depends on the value of this method's allOrNone parameter, or the equivalent [DmlOptions.optAllOrNone](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_database_dmloptions.htm#apex_Database_DmlOptions_optAllOrNone) property. If you specify that:

-   allOrNone=true or DmlOptions.optAllOrNone=true: Catch the DMLException and use the DMLException.getDMLFieldNames() method to retrieve the list of inaccessible fields. See [Exception Class and Built-In Exceptions](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_classes_exception_methods.htm) for more information.
-   allOrNone=false or DmlOptions.optAllOrNone=false: For each failing record, we update the Database.Error object that results from the DML operation. Use the Error.getFields() method to retrieve the list of inaccessible fields. See the [Error Class methods](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_database_error.htm#apex_Database_Error_methods) for more information.

Each executed merge method counts against the governor limit for DML statements.

### query(queryString)

Creates a dynamic SOQL query at runtime.

#### Signature

public static List<SObject> query(String queryString)

#### Parameters

queryString

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")\>

#### Usage

This method can be used wherever a static SOQL query can be used, such as in regular assignment statements and for loops. Unlike inline SOQL, fields in bind variables aren’t supported. For more information, see [Dynamic SOQL](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dynamic_soql.htm).

Database.query() calls containing an inner query for a related child object may not return the entire result set based on the size and complexity of the records requested. Instead, use Database.getQueryLocator() in conjunction with Apex Batch. Alternatively, you can use the same SOQL query with SOAP API to be able to access all the resulting records.

Each executed query method counts against the governor limit for SOQL queries.

### query(queryString, accessLevel)

Creates a dynamic SOQL query at runtime.

#### Signature

public static List<SObject> query(String queryString, System.AccessLevel accessLevel)

#### Parameters

queryString

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")\>

#### Usage

This method can be used wherever a static SOQL query can be used, such as in regular assignment statements and for loops. Unlike inline SOQL, fields in bind variables aren’t supported. For more information, see [Dynamic SOQL](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dynamic_soql.htm).

Database.query() calls containing an inner query for a related child object may not return the entire result set based on the size and complexity of the records requested. Instead, use Database.getQueryLocator() in conjunction with Apex Batch. Alternatively, you can use the same SOQL query with SOAP API to be able to access all the resulting records.

Each executed query method counts against the governor limit for SOQL queries.

### queryWithBinds(queryString, bindMap, accessLevel)

Creates a dynamic SOQL query at runtime. Bind variables in the query are resolved from the bindMap Map parameter directly with the key, rather than from Apex code variables.

#### Signature

public static List<SObject> queryWithBinds(String queryString, Map<String, Object> bindMap, System.AccessLevel accessLevel)

#### Parameters

queryString

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

SOQL query that includes Apex bind variables or expressions preceded by a colon. All bind variables must have a key in the bindMap Map.

bindMap

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."), Object>

A map that contains keys for each bind variable specified in the SOQL queryString and its value. The keys can’t be null or duplicates, and the values can’t be null or empty strings.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced.

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")\>

#### Usage

This method can be used wherever a static SOQL query can be used, such as in regular assignment statements and for loops.

For more information, see [Dynamic SOQL](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dynamic_soql.htm).

Each executed queryWithBinds method counts against the governor limit for SOQL queries.

#### Example

In this example, the SOQL query uses a bind variable for an Account name. Its value (Acme Inc.) is passed in to the method using the nameBind Map. The accountName variable isn't (and doesn’t have to be) in scope when the query is executed within the method.

```

```

### releaseSavepoint(databaseSavepoint)

Releases a given savepoint. All savepoints that are subsequent to the given one are also released.

#### Signature

public static void releaseSavepoint(System.Savepoint databaseSavepoint)

#### Parameters

databaseSavepoint

Type: System.Savepoint

#### Return Value

Type: void

#### Versioned Behavior Changes

For Apex tests with API version 60.0 or later, all savepoints are released when Test.startTest() and Test.stopTest() are called. If any savepoints are reset, a SAVEPOINT\_RESET event is logged.

Before API version 60.0, making a callout after creating savepoints throws a CalloutException regardless of whether there was uncommitted DML or the changes were rolled back to a savepoint. Also, before API version 60.0, both Database.rollback(databaseSavepoint) and Database.setSavepoint() calls incremented the DML row usage limit.

### rollback(databaseSavepoint)

Restores the database to the state specified by the savepoint variable. Any emails submitted since the last savepoint are also rolled back and not sent.

#### Signature

public static Void rollback(System.Savepoint databaseSavepoint)

#### Parameters

databaseSavepoint

Type: System.Savepoint

#### Return Value

Type: Void

#### Usage

Note the following:

-   Static variables aren’t reverted during a rollback. If you try to run the trigger again, the static variables retain the values from the first run.

-   Each rollback counts against the governor limit for DML statements. You receive a runtime error if you try to roll back the database additional times.
-   The ID on an sObject inserted after setting a savepoint isn’t cleared after a rollback. Create an sObject to insert after a rollback. Attempting to insert the sObject using the variable created before the rollback fails because the sObject variable has an ID. Updating or upserting the sObject using the same variable also fails because the sObject isn’t in the database and, thus, can’t be updated.

For an example, see [Transaction Control](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/langCon_apex_transaction_control.htm).

#### Versioned Behavior Changes

For Apex tests with API version 60.0 or later, all savepoints are released when Test.startTest() and Test.stopTest() are called. If any savepoints are reset, a SAVEPOINT\_RESET event is logged.

Before API version 60.0, making a callout after creating savepoints throws a CalloutException regardless of whether there was uncommitted DML or the changes were rolled back to a savepoint. Also, before API version 60.0, both Database.rollback(Savepoint) and Database.setSavepoint() calls incremented the DML row usage limit.

### setSavepoint()

Returns a savepoint variable that can be stored as a local variable, then used with the rollback method to restore the database to that point.

#### Signature

public static System.Savepoint setSavepoint()

#### Return Value

Type: System.Savepoint

#### Usage

Note the following:

-   If you set more than one savepoint, then roll back to a savepoint that isn’t the last savepoint you generated, the later savepoint variables become invalid. For example, if you generated savepoint SP1 first, savepoint SP2 after that, and then you rolled back to SP1, the variable SP2 would no longer be valid. You receive a runtime error if you try to use it.
-   References to savepoints can’t cross trigger invocations because each trigger invocation is a new trigger context. If you declare a savepoint as a static variable then try to use it across trigger contexts, you receive a run-time error.
-   Each savepoint you set counts against the governor limit for DML statements.

For an example, see [Transaction Control](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/langCon_apex_transaction_control.htm).

#### Versioned Behavior Changes

For Apex tests with API version 60.0 or later, all savepoints are released when Test.startTest() and Test.stopTest() are called. If any savepoints are reset, a SAVEPOINT\_RESET event is logged.

Before API version 60.0, making a callout after creating savepoints throws a CalloutException regardless of whether there was uncommitted DML or the changes were rolled back to a savepoint. Also, before API version 60.0, both Database.rollback(Savepoint) and Database.setSavepoint() calls incremented the DML row usage limit.

### undelete(recordToUndelete, allOrNone)

Restores an existing sObject record, such as an individual account or contact, from your organization's Recycle Bin.

#### Signature

public static Database.UndeleteResult undelete(sObject recordToUndelete, Boolean allOrNone)

#### Parameters

recordToUndelete

Type: [sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

allOrNone

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

(Optional) The allOrNone parameter specifies whether the operation allows partial success. If allOrNone is set to false and a record fails, the remainder of the DML operation can still succeed. You must iterate through the returned results to identify which records succeeded or failed. If allOrNone is set to true and the method isn’t successful, an exception is thrown. The default for the parameter is true.

#### Return Value

Type: [Database.UndeleteResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_undeleteresult.htm#apex_methods_system_database_undeleteresult "The result of an undelete DML operation returned by the Database.undelete method.")

#### Usage

undelete is analogous to the UNDELETE statement in SQL.

Each executed undelete method counts against the governor limit for DML statements.

### undelete(recordsToUndelete, allOrNone)

Restores one or more existing sObject records, such as individual accounts or contacts, from your organization’s Recycle Bin.

#### Signature

public static Database.UndeleteResult\[\] undelete(sObject\[\] recordsToUndelete, Boolean allOrNone)

#### Parameters

recordsToUndelete

Type: [sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.") \[\]

allOrNone

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

(Optional) The allOrNone parameter specifies whether the operation allows partial success. If allOrNone is set to false and a record fails, the remainder of the DML operation can still succeed. You must iterate through the returned results to identify which records succeeded or failed. If allOrNone is set to true and the method isn’t successful, an exception is thrown. The default for the parameter is true.

#### Return Value

Type: [Database.UndeleteResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_undeleteresult.htm#apex_methods_system_database_undeleteresult "The result of an undelete DML operation returned by the Database.undelete method.")\[\]

#### Usage

undelete is analogous to the UNDELETE statement in SQL.

Each executed undelete method counts against the governor limit for DML statements.

#### Example

The following example restores all accounts named 'Universal Containers'. The ALL ROWS keyword queries all rows for both top-level and aggregate relationships, including deleted records and archived activities.

```

```

### undelete(recordID, allOrNone)

Restores an existing sObject record, such as an individual account or contact, from your organization's Recycle Bin.

#### Signature

public static Database.UndeleteResult undelete(ID recordID, Boolean allOrNone)

#### Parameters

recordID

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

allOrNone

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

(Optional) The allOrNone parameter specifies whether the operation allows partial success. If allOrNone is set to false and a record fails, the remainder of the DML operation can still succeed. You must iterate through the returned results to identify which records succeeded or failed. If allOrNone is set to true and the method isn’t successful, an exception is thrown. The default for the parameter is true.

#### Return Value

Type: [Database.UndeleteResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_undeleteresult.htm#apex_methods_system_database_undeleteresult "The result of an undelete DML operation returned by the Database.undelete method.")

#### Usage

undelete is analogous to the UNDELETE statement in SQL.

Each executed undelete method counts against the governor limit for DML statements.

### undelete(recordIDs, allOrNone)

Restores one or more existing sObject records, such as individual accounts or contacts, from your organization’s Recycle Bin.

#### Signature

public static Database.UndeleteResult\[\] undelete(ID\[\] recordIDs, Boolean allOrNone)

#### Parameters

RecordIDs

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")\[\]

allOrNone

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

(Optional) The allOrNone parameter specifies whether the operation allows partial success. If allOrNone is set to false and a record fails, the remainder of the DML operation can still succeed. You must iterate through the returned results to identify which records succeeded or failed. If allOrNone is set to true and the method isn’t successful, an exception is thrown. The default for the parameter is true.

#### Return Value

Type: [Database.UndeleteResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_undeleteresult.htm#apex_methods_system_database_undeleteresult "The result of an undelete DML operation returned by the Database.undelete method.")\[\]

#### Usage

undelete is analogous to the UNDELETE statement in SQL.

Each executed undelete method counts against the governor limit for DML statements.

### undelete(recordToUndelete, allOrNone, accessLevel)

Restores an existing sObject record, such as an individual account or contact, from your organization's Recycle Bin.

#### Signature

public static Database.UndeleteResult undelete(SObject recordToUndelete, Boolean allOrNone, System.AccessLevel accessLevel)

#### Parameters

recordToUndelete

Type: [SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

allOrNone

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

(Optional) The allOrNone parameter specifies whether the operation allows partial success. If allOrNone is set to false and a record fails, the remainder of the DML operation can still succeed. You must iterate through the returned results to identify which records succeeded or failed. If allOrNone is set to true and the method isn’t successful, an exception is thrown. The default for the parameter is true.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: [Database.UndeleteResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_undeleteresult.htm#apex_methods_system_database_undeleteresult "The result of an undelete DML operation returned by the Database.undelete method.")

#### Usage

undelete is analogous to the UNDELETE statement in SQL.

Each executed undelete method counts against the governor limit for DML statements.

### undelete(recordsToUndelete, allOrNone, accessLevel)

Restores one or more existing sObject records, such as individual accounts or contacts, from your organization’s Recycle Bin.

#### Signature

public static List<Database.UndeleteResult> undelete(List<SObject> recordsToUndelete, Boolean allOrNone, System.AccessLevel accessLevel)

#### Parameters

recordsToUndelete

Type: List<[sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")\>

allOrNone

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

(Optional) The allOrNone parameter specifies whether the operation allows partial success. If allOrNone is set to false and a record fails, the remainder of the DML operation can still succeed. You must iterate through the returned results to identify which records succeeded or failed. If allOrNone is set to true and the method isn’t successful, an exception is thrown. The default for the parameter is true.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: List<[Database.UndeleteResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_undeleteresult.htm#apex_methods_system_database_undeleteresult "The result of an undelete DML operation returned by the Database.undelete method.")\>

#### Usage

undelete is analogous to the UNDELETE statement in SQL.

Each executed undelete method counts against the governor limit for DML statements.

### undelete(recordID, allOrNone, accessLevel)

Restores an existing sObject record, such as an individual account or contact, from your organization's Recycle Bin.

#### Signature

public static Database.UndeleteResult undelete(Id recordID, Boolean allOrNone, System.AccessLevel accessLevel)

#### Parameters

recordID

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

allOrNone

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

(Optional) The allOrNone parameter specifies whether the operation allows partial success. If allOrNone is set to false and a record fails, the remainder of the DML operation can still succeed. You must iterate through the returned results to identify which records succeeded or failed. If allOrNone is set to true and the method isn’t successful, an exception is thrown. The default for the parameter is true.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: [Database.UndeleteResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_undeleteresult.htm#apex_methods_system_database_undeleteresult "The result of an undelete DML operation returned by the Database.undelete method.")

#### Usage

undelete is analogous to the UNDELETE statement in SQL.

Each executed undelete method counts against the governor limit for DML statements.

### undelete(recordIDs, allOrNone, accessLevel)

Restores one or more existing sObject records, such as individual accounts or contacts, from your organization’s Recycle Bin.

#### Signature

public static List<Database.UndeleteResult> undelete(List<Id> recordIDs, Boolean allOrNone, System.AccessLevel accessLevel)

#### Parameters

recordIDs

Type: List<[ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")\>

allOrNone

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

(Optional) The allOrNone parameter specifies whether the operation allows partial success. If allOrNone is set to false and a record fails, the remainder of the DML operation can still succeed. You must iterate through the returned results to identify which records succeeded or failed. If allOrNone is set to true and the method isn’t successful, an exception is thrown. The default for the parameter is true.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: List<[Database.UndeleteResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_undeleteresult.htm#apex_methods_system_database_undeleteresult "The result of an undelete DML operation returned by the Database.undelete method.")\>

#### Usage

undelete is analogous to the UNDELETE statement in SQL.

Each executed undelete method counts against the governor limit for DML statements.

### update(recordToUpdate, allOrNone)

Modifies an existing sObject record, such as an individual account or contact, in your organization's data.

#### Signature

public static Database.SaveResult update(sObject recordToUpdate, Boolean allOrNone)

#### Parameters

recordToUpdate

Type: [sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

allOrNone

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

(Optional) The allOrNone parameter specifies whether the operation allows partial success. If allOrNone is set to false and a record fails, the remainder of the DML operation can still succeed. You must iterate through the returned results to identify which records succeeded or failed. If allOrNone is set to true and the method isn’t successful, an exception is thrown. The default for the parameter is true.

#### Return Value

Type: [Database.SaveResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm#apex_methods_system_database_saveresult "The result of an insert or update DML operation returned by a Database method.")

#### Usage

update is analogous to the UPDATE statement in SQL.

Apex classes and triggers saved (compiled) using API version 15.0 and higher produce a runtime error if you assign a String value that is too long for the field.

Each executed update method counts against the governor limit for DML statements.

#### Example

The following example updates the BillingCity field on a single account.

```

```

### update(recordsToUpdate, allOrNone)

Modifies one or more existing sObject records, such as individual accounts or contacts, in your organization’s data.

#### Signature

public static Database.SaveResult\[\] update(sObject\[\] recordsToUpdate, Boolean allOrNone)

#### Parameters

recordsToUpdate

Type: [sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.") \[\]

allOrNone

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

(Optional) The allOrNone parameter specifies whether the operation allows partial success. If allOrNone is set to false and a record fails, the remainder of the DML operation can still succeed. You must iterate through the returned results to identify which records succeeded or failed. If allOrNone is set to true and the method isn’t successful, an exception is thrown. The default for the parameter is true.

#### Return Value

Type: [Database.SaveResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm#apex_methods_system_database_saveresult "The result of an insert or update DML operation returned by a Database method.")\[\]

#### Usage

update is analogous to the UPDATE statement in SQL.

Each executed update method counts against the governor limit for DML statements.

### update(recordToUpdate, dmlOptions)

Modifies an existing sObject record, such as an individual account or contact, in your organization's data.

#### Signature

public static Database.SaveResult update(sObject recordToUpdate, Database.DmlOptions dmlOptions)

#### Parameters

recordToUpdate

Type: [sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

dmlOptions

Type: [Database.DMLOptions](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_dmloptions.htm#apex_methods_system_database_dmloptions "Enables you to set options related to DML operations.")

The optional dmlOptions parameter specifies additional data for the transaction, such as assignment rule information or rollback behavior when errors occur during record insertions.

#### Return Value

Type: [Database.SaveResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm#apex_methods_system_database_saveresult "The result of an insert or update DML operation returned by a Database method.")

#### Usage

update is analogous to the UPDATE statement in SQL.

Apex classes and triggers saved (compiled) using API version 15.0 and higher produce a runtime error if you assign a String value that is too long for the field.

Each executed update method counts against the governor limit for DML statements.

### update(recordsToUpdate, dmlOptions)

Modifies one or more existing sObject records, such as individual accounts or contacts, in your organization’s data.

#### Signature

public static Database.SaveResult\[\] update(sObject\[\] recordsToUpdate, Database.DMLOptions dmlOptions)

#### Parameters

recordsToUpdate

Type: [sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.") \[\]

dmlOptions

Type: [Database.DMLOptions](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_dmloptions.htm#apex_methods_system_database_dmloptions "Enables you to set options related to DML operations.")

The optional dmlOptions parameter specifies additional data for the transaction, such as assignment rule information or rollback behavior when errors occur during record insertions.

#### Return Value

Type: [Database.SaveResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm#apex_methods_system_database_saveresult "The result of an insert or update DML operation returned by a Database method.")\[\]

#### Usage

update is analogous to the UPDATE statement in SQL.

Apex classes and triggers saved (compiled) using API version 15.0 and higher produce a runtime error if you assign a String value that is too long for the field.

Each executed update method counts against the governor limit for DML statements.

### update(recordToUpdate, allOrNone, accessLevel)

Modifies an existing sObject record, such as an individual account or contact, in your organization's data.

#### Signature

public static Database.SaveResult update(SObject recordToUpdate, Boolean allOrNone, System.AccessLevel accessLevel)

#### Parameters

recordToUpdate

Type: [SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

allOrNone

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

(Optional) The allOrNone parameter specifies whether the operation allows partial success. If allOrNone is set to false and a record fails, the remainder of the DML operation can still succeed. You must iterate through the returned results to identify which records succeeded or failed. If allOrNone is set to true and the method isn’t successful, an exception is thrown. The default for the parameter is true.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: [Database.SaveResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm#apex_methods_system_database_saveresult "The result of an insert or update DML operation returned by a Database method.")

#### Usage

If you use the accessLevel parameter to specify that the method runs in user mode, we report all encountered inaccessible fields. The way to retrieve the names of these inaccessible fields depends on the value of this method's allOrNone parameter, or the equivalent [DmlOptions.optAllOrNone](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_database_dmloptions.htm#apex_Database_DmlOptions_optAllOrNone) property. If you specify that:

-   allOrNone=true or DmlOptions.optAllOrNone=true: Catch the DMLException and use the DMLException.getDMLFieldNames() method to retrieve the list of inaccessible fields. See [Exception Class and Built-In Exceptions](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_classes_exception_methods.htm) for more information.
-   allOrNone=false or DmlOptions.optAllOrNone=false: For each failing record, we update the Database.Error object that results from the DML operation. Use the Error.getFields() method to retrieve the list of inaccessible fields. See the [Error Class methods](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_database_error.htm#apex_Database_Error_methods) for more information.

### update(recordsToUpdate, allOrNone, accessLevel)

Modifies one or more existing sObject records, such as individual accounts or contacts, in your organization’s data.

#### Signature

public static List<Database.SaveResult> update(List<SObject> recordsToUpdate, Boolean allOrNone, System.AccessLevel accessLevel)

#### Parameters

recordsToUpdate

Type: List<[sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")\>

allOrNone

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

(Optional) The allOrNone parameter specifies whether the operation allows partial success. If allOrNone is set to false and a record fails, the remainder of the DML operation can still succeed. You must iterate through the returned results to identify which records succeeded or failed. If allOrNone is set to true and the method isn’t successful, an exception is thrown. The default for the parameter is true.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: List<[Database.SaveResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm#apex_methods_system_database_saveresult "The result of an insert or update DML operation returned by a Database method.")\>

#### Usage

If you use the accessLevel parameter to specify that the method runs in user mode, we report all encountered inaccessible fields. The way to retrieve the names of these inaccessible fields depends on the value of this method's allOrNone parameter, or the equivalent [DmlOptions.optAllOrNone](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_database_dmloptions.htm#apex_Database_DmlOptions_optAllOrNone) property. If you specify that:

-   allOrNone=true or DmlOptions.optAllOrNone=true: Catch the DMLException and use the DMLException.getDMLFieldNames() method to retrieve the list of inaccessible fields. See [Exception Class and Built-In Exceptions](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_classes_exception_methods.htm) for more information.
-   allOrNone=false or DmlOptions.optAllOrNone=false: For each failing record, we update the Database.Error object that results from the DML operation. Use the Error.getFields() method to retrieve the list of inaccessible fields. See the [Error Class methods](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_database_error.htm#apex_Database_Error_methods) for more information.

### update(recordToUpdate, dmlOptions, accessLevel)

Modifies an existing sObject record, such as an individual account or contact, in your organization's data.

#### Signature

public static Database.SaveResult update(SObject recordToUpdate, Database.DMLOptions dmlOptions, System.AccessLevel accessLevel)

#### Parameters

recordToUpdate

Type: [SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

dmlOptions

Type: [Database.DMLOptions](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_dmloptions.htm#apex_methods_system_database_dmloptions "Enables you to set options related to DML operations.")

The optional dmlOptions parameter specifies additional data for the transaction, such as assignment rule information or rollback behavior when errors occur during record insertions.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: [Database.SaveResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm#apex_methods_system_database_saveresult "The result of an insert or update DML operation returned by a Database method.")

### update(recordsToUpdate, dmlOptions, accessLevel)

Modifies one or more existing sObject records, such as individual accounts or contacts, in your organization’s data.

#### Signature

public static List<Database.SaveResult> update(List<SObject> recordsToUpdate, Database.DMLOptions dmlOptions, System.AccessLevel accessLevel)

#### Parameters

recordsToUpdate

Type: List<[sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")\>

dmlOptions

Type: [Database.DMLOptions](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_dmloptions.htm#apex_methods_system_database_dmloptions "Enables you to set options related to DML operations.")

The optional dmlOptions parameter specifies additional data for the transaction, such as assignment rule information or rollback behavior when errors occur during record insertions.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: List<[Database.SaveResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm#apex_methods_system_database_saveresult "The result of an insert or update DML operation returned by a Database method.")\>

### upsert(recordToUpsert, externalIdField, allOrNone)

Creates a new sObject record or updates an existing sObject record within a single statement, using a specified field to determine the presence of existing objects, or the ID field if no field is specified.

#### Signature

public static Database.UpsertResult upsert(sObject recordToUpsert, Schema.SObjectField externalIDField, Boolean allOrNone)

#### Parameters

recordToUpsert

Type: [sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

externalIdField

Type: [Schema.SObjectField](atlas.en-us.apexref.meta/apexref/apex_class_Schema_SObjectField.htm#apex_class_Schema_SObjectField "A Schema.sObjectField object is returned from the field describe result using the getController and getSObjectField methods.")

(Optional) The externalIdField is of type Schema.SObjectField, that is, a field token. Find the token for the field by using the fields special method. For example, Schema.SObjectField f = Account.Fields.MyExternalId. The externalIdField parameter is the field that upsert() uses to match sObjects with existing records. This field can be a custom field marked as external ID, or a standard field with the idLookup attribute.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

If externalIdField isn’t specified, then the ID field is used to determine a match with existing records.

allOrNone

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

(Optional) The allOrNone parameter specifies whether the operation allows partial success. If allOrNone is set to false and a record fails, the remainder of the DML operation can still succeed. You must iterate through the returned results to identify which records succeeded or failed. If allOrNone is set to true and the method isn’t successful, an exception is thrown. The default for the parameter is true.

#### Return Value

Type: [Database.UpsertResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_upsertresult.htm#apex_methods_system_database_upsertresult "The result of an upsert DML operation returned by the Database.upsert method.")

#### Usage

Apex classes and triggers saved (compiled) using API version 15.0 and higher produce a runtime error if you assign a String value that is too long for the field.

Each executed upsert method counts against the governor limit for DML statements.

For more information on how the upsert operation works, see the [upsert() statement](atlas.en-us.apexref.meta/apexref/apex_dml_section.htm#apex_dml_upsert).

### upsert(recordsToUpsert, externalIdField, allOrNone)

Creates new sObject records or updates existing sObject records within a single statement, using a specified field to determine the presence of existing objects, or the ID field if no field is specified.

#### Signature

public static Database.UpsertResult\[\] upsert(sObject\[\] recordsToUpsert, Schema.SObjectField externalIdField, Boolean allOrNone)

#### Parameters

recordsToUpsert

Type: [sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.") \[\]

externalIdField

Type: [Schema.SObjectField](atlas.en-us.apexref.meta/apexref/apex_class_Schema_SObjectField.htm#apex_class_Schema_SObjectField "A Schema.sObjectField object is returned from the field describe result using the getController and getSObjectField methods.")

(Optional) The externalIdField is of type Schema.SObjectField, that is, a field token. Find the token for the field by using the fields special method. For example, Schema.SObjectField f = Account.Fields.MyExternalId. The externalIdField parameter is the field that upsert() uses to match sObjects with existing records. This field can be a custom field marked as external ID, or a standard field with the idLookup attribute.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

If externalIdField isn’t specified, then the ID field is used to determine a match with existing records.

allOrNone

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

(Optional) The allOrNone parameter specifies whether the operation allows partial success. If allOrNone is set to false and a record fails, the remainder of the DML operation can still succeed. You must iterate through the returned results to identify which records succeeded or failed. If allOrNone is set to true and the method isn’t successful, an exception is thrown. The default for the parameter is true.

If allOrNone is set to false and a before-trigger assigns an invalid value to a field, the partial set of valid records isn’t inserted.

#### Return Value

Type: [Database.UpsertResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_upsertresult.htm#apex_methods_system_database_upsertresult "The result of an upsert DML operation returned by the Database.upsert method.")\[\]

#### Usage

Apex classes and triggers saved (compiled) using API version 15.0 and higher produce a runtime error if you assign a String value that is too long for the field.

Each executed upsert method counts against the governor limit for DML statements.

For more information on how the upsert operation works, see the [upsert() statement](atlas.en-us.apexref.meta/apexref/apex_dml_section.htm#apex_dml_upsert).

### upsert(recordToUpsert, externalIdField, allOrNone, accessLevel)

Creates a new sObject record or updates an existing sObject record within a single statement, using a specified field to determine the presence of existing objects, or the ID field if no field is specified.

#### Signature

public static Database.UpsertResult upsert(SObject recordToUpsert, Schema.SObjectField externalIdField, Boolean allOrNone, System.AccessLevel accessLevel)

#### Parameters

recordToUpsert

Type: [SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

externalIdField

Type: [Schema.SObjectField](atlas.en-us.apexref.meta/apexref/apex_class_Schema_SObjectField.htm#apex_class_Schema_SObjectField "A Schema.sObjectField object is returned from the field describe result using the getController and getSObjectField methods.")

(Optional) The externalIdField is of type Schema.SObjectField, that is, a field token. Find the token for the field by using the fields special method. For example, Schema.SObjectField f = Account.Fields.MyExternalId. The externalIdField parameter is the field that upsert() uses to match sObjects with existing records. This field can be a custom field marked as external ID, or a standard field with the idLookup attribute.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

If externalIdField isn’t specified, then the ID field is used to determine a match with existing records.

allOrNone

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

(Optional) The allOrNone parameter specifies whether the operation allows partial success. If allOrNone is set to false and a record fails, the remainder of the DML operation can still succeed. You must iterate through the returned results to identify which records succeeded or failed. If allOrNone is set to true and the method isn’t successful, an exception is thrown. The default for the parameter is true.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: [Database.UpsertResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_upsertresult.htm#apex_methods_system_database_upsertresult "The result of an upsert DML operation returned by the Database.upsert method.")

#### Usage

If you use the accessLevel parameter to specify that the method runs in user mode, we report all encountered inaccessible fields. The way to retrieve the names of these inaccessible fields depends on the value of this method's allOrNone parameter, or the equivalent [DmlOptions.optAllOrNone](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_database_dmloptions.htm#apex_Database_DmlOptions_optAllOrNone) property. If you specify that:

-   allOrNone=true or DmlOptions.optAllOrNone=true: Catch the DMLException and use the DMLException.getDMLFieldNames() method to retrieve the list of inaccessible fields. See [Exception Class and Built-In Exceptions](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_classes_exception_methods.htm) for more information.
-   allOrNone=false or DmlOptions.optAllOrNone=false: For each failing record, we update the Database.Error object that results from the DML operation. Use the Error.getFields() method to retrieve the list of inaccessible fields. See the [Error Class methods](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_database_error.htm#apex_Database_Error_methods) for more information.

Apex classes and triggers saved (compiled) using API version 15.0 and higher produce a runtime error if you assign a String value that is too long for the field.

Each executed upsert method counts against the governor limit for DML statements.

For more information on how the upsert operation works, see the [upsert() statement](atlas.en-us.apexref.meta/apexref/apex_dml_section.htm#apex_dml_upsert).

### upsert(recordsToUpsert, externalIdField, allOrNone, accessLevel)

Creates new sObject records or updates existing sObject records within a single statement, using a specified field to determine the presence of existing objects, or the ID field if no field is specified.

#### Signature

public static List<Database.UpsertResult> upsert(List<SObject> recordsToUpsert, Schema.SObjectField externalIdField, Boolean allOrNone, System.AccessLevel accessLevel)

#### Parameters

recordsToUpsert

Type: List<[sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.") >

externalIdField

Type: [Schema.SObjectField](atlas.en-us.apexref.meta/apexref/apex_class_Schema_SObjectField.htm#apex_class_Schema_SObjectField "A Schema.sObjectField object is returned from the field describe result using the getController and getSObjectField methods.")

(Optional) The externalIdField is of type Schema.SObjectField, that is, a field token. Find the token for the field by using the fields special method. For example, Schema.SObjectField f = Account.Fields.MyExternalId. The externalIdField parameter is the field that upsert() uses to match sObjects with existing records. This field can be a custom field marked as external ID, or a standard field with the idLookup attribute.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

If externalIdField isn’t specified, then the ID field is used to determine a match with existing records.

allOrNone

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

(Optional) The allOrNone parameter specifies whether the operation allows partial success. If allOrNone is set to false and a record fails, the remainder of the DML operation can still succeed. You must iterate through the returned results to identify which records succeeded or failed. If allOrNone is set to true and the method isn’t successful, an exception is thrown. The default for the parameter is true.

If allOrNone is set to false and a before-trigger assigns an invalid value to a field, the partial set of valid records isn’t inserted.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: List<[Database.UpsertResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_upsertresult.htm#apex_methods_system_database_upsertresult "The result of an upsert DML operation returned by the Database.upsert method.")\>

#### Usage

If you use the accessLevel parameter to specify that the method runs in user mode, we report all encountered inaccessible fields. The way to retrieve the names of these inaccessible fields depends on the value of this method's allOrNone parameter, or the equivalent [DmlOptions.optAllOrNone](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_database_dmloptions.htm#apex_Database_DmlOptions_optAllOrNone) property. If you specify that:

-   allOrNone=true or DmlOptions.optAllOrNone=true: Catch the DMLException and use the DMLException.getDMLFieldNames() method to retrieve the list of inaccessible fields. See [Exception Class and Built-In Exceptions](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_classes_exception_methods.htm) for more information.
-   allOrNone=false or DmlOptions.optAllOrNone=false: For each failing record, we update the Database.Error object that results from the DML operation. Use the Error.getFields() method to retrieve the list of inaccessible fields. See the [Error Class methods](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_database_error.htm#apex_Database_Error_methods) for more information.

Apex classes and triggers saved (compiled) using API version 15.0 and higher produce a runtime error if you assign a String value that is too long for the field.

Each executed upsert method counts against the governor limit for DML statements.

For more information on how the upsert operation works, see the [upsert() statement](atlas.en-us.apexref.meta/apexref/apex_dml_section.htm#apex_dml_upsert).

### updateAsync(sobjects, callback)

Initiates requests to update external object data on the relevant external systems. The requests are executed asynchronously, as background operations, and are sent to the external systems that are defined by the external objects' associated external data sources. Allows referencing a callback class whose processSave method is called for each record after the remote operations are completed.

#### Signature

public static List<Database.SaveResult> updateAsync(List<SObject> sobjects, DataSource.AsyncSaveCallback callback)

#### Parameters

sobjects

Type: List<SObject>

List of external object records to modify.

callback

Type: [DataSource.AsyncSaveCallback](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_AsyncSaveCallback.htm#apex_class_DataSource_AsyncSaveCallback "A callback class that the Database.insertAsync or Database.updateAsync method references. Salesforce calls this class after the remote operation is completed. This class provides the compensating transaction in the completion context of the insert or update operation. Extend this class to define the actions to execute after the remote insert or update operation finishes execution.")

The callback object that contains the state in the originating context and an action (the processSave method) that executes after the insert operation is completed. Use the action callback to update org data according to the operation’s results. The callback object must extend DataSource.AsyncSaveCallback.

#### Return Value

Type: List<[Database.SaveResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm#apex_methods_system_database_saveresult "The result of an insert or update DML operation returned by a Database method.")\>

Status results for the update operation. Each result corresponds to a record processed by this asynchronous operation and is associated with a unique identifier (asyncLocator). The asyncLocator value is included in the errors array of the result. You can retrieve this identifier with Database.getAsyncLocator(). Retrieve the final result with Database.getAsyncSaveResult().

### updateAsync(sobject, callback)

Initiates a request to update external object data on the relevant external system. The request is executed asynchronously, as a background operation, and is sent to the external system that's defined by the external object's associated external data source. Allows referencing a callback class whose processSave method is called after the remote operation is completed.

#### Signature

public static Database.SaveResult updateAsync(SObject sobject, DataSource.AsyncSaveCallback callback)

#### Parameters

sobject

Type: [SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

External object record to modify.

callback

Type: [DataSource.AsyncSaveCallback](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_AsyncSaveCallback.htm#apex_class_DataSource_AsyncSaveCallback "A callback class that the Database.insertAsync or Database.updateAsync method references. Salesforce calls this class after the remote operation is completed. This class provides the compensating transaction in the completion context of the insert or update operation. Extend this class to define the actions to execute after the remote insert or update operation finishes execution.")

The callback object that contains the state in the originating context and an action (the processSave method) that executes after the insert operation is completed. Use the action callback to update org data according to the operation’s results. The callback object must extend DataSource.AsyncSaveCallback.

#### Return Value

Type: [Database.SaveResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm#apex_methods_system_database_saveresult "The result of an insert or update DML operation returned by a Database method.")

Status result for the insert operation. The result corresponds to a record processed by this asynchronous operation and is associated with a unique identifier (asyncLocator). The asyncLocator value is included in the errors array of the result. You can retrieve this identifier with Database.getAsyncLocator(). Retrieve the final result with Database.getAsyncSaveResult().

### updateAsync(sobjects)

Initiates requests to update external object data on the relevant external systems. The requests are executed asynchronously, as background operations, and are sent to the external systems that are defined by the external objects' associated external data sources.

#### Signature

public static List<Database.SaveResult> updateAsync(List<SObject> sobjects)

#### Parameters

sobjects

Type: List<SObject>

List of external object records to modify.

#### Return Value

Type: List<[Database.SaveResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm#apex_methods_system_database_saveresult "The result of an insert or update DML operation returned by a Database method.")\>

Status results for the update operation. Each result corresponds to a record processed by this asynchronous operation and is associated with a unique identifier (asyncLocator). The asyncLocator value is included in the errors array of the result. You can retrieve this identifier with Database.getAsyncLocator(). Retrieve the final result with Database.getAsyncSaveResult().

### updateAsync(sobject)

Initiates a request to update external object data on the relevant external system. The request is executed asynchronously, as a background operation, and is sent to the external system that's defined by the external object's associated external data source.

#### Signature

public static Database.SaveResult updateAsync(SObject sobject)

#### Parameters

sobject

Type: [SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

External object record to modify.

#### Return Value

Type: [Database.SaveResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm#apex_methods_system_database_saveresult "The result of an insert or update DML operation returned by a Database method.")

Status result for the insert operation. The result corresponds to a record processed by this asynchronous operation and is associated with a unique identifier (asyncLocator). The asyncLocator value is included in the errors array of the result. You can retrieve this identifier with Database.getAsyncLocator(). Retrieve the final result with Database.getAsyncSaveResult().

### updateAsync(sobjects, callback, accessLevel)

Initiates requests to update external object data on the relevant external systems. The requests are executed asynchronously, as background operations, and are sent to the external systems that are defined by the external objects' associated external data sources. Allows referencing a callback class whose processSave method is called for each record after the remote operations are completed.

#### Signature

public static List<Database.SaveResult> updateAsync(List<SObject> sobjects, DataSource.AsyncSaveCallback callback, System.AccessLevel accessLevel)

#### Parameters

sobjects

Type: List<SObject>

List of external object records to modify.

callback

Type: [DataSource.AsyncSaveCallback](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_AsyncSaveCallback.htm#apex_class_DataSource_AsyncSaveCallback "A callback class that the Database.insertAsync or Database.updateAsync method references. Salesforce calls this class after the remote operation is completed. This class provides the compensating transaction in the completion context of the insert or update operation. Extend this class to define the actions to execute after the remote insert or update operation finishes execution.")

The callback object that contains the state in the originating context and an action (the processSave method) that executes after the insert operation is completed. The execution is in system mode regardless of the accessLevel parameter. Use the action callback to update org data according to the operation’s results. The callback object must extend DataSource.AsyncSaveCallback.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: List<[Database.SaveResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm#apex_methods_system_database_saveresult "The result of an insert or update DML operation returned by a Database method.")\>

Status results for the update operation. Each result corresponds to a record processed by this asynchronous operation and is associated with a unique identifier (asyncLocator). The asyncLocator value is included in the errors array of the result. You can retrieve this identifier with Database.getAsyncLocator(). Retrieve the final result with Database.getAsyncSaveResult().

### updateAsync(sobject, callback, accessLevel)

Initiates a request to update external object data on the relevant external system. The request is executed asynchronously, as a background operation, and is sent to the external system that's defined by the external object's associated external data source. Allows referencing a callback class whose processSave method is called after the remote operation is completed.

#### Signature

public static Database.SaveResult updateAsync(SObject sobject, DataSource.AsyncSaveCallback callback, System.AccessLevel accessLevel)

#### Parameters

sobject

Type: [SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

External object record to modify.

callback

Type: [DataSource.AsyncSaveCallback](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_AsyncSaveCallback.htm#apex_class_DataSource_AsyncSaveCallback "A callback class that the Database.insertAsync or Database.updateAsync method references. Salesforce calls this class after the remote operation is completed. This class provides the compensating transaction in the completion context of the insert or update operation. Extend this class to define the actions to execute after the remote insert or update operation finishes execution.")

The callback object that contains the state in the originating context and an action (the processSave method) that executes after the insert operation is completed. The execution is in system mode regardless of the accessLevel parameter. Use the action callback to update org data according to the operation’s results. The callback object must extend DataSource.AsyncSaveCallback.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: [Database.SaveResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm#apex_methods_system_database_saveresult "The result of an insert or update DML operation returned by a Database method.")

Status result for the insert operation. The result corresponds to a record processed by this asynchronous operation and is associated with a unique identifier (asyncLocator). The asyncLocator value is included in the errors array of the result. You can retrieve this identifier with Database.getAsyncLocator(). Retrieve the final result with Database.getAsyncSaveResult().

### updateAsync(sobjects, accessLevel)

Initiates requests to update external object data on the relevant external systems. The requests are executed asynchronously, as background operations, and are sent to the external systems that are defined by the external objects' associated external data sources.

#### Signature

public static List<Database.SaveResult> updateAsync(List<SObject> sobjects, System.AccessLevel accessLevel)

#### Parameters

sobjects

Type: List<SObject>

List of external object records to modify.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: List<[Database.SaveResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm#apex_methods_system_database_saveresult "The result of an insert or update DML operation returned by a Database method.")\>

Status results for the update operation. Each result corresponds to a record processed by this asynchronous operation and is associated with a unique identifier (asyncLocator). The asyncLocator value is included in the errors array of the result. You can retrieve this identifier with Database.getAsyncLocator(). Retrieve the final result with Database.getAsyncSaveResult().

### updateAsync(sobject, accessLevel)

Initiates a request to update external object data on the relevant external system. The request is executed asynchronously, as a background operation, and is sent to the external system that's defined by the external object's associated external data source.

#### Signature

public static Database.SaveResult updateAsync(SObject sobject, System.AccessLevel accessLevel)

#### Parameters

sobject

Type: [SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

External object record to modify.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: [Database.SaveResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm#apex_methods_system_database_saveresult "The result of an insert or update DML operation returned by a Database method.")

Status result for the insert operation. The result corresponds to a record processed by this asynchronous operation and is associated with a unique identifier (asyncLocator). The asyncLocator value is included in the errors array of the result. You can retrieve this identifier with Database.getAsyncLocator(). Retrieve the final result with Database.getAsyncSaveResult().

### updateImmediate(sobjects)

Initiates requests to update external object data on the relevant external systems. The requests are executed synchronously and are sent to the external systems that are defined by the external objects' associated external data sources. If the Apex transaction contains pending changes, the synchronous operations can't be completed and throw exceptions.

#### Signature

public static List<Database.SaveResult> updateImmediate(List<SObject> sobjects)

#### Parameters

sobjects

Type: List<SObject>

List of external object records to modify.

#### Return Value

Type: List<[Database.SaveResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm#apex_methods_system_database_saveresult "The result of an insert or update DML operation returned by a Database method.")\>

Status results for the update operation.

#### Usage

The operation allows partial success. If one or more record updates fail, the method doesn’t throw an exception and the remainder of the DML operation can still succeed. The returned SaveResult objects indicate whether the operation was successful. If it wasn’t successful, the objects also return the error code and description.

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

### updateImmediate(sobjects, accessLevel)

Initiates requests to update external object data on the relevant external systems. The requests are executed synchronously and are sent to the external systems that are defined by the external objects' associated external data sources. If the Apex transaction contains pending changes, the synchronous operations can't be completed and throw exceptions.

#### Signature

public static List<Database.SaveResult> updateImmediate(List<SObject> sobjects, System.AccessLevel accessLevel)

#### Parameters

sobjects

Type: List<SObject>

List of external object records to modify.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: List<[Database.SaveResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm#apex_methods_system_database_saveresult "The result of an insert or update DML operation returned by a Database method.")\>

Status results for the update operation.

#### Usage

The operation allows partial success. If one or more record updates fail, the method doesn’t throw an exception and the remainder of the DML operation can still succeed. The returned SaveResult objects indicate whether the operation was successful. If it wasn’t successful, the objects also return the error code and description.

### updateImmediate(sobject, accessLevel)

Initiates a request to update external object data on the relevant external system. The request is executed synchronously and is sent to the external system that's defined by the external object's associated external data source. If the Apex transaction contains pending changes, the synchronous operation can't be completed and throws an exception.

#### Signature

public static Database.SaveResult updateImmediate(SObject sobject, System.AccessLevel accessLevel)

#### Parameters

sobject

Type: [SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

External object record to modify.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: [Database.SaveResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm#apex_methods_system_database_saveresult "The result of an insert or update DML operation returned by a Database method.")

Status result for the update operation.

#### Usage

If a record update fails, the method doesn’t throw an exception. The returned SaveResult object indicates whether the operation was successful. If it failed, the object returns the error code and description.

## Code Examples

```apex
String QueryString = 
    'SELECT count() FROM Account'; 
Integer i = 
    Database.countQuery(QueryString);
```

```apex
public static Integer simpleBindingSoqlQuery(Map<String, Object> bindParams) {
    String queryString =
        'SELECT count() ' +
        'FROM Account ' +
        'WHERE name = :name';
    return Database.countQueryWithBinds(
        queryString,
        bindParams,
        AccessLevel.USER_MODE
    );
}

String accountName = 'Acme Inc.';
Map<String, Object> nameBind = new Map<String, Object>{'name' => accountName};
Integer acctCount = simpleBindingSoqlQuery(nameBind);
System.debug(acctCount);
```

```apex
Account[] doomedAccts = [SELECT Id, Name FROM Account WHERE Name = 'DotCom']; 
Database.DeleteResult[] DR_Dels = Database.delete(doomedAccts);
```

```apex
Database.GetDeletedResult r =
 Database.getDeleted(
  'Merchandise__c',
  Datetime.now().addHours(-1),
  Datetime.now());
```

```apex
public class TestBatch implements Database.Batchable<sObject>{

   private Map<String, Object> acctBinds = new Map<String, Object>{'acctName' => 'Acme Corporation'};
   
   private String query = 'Select Id From Account where name = :acctName';

   public Database.QueryLocator start(Database.BatchableContext BC){
      return Database.getQueryLocatorWithBinds(query, acctBinds, AccessLevel.USER_MODE);
   }

   public void execute(Database.BatchableContext BC, List<sObject> scope){
   }

   public void finish(Database.BatchableContext BC){
   }
}
```

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- Apex DML Operations (atlas.en-us.apexref.meta/apexref/apex_dml_section.htm)
- convertLead(leadToConvert, allOrNone) (atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm)
- convertLead(leadsToConvert, allOrNone) (atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm)
- convertLead(leadToConvert, dmlOptions) (atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm)
- convertLead(leadsToConvert, dmlOptions) (atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm)
- convertLead(leadToConvert, allOrNone, accessLevel) (atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm)
- convertLead(leadsToConvert, allOrNone, accessLevel) (atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm)
- convertLead(leadToConvert, dmlOptions, accessLevel) (atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm)
- convertLead(leadsToConvert, dmlOptions, accessLevel) (atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm)
