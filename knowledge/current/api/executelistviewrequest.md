---
title: "ExecuteListViewRequest"
domain: api
topic: executelistviewrequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.275Z
estimatedTokens: 157
keywords: [ExecuteListViewRequest, executeListView, retrieve, data, labels, actions, view]
---

# ExecuteListViewRequest

> Use the ExecuteListViewRequest object with executeListView() to retrieve
  data, labels, and actions from a list view.

# ExecuteListViewRequest

Use the ExecuteListViewRequest object with executeListView() to retrieve data, labels, and actions from a list view.

The ExecuteListViewRequest object has the following properties:

| Name | Type | Description |
| --- | --- | --- |
| developerNameOrId | string | The list view’s ID or fully qualified developer name. |
| limit | int | The maximum number of records to return. Default: 25 |
| offset | int | The number of records to skip. Default: 0 |
| orderBy | ListViewOrderBy[] | The order in which to return the records. |
| sobjectType | string | The API name of the sObject for the list view. |

## Related Topics

- ListViewOrderBy (atlas.en-us.api.meta/api/sforce_api_calls_listvieworderby.htm)
