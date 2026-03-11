---
title: "Batchable Interface"
domain: apex-reference
topic: batchable-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.775Z
keywords: [Batchable, Interface, Gets, invoked, batch, job, starts., Returns, record, set, QueryLocator, object, batched, execution., start, jobId, Signature, Parameters, Return, Value]
---

# Batchable Interface

> Gets invoked when the batch job starts. Returns the record
set as a QueryLocator object that will be batched for execution.

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