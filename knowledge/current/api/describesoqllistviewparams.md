---
title: "DescribeSoqlListViewParams"
domain: api
topic: describesoqllistviewparams
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.221Z
estimatedTokens: 150
keywords: [DescribeSoqlListViewParams, describeSoqlListViews, retrieve, SOQL, view]
---

# DescribeSoqlListViewParams

> Use the DescribeSoqlListViewParams object with
      describeSoqlListViews() to retrieve the SOQL from a list
    view.

# DescribeSoqlListViewParams

Use the DescribeSoqlListViewParams object with [describeSoqlListViews()](atlas.en-us.api.meta/api/sforce_api_calls_describesoqllistviews.htm#sforce_api_calls_describesoqllistviews "Retrieves the SOQL query and other information about a list view.") to retrieve the SOQL from a list view.

The DescribeSoqlListViewParams object has the following properties:

| Name | Type | Description |
| --- | --- | --- |
| developerNameOrId | string | The list view’s ID or fully qualified developer name. |
| sobjectType | string | The API name of the sObject for the list view. |

## Related Topics

- describeSoqlListViews() (atlas.en-us.api.meta/api/sforce_api_calls_describesoqllistviews.htm)
