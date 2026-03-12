---
title: "DescribeColor"
domain: api
topic: describecolor
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:56.990Z
estimatedTokens: 603
keywords: [DescribeColor, color, metadata, tab]
---

# DescribeColor

> DescribeColor contains color metadata information for a tab.

# DescribeColor

DescribeColor contains color metadata information for a tab.

DescribeColor contains color metadata information for a tab. The [describeTabs()](atlas.en-us.api.meta/api/sforce_api_calls_describetabs.htm "Returns information about the Salesforce Classic standard and custom apps available to the logged-in user.") call returns an array of [DescribeTabSetResult](atlas.en-us.api.meta/api/sforce_api_calls_describetabs_describetabsetresult.htm "The describeTabs() call returns an array of DescribeTabSetResult objects.") values. Each DescribeTabSetResult contains an array of [DescribeTab](atlas.en-us.api.meta/api/sforce_api_calls_describetabs_describetabsetresult_describetab.htm "The describeTabs() call returns an array of DescribeTabSetResult objects, of which DescribeTab is a property.") values, and each DescribeTab contains an array of DescribeColor values.

Each DescribeColor is associated with a Salesforce user interface theme. For more information on themes, see [Identifying the Salesforce Style Your Users See](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/pages_styling_salesforce.htm "HTML (New Window)") in the Visualforce Developer’s Guide.

Color information can also be retrieved via the [describeTheme()](atlas.en-us.api.meta/api/sforce_api_calls_describetheme.htm "Returns information about themes available to the current logged-in user.") and [describeGlobalTheme()](atlas.en-us.api.meta/api/sforce_api_calls_describeglobaltheme.htm "Returns information about both objects and themes available to the current logged-in user.") calls. These calls return information on colors used for each object in your organization that can use theme icons and colors.

| Name | Type | Description |
| --- | --- | --- |
| color | string | The color described in web color RGB format—for example, “00FF00”. |
| context | string | The color context, which determines whether the color is the main color (or primary) for the tab. |
| theme | string | The associated theme. Possible values include:theme2—Theme used prior to Spring ’10, called the “Salesforce Classic 2005 user interface theme”theme3—Theme introduced in Spring ’10, called the “Salesforce Classic 2010 user interface theme”theme4—Theme introduced in Winter ’14 for the mobile touchscreen version of Salesforce, and in Winter ’16 for Lightning Experiencecustom—Theme associated with a custom icon |

## Related Topics

- describeTabs() (atlas.en-us.api.meta/api/sforce_api_calls_describetabs.htm)
- DescribeTabSetResult (atlas.en-us.api.meta/api/sforce_api_calls_describetabs_describetabsetresult.htm)
- DescribeTab (atlas.en-us.api.meta/api/sforce_api_calls_describetabs_describetabsetresult_describetab.htm)
- describeTheme() (atlas.en-us.api.meta/api/sforce_api_calls_describetheme.htm)
- describeGlobalTheme() (atlas.en-us.api.meta/api/sforce_api_calls_describeglobaltheme.htm)
