---
title: "Database Namespace"
domain: apex-reference
topic: database-namespace
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:42.075Z
keywords: [Database, Namespace]
---

# Database Namespace

# Database Namespace

The Database namespace provides classes used with DML operations.

The following are the classes in the Database namespace.

-   **[Batchable Interface](atlas.en-us.apexref.meta/apexref/apex_interface_database_batchable.htm#apex_interface_database_batchable)**  
    The class that implements this interface can be executed as a batch Apex job.
-   **[BatchableContext Interface](atlas.en-us.apexref.meta/apexref/apex_interface_database_batchablecontext.htm#apex_interface_database_batchablecontext)**  
    Represents the parameter type of a batch job method and contains the batch job ID. This interface is implemented internally by Apex.
-   **[Cursor Class](atlas.en-us.apexref.meta/apexref/apex_class_Database_Cursor.htm#apex_class_Database_Cursor)**  
    Contains methods to fetch records and to get the number of cursor rows returned from a SOQL query.
-   **[CursorFetchResult Class](atlas.en-us.apexref.meta/apexref/apex_class_Database_CursorFetchResult.htm#apex_class_Database_CursorFetchResult)**  
    This class encapsulates the result of a PaginationCursor.fetchPage() call. It contains methods that get the rows for the current page, the start index of the next page, and the number of deleted rows skipped during the fetch operation. It also contains a method that indicates whether the pagination cursor has fetched all available rows in the result set.
-   **[DeletedRecord Class](atlas.en-us.apexref.meta/apexref/apex_class_database_deletedrecord.htm#apex_class_database_deletedrecord)**  
    Contains information about a deleted record.
-   **[DeleteResult Class](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_deleteresult.htm#apex_methods_system_database_deleteresult)**  
    Represents the result of a delete DML operation returned by the Database.delete method.
-   **[DMLOptions Class](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_dmloptions.htm#apex_methods_system_database_dmloptions)**  
    Enables you to set options related to DML operations.
-   **[DmlOptions.AssignmentRuleHeader Class](atlas.en-us.apexref.meta/apexref/apex_class_Database_AssignmentRuleHeader.htm#apex_class_Database_AssignmentRuleHeader)**  
    Enables setting assignment rule options.
-   **[DMLOptions.DuplicateRuleHeader Class](atlas.en-us.apexref.meta/apexref/apex_class_Database_DMLOptions_DuplicateRuleHeader.htm#apex_class_Database_DMLOptions_DuplicateRuleHeader)**  
    Determines options for using duplicate rules to detect duplicate records. Duplicate rules are part of the Duplicate Management feature.
-   **[DmlOptions.EmailHeader Class](atlas.en-us.apexref.meta/apexref/apex_class_Database_EmailHeader.htm#apex_class_Database_EmailHeader)**  
    Enables setting email options.
-   **[DuplicateError Class](atlas.en-us.apexref.meta/apexref/apex_class_Database_DuplicateError.htm#apex_class_Database_DuplicateError)**  
    Contains information about an error that occurred when an attempt was made to save a duplicate record. Use if your organization has set up duplicate rules, which are part of the Duplicate Management feature.
-   **[EmptyRecycleBinResult Class](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_EmptyRecycleBinResult.htm#apex_methods_system_database_EmptyRecycleBinResult)**  
    The result of the emptyRecycleBin DML operation returned by the Database.emptyRecycleBin method.
-   **[Error Class](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_error.htm#apex_methods_system_database_error)**  
    Represents information about an error that occurred during a DML operation when using a Database method.
-   **[GetDeletedResult Class](atlas.en-us.apexref.meta/apexref/apex_class_database_getdeletedresult.htm#apex_class_database_getdeletedresult)**  
    Contains the deleted records retrieved for a specific sObject type and time window.
-   **[GetUpdatedResult Class](atlas.en-us.apexref.meta/apexref/apex_class_database_getupdatedresult.htm#apex_class_database_getupdatedresult)**  
    Contains the result for the Database.getUpdated method call.
-   **[LeadConvert Class](atlas.en-us.apexref.meta/apexref/apex_dml_convertLead.htm#apex_dml_convertLead)**  
    Contains information used for lead conversion.
-   **[LeadConvertResult Class](atlas.en-us.apexref.meta/apexref/apex_class_database_leadconvertresult.htm#apex_class_database_leadconvertresult)**  
    The result of a lead conversion.
-   **[MergeResult Class](atlas.en-us.apexref.meta/apexref/apex_class_database_mergeresult.htm#apex_class_database_mergeresult)**  
    Contains the result of a merge Database method operation.
-   **[PaginationCursor Class](atlas.en-us.apexref.meta/apexref/apex_class_Database_PaginationCursor.htm#apex_class_Database_PaginationCursor)**  
    This class represents a pagination cursor that can traverse a SOQL query result set. It contains methods that fetch rows by page. It also contains a method that returns the total number of rows in the result set.
-   **[QueryLocator Class](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_batch.htm#apex_methods_system_database_batch)**  
    Represents the record set returned by Database.getQueryLocator and used with Batch Apex.
-   **[QueryLocatorIterator Class](atlas.en-us.apexref.meta/apexref/apex_class_database_querylocatoriterator.htm#apex_class_database_querylocatoriterator)**  
    Represents an iterator over a query locator record set.
-   **[SaveResult Class](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm#apex_methods_system_database_saveresult)**  
    The result of an insert or update DML operation returned by a Database method.
-   **[UndeleteResult Class](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_undeleteresult.htm#apex_methods_system_database_undeleteresult)**  
    The result of an undelete DML operation returned by the Database.undelete method.
-   **[UpsertResult Class](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_upsertresult.htm#apex_methods_system_database_upsertresult)**  
    The result of an upsert DML operation returned by the Database.upsert method.