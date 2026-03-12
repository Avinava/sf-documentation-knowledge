---
title: "describeGlobalTheme()"
domain: api
topic: describeglobaltheme
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.041Z
estimatedTokens: 546
keywords: [describeGlobalTheme, objects, themes, current, logged-in, user, Usage, Sample, Faults, DescribeGlobalTheme]
---

# describeGlobalTheme()

> Returns information about both objects and themes available to the current logged-in
        user.

# describeGlobalTheme()

Returns information about both objects and themes available to the current logged-in user.

## Syntax

```

```

## Usage

Use describeGlobalTheme() to get both a list of available objects and theme information about those objects for your organization. describeGlobalTheme() is a combination of [describeGlobal()](atlas.en-us.api.meta/api/sforce_api_calls_describeglobal.htm "Retrieves a list of available objects for your organization's data.") and [describeTheme()](atlas.en-us.api.meta/api/sforce_api_calls_describetheme.htm "Returns information about themes available to the current logged-in user.") combined into a single call.

Your client application must be logged in with sufficient access rights to retrieve theme and object information about your organization’s data. For more information, see [Factors that Affect Data Access](atlas.en-us.api.meta/api/calls.htm).

describeGlobalTheme() is available in API version 29.0 and later.

## Sample

This Java sample calls describeGlobalTheme() and then iterates over the retrieved object and theme information.

```

```

## Response

[DescribeGlobalTheme](atlas.en-us.api.meta/api/sforce_api_calls_describeglobaltheme_describeglobaltheme.htm "Returns a DescribeGlobalTheme object.")

## Faults

[UnexpectedErrorFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#i1421680)

#### See Also

-   [DescribeGlobalTheme](atlas.en-us.api.meta/api/sforce_api_calls_describeglobaltheme_describeglobaltheme.htm "Returns a DescribeGlobalTheme object.")

-   [DescribeThemeResult](atlas.en-us.api.meta/api/sforce_api_calls_describetheme_describethemeresult.htm "Returns a DescribeThemeResult object.")

-   [DescribeThemeItem](atlas.en-us.api.meta/api/sforce_api_calls_describetheme_describethemeitem.htm "Returns a DescribeThemeResult object, which contains an array of DescribeThemeItem values.")

-   [DescribeColor](atlas.en-us.api.meta/api/sforce_api_calls_describecolor.htm "DescribeColor contains color metadata information for a tab.")

-   [DescribeIcon](atlas.en-us.api.meta/api/sforce_api_calls_describeicon.htm "DescribeIcon contains icon metadata information for a tab.")

## Code Examples

```
DescribeGlobalTheme = connection.describeGlobalTheme();
```

```apex
public static void describeGlobalThemeExample() {
    try {
        // Get current theme and object information
        DescribeGlobalTheme globalThemeResult = connection.describeGlobalTheme();
        DescribeGlobalResult globalResult = globalThemeResult.getGlobal();
        DescribeThemeResult globalTheme = globalThemeResult.getTheme();
        // For the themes, get the array of theme items, one per object			  
        DescribeThemeItem[] themeItems = globalTheme.getThemeItems();			  
        for (int i = 0; i < themeItems.length; i++) {
            DescribeThemeItem themeItem = themeItems[i];
            System.out.println("Theme information for object " + themeItem.getName());
            // Get color and icon info for each themeItem
            DescribeColor colors[] = themeItem.getColors();
            System.out.println("    Number of colors: " + colors.length);
            int k;
            for (k = 0; k < colors.length; k++) {
                DescribeColor color = colors[k];
                System.out.println("    For Color #" + k + ":");
                System.out.println("      Web RGB Color: " + color.getColor());
                System.out.println("      Context: " + color.getContext());
                System.out.println("      Theme: " + color.getTheme());
            }
            DescribeIcon icons[] = themeItem.getIcons();
            System.out.println("    Number of icons: " + icons.length);
            for (k = 0; k < icons.length; k++) {
                DescribeIcon icon = icons[k];
                System.out.println("    For Icon #" + k + ":");
                System.out.println("      ContentType: " + icon.getContentType());
                System.out.println("      Height: " + icon.getHeight());
                System.out.println("      Theme: " + icon.getTheme());
                System.out.println("      URL: " + icon.getUrl());
                System.out.println("      Width: " + icon.getWidth());
            }
        }
    } catch (ConnectionException ce) {
        ce.printStackTrace();
    }
}
```

## Related Topics

- DescribeGlobalTheme (atlas.en-us.api.meta/api/sforce_api_calls_describeglobaltheme_describeglobaltheme.htm)
- describeGlobal() (atlas.en-us.api.meta/api/sforce_api_calls_describeglobal.htm)
- describeTheme() (atlas.en-us.api.meta/api/sforce_api_calls_describetheme.htm)
- Factors that Affect Data Access (atlas.en-us.api.meta/api/calls.htm)
- UnexpectedErrorFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- DescribeThemeResult (atlas.en-us.api.meta/api/sforce_api_calls_describetheme_describethemeresult.htm)
- DescribeThemeItem (atlas.en-us.api.meta/api/sforce_api_calls_describetheme_describethemeitem.htm)
- DescribeColor (atlas.en-us.api.meta/api/sforce_api_calls_describecolor.htm)
- DescribeIcon (atlas.en-us.api.meta/api/sforce_api_calls_describeicon.htm)
- describeGlobalTheme() (atlas.en-us.api.meta/api/sforce_api_calls_describeglobaltheme.htm)
