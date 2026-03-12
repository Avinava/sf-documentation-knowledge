---
title: "FOR UPDATE"
domain: soql-sosl
topic: for-update
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:19.710Z
estimatedTokens: 315
keywords: [Apex, lock, sObject, records, they’re, updated, order, prevent, race, conditions, thread, safety, problems]
---

# FOR UPDATE

> In Apex, you can use FOR
    UPDATE to lock sObject records while they’re being updated in order to prevent
   race conditions and other thread safety problems.

# FOR UPDATE

In Apex, you can use FOR UPDATE to lock sObject records while they’re being updated in order to prevent race conditions and other thread safety problems.

While an sObject record is locked, no other client or user is allowed to make updates either through code or the Salesforce user interface. The client locking the records can perform logic on the records and make updates with the guarantee that the locked records won’t be changed by another client during the lock period. The lock gets released when the transaction completes.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=soql_sosl)

#### Note

You can’t use the ORDER BY clause in any SOQL query that uses locking.

To lock a set of sObject records in Apex, embed the keywords FOR UPDATE after any inline SOQL statement. This example queries for two accounts and also locks the accounts that are returned.

```

```

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=soql_sosl)

#### Warning

Use care when setting locks in your Apex code. For details, see [Locking Records](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/langCon_apex_locking_records.htm) in the Apex Developer Guide.

## Code Examples

```
Account [] accts = [SELECT Id FROM Account LIMIT 2 FOR UPDATE];
```
