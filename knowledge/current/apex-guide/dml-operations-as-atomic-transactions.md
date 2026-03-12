---
title: "DML Operations As Atomic Transactions"
domain: apex-guide
topic: dml-operations-as-atomic-transactions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:34.739Z
estimatedTokens: 281
keywords: [DML, Operations, Atomic, Transactions, operations, execute, within, transaction., transaction, either, complete, successfully, error, occurs, operation, entire, rolled, back, data, committed]
---

# DML Operations As Atomic Transactions

> DML operations execute within a transaction. All DML operations
in a transaction either complete successfully, or if an error occurs in one operation, the entire
transaction is rolled back and no data is committed to the database. The boundary of a transaction
can be a trigger, a class method, an an

# DML Operations As Atomic Transactions

DML operations execute within a transaction. All DML operations in a transaction either complete successfully, or if an error occurs in one operation, the entire transaction is rolled back and no data is committed to the database. The boundary of a transaction can be a trigger, a class method, an anonymous block of code, an Apex page, or a custom Web service method.

All operations that occur inside the transaction boundary represent a single unit of operations. This also applies to calls that are made from the transaction boundary to external code, such as classes or triggers that get fired as a result of the code running in the transaction boundary. For example, consider the following chain of operations: a custom Apex Web service method calls a method in a class that performs some DML operations. In this case, all changes are committed to the database only after all operations in the transaction finish executing and don’t cause any errors. If an error occurs in any of the intermediate steps, all database changes are rolled back and the transaction isn’t committed.
