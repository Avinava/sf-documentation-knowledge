---
title: "DescribeColorResult Class"
domain: apex-reference
topic: describecolorresult-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:23.590Z
estimatedTokens: 689
namespace: Schema
keywords: [DescribeColorResult, color, metadata, tab, Usage, getColor, getContext, getTheme]
---

# DescribeColorResult Class

> Contains color metadata information for
a tab.

**Namespace:** `Schema`

# DescribeColorResult Class

Contains color metadata information for a tab.

## Namespace

[Schema](atlas.en-us.apexref.meta/apexref/apex_namespace_Schema.htm "The Schema namespace provides classes and methods for schema metadata information.")

## Usage

The getColors method of the Schema.DescribeTabResult class returns a list of Schema.DescribeColorResult objects that describe colors used in a tab.

The methods in the Schema.DescribeColorResult class can be called using their property counterparts. For each method starting with get, you can omit the get prefix and the ending parentheses () to call the property counterpart. For example, colorResultObj.color is equivalent to colorResultObj.getColor().

## Example

This sample shows how to get the color information in the Sales app for the first tab’s first color.

```

```

## DescribeColorResult Methods

The following are methods for DescribeColorResult. All are instance methods.

-   **[getColor()](atlas.en-us.apexref.meta/apexref/apex_class_schema_describecolorresult.htm#apex_Schema_DescribeColorResult_getColor)**
    Returns the Web RGB color code, such as 00FF00.
-   **[getContext()](atlas.en-us.apexref.meta/apexref/apex_class_schema_describecolorresult.htm#apex_Schema_DescribeColorResult_getContext)**
    Returns the color context. The context determines whether the color is the main color for the tab or not.
-   **[getTheme()](atlas.en-us.apexref.meta/apexref/apex_class_schema_describecolorresult.htm#apex_Schema_DescribeColorResult_getTheme)**
    Returns the color theme.

### getColor()

Returns the Web RGB color code, such as 00FF00.

#### Signature

public String getColor()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getContext()

Returns the color context. The context determines whether the color is the main color for the tab or not.

#### Signature

public String getContext()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getTheme()

Returns the color theme.

#### Signature

public String getTheme()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Possible theme values include theme3, theme4, and custom.

-   theme3 is the Salesforce theme introduced during Spring ‘10.
-   theme4 is the Salesforce theme introduced in Winter ‘14 for the mobile touchscreen version of Salesforce.
-   custom is the theme name associated with a custom icon.

## Code Examples

```apex
// Get tab set describes for each app
List<Schema.DescribeTabSetResult> tabSetDesc = Schema.DescribeTabs();

// Iterate through each tab set describe for each app and display the info
for(Schema.DescribeTabSetResult tsr : tabSetDesc) {            
    // Display tab info for the Sales app
    if (tsr.getLabel() == 'Sales') {
        // Get color information for the first tab
        List<Schema.DescribeColorResult> colorDesc = tsr.getTabs()[0].getColors();
        // Display the icon color, theme, and context of the first color returned
        System.debug('Color: ' + colorDesc[0].getColor());
        System.debug('Theme: ' + colorDesc[0].getTheme());
        System.debug('Context: ' + colorDesc[0].getContext());
    }            
}

// Example debug statement output
// DEBUG|Color: 1797C0
// DEBUG|Theme: theme4
// DEBUG|Context: primary
```

## Related Topics

- Schema (atlas.en-us.apexref.meta/apexref/apex_namespace_Schema.htm)
- getColor() (atlas.en-us.apexref.meta/apexref/apex_class_schema_describecolorresult.htm)
- getContext() (atlas.en-us.apexref.meta/apexref/apex_class_schema_describecolorresult.htm)
- getTheme() (atlas.en-us.apexref.meta/apexref/apex_class_schema_describecolorresult.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
