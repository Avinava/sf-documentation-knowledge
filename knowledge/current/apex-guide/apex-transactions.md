---
title: "Apex Transactions"
domain: apex-guide
topic: apex-transactions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:47.677Z
keywords: [Apex, Transactions, Note, How, Useful?, Example]
---

# Apex Transactions

# Apex Transactions

An Apex transaction represents a set of operations that are executed as a single unit. All DML operations in a transaction must complete successfully. If an error occurs in one operation, the entire transaction is rolled back and no data is committed to the database. The boundary of a transaction can be a trigger, a class method, an anonymous block of code, a Visualforce page, or a custom Web service method.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Payments transactions are the exception to DML operation errors. Even if an error occurs, data is committed and payment records are generated because the transaction has already happened at the payment gateway.

All operations that occur inside the transaction boundary represent a single unit of operations, including calls to external code, such as classes or triggers that run in the transaction boundary. For example: a custom Apex Web service method causes a trigger to fire, which in turn calls a method in a class. In this case, all changes are committed to the database only after all operations in the transaction finish executing and don’t cause any errors. If an error occurs in any of the intermediate steps, all database changes are rolled back and the transaction isn’t committed.

An Apex transaction is sometimes referred to as an execution context. This guide uses the term Apex transaction.

## How are Transactions Useful?

Transactions are useful when several operations are related, and either all or none of the operations are committed. The goal is to keep the database in a consistent state. There are many business scenarios that benefit from transaction processing. For example, transferring funds from one bank account to another is a common scenario. It involves debiting the first account and crediting the second account with the amount to transfer. These two operations must be committed together to the database. If the debit operation succeeds and the credit operation fails, the account balances become inconsistent.

## Example

This example shows how all DML insert operations in a method are rolled back when the last operation causes a validation rule failure. In this example, the invoice method is the transaction boundary—all code that runs within this method either commits all changes to the platform database or rolls back all changes. In this case, we add an invoice statement with a line item for the pencils merchandise. The Line Item is for a purchase of 5,000 pencils specified in the Units\_Sold\_\_c field, which is more than the entire pencils inventory of 1,000. This example assumes a validation rule has been set up to check that the total inventory of the merchandise item is enough to cover new purchases.

Since this example attempts to purchase more pencils (5,000) than items in stock (1,000), the validation rule fails and throws an exception. Code execution halts at this point and all DML operations processed before this exception are rolled back. The invoice statement and the line item aren’t added to the database, and their insert DML operations are rolled back.

In the Developer Console, execute the static invoice method.

```

```

This definition is the invoice method. The update of total inventory causes an exception due to the validation rule failure. As a result, the invoice statements and line items are rolled back and aren’t inserted into the database.

```

```