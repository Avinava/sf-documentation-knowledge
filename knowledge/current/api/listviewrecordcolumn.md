---
title: "ListViewRecordColumn"
domain: api
topic: listviewrecordcolumn
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.384Z
estimatedTokens: 144
keywords: [ListViewRecordColumn, cell, row, view]
---

# ListViewRecordColumn

> Represents a single cell in a row from a list view.

# ListViewRecordColumn

Represents a single cell in a row from a list view.

The ListViewRecordColumn object is one cell (column) of a [ListViewRecord](atlas.en-us.api.meta/api/sforce_api_calls_listviewrecord.htm#sforce_api_calls_listviewrecord "Represents a single row in a list view.") row and has these properties.

| Name | Type | Description |
| --- | --- | --- |
| fieldNameOrPath | string | The field name or SOQL field path for the column. |
| value | string | The contents of the record for a certain column, localized if appropriate, or null if there’s no value. |

## Related Topics

- ListViewRecord (atlas.en-us.api.meta/api/sforce_api_calls_listviewrecord.htm)
