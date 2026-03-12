---
title: "ListViewOrderBy"
domain: api
topic: listvieworderby
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.379Z
estimatedTokens: 260
keywords: [ListViewOrderBy, determine, order, records, view, executeListView]
---

# ListViewOrderBy

> To determine the order in which records are returned from a list view, use the
    ListViewOrderBy object with executeListView().

# ListViewOrderBy

To determine the order in which records are returned from a list view, use the ListViewOrderBy object with executeListView().

The ListViewOrderBy object is returned by the [describeSoqlListViews()](atlas.en-us.api.meta/api/sforce_api_calls_describesoqllistviews.htm#sforce_api_calls_describesoqllistviews "Retrieves the SOQL query and other information about a list view.") call, is an optional input to the [executeListView()](atlas.en-us.api.meta/api/sforce_api_calls_executelistview.htm "Executes a list view’s SOQL query to retrieve data, labels, and actions from a list view.") call, and has these properties.

| Name | Type | Description |
| --- | --- | --- |
| fieldNameOrPath | string | The field name or SOQL path of the field on which to sort the records. |
| nullsPosition | orderByNullsPosition | An enumerated value that determines where nulls are sorted in the results:firstlast |
| sortDirection | orderByDirection | An enumerated value that determines the sort order of the results:ascendingdescending |

## Related Topics

- describeSoqlListViews() (atlas.en-us.api.meta/api/sforce_api_calls_describesoqllistviews.htm)
- executeListView() (atlas.en-us.api.meta/api/sforce_api_calls_executelistview.htm)
