---
title: "DescribeThemeItem"
domain: api
topic: describethemeitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.250Z
estimatedTokens: 261
keywords: [DescribeThemeItem, DescribeThemeResult, array]
---

# DescribeThemeItem

> Returns a DescribeThemeResult object, which contains an array of DescribeThemeItem
  values.

# DescribeThemeItem

Returns a DescribeThemeResult object, which contains an array of DescribeThemeItem values.

The [describeTheme()](atlas.en-us.api.meta/api/sforce_api_calls_describetheme.htm "Returns information about themes available to the current logged-in user.") and [describeGlobalTheme()](atlas.en-us.api.meta/api/sforce_api_calls_describeglobaltheme.htm "Returns information about both objects and themes available to the current logged-in user.") calls return [DescribeThemeResult](atlas.en-us.api.meta/api/sforce_api_calls_describetheme_describethemeresult.htm "Returns a DescribeThemeResult object."), which contains an array of DescribeThemeItem values. Each DescribeThemeItem contains an array of colors and icons used for themes, and the name of the object the theme information applies to.

| Name | Type | Description |
| --- | --- | --- |
| colors | DescribeColor[] | Array of colors. |
| icons | DescribeIcon[] | Array of icons. |
| name | string | Name of the object that the theme colors and icons are associated with. |

## Related Topics

- describeTheme() (atlas.en-us.api.meta/api/sforce_api_calls_describetheme.htm)
- describeGlobalTheme() (atlas.en-us.api.meta/api/sforce_api_calls_describeglobaltheme.htm)
- DescribeThemeResult (atlas.en-us.api.meta/api/sforce_api_calls_describetheme_describethemeresult.htm)
- DescribeColor (atlas.en-us.api.meta/api/sforce_api_calls_describecolor.htm)
- DescribeIcon (atlas.en-us.api.meta/api/sforce_api_calls_describeicon.htm)
