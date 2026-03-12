---
title: "ListViewRecord"
domain: api
topic: listviewrecord
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.382Z
estimatedTokens: 188
keywords: [ListViewRecord, row, view]
---

# ListViewRecord

> Represents a single row in a list view.

# ListViewRecord

Represents a single row in a list view.

The ListViewRecord object is a member of the [ExecuteListViewResult](atlas.en-us.api.meta/api/sforce_api_calls_executelistviewresult.htm#sforce_api_calls_executelistviewresult "Contains list view data that you retrieve programmatically.") object and has these properties.

| Name | Type | Description |
| --- | --- | --- |
| columns | ListViewRecordColumn[] | The columns and their values for the record. The record data columns are returned in the same order as metadata and describe columns. For any data column that’s obtained by using ExecuteListViewResult.getRecords()[0].getColumns[index], the corresponding describe column can be obtained with ExecuteListViewResult.getColumns[index]. |

## Related Topics

- ExecuteListViewResult (atlas.en-us.api.meta/api/sforce_api_calls_executelistviewresult.htm)
- ListViewRecordColumn (atlas.en-us.api.meta/api/sforce_api_calls_listviewrecordcolumn.htm)
