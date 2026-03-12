---
title: "toLabel()"
domain: soql-sosl
topic: tolabel
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:19.794Z
estimatedTokens: 597
keywords: [toLabel, Translate, SOQL, query, results, language, user, submits, function]
---

# toLabel()

> Translate SOQL query results into the language of the user who submits the query using
    the toLabel function.

# toLabel()

Translate SOQL query results into the language of the user who submits the query using the toLabel function.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=soql_sosl)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

Any organization can use the toLabel() function.

toLabel uses the following syntax:

```

```

Use this function to return translated search results on:

-   Regular, multiselect, division, or currency code picklist fields, whose values are returned by the relevant describe API call.
-   Data category group and data category unique name fields.
-   Recordtype names.
-   Object History. HISTORY is supported on a limited basis. When a tracked field changes, the clause SELECT toLabel(Field) FROM \*History returns the primary label of the changed field or the existing translated label. OldValue and NewValue fields in history objects also support the toLabel method, but the query returns translated values for only tracked changes on supported field types.

For example:

```

```

The returned records are translated into the language of the user who issued the query.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=soql_sosl)

#### Note

You can’t filter on the translated name value from a record type. Always filter on the master value or the ID of the object for record types.

toLabel() supports aliasing, which is required when the query includes the same field multiple times. For example:

```

```

You can use the toLabel() method to filter records using a translated picklist value. For example:

```

```

The query returns lead records with a picklist value for Status equal to 'le Draft.' The comparison is made against the value for the user’s language. If no translation is available for the picklist, the comparison is made against the master values.

The following limitations apply to translated picklist values:

-   The LIKE operator can only query on the label of the picklist, not on its API name.
-   You can’t use the toLabel() function with the operator ORDER BY. SOQL always uses the picklist’s defined order.
-   You can’t use the toLabel()function in a WHERE clause for division or currency ISO code picklists.

## Code Examples

```
toLabel(object.field)
```

```
SELECT Company, toLabel(Recordtype.Name) FROM Lead
```

```
SELECT Company, Status, toLabel(Status) translatedStatus FROM Lead
```

```
SELECT Company, toLabel(Status)
FROM Lead
WHERE toLabel(Status) = 'le Draft'
```
