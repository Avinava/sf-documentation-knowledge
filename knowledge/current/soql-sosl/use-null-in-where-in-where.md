---
title: "Use  null in WHERE in WHERE"
domain: soql-sosl
topic: use-null-in-where-in-where
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:19.543Z
estimatedTokens: 286
keywords: [search, keyword, SOQL, queries]
---

# Use  null in WHERE in WHERE

> You can search for null values by using the null
		keyword in SOQL queries.

# Use null in WHERE in WHERE

You can search for null values by using the null keyword in SOQL queries.

This example query returns the account IDs of all events with a non-null activity date.

```

```

If you run a query on a boolean field, null matches FALSE values. For example, if Test\_c is a boolean field, then the following query returns all the account records where Test\_c is false:

```

```

The clause WHERE Test\_c = null is equivalent to WHERE Test\_c = false. The clause WHERE Test\_c != null is equivalent to WHERE Test\_c = true.

The WHERE clause behaves in two different ways, depending on the version, when handling null values in a parent field for a relationship query. In a WHERE clause that checks for a value in a parent field, the record is returned even if the parent does not exist.

```

```

Case record Id values are returned.

#### See Also

-   [null Values in Lookup Relationships and Outer Joins](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_relationships_lookup.htm "Relationship SOQL queries return records, even if the relevant foreign key field has a null value, as with an outer join.")

## Code Examples

```
SELECT AccountId
FROM Event
WHERE ActivityDate != null
```

```
SELECT Id, Name Test_c
FROM Account
WHERE Test_c = null
```

```
SELECT Id
FROM Case
WHERE Contact.LastName = null
```

## Related Topics

- null Values in Lookup Relationships and Outer Joins (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_relationships_lookup.htm)
