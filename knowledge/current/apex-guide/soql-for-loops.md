---
title: "SOQL For Loops"
domain: apex-guide
topic: soql-for-loops
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:34.830Z
estimatedTokens: 1233
keywords: [SOQL, Loops, loops, iterate, over, sObject, records, returned, query., Versus, Standard, Queries, Loop, Formats, Note]
---

# SOQL For Loops

> SOQL for loops iterate over all of the
        sObject records returned by a SOQL query.

# SOQL For Loops

SOQL for loops iterate over all of the sObject records returned by a SOQL query.

The syntax of a SOQL for loop is either:

```

```

or

```

```

Both variable and variable\_list must be of the same type as the sObjects that are returned by the soql\_query. As in standard SOQL queries, the \[soql\_query\] statement can refer to code expressions in their WHERE clauses using the : syntax. For example:

```

```

The following example combines creating a list from a SOQL query, with the DML update method.

```

```

## SOQL For Loops Versus Standard SOQL Queries

SOQL for loops differ from standard SOQL statements because of the method they use to retrieve sObjects. While the standard queries discussed in [SOQL and SOSL Queries](atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL.htm "You can evaluate Salesforce Object Query Language (SOQL) or Salesforce Object Search Language (SOSL) statements on-the-fly in Apex by surrounding the statement in square brackets.") can retrieve either the count of a query or a number of object records, SOQL for loops retrieve all sObjects, using efficient chunking with calls to the query and queryMore methods of SOAP API. Developers can avoid the limit on heap size by using a SOQL for loop to process query results that return multiple records. However, this approach can result in more CPU cycles being used. See [Total heap size](atlas.en-us.apexcode.meta/apexcode/apex_gov_limits.htm "Because Apex runs in a multitenant environment, the Apex runtime engine strictly enforces limits so that runaway Apex code or processes don’t monopolize shared resources. If some Apex code exceeds a limit, the associated governor issues a runtime exception that can’t be handled.").

Queries including an [aggregate function](atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_agg_fns.htm "Aggregate functions in SOQL, such as SUM() and MAX(), allow you to roll up and summarize your data in a query.") don't support queryMore. A run-time exception occurs if you use a query containing an aggregate function that returns more than 2,000 rows in a for loop.

For fine-grained control over the results of a SOQL query, consider using Apex cursors. See [Apex Cursors](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_cursors.htm).

## SOQL For Loop Formats

SOQL for loops can process records one at a time using a single sObject variable, or in batches of 200 sObjects at a time using an sObject list:

-   The single sObject format executes the for loop's <code\_block> one time per sObject record. Consequently, it’s easy to understand and use, but is grossly inefficient if you want to use data manipulation language (DML) statements within the for loop body. Each DML statement ends up processing only one sObject at a time.
-   The sObject list format executes the for loop's <code\_block> one time per list of 200 sObjects. Consequently, it’s a little more difficult to understand and use, but is the optimal choice if you must use DML statements within the for loop body. Each DML statement can bulk process a list of sObjects at a time.

For example, the following code illustrates the difference between the two types of SOQL query for loops:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

-   The break and continue keywords can be used in both types of inline query for loop formats. When using the sObject list format, continue skips to the next list of sObjects.
-   DML statements can only process up to 10,000 records at a time, and sObject list for loops process records in batches of 200. Consequently, if you’re inserting, updating, or deleting more than one record per returned record in an sObject list for loop, it’s possible to encounter runtime limit’s errors. See Execution Governors and Limits.
-   You may get a QueryException in a SOQL for loop with the message Aggregate query has too many rows for direct assignment, use FOR loop. This exception is sometimes thrown when accessing a large set of child records (200 or more) of a retrieved sObject inside the loop, or when getting the size of such a record set. For example, the query in the following SOQL for loop retrieves child contacts for a particular account. If this account contains more than 200 child contacts, the statements in the for loop cause an exception.

    ```

    ```

    To avoid getting this exception, use a for loop to iterate over the child records, as follows.

    ```

    ```

    In this example, if JSON.serialize() is used on acct, only the records that have been retrieved so far will be returned and serialized. Because the Apex SOQL for-loop mechanism is designed to minimize the amount of heap usage by keeping only a subset of the record data in memory, the complete sObject and any subquery sObjects will not be available to obtain complete serialization.

## Code Examples

```
for (variable : [soql_query]) {
    code_block
}
```

```
for (variable_list : [soql_query]) {
    code_block
}
```

```
String s = 'Acme';
for (Account a : [SELECT Id, Name from Account
                  where Name LIKE :(s+'%')]) {
    // Your code
}
```

```apex
// Create a list of account records from a SOQL query
List<Account> accs = [SELECT Id, Name FROM Account WHERE Name = 'Siebel']; 

// Loop through the list and update the Name field
for(Account a : accs){
   a.Name = 'Oracle';
}

// Update the database
update accs;
```

```apex
// Create a savepoint because the data should not be committed to the database
Savepoint sp = Database.setSavepoint(); 

insert new Account[]{new Account(Name = 'yyy'), 
                     new Account(Name = 'yyy'), 
                     new Account(Name = 'yyy')};

// The single sObject format executes the for loop once per returned record
Integer i = 0;
for (Account tmp : [SELECT Id FROM Account WHERE Name = 'yyy']) {
    i++;
}
System.assert(i == 3); // Since there were three accounts named 'yyy' in the
                       // database, the loop executed three times

// The sObject list format executes the for loop once per returned batch
// of records
i = 0;
Integer j;
for (Account[] tmp : [SELECT Id FROM Account WHERE Name = 'yyy']) {
    j = tmp.size();
    i++;
}
System.assert(j == 3); // The lt should have contained the three accounts
                       // named 'yyy'
System.assert(i == 1); // Since a single batch can hold up to 200 records and,
                       // only three records should have been returned, the 
                       // loop should have executed only once

// Revert the database to the original state
Database.rollback(sp);
```

## Related Topics

- SOQL and SOSL Queries (atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL.htm)
- Total heap size (atlas.en-us.apexcode.meta/apexcode/apex_gov_limits.htm)
- aggregate function (atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_agg_fns.htm)
