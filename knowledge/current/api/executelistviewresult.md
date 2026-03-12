---
title: "ExecuteListViewResult"
domain: api
topic: executelistviewresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.278Z
estimatedTokens: 230
keywords: [ExecuteListViewResult, view, data, retrieve, programmatically]
---

# ExecuteListViewResult

> Contains list view data that you retrieve programmatically.

# ExecuteListViewResult

Contains list view data that you retrieve programmatically.

To retrieve an executeListViewResult object, use the [executeListView()](atlas.en-us.api.meta/api/sforce_api_calls_executelistview.htm "Executes a list view’s SOQL query to retrieve data, labels, and actions from a list view.") call. The executeListViewResult object has the following properties:

| Name | Type | Description |
| --- | --- | --- |
| columns | ListViewColumn[] | An array of the columns in the list view. |
| developerName | string | The list view’s fully qualified developer name. |
| done | boolean | If true, indicates that all records have been returned. |
| id | ID | The list view’s ID. |
| label | string | The display label of the list view. |
| records | ListViewRecord[] | An array of records that match the list view query. |
| size | int | The number of records that are returned by the list view query. |

## Related Topics

- executeListView() (atlas.en-us.api.meta/api/sforce_api_calls_executelistview.htm)
- ListViewColumn (atlas.en-us.api.meta/api/sforce_api_calls_listviewcolumn.htm)
- ListViewRecord (atlas.en-us.api.meta/api/sforce_api_calls_listviewrecord.htm)
