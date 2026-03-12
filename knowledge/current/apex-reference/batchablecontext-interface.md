---
title: "BatchableContext Interface"
domain: apex-reference
topic: batchablecontext-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:30.077Z
estimatedTokens: 393
namespace: Database
keywords: [BatchableContext, Represents, batch, job, contains, ID., implemented, internally, Apex., getChildJobId, getJobId]
---

# BatchableContext Interface

> Represents the parameter type of a batch job method and contains the batch job ID. This
  interface is implemented internally by Apex.

**Namespace:** `Database`

# BatchableContext Interface

Represents the parameter type of a batch job method and contains the batch job ID. This interface is implemented internally by Apex.

## Namespace

[Database](atlas.en-us.apexref.meta/apexref/apex_namespace_Database.htm "The Database namespace provides classes used with DML operations.")

#### See Also

-   [Batchable Interface](atlas.en-us.apexref.meta/apexref/apex_interface_database_batchable.htm#apex_interface_database_batchable "The class that implements this interface can be executed as a batch Apex job.")


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

## Related Topics

- Database (atlas.en-us.apexref.meta/apexref/apex_namespace_Database.htm)
- Batchable Interface (atlas.en-us.apexref.meta/apexref/apex_interface_database_batchable.htm)
- getChildJobId() (atlas.en-us.apexref.meta/apexref/apex_interface_database_batchablecontext.htm)
- getJobId() (atlas.en-us.apexref.meta/apexref/apex_interface_database_batchablecontext.htm)
