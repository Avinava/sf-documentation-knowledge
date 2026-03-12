---
title: "DescribeSearchLayoutResult"
domain: api
topic: describesearchlayoutresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.132Z
estimatedTokens: 360
keywords: [DescribeSearchLayoutResult, describeSearchLayouts, call, array, objects, DescribeColumn]
---

# DescribeSearchLayoutResult

> The describeSearchLayouts() call returns an array of DescribeSearchLayoutResult
  objects.

# DescribeSearchLayoutResult

The describeSearchLayouts() call returns an array of DescribeSearchLayoutResult objects.

Each DescribeSearchLayoutResult object represents the search layout configuration for each object queried for. The DescribeSearchLayoutResult object has the following properties.

| Name | Type | Description |
| --- | --- | --- |
| label | string | The browser title used for the search results page. |
| limitRows | int | The maximum number of rows to be displayed in the first page of search results. This number can be changed by the administrator. |
| searchColumns | DescribeColumn[] | The columns associated with the search results for this object. |

## DescribeColumn

Represents the columns in the search layout configuration for each DescribeSearchLayoutResult object returned by the [describeSearchLayouts()](atlas.en-us.api.meta/api/sforce_api_calls_describesearchlayout.htm "Retrieves the search result layout configuration for one or more objects.") call.

| Name | Type | Description |
| --- | --- | --- |
| field | string | Field reference in relation to the object it belongs to. For example, “Lead.Phone.” |
| format | string | Field data format. For example, “date”. This value can be null. |
| label | string | Display text for this field in the user interface. For example, “Company Phone” or just “Phone.” |
| name | string | Field name. Use this in your SOQL query or code. For example, “Name.” |

## Related Topics

- describeSearchLayouts() (atlas.en-us.api.meta/api/sforce_api_calls_describesearchlayout.htm)
