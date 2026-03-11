---
title: "BatchableContext Methods"
domain: apex-reference
topic: batchablecontext-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.778Z
keywords: [BatchableContext, Methods, Returns, current, batch, job, chunk, being, processed., getChildJobId, Signature, Return, Value, getJobId]
---

# BatchableContext Methods

> Returns the ID of the current batch job chunk that is being
processed.

## BatchableContext Methods

The following are methods for BatchableContext.

-   **[getChildJobId()](atlas.en-us.apexref.meta/apexref/apex_interface_database_batchablecontext.htm#apex_Database_BatchableContext_getChildJobId)**  
    Returns the ID of the current batch job chunk that is being processed.
-   **[getJobId()](atlas.en-us.apexref.meta/apexref/apex_interface_database_batchablecontext.htm#apex_Database_BatchableContext_getJobId)**  
    Returns the batch job ID.

### getChildJobId()

Returns the ID of the current batch job chunk that is being processed.

#### Signature

public Id getChildJobId()

#### Return Value

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

### getJobId()

Returns the batch job ID.

#### Signature

public Id getJobId()

#### Return Value

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")