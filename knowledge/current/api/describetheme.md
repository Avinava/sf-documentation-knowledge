---
title: "describeTheme()"
domain: api
topic: describetheme
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.248Z
estimatedTokens: 525
keywords: [describeTheme, themes, current, logged-in, user, Usage, Sample, Faults]
---

# describeTheme()

> Returns information about themes available to the current logged-in user.

# describeTheme()

Returns information about themes available to the current logged-in user.

## Syntax

```

```

## Usage

Use describeTheme() to get current theme information for a given array of objects. Theme information consists of colors and icons for an object in Salesforce, used for a particular theme. For example, the Merchandise\_\_c object can use the “computer32” icon and a primary tab color of red for the regular Salesforce application theme, and a different set of colors and icons for the mobile touchscreen version of Salesforce.

If you pass null instead of an array of objects, describeTheme() returns theme information for all objects in your organization that use theme colors and icons.

Your client application must be logged in with sufficient access rights to retrieve theme information about your organization’s data. For more information, see [Factors that Affect Data Access](atlas.en-us.api.meta/api/calls.htm).

describeTheme() is available in API version 29.0 and later.

## Sample

This Java sample calls describeTheme() to retrieve theme information for Account and Contact, and then iterates over the retrieved theme information.

```

```

## Response

[DescribeThemeResult](atlas.en-us.api.meta/api/sforce_api_calls_describetheme_describethemeresult.htm "Returns a DescribeThemeResult object.")

## Faults

[UnexpectedErrorFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#i1421680)

#### See Also

-   [DescribeThemeResult](atlas.en-us.api.meta/api/sforce_api_calls_describetheme_describethemeresult.htm "Returns a DescribeThemeResult object.")

-   [DescribeThemeItem](atlas.en-us.api.meta/api/sforce_api_calls_describetheme_describethemeitem.htm "Returns a DescribeThemeResult object, which contains an array of DescribeThemeItem values.")

-   [DescribeColor](atlas.en-us.api.meta/api/sforce_api_calls_describecolor.htm "DescribeColor contains color metadata information for a tab.")

-   [DescribeIcon](atlas.en-us.api.meta/api/sforce_api_calls_describeicon.htm "DescribeIcon contains icon metadata information for a tab.")

## Code Examples

```
DescribeThemeResult = connection.describeTheme(string sObjectType[]);
```

```apex
public static void describeThemeExample() {
    try {
        // Get current themes
        DescribeTheme themeResult = connection.describeTheme(
                                        new String[] { "Account", "Contact" });
        DescribeThemeItem[] themeItems = themeResult.getThemeItems();
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

- DescribeThemeResult (atlas.en-us.api.meta/api/sforce_api_calls_describetheme_describethemeresult.htm)
- Factors that Affect Data Access (atlas.en-us.api.meta/api/calls.htm)
- UnexpectedErrorFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- DescribeThemeItem (atlas.en-us.api.meta/api/sforce_api_calls_describetheme_describethemeitem.htm)
- DescribeColor (atlas.en-us.api.meta/api/sforce_api_calls_describecolor.htm)
- DescribeIcon (atlas.en-us.api.meta/api/sforce_api_calls_describeicon.htm)
