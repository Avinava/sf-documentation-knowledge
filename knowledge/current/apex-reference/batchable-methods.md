---
title: "Batchable Methods"
domain: apex-reference
topic: batchable-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.775Z
keywords: [Batchable, Methods, Gets, invoked, batch, job, executes, operates, records., Contains, calls, main, execution, logic, job., execute, jobId, recordList, Signature, Parameters]
---

# Batchable Methods

> Gets invoked when the batch job executes and operates on
one batch of records. Contains or calls the main execution logic for
the batch job.

## Batchable Methods

The following are methods for Batchable.

-   **[execute(jobId, recordList)](atlas.en-us.apexref.meta/apexref/apex_interface_database_batchable.htm#apex_Database_Batchable_execute)**  
    Gets invoked when the batch job executes and operates on one batch of records. Contains or calls the main execution logic for the batch job.
-   **[finish(jobId)](atlas.en-us.apexref.meta/apexref/apex_interface_database_batchable.htm#apex_Database_Batchable_finish)**  
    Gets invoked when the batch job finishes. Place any clean up code in this method.
-   **[start(jobId)](atlas.en-us.apexref.meta/apexref/apex_interface_database_batchable.htm#apex_Database_Batchable_start)**  
    Gets invoked when the batch job starts. Returns the record set as an iterable that will be batched for execution.
-   **[start(jobId)](atlas.en-us.apexref.meta/apexref/apex_interface_database_batchable.htm#apex_Database_Batchable_start_2)**  
    Gets invoked when the batch job starts. Returns the record set as a QueryLocator object that will be batched for execution.

### execute(jobId, recordList)

Gets invoked when the batch job executes and operates on one batch of records. Contains or calls the main execution logic for the batch job.

#### Signature

public Void execute(Database.BatchableContext jobId, List<sObject> recordList)

#### Parameters

jobId

Type: [Database.BatchableContext](atlas.en-us.apexref.meta/apexref/apex_interface_database_batchablecontext.htm#apex_interface_database_batchablecontext "Represents the parameter type of a batch job method and contains the batch job ID. This interface is implemented internally by Apex.")

Contains the job ID.

recordList

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")\>

Contains the batch of records to process.

#### Return Value

Type: Void

### finish(jobId)

Gets invoked when the batch job finishes. Place any clean up code in this method.

#### Signature

public Void finish(Database.BatchableContext jobId)

#### Parameters

jobId

Type: [Database.BatchableContext](atlas.en-us.apexref.meta/apexref/apex_interface_database_batchablecontext.htm#apex_interface_database_batchablecontext "Represents the parameter type of a batch job method and contains the batch job ID. This interface is implemented internally by Apex.")

Contains the job ID.

#### Return Value

Type: Void

### start(jobId)

Gets invoked when the batch job starts. Returns the record set as an iterable that will be batched for execution.

#### Signature

public System.Iterable start(Database.BatchableContext jobId)

#### Parameters

jobId

Type: [Database.BatchableContext](atlas.en-us.apexref.meta/apexref/apex_interface_database_batchablecontext.htm#apex_interface_database_batchablecontext "Represents the parameter type of a batch job method and contains the batch job ID. This interface is implemented internally by Apex.")

Contains the job ID.

#### Return Value

Type: System.Iterable

### start(jobId)

Gets invoked when the batch job starts. Returns the record set as a QueryLocator object that will be batched for execution.

#### Signature

public Database.QueryLocator start(Database.BatchableContext jobId)

#### Parameters

jobId

Type: [Database.BatchableContext](atlas.en-us.apexref.meta/apexref/apex_interface_database_batchablecontext.htm#apex_interface_database_batchablecontext "Represents the parameter type of a batch job method and contains the batch job ID. This interface is implemented internally by Apex.")

Contains the job ID.

#### Return Value

Type: [Database.QueryLocator](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_batch.htm#apex_methods_system_database_batch "Represents the record set returned by Database.getQueryLocator and used with Batch Apex.")