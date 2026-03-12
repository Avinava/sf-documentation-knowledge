---
title: "ListViewColumn"
domain: api
topic: listviewcolumn
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.366Z
estimatedTokens: 532
keywords: [ListViewColumn, metadata, view, column]
---

# ListViewColumn

> Contains metadata about a single list view column.

# ListViewColumn

Contains metadata about a single list view column.

The ListViewColumn object is returned by the [describeSoqlListViews()](atlas.en-us.api.meta/api/sforce_api_calls_describesoqllistviews.htm#sforce_api_calls_describesoqllistviews "Retrieves the SOQL query and other information about a list view.") and [executeListView()](atlas.en-us.api.meta/api/sforce_api_calls_executelistview.htm#sforce_api_calls_executelistview "Executes a list view’s SOQL query to retrieve data, labels, and actions from a list view.") calls. ListViewColumn has these properties.

| Name | Type | Description |
| --- | --- | --- |
| ascendingLabel | string | The localized type-specific label for sorting the column in ascending order. For example: “A-Z” for a text field, or “Low to High” for a numeric field. Set to null if the column isn’t sortable. |
| descendingLabel | string | The localized type-specific label for sorting the column in ascending order. For example: “Z-A” for a text field, or “High to Low” for a numeric field. Set to null if the column isn’t sortable. |
| fieldNameOrPath | string | The field name or SOQL field path for the column. |
| hidden | boolean | If true, specifies that the column isn’t displayed, and is present only to support the display of other columns or other client-side logic. |
| label | string | The localized display label for the column. |
| searchable | boolean | Whether the column is searchable. |
| selectListItem | string | The SOQL SELECT item for the column. The item can differ from the field name or path, due to display formatting (for example, toLabel for picklists). |
| sortDirection | orderByDirection | An enumerated value, one of the following if the column is sortable:ascendingdescendingSet to null if the column isn’t sortable. |
| sortIndex | int | The zero-based index that indicates the column’s position within a multilevel sort, or null if the records aren’t sorted by the column. |
| sortable | boolean | Whether the column is sortable, in which case it can be referenced in the ExecuteListView orderBy parameter. |
| type | FieldType | The column data type. |

## Related Topics

- describeSoqlListViews() (atlas.en-us.api.meta/api/sforce_api_calls_describesoqllistviews.htm)
- executeListView() (atlas.en-us.api.meta/api/sforce_api_calls_executelistview.htm)
