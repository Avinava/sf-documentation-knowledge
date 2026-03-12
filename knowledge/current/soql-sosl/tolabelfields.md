---
title: "toLabel(fields)"
domain: soql-sosl
topic: tolabelfields
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:19.915Z
estimatedTokens: 412
keywords: [toLabel, translate, SOSL, query, results, user’s, language]
---

# toLabel(fields)

> Use toLabel(fields) to translate SOSL query results into the user’s
  language.

# toLabel(fields)

Use toLabel(*fields*) to translate SOSL query results into the user’s language.

Any organization can use the toLabel() method. It’s particularly useful for organizations that enabled the Translation Workbench.

```

```

For example:

```

```

The returned records are translated into the language of the user who issued the query.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=soql_sosl)

#### Note

You can’t filter on the translated name value from a record type. Always filter on the master value or the ID of the object for record types.

You can use the toLabel() method to filter records using a translated picklist value. For example:

```

```

The query returns lead records with a picklist value for Status equal to 'le Draft.' The comparison is made against the value for the user’s language. If no translation is available for the picklist, the comparison is made against the master values.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=soql_sosl)

#### Note

The toLabel() method cannot be used with the [ORDER BY *Clause*](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_sosl_select_order_by_with_limit.htm "You can specify the order in which search results are returned from a SOSL query using the ORDER BY clause. You can also use the clause to display empty records at the beginning or end of the results."). Salesforce always uses the order defined in the picklist, just like reports.

The toLabel function supports aliasing. In addition, aliasing is required when the query includes the same field multiple times. For example:

```

```

## Code Examples

```
toLabel(object.field)
```

```
FIND {Joe} RETURNING Lead(company, toLabel(Recordtype.Name))
```

```
FIND {test} RETURNING Lead(company, toLabel(Status) WHERE toLabel(Status) = 'le Draft' )
```

```
FIND {Joe} RETURNING Lead(company, toLabel(Recordtype.Name) AliasName)
```

## Related Topics

- ORDER BY
     Clause (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_sosl_select_order_by_with_limit.htm)
