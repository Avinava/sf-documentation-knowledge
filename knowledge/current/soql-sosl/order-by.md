---
title: "ORDER BY"
domain: soql-sosl
topic: order-by
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:19.783Z
estimatedTokens: 850
keywords: [ORDER, clause, SELECT, statement, SOQL, query, control, results, alphabetically, beginning, records, display, empty]
---

# ORDER BY

> Use the optional ORDER BY clause in the SELECT statement of a SOQL query to control the order of the
		query results, such as alphabetically beginning with z. If records are null, you can use
			ORDER BY to display the empty records first or
		last.

# ORDER BY

Use the optional ORDER BY clause in the SELECT statement of a SOQL query to control the order of the query results, such as alphabetically beginning with z. If records are null, you can use ORDER BY to display the empty records first or last.

```

```

| Syntax | Description |
| --- | --- |
| ASC or DESC | Specifies whether the results are ordered in ascending (ASC) or descending (DESC) order. Default order is ascending. |
| NULLS FIRST or NULLS LAST | Orders null records at the beginning (NULLS FIRST) or end (NULLS LAST) of the results. By default, null values are sorted first. |

There’s no guarantee of the order of results unless you use an ORDER BY clause in a query.

Even using ORDER BY, the order of results can vary if there are duplicate values for the fields that you’re using in the ORDER BY clause. For example, if there are multiple Account records with the same Industry, the order of the results for this query can vary.

```

```

To avoid this issue, add the Id, or any other field that’s unique in the results, to the ORDER BY clause. For example:

```

```

This example returns the same data in descending order.

```

```

This example query returns a query result with Account records in alphabetical order by first name, sorted in descending order, with accounts that have null names appearing last.

```

```

These factors affect results returned with ORDER BY:

-   ORDER BY is compatible with relationship query syntax.
-   Multiple column sorting is supported by listing more than one fieldExpression clause.
-   Relationship queries with foreign key values in an ORDER BY clause behave differently depending on the version of the Lightning Platform API. In an ORDER BY clause, the record is returned even if the foreign key value in a record is null.

    ```

    ```

    Any case record for which AccountId is empty is returned.
-   The sort order depends on your user locale setting. For English locales, SOQL uses the UTF-8 values of the uppercase character to create a sort order. In other words, sorting for English locales is case insensitive.

    For non-English locales, the order is based on the [Default Unicode Collation Element Table](http://userguide.icu-project.org/collation) (DUCET).


These limitations apply to data types when you use ORDER BY:

-   These data types aren’t supported: multi-select picklist, rich text area, long text area, encrypted (if enabled), and data category group reference (if Salesforce Knowledge is enabled).
-   All other data types are supported, with these caveats.
    -   Corporate currency always sorts by using corporate currency value, if available.
    -   phone data doesn’t include any special formatting when sorting. For example, non-numeric characters such as dash or parentheses are included in the sorting.
    -   picklist sorting is defined by the picklist sort determined during setup.
-   If you use ORDER BY to sort on a relationship field which can contain a NULL, the NULLS FIRST and NULLS LAST expressions aren’t supported. For example, if you have a contact record that’s not associated with an account, the Contact.AccountId is NULL. If you issue this SELECT statement, NULL values are still returned at the top: SELECT Id, Email, AccountId FROM Contact ORDER BY AccountId NULLS LAST.

You can use ORDER BY with the optional LIMIT qualifier in a SELECT statement.

```

```

## Code Examples

```
[ORDER BY fieldOrderByList {ASC|DESC} [NULLS {FIRST|LAST}] ]
```

```
SELECT Name, Industry FROM Account ORDER BY Industry
```

```
SELECT Name, Industry FROM Account ORDER BY Industry, Id
```

```
SELECT Name, Industry FROM Account ORDER BY Industry DESC, Id
```

```
SELECT Name
FROM Account
ORDER BY Name DESC NULLS LAST
```
