---
title: "SOQL and SOSL Queries"
domain: apex-guide
topic: soql-and-sosl-queries
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:47.960Z
keywords: [SOQL, SOSL, Queries, Statements, Note]
---

# SOQL and SOSL Queries

# SOQL and SOSL Queries

You can evaluate Salesforce Object Query Language (SOQL) or Salesforce Object Search Language (SOSL) statements on-the-fly in Apex by surrounding the statement in square brackets.

## SOQL Statements

SOQL statements evaluate to a list of sObjects, a single sObject, or an Integer for count method queries.

For example, you could retrieve a list of accounts that are named Acme:

```

```

From this list, you can access individual elements:

```

```

You can also create new objects from SOQL queries on existing ones. This example creates a new contact for the first account with the number of employees greater than 10.

```

```

The newly created object contains null values for its fields, which must be set.

The count method can be used to return the number of rows returned by a query. The following example returns the total number of contacts with the last name of Weissman:

```

```

You can also operate on the results using standard arithmetic:

```

```

SOQL limits apply when executing SOQL queries. See [Execution Governors and Limits](atlas.en-us.apexcode.meta/apexcode/apex_gov_limits.htm "Because Apex runs in a multitenant environment, the Apex runtime engine strictly enforces limits so that runaway Apex code or processes don’t monopolize shared resources. If some Apex code exceeds a limit, the associated governor issues a runtime exception that can’t be handled.").

For a full description of SOQL query syntax, see the [Salesforce SOQL and SOSL Reference Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/ "HTML (New Window)").

## SOSL Statements

SOSL statements evaluate to a list of lists of sObjects, where each list contains the search results for a particular sObject type. The result lists are always returned in the same order as they were specified in the SOSL query. If a SOSL query doesn’t return any records for a specified sObject type, the search results include an empty list for that sObject.

For example, you can return a list of accounts, contacts, opportunities, and leads that begin with the phrase map:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

The syntax of the FIND clause in Apex differs from the syntax of the FIND clause in SOAP API and REST API:

-   In Apex, the value of the FIND clause is demarcated with single quotes. For example:
    
    ```
    
    ```
    
    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)
    
    #### Note
    
    Apex that is running in system mode ignores field-level security while scanning for a match using IN ALL FIELDS.
    
-   In the API, the value of the FIND clause is demarcated with braces. For example:
    
    ```
    
    ```
    

From searchList, you can create arrays for each object returned:

```

```

SOSL limits apply when executing SOSL queries. See [Execution Governors and Limits](atlas.en-us.apexcode.meta/apexcode/apex_gov_limits.htm "Because Apex runs in a multitenant environment, the Apex runtime engine strictly enforces limits so that runaway Apex code or processes don’t monopolize shared resources. If some Apex code exceeds a limit, the associated governor issues a runtime exception that can’t be handled.").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

The 4,000 characters limit for WHERE clause strings doesn’t apply to SOQL queries in Apex if the WHERE clause includes the IN operator.

For a full description of SOSL query syntax, see the [Salesforce SOQL and SOSL Reference Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/ "HTML (New Window)").

1.  [Working with SOQL and SOSL Query Results](atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_working_with_results.htm)  
    
2.  [Accessing sObject Fields Through Relationships](atlas.en-us.apexcode.meta/apexcode/langCon_apex_SObjects_field_relationships.htm)  
    
3.  [Understanding Foreign Key and Parent-Child Relationship SOQL Queries](atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_foreign_key.htm)  
    
4.  [Working with SOQL Aggregate Functions](atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_agg_fns.htm)  
    Aggregate functions in SOQL, such as SUM() and MAX(), allow you to roll up and summarize your data in a query.
5.  [Working with Very Large SOQL Queries](atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_VLSQ.htm)  
    
6.  [Using SOQL Queries That Return One Record](atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_single_row.htm)  
    SOQL queries can be used to assign a single sObject value when the result list contains only one element.
7.  [Improve Performance by Avoiding Null Values](atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_filtering_nulls.htm)  
    
8.  [Working with Polymorphic Relationships in SOQL Queries](atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_polymorphic_relationships.htm)  
    A polymorphic relationship is a relationship between objects where a referenced object can be one of several different types. For example, the Who relationship field of a Task can be a Contact or a Lead.
9.  [Using Apex Variables in SOQL and SOSL Queries](atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_variables.htm)  
    
10.  [Querying All Records with a SOQL Statement](atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_query_all_rows.htm)