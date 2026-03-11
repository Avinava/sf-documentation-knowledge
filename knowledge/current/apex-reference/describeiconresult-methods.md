---
title: "DescribeIconResult Methods"
domain: apex-reference
topic: describeiconresult-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.022Z
keywords: [DescribeIconResult, Methods, Returns, tab, icon’s, content, type, such, image, png., getContentType, Signature, Return, Value, getHeight, Usage, Note, getTheme, getUrl, getWidth]
---

# DescribeIconResult Methods

> Returns the tab icon’s content type, such as image/png.

## DescribeIconResult Methods

The following are methods for DescribeIconResult. All are instance methods.

-   **[getContentType()](atlas.en-us.apexref.meta/apexref/apex_class_schema_describeiconresult.htm#apex_Schema_DescribeIconResult_getContentType)**  
    Returns the tab icon’s content type, such as image/png.
-   **[getHeight()](atlas.en-us.apexref.meta/apexref/apex_class_schema_describeiconresult.htm#apex_Schema_DescribeIconResult_getHeight)**  
    Returns the tab icon’s height in pixels.
-   **[getTheme()](atlas.en-us.apexref.meta/apexref/apex_class_schema_describeiconresult.htm#apex_Schema_DescribeIconResult_getTheme)**  
    Returns the tab’s icon theme.
-   **[getUrl()](atlas.en-us.apexref.meta/apexref/apex_class_schema_describeiconresult.htm#apex_Schema_DescribeIconResult_getUrl)**  
    Returns the tab’s icon fully qualified URL.
-   **[getWidth()](atlas.en-us.apexref.meta/apexref/apex_class_schema_describeiconresult.htm#apex_Schema_DescribeIconResult_getWidth)**  
    Returns the tab’s icon width in pixels.

### getContentType()

Returns the tab icon’s content type, such as image/png.

#### Signature

public String getContentType()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getHeight()

Returns the tab icon’s height in pixels.

#### Signature

public Integer getHeight()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Usage

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

If the icon content type is SVG, the icon won’t have a size and its height is zero.

### getTheme()

Returns the tab’s icon theme.

#### Signature

public String getTheme()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Possible theme values include theme3, theme4, and custom.

-   theme3 is the Salesforce theme introduced during Spring ‘10.
-   theme4 is the Salesforce theme introduced in Winter ‘14 for the mobile touchscreen version of Salesforce.
-   custom is the theme name associated with a custom icon.

### getUrl()

Returns the tab’s icon fully qualified URL.

#### Signature

public String getUrl()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getWidth()

Returns the tab’s icon width in pixels.

#### Signature

public Integer getWidth()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Usage

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

If the icon content type is SVG, the icon won’t have a size and its width is zero.