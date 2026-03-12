---
title: "DescribeTab"
domain: api
topic: describetab
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.244Z
estimatedTokens: 424
keywords: [DescribeTab, describeTabs, call, array, DescribeTabSetResult, objects]
---

# DescribeTab

> The describeTabs() call returns an array of
    DescribeTabSetResult objects, of which DescribeTab is a property.

# DescribeTab

The describeTabs() call returns an array of DescribeTabSetResult objects, of which DescribeTab is a property.

A DescribeTab object has these properties.

| Name | Type | Description |
| --- | --- | --- |
| colors | DescribeColor[] | Array of color information used for a tab. This field is available in API version 29.0 and later. |
| custom | boolean | true if this field is a custom tab, false if it’s a standard tab. |
| iconUrl | string | The URL for the main 32x32 pixel icon for a tab. This icon appears next to the heading at the top of most pages. This icon URL corresponds to the 32x32 icon used for the Salesforce Classic 2010 user interface theme. |
| icons | DescribeIcon[] | Array of icon information used for a tab. This field is available in API version 29.0 and later. |
| label | string | The display label for this tab. |
| miniIconUrl | string | The URL for the 16x16 pixel icon that represents a tab. This icon appears in related lists and other locations. This icon URL corresponds to the 16x16 icon used for the current Salesforce theme, introduced in Spring '10. |
| name | string | The API name of the tab. |
| sobjectName | string | The name of the sObject that is primarily displayed on this tab (for tabs that display a particular sObject). For a list of objects, see Standard Objects. |
| url | string | A fully qualified URL for viewing this tab. |

#### See Also

-   [DescribeColor](atlas.en-us.api.meta/api/sforce_api_calls_describecolor.htm "DescribeColor contains color metadata information for a tab.")

-   [DescribeIcon](atlas.en-us.api.meta/api/sforce_api_calls_describeicon.htm "DescribeIcon contains icon metadata information for a tab.")

## Related Topics

- DescribeColor (atlas.en-us.api.meta/api/sforce_api_calls_describecolor.htm)
- DescribeIcon (atlas.en-us.api.meta/api/sforce_api_calls_describeicon.htm)
- sObject (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
