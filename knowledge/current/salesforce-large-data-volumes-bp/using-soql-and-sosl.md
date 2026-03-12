---
title: "Using SOQL and SOSL"
domain: salesforce-large-data-volumes-bp
topic: using-soql-and-sosl
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:42.042Z
estimatedTokens: 947
keywords: [SOQL, SOSL, query, equivalent, SELECT, SQL, statement, programmatic, way, performing, text-based, search]
---

# Using SOQL and SOSL

> A SOQL query is the equivalent of a SELECT SQL statement, and a SOSL query
is a programmatic way of performing a text-based search.

# Using SOQL and SOSL

A SOQL query is the equivalent of a SELECT SQL statement, and a SOSL query is a programmatic way of performing a text-based search.

|  | SOQL | SOSL |
| --- | --- | --- |
| Executes with | Database | Search indexes |
| Uses the | query() call | search() call |

Use SOQL when:

-   You know in which objects or fields the data resides.
-   You want to:
    -   Retrieve data from a single object or from multiple objects that are related to one another
    -   Count the number of records that meet specified criteria
    -   Sort results as part of the query
    -   Retrieve data from number, date, or checkbox fields

Use SOSL when:

-   You don’t know in which object or field the data resides, and you want to find it in the most efficient way possible.
-   You want to:
    -   Retrieve multiple objects and fields efficiently, and the objects might or might not be related to one another
    -   Retrieve data for a particular division in an organization using the divisions feature, and you want to find it in the most efficient way possible

Consider the following when using SOQL or SOSL.

-   Both SOQL WHERE filters and SOSL search queries can specify text you should look for. When a given search can use either language, SOSL is generally faster than SOQL if the search expression uses a CONTAINS term.
-   SOSL can tokenize multiple terms within a field (for example, multiple words separated by spaces) and builds a search index off this. If you’re searching for a specific distinct term that you know exists within a field, you might find SOSL is faster than SOQL for these searches. For example, you might use SOSL if you were searching for “John” against fields that contained values like “Paul and John Company”.
-   In some cases, when multiple WHERE filters are being used in SOQL, indexes can’t be used even though the fields in the WHERE clause can be indexed. In this situation, decompose the single query into multiple queries, each of which should have one WHERE filter, and then combine the results.
-   Executing a query with a WHERE filter that has null values for picklists or foreign key fields doesn’t use the index, and should be avoided.

    For example, the following customer query performs poorly.

    ```

    ```

    (Items preceded by colons, such as :contacts, are Apex variables. See [Using Apex Variables in SOQL and SOSL Queries](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/langCon_apex_SOQL_variables.htm "HTML (New Window)") in the Apex Developer Guide.) Nulls in the criteria prevented the use of indexes, and some of the criteria were redundant causing the execution time to increase. Design the data model so that it doesn’t rely on nulls as valid field values.

    The query can be rewritten as:

    ```

    ```

    For the field Category\_\_c, the value Default is substituted for NULL, allowing an index to be used for that field.

    As another example, if dynamic values are being used for the WHERE field, and null values can be passed in, don’t let the query run to determine there are no records; instead, check for nulls and avoid the query, if possible.

    A query to retrieve an account by its foreign key account number can look like this (in pseudo code).

    ```

    ```

    If acctid is null, the entire Account table is scanned row by row until all data is examined.

    It’s better to rewrite the code as:

    ```

    ```

-   When designing custom query-search user interfaces, it’s important to:
    -   Keep the number of fields to be searched or queried to a minimum. Using many fields leads to many permutations, which can be difficult to tune.
    -   Determine whether SOQL, SOSL, or a combination of the two is appropriate for the search.

## Code Examples

```
SELECT Contact__c, Max_Score__c, CategoryName__c, Category__Team_Name__c
FROM Interest__c
WHERE Contact__c != null
    AND Contact__c IN :contacts
    AND override__c != 0
    AND (
            (override__c != null AND override__c > 0)
            OR
            (score__c != null AND score__c > 0)
        )
    AND Category__c != null
    AND (
            (Category_Team_IsActive__c = true OR CategoryName__c IN :selectvalues)
            AND
            (
                Category_Team_Name__c != null
                AND
                Category_Team_Name__c IN :selectTeamValues
            )
        )
```

```
SELECT Contact__c, Max_Score__c, CategoryName__c, Category_Team_Name__c
FROM Interest__c
WHERE Contact__c IN :contacts
    AND (override__c > 0 OR score__c > 0)
    AND Category__c != 'Default'
    AND (
            (Category_Team_IsActive__c = true OR CategoryName__c IN :selectvalues)
            AND
            Category_Team_Name__c IN :selectTeamValues
        )
```

```
SELECT Name
   FROM Account
   WHERE Account_ID___c = :acctid;

if (rows found == 0) return "Not Found"
```

```
if (acctid != null) {
   SELECT Name
      FROM Account
      WHERE Account_Id___c = :acctid
}
else {
    return "Not Found"
}
```
