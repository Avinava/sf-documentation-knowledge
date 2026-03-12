---
title: "Locking Statements"
domain: apex-guide
topic: locking-statements
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T05:14:34.810Z
estimatedTokens: 790
keywords: [Locking, Statements, Apex, UPDATE, lock, sObject, records, while, they’re, being, updated, order, prevent, race, conditions, thread, safety, problems., Note, Considerations]
---

# Locking Statements

> In Apex, you can use FOR UPDATE to lock
    sObject records while they’re being updated in order to prevent race conditions and other
    thread safety problems.

# Locking Statements

In Apex, you can use FOR UPDATE to lock sObject records while they’re being updated in order to prevent race conditions and other thread safety problems.

While an sObject record is locked, no other client or user is allowed to make updates either through code or the Salesforce user interface. The client locking the records can perform logic on the records and make updates with the guarantee that the locked records won’t be changed by another client during the lock period. The lock gets released when the transaction completes.

To lock a set of sObject records in Apex, embed the keywords FOR UPDATE after any inline SOQL statement. For example, the following statement, in addition to querying for two accounts, also locks the accounts that are returned:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

You can’t use the ORDER BY keywords in any SOQL query that uses locking.

## Locking Considerations

-   While the records are locked by a client, the locking client can modify their field values in the database in the same transaction. Other clients have to wait until the transaction completes and the records are no longer locked before being able to update the same records. Other clients can still query the same records while they’re locked.
-   If you attempt to lock a record currently locked by another client, your process waits a maximum of 10 seconds for the lock to be released before acquiring a new lock. If the wait time exceeds 10 seconds, a QueryException is thrown. Similarly, if you attempt to update a record currently locked by another client and the lock isn’t released within a maximum of 10 seconds, a DmlException is thrown.
-   If a client attempts to modify a locked record, the update operation can succeed if the lock gets released within a short amount of time after the update call was made. In this case, it’s possible that the updates overwrite changes made by the locking client if the second client obtained an old copy of the record. To prevent the overwrite from happening, the second client must lock the record first. The locking process returns a fresh copy of the record from the database through the SELECT statement. The second client can use this copy to make new updates.
-   The record locks that are obtained in Apex via FOR UPDATE clause are automatically released when making callouts. The information is logged in the debug log and the logged message includes the most recently locked entity type. For example: FOR\_UPDATE\_LOCKS\_RELEASE FOR UPDATE locks released due to a callout. The most recent lock was Account. Use caution while making callouts in contexts where FOR UPDATE queries could have been previously executed.
-   When you perform a DML operation on one record, related records are locked in addition to the record in question.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=apexcode)

#### Warning

Use care when setting locks in your Apex code. See [Avoiding Deadlocks](atlas.en-us.apexcode.meta/apexcode/langCon_apex_deadlocks.htm#langCon_apex_deadlocks).

## Code Examples

```
Account [] accts = [SELECT Id FROM Account LIMIT 2 FOR UPDATE];
```

## Related Topics

- Avoiding Deadlocks (atlas.en-us.apexcode.meta/apexcode/langCon_apex_deadlocks.htm)
