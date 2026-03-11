---
title: "DescribeColorResult Methods"
domain: apex-reference
topic: describecolorresult-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.015Z
keywords: [DescribeColorResult, Methods, Returns, Web, RGB, color, code, such, 00FF00., getColor, Signature, Return, Value, getContext, getTheme]
---

# DescribeColorResult Methods

> Returns the Web RGB color code, such as 00FF00.

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