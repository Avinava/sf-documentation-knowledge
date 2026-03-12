---
title: "executeListView()"
domain: api
topic: executelistview
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.272Z
estimatedTokens: 313
keywords: [executeListView, Executes, view’s, SOQL, query, retrieve, data, labels, actions, view, Usage, Sample, Code—Java, Arguments]
---

# executeListView()

> Executes a list view’s SOQL query to retrieve data, labels, and actions
   from a list view.

# executeListView()

Executes a list view’s SOQL query to retrieve data, labels, and actions from a list view.

## Syntax

```

```

## Usage

The executeListView() call takes an [ExecuteListViewRequest](atlas.en-us.api.meta/api/sforce_api_calls_executelistviewrequest.htm#sforce_api_calls_executelistviewrequest "Use the ExecuteListViewRequest object with executeListView() to retrieve data, labels, and actions from a list view.") object, executes the SOQL query for the list view, and returns the resulting data and presentation information in an [ExecuteListViewResult](atlas.en-us.api.meta/api/sforce_api_calls_executelistviewresult.htm#sforce_api_calls_executelistviewresult "Contains list view data that you retrieve programmatically.") object. This call is available in API version 32.0 and later.

## Sample Code—Java

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| request | ExecuteListViewRequest | An object that specifies the list view and the limit, offset, and ordering of the results. |

## Response

An [ExecuteListViewResult](atlas.en-us.api.meta/api/sforce_api_calls_executelistviewresult.htm#sforce_api_calls_executelistviewresult "Contains list view data that you retrieve programmatically.") object.

## Code Examples

```
ExecuteListViewResult result = connection.executeListView(ExecuteListViewResult request);
```

```apex
private void example(ApiProtocol protocol, AppVersion version) throws Exception {

        // Get the list results via the list view API
        EnterpriseConnection connection = makeClient(getUserUtil().getUserWithModifyAllData(), AppVersion.VERSION_190,
                getName());
        ExecuteListViewRequest request = new ExecuteListViewRequest();
        request.setSobjectType("Account");
        request.setDeveloperNameOrId(listViews[0].getId());
        request.setLimit(50000);

        com.sforce.soap.enterprise.ExecuteListViewResult result = connection.executeListView(request);
    }
```

## Related Topics

- ExecuteListViewRequest (atlas.en-us.api.meta/api/sforce_api_calls_executelistviewrequest.htm)
- ExecuteListViewResult (atlas.en-us.api.meta/api/sforce_api_calls_executelistviewresult.htm)
