---
title: "DescribeThemeResult"
domain: api
topic: describethemeresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.254Z
estimatedTokens: 219
keywords: [DescribeThemeResult]
---

# DescribeThemeResult

> Returns a DescribeThemeResult object.

# DescribeThemeResult

Returns a DescribeThemeResult object.

The [describeTheme()](atlas.en-us.api.meta/api/sforce_api_calls_describetheme.htm "Returns information about themes available to the current logged-in user.") and [describeGlobalTheme()](atlas.en-us.api.meta/api/sforce_api_calls_describeglobaltheme.htm "Returns information about both objects and themes available to the current logged-in user.") calls return DescribeThemeResult, which contains an array of [DescribeThemeItem](atlas.en-us.api.meta/api/sforce_api_calls_describetheme_describethemeitem.htm "Returns a DescribeThemeResult object, which contains an array of DescribeThemeItem values.") values.

| Name | Type | Description |
| --- | --- | --- |
| themes | DescribeThemeItem[] | Array of themes. Theme information is provided for each object in the organization that can use theme icons and colors. |

## Related Topics

- describeTheme() (atlas.en-us.api.meta/api/sforce_api_calls_describetheme.htm)
- describeGlobalTheme() (atlas.en-us.api.meta/api/sforce_api_calls_describeglobaltheme.htm)
- DescribeThemeItem (atlas.en-us.api.meta/api/sforce_api_calls_describetheme_describethemeitem.htm)
