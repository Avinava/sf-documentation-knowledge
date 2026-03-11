---
title: "Using Apex Variables in SOQL and SOSL Queries"
domain: apex-guide
topic: using-apex-variables-in-soql-and-sosl-queries
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:43:47.984Z
keywords: [Apex, Variables, SOQL, SOSL, Queries, Note]
---

# Using Apex Variables in SOQL and SOSL Queries

# Using Apex Variables in SOQL and SOSL Queries

SOQL and SOSL statements in Apex can reference Apex code variables and expressions if they’re preceded by a colon (:). This use of a local code variable within a SOQL or SOSL statement is called a bind. The Apex parser first evaluates the local variable in code context before executing the SOQL or SOSL statement. Bind expressions can be used as:

-   The search string in FIND clauses.
-   The filter literals in WHERE clauses.
-   The value of the IN or NOT IN operator in WHERE clauses, allowing filtering on a dynamic set of values. Note that this is of particular use with a list of IDs or Strings, though it works with lists of any type.
-   The division names in WITH DIVISION clauses.
-   The numeric value in LIMIT clauses.
-   The numeric value in OFFSET clauses.

For example:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Apex bind variables aren’t supported for the units parameter in the DISTANCE function. This query doesn’t work.

```

```

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_polymorphic_relationships.htm "Working with Polymorphic Relationships in SOQL Queries")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_query_all_rows.htm "Querying All Records with a SOQL Statement")