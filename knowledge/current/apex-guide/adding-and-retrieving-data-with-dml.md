---
title: "Adding and Retrieving Data With DML"
domain: apex-guide
topic: adding-and-retrieving-data-with-dml
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:34.653Z
estimatedTokens: 524
keywords: [Adding, Retrieving, Data, DML, Apex, tightly, integrated, Lightning, Platform, persistence, layer, Records, database, inserted, manipulated]
---

# Adding and Retrieving Data With DML

> Apex is tightly integrated with the Lightning Platform persistence layer. Records in
        the database can be inserted and manipulated through Apex directly using simple statements.
        The language in Apex that allows you to add and manage records in the database is the Data
        Manipulation Language (DML). In contrast to the SOQL language, which is used for read
        operations (querying records), DML is used for write operations.

# Adding and Retrieving Data With DML

Apex is tightly integrated with the Lightning Platform persistence layer. Records in the database can be inserted and manipulated through Apex directly using simple statements. The language in Apex that allows you to add and manage records in the database is the Data Manipulation Language (DML). In contrast to the SOQL language, which is used for read operations (querying records), DML is used for write operations.

Before inserting or manipulating records, record data is created in memory as sObjects. The sObject data type is a generic data type and corresponds to the data type of the variable that will hold the record data. There are specific data types, subtyped from the sObject data type, which correspond to data types of standard object records, such as Account or Contact, and custom objects, such as Invoice\_Statement\_\_c. Typically, you will work with these specific sObject data types. But sometimes, when you don’t know the type of the sObject in advance, you can work with the generic sObject data type. This is an example of how you can create a new specific Account sObject and assign it to a variable.

```

```

In the previous example, the account referenced by the variable a exists in memory with the required Name field. However, it is not persisted yet to the Lightning Platform persistence layer. You need to call DML statements to persist sObjects to the database. Here is an example of creating and persisting this account using the insert statement.

```

```

Also, you can use DML to modify records that have already been inserted. Among the operations you can perform are record updates, deletions, restoring records from the Recycle Bin, merging records, or converting leads. After querying for records, you get sObject instances that you can modify and then persist the changes of. This is an example of querying for an existing record that has been previously persisted, updating a couple of fields on the sObject representation of this record in memory, and then persisting this change to the database.

```

```

## Code Examples

```
Account a = new Account(Name='Account Example');
```

```
Account a = new Account(Name='Account Example');
insert a;
```

```apex
// Query existing account.
Account a = [SELECT Name,Industry 
               FROM Account 
               WHERE Name='Account Example' LIMIT 1];

// Write the old values the debug log before updating them.
System.debug('Account Name before update: ' + a.Name); // Name is Account Example
System.debug('Account Industry before update: ' + a.Industry);// Industry is not set

// Modify the two fields on the sObject.
a.Name = 'Account of the Day';
a.Industry = 'Technology';

// Persist the changes.
update a;

// Get a new copy of the account from the database with the two fields.
Account a = [SELECT Name,Industry 
             FROM Account 
             WHERE Name='Account of the Day' LIMIT 1];

// Verify that updated field values were persisted.
System.assertEquals('Account of the Day', a.Name);
System.assertEquals('Technology', a.Industry);
```
