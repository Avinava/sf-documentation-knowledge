---
title: "SOQL with FieldHistoryArchive"
domain: field-history-retention
topic: soql-with-fieldhistoryarchive
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.833Z
estimatedTokens: 432
keywords: [SOQL, FieldHistoryArchive, subset, commands, query, Examples, Allowed, Queries]
---

# SOQL with FieldHistoryArchive

> You can use a subset of SOQL commands to query FieldHistoryArchive.

# SOQL with FieldHistoryArchive

You can use a subset of SOQL commands to query FieldHistoryArchive.

The allowed subset of SOQL commands lets you retrieve archived data for finer-grained processing. You can use the WHERE clause to filter the query by specifying comparison expressions for the FieldHistoryType, ParentId, and CreatedDate fields. You must specify the FieldHistoryType first, followed by either ParentId or CreatedDate. You can use \=, <, \>, <=, or \>=, or IN. on the last field in your query. Any prior fields in your query can only use the \= operator. The !=, LIKE, NOT IN, EXCLUDES, and INCLUDES operators are not valid in any query.

You can use the LIMIT clause to limit the number of returned results. If you don’t use the LIMIT clause, a maximum of 2,000 results are returned. You can retrieve more batches of results by using queryMore().

```

```

## Examples: Allowed Queries

Unfiltered

```

```

Filtered on FieldHistoryType

```

```

Filtered on FieldHistoryType and ParentId

```

```

Filtered on FieldHistoryType, ParentId, and CreatedDate

```

```

Filtered on FieldHistoryType and CreatedDate

```

```

The following table describes the SOQL functions that are available for querying archived fields.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=field_history_retention)

#### Note

All number fields that are returned from a SOQL query of archived objects are in standard notation, not scientific notation as in the number fields in the entity history of standard objects.

| Functionality | Details |
| --- | --- |
| DATE LITERALS | yesterday, last_week, and so on |
| LIMIT |  |
| WHERE | Filtering only on FieldHistoryType, ParentId, and CreatedDate |

## Code Examples

```
SELECT fieldList 
FROM FieldHistoryArchive
[WHERE FieldHistoryType expression [AND ParentId expression[AND CreatedDate expression]] ]
[LIMIT rows]
```

```
SELECT ParentId, FieldHistoryType, Field, Id, NewValue, OldValue 
FROM FieldHistoryArchive
```

```
SELECT ParentId, FieldHistoryType, Field, Id, NewValue, OldValue 
FROM FieldHistoryArchive 
WHERE FieldHistoryType = ‘Account’
```

```
SELECT ParentId, FieldHistoryType, Field, Id, NewValue, OldValue 
FROM FieldHistoryArchive 
WHERE FieldHistoryType = ‘Account’ AND ParentId=’906F00000008unAIAQ’
```

```
SELECT ParentId, FieldHistoryType, Field, Id, NewValue, OldValue 
FROM FieldHistoryArchive 
WHERE FieldHistoryType = ‘Account” AND ParentId=’906F00000008unAIAQ’ AND CreatedDate > LAST_MONTH
```
