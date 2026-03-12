---
title: "Data Manipulation Language"
domain: apex-guide
topic: data-manipulation-language
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:34.652Z
estimatedTokens: 561
keywords: [Data, Manipulation, Language, Apex, enables, insert, update, delete, restore, data, database., DML, operations, allow, modify, records, time, batches.]
---

# Data Manipulation Language

> Apex enables you to insert, update, delete or restore data in the database. DML
        operations allow you to modify records one at a time or in batches.

# Data Manipulation Language

Apex enables you to insert, update, delete or restore data in the database. DML operations allow you to modify records one at a time or in batches.

-   **[How DML Works](atlas.en-us.apexcode.meta/apexcode/langCon_apex_dml_examples.htm)**

-   **[Adding and Retrieving Data With DML](atlas.en-us.apexcode.meta/apexcode/langCon_apex_dml_section.htm)**
    Apex is tightly integrated with the Lightning Platform persistence layer. Records in the database can be inserted and manipulated through Apex directly using simple statements. The language in Apex that allows you to add and manage records in the database is the Data Manipulation Language (DML). In contrast to the SOQL language, which is used for read operations (querying records), DML is used for write operations.
-   **[DML Statements vs. Database Class Methods](atlas.en-us.apexcode.meta/apexcode/langCon_apex_dml_database.htm)**
    Apex offers two ways to perform DML operations: using DML statements or Database class methods. This provides flexibility in how you perform data operations. DML statements are more straightforward to use and result in exceptions that you can handle in your code.
-   **[DML Operations As Atomic Transactions](atlas.en-us.apexcode.meta/apexcode/langCon_apex_dml_transactions.htm)**

-   **[DML Operations](atlas.en-us.apexcode.meta/apexcode/langCon_apex_dml_operations.htm)**
    Using DML, you can insert new records and commit them to the database. You can also update the field values of existing records.
-   **[Exception Handling](atlas.en-us.apexcode.meta/apexcode/langCon_apex_dml_exception_handling.htm)**

-   **[More About DML](atlas.en-us.apexcode.meta/apexcode/langCon_apex_dml_database_more.htm)**
    Here are some things you may want to know about using Data Manipulation Language.
-   **[Locking Records](atlas.en-us.apexcode.meta/apexcode/langCon_apex_locking_records.htm)**
    When an sObject record is locked, no other client or user is allowed to make updates either through code or the Salesforce user interface. The client locking the records can perform logic on the records and make updates with the guarantee that the locked records won’t be changed by another client during the lock period.

## Related Topics

- How DML Works (atlas.en-us.apexcode.meta/apexcode/langCon_apex_dml_examples.htm)
- Adding and Retrieving Data With DML (atlas.en-us.apexcode.meta/apexcode/langCon_apex_dml_section.htm)
- DML Statements vs. Database Class Methods (atlas.en-us.apexcode.meta/apexcode/langCon_apex_dml_database.htm)
- DML Operations As Atomic Transactions (atlas.en-us.apexcode.meta/apexcode/langCon_apex_dml_transactions.htm)
- DML Operations (atlas.en-us.apexcode.meta/apexcode/langCon_apex_dml_operations.htm)
- Exception Handling (atlas.en-us.apexcode.meta/apexcode/langCon_apex_dml_exception_handling.htm)
- More About DML (atlas.en-us.apexcode.meta/apexcode/langCon_apex_dml_database_more.htm)
- Locking Records (atlas.en-us.apexcode.meta/apexcode/langCon_apex_locking_records.htm)
