---
title: "Locking Records"
domain: apex-guide
topic: locking-records
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:43:48.143Z
keywords: [Locking, Records]
---

# Locking Records

# Locking Records

When an sObject record is locked, no other client or user is allowed to make updates either through code or the Salesforce user interface. The client locking the records can perform logic on the records and make updates with the guarantee that the locked records won’t be changed by another client during the lock period.

-   **[Locking Statements](atlas.en-us.apexcode.meta/apexcode/langCon_apex_locking_statements.htm)**  
    In Apex, you can use FOR UPDATE to lock sObject records while they’re being updated in order to prevent race conditions and other thread safety problems.
-   **[Locking in a SOQL For Loop](atlas.en-us.apexcode.meta/apexcode/langCon_apex_locking_soql_for_loop.htm)**  
    
-   **[Avoiding Deadlocks](atlas.en-us.apexcode.meta/apexcode/langCon_apex_deadlocks.htm)**