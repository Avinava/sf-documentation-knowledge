---
title: "describeSearchLayouts()"
domain: api
topic: describesearchlayouts
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:57.127Z
estimatedTokens: 356
keywords: [describeSearchLayouts, Retrieves, search, result, layout, configuration, objects, Usage, Sample, Arguments, Faults]
---

# describeSearchLayouts()

> Retrieves the search result layout configuration for one or more objects.

# describeSearchLayouts()

Retrieves the search result layout configuration for one or more objects.

## Syntax

```

```

## Usage

Use [describeSearchLayouts()](#sforce_api_calls_describesearchlayout "Retrieves the search result layout configuration for one or more objects.") to retrieve search layout information for one or more objects. This call is handy when you want to create a custom search results page with the same layout settings as in Salesforce.

## Sample

This sample shows how to retrieve the search result layout information for a list of objects.

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| sObjectType | string[] | The list of objects you want to obtain search result layout configuration for. For example, if the object is a person account, specify Account, or if it is a person contact, specify Contact. The specified values must be valid objects in your organization. For a complete list of standard objects, see Standard Objects. |

## Response

[DescribeSearchLayoutResult](atlas.en-us.api.meta/api/sforce_api_calls_describesearchlayoutresult.htm "The describeSearchLayouts() call returns an array of DescribeSearchLayoutResult objects.")

## Faults

[InvalidSObjectFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#i1421599)

[UnexpectedErrorFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#i1421680)

## Code Examples

```
DescribeSearchLayoutResult[] = binding.describeSearchLayouts(string sObjectType[]);
```

```apex
public void describeSearchLayoutSample(String[] sObjectTypes) {
        try {
            // Get the search layout of Account and Group
            DescribeSearchLayoutResult[] searchLayoutResults = connection.describeSearchLayouts(sObjectTypes);
            // Iterate through the results and display the label of each column
            for (int i = 0; i < sObjectTypes.length; i += 1) {
                String sObjectType = sObjectTypes[i];
                DescribeSearchLayoutResult result = searchLayoutResults[i];
                System.out.println("Top label for search results for " + sObjectType + " is " + result.getLabel() + " and should display " + result.getLimitRows() + " rows");
                System.out.println("Column labels for search results for " + sObjectType + " are: ");
                for (DescribeColumn column : result.getSearchColumns()) {
                    System.out.println(column.getLabel());
                }
            }
        } catch (ConnectionException ce) {
            ce.printStackTrace();
        }
    }
```

## Related Topics

- DescribeSearchLayoutResult[] (atlas.en-us.api.meta/api/sforce_api_calls_describesearchlayoutresult.htm)
- DescribeSearchLayoutResult (atlas.en-us.api.meta/api/sforce_api_calls_describesearchlayoutresult.htm)
- InvalidSObjectFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- UnexpectedErrorFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
