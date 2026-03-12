---
title: "Adding SOSL Queries to Unit Tests"
domain: apex-guide
topic: adding-sosl-queries-to-unit-tests
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:34.037Z
estimatedTokens: 522
keywords: [Adding, SOSL, Queries, Unit, Tests, ensure, test, always, behave, predictable, way, any, Salesforce, Search, Language]
---

# Adding SOSL Queries to Unit Tests

> To ensure that test methods always behave in a predictable way, any Salesforce Object
         Search Language (SOSL) query that is added to an Apex test method returns an empty set of
         search results when the test method executes. If you do not want the query to return an
         empty lis

# Adding SOSL Queries to Unit Tests

To ensure that test methods always behave in a predictable way, any Salesforce Object Search Language (SOSL) query that is added to an Apex test method returns an empty set of search results when the test method executes. If you do not want the query to return an empty list of results, you can use the Test.setFixedSearchResults system method to define a list of record IDs that are returned by the search. All SOSL queries that take place later in the test method return the list of record IDs that were specified by the Test.setFixedSearchResults method. Additionally, the test method can call Test.setFixedSearchResults multiple times to define different result sets for different SOSL queries. If you do not call the Test.setFixedSearchResults method in a test method, or if you call this method without specifying a list of record IDs, any SOSL queries that take place later in the test method return an empty list of results.

The list of record IDs specified by the Test.setFixedSearchResults method replaces the results that would normally be returned by the SOSL query if it were not subject to any WHERE or LIMIT clauses. If these clauses exist in the SOSL query, they are applied to the list of fixed search results. For example:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

SOSL queries for ContentDocument (File) or ContentNote (Note) entities require using setFixedSearchResults with ContentVersion IDs to remain consistent with how Salesforce indexes and searches for files and notes.

Although the account record with an ID of 001x0000003G89h may not match the query string in the FIND clause ('test'), the record is passed into the RETURNING clause of the SOSL statement. If the record with ID 001x0000003G89h matches the WHERE clause filter, the record is returned. If it does not match the WHERE clause, no record is returned.

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_testing_tools_start_stop_test.htm "Using Limits, startTest , and , and stopTest")

## Code Examples

```apex
@isTest
private class SoslFixedResultsTest1 {

    public static testMethod void testSoslFixedResults() {
       Id [] fixedSearchResults= new Id[1];
       fixedSearchResults[0] = '001x0000003G89h';
       Test.setFixedSearchResults(fixedSearchResults);
       List<List<SObject>> searchList = [FIND 'test' 
                                         IN ALL FIELDS RETURNING 
                                            Account(id, name WHERE name = 'test' LIMIT 1)];
    }
}
```

## Related Topics

- ← Previous (atlas.en-us.apexcode.meta/apexcode/apex_testing_tools_start_stop_test.htm)
