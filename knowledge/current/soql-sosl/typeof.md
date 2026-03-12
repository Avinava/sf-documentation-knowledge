---
title: "TYPEOF"
domain: soql-sosl
topic: typeof
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:19.805Z
estimatedTokens: 1571
keywords: [TYPEOF, clause, SELECT, statement, SOQL, query, you’re, querying, data, polymorphic, relationships, expression, depend, runtime]
---

# TYPEOF

> TYPEOF is an optional clause that can be used in a
			SELECT statement of a SOQL query when you’re querying
		data that contains polymorphic relationships. A TYPEOF
		expression specifies a set of fields to select that depend on the runtime type of the
		polymorphic reference.

# TYPEOF

TYPEOF is an optional clause that can be used in a SELECT statement of a SOQL query when you’re querying data that contains polymorphic relationships. A TYPEOF expression specifies a set of fields to select that depend on the runtime type of the polymorphic reference.

TYPEOF is available in API version 46.0 and later. It is also available in earlier versions as part of a Developer Preview of the SOQL Polymorphism feature.

```

```

If you need to query multiple polymorphic relationship fields, you can use more than one TYPEOF expression in a single SELECT statement.

You can provide as many WHEN clauses as needed, one per object type. The ELSE clause is optional and used if the object type for the polymorphic relationship field in the current record doesn’t match any of the object types in the provided WHEN clauses. The syntax specific to TYPEOF is as follows.

| Syntax | Description |
| --- | --- |
| typeOfField | A polymorphic relationship field in objectType or a polymorphic field in a parent of objectType that can reference multiple object types. typeOfField cannot reference a relationship field that is also referenced in the fieldList of a SELECT statement. |
| whenObjectType | An object type for the given WHEN clause. When the SELECT statement runs, each object type associated with the polymorphic relationship field specified in the typeOfField expression is checked for a matching object type in a WHEN clause. |
| whenFieldList | A list of one or more fields, separated by commas, that you want to retrieve from the specified whenObjectType. These are fields in the referenced object type or paths to related object fields, not fields in the primary object type for the SELECT statement. |
| elseFieldList | A list of one or more fields, separated by commas, that you want to retrieve if none of the WHEN clauses match the object type associated with the polymorphic relationship field specified in typeOfField. This list may only contain fields valid for the Name object type, or paths to related object fields in Name. |

Note the following considerations for using TYPEOF:

-   TYPEOF can’t be used with a relationship field whose namePointing attribute is false.
-   TYPEOF can’t be used with a relationship field whose relationshipName attribute is false.
-   TYPEOF is only allowed in the SELECT clause of a query. You can filter on the object type of a polymorphic relationship using the Type qualifier in a WHERE clause. For details, see [Filter on Polymorphic Relationship Fields](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_filtering_polymorphic_relationships.htm "You can search polymorphic relationship fields on a SOQL query. A polymorphic relationship is one where the current object can be one of several object types.").
-   TYPEOF isn’t allowed in queries that don’t return objects, such as [COUNT()](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_agg_functions.htm "Use aggregate functions in a GROUP BY clause in SOQL queries to generate reports for analysis. Aggregate functions include AVG(), COUNT(), MIN(), MAX(), SUM(), and more.") .
-   TYPEOF can’t be used in SOQL queries that are the basis of [Streaming API PushTopics](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_streaming.meta/api_streaming/pushtopic_events_intro.htm).
-   TYPEOF can’t be used in SOQL used in Bulk API.
-   TYPEOF expressions can’t be nested. For example, you can’t use TYPEOF inside the WHEN clause of another TYPEOF expression.
-   TYPEOF isn’t allowed in the SELECT clause of a [semi-join query](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_comparisonoperators.htm#semijoin_and_antijoin). You can use TYPEOF in the SELECT clause of an outer query that contains semi-join queries. The following example is not valid because TYPEOF is used in the semi-join query:

    ```

    ```

    The following example is valid because TYPEOF is only used in the outer SELECT clause:

    ```

    ```

-   TYPEOF can’t be used in queries with functions in the SELECT clause. The following example is not valid because the TYPEOF includes the FORMAT function.

    ```

    ```

    Instead, run the same query without functions to retrieve a list of IDs.

    ```

    ```

    Then, run a second query with functions on the resulting ID list.

    ```

    ```

-   TYPEOF can’t be used in queries with [GROUP BY](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_groupby.htm "You can use the GROUP BY option in a SOQL query to avoid iterating through individual query results. That is, you specify a group of records instead of processing many individual records."), [GROUP BY ROLLUP](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_groupby_rollup.htm "Use the GROUP BY ROLLUP optional clause in a SOQL query to add subtotals for aggregated data in query results. This action enables the query to calculate subtotals so that you don’t have to maintain that logic in your code."), [GROUP BY CUBE](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_groupby_cube.htm "Use the GROUP BY CUBE clause in a SOQL query to add subtotals for all combinations of a grouped field in the query results. This action is useful for compiling cross-tabular reports of data. For example, you can create a cross-tabular query to calculate a sum, an average, or another aggregate function and then group the results by two sets of values: one horizontally, the other, vertically."), and [HAVING](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_having.htm "HAVING is an optional clause that can be used in a SOQL query to filter results that aggregate functions return.").

The following example selects specific fields depending on whether the What field of an Event references an Account or Opportunity.

```

```

See [Understanding Relationship Fields and Polymorphic Fields](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_relationships_and_polymorph_keys.htm#sforce_api_calls_soql_relationships_and_polymorph_keys "In a polymorphic relationship, the referenced object of the relationship can be one of several different types of object.") for details on polymorphic relationships, and more examples of TYPEOF.

## Code Examples

```
[TYPEOF typeOfField
        {WHEN whenObjectType THEN whenFieldList}[...]
        [ELSE elseFieldList]
    END][...]
```

```
SELECT Name FROM Account
WHERE CreatedById IN
    (
    SELECT 
        TYPEOF Owner
            WHEN User THEN Id
            WHEN Group THEN CreatedById
        END
    FROM CASE
    )
```

```
SELECT 
    TYPEOF What
        WHEN Account THEN Phone
        ELSE Name
    END
FROM Event
WHERE CreatedById IN
    (
    SELECT CreatedById
    FROM Case
    )
```

```
SELECT
 TYPEOF What
  WHEN Account THEN Id, FORMAT(LastModifiedDate) LastModifiedDate__f
  WHEN Opportunity THEN Id
 END
FROM Task
```

```
SELECT
    TYPEOF What
        WHEN Account THEN Id, LastModifiedDate
        WHEN Opportunity THEN Id
    END
FROM Task
```

## Related Topics

- Filter on Polymorphic Relationship
						Fields (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_filtering_polymorphic_relationships.htm)
- COUNT() (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_agg_functions.htm)
- semi-join query (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_comparisonoperators.htm)
- GROUP BY (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_groupby.htm)
- GROUP BY ROLLUP (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_groupby_rollup.htm)
- GROUP BY
								CUBE (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_groupby_cube.htm)
- HAVING (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_having.htm)
- Understanding Relationship Fields and Polymorphic Fields (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_relationships_and_polymorph_keys.htm)
