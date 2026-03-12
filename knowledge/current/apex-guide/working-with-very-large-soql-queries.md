---
title: "Working with Very Large SOQL Queries"
domain: apex-guide
topic: working-with-very-large-soql-queries
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:34.537Z
estimatedTokens: 1463
keywords: [Working, Very, Large, SOQL, Queries, Where, possible, changed, noninclusive, terms, align, company, Equality., maintained, certain, avoid, any, effect, customer, implementations.]
---

# Working with Very Large SOQL Queries

> Where possible, we changed noninclusive terms to align with our
            company value of Equality. We maintained certain terms to avoid any effect on customer
            implementations.

# Working with Very Large SOQL Queries

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexcode)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

Your SOQL query sometimes returns so many sObjects that the limit on heap size is exceeded and an error occurs. To resolve, use a SOQL query for loop instead, since it can process multiple batches of records by using internal calls to query and queryMore.

For example, if the results are too large, this syntax causes a runtime exception:

```

```

Instead, use a SOQL query for loop as in one of the following examples:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Using the SOQL query within the for loop reduces the possibility of reaching the limit on heap size. However, this approach can result in more CPU cycles being used with increased DML calls. For more information, see [SOQL For Loops Versus Standard SOQL Queries](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/langCon_apex_loops_for_SOQL.htm#soql_for_loop_desc).

The following example demonstrates a SOQL query for loop that’s used to mass update records. Suppose that you want to change the last name of a contact in records for contacts whose first and last names match specified criteria:

```

```

Instead of using a SOQL query in a for loop, the preferred method of mass updating records is to use [batch Apex](atlas.en-us.apexcode.meta/apexcode/apex_batch.htm), which minimizes the risk of hitting governor limits.

For more information, see [SOQL For Loops](atlas.en-us.apexcode.meta/apexcode/langCon_apex_loops_for_SOQL.htm "SOQL for loops iterate over all of the sObject records returned by a SOQL query.").

## More Efficient SOQL Queries

For best performance, SOQL queries must be selective, particularly for queries inside triggers.

Selective SOQL Query Criteria

-   A query is selective when one of the query filters is on an indexed field and the query filter reduces the resulting number of rows below a system-defined threshold. The performance of the SOQL query improves when two or more filters used in the WHERE clause meet the mentioned conditions.
-   As a best practice, a query is considered selective when a query filter on an indexed field matches less than 10% of the total rows.

Custom Index Considerations for Selective SOQL Queries

-   The following fields are indexed by default.
    -   Primary keys (Id, Name, and OwnerId fields)
    -   Foreign keys (lookup or master-detail relationship fields)
    -   Audit dates (CreatedDate and SystemModstamp fields)
    -   RecordType fields (indexed for all standard objects that feature them)
    -   Custom fields that are marked as External ID or Unique
-   Fields not indexed by default are automatically indexed when the Salesforce optimizer recognizes that an index can improve performance for frequently run queries.
-   Salesforce Support can add custom indexes on request for customers.
-   A custom index can't be created on these types of fields: multi-select picklists, currency fields in a multicurrency organization, long text fields, some formula fields, and binary fields (fields of type blob, file, or encrypted text.) New data types, typically complex ones, are periodically added to Salesforce, and fields of these types don’t always allow custom indexing.
-   You can’t create custom indexes on formula fields that include invocations of the TEXT function on picklist fields.
-   Typically, a custom index isn’t used in these cases.

    -   The queried values exceed the system-defined threshold.
    -   The filter operator is a negative operator such as NOT EQUAL TO (or !=), NOT CONTAINS, and NOT STARTS WITH.
    -   The CONTAINS operator is used in the filter, and the number of rows to be scanned exceeds 333,333. The CONTAINS operator requires a full scan of the index. This threshold is subject to change.
    -   You’re comparing with an empty value (Name != '').

    However, there are other complex scenarios in which custom indexes can’t be used. Contact your Salesforce representative if your scenario isn't covered by these cases or if you need further assistance with non-selective queries.


Examples of Selective SOQL Queries

To better understand whether a query on a large object is selective or not, let's analyze some queries. For these queries, assume that there are more than 1 million records for the Account sObject. These records include soft-deleted records, that is, deleted records that are still in the Recycle Bin.

Query 1:

```

```

The WHERE clause is on an indexed field (Id). If SELECT COUNT() FROM Account WHERE Id IN (<list of account IDs>) returns fewer records than the selectivity threshold, the index on Id is used. This index is typically used when the list of IDs contains only a few records.

Query 2:

```

```

Since Account is a large object even though Name is indexed (primary key), this filter returns most of the records, making the query non-selective.

Query 3:

```

```

Here we have to see if any filter, when considered individually, is selective. As we saw in the previous example, the first filter isn't selective. So let's focus on the second one. If the count of records returned by SELECT COUNT() FROM Account WHERE CustomField\_\_c = 'ValueA' is lower than the selectivity threshold, and CustomField\_\_c is indexed, the query is selective.

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_agg_fns.htm "Working with SOQL Aggregate Functions")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_single_row.htm "Using SOQL Queries That Return One Record")

## Code Examples

```
Account[] accts = [SELECT Id FROM Account];
```

```apex
// Use this format if you are not executing DML statements 
// within the for loop
for (Account a : [SELECT Id, Name FROM Account 
                  WHERE Name LIKE 'Acme%']) {
    // Your code without DML statements here
}

// Use this format for efficiency if you are executing DML statements 
// within the for loop
for (List<Account> accts : [SELECT Id, Name FROM Account
                            WHERE Name LIKE 'Acme%']) {
    for (Account a : accts) {
    // Your code here
    }
    update accts;
}
```

```apex
public void massUpdate() {
    for (List<Contact> contacts:
      [SELECT FirstName, LastName FROM Contact]) {
        for(Contact c : contacts) {
            if (c.FirstName == 'Barbara' &&
              c.LastName == 'Gordon') {
                c.LastName = 'Wayne';
            }
        }
        update contacts;
    }
}
```

```
SELECT Id FROM Account WHERE Id IN (<list of account IDs>)
```

```
SELECT Id FROM Account WHERE Name != ''
```

## Related Topics

- batch Apex (atlas.en-us.apexcode.meta/apexcode/apex_batch.htm)
- SOQL For Loops (atlas.en-us.apexcode.meta/apexcode/langCon_apex_loops_for_SOQL.htm)
- ← Previous (atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_agg_fns.htm)
- Next → (atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_single_row.htm)
