---
title: "describeSearchScopeOrder()"
domain: api
topic: describesearchscopeorder
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:57.135Z
estimatedTokens: 388
keywords: [describeSearchScopeOrder, Retrieves, ordered, objects, user's, search, scope, Usage, Sample, Code—Java, Arguments, Fault]
---

# describeSearchScopeOrder()

> Retrieves an ordered list of the objects in a user's default global search
    scope.

# describeSearchScopeOrder()

Retrieves an ordered list of the objects in a user's default global search scope.

## Syntax

```

```

## Usage

Use [describeSearchScopeOrder()](# "Retrieves an ordered list of the objects in a user's default global search scope.") to retrieve an ordered list of objects in the default global search scope of a logged-in user. Global search tracks the objects the user interacts with and how often and arranges the search results accordingly. Objects used most frequently appear at the top of the list. The returned list reflects the object order in the user’s default search scope, including any pinned objects on the user’s search results page. This call is useful if you want to implement a custom search results page using the optimized global search scope.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api)

#### Note

You must enable Chatter to enable global search.

## Sample Code—Java

This sample shows how to retrieve the global search scope for a user and then iteratively display the name of each object in the scope.

```

```

## Arguments

None.

## Response

An array of [DescribeSearchScopeOrderResult](atlas.en-us.api.meta/api/sforce_api_calls_describesearchscopeorder_describesearchscopeorderresult.htm "Returns an array of DescribeSearchScopeOrderResult objects.") objects

## Fault

[UnexpectedErrorFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#i1421680)

#### See Also

-   [API Call Basics](atlas.en-us.api.meta/api/calls.htm)

## Code Examples

```
DescribeSearchScopeOrderResult[] describeSearchScopeOrderResults = connection.describeSearchScopeOrder();
```

```apex
public void describeSearchScopeOrderSample() { 
  try { 
    //Get the order of objects in search smart scope for the logged-in user
    DescribeSearchScopeOrderResult[] describeSearchScopeOrderResults = 
        connection.describeSearchScopeOrder();
    //Iterate through the results and display the name of each object
    for (int i = 0; i < describeSearchScopeOrderResults.length; i++) {
      System.out.println(describeSearchScopeOrderResults[i].getName());
    }
  } 
  catch(ConnectionException ce) {
    ce.printStackTrace();
  }
}
```

## Related Topics

- DescribeSearchScopeOrderResult[] (atlas.en-us.api.meta/api/sforce_api_calls_describesearchscopeorder_describesearchscopeorderresult.htm)
- DescribeSearchScopeOrderResult (atlas.en-us.api.meta/api/sforce_api_calls_describesearchscopeorder_describesearchscopeorderresult.htm)
- UnexpectedErrorFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- API Call Basics (atlas.en-us.api.meta/api/calls.htm)
