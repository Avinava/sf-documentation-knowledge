---
title: "releaseSavepoint(databaseSavepoint)"
domain: apex-reference
topic: releasesavepointdatabasesavepoint
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.170Z
keywords: [releaseSavepoint, databaseSavepoint, Releases, given, savepoint., savepoints, subsequent, released., Signature, Parameters, Return, Value, Versioned, Behavior, Changes]
---

# releaseSavepoint(databaseSavepoint)

> Releases a given savepoint. All savepoints that are subsequent to the given one are also
    released.

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