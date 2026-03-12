---
title: "Transaction Control"
domain: apex-guide
topic: transaction-control
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:34.876Z
estimatedTokens: 1601
keywords: [Transaction, Control, Read, transaction, requests, generating, releasing, savepoints, rolling, back, transactions, more., Generating, Savepoints, Rolling, Back, Transactions, Releasing, Callouts, Versioned]
---

# Transaction Control

> Read about transaction requests, generating and releasing savepoints, rolling back
    transactions, and more.

# Transaction Control

Read about transaction requests, generating and releasing savepoints, rolling back transactions, and more.

All requests are delimited by the trigger, class method, Web Service, Visualforce page, or anonymous block that executes the Apex code. If the entire request completes successfully, all changes are committed to the database. For example, suppose a Visualforce page called an Apex controller, which in turn called an additional Apex class. Only when all the Apex code has finished running and the Visualforce page has finished running, are the changes committed to the database. If the request doesn’t complete successfully, all database changes are rolled back.

## Generating Savepoints and Rolling Back Transactions

Sometimes during the processing of records, your business rules require that partial work (already executed DML statements) is rolled back so that the processing can continue in another direction. Apex gives you the ability to generate a savepoint, that is, a point in the request that specifies the state of the database at that time. Any DML statement that occurs after the savepoint can be discarded, restoring the database to the condition it was in when you generated the savepoint. All table and row locks acquired since the savepoint are released.

The following limitations apply to generating savepoint variables and rolling back the database:

-   If you set more than one savepoint, then roll back to a savepoint that isn’t the last savepoint you generated, the later savepoint variable is also rolled back and becomes invalid. For example, if you generated savepoint SP1 first, savepoint SP2 after that, and then you rolled back to SP1, the variable SP2 is no longer valid. If you try to use savepoint SP2, you receive a runtime error.
-   References to savepoints can’t cross-trigger invocations because each trigger invocation is a new trigger context. If you declare a savepoint as a static variable then try to use it across trigger contexts, you receive a run-time error.
-   Each savepoint you set counts against the governor limit for DML statements.
-   Static variables aren’t reverted during a rollback. If you try to run the trigger again, the static variables retain the values from the first run.

-   Database.rollback(Savepoint) and Database.setSavepoint()don’t count against the DML row limit, but count toward the DML statement limit. This behavior applies to all API versions.
-   The ID on an sObject inserted after setting a savepoint isn’t cleared after a rollback. Attempting to insert the sObject using the variable created before the rollback fails because the sObject variable has an ID. Updating or upserting the sObject using the same variable also fails because the sObject isn’t in the database and, thus, can’t be updated. To perform further DML operations, create an sObject variable without setting its ID.

The following is an example using the setSavepoint and rollback Database methods.

Account a = new Account(Name = 'xyz'); insert a;  Assert.isNull(\[SELECT AccountNumber FROM Account WHERE Id  = :a.Id\]. AccountNumber);   // Create a savepoint while AccountNumber is null  Savepoint sp = Database.setSavepoint();  // Change the account number  a.AccountNumber = '123';  update a;  Assert.areEqual('123', \[SELECT AccountNumber FROM Account WHERE Id  = :a.Id\]. AccountNumber);  // Rollback to the previous null value  Database.rollback(sp); Assert.isNull(\[SELECT AccountNumber FROM Account WHERE Id  = :a.Id\]. AccountNumber);

## Releasing Savepoints and Using Callouts

To allow callouts, roll back all uncommitted DML by using a savepoint. Then use the Database.releaseSavepoint method to explicitly release savepoints before making the desired callout. When Database.releaseSavepoint() is called, SAVEPOINT\_RELEASE is logged.

See [releaseSavepoint()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_releaseSavepoint) for more information.

In this example, the makeACallout() callout succeeds because the uncommitted DML is rolled back and the savepoint is released.

Savepoint sp = Database.setSavepoint(); try { // Try a database operation insert new Account(name='Foo'); integer bang = 1 / 0; } catch (Exception ex) { Database.rollback(sp); Database.releaseSavepoint(sp); makeACallout(); }

In this example, the savepoint isn’t released before making the callout. The CalloutException informs you that you must release all active savepoints before making the callout.

Savepoint sp = Database.setSavepoint(); try { makeACallout(); } catch (System.CalloutException ex) { Assert.isTrue(ex.getMessage().contains('All active Savepoints must be released before making callouts.')); }

In this example, DML is pending when the callout is made. The CalloutException informs you that you must roll back the transaction before the callout is made or the transaction must be committed.

Savepoint sp = Database.setSavepoint(); insert new Account(name='Foo'); Database.releaseSavepoint(sp); try { makeACallout(); } catch (System.CalloutException ex) { Assert.isTrue(ex.getMessage().contains('You have uncommitted work pending. Please commit or rollback before calling out.')); }

Use these guidelines for using callouts and savepoints.

-   If there’s uncommitted work pending when Database.releaseSavepoint() is called, the uncommitted work isn’t rolled back. It’s committed if the transaction succeeds.
-   Attempts to roll back to a released savepoint result in a TypeException.
-   Attempts to roll back after calling Database.releaseSavepoint() result in a System.InvalidOperationException.
-   Calling the Database.releaseSavepoint() method on a savepoint also releases nested savepoints, that is, any subsequent savepoints created after a savepoint.

## Versioned Behavior Changes

For Apex tests with API version 60.0 or later, all savepoints are released when Test.startTest() and Test.stopTest() are called. If any savepoints are reset, a SAVEPOINT\_RESET event is logged.

Before API version 60.0, making a callout after creating savepoints throws a CalloutException regardless of whether there was uncommitted DML or the changes were rolled back to a savepoint. Also, before API version 60.0, both Database.rollback(databaseSavepoint) and Database.setSavepoint() calls incremented the DML row usage limit.
