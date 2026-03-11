---
title: "DescribeTabResult Methods"
domain: apex-reference
topic: describetabresult-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.028Z
keywords: [DescribeTabResult, Methods, Returns, list, color, metadata, information, colors, associated, tab., theme, context., getColors, Signature, Return, Value, getIconUrl, getIcons, getLabel, getMiniIconUrl]
---

# DescribeTabResult Methods

> Returns a list of color metadata information for all colors
associated with this tab. Each color is associated with a theme and
context.

## DescribeTabResult Methods

The following are methods for DescribeTabResult. All are instance methods.

-   **[getColors()](atlas.en-us.apexref.meta/apexref/apex_class_schema_describetabresult.htm#apex_Schema_DescribeTabResult_getColors)**  
    Returns a list of color metadata information for all colors associated with this tab. Each color is associated with a theme and context.
-   **[getIconUrl()](atlas.en-us.apexref.meta/apexref/apex_class_schema_describetabresult.htm#apex_Schema_DescribeTabResult_getIconUrl)**  
    Returns the URL for the main 32 x 32-pixel icon for a tab. This icon corresponds to the current theme (theme3) and appears next to the heading at the top of most pages.
-   **[getIcons()](atlas.en-us.apexref.meta/apexref/apex_class_schema_describetabresult.htm#apex_Schema_DescribeTabResult_getIcons)**  
    Returns a list of icon metadata information for all icons associated with this tab. Each icon is associated with a theme and context.
-   **[getLabel()](atlas.en-us.apexref.meta/apexref/apex_class_schema_describetabresult.htm#apex_Schema_DescribeTabResult_getLabel)**  
    Returns the display label of this tab.
-   **[getMiniIconUrl()](atlas.en-us.apexref.meta/apexref/apex_class_schema_describetabresult.htm#apex_Schema_DescribeTabResult_getMiniIconUrl)**  
    Returns the URL for the 16 x 16-pixel icon that represents a tab. This icon corresponds to the current theme (theme3) and appears in related lists and other locations.
-   **[getSobjectName()](atlas.en-us.apexref.meta/apexref/apex_class_schema_describetabresult.htm#apex_Schema_DescribeTabResult_getSobjectName)**  
    Returns the name of the sObject that is primarily displayed on this tab (for tabs that display a particular SObject).
-   **[getUrl()](atlas.en-us.apexref.meta/apexref/apex_class_schema_describetabresult.htm#apex_Schema_DescribeTabResult_getUrl)**  
    Returns a fully qualified URL for viewing this tab.
-   **[isCustom()](atlas.en-us.apexref.meta/apexref/apex_class_schema_describetabresult.htm#apex_Schema_DescribeTabResult_isCustom)**  
    Returns true if this is a custom tab, or false if this is a standard tab.

### getColors()

Returns a list of color metadata information for all colors associated with this tab. Each color is associated with a theme and context.

#### Signature

public List<Schema.DescribeColorResult> getColors()

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Schema.DescribeColorResult](atlas.en-us.apexref.meta/apexref/apex_class_schema_describecolorresult.htm#apex_class_schema_describecolorresult "Contains color metadata information for a tab.")\>

### getIconUrl()

Returns the URL for the main 32 x 32-pixel icon for a tab. This icon corresponds to the current theme (theme3) and appears next to the heading at the top of most pages.

#### Signature

public String getIconUrl()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getIcons()

Returns a list of icon metadata information for all icons associated with this tab. Each icon is associated with a theme and context.

#### Signature

public List<Schema.DescribeIconResult> getIcons()

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Schema.DescribeIconResult](atlas.en-us.apexref.meta/apexref/apex_class_schema_describeiconresult.htm#apex_class_schema_describeiconresult "Contains icon metadata information for a tab.")\>

### getLabel()

Returns the display label of this tab.

#### Signature

public String getLabel()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getMiniIconUrl()

Returns the URL for the 16 x 16-pixel icon that represents a tab. This icon corresponds to the current theme (theme3) and appears in related lists and other locations.

#### Signature

public String getMiniIconUrl()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getSobjectName()

Returns the name of the sObject that is primarily displayed on this tab (for tabs that display a particular SObject).

#### Signature

public String getSobjectName()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getUrl()

Returns a fully qualified URL for viewing this tab.

#### Signature

public String getUrl()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### isCustom()

Returns true if this is a custom tab, or false if this is a standard tab.

#### Signature

public Boolean isCustom()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")