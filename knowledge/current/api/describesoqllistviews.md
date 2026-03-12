---
title: "describeSoqlListViews()"
domain: api
topic: describesoqllistviews
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.228Z
estimatedTokens: 379
keywords: [describeSoqlListViews, Retrieves, SOQL, query, view, Usage, Sample, Code—Java, Arguments, Faults]
---

# describeSoqlListViews()

> Retrieves the SOQL query and other information about a list view.

# describeSoqlListViews()

Retrieves the SOQL query and other information about a list view.

## Syntax

```

```

## Usage

Use the describeSoqlListViews() call to retrieve information about a list view, including the ID, the columns, and the SOQL query. This call is useful if you want to use the SOQL that drives an existing list view in your custom application. This call is available in API version 32.0 and later.

## Sample Code—Java

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| request | DescribeSoqlListViewsRequest | The fully qualified name or the ID of the list view and the object with which the list view is associated. |

## Response

A [DescribeSoqlListViewResult](atlas.en-us.api.meta/api/sforce_api_calls_describesoqllistviewresult.htm#sforce_api_calls_describesoqllistviewresult "Contains one or more DescribeSoqlListView objects, each of which contains information about one or more list views, including the ID, sObject type, columns, and SOQL query of each.") object that contains one or more [DescribeSoqlListView](atlas.en-us.api.meta/api/sforce_api_calls_describesoqllistview.htm#sforce_api_calls_describesoqllistview "Contains information about the specified list view, including the columns, sObject type, and SOQL query.") objects.

## Faults

[InvalidSObjectFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#i1421599)

[UnexpectedErrorFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#i1421680)

## Code Examples

```
connection.describeSoqlListViews(DescribeSoqlListViewsRequest request);
```

```apex
public void example() throws Exception {
         DescribeSoqlListViewsRequest request = createDescribeSoqlListViewsRequest(listViewId, null);
         this.getClient().describeSoqlListViews(request);      
      }
```

## Related Topics

- DescribeSoqlListViewsRequest (atlas.en-us.api.meta/api/sforce_api_calls_describesoqllistviewsrequest.htm)
- DescribeSoqlListViewResult (atlas.en-us.api.meta/api/sforce_api_calls_describesoqllistviewresult.htm)
- DescribeSoqlListView (atlas.en-us.api.meta/api/sforce_api_calls_describesoqllistview.htm)
- InvalidSObjectFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- UnexpectedErrorFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
